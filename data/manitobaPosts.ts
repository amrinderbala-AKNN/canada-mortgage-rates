// Manitoba SEO posts for canadamortgagerates.net
// Drop-in compatible with the POSTS object in pages/blog/[slug].tsx
// All figures in tables are computed below from stated assumptions (see helpers).
// Facts are dated and sourced in each post. Nothing here is a live rate quote.

export type MbPost = {
  title: string;
  desc: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
};

const DATE = "November 13, 2026";
const BOC =
  "The Bank of Canada raised its overnight rate target by 0.25 percentage points to 2.50% on October 28, 2026.";

/* ---------- calculation helpers (Canadian fixed-rate convention: semi-annual compounding) ---------- */
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-CA");
const pct = (n: number) => n.toFixed(2) + "%";
const mRate = (annualPct: number) => Math.pow(1 + annualPct / 100 / 2, 2 / 12) - 1;
const pmt = (principal: number, annualPct: number, years: number) => {
  const r = mRate(annualPct);
  const n = years * 12;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
};
const bal = (principal: number, annualPct: number, years: number, monthsPaid: number) => {
  const r = mRate(annualPct);
  const p = pmt(principal, annualPct, years);
  return principal * Math.pow(1 + r, monthsPaid) - (p * (Math.pow(1 + r, monthsPaid) - 1)) / r;
};
// Manitoba land transfer tax schedule: gov.mb.ca/finance/other/landtransfertax.html
const ltt = (v: number) => {
  const b: [number, number, number][] = [
    [30000, 90000, 0.005],
    [90000, 150000, 0.01],
    [150000, 200000, 0.015],
    [200000, Infinity, 0.02],
  ];
  return b.reduce((t, [lo, hi, r]) => t + Math.max(0, Math.min(v, hi) - lo) * r, 0);
};

/* ---------- html helpers (match existing post styling) ---------- */
const TH = "padding:10px 12px;text-align:left;border:1px solid #e2e8f0;background:#0d2240;color:#fff";
const TD = "padding:10px 12px;border:1px solid #e2e8f0";
const tbl = (head: string[], rows: string[][]) =>
  `<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:15px"><thead><tr>${head
    .map((h) => `<th style="${TH}">${h}</th>`)
    .join("")}</tr></thead><tbody>${rows
    .map(
      (r, i) =>
        `<tr${i % 2 ? ' style="background:#f8fafc"' : ""}>${r.map((c) => `<td style="${TD}">${c}</td>`).join("")}</tr>`
    )
    .join("")}</tbody></table>`;
const note = (t: string) =>
  `<p style="font-size:13px;color:#64748b;margin:-6px 0 18px">${t}</p>`;
const callout = (t: string) =>
  `<div style="background:#fff7e6;border-left:4px solid #f5a623;padding:14px 18px;border-radius:6px;margin:20px 0">${t}</div>`;
const a = (slug: string, text: string) =>
  `<a href="/blog/${slug}" style="color:#2563eb;text-decoration:underline">${text}</a>`;

const TITLES: { [k: string]: string } = {
  "mortgage-renewal-rates-winnipeg-2026": "Mortgage Renewal in Winnipeg: What to Do Before Your Term Ends",
  "manitoba-credit-union-mortgage-rates-compared-2026": "Manitoba Credit Unions Compared: How to Shop Mortgages Across All 15",
  "steinbach-mortgage-rates-2026": "Steinbach Mortgage Guide: Local Credit Union vs Broker vs Bank",
  "brandon-mortgage-rates-2026": "Brandon Mortgage Guide: Market Snapshot and Lender Options",
  "manitoba-land-transfer-tax-2026": "Manitoba Land Transfer Tax: Rates and Worked Examples",
  "first-time-home-buyer-programs-manitoba-2026": "First-Time Home Buyer Programs in Manitoba: What Actually Applies",
  "mortgage-stress-test-manitoba-2026": "The Mortgage Stress Test in 2026: What You Must Qualify At",
  "fixed-vs-variable-mortgage-manitoba-2026": "Fixed vs Variable After the October 2026 Rate Hike",
  "mortgage-penalty-break-early-manitoba-2026": "Breaking a Mortgage Early: How Penalties Work, With Examples",
  "manitoba-credit-union-mergers-mortgage-members-2026": "Manitoba Credit Union Mergers: What They Mean for Mortgage Holders",
  "mortgage-rates-winnipeg-2026": "Mortgage Rates in Winnipeg 2026",
  "mortgage-rates-manitoba-2026": "Mortgage Rates in Manitoba 2026",
};
const related = (slugs: string[]) =>
  `<div style="background:#f4f6f9;border-radius:8px;padding:16px 20px;margin:28px 0"><strong>Related Articles</strong><ul style="margin:8px 0 0;padding-left:20px">${slugs
    .map((s) => `<li>${a(s, TITLES[s])}</li>`)
    .join("")}</ul></div>`;
