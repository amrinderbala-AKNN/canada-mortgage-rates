import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

const categoryColors:{[k:string]:string} = {
  "Rates":"#c8102e","Qualifying":"#7c3aed","First-Time Buyers":"#16a34a",
  "Renewal":"#0891b2","CMHC":"#92400e","Market":"#2563eb","Tips":"#0d2240"
};

const POSTS:{[k:string]:{title:string,desc:string,category:string,date:string,readTime:string,content:string}} = {
  "best-mortgage-rates-canada-2026":{
    title:"Best Mortgage Rates in Canada — June 2026",
    desc:"The Bank of Canada held at 2.25% for the fifth time. Here's what that means for fixed and variable rates across Canada.",
    category:"Rates",date:"June 28, 2026",readTime:"5 min read",
    content:`<h2>Bank of Canada Holds at 2.25%</h2>
<p>On June 10, 2026, the Bank of Canada held its overnight rate at 2.25% for the fifth consecutive decision. With Prime Rate at 4.45%, here's where mortgage rates currently stand across Canada.</p>
<h2>Current Best Mortgage Rates (June 2026)</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Term</th><th style="padding:10px;text-align:right;">Best Rate</th><th style="padding:10px;text-align:right;">Where to Find It</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;font-weight:700;color:#16a34a;">3.25–3.45%</td><td style="padding:10px;text-align:right;">Online lenders, brokers</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">1-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.49%</td><td style="padding:10px;text-align:right;">Credit unions</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">3-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.69%</td><td style="padding:10px;text-align:right;">Online lenders</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.84%</td><td style="padding:10px;text-align:right;">Brokers, credit unions</td></tr>
</table>
<h2>How to Get the Best Rate</h2>
<ul>
<li><strong>Use a mortgage broker</strong> — they compare 30+ lenders and are free to use (paid by the lender)</li>
<li><strong>Check credit unions</strong> — often 0.25–0.50% below major banks</li>
<li><strong>Get pre-approved</strong> — locks in your rate for 90–120 days while you shop</li>
<li><strong>Negotiate</strong> — your lender's first offer is rarely their best</li>
</ul>
<h2>Fixed vs Variable: What Makes Sense Now?</h2>
<p>With variable rates roughly 1.5% below 5-year fixed, variable is attractively priced. However, if rates rise 1.5% or more, variable becomes more expensive. Most economists expect the BoC to hold through summer with possible cuts in Q4 2026.</p>
<p><strong>Our take:</strong> Variable makes sense for buyers with financial flexibility. Fixed makes sense for buyers who need payment certainty or are at the top of their budget.</p>`
  },
  "how-to-pass-mortgage-stress-test-canada":{
    title:"How to Pass Canada's Mortgage Stress Test in 2026",
    desc:"The stress test requires qualifying at rate + 2% or 5.25%. Here's how it works and 5 ways to qualify for more.",
    category:"Qualifying",date:"June 25, 2026",readTime:"6 min read",
    content:`<h2>What is the Mortgage Stress Test?</h2>
<p>Canada's mortgage stress test requires all borrowers at federally regulated lenders to qualify at the higher of their contracted rate + 2%, or 5.25%. This reduces your maximum purchase price by approximately 15–20%.</p>
<h2>How It's Calculated</h2>
<p>If your lender offers you 4.89%, you must prove you could afford payments at <strong>6.89%</strong> (4.89% + 2%). Your monthly payment at 6.89% must still fit within the GDS and TDS ratio limits.</p>
<ul>
<li><strong>GDS (Gross Debt Service) — max 39%:</strong> Housing costs ÷ gross monthly income</li>
<li><strong>TDS (Total Debt Service) — max 44%:</strong> All debts ÷ gross monthly income</li>
<li><strong>Heat:</strong> Lenders add $150/month regardless of your actual bill</li>
</ul>
<h2>5 Ways to Qualify for More</h2>
<ol>
<li><strong>Add a co-borrower</strong> — Including a spouse or parent increases total income significantly</li>
<li><strong>Pay down debts</strong> — Every $200/mo eliminated adds ~$40,000 to your purchase price</li>
<li><strong>Increase your down payment</strong> — More down means a smaller mortgage to qualify</li>
<li><strong>Choose 30-year amortization</strong> — Available for first-time buyers of new builds</li>
<li><strong>Use a mortgage broker</strong> — Brokers access B-lenders with different qualifying criteria</li>
</ol>
<h2>Who Does the Stress Test Apply To?</h2>
<p>All federally regulated lenders (major banks, federal credit unions). Some provincial credit unions may use different rules. Private lenders don't use the stress test at all, but charge higher rates.</p>`
  },
  "fhsa-rrsp-home-buyers-plan-guide":{
    title:"FHSA + RRSP Home Buyers' Plan: The Complete Guide",
    desc:"Stack both programs to access up to $200K tax-free per couple for your first home down payment.",
    category:"First-Time Buyers",date:"June 22, 2026",readTime:"7 min read",
    content:`<h2>First Home Savings Account (FHSA)</h2>
<p>The FHSA is the best savings account ever created for Canadian first-time buyers. It combines RRSP tax deductions with TFSA tax-free withdrawals.</p>
<ul>
<li>Contribute up to <strong>$8,000/year</strong> (lifetime max $40,000 per person)</li>
<li>Contributions are <strong>tax-deductible</strong> — saves you $2,000–$4,000/yr in taxes at a 25–50% marginal rate</li>
<li>Withdrawals for a qualifying first home are <strong>completely tax-free</strong></li>
<li>Investment growth inside is tax-free</li>
<li>Unused room carries forward (miss a year? You can contribute $16K the next year)</li>
</ul>
<h2>RRSP Home Buyers' Plan (HBP)</h2>
<ul>
<li>Withdraw up to <strong>$60,000 per person</strong> from your RRSP tax-free</li>
<li>Funds must have been in RRSP for at least 90 days before withdrawal</li>
<li>Repay over 15 years starting 2 years after purchase</li>
</ul>
<h2>Stacking Both: Couple Example</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Program</th><th style="padding:10px;text-align:right;">Per Person</th><th style="padding:10px;text-align:right;">Per Couple</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">FHSA (max)</td><td style="padding:10px;text-align:right;">$40,000</td><td style="padding:10px;text-align:right;font-weight:700;">$80,000</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">RRSP HBP (max)</td><td style="padding:10px;text-align:right;">$60,000</td><td style="padding:10px;text-align:right;font-weight:700;">$120,000</td></tr>
<tr style="background:#f0fdf4;"><td style="padding:10px;font-weight:700;color:#15803d;">Total Combined</td><td style="padding:10px;text-align:right;font-weight:700;color:#15803d;">$100,000</td><td style="padding:10px;text-align:right;font-weight:800;color:#15803d;">$200,000</td></tr>
</table>
<h2>Start Now — Even Years Before Buying</h2>
<p>Open your FHSA immediately. Even if you're 5 years away from buying, you start accumulating $8K/year of contribution room now. You get the tax deduction every year you contribute, regardless of when you buy.</p>`
  },
  "fixed-vs-variable-mortgage-2026":{
    title:"Fixed vs Variable Mortgage in 2026 — Which Should You Choose?",
    desc:"Variable at ~3.35% vs 5-year fixed at ~4.89%. The spread is significant. Here's who should choose what.",
    category:"Rates",date:"June 20, 2026",readTime:"5 min read",
    content:`<h2>Current Rate Comparison (June 2026)</h2>
<p>The gap between variable and 5-year fixed is approximately <strong>1.5%</strong> — one of the largest spreads in recent years.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Type</th><th style="padding:10px;text-align:right;">Rate</th><th style="padding:10px;text-align:right;">Monthly (500K)</th><th style="padding:10px;text-align:right;">Break Penalty</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">~3.35%</td><td style="padding:10px;text-align:right;">~$2,460</td><td style="padding:10px;text-align:right;">3 months interest</td></tr>
<tr><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">~4.89%</td><td style="padding:10px;text-align:right;">~$2,870</td><td style="padding:10px;text-align:right;">IRD (can be large)</td></tr>
</table>
<h2>Choose Variable If...</h2>
<ul>
<li>You have a financial buffer to absorb potential rate increases</li>
<li>You believe rates will stay flat or drop in the next 2–3 years</li>
<li>You may need to break your mortgage early (much lower penalty)</li>
<li>You want to take advantage of the current rate savings</li>
</ul>
<h2>Choose Fixed If...</h2>
<ul>
<li>You're at the top of your budget and can't afford payment increases</li>
<li>You need certainty for budgeting purposes</li>
<li>You're risk-averse and value peace of mind over savings</li>
<li>You plan to stay in the home for the full term</li>
</ul>
<h2>The Break-Even Point</h2>
<p>At current rates, variable saves approximately $410/month vs 5-year fixed. If rates rise by 1.5%, you'd break even. If they rise more, fixed wins. If they stay flat or drop, variable wins significantly.</p>`
  },
  "mortgage-renewal-guide-canada":{
    title:"Mortgage Renewal Guide: How to Get the Best Rate",
    desc:"Millions renewing in 2025–2027. Start 4 months early, shop around, and never accept your lender's first offer.",
    category:"Renewal",date:"June 18, 2026",readTime:"6 min read",
    content:`<h2>The Renewal Wave — Why This Matters Now</h2>
<p>An estimated 1.2 million Canadian mortgages are up for renewal in 2025–2027. Many of these were locked in at 2–3% during the pandemic. Renewing at today's rates (4.5–5%) means significantly higher payments.</p>
<h2>Start Shopping 4 Months Early</h2>
<p>Most lenders will let you lock in a rate 120 days before your maturity date. This protects you if rates rise before your renewal. Don't wait until the last minute.</p>
<h2>Never Accept Your Lender's First Offer</h2>
<p>Your current lender will send you a renewal offer — often by mail or email. This is almost never their best rate. They're counting on inertia. Here's what to do:</p>
<ol>
<li>Get 2–3 competing offers (your bank, a credit union, a mortgage broker)</li>
<li>Go back to your current lender with the best competing offer</li>
<li>Ask them to match or beat it</li>
<li>Switch if they won't — there is <strong>no penalty to switch at renewal</strong></li>
</ol>
<h2>Refinancing at Renewal: The Best Time</h2>
<p>Renewal is the perfect time to refinance — you can increase your mortgage, change your amortization, or access equity with no break penalty. Lenders can lend up to 80% of your home's current value.</p>
<h2>Fixed vs Variable at Renewal</h2>
<p>With BoC holding at 2.25% and possible rate cuts in late 2026, variable rates are attractively priced. However, if your budget is tight, locking in a fixed rate gives payment certainty for your next term.</p>`
  },
  "cmhc-insurance-explained":{
    title:"CMHC Mortgage Insurance Explained — Is It Really That Bad?",
    desc:"Required with less than 20% down. We explain premiums, how they work, and why CMHC mortgages sometimes get better rates.",
    category:"CMHC",date:"June 15, 2026",readTime:"4 min read",
    content:`<h2>What is CMHC Insurance?</h2>
<p>CMHC (Canada Mortgage and Housing Corporation) mortgage default insurance is required when your down payment is less than 20% on a home purchase under $1.5M. It protects the lender — not you — if you default on your mortgage.</p>
<h2>CMHC Premium Rates</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Down Payment</th><th style="padding:10px;text-align:right;">Premium Rate</th><th style="padding:10px;text-align:right;">On $500K Home</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">5–9.99%</td><td style="padding:10px;text-align:right;color:#dc2626;font-weight:700;">4.00%</td><td style="padding:10px;text-align:right;">$19,000</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">10–14.99%</td><td style="padding:10px;text-align:right;color:#ea580c;font-weight:700;">3.10%</td><td style="padding:10px;text-align:right;">$13,950</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">15–19.99%</td><td style="padding:10px;text-align:right;color:#ca8a04;font-weight:700;">2.80%</td><td style="padding:10px;text-align:right;">$11,900</td></tr>
<tr><td style="padding:10px;">20%+</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">None ✅</td><td style="padding:10px;text-align:right;">$0</td></tr>
</table>
<h2>Is CMHC Really That Bad?</h2>
<p>Not necessarily. Here's why CMHC insurance isn't always the negative people assume:</p>
<ul>
<li><strong>Lower interest rates:</strong> CMHC-insured mortgages often qualify for slightly better rates because lenders view them as lower risk</li>
<li><strong>Added to mortgage:</strong> The premium isn't paid upfront — it's added to your mortgage balance</li>
<li><strong>Enables homeownership sooner:</strong> Without CMHC, many Canadians would need to save for years longer</li>
</ul>
<h2>Alternatives to CMHC</h2>
<p>Canada Guaranty and Sagen (formerly Genworth) also provide mortgage default insurance at identical rates. Your lender chooses which insurer to use — you don't.</p>`
  },
  "first-time-home-buyer-programs-canada":{
    title:"Every First-Time Home Buyer Program in Canada (2026)",
    desc:"Complete guide to FHSA, HBP, tax credits, provincial grants, and the new 2026 GST/HST rebate.",
    category:"First-Time Buyers",date:"June 12, 2026",readTime:"8 min read",
    content:`<h2>Federal Programs — Available Everywhere in Canada</h2>
<h3>1. First Home Savings Account (FHSA)</h3>
<p>The FHSA lets you save up to $8,000/year (max $40,000 lifetime) with tax-deductible contributions and tax-free withdrawals for a first home. Couples can combine for $80,000 total. <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html" target="_blank" style="color:#2563eb;">Official Canada.ca info →</a></p>
<h3>2. RRSP Home Buyers' Plan (HBP)</h3>
<p>Withdraw up to $60,000 per person ($120,000 per couple) from your RRSP tax-free. Repay over 15 years. Stack with FHSA for up to $200,000 per couple. <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html" target="_blank" style="color:#2563eb;">Official Canada.ca info →</a></p>
<h3>3. First-Time Home Buyers' Tax Credit</h3>
<p>Claim $10,000 on line 31270 of your T1 return for a $1,500 non-refundable federal tax credit. Both partners can claim it if purchasing together.</p>
<h3>4. GST/HST New Home Rebate (Bill C-4, 2026)</h3>
<p>Removes GST/HST on newly built homes under $1M. In Ontario, this saves $50,000–$130,000 on a new build. <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4028.html" target="_blank" style="color:#2563eb;">Official info →</a></p>
<h3>5. 30-Year Insured Amortization</h3>
<p>First-time buyers of newly built homes can access a 30-year amortization with less than 20% down, reducing monthly payments vs. the standard 25-year.</p>
<h2>Key Provincial Programs</h2>
<ul>
<li><strong>Ontario:</strong> LTT rebate up to $4,000 + HST New Home Rebate up to $130,000</li>
<li><strong>BC:</strong> Property Transfer Tax exemption on homes under $500K</li>
<li><strong>Alberta:</strong> No provincial land transfer tax — saves $5,000–$15,000+</li>
<li><strong>Manitoba:</strong> LTT rebate up to $4,500 + rural homeownership program</li>
<li><strong>Quebec:</strong> Provincial tax credit ~$750 on top of federal credit</li>
<li><strong>Nova Scotia:</strong> 2% minimum down payment pilot program (2026)</li>
</ul>`
  },
  "canada-housing-market-outlook-2026":{
    title:"Canada Housing Market Outlook 2026 — City by City",
    desc:"Calgary leads at +7%. Toronto flat. Vancouver stabilizing. Montreal up 4%. Full market analysis.",
    category:"Market",date:"June 10, 2026",readTime:"6 min read",
    content:`<h2>National Overview</h2>
<p>Canada's housing market in 2026 is highly bifurcated. Prairie cities are outperforming while Toronto and Vancouver cool. The Bank of Canada holding at 2.25% has stabilized the market, but affordability remains stretched in major cities.</p>
<h2>City by City Forecast</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">City</th><th style="padding:10px;text-align:right;">Avg Price</th><th style="padding:10px;text-align:right;">2026 YoY</th><th style="padding:10px;text-align:right;">Outlook</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Calgary</td><td style="padding:10px;text-align:right;">$620K</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">+7.2%</td><td style="padding:10px;text-align:right;">🟢 Strong</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Edmonton</td><td style="padding:10px;text-align:right;">$445K</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">+5.8%</td><td style="padding:10px;text-align:right;">🟢 Strong</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Montreal</td><td style="padding:10px;text-align:right;">$580K</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">+3.8%</td><td style="padding:10px;text-align:right;">🟡 Moderate</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Ottawa</td><td style="padding:10px;text-align:right;">$650K</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">+2.5%</td><td style="padding:10px;text-align:right;">🟡 Moderate</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Vancouver</td><td style="padding:10px;text-align:right;">$1.25M</td><td style="padding:10px;text-align:right;color:#ca8a04;font-weight:700;">+1.8%</td><td style="padding:10px;text-align:right;">🟡 Flat</td></tr>
<tr><td style="padding:10px;">Toronto</td><td style="padding:10px;text-align:right;">$1.1M</td><td style="padding:10px;text-align:right;color:#ca8a04;font-weight:700;">+0.8%</td><td style="padding:10px;text-align:right;">🟡 Flat</td></tr>
</table>
<h2>Key Drivers in 2026</h2>
<ul>
<li><strong>Interprovincial migration:</strong> Ontario and BC residents moving to Alberta and Manitoba for affordability</li>
<li><strong>Immigration:</strong> Federal targets of 395,000 new permanent residents supporting demand</li>
<li><strong>Supply constraints:</strong> Tariffs on building materials raised construction costs ~8%</li>
<li><strong>Rate stability:</strong> BoC holding at 2.25% is providing market certainty</li>
</ul>`
  },
  "mortgage-broker-vs-bank-canada":{
    title:"Mortgage Broker vs Bank: Which is Better in Canada?",
    desc:"Banks are convenient but rarely offer best rates. Brokers access 30+ lenders free. Here's when to use each.",
    category:"Tips",date:"June 8, 2026",readTime:"5 min read",
    content:`<h2>The Key Difference</h2>
<p>A bank can only offer you their own mortgage products. A mortgage broker works with 30+ lenders — banks, credit unions, trust companies, and alternative lenders — to find you the best rate for your profile.</p>
<h2>Mortgage Brokers</h2>
<ul>
<li><strong>Cost:</strong> Free to use — brokers are paid by the lender (finder's fee), not you</li>
<li><strong>Rate access:</strong> Often 0.25–0.75% below your bank's posted rate</li>
<li><strong>Best for:</strong> Self-employed, complex situations, bruised credit, best rate shopping</li>
<li><strong>Speed:</strong> Can sometimes approve faster than a big bank</li>
<li><strong>Regulation:</strong> Licensed by provincial regulators (FSRA in Ontario, BCFSA in BC, etc.)</li>
</ul>
<h2>Banks</h2>
<ul>
<li><strong>Cost:</strong> Free (built into your rate)</li>
<li><strong>Rate access:</strong> Typically higher than broker rates, but negotiable</li>
<li><strong>Best for:</strong> Existing banking relationship, convenience, simple applications</li>
<li><strong>Perks:</strong> Bundle discounts if you have other products with them</li>
</ul>
<h2>Our Recommendation</h2>
<p>Always get at least one mortgage broker quote alongside your bank's offer. It takes 30 minutes and could save you thousands. If your bank wants to keep your business, they'll often match a competing offer.</p>
<p>For self-employed borrowers, those with less than perfect credit, or anyone with a complex financial situation — a mortgage broker is almost always the better choice.</p>`
  },
  "rent-vs-buy-canada-2026":{
    title:"Rent vs Buy in Canada 2026 — The Real Math",
    desc:"We run the actual numbers for Toronto, Calgary, Winnipeg, and Vancouver. The answer isn't what most people expect.",
    category:"Market",date:"June 5, 2026",readTime:"7 min read",
    content:`<h2>The Question Everyone's Asking</h2>
<p>With home prices elevated and mortgage rates above 4%, many Canadians are wondering if buying still makes financial sense. The answer depends heavily on which city you're in.</p>
<h2>The Numbers: Monthly Cost Comparison</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">City</th><th style="padding:10px;text-align:right;">Avg Home</th><th style="padding:10px;text-align:right;">Monthly (Buy)</th><th style="padding:10px;text-align:right;">Avg Rent (2BR)</th><th style="padding:10px;text-align:right;">Verdict</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Calgary</td><td style="padding:10px;text-align:right;">$620K</td><td style="padding:10px;text-align:right;">~$3,800/mo</td><td style="padding:10px;text-align:right;">~$2,100/mo</td><td style="padding:10px;text-align:right;">🏠 Buy (5yr+)</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Winnipeg</td><td style="padding:10px;text-align:right;">$380K</td><td style="padding:10px;text-align:right;">~$2,400/mo</td><td style="padding:10px;text-align:right;">~$1,600/mo</td><td style="padding:10px;text-align:right;">🏠 Buy (5yr+)</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Toronto</td><td style="padding:10px;text-align:right;">$1.1M</td><td style="padding:10px;text-align:right;">~$6,200/mo</td><td style="padding:10px;text-align:right;">~$2,800/mo</td><td style="padding:10px;text-align:right;">🤔 Complex</td></tr>
<tr><td style="padding:10px;">Vancouver</td><td style="padding:10px;text-align:right;">$1.25M</td><td style="padding:10px;text-align:right;">~$7,100/mo</td><td style="padding:10px;text-align:right;">~$3,200/mo</td><td style="padding:10px;text-align:right;">🤔 Complex</td></tr>
</table>
<h2>The 5-Year Rule</h2>
<p>Buying only makes clear financial sense if you plan to stay for at least 5 years. Closing costs (2–4% of purchase price) take years to recover through equity. If you're staying less than 5 years, renting is often smarter financially.</p>
<h2>What Renting Gets You</h2>
<ul>
<li>Flexibility to relocate for work or lifestyle</li>
<li>Down payment invested at 6% earns real returns</li>
<li>No maintenance, property tax, or insurance costs</li>
<li>Lower monthly cash outflow in expensive markets</li>
</ul>
<h2>What Buying Gets You</h2>
<ul>
<li>Equity buildup — forced savings every month</li>
<li>Locked-in housing cost (mortgage doesn't increase like rent)</li>
<li>Long-term wealth building through appreciation</li>
<li>Freedom to renovate and personalize</li>
</ul>
<p><strong>Bottom line:</strong> In Prairie cities and smaller Ontario/Atlantic markets, buying still makes strong financial sense for those planning to stay 5+ years. In Toronto and Vancouver, the math is much tighter and depends heavily on your timeline and down payment size.</p>`
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(POSTS).map(slug => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = POSTS[slug];
  if (!post) return { notFound: true };
  return { props: { slug, post } };
};

export default function BlogPost({ slug, post }: { slug: string; post: any }) {
  const relatedPosts = Object.entries(POSTS)
    .filter(([s]) => s !== slug)
    .slice(0, 3)
    .map(([s, p]) => ({ slug: s, ...p }));

  return (
    <>
      <Head>
        <title>{post.title} | Canada Mortgage Rates</title>
        <meta name="description" content={post.desc} />
        <link rel="canonical" href={`https://www.canadamortgagerates.net/blog/${slug}`} />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link><Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <Link href="/blog" style={{color:"rgba(255,255,255,0.6)",fontSize:12,textDecoration:"none"}}>Blog</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:12,fontWeight:600,maxWidth:300,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{post.title}</span>
        </nav>

        <div style={{maxWidth:820,margin:"0 auto",padding:"28px 16px"}}>
          <div style={{marginBottom:20}}>
            <span style={{background:(categoryColors[post.category]||"#0d2240"),color:"#fff",borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700}}>{post.category}</span>
            <span style={{color:"#94a3b8",fontSize:12,marginLeft:10}}>{post.date} · {post.readTime}</span>
          </div>
          <h1 style={{fontSize:"clamp(22px,4vw,34px)",fontWeight:800,color:"#0d2240",marginBottom:12,lineHeight:1.3}}>{post.title}</h1>
          <p style={{fontSize:15,color:"#64748b",lineHeight:1.7,marginBottom:24,borderBottom:"1px solid #e2e8f0",paddingBottom:20}}>{post.desc}</p>

          <div style={{background:"#fff",borderRadius:12,padding:"24px 28px",border:"1px solid #e2e8f0",marginBottom:24,fontSize:14,lineHeight:1.9,color:"#374151"}}
            dangerouslySetInnerHTML={{__html:post.content.replace(/<h2>/g,'<h2 style="font-size:20px;font-weight:800;color:#0d2240;margin:24px 0 10px;">').replace(/<h3>/g,'<h3 style="font-size:16px;font-weight:700;color:#0d2240;margin:18px 0 8px;">').replace(/<ul>/g,'<ul style="margin:10px 0 14px 20px;line-height:2.2;">').replace(/<ol>/g,'<ol style="margin:10px 0 14px 20px;line-height:2.2;">').replace(/<p>/g,'<p style="margin-bottom:12px;">')}}
          />

          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:20,marginBottom:24,textAlign:"center"}}>
            <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Use Our Free Mortgage Tools</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,marginBottom:14}}>Calculate payments, test affordability, compare rates, and connect with a licensed professional.</div>
            <Link href="/" style={{display:"inline-block",padding:"10px 24px",background:"#c8102e",color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>Go to Mortgage Tools →</Link>
          </div>

          <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:8,padding:"10px 16px",marginBottom:24,fontSize:11,color:"#92400e"}}>
            ⚠️ This article is for informational purposes only. Not financial advice. Canada Mortgage Rates is not a licensed mortgage broker. Always verify with a licensed professional.
          </div>

          <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",marginBottom:12}}>Related Articles</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
            {relatedPosts.map(p=>(
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{textDecoration:"none"}}>
                <div style={{background:"#fff",borderRadius:10,padding:14,border:"1px solid #e2e8f0",cursor:"pointer"}}>
                  <span style={{background:(categoryColors[p.category]||"#0d2240")+"18",color:categoryColors[p.category]||"#0d2240",borderRadius:20,padding:"2px 7px",fontSize:9,fontWeight:700}}>{p.category}</span>
                  <div style={{fontSize:12,fontWeight:700,color:"#0d2240",marginTop:7,marginBottom:5,lineHeight:1.4}}>{p.title}</div>
                  <div style={{fontSize:11,color:"#2563eb",fontWeight:600}}>Read →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"20px 16px",fontSize:11,marginTop:20}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker</p>
          <p style={{marginTop:6}}>
            <Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Home</Link>
            <Link href="/blog" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Blog</Link>
            <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>Rates</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
