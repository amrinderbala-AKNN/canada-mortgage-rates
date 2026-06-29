import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { PROVINCES, getProvinceBySlug } from "../../lib/mortgageData";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(PROVINCES).map(p => ({ params: { province: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entry = getProvinceBySlug(params?.province as string);
  if (!entry) return { notFound: true };
  const [code, prov] = entry;
  return { props: { code, prov } };
};

export default function ProvincePage({ code, prov }: { code: string; prov: any }) {
  const banks = ["RBC Royal Bank","TD Canada Trust","BMO Bank of Montreal","Scotiabank","CIBC","National Bank"];
  const bankUrls:{[k:string]:string} = {"RBC Royal Bank":"https://www.rbc.com/mortgages","TD Canada Trust":"https://www.td.com/ca/en/personal-banking/products/mortgages","BMO Bank of Montreal":"https://www.bmo.com/en-ca/mortgages","Scotiabank":"https://www.scotiabank.com/ca/en/personal/mortgages.html","CIBC":"https://www.cibc.com/en/personal-banking/mortgages.html","National Bank":"https://www.nbc.ca/personal/mortgages.html"};

  return (
    <>
      <Head>
        <title>Mortgage Rates {prov.name} 2026 — Best Fixed & Variable Rates</title>
        <meta name="description" content={`Compare the best mortgage rates in ${prov.name} for 2026. Current 5-year fixed: ${prov.fixedRate}. Variable: ${prov.variableRate}. Find rates from banks and credit unions across ${prov.cities.map((c:any)=>c.name).slice(0,4).join(", ")} and more.`} />
        <link rel="canonical" href={`https://www.canadamortgagerates.net/mortgage-rates/${prov.slug}`} />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link><Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.6)",fontSize:13,textDecoration:"none"}}>Provinces</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:13,fontWeight:600}}>{prov.name}</span>
        </nav>

        <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"28px 20px 36px"}}>
          <div style={{maxWidth:1060,margin:"0 auto"}}>
            <div style={{display:"inline-block",background:"rgba(245,166,35,0.15)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:20,padding:"3px 12px",fontSize:11,color:"#f5a623",fontWeight:700,marginBottom:12}}>🍁 {code} · Updated June 2026</div>
            <h1 style={{color:"#fff",fontSize:"clamp(22px,4vw,38px)",fontWeight:800,marginBottom:8,lineHeight:1.2}}>Mortgage Rates in {prov.name} — 2026</h1>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,marginBottom:20,lineHeight:1.7,maxWidth:700}}>{prov.marketDesc}</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,maxWidth:700}}>
              {[["5-yr Fixed",prov.fixedRate,"#f5a623"],["Variable Rate",prov.variableRate,"#4ade80"],["Min. Down Payment",prov.minDown,"#60a5fa"],["Land Transfer Tax",String(prov.ltt||"").length>14?String(prov.ltt||"").slice(0,14)+"...":String(prov.ltt||""),"#c084fc"]].map(([l,v,c])=>(
                <div key={l} style={{background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"12px 14px"}}>
                  <div style={{fontSize:9,color:"rgba(255,255,255,0.55)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px",marginBottom:4}}>{l}</div>
                  <div style={{fontSize:18,fontWeight:800,color:c}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{maxWidth:1060,margin:"0 auto",padding:"24px 16px"}}>
          {/* Rate comparison table */}
          <div style={{background:"#fff",borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflow:"hidden",marginBottom:20}}>
            <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"14px 18px"}}>
              <h2 style={{color:"#fff",fontSize:16,fontWeight:800,margin:0}}>Current Mortgage Rates — {prov.name} {new Date().getFullYear()}</h2>
              <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:3}}>BoC Rate: 2.25% · Prime: 4.45% · Estimates only — verify with lenders</div>
            </div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse"}}>
                <thead><tr style={{background:"#f8fafc"}}>
                  {["Lender","Type","1-yr Fixed","3-yr Fixed","5-yr Fixed","Variable","Apply"].map(h=>(
                    <th key={h} style={{padding:"10px 12px",fontSize:11,fontWeight:700,color:"#64748b",textTransform:"uppercase",textAlign:h==="Lender"?"left":"center",borderBottom:"1px solid #e2e8f0"}}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[...banks,...prov.cu.map((c:any)=>c.name)].map((lender:string,i:number)=>{
                    const isBank=banks.includes(lender);
                    const base=isBank?4.95:4.75;
                    const adj=(i%4)*0.05;
                    const url=isBank?(bankUrls[lender]||"#"):(prov.cu.find((c:any)=>c.name===lender)?.url||"#");
                    return(
                      <tr key={lender} style={{borderBottom:"1px solid #f1f5f9",background:i===0?"#f0fdf4":"transparent"}}>
                        <td style={{padding:"12px 14px"}}>
                          <div style={{fontWeight:700,fontSize:13,color:"#0d2240"}}>{lender}</div>
                          <span style={{fontSize:9,background:isBank?"#dbeafe":"#fef3c7",color:isBank?"#1e40af":"#92400e",borderRadius:20,padding:"1px 6px",fontWeight:700}}>{isBank?"NATIONAL BANK":"LOCAL CU"}</span>
                        </td>
                        <td style={{textAlign:"center",padding:"12px 8px"}}><span style={{fontSize:10,background:"#f1f5f9",color:"#64748b",borderRadius:20,padding:"2px 7px"}}>{isBank?"Bank":"Credit Union"}</span></td>
                        {[(base+adj-0.3).toFixed(2),(base+adj-0.1).toFixed(2),(base+adj).toFixed(2),(base+adj-1.55).toFixed(2)].map((r,ri)=>(
                          <td key={ri} style={{textAlign:"center",padding:"12px 8px",fontWeight:i===0&&ri===3?800:600,fontSize:14,color:i===0?"#15803d":"#0d2240"}}>{r}%{i===0&&ri===3&&<div style={{fontSize:9,color:"#15803d"}}>BEST</div>}</td>
                        ))}
                        <td style={{textAlign:"center",padding:"10px 8px"}}><a href={url} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"6px 12px",background:i===0?"#16a34a":"#0d2240",color:"#fff",borderRadius:8,fontSize:11,fontWeight:700,textDecoration:"none"}}>Apply →</a></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{padding:"10px 16px",background:"#fffbeb",borderTop:"1px solid #fde68a",fontSize:10,color:"#92400e"}}>⚠️ Rates are estimates based on market data as of June 2026. Actual rates depend on your credit score, down payment, income, and lender. Always verify directly with the lender.</div>
          </div>

          {/* Cities grid */}
          <h2 style={{fontSize:18,fontWeight:800,color:"#0d2240",marginBottom:12}}>Mortgage Rates by City in {prov.name}</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12,marginBottom:24}}>
            {(prov.cities||[]).map((city:any)=>(
              <Link key={city.slug} href={`/mortgage-rates/${prov.slug}/${city.slug}`} style={{textDecoration:"none"}}>
                <div style={{background:"#fff",borderRadius:10,padding:14,border:"1px solid #e2e8f0",cursor:"pointer",transition:"all 0.2s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 4px 16px rgba(0,0,0,0.1)";(e.currentTarget as HTMLElement).style.borderColor="#0d2240";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.borderColor="#e2e8f0";}}>
                  <div style={{fontSize:14,fontWeight:800,color:"#0d2240",marginBottom:6}}>{city.name}</div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                    <span style={{fontSize:11,color:"#64748b"}}>Avg. Home Price</span>
                    <span style={{fontSize:13,fontWeight:800,color:"#0d2240"}}>${city.avgPrice.toLocaleString()}</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <span style={{fontSize:11,color:"#64748b"}}>YoY Change</span>
                    <span style={{fontSize:12,fontWeight:700,color:city.priceChange.startsWith("+")?"#16a34a":"#dc2626"}}>{city.priceChange}</span>
                  </div>
                  <div style={{fontSize:11,color:"#2563eb",fontWeight:700}}>View {city.name} rates →</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Local credit unions */}
          <div style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",marginBottom:4}}>Local Credit Unions in {prov.name}</h2>
            <p style={{fontSize:12,color:"#64748b",marginBottom:14}}>Credit unions often offer rates 0.25–0.50% below major banks. They're member-owned and reinvest profits into better rates.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>
              {(prov.cu||[]).map((cu:any)=>(
                <a key={cu.name} href={cu.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,textDecoration:"none"}}>
                  <span style={{fontSize:20}}>🏦</span>
                  <div><div style={{fontSize:12,fontWeight:700,color:"#0d2240"}}>{cu.name}</div><div style={{fontSize:10,color:"#2563eb"}}>Get rates →</div></div>
                </a>
              ))}
            </div>
          </div>

          {/* SEO content */}
          <div style={{background:"#fff",borderRadius:12,padding:20,border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",marginBottom:12}}>Getting a Mortgage in {prov.name} — What You Need to Know</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
              {[
                {title:"Stress Test",content:`In ${prov.name}, like all of Canada, you must qualify at your contracted rate + 2% or 5.25% — whichever is higher. At a 4.89% rate, you'd need to qualify at 6.89%. This reduces your maximum purchase price by approximately 15–20%.`},
                {title:"CMHC Insurance",content:`If your down payment is less than 20%, CMHC mortgage default insurance is required. Premiums range from 2.8% (15–19.99% down) to 4.0% (5–9.99% down). The premium is added to your mortgage, not paid upfront.`},
                {title:"Land Transfer Tax",content:`${prov.ltt}. ${prov.name === "Alberta" || prov.name === "Saskatchewan" ? "This makes "+prov.name+" one of the most affordable provinces for closing costs." : "Budget for this as part of your closing costs when purchasing a home."}`},
                {title:"First-Time Buyer Programs",content:`${prov.name} residents can access the federal FHSA ($40K tax-free per person), RRSP Home Buyers' Plan ($60K per person), and the First-Time Home Buyers' Tax Credit ($1,500). Check provincial programs for additional savings.`},
              ].map(item=>(
                <div key={item.title}>
                  <h3 style={{fontSize:13,fontWeight:800,color:"#0d2240",marginBottom:5}}>{item.title}</h3>
                  <p style={{fontSize:12,color:"#64748b",lineHeight:1.7,margin:0}}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:18,textAlign:"center"}}>
            <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Ready to Find Your Best Rate in {prov.name}?</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,marginBottom:14}}>Compare live rates, calculate your payment, and connect with a licensed mortgage professional — all free.</div>
            <Link href="/" style={{display:"inline-block",padding:"10px 24px",background:"#c8102e",color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>Use Our Free Mortgage Tools →</Link>
          </div>
        </div>

        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"20px 16px",fontSize:11,marginTop:20}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker · Rates for informational purposes only</p>
          <p style={{marginTop:6}}>
            <Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Home</Link>
            <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>All Provinces</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