const BIO = `<div style="display:flex;gap:14px;align-items:center;border-top:1px solid #e2e8f0;margin-top:28px;padding-top:18px"><div style="width:44px;height:44px;border-radius:50%;background:#0d2240;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">A</div><div><strong>Amrinder Bala, MBA, M.Eng.</strong><br><span style="font-size:13px;color:#64748b">Senior Consultant, CGI Inc. · Founder, Canada Mortgage Rates · Winnipeg, Manitoba</span></div></div>`;
const DISCLAIMER = `<p style="font-size:13px;color:#64748b">General information only, not mortgage, legal or tax advice. Figures in tables are illustrations built from the assumptions stated beside them, not lender offers. Confirm current rates, fees and eligibility with the lender or a licensed mortgage professional before you commit.</p>`;
const wrap = (body: string, rel: string[]) => body + related(rel) + DISCLAIMER + BIO;

/* ====================================================================== */
/* 1. Renewal — Winnipeg                                                   */
/* ====================================================================== */
const renew0 = 300000;
const oldRate = 2.0;
const oldPmt = pmt(renew0, oldRate, 25);
const renewBal = bal(renew0, oldRate, 25, 60);
const renewRows = [3.99, 4.49, 4.99].map((r) => {
  const p = pmt(renewBal, r, 20);
  return [pct(r), money(p), "+" + money(p - oldPmt), "+" + money((p - oldPmt) * 12)];
});

const p1: MbPost = {
  title: "Mortgage Renewal in Winnipeg: What to Do Before Your Term Ends (2026)",
  desc: "Renewing a Winnipeg mortgage in 2026? See the payment-shock math on a 5-year renewal, why the stress test usually does not apply, and a step-by-step renewal checklist.",
  category: "Renewal",
  date: DATE,
  readTime: "7 min read",
  content: wrap(
    `<h2>Why renewal needs its own plan</h2>
<p>Most Winnipeg homeowners who signed a 5-year term in the low-rate years are now facing a renewal at a materially higher rate. ${BOC} Whatever your lender sends you in the months before maturity is an opening offer, not a final price.</p>

<h2>What a renewal can do to your payment</h2>
<p>Here is a hypothetical, built so you can swap in your own numbers: a ${money(renew0)} mortgage, 25-year amortization, 5-year fixed at ${pct(oldRate)}. After 60 payments the balance is about ${money(renewBal)} with 20 years left. The original payment was ${money(oldPmt)} a month.</p>
${tbl(["New 5-yr rate (illustrative)", "New monthly payment", "Increase per month", "Increase per year"], renewRows)}
${note("Assumes semi-annual compounding (standard for Canadian fixed mortgages) and a 20-year remaining amortization. The renewal rates are scenarios, not current offers.")}
<p>The point is the size of the jump, roughly a quarter higher at the middle scenario. Run the same calculation with your actual balance before the renewal letter arrives so the number does not surprise you.</p>

<h2>The stress test usually does not apply to a straight switch</h2>
<p>OSFI's minimum qualifying rate page (modified January 29, 2026) says straight switches at renewal are not expected to be stress-tested, provided there is no increase to the amortization period or the loan amount. If you want to borrow more or stretch the amortization, expect to qualify again. See ${a("mortgage-stress-test-manitoba-2026", "how the stress test works")}.</p>

<h2>A renewal checklist</h2>
<ul>
<li><strong>Start early:</strong> get your current lender's offer, then ask for the lowest rate they would give to keep you, not the rate on the letter.</li>
<li><strong>Get at least two outside quotes:</strong> a broker and a credit union. A straight switch at maturity generally carries no prepayment penalty, but ask about discharge, legal and appraisal fees, since policies differ by lender.</li>
<li><strong>Compare the whole contract:</strong> prepayment privileges, how the lender calculates penalties, and portability. A 0.05% rate edge can be wiped out by a harsher penalty formula. See ${a("mortgage-penalty-break-early-manitoba-2026", "how penalties are calculated")}.</li>
<li><strong>Decide the term on purpose:</strong> shorter or variable terms are a bet on rates falling; a 5-year fixed buys certainty. See ${a("fixed-vs-variable-mortgage-manitoba-2026", "fixed vs variable")}.</li>
<li><strong>Consider whether to switch lenders:</strong> switching to a new lender means a full application with documents, so leave time.</li>
</ul>

<h2>Where Winnipeg borrowers can look</h2>
<p>The Manitoba Financial Services Agency register (as of February 1, 2026) lists these credit unions with Winnipeg head offices: Assiniboine, Belgian-Alliance, Cambrian, Me-Dian and Winnipeg Police. Membership rules differ, so check eligibility on each one's site. Our ${a("manitoba-credit-union-mortgage-rates-compared-2026", "credit union comparison guide")} covers what to ask each. For provincial context see ${a("mortgage-rates-winnipeg-2026", "mortgage rates in Winnipeg")}.</p>`,
    [
      "mortgage-rates-winnipeg-2026",
      "fixed-vs-variable-mortgage-manitoba-2026",
      "mortgage-penalty-break-early-manitoba-2026",
    ]
  ),
};

