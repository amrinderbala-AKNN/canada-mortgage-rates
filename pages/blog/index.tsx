import Head from "next/head";
import Link from "next/link";

const POSTS = [
  {slug:"best-mortgage-rates-canada-2026",title:"Best Mortgage Rates in Canada — June 2026",desc:"The Bank of Canada held its overnight rate at 2.25% for the fifth consecutive decision. Here's what that means for fixed and variable mortgage rates across Canada.",category:"Rates",date:"June 28, 2026",readTime:"5 min read"},
  {slug:"how-to-pass-mortgage-stress-test-canada",title:"How to Pass Canada's Mortgage Stress Test in 2026",desc:"The stress test requires you to qualify at your rate + 2% or 5.25%. Here's exactly how it works, what it means for your buying power, and 5 ways to qualify for more.",category:"Qualifying",date:"June 25, 2026",readTime:"6 min read"},
  {slug:"fhsa-rrsp-home-buyers-plan-guide",title:"FHSA + RRSP Home Buyers' Plan: The Complete Guide",desc:"First-time buyers can combine the FHSA ($40K) and RRSP Home Buyers' Plan ($60K) to access up to $200K tax-free per couple. Here's how to stack both programs.",category:"First-Time Buyers",date:"June 22, 2026",readTime:"7 min read"},
  {slug:"fixed-vs-variable-mortgage-2026",title:"Fixed vs Variable Mortgage in 2026 — Which Should You Choose?",desc:"With variable rates around 3.35% and 5-year fixed at 4.89%, the spread is significant. We break down the pros, cons, and who should choose each.",category:"Rates",date:"June 20, 2026",readTime:"5 min read"},
  {slug:"mortgage-renewal-guide-canada",title:"Mortgage Renewal Guide: How to Get the Best Rate in Canada",desc:"Millions of Canadians are renewing in 2025–2027. Here's how to shop around, when to start, and how to negotiate a better rate than your current lender offers.",category:"Renewal",date:"June 18, 2026",readTime:"6 min read"},
  {slug:"cmhc-insurance-explained",title:"CMHC Mortgage Insurance Explained — Is It Really That Bad?",desc:"CMHC insurance is required with less than 20% down. We explain the premiums, how they're calculated, and why CMHC-insured mortgages sometimes get better rates.",category:"CMHC",date:"June 15, 2026",readTime:"4 min read"},
  {slug:"first-time-home-buyer-programs-canada",title:"Every First-Time Home Buyer Program in Canada (2026)",desc:"Complete guide to all federal and provincial programs — FHSA, HBP, tax credits, provincial grants, and the new 2026 GST/HST rebate on new homes.",category:"First-Time Buyers",date:"June 12, 2026",readTime:"8 min read"},
  {slug:"canada-housing-market-outlook-2026",title:"Canada Housing Market Outlook 2026 — City by City Forecast",desc:"Calgary and Edmonton lead growth at 6–8%. Toronto is flat. Vancouver stabilizing. Montreal up 4%. Here's what analysts expect for the rest of 2026.",category:"Market",date:"June 10, 2026",readTime:"6 min read"},
  {slug:"mortgage-broker-vs-bank-canada",title:"Mortgage Broker vs Bank: Which is Better in Canada?",desc:"Banks offer convenience but rarely the best rates. Brokers access 30+ lenders and are free to use. Here's when to use each and what to ask.",category:"Tips",date:"June 8, 2026",readTime:"5 min read"},
  {slug:"rent-vs-buy-canada-2026",title:"Rent vs Buy in Canada 2026 — The Real Math",desc:"With home prices elevated and rates above 4%, is buying still worth it? We run the actual numbers for Toronto, Calgary, Winnipeg, and Vancouver.",category:"Market",date:"June 5, 2026",readTime:"7 min read"},
,
  {slug:"mortgage-rates-ontario-2026",title:"Mortgage Rates Ontario 2026 — Best Fixed & Variable Rates",desc:"Compare the best mortgage rates in Ontario for 2026. Toronto, Ottawa, Hamilton and more.",category:"Rates",date:"June 28, 2026",readTime:"5 min read"},
  {slug:"mortgage-rates-alberta-2026",title:"Mortgage Rates Alberta 2026 — Calgary & Edmonton Best Rates",desc:"Best mortgage rates in Alberta. No land transfer tax, Calgary up 7.2%, Edmonton up 5.8%.",category:"Rates",date:"June 27, 2026",readTime:"5 min read"},
  {slug:"mortgage-rates-bc-2026",title:"Mortgage Rates British Columbia 2026 — Vancouver, Victoria & Beyond",desc:"Best mortgage rates in BC. Vancouver average $1.25M. PTT exemptions for first-time buyers.",category:"Rates",date:"June 26, 2026",readTime:"5 min read"},
  {slug:"mortgage-rates-quebec-2026",title:"Mortgage Rates Quebec 2026 — Montreal, Quebec City & Beyond",desc:"Best mortgage rates in Quebec. Montreal average $580K. Desjardins vs national banks.",category:"Rates",date:"June 25, 2026",readTime:"5 min read"},
  {slug:"how-much-mortgage-can-i-afford-canada",title:"How Much Mortgage Can I Afford in Canada?",desc:"How lenders calculate affordability. GDS ratio, TDS ratio, stress test with real income examples.",category:"Qualifying",date:"June 24, 2026",readTime:"7 min read"},
  {slug:"minimum-down-payment-canada-2026",title:"Minimum Down Payment in Canada 2026 — Complete Guide",desc:"5% vs 10% vs 20% down. CMHC costs. How to save faster with FHSA and RRSP HBP.",category:"First-Time Buyers",date:"June 23, 2026",readTime:"6 min read"},
  {slug:"mortgage-pre-approval-canada",title:"Mortgage Pre-Approval in Canada: Everything You Need to Know",desc:"What a pre-approval is, documents needed, how long it lasts, and broker vs bank.",category:"Tips",date:"June 22, 2026",readTime:"6 min read"},
  {slug:"home-equity-line-of-credit-canada",title:"HELOC in Canada 2026 — Home Equity Line of Credit Guide",desc:"How much you can borrow, current rates, HELOC vs refinancing, best uses.",category:"Tips",date:"June 21, 2026",readTime:"6 min read"},
  {slug:"self-employed-mortgage-canada",title:"Self-Employed Mortgage in Canada 2026 — How to Qualify",desc:"What lenders look for, documents needed, A-lender vs B-lender for self-employed buyers.",category:"Qualifying",date:"June 20, 2026",readTime:"7 min read"},
  {slug:"mortgage-penalties-canada",title:"Mortgage Break Penalties in Canada — How Much Will It Cost?",desc:"IRD vs 3-month interest. How to calculate your penalty and when breaking is worth it.",category:"Tips",date:"June 19, 2026",readTime:"6 min read"},
  {slug:"mortgage-rates-winnipeg-2026",title:"Mortgage Rates Winnipeg 2026 — Best Fixed & Variable Rates",desc:"Compare rates in Winnipeg MB. Average home $380K. Local credit unions and first-time buyer programs.",category:"Rates",date:"June 18, 2026",readTime:"5 min read"},
  {slug:"mortgage-rates-toronto-2026",title:"Mortgage Rates Toronto 2026 — Best Fixed & Variable Rates",desc:"Best mortgage rates in Toronto. Average $1.1M. Income needed, LTT, and affordability tips.",category:"Rates",date:"June 17, 2026",readTime:"6 min read"},
  {slug:"mortgage-rates-calgary-2026",title:"Mortgage Rates Calgary 2026 — Best Fixed & Variable Rates",desc:"Best rates in Calgary. Average $620K up 7.2%. No LTT. ATB Financial and Servus CU.",category:"Rates",date:"June 16, 2026",readTime:"5 min read"},
  {slug:"bank-of-canada-rate-history-canada",title:"Bank of Canada Rate History — How Rates Changed (2019–2026)",desc:"Complete BoC rate timeline. COVID lows, 2023 peak at 5%, cutting cycle, current 2.25%.",category:"Rates",date:"June 15, 2026",readTime:"7 min read"},
  {slug:"land-transfer-tax-canada",title:"Land Transfer Tax in Canada 2026 — Every Province Explained",desc:"LTT rates in every province, first-time buyer exemptions, and how to minimize closing costs.",category:"First-Time Buyers",date:"June 14, 2026",readTime:"6 min read"},
  {slug:"closed-vs-open-mortgage-canada",title:"Closed vs Open Mortgage in Canada — Which Should You Choose?",desc:"Closed has lower rates but penalties. Open has no penalties but much higher rates.",category:"Tips",date:"June 13, 2026",readTime:"5 min read"},
  {slug:"mortgage-rates-vancouver-2026",title:"Mortgage Rates Vancouver 2026 — Can You Still Afford to Buy?",desc:"Vancouver average $1.25M. Income needed, PTT, and smarter affordable alternatives.",category:"Rates",date:"June 12, 2026",readTime:"6 min read"},
  {slug:"amortization-period-canada",title:"Mortgage Amortization — 25 vs 30 Years in Canada",desc:"Who qualifies for 30 years, how much extra interest, and when longer amortization makes sense.",category:"Tips",date:"June 11, 2026",readTime:"5 min read"},
  {slug:"second-mortgage-canada",title:"Second Mortgage in Canada 2026 — How It Works",desc:"How second mortgages work, rates, costs, risks, and better alternatives to consider first.",category:"Tips",date:"June 10, 2026",readTime:"6 min read"},
];

