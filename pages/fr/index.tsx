import Head from "next/head";
import Link from "next/link";

export default function FrenchHome() {
  return (
    <>
      <Head>
        <title>Taux Hypothécaires au Canada 2026 — Comparez les Meilleurs Taux</title>
        <meta name="description" content="Comparez les taux hypothécaires fixes et variables au Canada en 2026. Banques, coopératives de crédit, calculateurs hypothécaires, programmes pour premiers acheteurs. Gratuit." />
        <link rel="canonical" href="https://www.canadamortgagerates.net/fr" />
        <link rel="alternate" hrefLang="en" href="https://www.canadamortgagerates.net" />
        <link rel="alternate" hrefLang="fr" href="https://www.canadamortgagerates.net/fr" />
      </Head>
      <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#f4f6f9",minHeight:"100vh"}}>
        <nav style={{background:"#0d2240",padding:"12px 20px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <Link href="/fr" style={{color:"#f5a623",fontWeight:800,fontSize:15,textDecoration:"none"}}>🍁 Taux Hypothécaires Canada</Link>
          <div style={{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"}}>
            <Link href="/" style={{color:"rgba(255,255,255,0.6)",fontSize:12,textDecoration:"none",border:"1px solid rgba(255,255,255,0.2)",borderRadius:6,padding:"3px 8px"}}>EN</Link>
            <span style={{color:"#fff",fontSize:12,fontWeight:700,border:"1px solid #f5a623",borderRadius:6,padding:"3px 8px"}}>FR</span>
          </div>
        </nav>
        <div style={{background:"linear-gradient(135deg,#0a1628,#0d2240,#1a3a5c)",padding:"40px 20px 50px",textAlign:"center"}}>
          <div style={{display:"inline-block",background:"rgba(245,166,35,0.15)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:20,padding:"4px 14px",marginBottom:16,fontSize:11,color:"#f5a623",fontWeight:700}}>🍁 LA PLATEFORME HYPOTHÉCAIRE LA PLUS COMPLÈTE DU CANADA</div>
          <h1 style={{color:"#fff",fontSize:"clamp(22px,4vw,38px)",fontWeight:800,marginBottom:10,lineHeight:1.2}}>Comparez les <span style={{color:"#f5a623"}}>Taux Hypothécaires</span><br/>Partout au Canada</h1>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,marginBottom:20}}>Banques · Coopératives de crédit · Alimenté par l'IA · Gratuit pour toujours</p>
          <div style={{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap",marginBottom:24}}>
            {[["2,25%","Taux BoC"],["4,45%","Taux préférentiel"],["20+","Prêteurs"],["Gratuit","Toujours"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"10px 18px",textAlign:"center"}}>
                <div style={{color:"#f5a623",fontSize:20,fontWeight:800}}>{v}</div>
                <div style={{color:"rgba(255,255,255,0.6)",fontSize:10,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
          <Link href="/" style={{display:"inline-block",padding:"12px 28px",background:"#c8102e",color:"#fff",borderRadius:8,fontSize:14,fontWeight:700,textDecoration:"none"}}>Utiliser les outils en anglais →</Link>
        </div>
        <div style={{maxWidth:1060,margin:"0 auto",padding:"28px 16px"}}>
          <div style={{background:"#fff",borderRadius:12,padding:20,border:"1px solid #e2e8f0",marginBottom:16}}>
            <h2 style={{fontSize:18,fontWeight:800,color:"#0d2240",marginBottom:12}}>Taux Hypothécaires Actuels — Juin 2026</h2>
            <p style={{fontSize:13,color:"#64748b",lineHeight:1.8,marginBottom:12}}>La Banque du Canada maintient son taux directeur à <strong>2,25%</strong> avec le taux préférentiel à 4,45%. Voici les taux actuels au Canada:</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:12,marginBottom:16}}>
              {[["Taux variable","~3,35%","#16a34a"],["Fixe 1 an","~4,50%","#2563eb"],["Fixe 3 ans","~4,75%","#7c3aed"],["Fixe 5 ans","~4,89%","#0d2240"]].map(([l,v,c])=>(
                <div key={l} style={{background:"#f8fafc",borderRadius:10,padding:"14px 16px",textAlign:"center",border:"1px solid #e2e8f0"}}>
                  <div style={{fontSize:10,color:"#64748b",fontWeight:700,textTransform:"uppercase" as any,marginBottom:6}}>{l}</div>
                  <div style={{fontSize:22,fontWeight:800,color:c}}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:8,padding:"10px 14px",fontSize:12,color:"#92400e"}}>⚠️ Les taux sont des estimations à titre informatif seulement. Canada Mortgage Rates n'est pas un courtier hypothécaire agréé.</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14,marginBottom:20}}>
            {[
              {icon:"🧮",title:"Calculateurs Hypothécaires",desc:"Calculez vos paiements mensuels, votre capacité d'emprunt, le test de résistance, et comparez louer vs acheter.",link:"/",linkText:"Utiliser les calculateurs →"},
              {icon:"🇨🇦",title:"Programmes Premiers Acheteurs",desc:"CELIAPP (40 000 $ par personne), RAP REER (60 000 $), crédit d'impôt fédéral (1 500 $) et programmes provinciaux.",link:"/",linkText:"Voir tous les programmes →"},
              {icon:"📊",title:"Taux par Province",desc:"Comparez les taux dans toutes les provinces et villes canadiennes.",link:"/mortgage-rates",linkText:"Comparer par province →"},
              {icon:"📞",title:"Consultation Gratuite",desc:"Connectez-vous avec un professionnel hypothécaire agréé. Gratuit, sans obligation.",link:"/",linkText:"Demander une consultation →"},
            ].map(item=>(
              <div key={item.title} style={{background:"#fff",borderRadius:12,padding:18,border:"1px solid #e2e8f0"}}>
                <div style={{fontSize:28,marginBottom:10}}>{item.icon}</div>
                <h3 style={{fontSize:14,fontWeight:800,color:"#0d2240",marginBottom:6}}>{item.title}</h3>
                <p style={{fontSize:12,color:"#64748b",lineHeight:1.6,marginBottom:10}}>{item.desc}</p>
                <Link href={item.link} style={{fontSize:12,color:"#2563eb",fontWeight:700,textDecoration:"none"}}>{item.linkText}</Link>
              </div>
            ))}
          </div>
          <div style={{background:"#fff",borderRadius:12,padding:20,border:"1px solid #e2e8f0",marginBottom:16}}>
            <h2 style={{fontSize:16,fontWeight:800,color:"#0d2240",marginBottom:12}}>Ressources Hypothécaires en Français</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {name:"Desjardins — Hypothèques",url:"https://www.desjardins.com/particuliers/emprunts-credit/hypotheque/"},
                {name:"Banque Nationale — Hypothèques",url:"https://www.bnc.ca/particuliers/prets-hypothecaires.html"},
                {name:"SCHL — Assurance Hypothécaire",url:"https://www.cmhc-schl.gc.ca/fr"},
                {name:"Banque du Canada — Taux",url:"https://www.banqueducanada.ca/taux/"},
                {name:"Canada.ca — CELIAPP",url:"https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/compte-epargne-libre-impot-achat-premiere-propriete.html"},
                {name:"Ratehub — Taux Québec",url:"https://www.ratehub.ca/mortgage-rates/quebec"},
              ].map(r=>(
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:8,padding:"9px 12px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,textDecoration:"none",fontSize:11,fontWeight:600,color:"#0d2240"}}>
                  🏦 {r.name}
                </a>
              ))}
            </div>
          </div>
          <div style={{background:"linear-gradient(135deg,#0d2240,#1a3a5c)",borderRadius:12,padding:20,textAlign:"center" as any}}>
            <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Nos outils sont disponibles en anglais</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,marginBottom:14}}>Calculateurs, comparaison de taux, test de résistance — version française à venir.</div>
            <Link href="/" style={{display:"inline-block",padding:"10px 24px",background:"#c8102e",color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>Accéder aux outils →</Link>
          </div>
        </div>
        <footer style={{background:"#0d2240",color:"rgba(255,255,255,0.5)",textAlign:"center" as any,padding:"20px 16px",fontSize:11,marginTop:20}}>
          <p>© 2026 Canada Mortgage Rates · canadamortgagerates.net · Pas un courtier hypothécaire agréé</p>
          <p style={{marginTop:6}}>
            <Link href="/" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>English</Link>
            <Link href="/fr" style={{color:"rgba(255,255,255,0.5)",marginRight:12,textDecoration:"none"}}>Français</Link>
            <Link href="/mortgage-rates" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>Taux par province</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