/* ====================================================================== */
/* 2. Credit unions compared                                               */
/* ====================================================================== */
const p2: MbPost = {
  title: "Manitoba Credit Unions Compared: How to Shop Mortgages Across All 15 (2026)",
  desc: "The 15 credit unions registered in Manitoba as of February 1, 2026, where they are headquartered, and a checklist for comparing their mortgages beyond the headline rate.",
  category: "Credit Unions",
  date: DATE,
  readTime: "7 min read",
  content: wrap(
    `<h2>Who is actually on the list</h2>
<p>The Manitoba Financial Services Agency's credit union register, dated February 1, 2026, lists 15 credit unions. Several names people still search for, such as Westoba, Caisse and Noventis, no longer appear as separate entries. See ${a("manitoba-credit-union-mergers-mortgage-members-2026", "what the mergers mean")}.</p>
${tbl(
  ["Credit union", "Head office (MFSA register)"],
  [
    ["Access Credit Union", "Rural Municipality of Stanley"],
    ["Assiniboine Credit Union", "Winnipeg"],
    ["Belgian-Alliance Credit Union", "Winnipeg"],
    ["Cambrian Credit Union", "Winnipeg"],
    ["Compass Credit Union", "Brandon"],
    ["Flin Flon Credit Union", "Flin Flon"],
    ["Fusion Credit Union", "Hamiota"],
    ["Me-Dian Credit Union of Manitoba", "Winnipeg"],
    ["Niverville Credit Union", "Niverville"],
    ["Rosenort Credit Union", "Rosenort"],
    ["Steinbach Credit Union", "Steinbach"],
    ["Stride Credit Union", "Portage la Prairie"],
    ["Sunrise Credit Union", "Brandon"],
    ["Swan Valley Credit Union", "Swan River"],
    ["Winnipeg Police Credit Union", "Winnipeg"],
  ]
)}
${note("Source: Manitoba Financial Services Agency, credit union register, as of February 1, 2026 (mbfinancialinstitutions.ca).")}

<h2>Size is not the same as price</h2>
<p>For scale, WOWA's credit union table (page dated June 29, 2026, most figures as of December 31, 2025) shows Cambrian at roughly 71,000 members and 11 branches, and Sunrise at roughly 35,000 members and 19 branches. Access describes itself as the second largest credit union in Manitoba with over 92,000 members and 26 service offices, though its page is undated. Larger does not mean cheaper: mortgage pricing depends on the product, your file and the day you ask.</p>

<h2>Why this page does not print a rate table</h2>
<p>Credit union posted rates are often not the rate you get, and several are quoted only after you apply or become a member. A table I could not verify at the time you read it would be worse than none. Use this page to decide who to ask, then request written quotes on the same terms from each.</p>

<h2>Ask each lender the same eight questions</h2>
<ul>
<li><strong>Rate and term:</strong> the exact 5-year fixed and variable rate you qualify for on your down payment and credit.</li>
<li><strong>Insured vs uninsured pricing:</strong> insured (under 20% down) and uninsured mortgages are priced differently.</li>
<li><strong>Penalty formula:</strong> 3 months' interest plus how they calculate interest rate differential, and which rate they compare against.</li>
<li><strong>Prepayment privileges:</strong> annual lump-sum percentage and payment increase options.</li>
<li><strong>Membership requirements:</strong> eligibility, minimum share purchase and whether you must bank there.</li>
<li><strong>Portability and assumability:</strong> can you move the mortgage if you sell.</li>
<li><strong>Renewal practice:</strong> how far ahead they send offers and whether they negotiate.</li>
<li><strong>Fees:</strong> appraisal, legal and registration charges, and who pays.</li>
</ul>

<h2>Credit union vs broker</h2>
<p>A credit union can only sell its own products. A broker can place you with multiple lenders, which helps if your income is non-standard. Get one broker quote and one or two direct credit union quotes so you can compare. See ${a("mortgage-rates-manitoba-2026", "Manitoba mortgage rates")} for the provincial overview.</p>`,
    [
      "manitoba-credit-union-mergers-mortgage-members-2026",
      "mortgage-rates-manitoba-2026",
      "mortgage-renewal-rates-winnipeg-2026",
    ]
  ),
};

