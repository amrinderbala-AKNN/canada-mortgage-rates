import Head from "next/head";
import Link from "next/link";
import { PROVINCES } from "../../lib/mortgageData";

export default function FiveYearFixed() {
  const rate = "3.99%";
  const provinces = Object.values(PROVINCES);

  return (
    <>
      <Head>
        <title>5-Year Fixed Mortgage Rates Canada 2026 — Compare Best Rates</title>
        <meta name="description" content="Compare the best 5-year fixed mortgage rates in Canada for 2026. Current best rate: 3.99%. Compare banks, credit unions and online lenders. Free calculator included." />
        <link rel="canonical" href="https://www.canadamortgagerates.net/mortgage-rates/5-year-fixed" />
        <meta property="og:title" content="5-Year Fixed Mortgage Rates Canada 2026" />
        <meta property="og:description" content="Compare the best 5-year fixed mortgage rates across Canada. Current best: 3.99%. Free tools and calculators." />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link>
          <Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.6)",fontSize:13,textDecoration:"none"}}>Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:13,fontWeight:600}}>5-Year Fixed</span>
        </nav>

        <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"28px 20px 36px"}}>
          <div style={{maxWidth:1060,margin:"0 auto"}}>
            <div style={{display:"inline-block",background:"rgba(245,166,35,0.15)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:20,padding:"3px 12px",fontSize:11,color:"#f5a623",fontWeight:700,marginBottom:12}}>🍁 Updated {new Date().toLocaleDateString("en-CA",{month:"long",year:"numeric"})}</div>
            <h1 style={{color:"#fff",fontSize:"clamp(22px,4vw,38px)",fontWeight:800,marginBottom:8,lineHeight:1.2}}>5-Year Fixed Mortgage Rates in Canada — 2026</h1>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,marginBottom:20,lineHeight:1.7,maxWidth:700}}>The 5-year fixed mortgage is Canada's most popular mortgage product. With the Bank of Canada holding at 2.25%, 5-year fixed rates have stabilized. Compare the best rates from banks, credit unions, and online lenders across all provinces.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,maxWidth:700}}>
              {[["Best Rate",rate,"#f5a623"],["BoC Rate","2.25%","#4ade80"],["Prime Rate","4.45%","#60a5fa"],["Term","5 Years","#c084fc"]].map(([l,v,c])=>(
                <div key={l} style={{background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"12px 14px"}}>
                  <div style={{fontSize:9,color:"rgba(255,255,255,0.55)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px",marginBottom:4}}>{l}</div>
                  <div style={{fontSize:18,fontWeight:800,color:c as string}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{maxWidth:1060,margin:"0 auto",padding:"24px 16px"}}>

          {/* What is 5-year fixed */}
          <div style={{background:"#fff",borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",padding:"20px 24px",marginBottom:20}}>
            <h2 style={{color:"#0d2240",fontSize:18,fontWeight:800,marginBottom:12}}>What is a 5-Year Fixed Mortgage?</h2>
            <p style={{color:"#374151",fontSize:14,lineHeight:1.8,marginBottom:12}}>A 5-year fixed mortgage locks in your interest rate for 5 years. Your monthly payment stays the same regardless of what the Bank of Canada does with interest rates. This is Canada's most popular mortgage term — roughly 70% of Canadian homebuyers choose a 5-year fixed.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,marginTop:16}}>
              {[
                {title:"✅ Pros",points:["Payment certainty for 5 years","Protection from rate increases","Easier to budget","Most competitive rates available"]},
                {title:"⚠️ Cons",points:["Higher rate than variable","Break penalty can be costly (IRD)","Miss out if rates drop","Less flexibility"]}
              ].map(({title,points})=>(
                <div key={title} style={{background:"#f8fafc",borderRadius:10,padding:"14px 16px"}}>
                  <div style={{fontWeight:700,color:"#0d2240",marginBottom:8,fontSize:14}}>{title}</div>
                  {points.map(p=><div key={p} style={{fontSize:13,color:"#374151",marginBottom:4}}>• {p}</div>)}
                </div>
              ))}
            </div>
          </div>

          {/* Rates by province */}
          <div style={{background:"#fff",borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflow:"hidden",marginBottom:20}}>
            <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"14px 18px"}}>
              <h2 style={{color:"#fff",fontSize:16,fontWeight:800,margin:0}}>5-Year Fixed Rates by Province — 2026</h2>
              <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:3}}>Estimated rates — verify with lenders before applying</div>
            </div>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead>
                <tr style={{background:"#f8fafc"}}>
                  {["Province","5-Yr Fixed","Variable","Compare"].map(h=><th key={h} style={{padding:"10px 16px",fontSize:11,fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:h==="Province"?"left":"center"}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {provinces.map((prov,i)=>(
                  <tr key={prov.slug} style={{borderBottom:"1px solid #f1f5f9",background:i%2===0?"#fff":"#fafbfc"}}>
                    <td style={{padding:"12px 16px"}}>
                      <Link href={`/mortgage-rates/${prov.slug}`} style={{color:"#0d2240",fontWeight:700,fontSize:14,textDecoration:"none"}}>{prov.name}</Link>
                    </td>
                    <td style={{textAlign:"center",padding:"12px 16px",fontSize:16,fontWeight:800,color:"#0d2240"}}>{prov.fixedRate}</td>
                    <td style={{textAlign:"center",padding:"12px 16px",fontSize:14,color:"#64748b"}}>{prov.variableRate}</td>
                    <td style={{textAlign:"center",padding:"12px 16px"}}>
                      <Link href={`/mortgage-rates/${prov.slug}`} style={{display:"inline-block",padding:"5px 12px",background:"#0d2240",color:"#fff",borderRadius:7,fontSize:11,fontWeight:700,textDecoration:"none"}}>Compare →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <div style={{background:"#fff",borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",padding:"20px 24px",marginBottom:20}}>
            <h2 style={{color:"#0d2240",fontSize:18,fontWeight:800,marginBottom:16}}>5-Year Fixed Mortgage FAQ</h2>
            {[
              {q:"What is the best 5-year fixed mortgage rate in Canada right now?",a:`The best 5-year fixed mortgage rate in Canada as of 2026 is approximately ${rate}, available from select credit unions and online lenders. Major banks typically offer rates 0.25–0.50% higher. Always compare multiple lenders before committing.`},
              {q:"Should I choose a 5-year fixed or variable rate in 2026?",a:"With the Bank of Canada holding at 2.25%, variable rates are currently lower than 5-year fixed. However, 5-year fixed offers payment certainty. If you need budget predictability or are at the top of your affordability, fixed is safer. If you have financial flexibility and believe rates will stay flat or drop, variable may save you money."},
              {q:"Can I break a 5-year fixed mortgage early?",a:"Yes, but it's costly. Breaking a fixed mortgage early triggers an Interest Rate Differential (IRD) penalty, which can be $10,000–$30,000 depending on your balance and the rate gap. Variable mortgages only charge 3 months interest. If there's any chance you'll move or refinance within 5 years, consider a shorter term."},
              {q:"What is the stress test rate for a 5-year fixed mortgage?",a:`The mortgage stress test requires you to qualify at the higher of your contracted rate + 2%, or 5.25%. At ${rate}, you'd need to qualify at approximately ${(parseFloat(rate)+2).toFixed(2)}%. This reduces your maximum purchase price by roughly 15–20%.`},
            ].map(({q,a})=>(
              <div key={q} style={{marginBottom:16,paddingBottom:16,borderBottom:"1px solid #f1f5f9"}}>
                <div style={{fontWeight:700,color:"#0d2240",fontSize:14,marginBottom:6}}>{q}</div>
                <div style={{color:"#374151",fontSize:13,lineHeight:1.7}}>{a}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:"24px",textAlign:"center",marginBottom:20}}>
            <div style={{color:"#f5a623",fontSize:12,fontWeight:700,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.5px"}}>Free Tools</div>
            <h3 style={{color:"#fff",fontSize:20,fontWeight:800,marginBottom:8}}>Compare 5-Year Fixed Rates in Your Province</h3>
            <p style={{color:"rgba(255,255,255,0.7)",fontSize:13,marginBottom:16}}>Use our free calculator to see your monthly payment and compare lenders side by side.</p>
            <Link href="/" style={{display:"inline-block",padding:"12px 28px",background:"#f5a623",color:"#0d2240",borderRadius:10,fontSize:14,fontWeight:800,textDecoration:"none"}}>Compare Rates Free →</Link>
          </div>

          <p style={{fontSize:11,color:"#9ca3af",textAlign:"center"}}>Rates are estimates based on Bank of Canada data and typical lender spreads. Always verify directly with your lender. Canada Mortgage Rates is not a licensed mortgage broker.</p>
        </div>
      </div>
    </>
  );
}
