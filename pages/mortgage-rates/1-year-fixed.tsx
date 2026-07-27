import Head from "next/head";
import Link from "next/link";
import { PROVINCES } from "../../lib/mortgageData";

export default function MortgageTypePage() {

  const title = "1-Year Fixed Mortgage Rates Canada 2026 — Compare Best Rates";
  const desc = "Compare the best 1-year fixed mortgage rates in Canada for 2026. Current best rate: 4.49%. Short-term fixed rates for buyers who expect rates to drop.";
  const h1 = "1-Year Fixed Mortgage Rates in Canada — 2026";
  const intro = "A 1-year fixed mortgage gives you rate certainty for 12 months with the flexibility to renegotiate sooner than a 5-year term. Popular with buyers who expect rates to drop further. Compare 1-year fixed rates from banks, credit unions, and online lenders.";
  const bestRate = "4.49%";
  const rateKey = "fixedRate";
  const slug = "1-year-fixed";
  const provinces = Object.values(PROVINCES);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`https://www.canadamortgagerates.net/mortgage-rates/${slug}`} />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link>
          <Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.6)",fontSize:13,textDecoration:"none"}}>Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:13,fontWeight:600}}>{h1.split(" in ")[0]}</span>
        </nav>
        <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"28px 20px 36px"}}>
          <div style={{maxWidth:1060,margin:"0 auto"}}>
            <div style={{display:"inline-block",background:"rgba(245,166,35,0.15)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:20,padding:"3px 12px",fontSize:11,color:"#f5a623",fontWeight:700,marginBottom:12}}>🍁 Updated {new Date().toLocaleDateString("en-CA",{month:"long",year:"numeric"})}</div>
            <h1 style={{color:"#fff",fontSize:"clamp(22px,4vw,38px)",fontWeight:800,marginBottom:8,lineHeight:1.2}}>{h1}</h1>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,marginBottom:20,lineHeight:1.7,maxWidth:700}}>{intro}</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,maxWidth:500}}>
              {[["Best Rate",bestRate,"#f5a623"],["BoC Rate","2.25%","#4ade80"],["Prime Rate","4.45%","#60a5fa"]].map(([l,v,c])=>(
                <div key={l} style={{background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"12px 14px"}}>
                  <div style={{fontSize:9,color:"rgba(255,255,255,0.55)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px",marginBottom:4}}>{l}</div>
                  <div style={{fontSize:18,fontWeight:800,color:c as string}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{maxWidth:1060,margin:"0 auto",padding:"24px 16px"}}>
          <div style={{background:"#fff",borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflow:"hidden",marginBottom:20}}>
            <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"14px 18px"}}>
              <h2 style={{color:"#fff",fontSize:16,fontWeight:800,margin:0}}>Rates by Province — 2026</h2>
              <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:3}}>Estimated rates — verify with lenders before applying</div>
            </div>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead>
                <tr style={{background:"#f8fafc"}}>
                  {["Province","Rate","Compare"].map(h=><th key={h} style={{padding:"10px 16px",fontSize:11,fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:h==="Province"?"left":"center"}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {provinces.map((prov:any,i:number)=>(
                  <tr key={prov.slug} style={{borderBottom:"1px solid #f1f5f9",background:i%2===0?"#fff":"#fafbfc"}}>
                    <td style={{padding:"12px 16px"}}><Link href={`/mortgage-rates/${prov.slug}`} style={{color:"#0d2240",fontWeight:700,fontSize:14,textDecoration:"none"}}>{prov.name}</Link></td>
                    <td style={{textAlign:"center",padding:"12px 16px",fontSize:16,fontWeight:800,color:"#0d2240"}}>{prov[rateKey]}</td>
                    <td style={{textAlign:"center",padding:"12px 16px"}}><Link href={`/mortgage-rates/${prov.slug}`} style={{display:"inline-block",padding:"5px 12px",background:"#0d2240",color:"#fff",borderRadius:7,fontSize:11,fontWeight:700,textDecoration:"none"}}>Compare →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:"24px",textAlign:"center",marginBottom:20}}>
            <h3 style={{color:"#fff",fontSize:20,fontWeight:800,marginBottom:8}}>Compare All Rates Free</h3>
            <p style={{color:"rgba(255,255,255,0.7)",fontSize:13,marginBottom:16}}>Use our free tools to compare lenders and calculate your payments.</p>
            <Link href="/" style={{display:"inline-block",padding:"12px 28px",background:"#f5a623",color:"#0d2240",borderRadius:10,fontSize:14,fontWeight:800,textDecoration:"none"}}>Compare Rates →</Link>
          </div>
          <p style={{fontSize:11,color:"#9ca3af",textAlign:"center"}}>Rates are estimates. Always verify with your lender. Canada Mortgage Rates is not a licensed mortgage broker.</p>
        </div>
      </div>
    </>
  );
}