/* ====================================================================== */
/* 3. Steinbach                                                            */
/* ====================================================================== */
const stP = 350000;
const stDown = 0.2;
const stLoan = stP * (1 - stDown);
const p3: MbPost = {
  title: "Steinbach Mortgage Guide: Local Credit Union vs Broker vs Bank (2026)",
  desc: "Buying or renewing in Steinbach? Compare a local credit union, broker and bank, see a worked payment and land transfer tax example, and know what to ask before you sign.",
  category: "Cities",
  date: DATE,
  readTime: "6 min read",
  content: wrap(
    `<h2>Your options in and around Steinbach</h2>
<p>Steinbach Credit Union is headquartered at 333 Main Street in Steinbach according to the Manitoba Financial Services Agency register (as of February 1, 2026). Nearby, the same register lists Niverville Credit Union (Niverville) and Rosenort Credit Union (Rosenort). Winnipeg-based credit unions and the national banks also lend here, and brokers can shop across lenders.</p>

<h2>What this page does and does not claim</h2>
<p>I could not verify a current Steinbach Credit Union rate sheet or a reliable local price statistic at publication, so this page does not quote either. What it gives you is a method you can apply with real quotes, and a worked example you can rerun.</p>

<h2>Worked example</h2>
<p>Assume a ${money(stP)} purchase with ${Math.round(stDown * 100)}% down (${money(stLoan)} mortgage) and a 25-year amortization.</p>
${tbl(
  ["5-yr rate (illustrative)", "Monthly payment"],
  [3.99, 4.49, 4.99].map((r) => [pct(r), money(pmt(stLoan, r, 25))])
)}
${note("Illustration only. Semi-annual compounding; payment excludes property tax, heat and insurance.")}
<p>Manitoba land transfer tax on ${money(stP)} is about ${money(ltt(stP))} under the provincial schedule. See ${a("manitoba-land-transfer-tax-2026", "the full breakdown")}.</p>

<h2>Small-city details to raise with any lender</h2>
<ul>
<li><strong>Property type:</strong> lenders can treat acreage, well and septic, or older homes differently. Ask early, before you make an offer with a financing condition.</li>
<li><strong>Appraisal:</strong> confirm who orders it, the cost, and what happens if it comes in under the price.</li>
<li><strong>Membership:</strong> credit unions typically require you to become a member; ask what that costs.</li>
<li><strong>Service vs price:</strong> a local lender may know the market; a broker may find a lower rate. Get both in writing.</li>
</ul>

<h2>Renewing in Steinbach</h2>
<p>The same renewal rules apply as in the rest of Canada: a straight switch at maturity is not expected to be stress-tested if the amount and amortization do not increase (OSFI). Start with ${a("mortgage-renewal-rates-winnipeg-2026", "our renewal checklist")}, which works anywhere in Manitoba. For current local estimates see the <a href="/mortgage-rates/manitoba/steinbach" style="color:#2563eb;text-decoration:underline">Steinbach rates and price page</a>.</p>`,
    [
      "manitoba-land-transfer-tax-2026",
      "manitoba-credit-union-mortgage-rates-compared-2026",
      "mortgage-rates-manitoba-2026",
    ]
  ),
};

/* ====================================================================== */
/* 4. Brandon                                                              */
/* ====================================================================== */
const brP = 275000;
const brLoan = brP * 0.9;
const p4: MbPost = {
  title: "Brandon Mortgage Guide: Market Snapshot and Lender Options (2026)",
  desc: "Brandon housing activity for Q3 2026 from CREA, the credit unions headquartered in Brandon, and a worked mortgage payment example.",
  category: "Cities",
  date: DATE,
  readTime: "6 min read",
  content: wrap(
    `<h2>Brandon market snapshot (Q3 2026)</h2>
<p>CREA's board-level statistics for the Brandon area show the following for the third quarter of 2026 compared with the third quarter of 2025:</p>
${tbl(
  ["Measure", "Q3 2026", "Change vs Q3 2025"],
  [
    ["Residential sales", "234 units", "down 6.8%"],
    ["Single-detached sales", "160 units", "down 15 sales (about 8.6%)"],
  ]
)}
${note("Source: CREA Stats, Brandon residential activity and sales by category (creastats.crea.ca). I found no verified average price, new-listings or inventory figures for this period, so none are shown.")}
<p>Lower sales volume does not by itself tell you whether prices are rising or falling. Look at sold prices for the property type you want rather than a headline average.</p>

<h2>Lenders headquartered in Brandon</h2>
<p>The Manitoba Financial Services Agency register (as of February 1, 2026) lists two credit unions with head offices in Brandon: Compass Credit Union and Sunrise Credit Union. WOWA's table (data mostly as of December 31, 2025) shows Sunrise with about 35,000 members and 19 branches. Other credit unions, banks and brokers also serve Brandon. See ${a("manitoba-credit-union-mortgage-rates-compared-2026", "how to compare them")}.</p>

<h2>Worked example</h2>
<p>A ${money(brP)} home with 10% down (${money(brLoan)} mortgage; before any default-insurance premium, which would be added to the loan), 25-year amortization:</p>
${tbl(
  ["5-yr rate (illustrative)", "Monthly payment"],
  [3.99, 4.49, 4.99].map((r) => [pct(r), money(pmt(brLoan, r, 25))])
)}
${note("Illustration only; the price is a round number chosen for the example and is not a Brandon average.")}
<p>Under 20% down, your mortgage must be insured and the premium is added to the loan. Ask the lender for the exact figure. Land transfer tax on ${money(brP)} is about ${money(ltt(brP))}.</p>

<h2>Before you make an offer</h2>
<ul>
<li>Get a pre-approval and ask how long the rate is held.</li>
<li>Confirm the lender's rules for the property type, such as older homes or acreage.</li>
<li>Budget for closing costs and the ${a("manitoba-land-transfer-tax-2026", "land transfer tax")}.</li>
<li>Check the ${a("first-time-home-buyer-programs-manitoba-2026", "federal first-time buyer programs")} if this is your first purchase.</li>
<li>Local estimates: <a href="/mortgage-rates/manitoba/brandon" style="color:#2563eb;text-decoration:underline">Brandon rates and price page</a>.</li>
</ul>`,
    [
      "manitoba-credit-union-mortgage-rates-compared-2026",
      "first-time-home-buyer-programs-manitoba-2026",
      "mortgage-rates-manitoba-2026",
    ]
  ),
};

