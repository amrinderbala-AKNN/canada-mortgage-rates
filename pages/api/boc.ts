import type { NextApiRequest, NextApiResponse } from "next";

// BoC Valet API series:
// V39079  = Target Overnight Rate
// V122530 = Prime Rate (chartered banks)
// V41552210 = CAD/USD exchange rate

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Cache for 1 hour — BoC only updates once per decision day
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");

  try {
    const [ratesRes, fxRes] = await Promise.all([
      fetch("https://www.bankofcanada.ca/valet/observations/V39079,V122530/json?recent=1"),
      fetch("https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?recent=1"),
    ]);

    const ratesData = await ratesRes.json();
    const fxData = await fxRes.json();

    const obs = ratesData?.observations?.[0];
    const fxObs = fxData?.observations?.[0];

    const overnight = obs?.V39079?.v ? parseFloat(obs.V39079.v) : 2.25;
    const prime = obs?.V122530?.v ? parseFloat(obs.V122530.v) : 4.45;
    const bankRate = overnight + 0.25;
    // BoC reports USD per CAD, flip to CAD per USD for display
    const cadUsd = fxObs?.FXUSDCAD?.v ? (1 / parseFloat(fxObs.FXUSDCAD.v)).toFixed(2) : "0.72";

    res.status(200).json({
      overnight: overnight.toFixed(2),
      prime: prime.toFixed(2),
      bankRate: bankRate.toFixed(2),
      cadUsd,
      asOf: obs?.d || new Date().toISOString().split("T")[0],
    });
  } catch (err) {
    // Fallback to known values if API fails
    res.status(200).json({
      overnight: "2.25",
      prime: "4.45",
      bankRate: "2.50",
      cadUsd: "0.72",
      asOf: "2026-06-10",
      fallback: true,
    });
  }
}
