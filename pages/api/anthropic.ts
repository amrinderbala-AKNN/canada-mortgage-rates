import type { NextApiRequest, NextApiResponse } from "next";

const RATE_LIMIT = 10;
const WINDOW_MS = 60 * 1000;
const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

setInterval(() => {
  const now = Date.now();
  ipMap.forEach((entry, ip) => { if (now > entry.resetAt) ipMap.delete(ip); });
}, 5 * 60 * 1000);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
  if (isRateLimited(ip)) return res.status(429).json({ error: "Too many requests. Please wait a moment." });

  const bodyStr = JSON.stringify(req.body);
  if (bodyStr.length > 20000) return res.status(413).json({ error: "Request too large." });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "API key not configured" });

  try {
    const bodyObj = { ...req.body };
    if (Array.isArray(bodyObj.messages)) {
      bodyObj.messages = bodyObj.messages.map((msg: { role: string; content: string }) => ({
        ...msg,
        content: typeof msg.content === "string" ? msg.content.replace(/<[^>]*>/g, "").slice(0, 2000) : msg.content,
      }));
    }
    bodyObj.model = "claude-sonnet-4-6";
    bodyObj.max_tokens = Math.min(bodyObj.max_tokens || 1000, 1000);
    const hasTools = bodyObj.tools && bodyObj.tools.length > 0;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    };
    if (hasTools) headers["anthropic-beta"] = "web-search-2025-03-05";
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers,
      body: JSON.stringify(bodyObj),
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Anthropic proxy error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
