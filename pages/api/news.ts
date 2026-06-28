import type { NextApiRequest, NextApiResponse } from "next";

// Cache news for 1 hour to avoid hammering Google News
const cache: { data: any; ts: number } | null = null;
let cachedNews: { data: any; ts: number } | null = null;

async function fetchRSS(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; NewsBot/1.0)" },
  });
  return res.text();
}

function parseRSSItems(xml: string): { title: string; url: string; date: string; source: string }[] {
  const items: { title: string; url: string; date: string; source: string }[] = [];
  const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];
  
  for (const item of itemMatches.slice(0, 20)) {
    const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
                  item.match(/<title>(.*?)<\/title>/)?.[1] || "";
    const link = item.match(/<link>(.*?)<\/link>/)?.[1] ||
                 item.match(/<feedburner:origLink>(.*?)<\/feedburner:origLink>/)?.[1] || "";
    const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
    const source = item.match(/<source[^>]*>(.*?)<\/source>/)?.[1] || 
                   item.match(/<name>(.*?)<\/name>/)?.[1] || "Canadian News";

    if (title && link) {
      // Format date
      const d = pubDate ? new Date(pubDate) : new Date();
      const dateStr = d.toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
      items.push({ title: title.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"), url: link, date: dateStr, source });
    }
  }
  return items;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prov = (req.query.prov as string) || "Canada";
  
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");

  // Check cache (1 hour)
  if (cachedNews && Date.now() - cachedNews.ts < 3600000) {
    return res.status(200).json(cachedNews.data);
  }

  try {
    // Fetch from multiple Google News RSS feeds
    const queries = [
      "Canadian+mortgage+rates+2026",
      "Bank+of+Canada+interest+rate",
      "Canada+real+estate+housing+market+2026",
      "Canada+first+time+home+buyer",
    ];

    const rssUrls = queries.map(q =>
      `https://news.google.com/rss/search?q=${q}&hl=en-CA&gl=CA&ceid=CA:en`
    );

    const results = await Promise.allSettled(rssUrls.map(url => fetchRSS(url)));
    
    let allItems: { title: string; url: string; date: string; source: string }[] = [];
    for (const result of results) {
      if (result.status === "fulfilled") {
        allItems.push(...parseRSSItems(result.value));
      }
    }

    // Deduplicate by title similarity
    const seen = new Set<string>();
    const unique = allItems.filter(item => {
      const key = item.title.toLowerCase().slice(0, 40);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 12);

    if (unique.length === 0) {
      return res.status(200).json({ items: [], fallback: true });
    }

    // Use Claude to categorize, summarize and add impact
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return res.status(200).json({ items: unique.map(i => ({ ...i, category: "News", summary: "", impact: "", impactType: "neutral" })) });

    const prompt = `Here are ${unique.length} Canadian mortgage and real estate news headlines. For each one, provide a JSON object with: category (one of: "BoC / Rates", "Market Update", "First-Time Buyers", "Policy / Government", "Mortgage Tips", "Local News"), summary (2 clear sentences explaining the story), impact (one sentence: what this means for Canadian homebuyers or homeowners), impactType ("positive", "negative", or "neutral" from a homebuyer perspective).

Headlines:
${unique.map((item, i) => `${i + 1}. ${item.title}`).join("\n")}

Return ONLY a JSON array of ${unique.length} objects with fields: index (1-based), category, summary, impact, impactType. Start with [ end with ].`;

    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const claudeData = await claudeRes.json();
    const text = claudeData.content?.find((b: any) => b.type === "text")?.text || "[]";
    const match = text.match(/\[[\s\S]*\]/);
    const enriched = match ? JSON.parse(match[0]) : [];

    // Merge RSS items with Claude enrichment
    const final = unique.map((item, i) => {
      const e = enriched.find((x: any) => x.index === i + 1) || {};
      return {
        title: item.title,
        url: item.url,
        date: item.date,
        source: item.source,
        category: e.category || "News",
        summary: e.summary || "",
        impact: e.impact || "",
        impactType: e.impactType || "neutral",
      };
    }).slice(0, 8);

    const payload = { items: final, fallback: false, fetchedAt: new Date().toISOString() };
    cachedNews = { data: payload, ts: Date.now() };
    return res.status(200).json(payload);

  } catch (err) {
    console.error("News API error:", err);
    return res.status(200).json({ items: [], fallback: true, error: String(err) });
  }
}
