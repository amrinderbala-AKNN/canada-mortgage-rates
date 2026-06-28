import Head from "next/head";
import Link from "next/link";
import { PROVINCES } from "../../lib/mortgageData";

export default function MortgageRatesIndex() {
  const provList = Object.entries(PROVINCES);
  return (
    <>
      <Head>
        <title>Mortgage Rates by Province — Canada Mortgage Rates 2026</title>
        <meta name="description" content="Compare current mortgage rates across all 10 Canadian provinces. Find the best fixed and variable rates in your city — updated June 2026." />
        <link rel="canonical" href="https://www.canadamortgagerates.net/mortgage-rates" />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:12}}>
          <Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:16,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"rgba(255,255,255,0.7)",fontSize:13}}>Mortgage Rates by Province</span>
        </nav>
        <div style={{maxWidth:1060,margin:"0 auto",padding:"28px 16px"}}>
          <h1 style={{fontSize:"clamp(22px,4vw,36px)",fontWeight:800,color:"#0d2240",marginBottom:8}}>Mortgage Rates Across Canada — 2026</h1>
          <p style={{fontSize:14,color:"#64748b",marginBottom:24,lineHeight:1.7}}>Compare current fixed and variable mortgage rates, average home prices, and first-time buyer programs in every Canadian province and city. Bank of Canada overnight rate: <strong>2.25%</strong> · Prime Rate: <strong>4.45%</strong></p>
          <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"12px 16px",marginBottom:24,fontSize:13,color:"#92400e"}}>
            <strong>⚠️ Disclaimer:</strong> Rates shown are estimates for informational purposes only. Always verify current rates directly with lenders. Canada Mortgage Rates is not a licensed mortgage broker.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:14}}>
            {provList.map(([code, prov]) => (
              <Link key={code} href={`/mortgage-rates/${prov.slug}`} style={{textDecoration:"none"}}>
                <div style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0",transition:"all 0.2s",cursor:"pointer"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 4px 20px rgba(0,0,0,0.1)";(e.currentTarget as HTMLElement).style.borderColor="#0d2240";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.borderColor="#e2e8f0";}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                    <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",margin:0}}>{prov.name}</h2>
                    <span style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{code}</span>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
                    {[["5-yr Fixed",prov.fixedRate],["Variable",prov.variableRate],["Min. Down",prov.minDown],["LTT",prov.ltt.length>12?prov.ltt.slice(0,12)+"...":prov.ltt]].map(([l,v])=>(
                      <div key={l} style={{background:"#f8fafc",borderRadius:8,padding:"8px 10px"}}>
                        <div style={{fontSize:9,color:"#64748b",fontWeight:700,textTransform:"uppercase",marginBottom:2}}>{l}</div>
                        <div style={{fontSize:13,fontWeight:800,color:"#0d2240"}}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{fontSize:11,color:"#64748b",marginBottom:10,lineHeight:1.5}}>{prov.cities.length} cities covered · {prov.cu.length} local credit unions</div>
                  <div style={{fontSize:12,color:"#2563eb",fontWeight:700}}>View {prov.name} rates →</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{marginTop:32,background:"#fff",borderRadius:12,padding:20,border:"1px solid #e2e8f0"}}>
            <h2 style={{fontSize:18,fontWeight:800,color:"#0d2240",marginBottom:12}}>About Canadian Mortgage Rates in 2026</h2>
            <p style={{fontSize:13,color:"#64748b",lineHeight:1.8,marginBottom:10}}>The Bank of Canada has held its overnight rate at 2.25% for five consecutive decisions as of June 2026, with the Prime Rate at 4.45%. This means variable mortgage rates are currently around 3.30–3.80%, while 5-year fixed rates range from 4.80–5.20% depending on your lender, down payment, and credit profile.</p>
            <p style={{fontSize:13,color:"#64748b",lineHeight:1.8,marginBottom:10}}>Canadian mortgage rates vary by province and lender. Credit unions often offer rates 0.25–0.50% below the major banks. Using a mortgage broker gives you access to 30+ lenders at once — and brokers are paid by the lender, not you.</p>
            <p style={{fontSize:13,color:"#64748b",lineHeight:1.8}}>All buyers must pass Canada's mortgage stress test, qualifying at your contracted rate + 2% or 5.25% (whichever is higher). First-time buyers can use the FHSA ($40K tax-free) and RRSP Home Buyers' Plan ($60K) to maximize their down payment.</p>
          </div>
        </div>
        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"20px 16px",fontSize:11,marginTop:40}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker · Rates for informational purposes only</p>
          <p style={{marginTop:6}}><Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:16}}>Home</Link><Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.5)"}}>All Provinces</Link></p>
        </footer>
      </div>
    </>
  );
}