/* ====================================================================== */
/* 5. Land transfer tax                                                    */
/* ====================================================================== */
const lttPrices = [250000, 300000, 350000, 400000, 500000, 600000];
const p5: MbPost = {
  title: "Manitoba Land Transfer Tax: Rates and Worked Examples (2026)",
  desc: "Manitoba's land transfer tax schedule from the provincial government, with worked examples at six price points and what to check on first-time buyer relief.",
  category: "Buying",
  date: DATE,
  readTime: "5 min read",
  content: wrap(
    `<h2>The schedule</h2>
<p>The Government of Manitoba charges land transfer tax on the fair market value of the property at the date of registration. The province's page gives this schedule:</p>
${tbl(
  ["Portion of value", "Rate"],
  [
    ["First $30,000", "0%"],
    ["$30,001 to $90,000", "0.5%"],
    ["$90,001 to $150,000", "1.0%"],
    ["$150,001 to $200,000", "1.5%"],
    ["Over $200,000", "2.0%"],
  ]
)}
${note("Source: gov.mb.ca/finance/other/landtransfertax.html. The tax applies to each portion of the value, like income tax brackets, not to the whole price.")}

<h2>Worked examples</h2>
${tbl(
  ["Purchase price", "Land transfer tax", "As % of price"],
  lttPrices.map((v) => [money(v), money(ltt(v)), ((ltt(v) / v) * 100).toFixed(2) + "%"])
)}
<p>The first $200,000 always costs ${money(ltt(200000))}. Every dollar above that adds 2 cents.</p>

<h2>Is there a first-time buyer rebate?</h2>
<p>The provincial page I reviewed lists no first-time buyer relief and no new-home relief. If you see a source claiming a Manitoba first-time buyer land transfer tax rebate, check it against the province's page and ask your lawyer before relying on it. Federal programs are separate: see ${a("first-time-home-buyer-programs-manitoba-2026", "first-time buyer programs")}.</p>

<h2>Other closing costs to budget</h2>
<ul>
<li><strong>Registration fee:</strong> the province says a registration fee is payable on registration of the transfer; the amount is not stated on that page, so ask your lawyer or Teranet Manitoba (1-844-737-5684).</li>
<li><strong>Legal fees, title insurance, appraisal and adjustments</strong> vary by file.</li>
<li><strong>Default insurance premium</strong> if you put down less than 20%, added to the mortgage.</li>
</ul>
<p>Treat the numbers above as the tax only. Your lawyer's statement of adjustments is the figure you will actually pay.</p>`,
    [
      "first-time-home-buyer-programs-manitoba-2026",
      "mortgage-stress-test-manitoba-2026",
      "mortgage-rates-manitoba-2026",
    ]
  ),
};

/* ====================================================================== */
/* 6. First-time buyer programs                                            */
/* ====================================================================== */
const p6: MbPost = {
  title: "First-Time Home Buyer Programs in Manitoba: What Actually Applies (2026)",
  desc: "The federal programs available to Manitoba first-time buyers: the $1,500 tax credit, the FHSA ($8,000 a year, $40,000 lifetime) and the RRSP Home Buyers' Plan, plus what Manitoba's land transfer tax page says.",
  category: "Buying",
  date: DATE,
  readTime: "7 min read",
  content: wrap(
    `<h2>Start with what is verified</h2>
<p>Most first-time buyer help available to Manitobans is federal. The provincial land transfer tax page I reviewed lists no first-time buyer relief (${a("manitoba-land-transfer-tax-2026", "details here")}), so budget for that tax in full.</p>

<h2>1. First-Time Home Buyers' Tax Credit</h2>
<p>For 2022 and later tax years, the CRA's page says the amount used to calculate the credit is $10,000, giving a maximum credit of up to $1,500 (the amount multiplied by the lowest personal income tax rate, 15% in 2022). It is a non-refundable credit claimed on your tax return for the year of purchase.</p>

<h2>2. First Home Savings Account (FHSA)</h2>
<p>From the CRA's FHSA pages:</p>
<ul>
<li><strong>Contribution room:</strong> $8,000 for the first year; later years are the lesser of $8,000 plus carryforward or the remaining lifetime room.</li>
<li><strong>Lifetime limit:</strong> $40,000.</li>
<li><strong>Carryforward:</strong> unused room carries forward, to a maximum of $8,000.</li>
<li><strong>Qualifying withdrawal:</strong> tax-free if you are a first-time home buyer for this purpose (you did not live in a home you owned in the current year, except the 30 days before the withdrawal, or the previous 4 calendar years), you have a written agreement to buy or build a qualifying home, you are a Canadian resident, you intend to occupy it as your principal residence within one year, and you file Form RC725 with your FHSA issuer.</li>
<li><strong>No minimum holding time</strong> is required before a qualifying withdrawal.</li>
<li><strong>Closing:</strong> all FHSAs must be closed by December 31 of the year after the first qualifying withdrawal.</li>
</ul>
<p>Sources: CRA FHSA pages, last modified between February and September 2026.</p>

<h2>3. RRSP Home Buyers' Plan</h2>
<p>The HBP lets you withdraw from your RRSP toward a first home and repay it over time. The limit commonly cited is $60,000 per person with repayment over 15 years, but I could not load the CRA page to confirm at publication. Check canada.ca for the current limit and repayment start before you plan around it.</p>
${callout("<strong>Combining FHSA and HBP:</strong> the programs are separate, so some buyers use both. Confirm current rules on the CRA's pages before relying on that.")}

<h2>What is unconfirmed</h2>
<p>You may see references to new federal GST relief for first-time buyers of new homes. I could not confirm its status from an official source, so check canada.ca before counting on it.</p>

<h2>How a lender sees your down payment</h2>
<p>Lenders will want to see where the down payment came from. Savings in an FHSA or an RRSP withdrawal both leave a paper trail. Ask your lender what documentation they need. Then see ${a("mortgage-stress-test-manitoba-2026", "the stress test")}, which is the other big hurdle.</p>`,
    [
      "manitoba-land-transfer-tax-2026",
      "mortgage-stress-test-manitoba-2026",
      "mortgage-rates-manitoba-2026",
    ]
  ),
};

