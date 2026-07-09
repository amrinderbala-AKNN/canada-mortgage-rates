import type { NextApiRequest, NextApiResponse } from "next";

// BoC announcement dates for 2026 — update yearly
const BOC_DATES_2026 = [
  "2026-01-29", "2026-03-12", "2026-04-16",
  "2026-06-04", "2026-07-15", "2026-09-09",
  "2026-10-28", "2026-12-09"
];

function getLastAndNext() {
  const today = new Date();
  const dates = BOC_DATES_2026.map(d => new Date(d));
  let last = dates[0], next = dates[dates.length - 1];
  for (const d of dates) {
    if (d <= today) last = d;
    else { next = d; break; }
  }
  const fmt = (d: Date) => d.toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
  return { last: fmt(last), next: fmt(next) };
}

let cache: { data: any; ts: number } | null = null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");

  if (cache && Date.now() - cache.ts < 3600000) {
    return res.status(200).json(cache.data);
  }

  const { last, next } = getLastAndNext();

  try {
    // Fetch overnight rate, prime rate, inflation, CAD/USD from BoC Valet API
    const [ratesRes, fxRes, inflRes] = await Promise.allSettled([
      fetch("https://www.bankofcanada.ca/valet/observations/V39079,V122530,V80691256/json?recent=1"),
      fetch("https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?recent=1"),
      fetch("https://www.bankofcanada.ca/valet/observations/V41690973/json?recent=1"),
    ]);

    let overnight = "2.25", prime = "4.45", bankRate = "2.50", cadusd = "0.72", inflation = "2.8";

    if (ratesRes.status === "fulfilled") {
      const d = await ratesRes.value.json();
      const obs = d?.observations?.[0];
      if (obs?.V39079?.v) overnight = parseFloat(obs.V39079.v).toFixed(2);
      if (obs?.V122530?.v) prime = parseFloat(obs.V122530.v).toFixed(2);
      if (obs?.V80691256?.v) bankRate = parseFloat(obs.V80691256.v).toFixed(2);
    }

    if (fxRes.status === "fulfilled") {
      const d = await fxRes.value.json();
      const obs = d?.observations?.[0];
      if (obs?.FXUSDCAD?.v) {
        const rate = parseFloat(obs.FXUSDCAD.v);
        cadusd = (1 / rate).toFixed(2);
      }
    }

    if (inflRes.status === "fulfilled") {
      const d = await inflRes.value.json();
      const obs = d?.observations?.[0];
      if (obs?.V41690973?.v) inflation = parseFloat(obs.V41690973.v).toFixed(1);
    }

    // Calculate variable and fixed rates from prime
    const primeNum = parseFloat(prime);
    const variable = (primeNum - 1.10).toFixed(2);
    const fixed5yr = (primeNum + 0.44).toFixed(2);
    const fixed3yr = (primeNum + 0.24).toFixed(2);
    const fixed1yr = (primeNum + 0.04).toFixed(2);

    const data = {
      overnight, prime, bankRate, cadusd, inflation,
      lastDecision: last, nextAnnouncement: next,
      variable, fixed5yr, fixed3yr, fixed1yr,
      items: [
        { label: "Overnight Rate", value: overnight + "%", change: "hold" },
        { label: "Prime Rate", value: prime + "%", change: "hold" },
        { label: "Bank Rate", value: bankRate + "%", change: "hold" },
        { label: "Inflation", value: inflation + "%", change: "up" },
        { label: "Last Decision", value: "Hold — " + last, change: "hold" },
        { label: "Next Announcement", value: next, change: "hold" },
        { label: "Variable Rate", value: "~" + variable + "%", change: "hold" },
        { label: "5-yr Fixed", value: "~" + fixed5yr + "%", change: "hold" },
        { label: "CAD/USD", value: "~" + cadusd, change: "hold" },
      ]
    };

    cache = { data, ts: Date.now() };
    return res.status(200).json(data);

  } catch (err) {
    // Fallback to known values
    const fallback = {
      overnight, prime, bankRate, cadusd, inflation,
      lastDecision: last, nextAnnouncement: next,
      variable: "3.35", fixed5yr: "4.89", fixed3yr: "4.69", fixed1yr: "4.49",
      items: [
        { label: "Overnight Rate", value: "2.25%", change: "hold" },
        { label: "Prime Rate", value: "4.45%", change: "hold" },
        { label: "Bank Rate", value: "2.50%", change: "hold" },
        { label: "Inflation", value: "2.8%", change: "up" },
        { label: "Last Decision", value: "Hold — " + last, change: "hold" },
        { label: "Next Announcement", value: next, change: "hold" },
        { label: "Variable Rate", value: "~3.35%", change: "hold" },
        { label: "5-yr Fixed", value: "~4.89%", change: "hold" },
        { label: "CAD/USD", value: "~0.72", change: "hold" },
      ]
    };
    cache = { data: fallback, ts: Date.now() };
    return res.status(200).json(fallback);
  }
}
