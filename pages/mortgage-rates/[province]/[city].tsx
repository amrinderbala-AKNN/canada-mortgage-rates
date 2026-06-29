import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { PROVINCES, getCityBySlug } from "../../../lib/mortgageData";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { province: string; city: string } }[] = [];
  Object.values(PROVINCES).forEach(prov => {
    prov.cities.forEach((city:any) => {
      paths.push({ params: { province: prov.slug, city: city.slug } });
    });
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const result = getCityBySlug(params?.province as string, params?.city as string);
  if (!result) return { notFound: true };
  return { props: result };
};

function calcPayment(price: number, rate: number, years: number): number {
  const down = price * 0.1;
  const principal = price - down;
  const r = rate / 100 / 12;
  const n = years * 12;
  return Math.round(principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
}

export default function CityPage({ code, prov, city }: { code: string; prov: any; city: any }) {
  const fixedRate = parseFloat(prov.fixedRate);
  const varRate = parseFloat(prov.variableRate);
  const monthlyFixed = calcPayment(city.avgPrice, fixedRate, 25);
  const monthlyVar = calcPayment(city.avgPrice, varRate, 25);
  const down5 = Math.round(city.avgPrice * 0.05);
  const cmhc5 = Math.round((city.avgPrice - down5) * 0.04);

  const faqs = [
    {q:`What is the average home price in ${city.name}?`,a:`The average home price in ${city.name} is approximately $${city.avgPrice.toLocaleString()} as of 2026, representing a ${city.priceChange} change year-over-year.`},
    {q:`What is the best mortgage rate in ${city.name} right now?`,a:`Current 5-year fixed rates in ${city.name} start around ${prov.fixedRate}, while variable rates start around ${prov.variableRate}. Credit unions in ${prov.name} often offer rates 0.25–0.50% below major banks.`},
    {q:`How much income do I need to buy a home in ${city.name}?`,a:`To afford a $${city.avgPrice.toLocaleString()} home in ${city.name} with 10% down at ${prov.fixedRate}, you would need approximately $${Math.round(monthlyFixed/0.39*12).toLocaleString()}/year gross income to meet the GDS ratio of 39%.`},
    {q:`What is the minimum down payment for a home in ${city.name}?`,a:`For a $${city.avgPrice.toLocaleString()} home, the minimum down payment is ${city.avgPrice < 500000 ? "5% ($"+down5.toLocaleString()+")" : city.avgPrice < 1000000 ? "5% on first $500K + 10% on remainder" : "20%"}. With 5% down, CMHC insurance of $${cmhc5.toLocaleString()} is added to your mortgage.`},
    {q:`Should I get a fixed or variable mortgage in ${city.name}?`,a:`With the Bank of Canada holding at 2.25%, variable rates (${prov.variableRate}) are currently lower than 5-year fixed (${prov.fixedRate}). Variable saves money if rates stay flat or drop, but fixed gives payment certainty. Consult a mortgage broker for your specific situation.`},
  ];

  return (
    <>
      <Head>
        <title>Mortgage Rates {city.name} {new Date().getFullYear()} — Best Fixed & Variable Rates | Canada Mortgage Rates</title>
        <meta name="description" content={`Compare the best mortgage rates in ${city.name}, ${prov.name} for ${new Date().getFullYear()}. Average home: $${city.avgPrice.toLocaleString()}. 5-yr fixed from ${prov.fixedRate}. Variable from ${prov.variableRate}. Monthly payment calculator and first-time buyer programs.`} />
        <link rel="canonical" href={`https://www.canadamortgagerates.net/mortgage-rates/${prov.slug}/${city.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
          "@context":"https://schema.org","@type":"FAQPage",
          "mainEntity":faqs.map(f=>({
            "@type":"Question","name":f.q,
            "acceptedAnswer":{"@type":"Answer","text":f.a}
          }))
        })}}/>
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link><Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.6)",fontSize:12,textDecoration:"none"}}>Provinces</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <Link href={`/mortgage-rates/${prov.slug}`} style={{color:"rgba(255,255,255,0.6)",fontSize:12,textDecoration:"none"}}>{prov.name}</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:12,fontWeight:600}}>{city.name}</span>
        </nav>

        <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"28px 20px 36px"}}>
          <div style={{maxWidth:1060,margin:"0 auto"}}>
            <div style={{display:"inline-block",background:"rgba(245,166,35,0.15)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:20,padding:"3px 12px",fontSize:11,color:"#f5a623",fontWeight:700,marginBottom:12}}>📍 {city.name}, {prov.name} · Updated June 2026</div>
            <h1 style={{color:"#fff",fontSize:"clamp(20px,4vw,36px)",fontWeight:800,marginBottom:8,lineHeight:1.2}}>Mortgage Rates in {city.name}, {prov.name} — {new Date().getFullYear()}</h1>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,marginBottom:20,lineHeight:1.7,maxWidth:650}}>Compare current fixed and variable mortgage rates, monthly payment estimates, and first-time buyer programs for {city.name} homebuyers.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,maxWidth:750}}>
              {[["Avg. Home Price","$"+city.avgPrice.toLocaleString(),"#f5a623"],["YoY Price Change",city.priceChange,city.priceChange.startsWith("+")?"#4ade80":"#f87171"],["5-yr Fixed Rate",prov.fixedRate,"#60a5fa"],["Variable Rate",prov.variableRate,"#c084fc"],["Monthly (Fixed)","$"+monthlyFixed.toLocaleString(),"#34d399"],["Monthly (Var.)","$"+monthlyVar.toLocaleString(),"#f9a8d4"]].map(([l,v,c])=>(
                <div key={l} style={{background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"10px 12px"}}>
                  <div style={{fontSize:9,color:"rgba(255,255,255,0.55)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px",marginBottom:3}}>{l}</div>
                  <div style={{fontSize:16,fontWeight:800,color:c as string}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{maxWidth:1060,margin:"0 auto",padding:"24px 16px"}}>
          <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"10px 16px",marginBottom:20,fontSize:12,color:"#92400e"}}>
            <strong>⚠️ Disclaimer:</strong> Rates and prices are estimates for informational purposes only. Not financial advice. Always verify with lenders directly. Canada Mortgage Rates is not a licensed mortgage broker.
          </div>

          {/* Down payment table */}
          <div style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",marginBottom:4}}>Down Payment & Monthly Payment — {city.name}</h2>
            <p style={{fontSize:12,color:"#64748b",marginBottom:14}}>Based on $${city.avgPrice.toLocaleString()} average home price at current {prov.name} rates.</p>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",minWidth:480}}>
                <thead><tr style={{background:"#f8fafc"}}>
                  {["Down %","Down Amount","CMHC Fee","Mortgage","Monthly Fixed","Monthly Variable"].map(h=>(
                    <th key={h} style={{padding:"9px 10px",fontSize:10,fontWeight:700,color:"#64748b",textTransform:"uppercase",textAlign:h==="Down %"?"left":"right",borderBottom:"1px solid #e2e8f0",whiteSpace:"nowrap"}}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[5,10,15,20].map((pct)=>{
                    const downAmt=Math.round(city.avgPrice*pct/100);
                    const cmhcRate=pct<10?0.04:pct<15?0.031:pct<20?0.028:0;
                    const cmhcAmt=Math.round((city.avgPrice-downAmt)*cmhcRate);
                    const mortgage=city.avgPrice-downAmt+cmhcAmt;
                    const rf=fixedRate/100/12,rv2=varRate/100/12,n=300;
                    const mF=Math.round(mortgage*(rf*Math.pow(1+rf,n))/(Math.pow(1+rf,n)-1));
                    const mV=Math.round(mortgage*(rv2*Math.pow(1+rv2,n))/(Math.pow(1+rv2,n)-1));
                    return(
                      <tr key={pct} style={{borderBottom:"1px solid #f1f5f9",background:pct===20?"#f0fdf4":"transparent"}}>
                        <td style={{padding:"10px",fontWeight:700,color:"#0d2240"}}>{pct}%{pct===20&&<span style={{fontSize:9,background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"1px 5px",marginLeft:4,fontWeight:700}}>NO CMHC</span>}</td>
                        <td style={{padding:"10px",textAlign:"right",fontWeight:600}}>${downAmt.toLocaleString()}</td>
                        <td style={{padding:"10px",textAlign:"right",color:cmhcAmt===0?"#16a34a":"#dc2626",fontWeight:600}}>{cmhcAmt===0?"$0 ✅":"$"+cmhcAmt.toLocaleString()}</td>
                        <td style={{padding:"10px",textAlign:"right",fontWeight:600}}>${mortgage.toLocaleString()}</td>
                        <td style={{padding:"10px",textAlign:"right",fontWeight:pct===20?800:600,color:pct===20?"#15803d":"#0d2240"}}>${mF.toLocaleString()}/mo</td>
                        <td style={{padding:"10px",textAlign:"right",fontWeight:600,color:"#7c3aed"}}>${mV.toLocaleString()}/mo</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",marginBottom:14}}>Frequently Asked Questions — Mortgages in {city.name}</h2>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {faqs.map((faq,i)=>(
                <div key={i} style={{borderBottom:i<faqs.length-1?"1px solid #f1f5f9":"none",paddingBottom:i<faqs.length-1?14:0}}>
                  <h3 style={{fontSize:13,fontWeight:800,color:"#0d2240",marginBottom:5}}>{faq.q}</h3>
                  <p style={{fontSize:12,color:"#64748b",lineHeight:1.7,margin:0}}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Local lenders */}
          <div style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:14,fontWeight:800,color:"#0d2240",marginBottom:10}}>Mortgage Lenders Serving {city.name}</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))",gap:8}}>
              {prov.cu.map((cu:any)=>(
                <a key={cu.name} href={cu.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:8,padding:"9px 12px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,textDecoration:"none"}}>
                  <span>🏦</span><div><div style={{fontSize:11,fontWeight:700,color:"#0d2240"}}>{cu.name}</div><div style={{fontSize:9,color:"#16a34a",fontWeight:600}}>Local CU →</div></div>
                </a>
              ))}
            </div>
          </div>

          {/* Other cities */}
          <div style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:13,fontWeight:800,color:"#0d2240",marginBottom:10}}>Other Cities in {prov.name}</h2>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {prov.cities.filter((c:any)=>c.slug!==city.slug).map((c:any)=>(
                <Link key={c.slug} href={`/mortgage-rates/${prov.slug}/${c.slug}`} style={{padding:"5px 12px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:20,fontSize:11,fontWeight:600,color:"#0d2240",textDecoration:"none"}}>{c.name}</Link>
              ))}
            </div>
          </div>

          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:18,textAlign:"center"}}>
            <div style={{color:"#fff",fontSize:15,fontWeight:800,marginBottom:6}}>Ready to Buy in {city.name}?</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,marginBottom:14}}>Use our free calculators, stress test, and connect with a licensed {prov.name} mortgage professional.</div>
            <Link href="/" style={{display:"inline-block",padding:"10px 24px",background:"#c8102e",color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>Use Free Mortgage Tools →</Link>
          </div>
        </div>

        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"20px 16px",fontSize:11,marginTop:20}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker · Rates for informational purposes only</p>
          <p style={{marginTop:6}}>
            <Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Home</Link>
            <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>All Provinces</Link>
            <Link href={`/mortgage-rates/${prov.slug}`} style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>{prov.name}</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