/* ====================================================================== */
/* 7. Stress test                                                          */
/* ====================================================================== */
const stLoan2 = 400000;
const p7: MbPost = {
  title: "The Mortgage Stress Test in 2026: What You Must Qualify At",
  desc: "OSFI's minimum qualifying rate for uninsured mortgages is the greater of your contract rate plus 2% or 5.25%. See worked payments, who is exempt, and how it shapes what you can borrow.",
  category: "Qualifying",
  date: DATE,
  readTime: "6 min read",
  content: wrap(
    `<h2>The rule</h2>
<p>OSFI's page on the minimum qualifying rate for uninsured mortgages (modified January 29, 2026) states the rate as "the greater of the mortgage contract rate plus 2% or 5.25%." The 2% buffer and 5.25% floor are described as currently set, and OSFI says it reviews them at least annually. Lenders apply the test to most newly underwritten residential mortgages.</p>

<h2>What it does to your qualifying payment</h2>
<p>Illustration on a ${money(stLoan2)} mortgage with a 25-year amortization:</p>
${tbl(
  ["Contract rate", "Qualifying rate", "Payment you actually make", "Payment you must qualify at"],
  [3.0, 3.99, 4.49, 4.99].map((r) => {
    const q = Math.max(r + 2, 5.25);
    return [pct(r), pct(q), money(pmt(stLoan2, r, 25)), money(pmt(stLoan2, q, 25))];
  })
)}
${note("Illustrative contract rates. Semi-annual compounding. Qualification also depends on your income, debts and the lender's own limits, not payment size alone.")}
<p>At a ${pct(3.0)} contract rate the 5.25% floor applies, so the floor, not the buffer, drives qualification. At rates from 3.25% up, the +2% buffer is what matters.</p>

<h2>Who is exempt</h2>
<p>OSFI says straight switches at renewal are not expected to be stress-tested if there is no increase in amortization or loan amount. That makes a lender-to-lender switch easier than a new purchase. See ${a("mortgage-renewal-rates-winnipeg-2026", "renewal planning")}.</p>

<h2>How to improve your position</h2>
<ul>
<li><strong>Pay down other debts:</strong> credit cards and loans eat into the qualifying room.</li>
<li><strong>Add a co-borrower</strong> if appropriate; their income and debts are assessed too.</li>
<li><strong>Increase the down payment</strong> to reduce the loan.</li>
<li><strong>Shop lenders:</strong> some apply their own, stricter tests; ask each how they qualify you.</li>
</ul>`,
    [
      "first-time-home-buyer-programs-manitoba-2026",
      "mortgage-renewal-rates-winnipeg-2026",
      "fixed-vs-variable-mortgage-manitoba-2026",
    ]
  ),
};

