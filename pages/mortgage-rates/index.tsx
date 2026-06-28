import Head from "next/head";
import Link from "next/link";
import { PROVINCES } from "../../lib/mortgageData";

export default function MortgageRatesIndex() {
  const provList = Object.entries(PROVINCES);
  return (
    <>
      <Head>
        <title>Mortgage Rates by Province — Canada 2026</title>
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
          <p style={{fontSize:14,color:"#64748b",marginBottom:24,lineHeight:1.7}}>Compare current fixed and variable mortgage rates, average home prices, and first-time buyer programs in every Canadian province. Bank of Canada rate: <strong>2.25%</strong> · Prime Rate: <strong>4.45%</strong></p>
          <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"12px 16px",marginBottom:24,fontSize:12,color:"#92400e"}}>
            ⚠️ Rates are estimates for informational purposes only. Canada Mortgage Rates is not a licensed mortgage broker. Always verify with lenders directly.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:14}}>
            {provList.map(([code, prov]) => {
              const cityCount = Array.isArray(prov.cities) ? prov.cities.length : 0;
              const cuCount = Array.isArray(prov.cu) ? prov.cu.length : 0;
              return (
                <Link key={code} href={`/mortgage-rates/${prov.slug}`} style={{textDecoration:"none"}}>
                  <div style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0",cursor:"pointer",height:"100%",boxSizing:"border-box" as any}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                      <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",margin:0}}>{prov.name}</h2>
                      <span style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{code}</span>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
                      {[["5-yr Fixed",prov.fixedRate],["Variable",prov.variableRate],["Min. Down",prov.minDown],["LTT",String(prov.ltt||"").slice(0,14)]].map(([l,v])=>(
                        <div key={l} style={{background:"#f8fafc",borderRadius:8,padding:"8px 10px"}}>
                          <div style={{fontSize:9,color:"#64748b",fontWeight:700,textTransform:"uppercase" as any,marginBottom:2}}>{l}</div>
                          <div style={{fontSize:13,fontWeight:800,color:"#0d2240"}}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{fontSize:11,color:"#64748b",marginBottom:10}}>{cityCount} cities · {cuCount} local credit unions</div>
                    <div style={{fontSize:12,color:"#2563eb",fontWeight:700}}>View {prov.name} rates →</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={{marginTop:32,background:"#fff",borderRadius:12,padding:20,border:"1px solid #e2e8f0"}}>
            <h2 style={{fontSize:18,fontWeight:800,color:"#0d2240",marginBottom:12}}>About Canadian Mortgage Rates in 2026</h2>
            <p style={{fontSize:13,color:"#64748b",lineHeight:1.8,marginBottom:10}}>The Bank of Canada has held its overnight rate at 2.25% as of June 2026, with Prime Rate at 4.45%. Variable rates are around 3.30–3.80%, while 5-year fixed rates range from 4.80–5.20%.</p>
            <p style={{fontSize:13,color:"#64748b",lineHeight:1.8,marginBottom:10}}>Credit unions often offer rates 0.25–0.50% below the major banks. Using a mortgage broker gives you access to 30+ lenders at once — free to use.</p>
            <p style={{fontSize:13,color:"#64748b",lineHeight:1.8}}>All buyers must pass Canada's mortgage stress test, qualifying at rate + 2% or 5.25%. First-time buyers can use FHSA ($40K) and RRSP HBP ($60K) to maximize down payment.</p>
          </div>
        </div>
        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center" as any,padding:"20px 16px",fontSize:11,marginTop:40}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker</p>
          <p style={{marginTop:6}}><Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:16,textDecoration:"none"}}>Home</Link><Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>All Provinces</Link></p>
        </footer>
      </div>
    </>
  );
}