const categoryColors:{[k:string]:string} = {
  "Rates":"#c8102e","Qualifying":"#7c3aed","First-Time Buyers":"#16a34a",
  "Renewal":"#0891b2","CMHC":"#92400e","Market":"#2563eb","Tips":"#0d2240"
};

export default function BlogIndex() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  return (
    <>
      <Head>
        <title>Canadian Mortgage Blog — Rates, Tips & Market Updates 2026</title>
        <meta name="description" content="Expert Canadian mortgage advice, rate updates, and housing market analysis. Fixed vs variable, stress test guide, FHSA, first-time buyer programs, and more." />
        <link rel="canonical" href="https://www.canadamortgagerates.net/blog" />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link>
          <Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:13}}>Blog</span>
        </nav>
        <div style={{maxWidth:1060,margin:"0 auto",padding:"28px 16px"}}>
          <h1 style={{fontSize:"clamp(22px,4vw,36px)",fontWeight:800,color:"#0d2240",marginBottom:6}}>Canadian Mortgage Blog</h1>
          <p style={{fontSize:14,color:"#64748b",marginBottom:24}}>Expert mortgage advice, rate analysis, and housing market updates for Canadian homebuyers.</p>

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} style={{textDecoration:"none"}}>
            <div style={{background:"#fff",borderRadius:14,overflow:"hidden",border:"1px solid #e2e8f0",marginBottom:24,boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
              <div style={{background:`linear-gradient(135deg,#0d2240,#1a3a5c)`,padding:"28px 24px"}}>
                <span style={{background:categoryColors[featured.category]||"#0d2240",color:"#fff",borderRadius:20,padding:"3px 10px",fontSize:10,fontWeight:800}}>{featured.category}</span>
                <h2 style={{color:"#fff",fontSize:"clamp(18px,3vw,28px)",fontWeight:800,margin:"12px 0 8px",lineHeight:1.3}}>{featured.title}</h2>
                <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,lineHeight:1.7,marginBottom:12}}>{featured.desc}</p>
                <div style={{display:"flex",gap:12,alignItems:"center"}}>
                  <span style={{color:"#f5a623",fontSize:11,fontWeight:700}}>{featured.date}</span>
                  <span style={{color:"rgba(255,255,255,0.4)",fontSize:11}}>·</span>
                  <span style={{color:"rgba(255,255,255,0.6)",fontSize:11}}>{featured.readTime}</span>
                  <span style={{color:"#f5a623",fontSize:12,fontWeight:700,marginLeft:"auto"}}>Read article →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:14}}>
            {rest.map(post=>(
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{textDecoration:"none"}}>
                <div style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0",height:"100%",boxSizing:"border-box",transition:"all 0.2s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 4px 20px rgba(0,0,0,0.1)";(e.currentTarget as HTMLElement).style.borderColor="#0d2240";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.borderColor="#e2e8f0";}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                    <span style={{background:(categoryColors[post.category]||"#0d2240")+"18",color:categoryColors[post.category]||"#0d2240",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{post.category}</span>
                    <span style={{fontSize:10,color:"#64748b"}}>{post.readTime}</span>
                  </div>
                  <h2 style={{fontSize:14,fontWeight:800,color:"#0d2240",marginBottom:8,lineHeight:1.4}}>{post.title}</h2>
                  <p style={{fontSize:12,color:"#64748b",lineHeight:1.6,marginBottom:12}}>{post.desc}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:10,color:"#94a3b8"}}>{post.date}</span>
                    <span style={{fontSize:12,color:"#2563eb",fontWeight:700}}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"20px 16px",fontSize:11,marginTop:40}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker · For informational purposes only</p>
          <p style={{marginTop:6}}>
            <Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Home</Link>
            <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Rates</Link>
            <Link href="/blog" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>Blog</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
