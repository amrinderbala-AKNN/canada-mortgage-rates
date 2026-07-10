import { useState, useEffect, useRef } from "react";

const PDATA={
  AB:{name:"Alberta",cities:["Calgary","Edmonton","Red Deer","Lethbridge","Grande Prairie","Airdrie","Medicine Hat","Spruce Grove"],cu:[
    {name:"Servus Credit Union",url:"https://www.servus.ca"},
    {name:"ATB Financial",url:"https://www.atb.com"},
    {name:"Connect First Credit Union",url:"https://www.connectfirstcu.com"},
    {name:"Chinook Financial",url:"https://www.chinookfinancial.com"},
    {name:"Bow Valley Credit Union",url:"https://www.bowvalleycu.com"},
    {name:"Lakeland Credit Union",url:"https://www.lakelandcu.com"},
  ]},
  BC:{name:"British Columbia",cities:["Vancouver","Victoria","Surrey","Burnaby","Kelowna","Abbotsford","Kamloops","Nanaimo","Prince George","Langley"],cu:[
    {name:"Vancity Credit Union",url:"https://www.vancity.com"},
    {name:"Coast Capital Savings",url:"https://www.coastcapitalsavings.com"},
    {name:"First West Credit Union",url:"https://www.firstwestcu.ca"},
    {name:"Prospera Credit Union",url:"https://www.prospera.ca"},
    {name:"Coastal Community Credit Union",url:"https://www.cccu.ca"},
    {name:"BlueShore Financial",url:"https://www.blueshorefinancial.com"},
    {name:"Gulf & Fraser Credit Union",url:"https://www.gulfandfraser.com"},
  ]},
  MB:{name:"Manitoba",cities:["Winnipeg","Brandon","Steinbach","Portage la Prairie","Thompson","Winkler","Selkirk","Morden","Morris","Dauphin"],cu:[
    {name:"Assiniboine Credit Union",url:"https://www.assiniboine.mb.ca"},
    {name:"Steinbach Credit Union",url:"https://www.steinbachcu.com"},
    {name:"Westoba Credit Union",url:"https://www.westoba.com"},
    {name:"Cambrian Credit Union",url:"https://www.cambrian.mb.ca"},
    {name:"Access Credit Union",url:"https://www.accesscu.ca"},
    {name:"Valley Credit Union",url:"https://www.valleycu.ca"},
    {name:"Sunrise Credit Union",url:"https://www.sunrisecu.mb.ca"},
  ]},
  NB:{name:"New Brunswick",cities:["Moncton","Saint John","Fredericton","Dieppe","Riverview","Miramichi","Bathurst"],cu:[
    {name:"UNI Financial Cooperation",url:"https://www.uni.ca"},
    {name:"Atlantic Central",url:"https://www.atlanticcentral.ca"},
    {name:"Bayshore Credit Union",url:"https://www.bayshorecu.ca"},
  ]},
  NL:{name:"Newfoundland",cities:["St. John's","Mount Pearl","Corner Brook","Conception Bay South","Paradise","Grand Falls"],cu:[
    {name:"Newfoundland & Labrador Credit Union",url:"https://www.nlcu.com"},
    {name:"NewCap Credit Union",url:"https://www.newcap.ca"},
  ]},
  NS:{name:"Nova Scotia",cities:["Halifax","Dartmouth","Sydney","Truro","New Glasgow","Glace Bay","Bridgewater"],cu:[
    {name:"East Coast Credit Union",url:"https://www.eastcoastcu.ca"},
    {name:"League Savings & Mortgage",url:"https://www.leaguesavings.ca"},
    {name:"Credit Union Atlantic",url:"https://www.cua.com"},
    {name:"Coastal Financial Credit Union",url:"https://www.coastalfinancial.ca"},
  ]},
  ON:{name:"Ontario",cities:["Toronto","Ottawa","Mississauga","Brampton","Hamilton","London","Markham","Kitchener","Windsor","Barrie","Sudbury","Kingston"],cu:[
    {name:"Meridian Credit Union",url:"https://www.meridiancu.ca"},
    {name:"DUCA Credit Union",url:"https://www.duca.com"},
    {name:"Alterna Savings",url:"https://www.alterna.ca"},
    {name:"FirstOntario Credit Union",url:"https://www.firstontario.com"},
    {name:"Libro Credit Union",url:"https://www.libro.ca"},
    {name:"Kawartha Credit Union",url:"https://www.kawarthacu.com"},
    {name:"Your Neighbourhood Credit Union",url:"https://www.yncu.com"},
  ]},
  PE:{name:"PEI",cities:["Charlottetown","Summerside","Stratford","Cornwall"],cu:[
    {name:"Provincial Credit Union",url:"https://www.pcu.pe.ca"},
    {name:"Amalgamated Dairies Credit Union",url:"https://www.adlcu.com"},
  ]},
  QC:{name:"Quebec",cities:["Montreal","Quebec City","Laval","Gatineau","Longueuil","Sherbrooke","Saguenay","Trois-Rivières"],cu:[
    {name:"Desjardins Group",url:"https://www.desjardins.com"},
    {name:"Caisse Alliance",url:"https://www.caissealliance.com"},
    {name:"Caisse Populaire Acadienne",url:"https://www.caisseacadienne.ca"},
  ]},
  SK:{name:"Saskatchewan",cities:["Saskatoon","Regina","Prince Albert","Moose Jaw","Swift Current","Yorkton","North Battleford"],cu:[
    {name:"Affinity Credit Union",url:"https://www.affinitycu.ca"},
    {name:"Innovation Credit Union",url:"https://www.innovationcu.ca"},
    {name:"Conexus Credit Union",url:"https://www.conexus.ca"},
    {name:"Cornerstone Credit Union",url:"https://www.cornerstonecu.com"},
    {name:"Synergy Credit Union",url:"https://www.synergycu.ca"},
  ]},
};
const BANKS=[
  // ── Big 6 National Banks ──────────────────────────────────────────────────
  {name:"RBC Royal Bank",url:"https://www.rbc.com/mortgages",type:"national"},
  {name:"TD Canada Trust",url:"https://www.td.com/ca/en/personal-banking/products/mortgages",type:"national"},
  {name:"BMO Bank of Montreal",url:"https://www.bmo.com/en-ca/mortgages",type:"national"},
  {name:"Scotiabank",url:"https://www.scotiabank.com/ca/en/personal/mortgages.html",type:"national"},
  {name:"CIBC",url:"https://www.cibc.com/en/personal-banking/mortgages.html",type:"national"},
  {name:"National Bank",url:"https://www.nbc.ca/personal/mortgages.html",type:"national"},
  // ── Tier 1 Online / Alternative Lenders ──────────────────────────────────
  {name:"Nesto",url:"https://www.nesto.ca",type:"online"},
  {name:"True North Mortgage",url:"https://www.truenorthmortgage.ca",type:"online"},
  {name:"First National",url:"https://www.firstnational.ca",type:"online"},
  {name:"Equitable Bank",url:"https://www.eqbank.ca/personal-banking/mortgages",type:"online"},
  {name:"MCAP",url:"https://www.mcap.com/mortgages",type:"online"},
];
const TERMS=["1-year","2-year","3-year","5-year"];
const PT_RATES={AB:{Calgary:{res:0.00638,edu:0.00258},Edmonton:{res:0.00922,edu:0.00258},def:{res:0.0075,edu:0.00258}},BC:{Vancouver:{res:0.00269,edu:0.00163},Victoria:{res:0.00398,edu:0.00163},def:{res:0.0035,edu:0.00163}},MB:{Winnipeg:{res:0.01402,edu:0.01129},Brandon:{res:0.01656,edu:0.01129},def:{res:0.015,edu:0.01129}},NB:{Moncton:{res:0.01568,edu:0.0052},"Saint John":{res:0.01823,edu:0.0052},def:{res:0.0165,edu:0.0052}},NL:{"St. John's":{res:0.00826,edu:0.003},def:{res:0.008,edu:0.003}},NS:{Halifax:{res:0.01222,edu:0.004},def:{res:0.0135,edu:0.004}},ON:{Toronto:{res:0.00611,edu:0.00153},Ottawa:{res:0.00956,edu:0.00153},Mississauga:{res:0.00824,edu:0.00153},Brampton:{res:0.00988,edu:0.00153},Hamilton:{res:0.01256,edu:0.00153},def:{res:0.0105,edu:0.00153}},PE:{Charlottetown:{res:0.0114,edu:0.006},def:{res:0.01,edu:0.006}},QC:{Montreal:{res:0.00767,edu:0.00189},"Quebec City":{res:0.01036,edu:0.00189},def:{res:0.009,edu:0.00189}},SK:{Saskatoon:{res:0.01018,edu:0.00575},Regina:{res:0.01126,edu:0.00575},def:{res:0.011,edu:0.00575}}};
const INS_PROVIDERS=[{name:"Intact Insurance",stars:"★★★★★",desc:"Canada's largest insurer. Fast claims and comprehensive coverage.",discount:"Bundle with auto: save 15%",mult:1.0,url:"https://www.intact.net"},{name:"TD Insurance",stars:"★★★★☆",desc:"Great for TD banking customers. Strong digital experience.",discount:"TD customer discount available",mult:0.95,url:"https://www.tdinsurance.com"},{name:"Aviva Canada",stars:"★★★★☆",desc:"Flexible coverage with strong claims support.",discount:"New home discount: 10%",mult:1.05,url:"https://www.avivacanada.com"},{name:"Desjardins",stars:"★★★★★",desc:"Top choice in Quebec and Ontario.",discount:"Claim-free discount: 20%",mult:0.92,url:"https://www.desjardinsgeneralinsurance.com"},{name:"Wawanesa",stars:"★★★★☆",desc:"Competitive Canadian-owned insurer.",discount:"Loyalty discount after 3 years",mult:0.98,url:"https://www.wawanesa.com"},{name:"Co-operators",stars:"★★★★☆",desc:"Co-operative insurer with competitive rates.",discount:"Multi-policy discount: 12%",mult:1.02,url:"https://www.cooperators.ca"}];
const INS_BASE={AB:0.0008,BC:0.0007,MB:0.0009,NB:0.001,NL:0.0011,NS:0.001,ON:0.0009,PE:0.0009,QC:0.0007,SK:0.0009};
const TYPE_MULT={detached:1.0,semi:0.85,condo:0.45,townhouse:0.75};
const YEAR_MULT={new:0.85,mid:1.0,old:1.25};
const RF_STEPS=[{q:"What is the purpose of your mortgage?",key:"purpose",opts:["🏠 First Home Purchase","🏡 Purchase (Not First Home)","🔄 Mortgage Renewal","💳 Refinance"]},{q:"What is your estimated credit score?",key:"credit",opts:["🟢 Excellent (750+)","🔵 Good (700–749)","🟡 Fair (650–699)","🔴 Below 650"]},{q:"How much is your down payment?",key:"down",opts:["5–9% (Insured)","10–14% (Insured)","15–19% (Insured)","20%+ (Conventional)"]},{q:"What is your employment type?",key:"employment",opts:["💼 Salaried / Full-Time","🧾 Self-Employed","📋 Contract / Part-Time","🎯 Retired"]},{q:"What mortgage term do you prefer?",key:"term",opts:["📉 Variable Rate","📅 1–2 Year Fixed","📅 3 Year Fixed","📅 5 Year Fixed"]}];
const FTHB_PROV={AB:{programs:[{name:"No Land Transfer Tax",saving:"$5,000–$15,000+",status:"Always",color:"#16a34a",desc:"Alberta has no provincial land transfer tax.",url:"https://www.alberta.ca/land-titles.aspx"}],savings:[{l:"No LTT",v:"~$10K"},{l:"FHSA+HBP",v:"~$200K"},{l:"Tax Credit",v:"$1,500"}]},BC:{programs:[{name:"Property Transfer Tax Exemption",saving:"Up to $8,000+",status:"Active",color:"#16a34a",desc:"Full exemption on homes under $500K.",url:"https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax/exemptions/first-time-home-buyers"}],savings:[{l:"PTT Exemption",v:"~$8K"},{l:"HOG",v:"$770/yr"},{l:"FHSA+HBP",v:"~$200K"}]},MB:{programs:[{name:"LTT Rebate",saving:"Up to $4,500",status:"Active",color:"#16a34a",desc:"Manitoba first-time buyers receive a rebate on provincial land transfer tax.",url:"https://www.gov.mb.ca/finance/tao/ltt.html"},{name:"Rural Homeownership Program",saving:"Up to $3,500",status:"Active",color:"#2563eb",desc:"Down payment assistance for buyers outside Winnipeg.",url:"https://www.gov.mb.ca/housing/pubs/rural_homeownership_program.pdf"}],savings:[{l:"LTT Rebate",v:"~$4,500"},{l:"Rural Program",v:"~$3,500"},{l:"FHSA+HBP",v:"~$200K"}]},ON:{programs:[{name:"Ontario LTT Rebate",saving:"Up to $4,000",status:"Active",color:"#16a34a",desc:"First-time buyers get a rebate on Ontario land transfer tax.",url:"https://www.ontario.ca/page/land-transfer-tax"},{name:"Ontario HST New Home Rebate",saving:"Up to $130,000",status:"New 2026",color:"#c8102e",desc:"Removes full 13% HST on new homes up to $1M.",url:"https://www.ontario.ca/page/new-housing-rebate"}],savings:[{l:"LTT Rebate",v:"~$4K"},{l:"HST Rebate",v:"~$130K"},{l:"FHSA+HBP",v:"~$200K"}]},SK:{programs:[{name:"Low Transfer Fee",saving:"Only 0.3%",status:"Always",color:"#16a34a",desc:"Saskatchewan charges a flat 0.3% transfer fee.",url:"https://www.saskatchewan.ca/residents/housing"}],savings:[{l:"Low Fee",v:"0.3%"},{l:"Tax Credit",v:"$1,500"},{l:"FHSA+HBP",v:"~$200K"}]},NS:{programs:[{name:"NS 2% Down Payment Pilot",saving:"Lower barrier",status:"New 2026",color:"#c8102e",desc:"Nova Scotia pilot reduces minimum down payment to 2%.",url:"https://novascotia.ca/housing/"}],savings:[{l:"2% Min Down",v:"Lower barrier"},{l:"Down Pmt",v:"Up to 5%"},{l:"FHSA+HBP",v:"~$200K"}]},NB:{programs:[{name:"NB Homeownership Program",saving:"Varies",status:"Active",color:"#16a34a",desc:"Down payment assistance for low-to-moderate income buyers.",url:"https://www2.gnb.ca/content/gnb/en/departments/social-development/housing.html"}],savings:[{l:"FHSA+HBP",v:"~$200K"},{l:"Tax Credit",v:"$1,500"},{l:"Down Pmt",v:"Varies"}]},PE:{programs:[{name:"PEI LTT Full Exemption",saving:"Up to $3,000+",status:"Active",color:"#16a34a",desc:"Full real property transfer tax exemption on homes under $200K.",url:"https://www.princeedwardisland.ca/en/information/finance/real-property-transfer-tax"}],savings:[{l:"LTT Exemption",v:"~$3K"},{l:"5% Loan",v:"Interest-free"},{l:"FHSA+HBP",v:"~$200K"}]},QC:{programs:[{name:"Quebec First-Time Buyer Credit",saving:"~$750",status:"Active",color:"#2563eb",desc:"Quebec provincial tax credit on top of the federal $1,500 credit.",url:"https://www.revenuquebec.ca/en/citizens/tax-credits/first-time-home-buyers/"}],savings:[{l:"Prov Credit",v:"~$750"},{l:"Fed Credit",v:"$1,500"},{l:"FHSA+HBP",v:"~$200K"}]},NL:{programs:[{name:"NL Home Purchase Program",saving:"Varies",status:"Active",color:"#16a34a",desc:"Down payment assistance for qualifying first-time buyers.",url:"https://www.gov.nl.ca/digital-government-and-service-nl/nlhc/home-ownership-programs/"}],savings:[{l:"FHSA+HBP",v:"~$200K"},{l:"Tax Credit",v:"$1,500"},{l:"Down Pmt",v:"Varies"}]}};
const EDU_ARTICLES=[{icon:"📊",title:"Fixed vs Variable in 2026?",desc:"BoC holding at 2.25% — which type makes sense now?",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Fixed vs Variable in 2026</h3><p>With the Bank of Canada holding at 2.25% variable rates (~3.3%) are lower than fixed (~4.9%), but rate hike risk exists.</p><h4 style='margin:12px 0 5px;color:#0d2240;'>Fixed Rate</h4><p><b>Pros:</b> Predictable payments, protection from hikes.<br/><b>Cons:</b> Higher rate, costly break penalties (IRD).</p><h4 style='margin:12px 0 5px;color:#0d2240;'>Variable Rate</h4><p><b>Pros:</b> Lower rate, only 3 months interest to break.<br/><b>Cons:</b> Payments fluctuate.</p>"},{icon:"📋",title:"How to Pass the Stress Test",desc:"Must qualify at rate +2% or 5.25%.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Canada's Mortgage Stress Test</h3><p>Must qualify at the higher of: contracted rate + 2%, or 5.25%.</p><ul style='margin-left:18px;line-height:2;'><li>Increase income or add a co-borrower</li><li>Pay down existing debts</li><li>Increase your down payment</li><li>Choose a lower-priced home</li></ul>"},{icon:"🏦",title:"What is CMHC Insurance?",desc:"Required under 20% down.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>CMHC Mortgage Default Insurance</h3><p>Required when putting less than 20% down. Protects the lender.</p><ul style='margin-left:18px;line-height:2;'><li>5–9.99% down → 4.0%</li><li>10–14.99% → 3.1%</li><li>15–19.99% → 2.8%</li><li>20%+ → No CMHC ✅</li></ul>"},{icon:"💰",title:"FHSA Complete Guide",desc:"$40K tax-free per person.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>First Home Savings Account</h3><p>Up to $8,000/year (lifetime $40K). Tax-deductible + tax-free withdrawals.</p><p style='margin-top:8px;'>Stack with HBP: <b>$200K combined</b> for couples.</p>"},{icon:"🔄",title:"Renewal vs Refinancing",desc:"Millions renewing in 2026–2027.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Renewal vs Refinancing</h3><p><b>Renewal:</b> No penalty to switch lenders. Start shopping 4 months before maturity.</p><p style='margin-top:8px;'><b>Refinancing:</b> Breaking early costs a penalty — 3 months interest or IRD.</p>"},{icon:"📈",title:"Canada Housing Market 2026",desc:"What conflict and tariffs mean for prices.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Canada Housing Market 2026</h3><p>BoC held at 2.25%. Inflation at 2.8%. GDP growth 1.2%. Analysts expect flat to 3% price growth. Calgary and Edmonton continue to outperform.</p>"}];
const BOC_ITEMS=[{label:"Overnight Rate",value:"2.25%",change:"hold"},{label:"Prime Rate",value:"4.45%",change:"hold"},{label:"Bank Rate",value:"2.50%",change:"hold"},{label:"Inflation (Apr)",value:"2.8%",change:"up"},{label:"Last Decision",value:"Hold — Jun 10",change:"hold"},{label:"Next Announcement",value:"Jul 15, 2026",change:"hold"},{label:"GDP Growth",value:"1.2%",change:"down"},{label:"CAD/USD",value:"~0.72",change:"hold"}];

const TESTIMONIALS=[
  {name:"Sarah M.",city:"Toronto, ON",stars:5,text:"Saved $180/month on my renewal by comparing lenders here. Switched from TD to Nesto and couldn't be happier. The rate finder tool made it so easy.",role:"First-time buyer"},
  {name:"James K.",city:"Calgary, AB",stars:5,text:"The stress test calculator finally made sense to me after using this site. Knew exactly what I qualified for before talking to the bank.",role:"Upgrading homes"},
  {name:"Priya S.",city:"Vancouver, BC",stars:5,text:"Used the FTHB section to stack FHSA + HBP. Found programs I didn't even know existed. Saved thousands in land transfer tax.",role:"First-time buyer"},
  {name:"Michel T.",city:"Montreal, QC",stars:5,text:"Compared 20+ lenders in 5 minutes. The rate bar chart showing who's cheapest is genius. Ended up going with a credit union over the big banks.",role:"Renewing mortgage"},
  {name:"Lisa R.",city:"Winnipeg, MB",stars:5,text:"Property tax estimator was dead accurate for my neighbourhood. Really useful for budgeting when we were shopping for homes.",role:"Home buyer"},
  {name:"David C.",city:"Ottawa, ON",stars:5,text:"The BoC rate ticker and announcement dates keep me informed without having to search around. Subscribed to rate alerts — great feature.",role:"Investor"},
];
const s={navy:"#0d2240",red:"#c8102e",gold:"#f5a623",green:"#16a34a",blue:"#2563eb",muted:"#64748b",border:"#e2e8f0",light:"#f4f6f9",white:"#fff"};
const cur=n=>"$"+Math.round(n).toLocaleString();
function getCMHC(p,d){if(d>=20||p>1500000)return{req:false,premium:0,rate:0};const r=d>=15?0.028:d>=10?0.031:0.04;return{req:true,premium:Math.round(p*(1-d/100)*r),rate:r};}
function getLTT(price,p){let t=0;if(p==="ON"){if(price<=55000)t=price*0.005;else if(price<=250000)t=275+(price-55000)*0.01;else if(price<=400000)t=2225+(price-250000)*0.015;else t=4475+(price-400000)*0.02;}else if(p==="BC"){if(price<=200000)t=price*0.01;else if(price<=2000000)t=2000+(price-200000)*0.02;else t=38000+(price-2000000)*0.03;}else if(p==="MB"){if(price<=30000)t=0;else if(price<=90000)t=(price-30000)*0.005;else if(price<=150000)t=300+(price-90000)*0.01;else if(price<=200000)t=900+(price-150000)*0.015;else t=1650+(price-200000)*0.02;}else if(p==="QC"){if(price<=53200)t=price*0.005;else if(price<=266200)t=266+(price-53200)*0.01;else if(price<=532400)t=2398+(price-266200)*0.015;else t=6391+(price-532400)*0.02;}else if(["NB","NS","PE","NL"].includes(p))t=price*0.015;else if(p==="SK")t=price*0.003;return Math.round(t);}
function calcPmt(p,r,y){const m=r/100/12,n=y*12;return m===0?p/n:p*(m*Math.pow(1+m,n))/(Math.pow(1+m,n)-1);}
function detectProvince(lat,lon){if(lon<-140)return"BC";if(lon<-110&&lat>49&&lat<60)return"AB";if(lon<-95&&lon>-110&&lat>49)return"SK";if(lon>-95&&lon<-88&&lat>49)return"MB";if(lon>-88&&lon<-74&&lat>42)return"ON";if(lon>-74&&lon<-64&&lat>45)return"QC";if(lon>-64&&lon<-59&&lat>44)return"NB";if(lon>-66&&lat>43&&lat<47)return"NS";if(lon>-64&&lon<-61&&lat>45&&lat<48)return"PE";if(lat>46&&lon>-60)return"NL";return"MB";}
function detectCity(prov,lat,lon){const cities={AB:{Calgary:[51.04,-114.07],Edmonton:[53.55,-113.49]},BC:{Vancouver:[49.28,-123.12],Victoria:[48.43,-123.37]},MB:{Winnipeg:[49.90,-97.14],Brandon:[49.85,-99.95]},ON:{Toronto:[43.70,-79.42],Ottawa:[45.42,-75.69],Mississauga:[43.59,-79.64]},QC:{Montreal:[45.50,-73.57],"Quebec City":[46.82,-71.22]},SK:{Saskatoon:[52.13,-106.67],Regina:[50.45,-104.62]},NS:{Halifax:[44.65,-63.57]},NB:{Moncton:[46.09,-64.80]},NL:{"St. John's":[47.56,-52.71]},PE:{Charlottetown:[46.24,-63.13]}};const pc=cities[prov];if(!pc)return PDATA[prov]?.cities[0]||"";let best="",bd=999;Object.entries(pc).forEach(([c,[la,lo]])=>{const d=Math.abs(lat-la)+Math.abs(lon-lo);if(d<bd){bd=d;best=c;}});return best||PDATA[prov]?.cities[0]||"";}

const shimmerStyle=`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`;
function Skeleton({w="100%",h=16,r=6,mb=0}){return <div style={{width:w,height:h,borderRadius:r,background:"linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite",marginBottom:mb}}/>;}
function EmptyState({icon,title,sub,link,linkText}){return(<div style={{textAlign:"center",padding:"40px 20px"}}><div style={{fontSize:48,marginBottom:12}}>{icon}</div><div style={{fontSize:15,fontWeight:700,color:s.navy,marginBottom:6}}>{title}</div><div style={{fontSize:13,color:s.muted,marginBottom:link?14:0}}>{sub}</div>{link&&<a href={link} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"8px 20px",background:s.navy,color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>{linkText}</a>}</div>);}
function Card({children,style}){return <div style={{background:s.white,borderRadius:12,padding:18,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",...style}}>{children}</div>;}
function Field({label,children}){return <div style={{marginBottom:9}}><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:3,textTransform:"uppercase",letterSpacing:"0.4px"}}>{label}</label>{children}</div>;}
const inp={width:"100%",padding:"8px 10px",borderRadius:8,border:`1.5px solid #e2e8f0`,fontSize:13,fontWeight:500,boxSizing:"border-box"};
const calcBtn={width:"100%",padding:10,background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",marginTop:6};
const resultBox={background:`linear-gradient(135deg,#0d2240,#1a3a5c)`,borderRadius:10,padding:14,marginTop:12,color:"#fff"};
function RRow({l,v,bold}){return <><div style={{color:"rgba(255,255,255,0.7)",fontSize:11}}>{l}</div><div style={{textAlign:"right",fontWeight:bold?700:400,fontSize:11}}>{v}</div></>;}

function TestimonialsSection(){
  const [idx,setIdx]=useState(0);
  const visible=3;
  const total=TESTIMONIALS.length;
  const prev=()=>setIdx(i=>Math.max(0,i-1));
  const next=()=>setIdx(i=>Math.min(total-visible,i+1));
  const shown=TESTIMONIALS.slice(idx,idx+visible);
  return(
    <div style={{background:`linear-gradient(135deg,#f8fafc,#f0f4f8)`,borderTop:`1px solid ${s.border}`,borderBottom:`1px solid ${s.border}`,padding:"28px 14px",flexShrink:0}}>
      <div style={{maxWidth:1060,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,flexWrap:"wrap",gap:8}}>
          <div>
            <div style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:2}}>⭐ What Canadians Are Saying</div>
            <div style={{fontSize:11,color:s.muted}}>Real experiences from homebuyers and renewers across Canada</div>
          </div>
          <div style={{display:"flex",gap:6}}>
            <button onClick={prev} disabled={idx===0} style={{width:32,height:32,borderRadius:"50%",border:`1.5px solid ${s.border}`,background:idx===0?"#f1f5f9":s.white,color:idx===0?s.muted:s.navy,cursor:idx===0?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>‹</button>
            <button onClick={next} disabled={idx>=total-visible} style={{width:32,height:32,borderRadius:"50%",border:`1.5px solid ${s.border}`,background:idx>=total-visible?"#f1f5f9":s.white,color:idx>=total-visible?s.muted:s.navy,cursor:idx>=total-visible?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>›</button>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
          {shown.map((t,i)=>(
            <div key={i} style={{background:s.white,borderRadius:12,padding:16,boxShadow:"0 2px 12px rgba(0,0,0,0.06)",border:`1px solid ${s.border}`,position:"relative"}}>
              <div style={{color:s.gold,fontSize:13,marginBottom:8}}>{"★".repeat(t.stars)}</div>
              <p style={{fontSize:12,color:"#374151",lineHeight:1.7,marginBottom:12,fontStyle:"italic"}}>"{t.text}"</p>
              <div style={{display:"flex",alignItems:"center",gap:9}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:800,flexShrink:0}}>{t.name[0]}</div>
                <div><div style={{fontSize:12,fontWeight:700,color:s.navy}}>{t.name}</div><div style={{fontSize:10,color:s.muted}}>{t.city} · {t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:12,fontSize:10,color:s.muted}}>* Reviews represent typical user experiences. Results vary based on individual circumstances.</div>
      </div>
    </div>
  );
}

function BackToTop(){
  const [show,setShow]=useState(false);
  useEffect(()=>{const h=()=>setShow(window.scrollY>300);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  if(!show)return null;
  return <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:90,right:24,zIndex:9990,width:42,height:42,background:s.navy,color:"#fff",border:"none",borderRadius:"50%",fontSize:18,cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"}}>↑</button>;
}

function BocTicker({onRateAlert}){
  const items=[...BOC_ITEMS,...BOC_ITEMS];
  const clr={up:"#f5a623",down:"#4ade80",hold:"#94a3b8"};
  const ico={up:"▲",down:"▼",hold:"●"};
  return(
    <div style={{background:s.navy,borderBottom:`2px solid ${s.red}`,overflow:"hidden",display:"flex",alignItems:"stretch",flexShrink:0}}>
      <div style={{background:s.red,color:"#fff",fontSize:11,fontWeight:800,padding:"7px 12px",whiteSpace:"nowrap",flexShrink:0,display:"flex",alignItems:"center"}}>🏦 BANK OF CANADA</div>
      <div style={{overflow:"hidden",flex:1}}><div style={{display:"inline-flex",animation:"ticker 40s linear infinite"}}>{items.map((it,i)=><div key={i} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 18px",borderRight:"1px solid rgba(255,255,255,0.1)",fontSize:11,whiteSpace:"nowrap"}}><span style={{color:"rgba(255,255,255,0.5)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px"}}>{it.label}</span><span style={{color:"#fff",fontWeight:700}}>{it.value}</span><span style={{color:clr[it.change],fontSize:10}}>{ico[it.change]}</span></div>)}</div></div>
      <button onClick={onRateAlert} style={{background:s.red,border:"none",color:"#fff",fontSize:11,fontWeight:700,padding:"7px 14px",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,borderLeft:"1px solid rgba(255,255,255,0.2)"}}>🔔 Rate Alerts</button>
    </div>
  );
}

function BocBanner(){
  const [show,setShow]=useState(true);
  if(!show)return null;
  return(
    <div style={{background:s.white,borderBottom:`1px solid ${s.border}`,flexShrink:0}}>
      <div style={{maxWidth:1060,margin:"0 auto",padding:"8px 14px",display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:160}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:s.gold,flexShrink:0}}/>
          <div><div style={{fontSize:12,fontWeight:700,color:s.navy}}>⏸ Rate Held Steady — Bank of Canada June 10, 2026</div><div style={{fontSize:10,color:s.muted}}>BoC held overnight rate at 2.25% for the fifth consecutive decision.</div></div>
        </div>
        <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
          {[["Overnight Rate","2.25%"],["Prime Rate","4.45%"],["Next","July 15, 2026"],["Inflation","2.8%"]].map(([l,v])=><div key={l} style={{textAlign:"center"}}><div style={{fontSize:9,color:s.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px"}}>{l}</div><div style={{fontSize:15,fontWeight:800,color:s.navy}}>{v}</div></div>)}
        </div>
        <button onClick={()=>setShow(false)} style={{background:"none",border:"none",color:s.muted,fontSize:16,cursor:"pointer",padding:"0 4px"}}>✕</button>
      </div>
    </div>
  );
}

function RateAlertModal({onClose}){
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [prov,setProv]=useState("");const [consent,setConsent]=useState(false);const [ok,setOk]=useState(false);
  async function submit(){if(!name||!email){alert("Please enter name and email.");return;}if(!consent){alert("Please confirm consent.");return;}try{await fetch("https://formspree.io/f/mbdvlnnw",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,province:prov,type:"BoC Rate Alert"})});setOk(true);}catch{alert("Something went wrong.");}}
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={onClose}>
      <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:400,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
        <div style={{background:s.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{color:"#fff",fontSize:14,fontWeight:700}}>🔔 BoC Rate Alert Emails</div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:26,height:26,borderRadius:"50%",fontSize:13,cursor:"pointer"}}>✕</button>
        </div>
        <div style={{padding:18}}>
          {!ok?(<>
            <p style={{fontSize:12,color:s.muted,marginBottom:12,lineHeight:1.5}}>Get notified every time the Bank of Canada makes a rate announcement.</p>
            <input type="text" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} style={{...inp,marginBottom:8}}/>
            <input type="email" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} style={{...inp,marginBottom:8}}/>
            <select value={prov} onChange={e=>setProv(e.target.value)} style={{...inp,marginBottom:10,background:s.white}}><option value="">Province (optional)</option>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
            <div style={{display:"flex",alignItems:"flex-start",gap:7,marginBottom:12}}><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} style={{marginTop:3,flexShrink:0}}/><label style={{fontSize:11,color:s.muted,lineHeight:1.5}}>I agree to receive BoC rate announcement emails. Unsubscribe anytime.</label></div>
            <button onClick={submit} style={{width:"100%",padding:10,background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🔔 Subscribe</button>
          </>):(
            <div style={{textAlign:"center",padding:"16px 0"}}><div style={{fontSize:32,marginBottom:8}}>✅</div><div style={{fontSize:14,fontWeight:700,color:s.navy}}>You're subscribed!</div></div>
          )}
        </div>
      </div>
    </div>
  );
}

function Chatbot({prov,city}){
  const [open,setOpen]=useState(false);const [msgs,setMsgs]=useState([{role:"bot",text:"👋 Hi! I'm your Canadian mortgage assistant. Ask me anything about rates, CMHC, affordability, or first-time buyer programs!"}]);const [input,setInput]=useState("");const [loading,setLoading]=useState(false);const [history,setHistory]=useState([]);const endRef=useRef(null);
  const sugg=["Fixed vs variable?","How to pass stress test?","What is CMHC?","First-time buyer programs"];
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);
  async function send(q){const text=q||input.trim();if(!text)return;setInput("");setLoading(true);const nm=[...msgs,{role:"user",text}];setMsgs(nm);const nh=[...history,{role:"user",content:text}];
    try{const res=await fetch("/api/anthropic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:300,system:`You are a friendly Canadian mortgage assistant. BoC rate: 2.25%, Prime: 4.45%. User is in ${PDATA[prov]?.name||"Canada"}, ${city}. Keep answers concise (2–4 sentences).`,messages:nh})});const data=await res.json();const reply=data.content?.find(b=>b.type==="text")?.text||"Sorry, I'm having trouble. Please try again.";setMsgs([...nm,{role:"bot",text:reply}]);setHistory([...nh,{role:"assistant",content:reply}]);}
    catch{setMsgs([...nm,{role:"bot",text:"Sorry, I'm having trouble connecting right now."}]);}
    setLoading(false);}
  return(
    <div style={{position:"fixed",bottom:24,right:24,zIndex:9998}}>
      {open&&(
        <div style={{position:"absolute",bottom:64,right:0,width:320,maxHeight:480,background:s.white,borderRadius:16,boxShadow:"0 8px 32px rgba(0,0,0,0.18)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{background:s.navy,padding:"11px 13px",display:"flex",alignItems:"center",gap:9}}>
            <div style={{width:32,height:32,background:s.red,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>🤖</div>
            <div><div style={{color:"#fff",fontSize:12,fontWeight:700}}>Mortgage AI</div><div style={{color:"rgba(255,255,255,0.6)",fontSize:10}}>● Online</div></div>
            <button onClick={()=>setOpen(false)} style={{marginLeft:"auto",background:"none",border:"none",color:"rgba(255,255,255,0.7)",fontSize:15,cursor:"pointer"}}>✕</button>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:10,display:"flex",flexDirection:"column",gap:7,maxHeight:280}}>
            {msgs.map((m,i)=><div key={i} style={{maxWidth:"88%",padding:"7px 10px",borderRadius:10,fontSize:12,lineHeight:1.5,alignSelf:m.role==="user"?"flex-end":"flex-start",background:m.role==="user"?s.navy:"#f1f5f9",color:m.role==="user"?"#fff":s.navy}}>{m.text}</div>)}
            {loading&&<div style={{maxWidth:"88%",padding:"7px 10px",borderRadius:10,fontSize:12,background:"#f1f5f9",color:s.muted,alignSelf:"flex-start"}}>⏳ Thinking...</div>}
            <div ref={endRef}/>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:4,padding:"7px 10px",borderTop:`1px solid ${s.border}`}}>{sugg.map(s2=><button key={s2} onClick={()=>send(s2)} style={{padding:"3px 8px",background:"#f1f5f9",border:`1px solid ${s.border}`,borderRadius:20,fontSize:10,cursor:"pointer",color:s.navy,fontWeight:500}}>{s2}</button>)}</div>
          <div style={{display:"flex",gap:5,padding:"9px 10px",borderTop:`1px solid ${s.border}`}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask a mortgage question..." style={{flex:1,padding:"6px 9px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12}}/>
            <button onClick={()=>send()} style={{padding:"6px 12px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>Send</button>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(!open)} style={{width:52,height:52,background:s.red,border:"none",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(200,16,46,0.4)",fontSize:20,color:"#fff"}}>💬</button>
    </div>
  );
}

function InstallPrompt(){
  const [prompt,setPrompt]=useState(null);const [show,setShow]=useState(false);
  useEffect(()=>{const h=e=>{e.preventDefault();setPrompt(e);setShow(true);};window.addEventListener("beforeinstallprompt",h);return()=>window.removeEventListener("beforeinstallprompt",h);},[]);
  async function install(){if(!prompt)return;prompt.prompt();const{outcome}=await prompt.userChoice;if(outcome==="accepted")setShow(false);setPrompt(null);}
  if(!show)return null;
  return(
    <div style={{position:"fixed",bottom:90,left:14,right:80,zIndex:9989,background:s.white,borderRadius:14,boxShadow:"0 8px 32px rgba(0,0,0,0.18)",padding:"14px 16px",display:"flex",alignItems:"center",gap:12,border:`1.5px solid ${s.border}`}}>
      <div style={{width:40,height:40,background:s.navy,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>🍁</div>
      <div style={{flex:1}}><div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:2}}>Add to Home Screen</div><div style={{fontSize:11,color:s.muted}}>Install Canada Mortgage Rates as an app!</div></div>
      <div style={{display:"flex",flexDirection:"column",gap:5,flexShrink:0}}>
        <button onClick={install} style={{padding:"6px 14px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Install</button>
        <button onClick={()=>setShow(false)} style={{padding:"4px 14px",background:"none",border:`1px solid ${s.border}`,borderRadius:8,fontSize:11,cursor:"pointer",color:s.muted}}>Later</button>
      </div>
    </div>
  );
}

const TABS=["Rates","Calculators","Property Tax","Insurance","Rate Finder","First-Time Buyers","News","Listings","Learn","Consult"];
function NavBar({active,setActive}){
  const [menuOpen,setMenuOpen]=useState(false);
  const groups=[{label:"Compare",tabs:["Rates","News"]},{label:"Tools",tabs:["Calculators","Property Tax","Insurance","Rate Finder"]},{label:"Buyers",tabs:["First-Time Buyers","Listings","Learn"]},{label:"Help",tabs:["Consult"]}];
  return(
    <div style={{background:s.navy,flexShrink:0,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,0.3)"}}>
      <div style={{padding:"0 14px",display:"flex",alignItems:"center",height:54,gap:8}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          <div style={{width:32,height:32,background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🍁</div>
          <div><div style={{color:"#fff",fontWeight:800,fontSize:14,lineHeight:1}}>Canada</div><div style={{color:s.gold,fontWeight:700,fontSize:11,lineHeight:1}}>Mortgage Rates</div></div>
        </div>
        <div style={{display:"flex",gap:1,marginLeft:"auto",overflowX:"auto",maxWidth:"calc(100% - 180px)",scrollbarWidth:"none"}}>
          {TABS.map(t=><button key={t} onClick={()=>{setActive(t);setMenuOpen(false);}} style={{background:active===t?"rgba(255,255,255,0.15)":"none",border:"none",color:active===t?"#fff":"rgba(255,255,255,0.65)",fontSize:11,padding:"6px 10px",borderRadius:6,cursor:"pointer",fontWeight:active===t?700:400,whiteSpace:"nowrap",flexShrink:0,borderBottom:active===t?`2px solid ${s.gold}`:"2px solid transparent"}}>{t}</button>)}
        </div>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"rgba(255,255,255,0.1)",border:`1px solid rgba(255,255,255,0.2)`,color:"#fff",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:15,marginLeft:8,flexShrink:0}}>
          {menuOpen?"✕":"☰"}
        </button>
      </div>
      {menuOpen&&(
        <div style={{background:"#0a1628",borderTop:"1px solid rgba(255,255,255,0.1)",padding:"8px 0",maxHeight:360,overflowY:"auto"}}>
          {groups.map(g=>(
            <div key={g.label}>
              <div style={{padding:"6px 16px 3px",fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.5px"}}>{g.label}</div>
              {g.tabs.map(t=><button key={t} onClick={()=>{setActive(t);setMenuOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"9px 16px 9px 24px",background:active===t?"rgba(245,166,35,0.1)":"none",border:"none",borderLeft:active===t?`3px solid ${s.gold}`:"3px solid transparent",color:active===t?"#fff":"rgba(255,255,255,0.75)",fontSize:13,cursor:"pointer",fontWeight:active===t?700:400}}>{t}</button>)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Hero({prov,city,locLoading}){
  return(
    <div style={{background:`linear-gradient(135deg,#0a1628 0%,#0d2240 40%,#1a3a5c 70%,#0d2240 100%)`,padding:"32px 20px 40px",textAlign:"center",position:"relative",overflow:"hidden",flexShrink:0}}>
      <div style={{position:"absolute",top:-40,right:-40,width:200,height:200,borderRadius:"50%",background:"rgba(200,16,46,0.08)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:-60,left:-60,width:280,height:280,borderRadius:"50%",background:"rgba(245,166,35,0.06)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(245,166,35,0.15)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:20,padding:"4px 14px",marginBottom:14}}>
          <span style={{color:s.gold,fontSize:11,fontWeight:700,letterSpacing:"0.5px"}}>🍁 CANADA'S MOST COMPLETE MORTGAGE PLATFORM</span>
        </div>
        <h1 style={{color:"#fff",fontSize:"clamp(20px,4vw,36px)",fontWeight:800,marginBottom:8,letterSpacing:"-0.5px",lineHeight:1.2}}>Compare <span style={{color:s.gold}}>Mortgage Rates</span><br/>Across All of Canada</h1>
        <p style={{color:"rgba(255,255,255,0.7)",fontSize:13,marginBottom:6}}>Banks · Credit Unions · AI-Powered · Free Forever</p>
        <p style={{color:locLoading?"rgba(255,255,255,0.4)":s.gold,fontSize:11,fontWeight:600,marginBottom:20}}>
          {locLoading?"📍 Detecting your location...":"📍 "+city+", "+(PDATA[prov]?.name||prov)}
        </p>
        <div style={{display:"flex",justifyContent:"center",gap:0,flexWrap:"wrap",background:"rgba(255,255,255,0.06)",borderRadius:16,padding:"14px 20px",maxWidth:500,margin:"0 auto",border:"1px solid rgba(255,255,255,0.1)"}}>
          {[["20+","Lenders"],["10","Provinces"],["AI","Powered"],["Free","Always"],["Live","Rates"]].map(([v,l],i)=>(
            <div key={l} style={{flex:1,minWidth:70,textAlign:"center",padding:"0 8px",borderRight:i<4?"1px solid rgba(255,255,255,0.1)":"none"}}>
              <div style={{color:s.gold,fontSize:20,fontWeight:800}}>{v}</div>
              <div style={{color:"rgba(255,255,255,0.55)",fontSize:10,marginTop:2}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── RATES TAB ─────────────────────────────────────────────────────────────────
function RatesTab({initProv,initCity,onLocationChange}){
  const [prov,setProv]=useState(initProv);
  const [city,setCity]=useState(initCity);
  const [term,setTerm]=useState("1-year");
  const [type,setType]=useState("fixed");
  const [rates,setRates]=useState([]);
  const [loading,setLoading]=useState(false);
  const [usingSample,setUsingSample]=useState(false);
  const [lastUpd,setLastUpd]=useState("");
  const [showCustom,setShowCustom]=useState(false);
  const [customCity,setCustomCity]=useState("");
  const customRef=useRef(null);

  useEffect(()=>{setProv(initProv);setCity(initCity);setShowCustom(false);setCustomCity("");},[initProv,initCity]);
  useEffect(()=>{fetchRates();},[prov,city]);

  const institutions=[...BANKS,...(PDATA[prov]?.cu||[]).map(c=>({...c,type:"local"}))];

  function getMock(){
    const b=[6.84,6.99,6.89,6.94,6.79,6.89,4.69,4.59,4.74,4.64,4.79,5.70,5.65,5.75,5.60,5.55,5.80,5.68];
    return institutions.flatMap((inst,i)=>TERMS.map((t,ti)=>({institution:inst.name,term:t,fixed:+(b[i%b.length]-ti*0.3).toFixed(2),variable:+(b[i%b.length]-ti*0.3-0.7).toFixed(2)})));
  }

  async function fetchRates(){
    setLoading(true);setUsingSample(false);
    try{
      const res=await fetch("/api/anthropic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,tools:[{type:"web_search_20250305",name:"web_search"}],system:"Return ONLY a valid JSON array of mortgage rates. Each: {institution,term,fixed,variable}. No markdown.",messages:[{role:"user",content:`Current mortgage rates in ${city}, ${PDATA[prov]?.name||prov}, Canada for: ${institutions.map(i=>i.name).join(", ")}. Terms: 1-year,2-year,3-year,5-year. JSON only.`}]})});
      const data=await res.json();const tb=data.content?.find(b=>b.type==="text");
      setRates(JSON.parse(tb.text.replace(/```json|```/g,"").trim()));setLastUpd("Live ✅");
    }catch{setRates(getMock());setUsingSample(true);setLastUpd("Sample ⚠️");}
    setLoading(false);
  }

  function changeProv(p){const c=PDATA[p].cities[0];setProv(p);setCity(c);setShowCustom(false);setCustomCity("");onLocationChange&&onLocationChange(p,c);}
  function changeCity(c){if(c==="__custom__"){setShowCustom(true);setTimeout(()=>customRef.current?.focus(),100);}else{setCity(c);setShowCustom(false);setCustomCity("");onLocationChange&&onLocationChange(prov,c);}}
  function submitCustomCity(){
    const t=customCity.trim();
    if(!t)return;
    setCity(t);
    setShowCustom(false);
    setCustomCity("");
    onLocationChange&&onLocationChange(prov,t);
  }

  const filtered=rates.filter(r=>r.term===term);
  const vals=filtered.map(r=>type==="fixed"?r.fixed:r.variable).filter(v=>v!=null);
  const minR=vals.length?Math.min(...vals):null;
  const maxR=vals.length?Math.max(...vals):null;
  const spread=maxR&&minR?maxR-minR:1;
  const withRate=institutions.map(inst=>{const row=filtered.find(r=>r.institution===inst.name);const rate=row?(type==="fixed"?row.fixed:row.variable):null;return{inst,rate};}).filter(r=>r.rate!=null).sort((a,b)=>a.rate-b.rate);
  const noRate=institutions.map(inst=>{const row=filtered.find(r=>r.institution===inst.name);const rate=row?(type==="fixed"?row.fixed:row.variable):null;return{inst,rate};}).filter(r=>r.rate==null);
  const sortedRows=[...withRate,...noRate];
  const rankEmoji=["🥇","🥈","🥉"];
  const rankColors=["#f59e0b","#9ca3af","#cd7f32"];

  return(
    <div>
      <div style={{background:s.white,borderBottom:`1px solid ${s.border}`,padding:"10px 14px",display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",position:"sticky",top:54,zIndex:90,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
        <select value={prov} onChange={e=>changeProv(e.target.value)} style={{padding:"6px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600,background:s.white}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        <select value={showCustom?"__custom__":city} onChange={e=>changeCity(e.target.value)} style={{padding:"6px 10px",borderRadius:8,border:`1.5px solid ${showCustom||!PDATA[prov]?.cities.includes(city)?s.gold:s.border}`,fontSize:12,background:s.white}}>
          {(PDATA[prov]?.cities||[]).map(c=><option key={c} value={c}>{c}</option>)}
          {!PDATA[prov]?.cities.includes(city)&&city&&<option value={city}>📍 {city}</option>}
          <option value="__custom__">📍 My city isn't listed...</option>
        </select>
        {showCustom&&(
          <div style={{display:"flex",gap:6,alignItems:"center",background:"#fffbeb",border:`1.5px solid ${s.gold}`,borderRadius:8,padding:"4px 8px"}}>
            <span style={{fontSize:11,color:"#92400e"}}>📍</span>
            <input ref={customRef} type="text" value={customCity} onChange={e=>setCustomCity(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submitCustomCity()} placeholder="Type your city..." style={{border:"none",background:"transparent",fontSize:12,fontWeight:600,color:s.navy,outline:"none",width:150}}/>
            <button onClick={submitCustomCity} disabled={!customCity.trim()} style={{padding:"4px 10px",background:customCity.trim()?s.navy:"#ddd",color:"#fff",border:"none",borderRadius:6,fontSize:11,fontWeight:700,cursor:customCity.trim()?"pointer":"not-allowed"}}>Search →</button>
            <button onClick={()=>{setShowCustom(false);setCustomCity("");}} style={{background:"none",border:"none",color:s.muted,fontSize:14,cursor:"pointer"}}>✕</button>
          </div>
        )}
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {TERMS.map(t=><button key={t} onClick={()=>setTerm(t)} style={{padding:"5px 12px",borderRadius:20,border:`1.5px solid ${term===t?s.navy:s.border}`,background:term===t?s.navy:s.white,color:term===t?"#fff":s.muted,fontSize:11,cursor:"pointer",fontWeight:term===t?700:400}}>{t}</button>)}
          {["fixed","variable"].map(t=><button key={t} onClick={()=>setType(t)} style={{padding:"5px 12px",borderRadius:20,border:`1.5px solid ${type===t?s.red:s.border}`,background:type===t?s.red:s.white,color:type===t?"#fff":s.muted,fontSize:11,cursor:"pointer",fontWeight:type===t?700:400,textTransform:"capitalize"}}>{t}</button>)}
        </div>
        <button onClick={fetchRates} disabled={loading} style={{marginLeft:"auto",padding:"6px 14px",background:loading?"#aaa":s.red,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:loading?"not-allowed":"pointer"}}>{loading?"⏳ Loading...":"🔄 Refresh"}</button>
        <span style={{fontSize:10,color:s.muted}}>{lastUpd}</span>
      </div>
      {usingSample&&<div style={{background:"#fff7ed",border:`1px solid #fed7aa`,borderRadius:8,padding:"8px 14px",fontSize:11,color:"#c2410c",margin:"10px 0"}}>⚠️ Sample data — live rates load after Vercel deployment.</div>}
      {!loading&&withRate.length>0&&(
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:12,padding:"12px 16px",margin:"10px 0",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <div style={{flexShrink:0}}>
            <div style={{color:s.gold,fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:2}}>🏆 Best Rates This Week</div>
            <div style={{color:"rgba(255,255,255,0.5)",fontSize:10}}>{term} {type} · {city}</div>
          </div>
          <div style={{display:"flex",gap:8,flex:1,flexWrap:"wrap"}}>
            {withRate.slice(0,3).map(({inst,rate},i)=>(
              <div key={inst.name} style={{background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"8px 14px",display:"flex",alignItems:"center",gap:10,flex:1,minWidth:160,border:`1px solid rgba(255,255,255,0.1)`}}>
                <div style={{fontSize:18,lineHeight:1}}>{"🥇🥈🥉"[i]}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginBottom:1}}>{inst.name}</div>
                  <div style={{fontSize:20,fontWeight:800,color:i===0?s.gold:"#fff"}}>{rate.toFixed(2)}%</div>
                </div>
                <a href={inst.url} target="_blank" rel="noopener noreferrer" style={{padding:"5px 10px",background:i===0?s.gold:s.red,color:i===0?s.navy:"#fff",borderRadius:7,fontSize:10,fontWeight:700,textDecoration:"none",flexShrink:0}}>Apply</a>
              </div>
            ))}
          </div>
        </div>
      )}
      {!loading&&withRate.length>0&&(
        <div style={{display:"flex",alignItems:"center",gap:10,margin:"10px 0 6px",padding:"9px 14px",background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:`1px solid #bbf7d0`,borderRadius:10}}>
          <span style={{fontSize:18}}>✅</span>
          <div><div style={{fontSize:12,color:"#15803d",fontWeight:700}}>Sorted lowest to highest rate</div><div style={{fontSize:11,color:"#16a34a"}}>{term} {type} · Best: <b>{minR?.toFixed(2)}%</b>{city?` in ${city}`:""}</div></div>
        </div>
      )}
      <div style={{background:s.white,borderRadius:14,boxShadow:"0 4px 20px rgba(0,0,0,0.08)",overflow:"hidden",marginTop:6}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`}}>{["#","Institution","Rate","Rate Bar","Badge","Apply"].map(h=><th key={h} style={{color:"rgba(255,255,255,0.9)",padding:"12px 12px",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.6px",textAlign:h==="Institution"?"left":"center"}}>{h}</th>)}</tr></thead>
          <tbody>
            {loading?(Array.from({length:8}).map((_,i)=><tr key={i} style={{borderBottom:`1px solid ${s.light}`}}>{Array.from({length:6}).map((_,j)=><td key={j} style={{padding:"13px 12px"}}><Skeleton h={13} r={4}/></td>)}</tr>))
            :sortedRows.map(({inst,rate},idx)=>{
              const isBest=rate!==null&&rate===minR;const hasRate=rate!=null;
              const pct=hasRate&&maxR&&minR?(1-(rate-minR)/Math.max(spread,0.01))*100:0;
              return(
                <tr key={inst.name} style={{borderBottom:`1px solid ${s.light}`,background:isBest?"linear-gradient(135deg,#f0fdf4,#f7fdf9)":idx%2===0?s.white:"#fafbfc"}}>
                  <td style={{padding:"12px 12px",textAlign:"center",fontWeight:800,fontSize:15,color:hasRate&&idx<3?rankColors[idx]:s.muted,width:40}}>{hasRate?(idx<3?rankEmoji[idx]:idx+1):"—"}</td>
                  <td style={{padding:"12px 14px"}}><div style={{fontWeight:700,fontSize:13,color:s.navy,marginBottom:2}}>{inst.name}</div><span style={{display:"inline-block",background:inst.type==="national"?"#dbeafe":inst.type==="online"?"#f3e8ff":"#fef3c7",color:inst.type==="national"?"#1e40af":inst.type==="online"?"#7c3aed":"#92400e",borderRadius:20,padding:"1px 7px",fontSize:9,fontWeight:700}}>{inst.type==="national"?"NATIONAL":inst.type==="online"?"ONLINE":"LOCAL CU"}</span></td>
                  <td style={{textAlign:"center",width:80}}><div style={{fontSize:isBest?20:16,fontWeight:800,color:isBest?s.green:hasRate?s.navy:s.muted,lineHeight:1}}>{hasRate?rate.toFixed(2)+"%":"N/A"}</div>{isBest&&<div style={{fontSize:9,color:s.green,fontWeight:700,marginTop:2}}>BEST RATE</div>}</td>
                  <td style={{padding:"12px 16px",width:130}}>{hasRate?(<div><div style={{background:"#f1f5f9",borderRadius:20,height:8,overflow:"hidden"}}><div style={{width:pct+"%",height:"100%",background:isBest?`linear-gradient(90deg,${s.green},#22c55e)`:`linear-gradient(90deg,${s.navy},#2563eb)`,borderRadius:20}}/></div><div style={{fontSize:9,color:s.muted,marginTop:3,textAlign:"center"}}>{Math.round(pct)}% better than highest</div></div>):<div style={{textAlign:"center",color:"#ddd"}}>—</div>}</td>
                  <td style={{textAlign:"center",width:70}}>{isBest&&<span style={{display:"inline-block",background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"3px 8px",fontSize:10,fontWeight:700}}>⭐ Best</span>}{hasRate&&!isBest&&idx===1&&<span style={{display:"inline-block",background:"#f1f5f9",color:s.muted,borderRadius:20,padding:"3px 8px",fontSize:10,fontWeight:700}}>2nd</span>}{hasRate&&!isBest&&idx===2&&<span style={{display:"inline-block",background:"#fef3c7",color:"#92400e",borderRadius:20,padding:"3px 8px",fontSize:10,fontWeight:700}}>3rd</span>}</td>
                  <td style={{textAlign:"center",padding:"12px 10px"}}><a href={inst.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"6px 12px",background:isBest?s.green:s.navy,color:"#fff",borderRadius:8,fontSize:11,fontWeight:700,textDecoration:"none"}}>Apply →</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── COOKIE CONSENT ────────────────────────────────────────────────────────────
function CookieConsent({onShowPolicy}){
  const [show,setShow]=useState(false);
  useEffect(()=>{
    const consent=localStorage.getItem("cmr_cookie_consent");
    if(!consent)setShow(true);
  },[]);
  function accept(){localStorage.setItem("cmr_cookie_consent","accepted");setShow(false);}
  function essential(){localStorage.setItem("cmr_cookie_consent","essential");setShow(false);}
  if(!show)return null;
  return(
    <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:99999,background:s.navy,borderTop:`3px solid ${s.red}`,padding:"12px 16px",boxShadow:"0 -4px 20px rgba(0,0,0,0.3)"}}>
      <div style={{maxWidth:1060,margin:"0 auto",display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"}}>
        <div style={{flex:1,minWidth:200}}>
          <div style={{color:"#fff",fontSize:13,fontWeight:700,marginBottom:3}}>🍪 We use cookies</div>
          <div style={{color:"rgba(255,255,255,0.7)",fontSize:11,lineHeight:1.5}}>We use cookies for analytics and advertising (Google AdSense). See our <span onClick={()=>onShowPolicy("privacy")} style={{color:s.gold,cursor:"pointer",textDecoration:"underline"}}>Privacy Policy</span>.</div>
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",flexShrink:0}}>
          <button onClick={accept} style={{padding:"8px 20px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Accept All</button>
          <button onClick={essential} style={{padding:"8px 16px",background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(255,255,255,0.3)",borderRadius:8,fontSize:12,cursor:"pointer"}}>Essential Only</button>
        </div>
      </div>
    </div>
  );
}

// ── LEGAL MODAL ───────────────────────────────────────────────────────────────
const LEGAL={
  privacy:{
    title:"Privacy Policy",
    content:`<p style="color:#64748b;font-size:11px;margin-bottom:14px;">Last updated: June 24, 2026</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">1. Who We Are</h3>
<p>Canada Mortgage Rates operates canadamortgagerates.ca. We are committed to protecting your personal information in accordance with the <b>Personal Information Protection and Electronic Documents Act (PIPEDA)</b>.</p>
<p style="margin-top:6px;">Contact: <a href="mailto:info@canadamortgagerates.ca" style="color:#2563eb;">info@canadamortgagerates.ca</a></p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">2. What We Collect</h3>
<p>We collect the following only when you voluntarily submit a form: full name, email address, phone number (consultation form), city and province, and any message you submit.</p>
<p style="margin-top:6px;">We also collect anonymous traffic data via cookies (see Section 5).</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">3. Why We Collect It</h3>
<ul style="margin:6px 0 6px 18px;line-height:2;">
  <li><b>Consultation requests:</b> To connect you with a licensed mortgage professional</li>
  <li><b>Newsletter signups:</b> To send weekly mortgage rate updates</li>
  <li><b>BoC Rate Alerts:</b> To notify you of Bank of Canada announcements</li>
</ul>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">4. Who We Share It With</h3>
<ul style="margin:6px 0 6px 18px;line-height:2;">
  <li><b>Formspree</b> — Form submission processing</li>
  <li><b>Google AdSense</b> — Advertising (uses cookies)</li>
  <li><b>Google Analytics</b> — Traffic analysis (uses cookies)</li>
  <li><b>Anthropic Claude API</b> — AI-powered features (no personal data sent)</li>
</ul>
<p>We do <b>not</b> sell your personal information.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">5. Cookies</h3>
<ul style="margin:6px 0 6px 18px;line-height:2;">
  <li><b>Essential:</b> Required for the website to function</li>
  <li><b>Analytics:</b> Google Analytics tracks page views</li>
  <li><b>Advertising:</b> Google AdSense shows relevant ads</li>
</ul>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">6. Your Rights Under PIPEDA</h3>
<p>You have the right to access, correct, or request deletion of your data. Email <a href="mailto:info@canadamortgagerates.ca" style="color:#2563eb;">info@canadamortgagerates.ca</a> and we will respond within 30 days. You may also file a complaint with the <a href="https://www.priv.gc.ca" target="_blank" style="color:#2563eb;">Office of the Privacy Commissioner of Canada</a>.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">7. Data Retention</h3>
<p>We retain your information only as long as necessary to fulfill the purpose it was collected for, or as required by law.</p>`
  },
  terms:{
    title:"Terms of Use",
    content:`<p style="color:#64748b;font-size:11px;margin-bottom:14px;">Last updated: June 24, 2026</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">1. Acceptance of Terms</h3>
<p>By accessing canadamortgagerates.ca, you agree to these Terms of Use. If you do not agree, please do not use the site.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">2. Not a Licensed Mortgage Broker</h3>
<p>Canada Mortgage Rates is <b>not a licensed mortgage broker, lender, or financial advisor</b>. All content is for <b>informational and educational purposes only</b>. We are not registered with FSRA, BCFSA, or any provincial mortgage regulatory authority.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">3. Rate Accuracy</h3>
<p>Mortgage rates are sourced via AI-powered web search and may not reflect current rates. Rates are subject to change without notice. Always verify rates directly with the financial institution before making any financial decisions.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">4. No Financial Advice</h3>
<p>Nothing on this site constitutes financial, legal, or mortgage advice. Consult a licensed mortgage professional before making any mortgage-related decisions. We are not liable for any financial decisions made based on information on this site.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">5. Third-Party Links</h3>
<p>This site contains links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of those sites.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">6. Limitation of Liability</h3>
<p>To the maximum extent permitted by Canadian law, Canada Mortgage Rates shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">7. Real Estate Listings Disclaimer</h3>
<p>Property listings are sourced via AI web search. We are not affiliated with CREA, MLS®, or Realtor.ca. Always verify listings with a licensed REALTOR® before making any real estate decisions.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">8. Governing Law</h3>
<p>These Terms are governed by the laws of the Province of Manitoba and the federal laws of Canada.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">9. Contact</h3>
<p><a href="mailto:info@canadamortgagerates.ca" style="color:#2563eb;">info@canadamortgagerates.ca</a></p>`
  },
  disclaimer:{
    title:"Financial Disclaimer",
    content:`<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:12px;margin-bottom:16px;"><p style="color:#c2410c;font-weight:700;font-size:13px;">⚠️ Please read this disclaimer carefully before using this website.</p></div>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">Not a Licensed Mortgage Broker</h3>
<p>Canada Mortgage Rates is not a licensed mortgage broker, mortgage agent, financial advisor, or lender. We are not registered with any provincial mortgage regulatory authority.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">Rates Are Informational Only</h3>
<p>All rates displayed are sourced via AI-powered web search and may not reflect your actual qualified rate, real-time rates, all available rates, or rates inclusive of all fees.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">Calculator Results Are Estimates</h3>
<p>All mortgage calculator results are estimates. Actual payments vary based on lender terms, insurance, taxes, and other factors.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">Always Consult a Licensed Professional</h3>
<p>Before making any mortgage or real estate decision, consult: a licensed mortgage broker or agent, your financial institution directly, a licensed real estate lawyer, or a certified financial planner.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">Referral Disclosure</h3>
<p>This website may earn referral fees when users connect with mortgage or insurance professionals through our platform. This does not influence the information displayed.</p>`
  }
};

function LegalModal({type,onClose}){
  if(!type)return null;
  const content=LEGAL[type];
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99998,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={onClose}>
      <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:680,overflow:"hidden",maxHeight:"85vh",display:"flex",flexDirection:"column",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}} onClick={e=>e.stopPropagation()}>
        <div style={{background:s.navy,padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
          <div>
            <div style={{color:"#fff",fontSize:16,fontWeight:800}}>{content.title}</div>
            <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:2}}>Canada Mortgage Rates · canadamortgagerates.ca</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:30,height:30,borderRadius:"50%",fontSize:15,cursor:"pointer",flexShrink:0}}>✕</button>
        </div>
        <div style={{padding:"20px 24px",overflowY:"auto",flex:1,fontSize:13,lineHeight:1.8,color:s.navy}} dangerouslySetInnerHTML={{__html:content.content}}/>
        <div style={{padding:"12px 20px",borderTop:`1px solid ${s.border}`,display:"flex",justifyContent:"flex-end",flexShrink:0}}>
          <button onClick={onClose} style={{padding:"9px 22px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Close</button>
        </div>
      </div>
    </div>
  );
}
function CalcTab({prov}){
  const [tab,setTab]=useState("payment");
  const [hp,setHp]=useState(500000);const [dp,setDp]=useState(20);const [am,setAm]=useState(25);const [pr,setPr]=useState(5.0);const [fr,setFr]=useState("monthly");const [payR,setPayR]=useState(null);const payRef=useRef(null);
  const [inc,setInc]=useState(90000);const [dbt,setDbt]=useState(500);const [ad,setAd]=useState(20);const [aa,setAa]=useState(25);const [ar,setAr]=useState(5.0);const [affR,setAffR]=useState(null);const affRef=useRef(null);
  const [rent,setRent]=useState(2000);const [rp,setRp]=useState(500000);const [rd,setRd]=useState(20);const [rr,setRr]=useState(5.0);const [ry,setRy]=useState(5);const [rapr,setRapr]=useState(3);const [rvbR,setRvbR]=useState(null);const rvbRef=useRef(null);
  const [rb,setRb]=useState(350000);const [ro,setRo]=useState(5.5);const [rn,setRn]=useState(4.8);const [rma,setRma]=useState(20);const [rt,setRt]=useState(5);const [renewR,setRenewR]=useState(null);const renewRef=useRef(null);
  const [sr,setSr]=useState(4.9);const [si,setSi]=useState(90000);const [sd,setSd]=useState(500);const [sdp,setSdp]=useState(100000);const [sa,setSa]=useState(25);const [stR,setStR]=useState(null);const stRef=useRef(null);
  const [scenarios,setScenarios]=useState([{id:1,label:"Scenario A",homePrice:500000,downPct:20,amort:25,rate:5.0,freq:"monthly"},{id:2,label:"Scenario B",homePrice:500000,downPct:10,amort:25,rate:4.9,freq:"monthly"}]);
  const [compareMode,setCompareMode]=useState(false);

  function scrollAfter(ref,fn){fn();setTimeout(()=>ref.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);}
  const freqs=[{id:"monthly",label:"📅 Monthly"},{id:"semimonthly",label:"📅 Semi-Monthly"},{id:"biweekly",label:"📅 Bi-Weekly"},{id:"accelerated",label:"⚡ Accelerated"}];
  const tabList=[{id:"payment",label:"💰 Payment"},{id:"afford",label:"🏡 Affordability"},{id:"rentvbuy",label:"🏠 Rent vs Buy"},{id:"renewal",label:"🔄 Renewal"},{id:"stress",label:"📋 Stress Test"}];

  function doPayment(){const down=Math.round(hp*dp/100);const cmhc=getCMHC(hp,dp);const ltt=getLTT(hp,prov);const principal=hp-down+(cmhc.req?cmhc.premium:0);const mp=calcPmt(principal,pr,am);const fpmt=fr==="monthly"?mp:fr==="semimonthly"?mp/2:fr==="biweekly"?mp*12/26:mp/2;const closing=ltt+1500+500+300+(cmhc.req?cmhc.premium:0);scrollAfter(payRef,()=>setPayR({mp,fpmt,fr,down,cmhc,ltt,principal,closing,hp,dp,am,pr}));}
  function doAfford(){const mi=inc/12,maxPmt=(mi*0.39)-dbt,r=ar/100/12,n=aa*12,maxMtg=maxPmt*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)),maxPrice=maxMtg/(1-ad/100),dpA=maxPrice*(ad/100),mp=calcPmt(maxMtg,ar,aa);scrollAfter(affRef,()=>setAffR({maxPrice,maxMtg,dpA,mp,ad,aa,ar}));}
  function doRvb(){const down=rp*rd/100,mortgage=rp-down,mp=calcPmt(mortgage,rr,25),propTax=rp*0.01/12,maint=rp*0.01/12,ins=150,totalBuyCost=(mp+propTax+maint+ins)*12*ry+down,futureVal=rp*Math.pow(1+rapr/100,ry),totalRentCost=rent*12*ry;scrollAfter(rvbRef,()=>setRvbR({totalBuyCost,futureVal,totalRentCost,mp,propTax,maint,ins,ry}));}
  function doRenewal(){const op=calcPmt(rb,ro,rma),np=calcPmt(rb,rn,rma),sv=op-np;scrollAfter(renewRef,()=>setRenewR({op,np,sv,ts:sv*rt*12,rt}));}
  function doStress(){const str=Math.max(sr+2,5.25),mi=si/12,maxH=(mi*0.39)-sd,r=str/100/12,n=sa*12,maxMtg=maxH*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)),maxP=maxMtg+sdp;scrollAfter(stRef,()=>setStR({str,maxMtg,maxP,pass:maxMtg>0,sr}));}
  function calcSc(sc){const down=Math.round(sc.homePrice*sc.downPct/100);const cmhc=getCMHC(sc.homePrice,sc.downPct);const principal=sc.homePrice-down+(cmhc.req?cmhc.premium:0);const mp=calcPmt(principal,sc.rate,sc.amort);const fpmt=sc.freq==="monthly"?mp:sc.freq==="semimonthly"?mp/2:sc.freq==="biweekly"?mp*12/26:mp/2;return{mp,fpmt,down,cmhc,principal};}
  function addSc(){if(scenarios.length>=4)return;const l=scenarios[scenarios.length-1];setScenarios([...scenarios,{id:Date.now(),label:`Scenario ${String.fromCharCode(65+scenarios.length)}`,homePrice:l.homePrice,downPct:l.downPct,amort:l.amort,rate:l.rate,freq:l.freq}]);}
  function updateSc(id,key,val){setScenarios(scenarios.map(sc=>sc.id===id?{...sc,[key]:val}:sc));}
  function removeSc(id){if(scenarios.length>1)setScenarios(scenarios.filter(sc=>sc.id!==id));}

  return(
    <div>
      <div style={{display:"flex",gap:2,background:"#f1f5f9",borderRadius:10,padding:4,marginBottom:14,flexWrap:"wrap"}}>
        {tabList.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"7px 4px",borderRadius:8,fontSize:11,fontWeight:600,cursor:"pointer",color:tab===t.id?s.navy:s.muted,border:"none",background:tab===t.id?s.white:"none",boxShadow:tab===t.id?"0 1px 4px rgba(0,0,0,0.1)":"none",minWidth:70}}>{t.label}</button>)}
      </div>

      {tab==="payment"&&(
        <div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"}}>
            <button onClick={()=>setCompareMode(!compareMode)} style={{padding:"7px 14px",background:compareMode?s.red:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>{compareMode?"✕ Exit Compare":"⚖️ Compare Scenarios"}</button>
            {compareMode&&scenarios.length<4&&<button onClick={addSc} style={{padding:"7px 12px",background:s.green,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>+ Add Scenario</button>}
          </div>
          {!compareMode?(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
              <Card>
                <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>💰 Payment Calculator</h3>
                <Field label="Home Price ($)"><input type="number" value={hp} onChange={e=>setHp(parseFloat(e.target.value)||0)} style={inp}/></Field>
                <Field label="Down Payment (%)"><input type="number" value={dp} onChange={e=>setDp(parseFloat(e.target.value)||0)} style={inp}/></Field>
                <Field label="Interest Rate (%)"><input type="number" value={pr} onChange={e=>setPr(parseFloat(e.target.value)||0)} style={inp}/></Field>
                <Field label="Amortization"><select value={am} onChange={e=>setAm(parseInt(e.target.value))} style={inp}><option value={15}>15 years</option><option value={20}>20 years</option><option value={25}>25 years</option><option value={30}>30 years</option></select></Field>
                <Field label="Payment Frequency"><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>{freqs.map(f=><button key={f.id} onClick={()=>setFr(f.id)} style={{padding:"7px 5px",border:`1.5px solid ${fr===f.id?s.navy:s.border}`,borderRadius:8,background:fr===f.id?s.navy:s.white,color:fr===f.id?"#fff":s.muted,fontSize:11,fontWeight:600,cursor:"pointer"}}>{f.label}</button>)}</div></Field>
                <button onClick={doPayment} style={calcBtn}>Calculate Payment</button>
                <div ref={payRef}>{payR&&<div style={resultBox}><div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>{payR.fr==="monthly"?"Monthly":payR.fr==="semimonthly"?"Semi-Monthly":payR.fr==="biweekly"?"Bi-Weekly":"Accelerated Bi-Weekly"} Payment</div><div style={{fontSize:30,fontWeight:800,marginBottom:3}}>{cur(payR.fpmt)}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginBottom:10}}>{payR.am}yr · {payR.pr}%</div><div style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,marginBottom:8}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:5,textTransform:"uppercase",letterSpacing:"0.5px"}}>All Frequencies</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}><RRow l="Monthly" v={cur(payR.mp)+"/mo"}/><RRow l="Semi-Monthly" v={cur(payR.mp/2)+"/pmt"}/><RRow l="Bi-Weekly" v={cur(payR.mp*12/26)+"/pmt"}/><RRow l="Accel. Bi-Weekly" v={cur(payR.mp/2)+"/pmt"} bold/></div></div><div style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:5,textTransform:"uppercase",letterSpacing:"0.5px"}}>Summary</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}><RRow l="Home Price" v={cur(payR.hp)}/><RRow l="Down" v={cur(payR.down)+" ("+payR.dp+"%)"}  /><RRow l="CMHC" v={payR.cmhc.req?cur(payR.cmhc.premium):"Not required ✅"}/><RRow l="Total Mortgage" v={cur(payR.principal)} bold/><RRow l="LTT" v={payR.ltt>0?cur(payR.ltt):"$0 (AB)"}/><RRow l="Cash Needed" v={cur(payR.down+payR.closing)} bold/></div></div></div>}</div>
              </Card>
              <Card style={{background:s.navy}}>
                <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:12}}>📖 Canadian Mortgage Rules</h3>
                {[["MIN DOWN PAYMENT","5% under $500K · 10% on $500K–$999K · 20% on $1M+"],["CMHC INSURANCE","Required if down payment under 20%."],["GDS RATIO — MAX 39%","Housing costs cannot exceed 39% of gross monthly income."],["STRESS TEST","Must qualify at rate +2% or 5.25%, whichever is higher."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,marginBottom:7}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:2}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)"}}>{d}</div></div>)}
              </Card>
            </div>
          ):(
            <div>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${scenarios.length},1fr)`,gap:12,marginBottom:12}}>
                {scenarios.map((sc,idx)=>(
                  <Card key={sc.id} style={{border:`2px solid ${[s.navy,s.red,s.green,"#7c3aed"][idx]}`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                      <input value={sc.label} onChange={e=>updateSc(sc.id,"label",e.target.value)} style={{fontSize:13,fontWeight:700,color:s.navy,border:"none",background:"none",padding:0,width:"80%"}}/>
                      {scenarios.length>1&&<button onClick={()=>removeSc(sc.id)} style={{background:"none",border:"none",color:s.muted,cursor:"pointer",fontSize:16}}>✕</button>}
                    </div>
                    {[["homePrice","Home Price ($)",5000],["downPct","Down Payment (%)",1],["rate","Rate (%)",0.05],["amort","Amort. (yrs)",1]].map(([k,l,step])=>(
                      <div key={k} style={{marginBottom:7}}><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:3,textTransform:"uppercase",letterSpacing:"0.4px"}}>{l}</label><input type="number" value={sc[k]} step={step} onChange={e=>updateSc(sc.id,k,parseFloat(e.target.value)||0)} style={{...inp,fontSize:12}}/></div>
                    ))}
                    <div style={{marginBottom:7}}><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:3,textTransform:"uppercase",letterSpacing:"0.4px"}}>Frequency</label><select value={sc.freq} onChange={e=>updateSc(sc.id,"freq",e.target.value)} style={{...inp,fontSize:12}}><option value="monthly">Monthly</option><option value="semimonthly">Semi-Monthly</option><option value="biweekly">Bi-Weekly</option><option value="accelerated">Accelerated</option></select></div>
                  </Card>
                ))}
              </div>
              <Card>
                <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>📊 Comparison Results</h3>
                <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",minWidth:360}}><thead><tr style={{background:s.light}}><th style={{textAlign:"left",padding:"8px 10px",fontSize:11,fontWeight:700,color:s.muted,textTransform:"uppercase"}}>Metric</th>{scenarios.map((sc,i)=><th key={sc.id} style={{textAlign:"center",padding:"8px 10px",fontSize:11,fontWeight:700,color:"#fff",background:[s.navy,s.red,s.green,"#7c3aed"][i]}}>{sc.label}</th>)}</tr></thead><tbody>{[["Payment/Period",(sc,r)=>cur(r.fpmt)],["Monthly Equiv",(sc,r)=>cur(r.mp)],["Down Payment",(sc,r)=>cur(r.down)+" ("+sc.downPct+"%)"],["CMHC",(sc,r)=>r.cmhc.req?cur(r.cmhc.premium):"None ✅"],["Total Mortgage",(sc,r)=>cur(r.principal)],["Annual Cost",(sc,r)=>cur(r.fpmt*(sc.freq==="monthly"?12:sc.freq==="semimonthly"?24:26))]].map(([label,fn],ri)=>{const vals=scenarios.map(sc=>({sc,r:calcSc(sc)}));return(<tr key={label} style={{borderBottom:`1px solid ${s.light}`,background:ri%2===0?s.white:"#fafafa"}}><td style={{padding:"8px 10px",fontSize:12,fontWeight:600,color:s.navy}}>{label}</td>{vals.map(({sc,r})=><td key={sc.id} style={{padding:"8px 10px",fontSize:12,textAlign:"center",color:s.navy}}>{fn(sc,r)}</td>)}</tr>);})}</tbody></table></div>
                <div style={{background:s.light,borderRadius:8,padding:10,marginTop:10}}><div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:4}}>💡 Lowest Payment</div>{(()=>{const calcd=scenarios.map(sc=>({label:sc.label,pmt:calcSc(sc).fpmt}));const best=calcd.reduce((a,b)=>a.pmt<b.pmt?a:b);return <div style={{fontSize:11,color:s.muted}}><b style={{color:s.navy}}>{best.label}</b> has the lowest payment at <b style={{color:s.green}}>{cur(best.pmt)}</b>.</div>;})()}</div>
              </Card>
            </div>
          )}
        </div>
      )}

      {tab==="afford"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>🏡 Affordability Calculator</h3>
            <Field label="Annual Income ($)"><input type="number" value={inc} onChange={e=>setInc(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Monthly Debts ($)"><input type="number" value={dbt} onChange={e=>setDbt(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Down Payment (%)"><input type="number" value={ad} onChange={e=>setAd(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Interest Rate (%)"><input type="number" value={ar} onChange={e=>setAr(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Amortization"><select value={aa} onChange={e=>setAa(parseInt(e.target.value))} style={inp}><option value={25}>25 years</option><option value={20}>20 years</option><option value={15}>15 years</option><option value={30}>30 years</option></select></Field>
            <button onClick={doAfford} style={calcBtn}>Calculate Affordability</button>
            <div ref={affRef}>{affR&&<div style={resultBox}><div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>Maximum Home Price</div><div style={{fontSize:28,fontWeight:800,marginBottom:8}}>{cur(affR.maxPrice)}</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}><RRow l="Down Payment" v={cur(affR.dpA)+" ("+affR.ad+"%)"}  /><RRow l="Max Mortgage" v={cur(affR.maxMtg)}/><RRow l="Monthly Payment" v={cur(affR.mp)+"/mo"} bold/></div></div>}</div>
          </Card>
          <Card style={{background:"#f0fdf4",border:`1px solid #bbf7d0`}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#15803d",marginBottom:12}}>✅ Eligibility Rules</h3>
            {[["GDS RATIO — MAX 39%","Housing costs ≤ 39% of gross monthly income"],["TDS RATIO — MAX 44%","Total debt payments ≤ 44% of gross monthly income"],["STRESS TEST","Qualify at rate + 2% or 5.25% — whichever is higher"],["CMHC","Required if down payment is less than 20%"]].map(([t,d])=><div key={t} style={{background:s.white,borderRadius:8,padding:10,marginBottom:7,border:"1px solid #dcfce7"}}><div style={{fontSize:10,color:"#15803d",fontWeight:700,marginBottom:2}}>{t}</div><div style={{fontSize:11,color:"#374151"}}>{d}</div></div>)}
          </Card>
        </div>
      )}

      {tab==="rentvbuy"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>🏠 Rent vs Buy</h3>
            {[["Monthly Rent ($)",rent,setRent],["Home Price ($)",rp,setRp],["Down Payment (%)",rd,setRd],["Mortgage Rate (%)",rr,setRr],["Years to Compare",ry,setRy],["Annual Appreciation (%)",rapr,setRapr]].map(([l,v,sv])=><Field key={l} label={l}><input type="number" value={v} onChange={e=>sv(parseFloat(e.target.value)||0)} style={inp}/></Field>)}
            <button onClick={doRvb} style={calcBtn}>Compare</button>
            <div ref={rvbRef}>{rvbR&&<div style={resultBox}><div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>Over {rvbR.ry} Years</div><div style={{fontSize:20,fontWeight:800,marginBottom:8}}>{rvbR.futureVal-rvbR.totalBuyCost>0?"🏠 Buying":"🏠 Renting"} looks better</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}><RRow l="Monthly Buy Costs" v={cur(rvbR.mp+rvbR.propTax+rvbR.maint+rvbR.ins)+"/mo"}/><RRow l="Monthly Rent" v={cur(rent)+"/mo"}/><RRow l="Total Buy Cost" v={cur(rvbR.totalBuyCost)}/><RRow l="Total Rent Cost" v={cur(rvbR.totalRentCost)}/><RRow l="Future Home Value" v={cur(rvbR.futureVal)}/><RRow l="Net Worth (Buying)" v={cur(rvbR.futureVal-rvbR.totalBuyCost)} bold/></div></div>}</div>
          </Card>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:12}}>🤔 What to Consider</h3>
            {[["BUY IF...","Plan to stay 5+ years, stable income, want to build equity."],["RENT IF...","Need flexibility, may relocate, or market is expensive."],["HIDDEN COSTS","Property taxes, maintenance (~1%/yr), insurance, closing costs."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,marginBottom:7}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:2}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)"}}>{d}</div></div>)}
          </Card>
        </div>
      )}

      {tab==="renewal"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>🔄 Renewal Calculator</h3>
            {[["Remaining Balance ($)",rb,setRb],["Current Rate (%)",ro,setRo],["New Rate (%)",rn,setRn],["Remaining Amortization (yrs)",rma,setRma],["New Term (yrs)",rt,setRt]].map(([l,v,sv])=><Field key={l} label={l}><input type="number" value={v} onChange={e=>sv(parseFloat(e.target.value)||0)} style={inp}/></Field>)}
            <button onClick={doRenewal} style={calcBtn}>Calculate Savings</button>
            <div ref={renewRef}>{renewR&&<div style={resultBox}><div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>Monthly Savings</div><div style={{fontSize:28,fontWeight:800,marginBottom:8}}>{cur(renewR.sv)}/mo</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}><RRow l="Old Payment" v={cur(renewR.op)+"/mo"}/><RRow l="New Payment" v={cur(renewR.np)+"/mo"}/><RRow l={"Savings Over "+renewR.rt+"yr"} v={cur(renewR.ts)} bold/></div></div>}</div>
          </Card>
          <Card style={{background:"#fffbeb",border:`1px solid #fde68a`}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#92400e",marginBottom:12}}>⏰ Renewal Tips</h3>
            {[["START EARLY","Start shopping 4 months before maturity."],["SHOP AROUND","Your lender's first offer is rarely the best."],["NO SWITCH PENALTY","No penalty to switch lenders at renewal."],["NEGOTIATE","Always ask for a better rate."]].map(([t,d])=><div key={t} style={{background:s.white,borderRadius:8,padding:10,marginBottom:7,border:"1px solid #fde68a"}}><div style={{fontSize:10,color:"#92400e",fontWeight:700,marginBottom:2}}>{t}</div><div style={{fontSize:11,color:"#374151"}}>{d}</div></div>)}
          </Card>
        </div>
      )}

      {tab==="stress"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>📋 Stress Test Calculator</h3>
            {[["Your Mortgage Rate (%)",sr,setSr],["Annual Income ($)",si,setSi],["Monthly Debts ($)",sd,setSd],["Down Payment ($)",sdp,setSdp],["Amortization (yrs)",sa,setSa]].map(([l,v,sv])=><Field key={l} label={l}><input type="number" value={v} onChange={e=>sv(parseFloat(e.target.value)||0)} style={inp}/></Field>)}
            <button onClick={doStress} style={calcBtn}>Run Stress Test</button>
            <div ref={stRef}>{stR&&<div style={resultBox}><div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>Stress Test Rate: {stR.str.toFixed(2)}%</div><div style={{fontSize:24,fontWeight:800,marginBottom:8,color:stR.pass?"#4ade80":"#fca5a5"}}>{stR.pass?"✅ You Qualify":"❌ May Not Qualify"}</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}><RRow l="Your Rate" v={stR.sr+"%"}/><RRow l="Stress Test Rate" v={stR.str.toFixed(2)+"%"}/><RRow l="Max Mortgage" v={cur(stR.maxMtg)}/><RRow l="Max Home Price" v={cur(stR.maxP)} bold/></div></div>}</div>
          </Card>
          <Card style={{background:"#fff1f2",border:`1px solid #fecdd3`}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#be123c",marginBottom:12}}>📋 About the Stress Test</h3>
            {[["THE RULE","Qualify at rate + 2% OR 5.25% — whichever is HIGHER."],["WHO IT APPLIES TO","All federally regulated lenders."],["HOW TO PASS","Increase income, reduce debts, or choose a lower-priced home."]].map(([t,d])=><div key={t} style={{background:s.white,borderRadius:8,padding:10,marginBottom:7,border:"1px solid #fecdd3"}}><div style={{fontSize:10,color:"#be123c",fontWeight:700,marginBottom:2}}>{t}</div><div style={{fontSize:11,color:"#374151"}}>{d}</div></div>)}
          </Card>
        </div>
      )}
    </div>
  );
}

function PropertyTaxTab({initProv,initCity}){
  const [prov,setProv]=useState(initProv);const [city,setCity]=useState(initCity);const [homeVal,setHomeVal]=useState(500000);const [result,setResult]=useState(null);const resultRef=useRef(null);
  useEffect(()=>{setProv(initProv);setCity(initCity);},[initProv,initCity]);
  useEffect(()=>{const cities=PDATA[prov]?.cities||[];if(!cities.includes(city))setCity(cities[0]||"");setResult(null);},[prov]);
  function calc(){const pr=PT_RATES[prov];const rates=(pr&&pr[city])?pr[city]:(pr?pr.def:{res:0.01,edu:0.003});const resTax=Math.round(homeVal*rates.res),eduTax=Math.round(homeVal*rates.edu),total=resTax+eduTax;setResult({resTax,eduTax,total,monthly:Math.round(total/12),rates,homeVal});setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);}
  return(
    <Card>
      <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:5}}>🏛️ Property Tax Estimator</h2>
      <p style={{fontSize:12,color:s.muted,marginBottom:14}}>Estimate your annual property tax based on your home's assessed value and city.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:10,marginBottom:12}}>
        <Field label="Home Value ($)"><input type="number" value={homeVal} onChange={e=>setHomeVal(parseFloat(e.target.value)||0)} style={inp}/></Field>
        <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
        <Field label="City"><select value={city} onChange={e=>setCity(e.target.value)} style={inp}>{(PDATA[prov]?.cities||[]).map(c=><option key={c}>{c}</option>)}</select></Field>
      </div>
      <button onClick={calc} style={{padding:"9px 22px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Estimate Property Tax</button>
      <div ref={resultRef}>{result&&(
        <div style={{marginTop:14}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,marginBottom:12}}>
            {[[cur(result.total),"Annual Tax"],[cur(result.monthly),"Per Month"],[(result.rates.res*100).toFixed(3)+"%","Residential Rate"],[(( result.rates.res+result.rates.edu)*100).toFixed(3)+"%","Total Mill Rate"]].map(([v,l])=><div key={l} style={{background:s.light,border:`1px solid ${s.border}`,borderRadius:10,padding:12,textAlign:"center"}}><div style={{fontSize:18,fontWeight:800,color:s.navy}}>{v}</div><div style={{fontSize:10,color:s.muted,marginTop:2}}>{l}</div></div>)}
          </div>
          <div style={{background:"#f8fafc",borderRadius:10,padding:12}}>
            <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.4px"}}>Tax Breakdown</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,fontSize:12}}>
              <div style={{color:s.muted}}>Home Value</div><div style={{fontWeight:700,textAlign:"right"}}>{cur(result.homeVal)}</div>
              <div style={{color:s.muted}}>Residential ({(result.rates.res*100).toFixed(3)}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur(result.resTax)}</div>
              <div style={{color:s.muted}}>Education ({(result.rates.edu*100).toFixed(3)}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur(result.eduTax)}</div>
              <div style={{borderTop:`1px solid ${s.border}`,paddingTop:4,gridColumn:"1/-1"}}/>
              <div style={{fontWeight:700,color:s.navy}}>Total Annual</div><div style={{fontWeight:800,color:s.navy,textAlign:"right"}}>{cur(result.total)}</div>
            </div>
          </div>
          <p style={{fontSize:10,color:"#bbb",marginTop:8}}>* Estimates based on publicly available mill rates. Verify with your municipality.</p>
        </div>
      )}</div>
    </Card>
  );
}

function InsuranceTab({initProv}){
  const [homeVal,setHomeVal]=useState(500000);const [homeType,setHomeType]=useState("detached");const [yearBuilt,setYearBuilt]=useState("mid");const [prov,setProv]=useState(initProv);const [results,setResults]=useState(null);const resultRef=useRef(null);
  useEffect(()=>setProv(initProv),[initProv]);
  function calc(){const base=(INS_BASE[prov]||0.0009)*(TYPE_MULT[homeType]||1)*(YEAR_MULT[yearBuilt]||1),baseAnnual=Math.round(homeVal*base/100)*100;setResults(INS_PROVIDERS.map(p=>({...p,annual:Math.round(baseAnnual*p.mult/100)*100})));setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);}
  return(
    <Card>
      <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:5}}>🏠 Home Insurance Estimator</h2>
      <p style={{fontSize:12,color:s.muted,marginBottom:14}}>Required by all mortgage lenders — compare top Canadian home insurance providers.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10,marginBottom:12}}>
        <Field label="Home Value ($)"><input type="number" value={homeVal} onChange={e=>setHomeVal(parseFloat(e.target.value)||0)} style={inp}/></Field>
        <Field label="Home Type"><select value={homeType} onChange={e=>setHomeType(e.target.value)} style={inp}><option value="detached">Detached House</option><option value="semi">Semi-Detached</option><option value="condo">Condo</option><option value="townhouse">Townhouse</option></select></Field>
        <Field label="Year Built"><select value={yearBuilt} onChange={e=>setYearBuilt(e.target.value)} style={inp}><option value="new">2010 or newer</option><option value="mid">1980–2009</option><option value="old">Before 1980</option></select></Field>
        <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
      </div>
      <button onClick={calc} style={{padding:"9px 22px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Estimate Insurance</button>
      <div ref={resultRef}>{results&&(
        <div style={{marginTop:14}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:12}}>
            {results.map(p=><div key={p.name} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:13,background:s.white}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}><div style={{fontSize:13,fontWeight:800,color:s.navy}}>{p.name}</div><div style={{color:s.gold,fontSize:11}}>{p.stars}</div></div><div style={{fontSize:18,fontWeight:800,color:s.green}}>{cur(p.annual)}/yr</div><div style={{fontSize:11,color:s.muted,marginBottom:7}}>{cur(Math.round(p.annual/12))}/month</div><div style={{background:"#f0fdf4",borderRadius:6,padding:"5px 9px",fontSize:11,color:"#15803d",fontWeight:600,marginBottom:7}}>💡 {p.discount}</div><div style={{fontSize:11,color:s.muted,marginBottom:9,lineHeight:1.5}}>{p.desc}</div><a href={p.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:8,background:s.navy,color:"#fff",borderRadius:8,fontSize:11,fontWeight:700,textAlign:"center",textDecoration:"none"}}>Get Real Quote →</a></div>)}
          </div>
          <p style={{fontSize:10,color:"#bbb",marginTop:10}}>* Estimates only. Actual premiums vary by insurer and risk profile.</p>
        </div>
      )}</div>
    </Card>
  );
}

function RateFinderTab(){
  const [step,setStep]=useState(0);const [answers,setAnswers]=useState({});const [result,setResult]=useState(null);
  function goBack(){if(step>0){const na={...answers};delete na[RF_STEPS[step].key];setAnswers(na);setStep(step-1);}}
  function pick(key,val){
    const na={...answers,[key]:val};setAnswers(na);
    if(step<RF_STEPS.length-1){setStep(step+1);}else{
      const term=na.term||"",credit=na.credit||"",down=na.down||"",emp=na.employment||"";
      let base=term.includes("Variable")?3.4:term.includes("1–2")?4.5:term.includes("3")?4.7:4.9,adj=0;
      if(credit.includes("Excellent"))adj-=0.25;if(credit.includes("Fair"))adj+=0.4;if(credit.includes("Below"))adj+=0.9;
      if(emp.includes("Self"))adj+=0.3;if(emp.includes("Contract"))adj+=0.2;if(down.includes("5–9"))adj-=0.1;
      const est=Math.max(3.0,base+adj),risk=credit.includes("Excellent")||credit.includes("Good")?"Low":credit.includes("Fair")?"Medium":"High";
      const tip=risk==="Low"?"Strong profile — shop multiple lenders.":risk==="Medium"?"Improving your credit score significantly improves your rate.":"A mortgage broker can access alternative lenders. Consider a co-signer.";
      setResult({lo:(est-0.15).toFixed(2),hi:(est+0.25).toFixed(2),risk,tip,term,credit,down,emp});
    }
  }
  function reset(){setStep(0);setAnswers({});setResult(null);}
  const riskColor={Low:s.green,Medium:s.gold,High:s.red};
  return(
    <Card>
      <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:5}}>🎯 Personalized Rate Finder</h2>
      <p style={{fontSize:12,color:s.muted,marginBottom:14}}>Answer 5 quick questions to get your estimated mortgage rate range.</p>
      {!result?(
        <>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            {step>0&&<button onClick={goBack} style={{background:"none",border:`1.5px solid ${s.border}`,borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:600,cursor:"pointer",color:s.muted}}>← Back</button>}
            <div style={{display:"flex",alignItems:"center",gap:8,flex:1}}>
              <div style={{width:26,height:26,background:s.navy,color:"#fff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0}}>{step+1}</div>
              <div style={{fontSize:14,fontWeight:700,color:s.navy}}>{RF_STEPS[step].q}</div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:14}}>
            {RF_STEPS[step].opts.map(opt=><button key={opt} onClick={()=>pick(RF_STEPS[step].key,opt)} style={{padding:"10px 10px",border:`1.5px solid ${s.border}`,borderRadius:10,background:s.white,fontSize:12,fontWeight:600,color:s.navy,cursor:"pointer",textAlign:"left"}}>{opt}</button>)}
          </div>
          <div style={{background:"#f1f5f9",borderRadius:20,height:6,marginBottom:5}}><div style={{background:s.red,height:6,borderRadius:20,width:((step+1)/5*100)+"%",transition:"width 0.3s"}}/></div>
          <div style={{fontSize:10,color:s.muted}}>Step {step+1} of 5</div>
        </>
      ):(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:12,padding:16,marginBottom:12}}>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:11,marginBottom:3}}>Your Estimated Rate Range</div>
            <div style={{color:"#fff",fontSize:34,fontWeight:800,marginBottom:3}}>{result.lo}% — {result.hi}%</div>
            <div style={{color:"rgba(255,255,255,0.65)",fontSize:11}}>{result.term} · Based on your answers</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:8,marginBottom:12}}>
            {[[result.risk+" Risk","Profile",riskColor[result.risk]],[result.credit,"Credit",s.navy],[result.down,"Down",s.navy],[result.emp,"Employment",s.navy]].map(([v,l,c])=><div key={l} style={{background:s.white,border:`1px solid ${s.border}`,borderRadius:10,padding:10,textAlign:"center"}}><div style={{fontSize:12,fontWeight:800,color:c,lineHeight:1.3}}>{v}</div><div style={{fontSize:10,color:s.muted,marginTop:2}}>{l}</div></div>)}
          </div>
          <div style={{background:"#f8fafc",borderRadius:10,padding:12,marginBottom:12}}><div style={{fontSize:12,fontWeight:700,color:s.navy,marginBottom:5}}>💡 Your Tip</div><p style={{fontSize:12,color:s.muted,lineHeight:1.7}}>{result.tip}</p></div>
          <button onClick={reset} style={{padding:"9px 18px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🔄 Retake Quiz</button>
          <p style={{fontSize:10,color:"#bbb",marginTop:8}}>* Estimates only. Consult a licensed mortgage broker for your actual rate.</p>
        </div>
      )}
    </Card>
  );
}

function FTHBTab({initProv}){
  const [prov,setProv]=useState(initProv);
  useEffect(()=>setProv(initProv),[initProv]);
  const data=FTHB_PROV[prov]||{programs:[],savings:[]};
  const fedPrograms=[{name:"First Home Savings Account (FHSA)",color:s.green,status:"Active ✅",desc:"Tax-deductible + tax-free withdrawals.",vals:[["$40K","Per person"],["$8K/yr","Annual limit"]],url:"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html"},{name:"RRSP Home Buyers' Plan (HBP)",color:s.blue,status:"Active ✅",desc:"Withdraw RRSP tax-free for down payment. Repay over 15 years.",vals:[["$60K","Per person"],["$120K","Per couple"]],url:"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html"},{name:"First-Time Home Buyers' Tax Credit",color:s.gold,status:"Active ✅",desc:"Non-refundable federal tax credit on your T1 return.",vals:[["$1,500","Tax credit"],["$10K","Claim amount"]],url:"https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/budget-2009/first-time-home-buyers-tax-credit.html"},{name:"GST/HST New Home Rebate (Bill C-4)",color:s.red,status:"New 2026 ✅",desc:"Full GST rebate on new homes up to $1M. Royal Assent March 2026.",vals:[["$50,000","Max rebate"],["New builds","Only"]],url:"https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html"},{name:"30-Year Insured Amortization",color:"#7c3aed",status:"Active ✅",desc:"First-time buyers of new builds can access 30-year amortization.",vals:[["30 yrs","Max amort"],["Lower","Monthly pmt"]],url:"https://www.canada.ca/en/department-finance/news/2024/04/government-of-canada-helping-more-canadians-buy-their-first-home.html"}];
  return(
    <div>
      <div style={{background:s.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflow:"hidden",marginBottom:14}}>
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,padding:"14px 18px"}}><div style={{color:"#fff",fontSize:15,fontWeight:800,marginBottom:2}}>🇨🇦 Federal Programs — Available in ALL Provinces</div><div style={{color:"rgba(255,255,255,0.65)",fontSize:11}}>Stack these programs together for maximum savings</div></div>
        <div style={{padding:"14px 18px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:10}}>
            {fedPrograms.map(p=><div key={p.name} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:12,borderLeft:`4px solid ${p.color}`}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:5}}><div style={{fontSize:12,fontWeight:800,color:s.navy,flex:1}}>{p.name}</div><span style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"1px 7px",fontSize:10,fontWeight:700,whiteSpace:"nowrap",marginLeft:5}}>{p.status}</span></div><div style={{fontSize:11,color:s.muted,lineHeight:1.5,marginBottom:8}}>{p.desc}</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>{p.vals.map(([v,l])=><div key={l} style={{background:"#f8fafc",borderRadius:6,padding:7,textAlign:"center"}}><div style={{fontSize:14,fontWeight:800,color:p.color}}>{v}</div><div style={{fontSize:10,color:s.muted}}>{l}</div></div>)}</div><a href={p.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:7,fontSize:11,color:s.blue,fontWeight:600,textDecoration:"none"}}>Learn more →</a></div>)}
          </div>
        </div>
      </div>
      <div style={{background:s.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",padding:"14px 18px"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12,flexWrap:"wrap"}}>
          <div style={{fontSize:15,fontWeight:800,color:s.navy}}>🏠 Provincial Programs</div>
          <select value={prov} onChange={e=>setProv(e.target.value)} style={{padding:"5px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        </div>
        {data.programs.length===0?<EmptyState icon="📋" title="Federal programs apply" sub={`All federal programs above are available to ${PDATA[prov]?.name} residents.`}/>:(
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:10,marginBottom:14}}>
            {data.programs.map(pr=><div key={pr.name} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:12,borderLeft:`4px solid ${pr.color}`}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:5}}><div style={{fontSize:12,fontWeight:800,color:s.navy}}>{pr.name}</div><span style={{background:"#f1f5f9",color:s.muted,borderRadius:20,padding:"1px 7px",fontSize:10,fontWeight:700,whiteSpace:"nowrap",marginLeft:5}}>{pr.status}</span></div><div style={{fontSize:11,color:s.muted,lineHeight:1.5,marginBottom:8}}>{pr.desc}</div><div style={{background:"#f8fafc",borderRadius:6,padding:"6px 9px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontSize:10,color:s.muted}}>Potential Saving</div><div style={{fontSize:13,fontWeight:800,color:pr.color}}>{pr.saving}</div></div><a href={pr.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:7,fontSize:11,color:s.blue,fontWeight:600,textDecoration:"none"}}>Official info →</a></div>)}
          </div>
        )}
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:12,padding:"12px 16px"}}>
          <div style={{color:s.gold,fontSize:11,fontWeight:800,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.5px"}}>💰 Max Potential Savings (First-Time Buyer Couple)</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:8}}>{data.savings.map(sv=><div key={sv.l} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:9,textAlign:"center"}}><div style={{fontSize:14,fontWeight:800,color:s.gold}}>{sv.v}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginTop:2}}>{sv.l}</div></div>)}</div>
          <div style={{color:"rgba(255,255,255,0.4)",fontSize:10,marginTop:8}}>* Estimates. Consult a licensed mortgage broker or tax advisor.</div>
        </div>
      </div>
    </div>
  );
}

function NewsTab({initProv}){
  const [prov,setProv]=useState(initProv);const [news,setNews]=useState(null);const [loading,setLoading]=useState(false);
  useEffect(()=>setProv(initProv),[initProv]);
  async function fetchNews(){setLoading(true);setNews(null);try{const res=await fetch("/api/anthropic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:800,tools:[{type:"web_search_20250305",name:"web_search"}],system:"Return ONLY a valid JSON array of 6 news items. Each: {title,summary,category,date,url}. No markdown.",messages:[{role:"user",content:`Latest Canadian mortgage and real estate news for ${PDATA[prov]?.name}, Canada 2026. JSON only.`}]})});const data=await res.json();const tb=data.content?.find(b=>b.type==="text");setNews(JSON.parse(tb.text.replace(/```json|```/g,"").trim()));}catch{setNews([]);}setLoading(false);}
  useEffect(()=>{fetchNews();},[prov]);
  return(
    <Card>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:8}}>
        <h2 style={{fontSize:16,fontWeight:800,color:s.navy}}>📰 Mortgage & Real Estate News</h2>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <select value={prov} onChange={e=>setProv(e.target.value)} style={{padding:"5px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
          <button onClick={fetchNews} disabled={loading} style={{padding:"6px 12px",background:loading?"#aaa":s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:loading?"not-allowed":"pointer"}}>{loading?"⏳...":"🔄 Refresh"}</button>
        </div>
      </div>
      {loading&&<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:12}}>{Array.from({length:6}).map((_,i)=><div key={i} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:13}}><Skeleton h={12} r={20} mb={8} w="60%"/><Skeleton h={14} mb={5}/><Skeleton h={11} mb={4}/><Skeleton h={11} w="70%"/></div>)}</div>}
      {news&&news.length===0&&<EmptyState icon="📰" title="Could not load news" sub="Try refreshing or check your connection." link="https://www.theglobeandmail.com/real-estate/" linkText="Browse Globe & Mail →"/>}
      {news&&news.length>0&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:12}}>
          {news.map((n,i)=><div key={i} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:13}}><span style={{background:"#fee2e2",color:s.red,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{n.category||"News"}</span><div style={{fontSize:13,fontWeight:700,color:s.navy,lineHeight:1.4,margin:"7px 0 5px"}}>{n.title}</div><div style={{fontSize:11,color:s.muted,lineHeight:1.5,marginBottom:6}}>{n.summary}</div><div style={{fontSize:10,color:s.muted}}>{n.date} · <a href={n.url||"#"} target="_blank" rel="noopener noreferrer" style={{color:s.blue,fontWeight:600}}>Read more →</a></div></div>)}
        </div>
      )}
    </Card>
  );
}

