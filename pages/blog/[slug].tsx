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
  "mortgage-rates-ontario-2026":{
    title:"Mortgage Rates Ontario 2026 — Best Fixed & Variable Rates",
    desc:"Compare the best mortgage rates in Ontario for 2026. Toronto, Ottawa, Hamilton, London and more. Current 5-yr fixed from 4.89%. Variable from 3.35%.",
    category:"Rates",date:"June 28, 2026",readTime:"5 min read",
    content:`<h2>Current Mortgage Rates in Ontario — June 2026</h2>
<p>Ontario remains Canada's most populous province and most competitive mortgage market. With the Bank of Canada holding at 2.25%, here's what borrowers in Ontario can expect in 2026.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Term</th><th style="padding:10px;text-align:right;">Best Rate</th><th style="padding:10px;text-align:right;">Type</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;font-weight:700;color:#16a34a;">3.35%</td><td style="padding:10px;text-align:right;">All lenders</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">1-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.49%</td><td style="padding:10px;text-align:right;">Credit unions</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">3-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.69%</td><td style="padding:10px;text-align:right;">Online lenders</td></tr>
<tr><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.84%</td><td style="padding:10px;text-align:right;">Brokers</td></tr>
</table>
<h2>Ontario Housing Market 2026</h2>
<p>Ontario's housing market is bifurcated in 2026. The Greater Toronto Area remains flat to slightly negative as affordability remains stretched. Meanwhile, smaller Ontario cities like Windsor, Sudbury, and Thunder Bay are seeing 4–5% annual price growth driven by remote workers and affordability migration.</p>
<h2>Ontario-Specific Mortgage Programs</h2>
<ul>
<li><strong>Ontario LTT Rebate:</strong> First-time buyers get up to $4,000 back on Ontario's land transfer tax</li>
<li><strong>Ontario HST New Home Rebate (2026):</strong> Removes HST on new builds under $1M — saves up to $130,000</li>
<li><strong>Toronto LTT Rebate:</strong> Toronto buyers also get a municipal LTT rebate up to $4,475</li>
</ul>
<h2>Best Lenders in Ontario</h2>
<p>Meridian Credit Union, DUCA, and Alterna Savings consistently offer rates below the Big 6 banks in Ontario. Online lenders like nesto and First National are also strong options. A mortgage broker comparing all options is recommended for most Ontario buyers.</p>
<h2>Ontario Stress Test</h2>
<p>At Ontario's current average home price of $850,000+, the stress test significantly limits buying power. A household earning $150,000/year qualifies for approximately $680,000 at stress test rates — meaning most GTA buyers need significant down payments or dual incomes.</p>`
  },
  "mortgage-rates-alberta-2026":{
    title:"Mortgage Rates Alberta 2026 — Calgary & Edmonton Best Rates",
    desc:"Best mortgage rates in Alberta for 2026. No land transfer tax, strong market growth. Calgary up 7.2%, Edmonton up 5.8%. Compare banks and credit unions.",
    category:"Rates",date:"June 27, 2026",readTime:"5 min read",
    content:`<h2>Why Alberta is Canada's Hottest Housing Market in 2026</h2>
<p>Alberta leads Canada in housing market performance in 2026, driven by strong interprovincial migration, resource sector employment, and — crucially — no provincial land transfer tax. Calgary is up 7.2% year-over-year and Edmonton up 5.8%.</p>
<h2>Current Mortgage Rates in Alberta</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Term</th><th style="padding:10px;text-align:right;">Rate Range</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;font-weight:700;color:#16a34a;">3.30–3.55%</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">3-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.65–4.85%</td></tr>
<tr><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.80–4.95%</td></tr>
</table>
<h2>Alberta's Biggest Advantage: No Land Transfer Tax</h2>
<p>Alberta is one of the few provinces with no provincial land transfer tax. On a $620,000 Calgary home, Ontario buyers would pay $9,475 in LTT. Alberta buyers pay $0. This saves first-time buyers thousands that can go toward their down payment.</p>
<h2>Best Lenders in Alberta</h2>
<p>ATB Financial and Servus Credit Union are Alberta-specific institutions that often beat national bank rates. Both are provincially regulated and offer competitive mortgage products tailored to Alberta buyers.</p>
<h2>Calgary vs Edmonton: Which Market?</h2>
<ul>
<li><strong>Calgary:</strong> Average $620K, tech and energy sector growth, strongest price appreciation</li>
<li><strong>Edmonton:</strong> Average $445K, more affordable, government and healthcare employment base</li>
<li><strong>Airdrie/Leduc/St. Albert:</strong> Suburban markets offering detached homes $100–150K below Calgary/Edmonton prices</li>
</ul>`
  },
  "mortgage-rates-bc-2026":{
    title:"Mortgage Rates British Columbia 2026 — Vancouver, Victoria & Beyond",
    desc:"Best mortgage rates in BC for 2026. Vancouver average $1.25M. Victoria $890K. Compare credit unions and banks. Property Transfer Tax exemptions for first-time buyers.",
    category:"Rates",date:"June 26, 2026",readTime:"5 min read",
    content:`<h2>BC Mortgage Market Overview 2026</h2>
<p>British Columbia remains Canada's most expensive housing market, with Vancouver averaging $1.25M and Victoria $890K. Despite high prices, BC has some advantages for mortgage borrowers — particularly the Property Transfer Tax exemption for first-time buyers on homes under $500K.</p>
<h2>Current Mortgage Rates in BC</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Term</th><th style="padding:10px;text-align:right;">Best Rate</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;font-weight:700;color:#16a34a;">3.35–3.55%</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">3-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.70–4.85%</td></tr>
<tr><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.84–4.99%</td></tr>
</table>
<h2>BC-Specific Programs</h2>
<ul>
<li><strong>Property Transfer Tax (PTT) Exemption:</strong> First-time buyers on homes under $500K pay no PTT — saving up to $8,000</li>
<li><strong>BC Home Owner Grant:</strong> Reduces annual property taxes by up to $770 for principal residences</li>
<li><strong>Federal FHSA + HBP:</strong> Up to $200,000 per couple tax-free for down payment</li>
</ul>
<h2>Best Credit Unions in BC</h2>
<p>Vancity Credit Union and Coast Capital Savings are BC's largest credit unions and frequently offer rates 0.25–0.40% below the major banks. Both have excellent digital tools and are insured by the Credit Union Deposit Insurance Corporation of BC.</p>
<h2>Kelowna and Interior BC: The Opportunity</h2>
<p>While Vancouver remains extremely expensive, Kelowna ($750K), Kamloops ($560K), and Nanaimo ($620K) offer significantly better affordability with strong lifestyle appeal. These markets are seeing 3–4% annual growth as remote workers relocate from Vancouver.</p>`
  },
  "mortgage-rates-quebec-2026":{
    title:"Taux Hypothécaires Québec 2026 — Montreal, Quebec City & Beyond",
    desc:"Best mortgage rates in Quebec 2026. Montreal average $580K, up 3.8%. Desjardins vs national banks. CELIAPP and provincial tax credits for first-time buyers.",
    category:"Rates",date:"June 25, 2026",readTime:"5 min read",
    content:`<h2>Quebec Mortgage Market 2026</h2>
<p>Quebec remains one of Canada's most affordable major markets, with Montreal averaging $580K compared to Toronto's $1.1M. The province has unique civil law property rules and Desjardins dominates the local mortgage landscape with over 40% market share.</p>
<h2>Current Mortgage Rates in Quebec</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Term</th><th style="padding:10px;text-align:right;">Best Rate</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;font-weight:700;color:#16a34a;">3.30–3.50%</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">3-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.65–4.80%</td></tr>
<tr><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.82–4.95%</td></tr>
</table>
<h2>Quebec-Specific Mortgage Rules</h2>
<p>Quebec uses civil law (not common law like other provinces), which affects how mortgages are registered. Quebec uses a "hypothec" instead of a mortgage — functionally similar but with different legal documentation. Work with a Quebec notary (not a lawyer) for your closing.</p>
<h2>Land Transfer Tax in Quebec</h2>
<p>Quebec has both municipal and provincial welcome taxes (taxe de bienvenue). On a $580K Montreal property: 0.5% on first $53,200 + 1% on $53,200–$266,200 + 1.5% on remainder = approximately $7,800 total.</p>
<h2>Desjardins vs National Banks</h2>
<p>Desjardins is the dominant mortgage lender in Quebec. As a cooperative, it often returns profits to members as dividends. National Bank of Canada is also Quebec-based and competitive. For best rates, compare both against a mortgage broker who has access to online lenders.</p>
<h2>Quebec First-Time Buyer Programs</h2>
<ul>
<li><strong>CELIAPP (FHSA):</strong> $8,000/year tax-deductible, tax-free withdrawal for first home</li>
<li><strong>RAP (HBP):</strong> Up to $60,000 from REER tax-free</li>
<li><strong>Quebec Tax Credit:</strong> ~$750 provincial credit on top of $1,500 federal credit</li>
</ul>`
  },
  "how-much-mortgage-can-i-afford-canada":{
    title:"How Much Mortgage Can I Afford in Canada? (2026 Calculator Guide)",
    desc:"How lenders calculate what you can afford in Canada. GDS ratio, TDS ratio, stress test explained with real examples. Find out your maximum purchase price.",
    category:"Qualifying",date:"June 24, 2026",readTime:"7 min read",
    content:`<h2>How Canadian Lenders Calculate Affordability</h2>
<p>Canadian mortgage lenders use two debt ratios to determine how much you can borrow. Understanding these is essential before you start house hunting.</p>
<h2>GDS Ratio — Gross Debt Service (Max 39%)</h2>
<p>GDS = (Monthly Mortgage Payment + Property Tax + Heat + 50% Condo Fee) ÷ Gross Monthly Income</p>
<p><strong>Example:</strong> $90,000/yr income = $7,500/mo gross. Max GDS = $7,500 × 39% = $2,925/mo for housing.</p>
<h2>TDS Ratio — Total Debt Service (Max 44%)</h2>
<p>TDS = (GDS items + All Monthly Debt Payments) ÷ Gross Monthly Income</p>
<p><strong>Example:</strong> Same $7,500/mo with $500/mo car payment. Max TDS = $7,500 × 44% = $3,300 - $500 = $2,800/mo for housing.</p>
<h2>Real Examples: Maximum Purchase Price by Income</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Household Income</th><th style="padding:10px;text-align:right;">Max Mortgage</th><th style="padding:10px;text-align:right;">Max Price (20% down)</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$60,000</td><td style="padding:10px;text-align:right;">$285,000</td><td style="padding:10px;text-align:right;">$356,000</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$80,000</td><td style="padding:10px;text-align:right;">$380,000</td><td style="padding:10px;text-align:right;">$475,000</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$100,000</td><td style="padding:10px;text-align:right;">$475,000</td><td style="padding:10px;text-align:right;">$594,000</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$120,000</td><td style="padding:10px;text-align:right;">$570,000</td><td style="padding:10px;text-align:right;">$713,000</td></tr>
<tr><td style="padding:10px;">$150,000</td><td style="padding:10px;text-align:right;">$715,000</td><td style="padding:10px;text-align:right;">$894,000</td></tr>
</table>
<p><em>Assumes: 4.89% rate, 25yr amortization, $500/mo existing debts, stress tested at 6.89%</em></p>
<h2>The Stress Test Impact</h2>
<p>The stress test reduces your maximum purchase price by approximately 15–20%. A household that could afford $600K at their actual rate might only qualify for $500K after the stress test.</p>
<h2>5 Ways to Increase What You Can Afford</h2>
<ol>
<li>Add a co-borrower to increase total income</li>
<li>Pay off existing debts before applying</li>
<li>Increase your down payment to reduce mortgage size</li>
<li>Extend amortization to 30 years (first-time buyers of new builds)</li>
<li>Use a mortgage broker to access B-lenders with different qualifying rules</li>
</ol>`
  },
  "minimum-down-payment-canada-2026":{
    title:"Minimum Down Payment in Canada 2026 — Complete Guide",
    desc:"Everything about minimum down payments in Canada. 5% vs 10% vs 20%. CMHC insurance costs. How to save faster using FHSA and RRSP HBP.",
    category:"First-Time Buyers",date:"June 23, 2026",readTime:"6 min read",
    content:`<h2>Minimum Down Payment Rules in Canada</h2>
<p>The minimum down payment in Canada depends on the purchase price of the home:</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Purchase Price</th><th style="padding:10px;text-align:right;">Minimum Down</th><th style="padding:10px;text-align:right;">Example</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Under $500,000</td><td style="padding:10px;text-align:right;font-weight:700;">5%</td><td style="padding:10px;text-align:right;">$400K home = $20K down</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$500K–$999,999</td><td style="padding:10px;text-align:right;font-weight:700;">5% + 10% on portion over $500K</td><td style="padding:10px;text-align:right;">$700K home = $45K down</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$1M–$1.49M</td><td style="padding:10px;text-align:right;font-weight:700;">20%</td><td style="padding:10px;text-align:right;">$1.2M home = $240K down</td></tr>
<tr><td style="padding:10px;">$1.5M+</td><td style="padding:10px;text-align:right;font-weight:700;">20%</td><td style="padding:10px;text-align:right;">No CMHC available</td></tr>
</table>
<h2>CMHC Insurance: The Cost of Under 20% Down</h2>
<p>Any down payment under 20% requires CMHC mortgage default insurance. The premium is added to your mortgage — you don't pay it upfront.</p>
<ul>
<li>5–9.99% down: 4.0% premium</li>
<li>10–14.99% down: 3.1% premium</li>
<li>15–19.99% down: 2.8% premium</li>
</ul>
<h2>How to Save Your Down Payment Faster</h2>
<h3>FHSA (First Home Savings Account)</h3>
<p>Contribute up to $8,000/year. Tax deductible going in, tax-free coming out. Best savings vehicle ever created for Canadian first-time buyers. Open one immediately — even if you're years from buying.</p>
<h3>RRSP Home Buyers' Plan</h3>
<p>Already have RRSP savings? Withdraw up to $60,000 per person ($120,000 per couple) tax-free for your down payment. Repay over 15 years.</p>
<h3>TFSA</h3>
<p>Contributions aren't tax-deductible but withdrawals are tax-free. Good for short-term down payment savings (1–3 years away from buying).</p>
<h2>Is 5% Down a Good Idea?</h2>
<p>The CMHC premium on a $500K home with 5% down is $19,000 added to your mortgage. At 4.89%, you'll pay approximately $28,500 in interest on that premium over 25 years. Saving to 10% or 20% saves significant money long-term — but getting into the market sooner can offset this through appreciation.</p>`
  },
  "mortgage-pre-approval-canada":{
    title:"Mortgage Pre-Approval in Canada: Everything You Need to Know",
    desc:"What is a mortgage pre-approval, how to get one, what documents you need, and how long it lasts. Complete guide for Canadian homebuyers 2026.",
    category:"Tips",date:"June 22, 2026",readTime:"6 min read",
    content:`<h2>What is a Mortgage Pre-Approval?</h2>
<p>A mortgage pre-approval is a conditional commitment from a lender confirming how much they'll lend you and at what rate. It's based on a full review of your income, credit, and assets — not just a quick estimate.</p>
<h2>Pre-Approval vs Pre-Qualification</h2>
<ul>
<li><strong>Pre-qualification:</strong> Quick estimate based on self-reported info. Not verified. Not reliable.</li>
<li><strong>Pre-approval:</strong> Full credit check, income verification, document review. Lenders take it seriously.</li>
</ul>
<p>Always get a full pre-approval before making an offer on a home.</p>
<h2>Documents You Need</h2>
<ul>
<li>2 most recent pay stubs</li>
<li>T4 slips for last 2 years</li>
<li>Notice of Assessment (NOA) for last 2 years</li>
<li>3 months of bank statements (showing down payment savings)</li>
<li>Government-issued ID</li>
<li>Letter of employment confirming salary and tenure</li>
<li>If self-employed: T1 generals and NOAs for 2 years, business financials</li>
</ul>
<h2>How Long Does Pre-Approval Last?</h2>
<p>Most Canadian lenders hold a pre-approval rate for <strong>90–120 days</strong>. If you find a home within that window, you're protected at your pre-approved rate even if rates rise.</p>
<h2>Does Pre-Approval Affect Your Credit Score?</h2>
<p>Yes — getting a mortgage pre-approval triggers a "hard inquiry" on your credit report, which can reduce your score by 5–10 points temporarily. However, multiple mortgage inquiries within a 14-day window typically count as a single inquiry, so shop around quickly.</p>
<h2>Should You Use a Bank or Broker for Pre-Approval?</h2>
<p>Get pre-approved through a mortgage broker. They submit to multiple lenders with a single credit check and can often find better rates than going directly to a bank. The pre-approval is free and there's no obligation.</p>
<h2>What Happens After Pre-Approval?</h2>
<ol>
<li>Shop for homes within your pre-approved budget</li>
<li>Make an offer with a financing condition</li>
<li>Submit final documents to your lender for full approval</li>
<li>Lender issues commitment letter</li>
<li>Close with your lawyer/notary</li>
</ol>`
  },
  "home-equity-line-of-credit-canada":{
    title:"HELOC in Canada 2026 — Home Equity Line of Credit Complete Guide",
    desc:"Everything about HELOCs in Canada. How much you can borrow, current rates, how to qualify, and when a HELOC makes sense vs refinancing.",
    category:"Tips",date:"June 21, 2026",readTime:"6 min read",
    content:`<h2>What is a HELOC?</h2>
<p>A Home Equity Line of Credit (HELOC) lets you borrow against the equity in your home — up to 80% of your home's value minus your outstanding mortgage. It works like a credit card: borrow what you need, pay it back, borrow again.</p>
<h2>How Much Can You Borrow?</h2>
<p><strong>Formula:</strong> (Home Value × 80%) - Outstanding Mortgage = Maximum HELOC</p>
<p><strong>Example:</strong> Home worth $600,000, mortgage balance $350,000<br/>
($600,000 × 80%) - $350,000 = $480,000 - $350,000 = <strong>$130,000 HELOC</strong></p>
<h2>Current HELOC Rates in Canada (2026)</h2>
<p>HELOC rates are typically Prime Rate + 0.50%. With Prime at 4.45%, current HELOC rates are approximately <strong>4.95%</strong>. This is variable and moves with the Bank of Canada rate.</p>
<h2>HELOC vs Refinancing: Which is Better?</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Factor</th><th style="padding:10px;text-align:right;">HELOC</th><th style="padding:10px;text-align:right;">Refinance</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Rate</td><td style="padding:10px;text-align:right;">Variable (~4.95%)</td><td style="padding:10px;text-align:right;">Fixed or variable</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Penalty</td><td style="padding:10px;text-align:right;">None</td><td style="padding:10px;text-align:right;">Can be significant</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Flexibility</td><td style="padding:10px;text-align:right;">Borrow as needed</td><td style="padding:10px;text-align:right;">Lump sum only</td></tr>
<tr><td style="padding:10px;">Best for</td><td style="padding:10px;text-align:right;">Ongoing needs</td><td style="padding:10px;text-align:right;">Large one-time need</td></tr>
</table>
<h2>Best Uses of a HELOC</h2>
<ul>
<li><strong>Home renovations</strong> — borrow as you spend, don't pay interest on unused funds</li>
<li><strong>Debt consolidation</strong> — replace 20% credit card debt with 4.95% HELOC</li>
<li><strong>Emergency fund</strong> — set it up but don't use it unless needed</li>
<li><strong>Investment property down payment</strong> — use equity in primary home to buy rental property</li>
</ul>
<h2>HELOC Risks to Know</h2>
<p>A HELOC is secured against your home. If you can't make payments, you risk losing your home. Only use a HELOC for investments or improvements — not for vacations or lifestyle spending.</p>`
  },
  "self-employed-mortgage-canada":{
    title:"Self-Employed Mortgage in Canada 2026 — How to Qualify",
    desc:"Getting a mortgage when self-employed in Canada is harder but very achievable. Here's what lenders look for, what documents you need, and how brokers help.",
    category:"Qualifying",date:"June 20, 2026",readTime:"7 min read",
    content:`<h2>The Challenge for Self-Employed Borrowers</h2>
<p>Self-employed Canadians often show lower income on paper due to legitimate business deductions. Lenders see this as higher risk, making mortgage qualification more complex — but far from impossible.</p>
<h2>What Lenders Look For</h2>
<ul>
<li><strong>2 years self-employment history</strong> in the same industry</li>
<li><strong>T1 generals</strong> (personal tax returns) for last 2 years</li>
<li><strong>Notice of Assessment (NOA)</strong> for last 2 years showing taxes paid</li>
<li><strong>Business financials</strong> — income statement and balance sheet</li>
<li><strong>Business registration</strong> or articles of incorporation</li>
<li><strong>6 months business bank statements</strong></li>
</ul>
<h2>Income Calculation Methods</h2>
<h3>Traditional Method</h3>
<p>Uses your reported net income from T1 generals averaged over 2 years. If you write off lots of expenses, this number is low — reducing your qualifying income.</p>
<h3>Gross Revenue Method (Add-Back)</h3>
<p>Some lenders add back certain deductions (depreciation, home office, etc.) to get a higher qualifying income. A mortgage broker knows which lenders use this method.</p>
<h3>Stated Income (B-Lenders)</h3>
<p>B-lenders like Home Trust and Equitable Bank offer stated income mortgages where you declare your income without full documentation. Rates are 0.5–2% higher than A-lenders.</p>
<h2>A-Lender vs B-Lender for Self-Employed</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Factor</th><th style="padding:10px;text-align:right;">A-Lender</th><th style="padding:10px;text-align:right;">B-Lender</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Rate</td><td style="padding:10px;text-align:right;">4.84–4.99%</td><td style="padding:10px;text-align:right;">5.50–7.00%</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Income verification</td><td style="padding:10px;text-align:right;">Full docs required</td><td style="padding:10px;text-align:right;">Stated income ok</td></tr>
<tr><td style="padding:10px;">Down payment</td><td style="padding:10px;text-align:right;">5%+</td><td style="padding:10px;text-align:right;">Often 20%+ required</td></tr>
</table>
<h2>Tips for Self-Employed Mortgage Success</h2>
<ol>
<li><strong>Use a mortgage broker</strong> — they know which lenders are most self-employment friendly</li>
<li><strong>Plan 2 years ahead</strong> — keep your reported income higher in the years before applying</li>
<li><strong>20% down payment</strong> — avoids CMHC and opens more lender options</li>
<li><strong>Strong credit score</strong> — aim for 680+ to qualify at A-lenders</li>
<li><strong>Low debt</strong> — pay off credit cards and car loans before applying</li>
</ol>`
  },
  "mortgage-penalties-canada":{
    title:"Mortgage Break Penalties in Canada — How Much Will It Cost You?",
    desc:"Breaking a mortgage in Canada can cost thousands. IRD vs 3-month interest explained. How to calculate your penalty and when it's worth paying.",
    category:"Tips",date:"June 19, 2026",readTime:"6 min read",
    content:`<h2>Why Mortgage Penalties Exist</h2>
<p>When you break a mortgage before the term ends, your lender loses the interest income they expected. The penalty compensates them for this loss. Understanding penalties before you sign is critical.</p>
<h2>Two Types of Break Penalties</h2>
<h3>3-Month Interest Penalty (Variable Rate Mortgages)</h3>
<p>Variable rate mortgages always use 3 months of interest as the break penalty.</p>
<p><strong>Formula:</strong> Outstanding Balance × Interest Rate ÷ 12 × 3</p>
<p><strong>Example:</strong> $400,000 balance at 3.50% = $400,000 × 3.50% ÷ 12 × 3 = <strong>$3,500</strong></p>
<h3>IRD — Interest Rate Differential (Fixed Rate Mortgages)</h3>
<p>Fixed rate mortgages use IRD, which is calculated as the difference between your contracted rate and the lender's current rate for the remaining term.</p>
<p><strong>Formula:</strong> Balance × (Your Rate - Comparison Rate) × Remaining Term</p>
<p><strong>Example:</strong> $400,000 balance, 2 years remaining, your rate 5.50%, current 2-year rate 4.50%<br/>
$400,000 × 1.00% × 2 = <strong>$8,000 IRD penalty</strong></p>
<h2>Why Fixed Rate Penalties Can Be Enormous</h2>
<p>Big banks often use their posted rates (not discounted rates) for IRD calculations — making penalties 2–5x larger than they should be. Some borrowers have faced penalties of $20,000–$40,000 for breaking a fixed mortgage early.</p>
<h2>When Is It Worth Breaking Your Mortgage?</h2>
<p>Use our break-even calculator: if your monthly savings from the new rate × months remaining > penalty amount, it's worth breaking.</p>
<p><strong>Example:</strong> Penalty $6,000, new rate saves $300/mo = break even in 20 months. If you have 36 months left in your term, switching saves $4,800 net.</p>
<h2>How to Minimize Penalties</h2>
<ul>
<li><strong>Choose variable rate</strong> — 3-month interest is much more predictable than IRD</li>
<li><strong>Avoid big bank fixed mortgages</strong> — use credit unions or monoline lenders with fairer IRD calculations</li>
<li><strong>Port your mortgage</strong> — moving to a new home? Many mortgages can be transferred with no penalty</li>
<li><strong>Wait for renewal</strong> — no penalty at all at maturity</li>
</ul>`
  },
  "mortgage-rates-winnipeg-2026":{
    title:"Mortgage Rates Winnipeg 2026 — Best Fixed & Variable Rates",
    desc:"Compare the best mortgage rates in Winnipeg, Manitoba for 2026. Average home price $380K. Local credit unions vs banks. First-time buyer programs.",
    category:"Rates",date:"June 18, 2026",readTime:"5 min read",
    content:`<h2>Winnipeg Mortgage Market 2026</h2>
<p>Winnipeg remains one of Canada's most affordable major cities in 2026, with an average home price of $380,000 — far below Toronto ($1.1M) or Vancouver ($1.25M). The city continues to see steady 4% annual price growth driven by interprovincial migration and a stable public sector employment base.</p>
<h2>Current Mortgage Rates in Winnipeg</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Term</th><th style="padding:10px;text-align:right;">Rate Range</th><th style="padding:10px;text-align:right;">Monthly ($380K home, 10% down)</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">3.30–3.55%</td><td style="padding:10px;text-align:right;">~$1,550/mo</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">3-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.65–4.85%</td><td style="padding:10px;text-align:right;">~$1,850/mo</td></tr>
<tr><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.80–4.95%</td><td style="padding:10px;text-align:right;">~$1,890/mo</td></tr>
</table>
<h2>Best Mortgage Lenders in Winnipeg</h2>
<ul>
<li><strong>Assiniboine Credit Union</strong> — Manitoba's largest credit union, consistently competitive rates</li>
<li><strong>Steinbach Credit Union</strong> — strong digital tools, competitive rates province-wide</li>
<li><strong>Cambrian Credit Union</strong> — Winnipeg-focused, excellent local service</li>
<li><strong>ATB / Major banks</strong> — RBC, TD, Scotiabank all active in Winnipeg</li>
</ul>
<h2>Manitoba First-Time Buyer Programs</h2>
<ul>
<li><strong>LTT Rebate:</strong> Up to $4,500 back on Manitoba land transfer tax</li>
<li><strong>Rural Homeownership Program:</strong> Up to $3,500 for buyers outside Winnipeg</li>
<li><strong>Federal FHSA + HBP:</strong> Up to $200,000 per couple tax-free</li>
</ul>
<h2>Winnipeg Neighbourhoods and Home Prices</h2>
<ul>
<li><strong>River Heights/Tuxedo:</strong> $550K–$900K — premium established neighbourhoods</li>
<li><strong>St. Vital/St. Boniface:</strong> $350K–$550K — popular family areas</li>
<li><strong>North End/West End:</strong> $200K–$350K — most affordable, gentrifying</li>
<li><strong>Transcona/East Kildonan:</strong> $300K–$450K — suburban, good value</li>
</ul>`
  },
  "mortgage-rates-toronto-2026":{
    title:"Mortgage Rates Toronto 2026 — Best Fixed & Variable Rates",
    desc:"Best mortgage rates in Toronto for 2026. Average home $1.1M. What income do you need? Toronto LTT rebate, CMHC, stress test explained.",
    category:"Rates",date:"June 17, 2026",readTime:"6 min read",
    content:`<h2>Toronto Mortgage Market 2026</h2>
<p>Toronto remains Canada's most expensive major market and one of North America's most challenging for first-time buyers. With an average home price of $1.1M, buyers need significant income and savings to enter the market.</p>
<h2>What Income Do You Need to Buy in Toronto?</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Home Price</th><th style="padding:10px;text-align:right;">Min. Down</th><th style="padding:10px;text-align:right;">Income Needed</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$600K (condo)</td><td style="padding:10px;text-align:right;">$35K (5%+10%)</td><td style="padding:10px;text-align:right;">~$110,000/yr</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">$900K (townhouse)</td><td style="padding:10px;text-align:right;">$80K (5%+10%)</td><td style="padding:10px;text-align:right;">~$165,000/yr</td></tr>
<tr><td style="padding:10px;">$1.1M (detached)</td><td style="padding:10px;text-align:right;">$220K (20%)</td><td style="padding:10px;text-align:right;">~$200,000/yr</td></tr>
</table>
<h2>Toronto Land Transfer Tax: Double Trouble</h2>
<p>Toronto buyers pay BOTH Ontario LTT and a municipal Toronto LTT. On a $1.1M home, combined LTT is approximately $36,000. First-time buyers get rebates of up to $8,475 combined — but still owe $27,525.</p>
<h2>Current Mortgage Rates in Toronto</h2>
<p>Toronto rates are the same as province-wide Ontario rates. Best 5-year fixed from 4.84% through brokers or credit unions like Meridian. Variable from 3.35%.</p>
<h2>Toronto Mortgage Strategy Tips</h2>
<ul>
<li><strong>Start with a condo:</strong> Entry-level condos at $500–700K are more achievable and build equity</li>
<li><strong>Dual income is almost essential:</strong> Most Toronto buyers need two salaries</li>
<li><strong>Use a broker:</strong> Rate differences of 0.25% on a $900K mortgage save ~$15,000 over 5 years</li>
<li><strong>Consider the 905:</strong> Mississauga, Brampton, Hamilton offer better value with similar commute times</li>
</ul>`
  },
  "mortgage-rates-calgary-2026":{
    title:"Mortgage Rates Calgary 2026 — Best Fixed & Variable Rates",
    desc:"Best mortgage rates in Calgary for 2026. Average home $620K, up 7.2%. No land transfer tax. ATB Financial and Servus Credit Union vs national banks.",
    category:"Rates",date:"June 16, 2026",readTime:"5 min read",
    content:`<h2>Calgary: Canada's Hottest Housing Market 2026</h2>
<p>Calgary leads Canada's housing market in 2026 with 7.2% year-over-year price growth. Strong oil sector employment, interprovincial migration from Ontario and BC, and no provincial land transfer tax make Calgary extremely attractive for buyers.</p>
<h2>Current Mortgage Rates in Calgary</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Term</th><th style="padding:10px;text-align:right;">Rate</th><th style="padding:10px;text-align:right;">Monthly ($620K, 20% down)</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Variable</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">3.35%</td><td style="padding:10px;text-align:right;">~$2,460/mo</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">3-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.75%</td><td style="padding:10px;text-align:right;">~$2,750/mo</td></tr>
<tr><td style="padding:10px;">5-Year Fixed</td><td style="padding:10px;text-align:right;font-weight:700;">4.89%</td><td style="padding:10px;text-align:right;">~$2,820/mo</td></tr>
</table>
<h2>No Land Transfer Tax: A Massive Advantage</h2>
<p>Alberta has no provincial land transfer tax. A comparable $620K purchase in Ontario would cost $9,475 in LTT. In Calgary: $0. This money goes directly toward your down payment or closing costs.</p>
<h2>Best Lenders in Calgary</h2>
<ul>
<li><strong>ATB Financial</strong> — Alberta-only crown corporation, competitive rates, strong local service</li>
<li><strong>Servus Credit Union</strong> — Alberta's largest credit union, often beats big banks</li>
<li><strong>Connect First Credit Union</strong> — Calgary-focused, strong community presence</li>
</ul>
<h2>Calgary Neighbourhoods and Prices</h2>
<ul>
<li><strong>Inner City (Mission, Beltline, Kensington):</strong> $500K–$1M+ condos and townhouses</li>
<li><strong>SW Calgary (Marda Loop, Lakeview):</strong> $650K–$1.2M detached</li>
<li><strong>NE/SE Calgary:</strong> $450K–$650K — best value, diverse communities</li>
<li><strong>Airdrie/Cochrane (commuter):</strong> $450K–$600K for larger homes</li>
</ul>`
  },
  "bank-of-canada-rate-history-canada":{
    title:"Bank of Canada Rate History — How Rates Have Changed (2019–2026)",
    desc:"Complete history of Bank of Canada overnight rate changes from pre-pandemic lows to 2023 highs and the 2024-2026 cutting cycle. How each decision affected mortgage rates.",
    category:"Rates",date:"June 15, 2026",readTime:"7 min read",
    content:`<h2>Bank of Canada Rate Timeline: 2019–2026</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Date</th><th style="padding:10px;text-align:right;">Rate</th><th style="padding:10px;text-align:right;">Change</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Jan 2019</td><td style="padding:10px;text-align:right;">1.75%</td><td style="padding:10px;text-align:right;">Hold</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Mar 2020</td><td style="padding:10px;text-align:right;">0.25%</td><td style="padding:10px;text-align:right;color:#16a34a;">-1.50% (COVID emergency cuts)</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Mar 2022</td><td style="padding:10px;text-align:right;">0.50%</td><td style="padding:10px;text-align:right;color:#dc2626;">+0.25% (hiking begins)</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Jul 2023</td><td style="padding:10px;text-align:right;">5.00%</td><td style="padding:10px;text-align:right;color:#dc2626;">Peak rate</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Jun 2024</td><td style="padding:10px;text-align:right;">4.75%</td><td style="padding:10px;text-align:right;color:#16a34a;">-0.25% (cutting begins)</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Dec 2024</td><td style="padding:10px;text-align:right;">3.25%</td><td style="padding:10px;text-align:right;color:#16a34a;">Multiple cuts</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Mar 2025</td><td style="padding:10px;text-align:right;">2.75%</td><td style="padding:10px;text-align:right;color:#16a34a;">-0.25%</td></tr>
<tr><td style="padding:10px;">Jun 2026</td><td style="padding:10px;text-align:right;">2.25%</td><td style="padding:10px;text-align:right;">Hold (5th consecutive)</td></tr>
</table>
<h2>What Rate History Tells Us</h2>
<p>The BoC moved rates from emergency lows (0.25%) to a 22-year high (5.00%) in just 16 months — the fastest hiking cycle in Canadian history. This caused significant payment shock for variable rate holders and renewers.</p>
<h2>Impact on Mortgage Holders</h2>
<ul>
<li><strong>Variable rate borrowers (2020–2022):</strong> Enjoyed historic lows but faced $500–$1,000/mo payment increases during the hike cycle</li>
<li><strong>Fixed rate borrowers (2020–2022):</strong> Locked in at 1.5–2.5% — now facing payment shock at renewal at 4.5–5%</li>
<li><strong>New buyers (2026):</strong> Benefit from rates well below the 2023 peak</li>
</ul>
<h2>What's Next for the BoC?</h2>
<p>With inflation at 2.8% (slightly above the 2% target) and GDP growth slowing to 1.2%, most economists expect the BoC to hold through summer 2026 with potential for 1–2 more cuts in Q4 2026 or early 2027 if inflation continues to moderate.</p>`
  },
  "land-transfer-tax-canada":{
    title:"Land Transfer Tax in Canada 2026 — Every Province Explained",
    desc:"Complete guide to land transfer tax across all Canadian provinces. Ontario, BC, Quebec, Manitoba rates, exemptions, and first-time buyer rebates.",
    category:"First-Time Buyers",date:"June 14, 2026",readTime:"6 min read",
    content:`<h2>Land Transfer Tax by Province</h2>
<p>Land transfer tax (LTT) — also called property transfer tax or welcome tax depending on the province — is paid when you purchase a property. It's one of the largest closing costs for Canadian home buyers.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Province</th><th style="padding:10px;text-align:right;">LTT on $500K Home</th><th style="padding:10px;text-align:right;">First-Time Buyer Rebate</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Alberta</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">$0</td><td style="padding:10px;text-align:right;">N/A — no LTT</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Saskatchewan</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">$1,500 (0.3%)</td><td style="padding:10px;text-align:right;">None needed</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Manitoba</td><td style="padding:10px;text-align:right;">$6,650</td><td style="padding:10px;text-align:right;">Up to $4,500</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Ontario</td><td style="padding:10px;text-align:right;">$6,475</td><td style="padding:10px;text-align:right;">Up to $4,000</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Toronto (+ ON)</td><td style="padding:10px;text-align:right;">$12,950</td><td style="padding:10px;text-align:right;">Up to $8,475</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">British Columbia</td><td style="padding:10px;text-align:right;">$8,000</td><td style="padding:10px;text-align:right;">Full exemption under $500K</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Quebec</td><td style="padding:10px;text-align:right;">~$6,400</td><td style="padding:10px;text-align:right;">None provincial</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Nova Scotia</td><td style="padding:10px;text-align:right;">$7,500 (1.5%)</td><td style="padding:10px;text-align:right;">None</td></tr>
<tr><td style="padding:10px;">New Brunswick</td><td style="padding:10px;text-align:right;">$7,500 (1.5%)</td><td style="padding:10px;text-align:right;">Varies</td></tr>
</table>
<h2>Ontario Land Transfer Tax Calculator</h2>
<p>Ontario uses tiered rates: 0.5% on first $55K, 1.0% on $55K–$250K, 1.5% on $250K–$400K, 2.0% on $400K–$2M. Toronto adds identical municipal rates on top.</p>
<h2>BC Property Transfer Tax</h2>
<p>BC's PTT: 1% on first $200K, 2% on $200K–$2M, 3% on $2M+. First-time buyers get a FULL exemption on homes under $500K and partial exemption up to $525K.</p>
<h2>Alberta Advantage</h2>
<p>Alberta and Saskatchewan are the only provinces without meaningful land transfer taxes. On a $620K Calgary home, an Ontario buyer would save $9,475 vs buying the equivalent in Toronto. This is a genuine financial advantage for Alberta buyers.</p>`
  },
  "closed-vs-open-mortgage-canada":{
    title:"Closed vs Open Mortgage in Canada — Which Should You Choose?",
    desc:"Closed mortgages have lower rates but break penalties. Open mortgages have no penalties but much higher rates. Here's when each makes sense.",
    category:"Tips",date:"June 13, 2026",readTime:"5 min read",
    content:`<h2>Closed Mortgage</h2>
<p>A closed mortgage locks you in for the full term. You can't pay it off early (beyond allowed prepayments) without paying a break penalty.</p>
<ul>
<li><strong>Rate:</strong> Lower (currently 4.84–4.99% for 5-year fixed)</li>
<li><strong>Prepayment:</strong> Usually 10–20% of original balance per year without penalty</li>
<li><strong>Break penalty:</strong> 3 months interest (variable) or IRD (fixed)</li>
<li><strong>Best for:</strong> Most homebuyers who plan to stay in the home for the term</li>
</ul>
<h2>Open Mortgage</h2>
<p>An open mortgage can be paid off at any time with no penalty.</p>
<ul>
<li><strong>Rate:</strong> Much higher — typically Prime + 0.75% to 1.00% (currently ~5.20–5.45%)</li>
<li><strong>Prepayment:</strong> Unlimited — pay off whenever you want</li>
<li><strong>Break penalty:</strong> None</li>
<li><strong>Best for:</strong> Selling soon, expecting a large windfall, very short-term bridge financing</li>
</ul>
<h2>Side by Side Comparison</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Factor</th><th style="padding:10px;text-align:right;">Closed</th><th style="padding:10px;text-align:right;">Open</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Rate (5-year)</td><td style="padding:10px;text-align:right;color:#16a34a;font-weight:700;">4.84%</td><td style="padding:10px;text-align:right;color:#dc2626;">5.35%</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Monthly ($500K)</td><td style="padding:10px;text-align:right;color:#16a34a;">$2,855</td><td style="padding:10px;text-align:right;color:#dc2626;">$3,068</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">5-year extra cost</td><td style="padding:10px;text-align:right;">—</td><td style="padding:10px;text-align:right;color:#dc2626;">+$12,780</td></tr>
<tr><td style="padding:10px;">Early payoff penalty</td><td style="padding:10px;text-align:right;">Yes</td><td style="padding:10px;text-align:right;color:#16a34a;">None</td></tr>
</table>
<h2>The Verdict</h2>
<p>For 95% of Canadian homebuyers, a closed mortgage is the right choice. The rate savings over an open mortgage are significant. Unless you have a very specific short-term need — selling within months, expecting an inheritance — choose closed.</p>
<p>If you want flexibility, choose a variable rate closed mortgage. The break penalty is only 3 months interest (much less than a fixed IRD), and you still benefit from the lower rate.</p>`
  },
  "mortgage-rates-vancouver-2026":{
    title:"Mortgage Rates Vancouver 2026 — Can You Still Afford to Buy?",
    desc:"Mortgage rates and affordability in Vancouver 2026. Average home $1.25M. What income you need, PTT exemptions, and smarter alternatives to the city core.",
    category:"Rates",date:"June 12, 2026",readTime:"6 min read",
    content:`<h2>Vancouver Affordability Reality 2026</h2>
<p>Vancouver remains North America's second least affordable city after Hong Kong. With an average home price of $1.25M, the income required to qualify is beyond most single earners. Yet people continue to buy — here's how.</p>
<h2>What Income Do You Need to Buy in Vancouver?</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Property</th><th style="padding:10px;text-align:right;">Price</th><th style="padding:10px;text-align:right;">Min. Down</th><th style="padding:10px;text-align:right;">Income Needed</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Studio Condo</td><td style="padding:10px;text-align:right;">$550K</td><td style="padding:10px;text-align:right;">$35K</td><td style="padding:10px;text-align:right;">~$100K/yr</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">1BR Condo</td><td style="padding:10px;text-align:right;">$750K</td><td style="padding:10px;text-align:right;">$55K</td><td style="padding:10px;text-align:right;">~$140K/yr</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">2BR Condo/Townhouse</td><td style="padding:10px;text-align:right;">$1.1M</td><td style="padding:10px;text-align:right;">$220K</td><td style="padding:10px;text-align:right;">~$200K/yr</td></tr>
<tr><td style="padding:10px;">Detached House</td><td style="padding:10px;text-align:right;">$1.8M+</td><td style="padding:10px;text-align:right;">$360K+</td><td style="padding:10px;text-align:right;">~$330K/yr</td></tr>
</table>
<h2>Current Mortgage Rates in Vancouver</h2>
<p>Vancouver rates are consistent with BC province-wide rates. Best 5-year fixed from 4.84% through Vancity, Coast Capital, or a mortgage broker. Variable from 3.35%.</p>
<h2>Smarter Alternatives Near Vancouver</h2>
<ul>
<li><strong>Surrey/Langley:</strong> $780–920K — 30-40 min to downtown, significantly more space</li>
<li><strong>Abbotsford:</strong> $650K — Fraser Valley, growing tech sector, 1hr by car</li>
<li><strong>Chilliwack:</strong> $580K — 90 min, excellent affordability, strong growth</li>
<li><strong>Kelowna:</strong> $750K — 4hr drive, tech hub, lifestyle appeal</li>
</ul>
<h2>Vancouver Property Transfer Tax</h2>
<p>BC PTT on a $1.25M Vancouver property: 1% on $200K + 2% on $1.05M = $23,000. First-time buyers get no PTT exemption at this price point (exemption only applies under $500K).</p>`
  },
  "amortization-period-canada":{
    title:"Mortgage Amortization in Canada — 25 vs 30 Years Explained",
    desc:"25 vs 30 year amortization in Canada. Who qualifies for 30 years, how much extra interest you pay, and when a longer amortization makes sense.",
    category:"Tips",date:"June 11, 2026",readTime:"5 min read",
    content:`<h2>What is Amortization?</h2>
<p>Amortization is the total time to pay off your mortgage. It's different from your term (how long your current rate is locked in). Most Canadians have a 25-year amortization but sign 5-year terms at a time, renewing multiple times over the life of the mortgage.</p>
<h2>25-Year vs 30-Year: The Numbers</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Factor</th><th style="padding:10px;text-align:right;">25 Years</th><th style="padding:10px;text-align:right;">30 Years</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Monthly payment ($500K at 4.89%)</td><td style="padding:10px;text-align:right;font-weight:700;">$2,855</td><td style="padding:10px;text-align:right;font-weight:700;">$2,635</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Monthly savings</td><td style="padding:10px;text-align:right;">—</td><td style="padding:10px;text-align:right;color:#16a34a;">$220/mo</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Total interest paid</td><td style="padding:10px;text-align:right;">$356,500</td><td style="padding:10px;text-align:right;color:#dc2626;">$448,600</td></tr>
<tr><td style="padding:10px;">Extra interest cost</td><td style="padding:10px;text-align:right;">—</td><td style="padding:10px;text-align:right;color:#dc2626;">+$92,100</td></tr>
</table>
<h2>Who Qualifies for 30-Year Amortization in Canada?</h2>
<p>As of 2024–2026, 30-year amortization with less than 20% down (insured mortgage) is available to:</p>
<ul>
<li><strong>First-time home buyers</strong> purchasing a <strong>newly built home</strong></li>
</ul>
<p>All other buyers with less than 20% down are limited to 25 years. Buyers with 20%+ down (conventional mortgage) can choose up to 30 years with most lenders regardless of buyer status.</p>
<h2>When Does a Longer Amortization Make Sense?</h2>
<ul>
<li>You're at the top of your budget and need lower payments to qualify</li>
<li>You plan to make prepayments anyway — many mortgages allow 10–20% extra per year</li>
<li>You're a first-time buyer who expects income to grow significantly</li>
</ul>
<h2>The Prepayment Strategy</h2>
<p>Choose 30 years for lower mandatory payments, but make extra payments when you can. This gives you flexibility — you're not locked into the higher 25-year payment, but you can still pay off faster when cash allows.</p>`
  },
  "second-mortgage-canada":{
    title:"Second Mortgage in Canada 2026 — How It Works & When to Use One",
    desc:"Everything about second mortgages in Canada. How to qualify, current rates, costs, risks, and better alternatives you should consider first.",
    category:"Tips",date:"June 10, 2026",readTime:"6 min read",
    content:`<h2>What is a Second Mortgage?</h2>
<p>A second mortgage is a loan secured against your home that sits behind your first (primary) mortgage. Because it's in second position — meaning the first mortgage lender gets paid first if you default — second mortgages carry higher interest rates and more risk.</p>
<h2>Second Mortgage vs HELOC vs Refinancing</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:#f1f5f9;"><th style="padding:10px;text-align:left;">Option</th><th style="padding:10px;text-align:right;">Rate</th><th style="padding:10px;text-align:right;">Best For</th></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">Second Mortgage</td><td style="padding:10px;text-align:right;color:#dc2626;">7–12%+</td><td style="padding:10px;text-align:right;">Short-term, bruised credit</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:10px;">HELOC</td><td style="padding:10px;text-align:right;">~4.95%</td><td style="padding:10px;text-align:right;">Ongoing flexible needs</td></tr>
<tr><td style="padding:10px;">Refinance</td><td style="padding:10px;text-align:right;">4.84–4.99%</td><td style="padding:10px;text-align:right;">Large lump sum need</td></tr>
</table>
<h2>When a Second Mortgage Makes Sense</h2>
<ul>
<li>You can't qualify for a HELOC due to credit or income issues</li>
<li>You need money quickly and your first mortgage has a large break penalty</li>
<li>Bridge financing — buying a new home before selling your current one</li>
<li>Short-term solution while improving credit to refinance at better rates</li>
</ul>
<h2>How to Qualify for a Second Mortgage</h2>
<ul>
<li><strong>Equity:</strong> Most lenders require at least 20% equity remaining after the second mortgage</li>
<li><strong>Credit:</strong> Some lenders go as low as 550 credit score for second mortgages</li>
<li><strong>Income:</strong> Less strict than first mortgages — equity is the primary security</li>
</ul>
<h2>Second Mortgage Costs</h2>
<p>Beyond the high interest rate, second mortgages often include lender fees (1–3% of loan), legal fees ($1,000–$2,000), appraisal fees ($300–$500), and broker fees. Total costs can add up to 3–5% of the loan amount upfront.</p>
<h2>Better Alternatives to Consider First</h2>
<ol>
<li>Refinance your first mortgage (if break penalty is manageable)</li>
<li>HELOC — much lower rate if you qualify</li>
<li>Personal line of credit — for smaller amounts</li>
<li>Credit union — more flexible qualification than banks</li>
</ol>`
  },
};;

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
