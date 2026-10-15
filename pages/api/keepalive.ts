import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ ok: false });
  }
  const url = process.env.SUPABASE_URL || "https://tmubktwrjtlkqoyasfrp.supabase.co";
  const key = process.env.SUPABASE_ANON_KEY;
  const r = await fetch(`${url}/rest/v1/reviews?select=id&limit=1`, {
    headers: { apikey: key!, Authorization: `Bearer ${key}` },
  });
  return res.status(r.ok ? 200 : 500).json({ ok: r.ok });
}