function ListingsTab({initProv,initCity}){
  const [prov,setProv]=useState(initProv);const [city,setCity]=useState(initCity);const [type,setType]=useState("any");const [beds,setBeds]=useState("any");const [maxPrice,setMaxPrice]=useState("");const [area,setArea]=useState("");const [listings,setListings]=useState(null);const [loading,setLoading]=useState(false);
  useEffect(()=>{setProv(initProv);setCity(initCity);},[initProv,initCity]);
  useEffect(()=>{const cities=PDATA[prov]?.cities||[];if(!cities.includes(city))setCity(cities[0]||"");},[prov]);
  async function search(){setLoading(true);setListings(null);const q=[`Find current real estate listings for sale in ${city}, ${PDATA[prov]?.name}, Canada.`,type!=="any"?`Type: ${type}.`:"",beds!=="any"?`Min ${beds} beds.`:"",maxPrice?`Max price: $${parseInt(maxPrice).toLocaleString()}.`:"",area?`Area: ${area}.`:"","Return ONLY a JSON array of up to 6 listings. Fields: address,price,beds,baths,type,size_sqft,neighbourhood,description,url. Raw JSON only."].filter(Boolean).join(" ");try{const res=await fetch("/api/anthropic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,tools:[{type:"web_search_20250305",name:"web_search"}],system:"Real estate assistant. Return ONLY a valid JSON array. No markdown.",messages:[{role:"user",content:q}]})});const data=await res.json();const tb=data.content?.find(b=>b.type==="text");setListings(JSON.parse(tb.text.replace(/```json|```/g,"").trim()));}catch{setListings([]);}setLoading(false);}
  const si={padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:500};
  return(
    <Card>
      <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:5}}>🏠 Search Home Listings</h2>
      <p style={{fontSize:12,color:s.muted,marginBottom:14}}>AI-powered listing search across Canada.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12,alignItems:"center"}}>
        <select value={prov} onChange={e=>setProv(e.target.value)} style={si}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        <select value={city} onChange={e=>setCity(e.target.value)} style={si}>{(PDATA[prov]?.cities||[]).map(c=><option key={c}>{c}</option>)}</select>
        <select value={type} onChange={e=>setType(e.target.value)} style={si}><option value="any">Any Type</option><option value="detached house">Detached</option><option value="condo">Condo</option><option value="townhouse">Townhouse</option></select>
        <select value={beds} onChange={e=>setBeds(e.target.value)} style={si}><option value="any">Any Beds</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select>
        <input type="number" placeholder="Max Price ($)" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} style={{...si,width:130}}/>
        <input type="text" placeholder="Neighbourhood" value={area} onChange={e=>setArea(e.target.value)} style={{...si,width:150}}/>
        <button onClick={search} disabled={loading} style={{padding:"7px 16px",background:loading?"#aaa":s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:loading?"not-allowed":"pointer"}}>{loading?"🔍 Searching...":"🔍 Search"}</button>
      </div>
      {listings===null&&<EmptyState icon="🏠" title="Search for listings" sub="Select your criteria above and click Search."/>}
      {listings&&listings.length===0&&<EmptyState icon="😕" title="No listings found" sub="Try adjusting your filters." link="https://www.realtor.ca" linkText="Search on Realtor.ca →"/>}
      {listings&&listings.length>0&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
          {listings.map((l,i)=><div key={i} style={{border:`1px solid ${s.border}`,borderRadius:12,overflow:"hidden"}}><div style={{height:4,background:`linear-gradient(90deg,${s.navy},${s.red})`}}/><div style={{padding:12}}><div style={{fontSize:16,fontWeight:800,color:s.navy}}>{cur(l.price)}</div><div style={{fontSize:11,color:s.muted,margin:"3px 0 5px"}}>📍 {l.address}</div><div style={{fontSize:11,color:s.muted}}>🛏 {l.beds} · 🚿 {l.baths}{l.size_sqft?` · 📐 ${Number(l.size_sqft).toLocaleString()} sqft`:""}</div><div style={{fontSize:11,color:s.navy,marginTop:5,lineHeight:1.5}}>{l.description}</div><div style={{marginTop:6,display:"flex",flexWrap:"wrap",gap:4}}>{l.type&&<span style={{background:"#f1f5f9",color:s.navy,borderRadius:20,padding:"2px 7px",fontSize:10,fontWeight:600}}>{l.type}</span>}{l.neighbourhood&&<span style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 7px",fontSize:10,fontWeight:600}}>{l.neighbourhood}</span>}</div><a href={l.url||"https://www.realtor.ca"} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:8,fontSize:11,color:s.blue,fontWeight:600,textDecoration:"none"}}>View Listing →</a></div></div>)}
        </div>
      )}
      <p style={{fontSize:10,color:"#bbb",marginTop:10}}>Listings sourced via AI. Verify on Realtor.ca. Not affiliated with CREA or MLS®.</p>
    </Card>
  );
}

