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
    const body = JSON.parse(JSON.stringify(req.body));
    body.model = "claude-sonnet-4-6";

    let messages = body.messages || [];
    const tools = body.tools;
    const system = body.system;
    const max_tokens = body.max_tokens || 1000;

    // Agentic loop — up to 5 turns to handle tool use
    for (let i = 0; i < 5; i++) {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens, system, messages, tools }),
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json(data);
      }

      // If stop_reason is end_turn or no tool use, return the response
      if (data.stop_reason === "end_turn" || !data.content?.some((b: any) => b.type === "tool_use")) {
        return res.status(200).json(data);
      }

      // Process tool results and continue
      messages = [
        ...messages,
        { role: "assistant", content: data.content },
        {
          role: "user",
          content: data.content
            .filter((b: any) => b.type === "tool_use")
            .map((b: any) => ({
              type: "tool_result",
              tool_use_id: b.id,
              content: b.input?.query ? `Search results for: ${b.input.query}` : "Tool executed",
            })),
        },
      ];
    }

    return res.status(500).json({ error: "Max turns reached" });
  } catch (error) {
    console.error("Anthropic proxy error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}