/* ====================================================================== */
/* 8. Fixed vs variable                                                    */
/* ====================================================================== */
const fvLoan = 350000;
const fvRates = [4.15, 4.4, 4.65, 4.9, 5.15];
const p8: MbPost = {
  title: "Fixed vs Variable After the October 2026 Rate Hike (Manitoba Guide)",
  desc: "The Bank of Canada raised its rate to 2.50% on October 28, 2026. See what that means for fixed vs variable mortgages with a worked payment example for Manitoba borrowers.",
  category: "Rates",
  date: DATE,
  readTime: "6 min read",
  content: wrap(
    `<h2>What changed</h2>
<p>${BOC} That ended a hold at 2.25%. Variable-rate mortgages are priced off lender prime, which moves with the Bank of Canada's policy rate, so variable holders feel changes first. Fixed rates track bond yields and are priced when you sign.</p>

<h2>Two kinds of variable</h2>
<ul>
<li><strong>Adjustable-rate:</strong> the payment changes whenever the lender's prime rate changes.</li>
<li><strong>Variable-rate with fixed payment:</strong> the payment stays the same while more or less goes to interest. If rates rise far enough, you can reach a trigger point where the payment no longer covers the interest. Ask what yours is.</li>
</ul>

<h2>Worked comparison</h2>
<p>A ${money(fvLoan)} mortgage, 25-year amortization. Suppose a 5-year fixed at ${pct(4.49)} (illustrative) and a variable that starts at ${pct(fvRates[0])} (illustrative). If the variable rate rises:</p>
${tbl(
  ["Scenario", "Rate", "Monthly payment", "vs fixed " + money(pmt(fvLoan, 4.49, 25))],
  [
    ["Fixed", pct(4.49), money(pmt(fvLoan, 4.49, 25)), "–"],
    ...fvRates.map((r, i) => {
      const d = pmt(fvLoan, r, 25) - pmt(fvLoan, 4.49, 25);
      return [i === 0 ? "Variable, today" : "Variable +" + (r - fvRates[0]).toFixed(2) + " pts", pct(r), money(pmt(fvLoan, r, 25)), (d >= 0 ? "+" : "–") + money(Math.abs(d))];
    }),
  ]
)}
${note("Illustration only. Real adjustable-rate mortgages reset on prime changes and real fixed payments depend on the lender's exact terms.")}
<p>The gap between the two payments is small in the first row and flips quickly if the variable rate climbs. The question is not which is cheaper today but whether you can absorb a higher payment if rates keep rising.</p>

<h2>How to decide</h2>
<ul>
<li><strong>Choose fixed</strong> if a payment increase of a few hundred dollars would strain your budget, or if you value certainty.</li>
<li><strong>Consider variable</strong> if you have slack in your budget and want lower penalties: variable mortgages usually carry a three-months'-interest penalty rather than the interest rate differential. See ${a("mortgage-penalty-break-early-manitoba-2026", "penalties explained")}.</li>
<li><strong>Remember the stress test:</strong> your qualifying rate depends on the contract rate you pick. See ${a("mortgage-stress-test-manitoba-2026", "stress test")}.</li>
</ul>
<p>Nobody, including the Bank of Canada, knows the next move. Choose the product you could live with if rates went the wrong way.</p>`,
    [
      "mortgage-penalty-break-early-manitoba-2026",
      "mortgage-stress-test-manitoba-2026",
      "mortgage-renewal-rates-winnipeg-2026",
    ]
  ),
};

/* ====================================================================== */
/* 9. Penalties                                                            */
/* ====================================================================== */
const penLoan = 300000;
const penRate = 4.49;
const threeMo = (penLoan * (penRate / 100)) / 4;
const penIrd = penLoan * 0.015 * 2;
const p9: MbPost = {
  title: "Breaking a Mortgage Early: How Penalties Work, With Examples (Manitoba)",
  desc: "How three-months'-interest and interest rate differential penalties work, with worked examples on a $300,000 mortgage and the questions to ask your lender in writing.",
  category: "Mortgage Basics",
  date: DATE,
  readTime: "6 min read",
  content: wrap(
    `<h2>The two penalty formulas</h2>
<p>When you pay off a closed mortgage before maturity, lenders typically charge the greater of two amounts: three months' interest, or the interest rate differential (IRD). Variable-rate mortgages usually charge three months' interest; fixed-rate mortgages charge whichever is greater. Your contract controls, so read it.</p>

<h2>Example 1: three months' interest</h2>
<p>Mortgage balance ${money(penLoan)}, rate ${pct(penRate)}. Three months' interest is the balance times the rate divided by four: about <strong>${money(threeMo)}</strong>.</p>

<h2>Example 2: a simple IRD</h2>
<p>If the lender's comparison rate is 1.50 percentage points below your rate and 2 years remain, the simplified IRD is ${money(penLoan)} × 1.50% × 2 = <strong>${money(penIrd)}</strong>. That is the greater of the two, so it would be the penalty.</p>
${tbl(
  ["Method", "Calculation", "Result"],
  [
    ["Three months' interest", `${money(penLoan)} × ${pct(penRate)} ÷ 4`, money(threeMo)],
    ["Simplified IRD", `${money(penLoan)} × 1.50% × 2 years`, money(penIrd)],
    ["Penalty charged (greater of the two)", "", money(Math.max(threeMo, penIrd))],
  ]
)}
${note("Simplified. Lenders define the comparison rate differently (some use the posted rate minus the discount you received, which can inflate the differential). Ask for the exact calculation in writing.")}

<h2>What to ask before you sign</h2>
<ul>
<li>Which rate do you compare against when calculating the IRD?</li>
<li>Is the discount I received subtracted from the posted rate?</li>
<li>What prepayment privileges do I have each year without penalty?</li>
<li>Is the mortgage portable if I sell and buy again?</li>
</ul>

<h2>Ways to reduce the cost</h2>
<ul>
<li><strong>Use prepayment privileges</strong> instead of breaking the mortgage.</li>
<li><strong>Port the mortgage</strong> to a new property where the contract allows it.</li>
<li><strong>Wait for maturity</strong> if you are close, since switching at maturity avoids prepayment penalties.</li>
</ul>
<p>See ${a("mortgage-renewal-rates-winnipeg-2026", "renewal planning")} and ${a("fixed-vs-variable-mortgage-manitoba-2026", "fixed vs variable")} for how this shapes your choice.</p>`,
    [
      "fixed-vs-variable-mortgage-manitoba-2026",
      "mortgage-renewal-rates-winnipeg-2026",
      "manitoba-credit-union-mortgage-rates-compared-2026",
    ]
  ),
};

