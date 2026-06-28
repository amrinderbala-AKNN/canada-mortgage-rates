import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const bodyObj = { ...req.body };

    // Always use latest model
    bodyObj.model = "claude-sonnet-4-6";

    // Add betas header if tools (web search) are present
    const hasTools = bodyObj.tools && bodyObj.tools.length > 0;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    };

    if (hasTools) {
      headers["anthropic-beta"] = "web-search-2025-03-05";
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers,
      body: JSON.stringify(bodyObj),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Anthropic API error:", data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Anthropic proxy error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