function LearnTab(){
  const [selected,setSelected]=useState(null);
  return(
    <div>
      {selected!==null&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setSelected(null)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:680,overflow:"hidden",maxHeight:"85vh",display:"flex",flexDirection:"column"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.navy,padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{color:"#fff",fontSize:14,fontWeight:700}}>{EDU_ARTICLES[selected].title}</div><button onClick={()=>setSelected(null)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button></div>
            <div style={{padding:20,overflowY:"auto",flex:1,fontSize:13,lineHeight:1.9,color:s.navy}} dangerouslySetInnerHTML={{__html:EDU_ARTICLES[selected].content}}/>
          </div>
        </div>
      )}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:12}}>
        {EDU_ARTICLES.map((a,i)=><div key={i} onClick={()=>setSelected(i)} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,padding:16,cursor:"pointer"}}><div style={{fontSize:26,marginBottom:8}}>{a.icon}</div><div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:5}}>{a.title}</div><div style={{fontSize:12,color:s.muted,lineHeight:1.5,marginBottom:8}}>{a.desc}</div><div style={{fontSize:12,color:s.blue,fontWeight:600}}>Read article →</div></div>)}
      </div>
    </div>
  );
}

function ConsultTab(){
  const [cName,setCName]=useState("");const [cPhone,setCPhone]=useState("");const [cEmail,setCEmail]=useState("");const [cCity,setCCity]=useState("");const [cMsg,setCMsg]=useState("");const [cOk,setCOk]=useState(false);
  const [nName,setNName]=useState("");const [nEmail,setNEmail]=useState("");const [nCity,setNCity]=useState("");const [nConsent,setNConsent]=useState(false);const [nOk,setNOk]=useState(false);
  async function submitConsult(){if(!cName||!cEmail){alert("Please enter your name and email.");return;}try{await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:cName,phone:cPhone,email:cEmail,city:cCity,message:cMsg})});setCOk(true);setCName("");setCPhone("");setCEmail("");setCCity("");setCMsg("");}catch{alert("Something went wrong.");}}
  async function submitNewsletter(){if(!nName||!nEmail){alert("Please enter your name and email.");return;}if(!nConsent){alert("Please confirm consent.");return;}try{await fetch("https://formspree.io/f/xrewbnnr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:nName,email:nEmail,city:nCity})});setNOk(true);setNName("");setNEmail("");setNCity("");}catch{alert("Something went wrong.");}}
  return(
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
      <Card style={{borderTop:`4px solid ${s.green}`}}>
        <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:5}}>📞 Free Mortgage Consultation</h3>
        <p style={{fontSize:12,color:s.muted,marginBottom:12}}>Connect with a local expert — free, no obligation.</p>
        {[["Your Name",cName,setCName,"text"],["Phone Number",cPhone,setCPhone,"tel"],["Email Address",cEmail,setCEmail,"email"],["Your City & Province",cCity,setCCity,"text"]].map(([ph,v,sv,t])=><input key={ph} type={t} placeholder={ph} value={v} onChange={e=>sv(e.target.value)} style={{...inp,marginBottom:8}}/>)}
        <textarea placeholder="Any questions? (optional)" value={cMsg} onChange={e=>setCMsg(e.target.value)} style={{...inp,marginBottom:8,resize:"none"}} rows={3}/>
        <button onClick={submitConsult} style={{width:"100%",padding:10,background:s.green,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Request Free Consultation</button>
        {cOk&&<div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 12px",fontSize:12,color:"#15803d",marginTop:8,textAlign:"center"}}>✅ Thank you! We'll be in touch within 1 business day.</div>}
      </Card>
      <Card style={{borderTop:`4px solid ${s.blue}`}}>
        <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:5}}>📧 Weekly Rate Alerts</h3>
        <p style={{fontSize:12,color:s.muted,marginBottom:12}}>Get notified when rates drop. Free, no spam.</p>
        {[["Your Name",nName,setNName,"text"],["Email Address",nEmail,setNEmail,"email"],["Your City & Province",nCity,setNCity,"text"]].map(([ph,v,sv,t])=><input key={ph} type={t} placeholder={ph} value={v} onChange={e=>sv(e.target.value)} style={{...inp,marginBottom:8}}/>)}
        <div style={{display:"flex",alignItems:"flex-start",gap:7,marginBottom:10}}><input type="checkbox" checked={nConsent} onChange={e=>setNConsent(e.target.checked)} style={{marginTop:3,flexShrink:0}}/><label style={{fontSize:11,color:s.muted,lineHeight:1.5}}>I agree to receive weekly rate updates. Unsubscribe anytime.</label></div>
        <button onClick={submitNewsletter} style={{width:"100%",padding:10,background:s.blue,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Subscribe — It's Free</button>
        {nOk&&<div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 12px",fontSize:12,color:"#15803d",marginTop:8,textAlign:"center"}}>✅ You're subscribed!</div>}
      </Card>
    </div>
  );
}

export default function App(){
  const [active,setActive]=useState("Rates");
  const [prov,setProv]=useState("MB");
  const [city,setCity]=useState("Winnipeg");
  const [locLoading,setLocLoading]=useState(true);
  const [showRateAlert,setShowRateAlert]=useState(false);
  const [legalModal,setLegalModal]=useState(null);

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        pos=>{const{latitude:lat,longitude:lon}=pos.coords;const dp=detectProvince(lat,lon);const dc=detectCity(dp,lat,lon);if(PDATA[dp]){setProv(dp);setCity(dc||PDATA[dp].cities[0]);}setLocLoading(false);},
        ()=>setLocLoading(false),{timeout:5000}
      );
    }else setLocLoading(false);
  },[]);

  const tabProps={initProv:prov,initCity:city};

  function renderTab(){
    if(active==="Rates")return <RatesTab {...tabProps} onLocationChange={(p,c)=>{setProv(p);setCity(c);}}/>;
    if(active==="Calculators")return <CalcTab prov={prov}/>;
    if(active==="Property Tax")return <PropertyTaxTab {...tabProps}/>;
    if(active==="Insurance")return <InsuranceTab initProv={prov}/>;
    if(active==="Rate Finder")return <RateFinderTab/>;
    if(active==="First-Time Buyers")return <FTHBTab initProv={prov}/>;
    if(active==="News")return <NewsTab initProv={prov}/>;
    if(active==="Listings")return <ListingsTab {...tabProps}/>;
    if(active==="Learn")return <LearnTab/>;
    if(active==="Consult")return <ConsultTab/>;
    return null;
  }

  return(
    <div style={{background:"#f4f6f9",minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",display:"flex",flexDirection:"column"}}>
      <style>{shimmerStyle}</style>
      <BocTicker onRateAlert={()=>setShowRateAlert(true)}/>
      <BocBanner/>
      <NavBar active={active} setActive={setActive}/>
      <Hero prov={prov} city={city} locLoading={locLoading}/>
      <TestimonialsSection/>
      <div style={{maxWidth:1060,margin:"0 auto",padding:"16px 14px",width:"100%",flex:1,boxSizing:"border-box"}}>
        {renderTab()}
      </div>
      <footer style={{background:`linear-gradient(135deg,#0a1628,${s.navy})`,color:"rgba(255,255,255,0.6)",textAlign:"center",padding:"24px 14px",fontSize:11,lineHeight:2.2,flexShrink:0,borderTop:`2px solid ${s.red}`}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:8}}>
          <div style={{width:36,height:36,background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🍁</div>
          <div style={{textAlign:"left"}}><div style={{color:"#fff",fontSize:15,fontWeight:800,lineHeight:1}}>Canada Mortgage Rates</div><div style={{color:s.gold,fontSize:10,letterSpacing:"0.5px"}}>CANADA'S MOST COMPLETE MORTGAGE PLATFORM</div></div>
        </div>
        <div style={{color:"rgba(255,255,255,0.4)",fontSize:10,marginBottom:10}}>© 2026 Canada Mortgage Rates · Not a licensed mortgage broker · Rates for informational purposes only</div>
        <div style={{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap",marginBottom:10}}>
          {[["Realtor.ca","https://www.realtor.ca"],["CMHC","https://www.cmhc-schl.gc.ca"],["Bank of Canada","https://www.bankofcanada.ca"],["Contact Us","mailto:info@canadamortgagerates.ca"]].map(([l,u])=><a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.45)",fontSize:11,textDecoration:"none"}}>{l}</a>)}
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap",paddingTop:8,borderTop:"1px solid rgba(255,255,255,0.1)"}}>
          {[["Privacy Policy","privacy"],["Terms of Use","terms"],["Financial Disclaimer","disclaimer"]].map(([l,t])=>(
            <button key={t} onClick={()=>setLegalModal(t)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.5)",fontSize:11,cursor:"pointer",textDecoration:"underline"}}>{l}</button>
          ))}
          <button onClick={()=>{localStorage.removeItem("cmr_cookie_consent");window.location.reload();}} style={{background:"none",border:"none",color:"rgba(255,255,255,0.35)",fontSize:11,cursor:"pointer"}}>Cookie Preferences</button>
        </div>
      </footer>
      <Chatbot prov={prov} city={city}/>
      <BackToTop/>
      <InstallPrompt/>
      <CookieConsent onShowPolicy={(t)=>setLegalModal(t)}/>
      <LegalModal type={legalModal} onClose={()=>setLegalModal(null)}/>
      {showRateAlert&&<RateAlertModal onClose={()=>setShowRateAlert(false)}/>}
    </div>
  );
}