/* ====================================================================== */
/* 10. Mergers                                                             */
/* ====================================================================== */
const p10: MbPost = {
  title: "Manitoba Credit Union Mergers: What They Mean for Mortgage Holders (2026)",
  desc: "Assiniboine, Caisse and Westoba voted to merge in 2024; Access, Noventis and Sunova merged in 2022. What was announced, what is unconfirmed, and what to check on your mortgage.",
  category: "Credit Unions",
  date: DATE,
  readTime: "5 min read",
  content: wrap(
    `<h2>Assiniboine, Caisse and Westoba</h2>
<p>According to Assiniboine Credit Union's announcements:</p>
<ul>
<li>Members approved the merger on <strong>June 19, 2024</strong>, with 89% of Assiniboine members, 84% of Caisse members and 88% of Westoba members voting in favour.</li>
<li>The combined entity was to be called <strong>Assiniboine Credit Union / Caisse Assiniboine</strong>, with either the English or French version usable.</li>
<li>It was expected to merge effective <strong>January 1, 2025</strong>, after obtaining all necessary approvals. The pages I reviewed did not confirm completion on that date.</li>
<li>The combined credit union was described as having 216,000 members, about $9.6 billion in assets and 50 branches.</li>
</ul>
<p>Separately, the Manitoba Financial Services Agency register dated February 1, 2026 lists Assiniboine but no longer lists Westoba or Caisse as separate credit unions. That is consistent with the merger having gone ahead, though you should confirm with your credit union.</p>

<h2>Access, Noventis and Sunova</h2>
<p>Access Credit Union's announcement says that after member votes on January 27, 2022, the three became one entity known as Access Credit Union effective <strong>July 1, 2022</strong>, with more than $10 billion in assets, over 168,000 members and 52 branch locations at the time. The same page describes current Access figures (over 92,000 members, 26 service offices) that are undated, so treat the two sets of numbers as different snapshots.</p>

<h2>What I could not confirm</h2>
<ul>
<li>What happens to Westoba or Caisse mortgage products, rate sheets or branding after the merger. None of the pages I reviewed said.</li>
<li>Membership eligibility rules for the merged credit unions. Check each one's "join" page.</li>
</ul>

<h2>What to check if you hold a mortgage with a merged credit union</h2>
<ul>
<li><strong>Your contract still stands.</strong> Amalgamation generally carries existing obligations forward, but confirm with the lender.</li>
<li><strong>Look for a notice</strong> about new servicing details, payment accounts or online banking changes.</li>
<li><strong>At renewal,</strong> compare the merged entity's offer against outside quotes as usual. See ${a("mortgage-renewal-rates-winnipeg-2026", "renewal planning")}.</li>
</ul>

<h2>Shopping the rest of the field</h2>
<p>With 15 credit unions on the current register, there is still a lot of choice. See ${a("manitoba-credit-union-mortgage-rates-compared-2026", "our comparison guide")} for the full list and what to ask each.</p>`,
    [
      "manitoba-credit-union-mortgage-rates-compared-2026",
      "mortgage-renewal-rates-winnipeg-2026",
      "mortgage-rates-manitoba-2026",
    ]
  ),
};

/* ---------- exports ---------- */
export const MB_POSTS: { [slug: string]: MbPost } = {
  "mortgage-renewal-rates-winnipeg-2026": p1,
  "manitoba-credit-union-mortgage-rates-compared-2026": p2,
  "steinbach-mortgage-rates-2026": p3,
  "brandon-mortgage-rates-2026": p4,
  "manitoba-land-transfer-tax-2026": p5,
  "first-time-home-buyer-programs-manitoba-2026": p6,
  "mortgage-stress-test-manitoba-2026": p7,
  "fixed-vs-variable-mortgage-manitoba-2026": p8,
  "mortgage-penalty-break-early-manitoba-2026": p9,
  "manitoba-credit-union-mergers-mortgage-members-2026": p10,
};

export const MB_SLUGS = Object.keys(MB_POSTS);
