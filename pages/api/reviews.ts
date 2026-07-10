import type { NextApiRequest, NextApiResponse } from "next";

const SUPABASE_URL = "https://tmubktwrjtlkqoyasfrp.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/reviews?select=*&order=created_at.desc&limit=20`, {
      headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
    });
    const data = await r.json();
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { name, city, role, rating, text } = req.body;
    if (!name || !text || name.length > 60 || text.length > 500 || text.length < 20) {
      return res.status(400).json({ error: "Invalid input" });
    }
    const r = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify({ name, city: city||"", role: role||"", rating: rating||5, text })
    });
    const data = await r.json();
    return res.status(201).json(data);
  }

  res.status(405).json({ error: "Method not allowed" });
}
