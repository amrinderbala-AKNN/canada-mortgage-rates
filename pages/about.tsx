import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Canada Mortgage Rates — canadamortgagerates.net</title>
        <meta name="description" content="Learn about Canada Mortgage Rates — a free Canadian mortgage rate comparison platform covering all 10 provinces. Not a licensed broker. Built for Canadian homebuyers." />
        <link rel="canonical" href="https://www.canadamortgagerates.net/about" />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <Link href="/" style={{color:"rgba(255,255,255,0.7)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"4px 10px",marginRight:4}}>← Home</Link>
          <Link href="/" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Canada Mortgage Rates</Link>
          <span style={{color:"rgba(255,255,255,0.4)"}}>›</span>
          <span style={{color:"#fff",fontSize:13}}>About</span>
        </nav>

        <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",padding:"40px 20px 50px",textAlign:"center"}}>
          <div style={{fontSize:48,marginBottom:12}}>🍁</div>
          <h1 style={{color:"#fff",fontSize:"clamp(24px,4vw,38px)",fontWeight:800,marginBottom:10}}>About Canada Mortgage Rates</h1>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,maxWidth:600,margin:"0 auto",lineHeight:1.7}}>Canada's most complete free mortgage rate comparison platform — built for Canadian homebuyers, by a Canadian homeowner.</p>
        </div>

        <div style={{maxWidth:820,margin:"0 auto",padding:"32px 16px"}}>
          <div style={{background:"#fff",borderRadius:12,padding:"28px 32px",border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:20,fontWeight:800,color:"#0d2240",marginBottom:12}}>Our Mission</h2>
            <p style={{fontSize:14,color:"#64748b",lineHeight:1.8,marginBottom:12}}>Canada Mortgage Rates was built with one goal: give every Canadian homebuyer access to the same mortgage information that industry insiders have — for free, without pressure, and without having to talk to a salesperson first.</p>
            <p style={{fontSize:14,color:"#64748b",lineHeight:1.8}}>Getting a mortgage is one of the most important financial decisions of your life. We believe you deserve clear, unbiased information before you walk into any lender's office.</p>
          </div>

          <div style={{background:"#fff",borderRadius:12,padding:"28px 32px",border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:20,fontWeight:800,color:"#0d2240",marginBottom:16}}>What We Offer</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14}}>
              {[
                {icon:"📊",title:"Rate Comparisons",desc:"Compare mortgage rates from 20+ Canadian lenders including banks and local credit unions across all 10 provinces."},
                {icon:"🧮",title:"Free Calculators",desc:"Payment calculator, affordability calculator, stress test, rent vs buy, and renewal calculator — all free."},
                {icon:"🏠",title:"First-Time Buyer Guides",desc:"Federal and provincial programs, FHSA, RRSP HBP, land transfer tax rebates, and more."},
                {icon:"🏛️",title:"Property Tax Estimator",desc:"Estimate your annual property tax in any Canadian city based on current mill rates."},
                {icon:"📰",title:"Mortgage News",desc:"Real-time Canadian mortgage and real estate news, updated daily."},
                {icon:"📞",title:"Free Consultation",desc:"Connect with a licensed mortgage professional — no obligation, no cost to you."},
              ].map(item=>(
                <div key={item.title} style={{background:"#f8fafc",borderRadius:10,padding:14,border:"1px solid #e2e8f0"}}>
                  <div style={{fontSize:24,marginBottom:8}}>{item.icon}</div>
                  <div style={{fontSize:13,fontWeight:700,color:"#0d2240",marginBottom:5}}>{item.title}</div>
                  <div style={{fontSize:12,color:"#64748b",lineHeight:1.6}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"#fff",borderRadius:12,padding:"28px 32px",border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:20,fontWeight:800,color:"#0d2240",marginBottom:12}}>Our Story</h2>
            <p style={{fontSize:14,color:"#64748b",lineHeight:1.8,marginBottom:12}}>Canada Mortgage Rates was founded in 2026 by a Canadian homeowner who went through the mortgage process and found it unnecessarily confusing. Rate information was scattered, calculators were basic, and most sites were really just lead generation tools for brokers.</p>
            <p style={{fontSize:14,color:"#64748b",lineHeight:1.8,marginBottom:12}}>We set out to build something different — a genuinely useful resource that covers mortgage rates, calculators, property taxes, home insurance, and first-time buyer programs all in one place, for every province and city in Canada.</p>
            <p style={{fontSize:14,color:"#64748b",lineHeight:1.8}}>We're based in Manitoba and cover all 10 Canadian provinces. We're proud to be 100% Canadian-built and 100% free for users.</p>
          </div>

          <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:12,padding:"20px 28px",marginBottom:20}}>
            <h2 style={{fontSize:16,fontWeight:800,color:"#92400e",marginBottom:10}}>⚠️ Important Disclaimer</h2>
            <p style={{fontSize:13,color:"#92400e",lineHeight:1.8,marginBottom:8}}>Canada Mortgage Rates is <strong>not a licensed mortgage broker, mortgage agent, financial advisor, or lender</strong>. We are not registered with FSRA, BCFSA, or any provincial mortgage regulatory authority.</p>
            <p style={{fontSize:13,color:"#92400e",lineHeight:1.8}}>All content on this site is for <strong>informational and educational purposes only</strong>. Mortgage rates shown are estimates — always verify directly with lenders. Consult a licensed mortgage professional before making any financial decisions.</p>
          </div>

          <div style={{background:"#fff",borderRadius:12,padding:"28px 32px",border:"1px solid #e2e8f0",marginBottom:20}}>
            <h2 style={{fontSize:20,fontWeight:800,color:"#0d2240",marginBottom:12}}>Contact Us</h2>
            <p style={{fontSize:14,color:"#64748b",lineHeight:1.8,marginBottom:8}}>Have a question, suggestion, or want to partner with us? We'd love to hear from you.</p>
            <p style={{fontSize:14,color:"#64748b",marginBottom:4}}>📧 Email: <a href="mailto:info@canadamortgagerates.net" style={{color:"#2563eb",fontWeight:600}}>info@canadamortgagerates.net</a></p>
            <p style={{fontSize:14,color:"#64748b",marginBottom:4}}>🐦 Twitter: <a href="https://twitter.com/cdnmortgagerates" target="_blank" rel="noopener noreferrer" style={{color:"#2563eb",fontWeight:600}}>@cdnmortgagerates</a></p>
            <p style={{fontSize:14,color:"#64748b"}}>🌐 Website: <a href="https://www.canadamortgagerates.net" style={{color:"#2563eb",fontWeight:600}}>canadamortgagerates.net</a></p>
          </div>

          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:20,textAlign:"center"}}>
            <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Ready to Compare Mortgage Rates?</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,marginBottom:14}}>Use our free tools to find the best mortgage rate in Canada — no signup required.</div>
            <Link href="/" style={{display:"inline-block",padding:"10px 24px",background:"#c8102e",color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>Go to Mortgage Tools →</Link>
          </div>
        </div>

        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"20px 16px",fontSize:11,marginTop:20}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Not a licensed mortgage broker · For informational purposes only</p>
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
