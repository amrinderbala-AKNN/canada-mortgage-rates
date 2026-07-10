import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    category: "Current Rates",
    questions: [
      {q:"What is the current mortgage rate in Canada?",a:"As of July 2026, the best 5-year fixed mortgage rates in Canada start around 4.84–4.89% through mortgage brokers and credit unions. Variable rates start around 3.30–3.45%. The Bank of Canada's overnight rate is 2.25% with Prime Rate at 4.45%."},
      {q:"What is the Bank of Canada rate today?",a:"The Bank of Canada overnight rate is currently 2.25% (held at its June 10, 2026 decision — the fifth consecutive hold). The Prime Rate is 4.45% and the Bank Rate is 2.50%. The next BoC announcement is July 15, 2026."},
      {q:"Are mortgage rates going down in Canada in 2026?",a:"The Bank of Canada has been holding rates at 2.25% through mid-2026. Most economists expect 1-2 more cuts possible in late 2026 or early 2027 if inflation continues to moderate toward the 2% target. However, rate forecasts are uncertain — always consult a licensed mortgage professional."},
      {q:"What is the best mortgage rate in Canada right now?",a:"The best rates are typically found through mortgage brokers who compare 30+ lenders, or through credit unions which often offer 0.25–0.50% below major bank rates. Use our Rate Finder tool for a personalized estimate based on your profile."},
    ]
  },
  {
    category: "Qualifying & Stress Test",
    questions: [
      {q:"What is the mortgage stress test in Canada?",a:"Canada's mortgage stress test requires all borrowers at federally regulated lenders to qualify at the higher of their contracted rate + 2%, or 5.25%. For example, if your rate is 4.89%, you must prove you can afford payments at 6.89%. This reduces your maximum purchase price by approximately 15–20%."},
      {q:"How much mortgage can I afford in Canada?",a:"Canadian lenders use two ratios: GDS (Gross Debt Service) must be under 39% of gross monthly income, and TDS (Total Debt Service) must be under 44%. As a rough guide: a household earning $100,000/year can typically afford a $475,000–$594,000 home depending on down payment and existing debts. Use our free Affordability Calculator for your specific numbers."},
      {q:"What credit score do I need for a mortgage in Canada?",a:"Most A-lenders (major banks and credit unions) require a minimum credit score of 680. Some lenders accept 650+. Below 650, you may need a B-lender or private lender at higher rates. Scores above 750 typically qualify for the best rates."},
      {q:"Can I get a mortgage if I'm self-employed in Canada?",a:"Yes — but it's more complex. Lenders want 2 years of self-employment history, T1 generals, and NOAs. Some lenders add back certain deductions to increase qualifying income. A mortgage broker is especially valuable for self-employed borrowers as they know which lenders are most flexible."},
    ]
  },
  {
    category: "Down Payment & CMHC",
    questions: [
      {q:"What is the minimum down payment in Canada?",a:"The minimum down payment depends on the purchase price: 5% for homes under $500,000; 5% on first $500K + 10% on the remainder for homes $500K–$999,999; 20% for homes $1M and over. Any purchase under $1.5M with less than 20% down requires CMHC mortgage insurance."},
      {q:"What is CMHC insurance and how much does it cost?",a:"CMHC mortgage default insurance protects the lender if you default. It's required when your down payment is less than 20%. The premium is added to your mortgage: 4.0% with 5–9.99% down, 3.1% with 10–14.99% down, and 2.8% with 15–19.99% down. On a $500K home with 5% down, CMHC adds approximately $19,000 to your mortgage."},
      {q:"What is the FHSA (First Home Savings Account)?",a:"The FHSA lets first-time buyers contribute up to $8,000 per year (lifetime max $40,000 per person) to a tax-deductible, tax-free savings account for their first home. Contributions reduce your taxable income and withdrawals for a qualifying first home are completely tax-free. Couples can combine for $80,000 total."},
      {q:"Can I use my RRSP for a down payment?",a:"Yes — the RRSP Home Buyers' Plan (HBP) lets first-time buyers withdraw up to $60,000 per person ($120,000 per couple) from their RRSP tax-free for a home purchase. You must repay the amount over 15 years. Stack with FHSA for up to $200,000 per couple in tax-free down payment funds."},
    ]
  },
  {
    category: "Fixed vs Variable",
    questions: [
      {q:"Should I get a fixed or variable mortgage in Canada in 2026?",a:"With variable rates around 3.35% and 5-year fixed at 4.89%, variable is currently 1.5% cheaper. Variable makes sense if you have financial flexibility and believe rates will stay flat or drop. Fixed provides payment certainty and is better if you're at the top of your budget. Consult a licensed mortgage professional for advice specific to your situation."},
      {q:"What is the difference between fixed and variable mortgage rates?",a:"A fixed rate stays the same for your entire term (e.g., 5 years). A variable rate moves with the Bank of Canada's Prime Rate. Fixed offers payment certainty; variable offers potential savings but payment uncertainty. Fixed mortgages have larger break penalties (IRD) while variable typically only charge 3 months interest to break."},
      {q:"What is a mortgage term vs amortization period?",a:"Your term is how long your current rate is locked in (typically 1–5 years). Your amortization is the total time to pay off the mortgage (typically 25 years). At the end of each term you renew at current rates. Most Canadians renew their mortgage 4–5 times over the life of their amortization."},
    ]
  },
  {
    category: "Renewal & Refinancing",
    questions: [
      {q:"When should I start shopping for mortgage renewal?",a:"Start shopping 4 months before your maturity date. Most lenders will hold a rate for 120 days. Your current lender's first offer is rarely their best — always get competing quotes before renewing. There is no penalty to switch lenders at renewal."},
      {q:"What is the penalty for breaking a mortgage in Canada?",a:"Variable rate mortgages charge 3 months of interest to break. Fixed rate mortgages charge the greater of 3 months interest or the Interest Rate Differential (IRD). IRD penalties at major banks can be very large — sometimes $10,000–$30,000+. Credit unions and monoline lenders typically have fairer IRD calculations."},
      {q:"What is mortgage refinancing in Canada?",a:"Refinancing means breaking your current mortgage early to access better rates or tap home equity. You'll pay a break penalty but may save more over the remaining term. Renewal (at maturity) is penalty-free and is usually the better time to switch lenders or change terms."},
    ]
  },
  {
    category: "First-Time Buyers",
    questions: [
      {q:"What programs are available for first-time home buyers in Canada?",a:"Federal programs include: FHSA ($40K tax-free per person), RRSP Home Buyers' Plan ($60K per person), First-Time Home Buyers' Tax Credit ($1,500), GST/HST New Home Rebate (removes tax on new builds under $1M), and 30-year amortization for first-time buyers of new builds. Each province also has additional programs — see our First-Time Buyers tab for province-specific programs."},
      {q:"What is the land transfer tax in Canada?",a:"Land transfer tax varies by province. Alberta and Saskatchewan have minimal or no LTT. Ontario charges 0.5–2.5% (Toronto buyers pay double — municipal + provincial). BC charges 1–3% (PTT). Quebec charges 0.5–2% (welcome tax). First-time buyers in most provinces receive rebates. See our province pages for exact rates."},
      {q:"Do I need a home inspection when buying a house in Canada?",a:"A home inspection is not legally required but is strongly recommended. It typically costs $400–$600 and can reveal major issues before you're legally committed. In hot markets some buyers waive inspections to compete — but this carries significant financial risk. Always budget for an inspection."},
    ]
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{[k:string]:boolean}>({});
  
  const toggle = (key: string) => {
    setOpenItems(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <>
      <Head>
        <title>Canadian Mortgage FAQ 2026 — Frequently Asked Questions</title>
        <meta name="description" content="Answers to the most common Canadian mortgage questions. Current rates, stress test, CMHC insurance, FHSA, down payment, fixed vs variable, renewal, and more." />
        <link rel="canonical" href="https://www.canadamortgagerates.net/faq" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.flatMap(cat => cat.questions.map(q => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": { "@type": "Answer", "text": q.a }
          })))
        })}}/>
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link>
          <Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:13}}>FAQ</span>
        </nav>

        <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"36px 20px 44px",textAlign:"center"}}>
          <h1 style={{color:"#fff",fontSize:"clamp(22px,4vw,36px)",fontWeight:800,marginBottom:8}}>Canadian Mortgage FAQ</h1>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,maxWidth:600,margin:"0 auto"}}>Answers to the most common mortgage questions for Canadian homebuyers — updated July 2026.</p>
        </div>

        <div style={{maxWidth:820,margin:"0 auto",padding:"28px 16px"}}>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"12px 16px",marginBottom:20,fontSize:12,color:"#1e40af"}}>
            💡 <strong>Not finding your answer?</strong> Use our <Link href="/" style={{color:"#1e40af",fontWeight:700}}>AI Mortgage Assistant</Link> on the main page — ask any mortgage question and get an instant answer.
          </div>

          {FAQS.map((cat, ci) => (
            <div key={ci} style={{marginBottom:24}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",marginBottom:12,paddingBottom:8,borderBottom:"2px solid #e2e8f0"}}>{cat.category}</h2>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {cat.questions.map((item, qi) => {
                  const key = `${ci}-${qi}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={qi} style={{background:"#fff",borderRadius:10,border:"1px solid #e2e8f0",overflow:"hidden"}}>
                      <button onClick={() => toggle(key)} style={{width:"100%",textAlign:"left",padding:"14px 16px",background:"none",border:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
                        <span style={{fontSize:13,fontWeight:700,color:"#0d2240",lineHeight:1.4}}>{item.q}</span>
                        <span style={{fontSize:18,color:"#64748b",flexShrink:0,transform:isOpen?"rotate(180deg)":"none",transition:"transform 0.2s"}}>▾</span>
                      </button>
                      {isOpen && (
                        <div style={{padding:"0 16px 14px",fontSize:13,color:"#64748b",lineHeight:1.8,borderTop:"1px solid #f1f5f9"}}>
                          <div style={{paddingTop:12}}>{item.a}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:20,textAlign:"center",marginTop:8}}>
            <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Still have questions?</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,marginBottom:14}}>Use our free mortgage calculators or connect with a licensed professional.</div>
            <Link href="/" style={{display:"inline-block",padding:"10px 24px",background:"#c8102e",color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>Go to Mortgage Tools →</Link>
          </div>

          <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:8,padding:"10px 16px",marginTop:16,fontSize:11,color:"#92400e"}}>
            ⚠️ This FAQ is for informational purposes only. Not financial or legal advice. Canada Mortgage Rates is not a licensed mortgage broker. Always consult a licensed professional before making mortgage decisions.
          </div>
        </div>

        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"20px 16px",fontSize:11,marginTop:20}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker</p>
          <p style={{marginTop:6}}>
            <Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Home</Link>
            <Link href="/blog" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Blog</Link>
            <Link href="/about" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>About</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
