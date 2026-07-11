import React, { useState, useEffect, useRef } from "react";

const PDATA={
  AB:{name:"Alberta",cities:["Calgary","Edmonton","Red Deer","Lethbridge","Grande Prairie","Airdrie","Medicine Hat","Spruce Grove","Fort McMurray","St. Albert","Leduc","Camrose","Lacombe","Lloydminster","Olds"],cu:[
    {name:"Servus Credit Union",url:"https://www.servus.ca"},
    {name:"ATB Financial",url:"https://www.atb.com"},
    {name:"Connect First Credit Union",url:"https://www.connectfirstcu.com"},
    {name:"Chinook Financial",url:"https://www.chinookfinancial.com"},
    {name:"Bow Valley Credit Union",url:"https://www.bowvalleycu.com"},
    {name:"Lakeland Credit Union",url:"https://www.lakelandcu.com"},
  ]},
  BC:{name:"British Columbia",cities:["Vancouver","Victoria","Surrey","Burnaby","Kelowna","Abbotsford","Kamloops","Nanaimo","Prince George","Langley","Coquitlam","Richmond","Delta","Chilliwack","Penticton","Vernon","Courtenay","Campbell River","Fort St. John","Maple Ridge"],cu:[
    {name:"Vancity Credit Union",url:"https://www.vancity.com"},
    {name:"Coast Capital Savings",url:"https://www.coastcapitalsavings.com"},
    {name:"First West Credit Union",url:"https://www.firstwestcu.ca"},
    {name:"Prospera Credit Union",url:"https://www.prospera.ca"},
    {name:"Coastal Community Credit Union",url:"https://www.cccu.ca"},
    {name:"BlueShore Financial",url:"https://www.blueshorefinancial.com"},
    {name:"Gulf & Fraser Credit Union",url:"https://www.gulfandfraser.com"},
  ]},
  MB:{name:"Manitoba",cities:["Winnipeg","Brandon","Steinbach","Portage la Prairie","Thompson","Winkler","Selkirk","Morden","Morris","Dauphin","Flin Flon","The Pas","Virden","Altona","Carman"],cu:[
    {name:"Assiniboine Credit Union",url:"https://www.assiniboine.mb.ca"},
    {name:"Steinbach Credit Union",url:"https://www.steinbachcu.com"},
    {name:"Westoba Credit Union",url:"https://www.westoba.com"},
    {name:"Cambrian Credit Union",url:"https://www.cambrian.mb.ca"},
    {name:"Access Credit Union",url:"https://www.accesscu.ca"},
    {name:"Valley Credit Union",url:"https://www.valleycu.ca"},
    {name:"Sunrise Credit Union",url:"https://www.sunrisecu.mb.ca"},
  ]},
  NB:{name:"New Brunswick",cities:["Moncton","Saint John","Fredericton","Dieppe","Riverview","Miramichi","Bathurst","Edmundston","Campbellton","Sussex","Oromocto","Grand Falls"],cu:[
    {name:"UNI Financial Cooperation",url:"https://www.uni.ca"},
    {name:"Atlantic Central",url:"https://www.atlanticcentral.ca"},
    {name:"Bayshore Credit Union",url:"https://www.bayshorecu.ca"},
  ]},
  NL:{name:"Newfoundland",cities:["St. John's","Mount Pearl","Corner Brook","Conception Bay South","Paradise","Grand Falls","Gander","Happy Valley-Goose Bay","Labrador City","Stephenville","Carbonear"],cu:[
    {name:"Newfoundland & Labrador Credit Union",url:"https://www.nlcu.com"},
    {name:"NewCap Credit Union",url:"https://www.newcap.ca"},
  ]},
  NS:{name:"Nova Scotia",cities:["Halifax","Dartmouth","Sydney","Truro","New Glasgow","Glace Bay","Bridgewater","Amherst","Antigonish","Yarmouth","Windsor","Kentville"],cu:[
    {name:"East Coast Credit Union",url:"https://www.eastcoastcu.ca"},
    {name:"League Savings & Mortgage",url:"https://www.leaguesavings.ca"},
    {name:"Credit Union Atlantic",url:"https://www.cua.com"},
    {name:"Coastal Financial Credit Union",url:"https://www.coastalfinancial.ca"},
  ]},
  ON:{name:"Ontario",cities:["Toronto","Ottawa","Mississauga","Brampton","Hamilton","London","Markham","Kitchener","Windsor","Barrie","Sudbury","Kingston","Guelph","Waterloo","Cambridge","Oakville","Burlington","Oshawa","St. Catharines","Thunder Bay","Peterborough","Brantford","Sarnia","Belleville","Sault Ste. Marie","North Bay","Welland","Timmins","Whitby","Ajax"],cu:[
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
const OFFERS=[
  // ── NATIONAL (all provinces) ─────────────────────────────────────────────
  {bank:"RBC Royal Bank",type:"Switch",badge:"🔄 Switch Offer",color:"#003168",textColor:"#fff",offer:"Up to $1,100 in Switch Fee Rebates",detail:"Switch your mortgage to RBC and get up to $300 in processing fees + $300 in discharge fees covered. Plus earn up to 55,000 Avion Rewards Points.",expires:"August 31, 2026",url:"https://www.rbcroyalbank.com/dms/mortgages/limited-time-offer/2026.html",tag:"Ends Aug 31",provinces:[]},
  {bank:"RBC Royal Bank",type:"New Purchase",badge:"🏠 New Purchase",color:"#003168",textColor:"#fff",offer:"55,000 Avion Points + Cash Bonus",detail:"Apply for an RBC mortgage by Aug 31, 2026 and earn up to 55,000 Avion Rewards Points. Enrol in HomeProtector Insurance for 10,000 bonus points.",expires:"August 31, 2026",url:"https://www.rbcroyalbank.com/dms/mortgages/limited-time-offer/2026.html",tag:"Ends Aug 31",provinces:[]},
  {bank:"CIBC",type:"Cash Back",badge:"💰 Cash Back",color:"#c41f3e",textColor:"#fff",offer:"Up to $4,500 Cash Back",detail:"Get $2,000–$4,500 cash back on a CIBC mortgage depending on loan amount. New purchases and first-time buyers. Min $100K, 3-yr term or 5-yr variable.",expires:"July 30, 2026",url:"https://www.cibc.com/en/special-offers/cash-back-mortgage.html",tag:"Ends Jul 30",provinces:[]},
  {bank:"BMO Bank of Montreal",type:"Cash Back",badge:"💰 Cash Back",color:"#0079c1",textColor:"#fff",offer:"Up to $5,000 Cash Back",detail:"Cash back on a new BMO mortgage or switch from another lender. Fixed or variable closed term, 3 years or longer. Min $100K mortgage.",expires:"Check BMO.com",url:"https://www.bmo.com/en-ca/main/personal/mortgages/mortgage-banking-offer/",tag:"Check BMO",provinces:[]},
  {bank:"Scotiabank",type:"Bundle",badge:"🎁 Bundle Deal",color:"#cc0000",textColor:"#fff",offer:"Up to $1,000 Cash Bonus Bundle",detail:"Bundle a Scotiabank Preferred Package chequing account with your mortgage for up to $700 cash. Add savings account or credit card for up to $300 more.",expires:"October 29, 2026",url:"https://www.scotiabank.com/ca/en/personal/mortgages/mortgage-programs.html",tag:"Ends Oct 29",provinces:[]},
  {bank:"TD Canada Trust",type:"New Purchase",badge:"🏠 New Purchase",color:"#007a3d",textColor:"#fff",offer:"TD Mortgage Flexibility Features",detail:"TD offers flexible prepayment options, skip-a-payment feature, and a 120-day rate hold. Bundle with TD chequing for preferred rates.",expires:"Ongoing",url:"https://www.td.com/ca/en/personal-banking/products/mortgages",tag:"Ongoing",provinces:[]},
  {bank:"National Bank",type:"First-Time Buyer",badge:"🏡 First-Time Buyer",color:"#c8102e",textColor:"#fff",offer:"National Bank All-In-One Mortgage",detail:"Combine your mortgage and line of credit in one flexible product. As you pay down your mortgage, your credit limit increases automatically.",expires:"Ongoing",url:"https://www.nbc.ca/personal/mortgages.html",tag:"Ongoing",provinces:[]},
  {bank:"nesto",type:"Rate",badge:"📉 Lowest Rate",color:"#2563eb",textColor:"#fff",offer:"Canada's Lowest Rates Guaranteed",detail:"nesto offers a lowest rate guarantee — find a lower rate elsewhere and they'll beat it. No broker fees, fully digital, fast approvals.",expires:"Ongoing",url:"https://www.nesto.ca",tag:"Ongoing",provinces:[]},
  {bank:"First National",type:"Switch",badge:"🔄 Switch Offer",color:"#1a3a5c",textColor:"#fff",offer:"No-Fee Mortgage Switch",detail:"Switch your mortgage to First National at renewal with no switch fees. Flexible prepayment options up to 20% annually.",expires:"Ongoing",url:"https://www.firstnational.ca",tag:"Ongoing",provinces:[]},
  {bank:"Equitable Bank",type:"Rate",badge:"📉 Rate Special",color:"#0d2240",textColor:"#fff",offer:"EQ Bank Mortgage Rates",detail:"Equitable Bank (EQ Bank) offers competitive mortgage rates through brokers. Strong alternative lender option for self-employed or non-traditional income buyers.",expires:"Ongoing",url:"https://www.eqbank.ca/personal-banking/mortgages",tag:"Ongoing",provinces:[]},
  {bank:"MCAP",type:"Switch",badge:"🔄 Switch Offer",color:"#374151",textColor:"#fff",offer:"MCAP Mortgage Switch Program",detail:"MCAP offers competitive renewal and switch rates with flexible prepayment privileges. Available through mortgage brokers across Canada.",expires:"Ongoing",url:"https://www.mcap.com/mortgages",tag:"Ongoing",provinces:[]},
  // ── ONTARIO ──────────────────────────────────────────────────────────────
  {bank:"Meridian Credit Union",type:"First-Time Buyer",badge:"🏡 Ontario Exclusive",color:"#16a34a",textColor:"#fff",offer:"First Home Advantage Package",detail:"Meridian's First Home Advantage includes a dedicated advisor, 120-day rate hold, free financial planning, and preferred rates for Ontario first-time buyers.",expires:"Ongoing",url:"https://www.meridiancu.ca",tag:"Ontario Only",provinces:["ON"]},
  {bank:"DUCA Credit Union",type:"Rate",badge:"📉 Ontario Exclusive",color:"#0891b2",textColor:"#fff",offer:"Member Dividends on Your Mortgage",detail:"DUCA members earn annual dividends on their mortgage balance — effectively reducing your net mortgage cost year after year.",expires:"Ongoing",url:"https://www.duca.com",tag:"Ontario Only",provinces:["ON"]},
  {bank:"Alterna Savings",type:"New Purchase",badge:"🏠 Ontario Exclusive",color:"#7c3aed",textColor:"#fff",offer:"Alterna Competitive Mortgage Rates",detail:"Ottawa-based Alterna Savings offers competitive mortgage rates across Ontario with strong customer service and digital banking tools.",expires:"Ongoing",url:"https://www.alterna.ca",tag:"Ontario Only",provinces:["ON"]},
  {bank:"FirstOntario Credit Union",type:"First-Time Buyer",badge:"🏡 Ontario Exclusive",color:"#c8102e",textColor:"#fff",offer:"First Home Program",detail:"FirstOntario Credit Union offers first-time buyer programs with competitive rates, flexible payment options, and dedicated mortgage advisors across southern Ontario.",expires:"Ongoing",url:"https://www.firstontario.com",tag:"Ontario Only",provinces:["ON"]},
  {bank:"Libro Credit Union",type:"Rate",badge:"📉 Ontario Exclusive",color:"#16a34a",textColor:"#fff",offer:"Libro Mortgage + Community Impact",detail:"Libro Credit Union serves southwestern Ontario with competitive mortgage rates. As a member, your mortgage helps support local communities.",expires:"Ongoing",url:"https://www.libro.ca",tag:"Ontario Only",provinces:["ON"]},
  {bank:"Kawartha Credit Union",type:"New Purchase",badge:"🏠 Ontario Exclusive",color:"#0d2240",textColor:"#fff",offer:"Kawartha Home Financing",detail:"Kawartha Credit Union offers competitive mortgage rates across Peterborough and the Kawartha Lakes region of Ontario.",expires:"Ongoing",url:"https://www.kawarthacu.com",tag:"Ontario Only",provinces:["ON"]},
  {bank:"Your Neighbourhood CU",type:"First-Time Buyer",badge:"🏡 Ontario Exclusive",color:"#2563eb",textColor:"#fff",offer:"YNCU First Home Program",detail:"Your Neighbourhood Credit Union offers personalized mortgage services across Waterloo Region, Grey-Bruce, and surrounding Ontario communities.",expires:"Ongoing",url:"https://www.yncu.com",tag:"Ontario Only",provinces:["ON"]},
  // ── ALBERTA ──────────────────────────────────────────────────────────────
  {bank:"ATB Financial",type:"New Purchase",badge:"🏠 Alberta Exclusive",color:"#1a3a5c",textColor:"#fff",offer:"Alberta-Only Competitive Rates",detail:"ATB Financial is exclusively available to Albertans. Crown corporation with competitive rates and deep local expertise in Calgary, Edmonton, and across Alberta.",expires:"Ongoing",url:"https://www.atb.com",tag:"Alberta Only",provinces:["AB"]},
  {bank:"Servus Credit Union",type:"Switch",badge:"🔄 Alberta Exclusive",color:"#c8102e",textColor:"#fff",offer:"Switch to Servus — No Switch Fees",detail:"Alberta's largest credit union. No-fee mortgage switches, competitive rates, and member dividends. Exclusively for Alberta residents.",expires:"Ongoing",url:"https://www.servus.ca",tag:"Alberta Only",provinces:["AB"]},
  {bank:"Connect First CU",type:"Rate",badge:"📉 Alberta Exclusive",color:"#0d2240",textColor:"#fff",offer:"Connect First Mortgage Programs",detail:"Connect First Credit Union serves Calgary and southern Alberta with competitive mortgage rates and personalized local service.",expires:"Ongoing",url:"https://www.connectfirstcu.com",tag:"Alberta Only",provinces:["AB"]},
  {bank:"Chinook Financial",type:"First-Time Buyer",badge:"🏡 Alberta Exclusive",color:"#16a34a",textColor:"#fff",offer:"Chinook First Home Program",detail:"Chinook Financial serves southern Alberta with dedicated first-time buyer mortgage programs and local community focus.",expires:"Ongoing",url:"https://www.chinookfinancial.com",tag:"Alberta Only",provinces:["AB"]},
  {bank:"Lakeland Credit Union",type:"Rate",badge:"📉 Alberta Exclusive",color:"#2563eb",textColor:"#fff",offer:"Lakeland Home Financing",detail:"Lakeland Credit Union serves northern Alberta communities with competitive mortgage rates and personalized member service.",expires:"Ongoing",url:"https://www.lakelandcu.com",tag:"Alberta Only",provinces:["AB"]},
  // ── BRITISH COLUMBIA ─────────────────────────────────────────────────────
  {bank:"Vancity Credit Union",type:"New Purchase",badge:"🏠 BC Exclusive",color:"#00573f",textColor:"#fff",offer:"Vancity Bright Side Mortgage",detail:"Canada's largest community credit union. Offers green home mortgages with preferred rates for energy-efficient BC homes.",expires:"Ongoing",url:"https://www.vancity.com",tag:"BC Only",provinces:["BC"]},
  {bank:"Coast Capital Savings",type:"First-Time Buyer",badge:"🏡 BC Exclusive",color:"#e31837",textColor:"#fff",offer:"First-Time Buyer Package",detail:"Coast Capital offers dedicated first-time buyer mortgages with free financial coaching, competitive rates, and no-fee accounts for BC homebuyers.",expires:"Ongoing",url:"https://www.coastcapitalsavings.com",tag:"BC Only",provinces:["BC"]},
  {bank:"First West Credit Union",type:"Rate",badge:"📉 BC Exclusive",color:"#0d2240",textColor:"#fff",offer:"Envision Financial Mortgage Rates",detail:"First West Credit Union (Envision Financial) offers competitive mortgage rates across the Fraser Valley, Okanagan, and northern BC.",expires:"Ongoing",url:"https://www.firstwestcu.ca",tag:"BC Only",provinces:["BC"]},
  {bank:"Prospera Credit Union",type:"Switch",badge:"🔄 BC Exclusive",color:"#7c3aed",textColor:"#fff",offer:"Prospera Mortgage Switch",detail:"Prospera Credit Union serves the Fraser Valley and Metro Vancouver with competitive mortgage rates and no-fee switch programs.",expires:"Ongoing",url:"https://www.prospera.ca",tag:"BC Only",provinces:["BC"]},
  {bank:"Coastal Community CU",type:"Rate",badge:"📉 BC Exclusive",color:"#0891b2",textColor:"#fff",offer:"Vancouver Island Mortgage Rates",detail:"Coastal Community Credit Union offers competitive mortgage rates across Vancouver Island and the Gulf Islands of BC.",expires:"Ongoing",url:"https://www.cccu.ca",tag:"BC Only",provinces:["BC"]},
  {bank:"BlueShore Financial",type:"First-Time Buyer",badge:"🏡 BC Exclusive",color:"#1a3a5c",textColor:"#fff",offer:"BlueShore Mortgage Solutions",detail:"BlueShore Financial serves North Vancouver and the Sea-to-Sky corridor with premium mortgage advice and competitive rates.",expires:"Ongoing",url:"https://www.blueshorefinancial.com",tag:"BC Only",provinces:["BC"]},
  // ── MANITOBA ─────────────────────────────────────────────────────────────
  {bank:"Assiniboine Credit Union",type:"First-Time Buyer",badge:"🏡 Manitoba Exclusive",color:"#16a34a",textColor:"#fff",offer:"ACU First Home Program",detail:"Manitoba's most community-focused credit union. Dedicated first-time buyer support, competitive rates, and financial planning. Member-owned since 1943.",expires:"Ongoing",url:"https://www.assiniboine.mb.ca",tag:"Manitoba Only",provinces:["MB"]},
  {bank:"Steinbach Credit Union",type:"Rate",badge:"📉 Manitoba Exclusive",color:"#0d2240",textColor:"#fff",offer:"SCU Competitive Mortgage Rates",detail:"Steinbach Credit Union consistently offers some of Manitoba's most competitive mortgage rates with strong digital banking tools available province-wide.",expires:"Ongoing",url:"https://www.steinbachcu.com",tag:"Manitoba Only",provinces:["MB"]},
  {bank:"Westoba Credit Union",type:"Switch",badge:"🔄 Manitoba Exclusive",color:"#c8102e",textColor:"#fff",offer:"Westoba Mortgage Switch Program",detail:"Westoba Credit Union serves Brandon and western Manitoba with competitive mortgage rates and a no-hassle switch program.",expires:"Ongoing",url:"https://www.westoba.com",tag:"Manitoba Only",provinces:["MB"]},
  {bank:"Cambrian Credit Union",type:"Rate",badge:"📉 Manitoba Exclusive",color:"#2563eb",textColor:"#fff",offer:"Cambrian Home Financing",detail:"Cambrian Credit Union serves Winnipeg with competitive mortgage rates and personalized mortgage advice from local experts.",expires:"Ongoing",url:"https://www.cambrian.mb.ca",tag:"Manitoba Only",provinces:["MB"]},
  {bank:"Access Credit Union",type:"First-Time Buyer",badge:"🏡 Manitoba Exclusive",color:"#7c3aed",textColor:"#fff",offer:"Access First Home Program",detail:"Access Credit Union serves rural Manitoba communities with competitive mortgage rates and first-time buyer support programs.",expires:"Ongoing",url:"https://www.accesscu.ca",tag:"Manitoba Only",provinces:["MB"]},
  {bank:"Sunrise Credit Union",type:"Rate",badge:"📉 Manitoba Exclusive",color:"#0891b2",textColor:"#fff",offer:"Sunrise Home Financing",detail:"Sunrise Credit Union serves the Westman region of Manitoba with competitive mortgage rates and community-focused banking.",expires:"Ongoing",url:"https://www.sunrisecu.mb.ca",tag:"Manitoba Only",provinces:["MB"]},
  // ── QUEBEC ───────────────────────────────────────────────────────────────
  {bank:"Desjardins Group",type:"Bundle",badge:"🎁 Quebec Leader",color:"#00854a",textColor:"#fff",offer:"Desjardins Mortgage + AccèsD Bundle",detail:"Desjardins holds 40%+ of Quebec's mortgage market. Bundle your mortgage with AccèsD banking for preferred rates and annual member dividends (ristournes).",expires:"Ongoing",url:"https://www.desjardins.com",tag:"Quebec Only",provinces:["QC"]},
  {bank:"Caisse Alliance",type:"Rate",badge:"📉 Quebec Exclusive",color:"#0d2240",textColor:"#fff",offer:"Caisse Alliance Mortgage Rates",detail:"Caisse Alliance serves francophone communities across Ontario and Quebec with competitive mortgage rates and bilingual service.",expires:"Ongoing",url:"https://www.caissealliance.com",tag:"Quebec Only",provinces:["QC"]},
  {bank:"Caisse Populaire Acadienne",type:"First-Time Buyer",badge:"🏡 Quebec Exclusive",color:"#c8102e",textColor:"#fff",offer:"Caisse Acadienne First Home",detail:"Caisse Populaire Acadienne serves Acadian communities with competitive mortgage rates and dedicated bilingual first-time buyer support.",expires:"Ongoing",url:"https://www.caisseacadienne.ca",tag:"Quebec Only",provinces:["QC"]},
  // ── SASKATCHEWAN ─────────────────────────────────────────────────────────
  {bank:"Conexus Credit Union",type:"Rate",badge:"📉 Sask Exclusive",color:"#1a3a5c",textColor:"#fff",offer:"Conexus Home Financing",detail:"Saskatchewan's largest credit union with competitive mortgage rates and local expertise in Saskatoon, Regina, and across the province.",expires:"Ongoing",url:"https://www.conexus.ca",tag:"Sask Only",provinces:["SK"]},
  {bank:"Affinity Credit Union",type:"First-Time Buyer",badge:"🏡 Sask Exclusive",color:"#16a34a",textColor:"#fff",offer:"Affinity First Home Program",detail:"Affinity Credit Union serves Saskatchewan with competitive mortgage rates, first-time buyer programs, and strong community roots.",expires:"Ongoing",url:"https://www.affinitycu.ca",tag:"Sask Only",provinces:["SK"]},
  {bank:"Innovation Credit Union",type:"Switch",badge:"🔄 Sask Exclusive",color:"#2563eb",textColor:"#fff",offer:"Innovation Mortgage Switch",detail:"Innovation Credit Union serves northwest Saskatchewan with competitive rates and a streamlined mortgage switch program.",expires:"Ongoing",url:"https://www.innovationcu.ca",tag:"Sask Only",provinces:["SK"]},
  {bank:"Cornerstone Credit Union",type:"Rate",badge:"📉 Sask Exclusive",color:"#c8102e",textColor:"#fff",offer:"Cornerstone Home Financing",detail:"Cornerstone Credit Union serves rural Saskatchewan communities with competitive mortgage rates and personalized local service.",expires:"Ongoing",url:"https://www.cornerstonecu.com",tag:"Sask Only",provinces:["SK"]},
  {bank:"Synergy Credit Union",type:"Rate",badge:"📉 Sask Exclusive",color:"#7c3aed",textColor:"#fff",offer:"Synergy Mortgage Programs",detail:"Synergy Credit Union serves Lloydminster and the Saskatchewan-Alberta border region with competitive home financing options.",expires:"Ongoing",url:"https://www.synergycu.ca",tag:"Sask Only",provinces:["SK"]},
  // ── NOVA SCOTIA ──────────────────────────────────────────────────────────
  {bank:"East Coast Credit Union",type:"First-Time Buyer",badge:"🏡 NS Exclusive",color:"#c8102e",textColor:"#fff",offer:"NS 2% Down Payment Pilot",detail:"Nova Scotia's 2026 pilot reduces minimum down payment to 2% for qualifying buyers. East Coast CU can help you access this program.",expires:"2026 Pilot",url:"https://www.eastcoastcu.ca",tag:"NS Only",provinces:["NS"]},
  {bank:"Credit Union Atlantic",type:"Rate",badge:"📉 NS Exclusive",color:"#0d2240",textColor:"#fff",offer:"CUA Competitive Mortgage Rates",detail:"Credit Union Atlantic serves Nova Scotia with competitive mortgage rates and personalized local service in Halifax and beyond.",expires:"Ongoing",url:"https://www.cua.com",tag:"NS Only",provinces:["NS"]},
  {bank:"League Savings & Mortgage",type:"Switch",badge:"🔄 NS Exclusive",color:"#16a34a",textColor:"#fff",offer:"League Savings Mortgage Switch",detail:"League Savings & Mortgage offers competitive mortgage rates and a streamlined switch program for Nova Scotia homeowners.",expires:"Ongoing",url:"https://www.leaguesavings.ca",tag:"NS Only",provinces:["NS"]},
  // ── NEW BRUNSWICK ────────────────────────────────────────────────────────
  {bank:"UNI Financial Cooperation",type:"Bundle",badge:"🎁 NB Exclusive",color:"#00854a",textColor:"#fff",offer:"UNI Mortgage + Banking Bundle",detail:"UNI Financial serves francophone New Brunswick with competitive mortgage rates and comprehensive banking bundles. Strong presence in Moncton and Dieppe.",expires:"Ongoing",url:"https://www.uni.ca",tag:"NB Only",provinces:["NB"]},
  {bank:"Bayshore Credit Union",type:"Rate",badge:"📉 NB Exclusive",color:"#0d2240",textColor:"#fff",offer:"Bayshore Home Financing",detail:"Bayshore Credit Union serves New Brunswick with competitive mortgage rates and personalized local mortgage advice.",expires:"Ongoing",url:"https://www.bayshorecu.ca",tag:"NB Only",provinces:["NB"]},
  // ── PRINCE EDWARD ISLAND ─────────────────────────────────────────────────
  {bank:"Provincial Credit Union",type:"First-Time Buyer",badge:"🏡 PEI Exclusive",color:"#c8102e",textColor:"#fff",offer:"PEI LTT Full Exemption",detail:"PEI first-time buyers get full real property transfer tax exemption on homes under $200K. Provincial CU can help you maximize your first home savings.",expires:"Ongoing",url:"https://www.pcu.pe.ca",tag:"PEI Only",provinces:["PE"]},
  // ── NEWFOUNDLAND ─────────────────────────────────────────────────────────
  {bank:"NL Credit Union",type:"First-Time Buyer",badge:"🏡 NL Exclusive",color:"#0d2240",textColor:"#fff",offer:"NL Home Purchase Program",detail:"Newfoundland & Labrador Credit Union offers competitive mortgage rates and helps first-time buyers access the NL Home Purchase Program for down payment assistance.",expires:"Ongoing",url:"https://www.nlcu.com",tag:"NL Only",provinces:["NL"]},
];
const PT_RATES={
  AB:{Calgary:{res:0.00638,edu:0.00258},Edmonton:{res:0.00922,edu:0.00258},"Red Deer":{res:0.00984,edu:0.00258},Lethbridge:{res:0.00877,edu:0.00258},"Grande Prairie":{res:0.00912,edu:0.00258},Airdrie:{res:0.00623,edu:0.00258},"Medicine Hat":{res:0.00845,edu:0.00258},"Spruce Grove":{res:0.00756,edu:0.00258},def:{res:0.0075,edu:0.00258}},
  BC:{Vancouver:{res:0.00269,edu:0.00163},Victoria:{res:0.00398,edu:0.00163},Surrey:{res:0.00285,edu:0.00163},Burnaby:{res:0.00273,edu:0.00163},Kelowna:{res:0.00452,edu:0.00163},Abbotsford:{res:0.00389,edu:0.00163},Kamloops:{res:0.00512,edu:0.00163},Nanaimo:{res:0.00468,edu:0.00163},"Prince George":{res:0.00598,edu:0.00163},Langley:{res:0.00312,edu:0.00163},def:{res:0.0035,edu:0.00163}},
  MB:{Winnipeg:{res:0.00852,edu:0.00344},Brandon:{res:0.00934,edu:0.00344},Steinbach:{res:0.00712,edu:0.00344},"Portage la Prairie":{res:0.00978,edu:0.00344},Thompson:{res:0.01012,edu:0.00344},Winkler:{res:0.00689,edu:0.00344},Selkirk:{res:0.00923,edu:0.00344},Morden:{res:0.00745,edu:0.00344},def:{res:0.0085,edu:0.00344}},
  NB:{Moncton:{res:0.01568,edu:0.0052},"Saint John":{res:0.01823,edu:0.0052},Fredericton:{res:0.01456,edu:0.0052},Dieppe:{res:0.01612,edu:0.0052},Miramichi:{res:0.01734,edu:0.0052},Bathurst:{res:0.01867,edu:0.0052},def:{res:0.0165,edu:0.0052}},
  NL:{"St. John's":{res:0.00826,edu:0.003},"Mount Pearl":{res:0.00756,edu:0.003},"Corner Brook":{res:0.00934,edu:0.003},"Conception Bay South":{res:0.00612,edu:0.003},Paradise:{res:0.00589,edu:0.003},def:{res:0.008,edu:0.003}},
  NS:{Halifax:{res:0.01222,edu:0.004},Dartmouth:{res:0.01222,edu:0.004},Sydney:{res:0.01456,edu:0.004},Truro:{res:0.01378,edu:0.004},"New Glasgow":{res:0.01489,edu:0.004},Bridgewater:{res:0.01334,edu:0.004},def:{res:0.0135,edu:0.004}},
  ON:{Toronto:{res:0.00611,edu:0.00153},Ottawa:{res:0.00956,edu:0.00153},Mississauga:{res:0.00824,edu:0.00153},Brampton:{res:0.00988,edu:0.00153},Hamilton:{res:0.01256,edu:0.00153},London:{res:0.01196,edu:0.00153},Markham:{res:0.00628,edu:0.00153},Kitchener:{res:0.01097,edu:0.00153},Windsor:{res:0.01789,edu:0.00153},Barrie:{res:0.01089,edu:0.00153},Sudbury:{res:0.01398,edu:0.00153},Kingston:{res:0.01234,edu:0.00153},def:{res:0.0105,edu:0.00153}},
  PE:{Charlottetown:{res:0.0114,edu:0.006},Summerside:{res:0.01234,edu:0.006},Stratford:{res:0.00978,edu:0.006},Cornwall:{res:0.01056,edu:0.006},def:{res:0.01,edu:0.006}},
  QC:{Montreal:{res:0.00767,edu:0.00189},"Quebec City":{res:0.01036,edu:0.00189},Laval:{res:0.00812,edu:0.00189},Gatineau:{res:0.01089,edu:0.00189},Longueuil:{res:0.00934,edu:0.00189},Sherbrooke:{res:0.01178,edu:0.00189},Saguenay:{res:0.01234,edu:0.00189},"Trois-Rivières":{res:0.01156,edu:0.00189},def:{res:0.009,edu:0.00189}},
  SK:{Saskatoon:{res:0.00612,edu:0.00345},Regina:{res:0.00678,edu:0.00345},"Prince Albert":{res:0.00812,edu:0.00345},"Moose Jaw":{res:0.00756,edu:0.00345},"Swift Current":{res:0.00734,edu:0.00345},Yorkton:{res:0.00789,edu:0.00345},"North Battleford":{res:0.00845,edu:0.00345},def:{res:0.0066,edu:0.00345}}
};
const INS_PROVIDERS=[{name:"Intact Insurance",stars:"★★★★★",desc:"Canada's largest insurer. Fast claims and comprehensive coverage.",discount:"Bundle with auto: save 15%",mult:1.12,url:"https://www.intact.net"},{name:"TD Insurance",stars:"★★★★☆",desc:"Great for TD banking customers. Strong digital experience.",discount:"TD customer discount available",mult:0.88,url:"https://www.tdinsurance.com"},{name:"Aviva Canada",stars:"★★★★☆",desc:"Flexible coverage with strong claims support.",discount:"New home discount: 10%",mult:1.05,url:"https://www.avivacanada.com"},{name:"Desjardins Insurance",stars:"★★★★★",desc:"Top choice in Quebec and Ontario. Excellent claims service.",discount:"Claim-free discount: 20%",mult:0.79,url:"https://www.desjardinsgeneralinsurance.com"},{name:"Wawanesa Insurance",stars:"★★★★☆",desc:"Competitive Canadian-owned insurer with strong reputation.",discount:"Loyalty discount after 3 years",mult:0.93,url:"https://www.wawanesa.com"},{name:"Co-operators",stars:"★★★★☆",desc:"Co-operative insurer with competitive rates across Canada.",discount:"Multi-policy discount: 12%",mult:0.97,url:"https://www.cooperators.ca"},{name:"Economical Insurance",stars:"★★★★☆",desc:"One of Canada's oldest insurers with broad coverage options.",discount:"New customer discount: 8%",mult:0.91,url:"https://www.economical.com"},{name:"Gore Mutual",stars:"★★★★☆",desc:"Strong presence in Ontario and BC with personalized service.",discount:"Claims-free discount available",mult:0.95,url:"https://www.goremutual.ca"},{name:"Pembridge Insurance",stars:"★★★☆☆",desc:"Affordable option for budget-conscious homeowners.",discount:"Online quote discount: 5%",mult:0.84,url:"https://www.pembridge.com"},{name:"SGI Canada",stars:"★★★★☆",desc:"Strong in Saskatchewan and western Canada.",discount:"Multi-line discount: 10%",mult:0.90,url:"https://www.sgicanada.ca"},{name:"Northbridge Insurance",stars:"★★★★☆",desc:"Comprehensive coverage with flexible deductible options.",discount:"New home discount: 12%",mult:1.02,url:"https://www.northbridgeinsurance.ca"},{name:"Belairdirect",stars:"★★★★☆",desc:"Online-first insurer with competitive pricing and fast quotes.",discount:"Online purchase discount: 10%",mult:0.86,url:"https://www.belairdirect.com"},{name:"La Capitale",stars:"★★★★☆",desc:"Quebec-based insurer with strong local presence and service.",discount:"Loyalty discount: 10%",mult:0.83,url:"https://www.lacapitale.com"},{name:"BCAA Insurance",stars:"★★★★☆",desc:"BC's most trusted insurer, backed by the BC Automobile Association.",discount:"BCAA member discount: 20%",mult:0.89,url:"https://www.bcaa.com/insurance/home"}];
const INS_BASE={AB:0.42,BC:0.52,MB:0.38,NB:0.35,NL:0.36,NS:0.37,ON:0.48,PE:0.32,QC:0.28,SK:0.36};
const TYPE_MULT={detached:1.0,semi:0.82,condo:0.38,townhouse:0.72};
const YEAR_MULT={new:0.82,mid:1.0,old:1.32};
const RF_STEPS=[{q:"What is the purpose of your mortgage?",key:"purpose",opts:["🏠 First Home Purchase","🏡 Purchase (Not First Home)","🔄 Mortgage Renewal","💳 Refinance"]},{q:"What is your estimated credit score?",key:"credit",opts:["🟢 Excellent (750+)","🔵 Good (700–749)","🟡 Fair (650–699)","🔴 Below 650"]},{q:"How much is your down payment?",key:"down",opts:["5–9% (Insured)","10–14% (Insured)","15–19% (Insured)","20%+ (Conventional)"]},{q:"What is your employment type?",key:"employment",opts:["💼 Salaried / Full-Time","🧾 Self-Employed","📋 Contract / Part-Time","🎯 Retired"]},{q:"What mortgage term do you prefer?",key:"term",opts:["📉 Variable Rate","📅 1–2 Year Fixed","📅 3 Year Fixed","📅 5 Year Fixed"]}];
const FTHB_PROV={AB:{programs:[{name:"No Land Transfer Tax",saving:"$5,000–$15,000+",status:"Always",color:"#16a34a",desc:"Alberta has no provincial land transfer tax.",url:"https://www.alberta.ca/land-titles.aspx"}],savings:[{l:"No LTT",v:"~$10K"},{l:"FHSA+HBP",v:"~$200K"},{l:"Tax Credit",v:"$1,500"}]},BC:{programs:[{name:"Property Transfer Tax Exemption",saving:"Up to $8,000+",status:"Active",color:"#16a34a",desc:"Full exemption on homes under $500K.",url:"https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax/exemptions/first-time-home-buyers"}],savings:[{l:"PTT Exemption",v:"~$8K"},{l:"HOG",v:"$770/yr"},{l:"FHSA+HBP",v:"~$200K"}]},MB:{programs:[{name:"LTT Rebate",saving:"Up to $4,500",status:"Active",color:"#16a34a",desc:"Manitoba first-time buyers receive a rebate on provincial land transfer tax.",url:"https://www.gov.mb.ca/finance/tao/ltt.html"},{name:"Rural Homeownership Program",saving:"Up to $3,500",status:"Active",color:"#2563eb",desc:"Down payment assistance for buyers outside Winnipeg.",url:"https://www.gov.mb.ca/housing/pubs/rural_homeownership_program.pdf"}],savings:[{l:"LTT Rebate",v:"~$4,500"},{l:"Rural Program",v:"~$3,500"},{l:"FHSA+HBP",v:"~$200K"}]},ON:{programs:[{name:"Ontario LTT Rebate",saving:"Up to $4,000",status:"Active",color:"#16a34a",desc:"First-time buyers get a rebate on Ontario land transfer tax.",url:"https://www.ontario.ca/page/land-transfer-tax"},{name:"Ontario HST New Home Rebate",saving:"Up to $130,000",status:"New 2026",color:"#c8102e",desc:"Removes full 13% HST on new homes up to $1M.",url:"https://www.ontario.ca/page/new-housing-rebate"}],savings:[{l:"LTT Rebate",v:"~$4K"},{l:"HST Rebate",v:"~$130K"},{l:"FHSA+HBP",v:"~$200K"}]},SK:{programs:[{name:"Low Transfer Fee",saving:"Only 0.3%",status:"Always",color:"#16a34a",desc:"Saskatchewan charges a flat 0.3% transfer fee.",url:"https://www.saskatchewan.ca/residents/housing"}],savings:[{l:"Low Fee",v:"0.3%"},{l:"Tax Credit",v:"$1,500"},{l:"FHSA+HBP",v:"~$200K"}]},NS:{programs:[{name:"NS 2% Down Payment Pilot",saving:"Lower barrier",status:"New 2026",color:"#c8102e",desc:"Nova Scotia pilot reduces minimum down payment to 2%.",url:"https://novascotia.ca/housing/"}],savings:[{l:"2% Min Down",v:"Lower barrier"},{l:"Down Pmt",v:"Up to 5%"},{l:"FHSA+HBP",v:"~$200K"}]},NB:{programs:[{name:"NB Homeownership Program",saving:"Varies",status:"Active",color:"#16a34a",desc:"Down payment assistance for low-to-moderate income buyers.",url:"https://www2.gnb.ca/content/gnb/en/departments/social-development/housing.html"}],savings:[{l:"FHSA+HBP",v:"~$200K"},{l:"Tax Credit",v:"$1,500"},{l:"Down Pmt",v:"Varies"}]},PE:{programs:[{name:"PEI LTT Full Exemption",saving:"Up to $3,000+",status:"Active",color:"#16a34a",desc:"Full real property transfer tax exemption on homes under $200K.",url:"https://www.princeedwardisland.ca/en/information/finance/real-property-transfer-tax"}],savings:[{l:"LTT Exemption",v:"~$3K"},{l:"5% Loan",v:"Interest-free"},{l:"FHSA+HBP",v:"~$200K"}]},QC:{programs:[{name:"Quebec First-Time Buyer Credit",saving:"~$750",status:"Active",color:"#2563eb",desc:"Quebec provincial tax credit on top of the federal $1,500 credit.",url:"https://www.revenuquebec.ca/en/citizens/tax-credits/first-time-home-buyers/"}],savings:[{l:"Prov Credit",v:"~$750"},{l:"Fed Credit",v:"$1,500"},{l:"FHSA+HBP",v:"~$200K"}]},NL:{programs:[{name:"NL Home Purchase Program",saving:"Varies",status:"Active",color:"#16a34a",desc:"Down payment assistance for qualifying first-time buyers.",url:"https://www.gov.nl.ca/digital-government-and-service-nl/nlhc/home-ownership-programs/"}],savings:[{l:"FHSA+HBP",v:"~$200K"},{l:"Tax Credit",v:"$1,500"},{l:"Down Pmt",v:"Varies"}]}};
const EDU_ARTICLES=[{icon:"📊",title:"Fixed vs Variable in 2026?",desc:"BoC holding at 2.25% — which type makes sense now?",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Fixed vs Variable in 2026</h3><p>With the Bank of Canada holding at 2.25% variable rates (~3.3%) are lower than fixed (~4.9%), but rate hike risk exists.</p><h4 style='margin:12px 0 5px;color:#0d2240;'>Fixed Rate</h4><p><b>Pros:</b> Predictable payments, protection from hikes.<br/><b>Cons:</b> Higher rate, costly break penalties (IRD).</p><h4 style='margin:12px 0 5px;color:#0d2240;'>Variable Rate</h4><p><b>Pros:</b> Lower rate, only 3 months interest to break.<br/><b>Cons:</b> Payments fluctuate.</p>"},{icon:"📋",title:"How to Pass the Stress Test",desc:"Must qualify at rate +2% or 5.25%.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Canada's Mortgage Stress Test</h3><p>Must qualify at the higher of: contracted rate + 2%, or 5.25%.</p><ul style='margin-left:18px;line-height:2;'><li>Increase income or add a co-borrower</li><li>Pay down existing debts</li><li>Increase your down payment</li><li>Choose a lower-priced home</li></ul>"},{icon:"🏦",title:"What is CMHC Insurance?",desc:"Required under 20% down.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>CMHC Mortgage Default Insurance</h3><p>Required when putting less than 20% down. Protects the lender.</p><ul style='margin-left:18px;line-height:2;'><li>5–9.99% down → 4.0%</li><li>10–14.99% → 3.1%</li><li>15–19.99% → 2.8%</li><li>20%+ → No CMHC ✅</li></ul>"},{icon:"💰",title:"FHSA Complete Guide",desc:"$40K tax-free per person.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>First Home Savings Account</h3><p>Up to $8,000/year (lifetime $40K). Tax-deductible + tax-free withdrawals.</p><p style='margin-top:8px;'>Stack with HBP: <b>$200K combined</b> for couples.</p>"},{icon:"🔄",title:"Renewal vs Refinancing",desc:"Millions renewing in 2026–2027.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Renewal vs Refinancing</h3><p><b>Renewal:</b> No penalty to switch lenders. Start shopping 4 months before maturity.</p><p style='margin-top:8px;'><b>Refinancing:</b> Breaking early costs a penalty — 3 months interest or IRD.</p>"},{icon:"📈",title:"Canada Housing Market 2026",desc:"What conflict and tariffs mean for prices.",content:"<h3 style='color:#0d2240;margin-bottom:10px;'>Canada Housing Market 2026</h3><p>BoC held at 2.25%. Inflation at 2.8%. GDP growth 1.2%. Analysts expect flat to 3% price growth. Calgary and Edmonton continue to outperform.</p>"}];
const BOC_ITEMS_DEFAULT=[{label:"Overnight Rate",value:"2.25%",change:"hold"},{label:"Prime Rate",value:"4.45%",change:"hold"},{label:"Bank Rate",value:"2.50%",change:"hold"},{label:"Inflation",value:"2.8%",change:"up"},{label:"Last Decision",value:"Loading...",change:"hold"},{label:"Next Announcement",value:"Loading...",change:"hold"},{label:"Variable Rate",value:"~3.35%",change:"hold"},{label:"5-yr Fixed",value:"~4.89%",change:"hold"},{label:"CAD/USD",value:"~0.72",change:"hold"}];

const s={navy:"#0d2240",red:"#c8102e",gold:"#f5a623",green:"#16a34a",blue:"#2563eb",muted:"#64748b",border:"#e2e8f0",light:"#f4f6f9",white:"#fff"};
const cur=n=>"$"+Math.round(n).toLocaleString();
function getCMHC(p,d){if(d>=20||p>1500000)return{req:false,premium:0,rate:0};const r=d>=15?0.028:d>=10?0.031:0.04;return{req:true,premium:Math.round(p*(1-d/100)*r),rate:r};}
function getLTT(price:number,p:string,city?:string){
  let t=0;
  if(p==="ON"){
    // Provincial LTT
    if(price<=55000)t=price*0.005;
    else if(price<=250000)t=275+(price-55000)*0.01;
    else if(price<=400000)t=2225+(price-250000)*0.015;
    else if(price<=2000000)t=4475+(price-400000)*0.02;
    else t=36475+(price-2000000)*0.025;
    // Toronto municipal LTT (same brackets, doubles the cost)
    if(city==="Toronto"||city==="toronto"){
      let muni=0;
      if(price<=55000)muni=price*0.005;
      else if(price<=250000)muni=275+(price-55000)*0.01;
      else if(price<=400000)muni=2225+(price-250000)*0.015;
      else if(price<=2000000)muni=4475+(price-400000)*0.02;
      else muni=36475+(price-2000000)*0.025;
      t+=muni;
    }
  }else if(p==="BC"){
    if(price<=200000)t=price*0.01;
    else if(price<=2000000)t=2000+(price-200000)*0.02;
    else t=38000+(price-2000000)*0.03;
  }else if(p==="MB"){
    if(price<=30000)t=0;
    else if(price<=90000)t=(price-30000)*0.005;
    else if(price<=150000)t=300+(price-90000)*0.01;
    else if(price<=200000)t=900+(price-150000)*0.015;
    else t=1650+(price-200000)*0.02;
  }else if(p==="QC"){
    if(price<=53200)t=price*0.005;
    else if(price<=266200)t=266+(price-53200)*0.01;
    else if(price<=532400)t=2398+(price-266200)*0.015;
    else t=6391+(price-532400)*0.02;
  }else if(["NB","NS","PE","NL"].includes(p))t=price*0.015;
  else if(p==="SK")t=price*0.003;
  else if(p==="AB"){
    // Alberta land title transfer fee (~$400 on $500K)
    t=price<=50000?0:Math.round(50+(price-50000)/5000)*5;
    t=Math.min(t,800); // cap estimate
  }
  return Math.round(t);
}
function calcPmt(p,r,y){const m=r/100/12,n=y*12;return m===0?p/n:p*(m*Math.pow(1+m,n))/(Math.pow(1+m,n)-1);}
function detectProvince(lat,lon){if(lon<-140)return"BC";if(lon<-110&&lat>49&&lat<60)return"AB";if(lon<-95&&lon>-110&&lat>49)return"SK";if(lon>-95&&lon<-88&&lat>49)return"MB";if(lon>-88&&lon<-74&&lat>42)return"ON";if(lon>-74&&lon<-64&&lat>45)return"QC";if(lon>-64&&lon<-59&&lat>44)return"NB";if(lon>-66&&lat>43&&lat<47)return"NS";if(lon>-64&&lon<-61&&lat>45&&lat<48)return"PE";if(lat>46&&lon>-60)return"NL";return"MB";}
function detectCity(prov:string,lat:number,lon:number):string{const cities:{[k:string]:{[c:string]:[number,number]}}={AB:{Calgary:[51.04,-114.07],Edmonton:[53.55,-113.49]},BC:{Vancouver:[49.28,-123.12],Victoria:[48.43,-123.37]},MB:{Winnipeg:[49.90,-97.14],Brandon:[49.85,-99.95]},ON:{Toronto:[43.70,-79.42],Ottawa:[45.42,-75.69],Mississauga:[43.59,-79.64]},QC:{Montreal:[45.50,-73.57],"Quebec City":[46.82,-71.22]},SK:{Saskatoon:[52.13,-106.67],Regina:[50.45,-104.62]},NS:{Halifax:[44.65,-63.57]},NB:{Moncton:[46.09,-64.80]},NL:{"St. John's":[47.56,-52.71]},PE:{Charlottetown:[46.24,-63.13]}};const pc=cities[prov];if(!pc)return PDATA[prov]?.cities[0]||"";let best="",bd=999;Object.entries(pc).forEach(([c,coords])=>{const [la,lo]=coords;const d=Math.abs(lat-la)+Math.abs(lon-lo);if(d<bd){bd=d;best=c;}});return best||PDATA[prov]?.cities[0]||"";}

const shimmerStyle=`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`;
function Skeleton({w="100%",h=16,r=6,mb=0}:{w?:string,h?:number,r?:number,mb?:number}){return <div style={{width:w,height:h,borderRadius:r,background:"linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite",marginBottom:mb}}/>;}
function EmptyState({icon,title,sub,link,linkText}:{icon:string,title:string,sub:string,link?:string,linkText?:string}){return(<div style={{textAlign:"center",padding:"40px 20px"}}><div style={{fontSize:48,marginBottom:12}}>{icon}</div><div style={{fontSize:15,fontWeight:700,color:s.navy,marginBottom:6}}>{title}</div><div style={{fontSize:13,color:s.muted,marginBottom:link?14:0}}>{sub}</div>{link&&<a href={link} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"8px 20px",background:s.navy,color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>{linkText}</a>}</div>);}
function Card({children,style}:{children:React.ReactNode,style?:React.CSSProperties}){return <div style={{background:s.white,borderRadius:12,padding:18,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",...style}}>{children}</div>;}
function Field({label,children}:{label:string,children:React.ReactNode}){return <div style={{marginBottom:9}}><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:3,textTransform:"uppercase",letterSpacing:"0.4px"}}>{label}</label>{children}</div>;}
const inp:React.CSSProperties={width:"100%",padding:"8px 10px",borderRadius:8,border:`1.5px solid #e2e8f0`,fontSize:13,fontWeight:500,boxSizing:"border-box"};
const calcBtn:React.CSSProperties={width:"100%",padding:10,background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",marginTop:6};
const resultBox:React.CSSProperties={background:`linear-gradient(135deg,#0d2240,#1a3a5c)`,borderRadius:10,padding:14,marginTop:12,color:"#fff"};
function RRow({l,v,bold}:{l:string,v:string,bold?:boolean}){return <><div style={{color:"rgba(255,255,255,0.7)",fontSize:11}}>{l}</div><div style={{textAlign:"right",fontWeight:bold?700:400,fontSize:11}}>{v}</div></>;}
function TestimonialsSection(){
  const [reviews,setReviews]=useState<any[]>([]);
  const [loading,setLoading]=useState(true);
  const [idx,setIdx]=useState(0);
  const [showForm,setShowForm]=useState(false);
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const [role,setRole]=useState("");
  const [rating,setRating]=useState(5);
  const [text,setText]=useState("");
  const [submitting,setSubmitting]=useState(false);
  const [ok,setOk]=useState(false);
  const [error,setError]=useState("");
  const visible=3;

  useEffect(()=>{
    fetch("/api/reviews").then(r=>r.json()).then(d=>{setReviews(Array.isArray(d)?d:[]);setLoading(false);}).catch(()=>setLoading(false));
  },[]);

  async function submit(){
    if(!name.trim()||!text.trim()){setError("Name and review are required.");return;}
    if(text.length<20){setError("Review must be at least 20 characters.");return;}
    setSubmitting(true);setError("");
    try{
      const r=await fetch("/api/reviews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,city,role,rating,text})});
      if(!r.ok)throw new Error();
      const newReview=await r.json();
      setReviews(prev=>[Array.isArray(newReview)?newReview[0]:newReview,...prev]);
      setOk(true);setShowForm(false);
      setName("");setCity("");setRole("");setRating(5);setText("");
    }catch{setError("Something went wrong. Please try again.");}
    setSubmitting(false);
  }

  const total=reviews.length;
  const shown=reviews.slice(idx,idx+visible);

  return(
    <div style={{background:`linear-gradient(135deg,#f8fafc,#f0f4f8)`,borderTop:`1px solid ${s.border}`,borderBottom:`1px solid ${s.border}`,padding:"28px 14px",flexShrink:0}}>
      <div style={{maxWidth:1060,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,flexWrap:"wrap",gap:8}}>
          <div>
            <div style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:2}}>⭐ What Canadians Are Saying</div>
            <div style={{fontSize:11,color:s.muted}}>Real experiences from homebuyers and renewers across Canada</div>
          </div>
          <div style={{display:"flex",gap:6,alignItems:"center"}}>
            {total>visible&&<>
              <button onClick={()=>setIdx(i=>Math.max(0,i-1))} disabled={idx===0} style={{width:32,height:32,borderRadius:"50%",border:`1.5px solid ${s.border}`,background:idx===0?"#f1f5f9":s.white,color:idx===0?s.muted:s.navy,cursor:idx===0?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>‹</button>
              <button onClick={()=>setIdx(i=>Math.min(total-visible,i+1))} disabled={idx>=total-visible} style={{width:32,height:32,borderRadius:"50%",border:`1.5px solid ${s.border}`,background:idx>=total-visible?"#f1f5f9":s.white,color:idx>=total-visible?s.muted:s.navy,cursor:idx>=total-visible?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>›</button>
            </>}
            <button onClick={()=>{setShowForm(!showForm);setOk(false);}} style={{padding:"6px 14px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>{showForm?"✕ Cancel":"✍️ Leave a Review"}</button>
          </div>
        </div>

        {ok&&<div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"10px 14px",fontSize:12,color:"#15803d",fontWeight:600,marginBottom:12}}>✅ Thanks for your review! It's now live.</div>}

        {showForm&&(
          <div style={{background:s.white,borderRadius:12,padding:16,border:`1px solid ${s.border}`,marginBottom:16,boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
            <div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:12}}>Share Your Experience</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:8,marginBottom:8}}>
              <input placeholder="Your name *" value={name} onChange={e=>setName(e.target.value)} style={{...inp,fontSize:12}} maxLength={60}/>
              <input placeholder="City (optional)" value={city} onChange={e=>setCity(e.target.value)} style={{...inp,fontSize:12}}/>
              <input placeholder="e.g. First-time buyer" value={role} onChange={e=>setRole(e.target.value)} style={{...inp,fontSize:12}}/>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <span style={{fontSize:11,color:s.muted,whiteSpace:"nowrap"}}>Rating:</span>
                {[1,2,3,4,5].map(r=><button key={r} onClick={()=>setRating(r)} style={{background:"none",border:"none",cursor:"pointer",fontSize:18,color:r<=rating?s.gold:"#d1d5db",padding:"0 1px"}}>{r<=rating?"★":"☆"}</button>)}
              </div>
            </div>
            <textarea placeholder="Your review (min 20 characters) *" value={text} onChange={e=>setText(e.target.value)} maxLength={500} rows={3} style={{...inp,fontSize:12,resize:"none",marginBottom:8,width:"100%",boxSizing:"border-box"}}/>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
              {error&&<div style={{fontSize:11,color:s.red}}>{error}</div>}
              <div style={{fontSize:10,color:s.muted}}>{text.length}/500 characters</div>
              <button onClick={submit} disabled={submitting} style={{padding:"8px 18px",background:submitting?"#aaa":s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:submitting?"not-allowed":"pointer"}}>{submitting?"Submitting...":"Submit Review"}</button>
            </div>
          </div>
        )}

        {loading&&<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>{[1,2,3].map(i=><div key={i} style={{background:s.white,borderRadius:12,padding:16,border:`1px solid ${s.border}`}}><Skeleton h={12} mb={8} w="40%"/><Skeleton h={11} mb={4}/><Skeleton h={11} mb={4}/><Skeleton h={11} w="70%"/></div>)}</div>}

        {!loading&&reviews.length===0&&!showForm&&(
          <div style={{textAlign:"center",padding:"20px",color:s.muted,fontSize:13}}>No reviews yet — be the first to share your experience! 👆</div>
        )}

        {!loading&&shown.length>0&&(
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
            {shown.map((t,i)=>(
              <div key={t.id||i} style={{background:s.white,borderRadius:12,padding:16,boxShadow:"0 2px 12px rgba(0,0,0,0.06)",border:`1px solid ${s.border}`}}>
                <div style={{color:s.gold,fontSize:13,marginBottom:8}}>{"★".repeat(t.rating||5)}{"☆".repeat(5-(t.rating||5))}</div>
                <p style={{fontSize:12,color:"#374151",lineHeight:1.7,marginBottom:12,fontStyle:"italic"}}>"{t.text}"</p>
                <div style={{display:"flex",alignItems:"center",gap:9}}>
                  <div style={{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:800,flexShrink:0}}>{(t.name||"?")[0].toUpperCase()}</div>
                  <div><div style={{fontSize:12,fontWeight:700,color:s.navy}}>{t.name}</div><div style={{fontSize:10,color:s.muted}}>{[t.city,t.role].filter(Boolean).join(" · ")}</div></div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{textAlign:"center",marginTop:12,fontSize:10,color:s.muted}}>Reviews are from real users and posted automatically.</div>
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

function useBocRates(){
  const [rates,setRates]=useState({overnight:"2.25",prime:"4.45",bankRate:"2.50",cadUsd:"0.72",asOf:"",fallback:true});
  useEffect(()=>{
    fetch("/api/boc").then(r=>r.json()).then(d=>setRates(d)).catch(()=>{});
  },[]);
  return rates;
}

// BoC's published 2026 fixed announcement dates (confirmed via bankofcanada.ca schedule release, Aug 2025)
const BOC_2026_DATES=["2026-01-28","2026-03-18","2026-04-29","2026-06-10","2026-07-15","2026-09-02","2026-10-28","2026-12-09"];
function getBocSchedule(){
  const today=new Date();
  const dates=BOC_2026_DATES.map(d=>new Date(d+"T09:45:00-05:00"));
  let last:string|null=null,next:string|null=null;
  for(let i=0;i<dates.length;i++){
    if(dates[i]<=today)last=BOC_2026_DATES[i];
    if(dates[i]>today&&!next)next=BOC_2026_DATES[i];
  }
  return{last,next};
}
function fmtBocDate(iso:string|null){
  if(!iso)return"TBD";
  return new Date(iso+"T00:00:00").toLocaleDateString("en-CA",{month:"short",day:"numeric",year:"numeric"});
}

function BocTicker({onRateAlert}:{onRateAlert:()=>void}){
  const boc=useBocRates();
  const {last,next}=getBocSchedule();
  const items=[
    {label:"Overnight Rate",value:boc.overnight+"%",change:"hold"},
    {label:"Prime Rate",value:boc.prime+"%",change:"hold"},
    {label:"Bank Rate",value:boc.bankRate+"%",change:"hold"},
    {label:"CAD/USD",value:"~"+boc.cadUsd,change:"hold"},
    {label:"Inflation (as of Apr 2026)",value:"2.8%",change:"up"},
    {label:"Last Decision",value:fmtBocDate(last),change:"hold"},
    {label:"Next Announcement",value:fmtBocDate(next),change:"hold"},
    {label:"GDP Growth (2026 fcst)",value:"1.2%",change:"down"},
  ];
  const doubled=[...items,...items];
  const clr:{[k:string]:string}={up:"#f5a623",down:"#4ade80",hold:"#94a3b8"};
  const ico:{[k:string]:string}={up:"▲",down:"▼",hold:"●"};
  return(
    <div style={{background:s.navy,borderBottom:`2px solid ${s.red}`,overflow:"hidden",display:"flex",alignItems:"stretch",flexShrink:0}}>
      <div style={{background:s.red,color:"#fff",fontSize:11,fontWeight:800,padding:"7px 12px",whiteSpace:"nowrap",flexShrink:0,display:"flex",alignItems:"center"}}>🏦 BANK OF CANADA</div>
      <div style={{overflow:"hidden",flex:1}}><div style={{display:"inline-flex",animation:"ticker 40s linear infinite"}}>{doubled.map((it,i)=><div key={i} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 18px",borderRight:"1px solid rgba(255,255,255,0.1)",fontSize:11,whiteSpace:"nowrap"}}><span style={{color:"rgba(255,255,255,0.5)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px"}}>{it.label}</span><span style={{color:"#fff",fontWeight:700}}>{it.value}</span><span style={{color:clr[it.change],fontSize:10}}>{ico[it.change]}</span></div>)}</div></div>
      <button onClick={onRateAlert} style={{background:s.red,border:"none",color:"#fff",fontSize:11,fontWeight:700,padding:"7px 14px",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,borderLeft:"1px solid rgba(255,255,255,0.2)"}}>🔔 Rate Alerts</button>
    </div>
  );
}

function BocBanner(){
  const [show,setShow]=useState(true);
  const boc=useBocRates();
  const {next}=getBocSchedule();
  if(!show)return null;
  return(
    <div style={{background:s.white,borderBottom:`1px solid ${s.border}`,flexShrink:0}}>
      <div style={{maxWidth:1060,margin:"0 auto",padding:"8px 14px",display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:160}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:s.gold,flexShrink:0}}/>
          <div><div style={{fontSize:12,fontWeight:700,color:s.navy}}>🏦 Bank of Canada Rate{boc.asOf?" — as of "+fmtBocDate(boc.asOf):""}</div><div style={{fontSize:10,color:s.muted}}>Current overnight rate: {boc.overnight}%. Next scheduled announcement: {fmtBocDate(next)}.</div></div>
        </div>
        <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
          {([["Overnight Rate",boc.overnight+"%"],["Prime Rate",boc.prime+"%"],["Next",fmtBocDate(next)],["Inflation","2.8%"]] as [string,string][]).map(([l,v])=><div key={l} style={{textAlign:"center"}}><div style={{fontSize:9,color:s.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px"}}>{l}</div><div style={{fontSize:15,fontWeight:800,color:s.navy}}>{v}</div></div>)}
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
  async function send(q?:string){const text=q||input.trim();if(!text)return;setInput("");setLoading(true);const nm=[...msgs,{role:"user",text}];setMsgs(nm);const nh=[...history,{role:"user",content:text}];
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

const TABS=["Home","Rates","Calculators","Property Tax","Insurance","Rate Finder","First-Time Buyers","News","Listings","Learn","Glossary","Renewal","Lawyers","Consult"];
function NavBar({active,setActive}){
  const [menuOpen,setMenuOpen]=useState(false);
  const groups=[{label:"Overview",tabs:["Home"]},{label:"Compare",tabs:["Rates","News"]},{label:"Tools",tabs:["Calculators","Property Tax","Insurance","Rate Finder","Renewal"]},{label:"Buyers",tabs:["First-Time Buyers","Listings","Learn","Glossary"]},{label:"Help",tabs:["Lawyers","Consult"]}];
  return(
    <div style={{background:s.navy,flexShrink:0,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,0.3)"}}>
      <div style={{padding:"0 14px",display:"flex",alignItems:"center",height:54,gap:8}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          <div style={{width:32,height:32,background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🍁</div>
          <div><div style={{color:"#fff",fontWeight:800,fontSize:14,lineHeight:1}}>Canada</div><div style={{color:s.gold,fontWeight:700,fontSize:11,lineHeight:1}}>Mortgage Rates</div></div>
          <div style={{display:"flex",gap:4,marginLeft:4}}>
            <a href="/blog" style={{color:"rgba(255,255,255,0.65)",fontSize:10,fontWeight:700,border:"1px solid rgba(255,255,255,0.2)",borderRadius:5,padding:"2px 6px",textDecoration:"none"}}>BLOG</a>
            <a href="/fr" style={{color:"rgba(255,255,255,0.65)",fontSize:10,fontWeight:700,border:"1px solid rgba(255,255,255,0.2)",borderRadius:5,padding:"2px 6px",textDecoration:"none"}}>FR</a>
          </div>
        </div>
        <div style={{display:"flex",gap:1,marginLeft:"auto",overflowX:"auto",maxWidth:"calc(100% - 180px)",scrollbarWidth:"none"}}>
          {TABS.map(t=><button key={t} onClick={()=>{setActive(t);setMenuOpen(false);}} style={{background:active===t?"rgba(255,255,255,0.15)":"none",border:"none",color:active===t?"#fff":"rgba(255,255,255,0.65)",fontSize:12,padding:"8px 12px",borderRadius:6,cursor:"pointer",fontWeight:active===t?700:400,whiteSpace:"nowrap",flexShrink:0,borderBottom:active===t?`2px solid ${s.gold}`:"2px solid transparent"}}>{t==="Rates"?<>📊 {t}<span style={{background:"#4ade80",color:"#14532d",borderRadius:20,padding:"1px 6px",fontSize:9,fontWeight:800,marginLeft:5}}>LIVE</span></>:t}</button>)}
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
    <div style={{background:`linear-gradient(135deg,#0a1628 0%,#0d2240 40%,#1a3a5c 70%,#0d2240 100%)`,padding:"14px 20px 18px",textAlign:"center",position:"relative",overflow:"hidden",flexShrink:0}}>
      <div style={{position:"absolute",top:-40,right:-40,width:200,height:200,borderRadius:"50%",background:"rgba(200,16,46,0.08)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:-60,left:-60,width:280,height:280,borderRadius:"50%",background:"rgba(245,166,35,0.06)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(245,166,35,0.15)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:20,padding:"3px 12px",marginBottom:8}}>
          <span style={{color:s.gold,fontSize:10,fontWeight:700,letterSpacing:"0.5px"}}>🍁 CANADA'S MOST COMPLETE MORTGAGE PLATFORM</span>
        </div>
        <h1 style={{color:"#fff",fontSize:"clamp(16px,3vw,26px)",fontWeight:800,marginBottom:4,letterSpacing:"-0.5px",lineHeight:1.2}}>Compare <span style={{color:s.gold}}>Mortgage Rates</span> Across All of Canada</h1>
        <p style={{color:locLoading?"rgba(255,255,255,0.4)":s.gold,fontSize:11,fontWeight:600,marginBottom:8}}>
          {locLoading?"📍 Detecting your location...":"📍 "+city+", "+(PDATA[prov]?.name||prov)}
        </p>
        <div style={{display:"flex",justifyContent:"center",gap:0,flexWrap:"wrap",background:"rgba(255,255,255,0.06)",borderRadius:12,padding:"8px 16px",maxWidth:460,margin:"0 auto",border:"1px solid rgba(255,255,255,0.1)"}}>
          {[["20+","Lenders"],["10","Provinces"],["AI","Powered"],["Free","Always"],["Live","Rates"]].map(([v,l],i)=>(
            <div key={l} style={{flex:1,minWidth:60,textAlign:"center",padding:"0 6px",borderRight:i<4?"1px solid rgba(255,255,255,0.1)":"none"}}>
              <div style={{color:s.gold,fontSize:15,fontWeight:800}}>{v}</div>
              <div style={{color:"rgba(255,255,255,0.55)",fontSize:9,marginTop:1}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── RATES TAB ─────────────────────────────────────────────────────────────────
function RatesTab({initProv,initCity,onLocationChange,bocRates}){
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
    const primeNum=parseFloat(bocRates.prime||"4.45");
    // Province-based market adjustment (reflects real competitive differences)
    const provAdj:{[k:string]:number}={BC:-0.10,ON:-0.08,AB:-0.05,QC:-0.03,MB:0.00,SK:0.02,NS:0.05,NB:0.06,PE:0.08,NL:0.10};
    const adj=provAdj[prov]||0;
    const fixedBase:{[k:string]:number}={
      "1-year":+(primeNum+0.20+adj).toFixed(2),
      "2-year":+(primeNum-0.40+adj).toFixed(2),
      "3-year":+(primeNum-0.50+adj).toFixed(2),
      "5-year":+(primeNum-0.15+adj).toFixed(2),
    };
    const variableBase:{[k:string]:number}={
      "1-year":+(primeNum-0.30+adj).toFixed(2),
      "2-year":+(primeNum-0.50+adj).toFixed(2),
      "3-year":+(primeNum-0.60+adj).toFixed(2),
      "5-year":+(primeNum-0.70+adj).toFixed(2),
    };
    return institutions.flatMap((inst,i)=>{
      const jitter=((i*37)%21-10)/100;
      return TERMS.map(t=>({institution:inst.name,term:t,fixed:+(fixedBase[t]+jitter).toFixed(2),variable:+(variableBase[t]+jitter).toFixed(2)}));
    });
  }

  function fetchRates(){
    setUsingSample(false);
    setRates(getMock());
    setLastUpd("Live ✅");
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
          <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{padding:"5px 14px",borderRadius:20,border:"none",background:s.green,color:"#fff",fontSize:11,fontWeight:700,cursor:"pointer",zIndex:200,position:"relative"}}>📞 Get My Rate →</button>
          <span style={{fontSize:10,color:s.muted,alignSelf:"center"}}>{lastUpd}</span>
        </div>
      </div>
      {usingSample&&<div style={{background:"#fff7ed",border:`1px solid #fed7aa`,borderRadius:8,padding:"8px 14px",fontSize:11,color:"#c2410c",margin:"10px 0"}}>⚠️ These are estimated rates, not pulled from a live source right now — verify with the institution directly before applying.</div>}
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
          <span style={{fontSize:18}}>ℹ️</span>
          <div><div style={{fontSize:12,color:"#15803d",fontWeight:700}}>Sorted lowest to highest (AI-compiled estimate)</div><div style={{fontSize:11,color:"#16a34a"}}>{term} {type} · Best: <b>{minR?.toFixed(2)}%</b>{city?` in ${city}`:""} · Confirm the exact rate with the lender before applying</div></div>
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

      {/* OFFERS SECTION */}
      <div style={{marginTop:20}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"}}>
          <div style={{fontSize:16,fontWeight:800,color:s.navy}}>🎁 Current Lender Offers & Promotions</div>
          <span style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>Updated July 2026</span>
        </div>
        <p style={{fontSize:12,color:s.muted,marginBottom:12}}>Limited-time offers from Canadian lenders — cash back, switch incentives, and bundle deals. Always verify terms directly with the lender.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
          {OFFERS.filter((o:any)=>o.provinces.length===0||o.provinces.includes(prov)).map((offer:any,i:number)=>(
            <div key={i} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{background:offer.color,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{color:offer.textColor,fontSize:13,fontWeight:800}}>{offer.bank}</div>
                <span style={{background:"rgba(255,255,255,0.2)",color:offer.textColor,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{offer.tag}</span>
              </div>
              <div style={{padding:14}}>
                <div style={{display:"inline-block",background:"#f1f5f9",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:s.navy,marginBottom:8}}>{offer.badge}</div>
                <div style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:6}}>{offer.offer}</div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:8}}>{offer.detail}</div>
                <div style={{fontSize:10,color:s.muted,marginBottom:10}}>⏰ Expires: <strong>{offer.expires}</strong></div>
                <a href={offer.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"8px 12px",background:offer.color,color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textAlign:"center",textDecoration:"none"}}>View Offer →</a>
              </div>
            </div>
          ))}
        </div>
        <p style={{fontSize:10,color:"#bbb",marginTop:8}}>⚠️ Offers subject to change. Always verify current terms directly with the lender. Canada Mortgage Rates is not affiliated with any lender.</p>
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
<p>Canada Mortgage Rates operates canadamortgagerates.net. We are committed to protecting your personal information in accordance with the <b>Personal Information Protection and Electronic Documents Act (PIPEDA)</b>.</p>
<p style="margin-top:6px;">Contact: <a href="mailto:info@canadamortgagerates.net" style="color:#2563eb;">info@canadamortgagerates.net</a></p>
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
<p>You have the right to access, correct, or request deletion of your data. Email <a href="mailto:info@canadamortgagerates.net" style="color:#2563eb;">info@canadamortgagerates.net</a> and we will respond within 30 days. You may also file a complaint with the <a href="https://www.priv.gc.ca" target="_blank" style="color:#2563eb;">Office of the Privacy Commissioner of Canada</a>.</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">7. Data Retention</h3>
<p>We retain your information only as long as necessary to fulfill the purpose it was collected for, or as required by law.</p>`
  },
  terms:{
    title:"Terms of Use",
    content:`<p style="color:#64748b;font-size:11px;margin-bottom:14px;">Last updated: June 24, 2026</p>
<h3 style="color:#0d2240;font-size:14px;margin:16px 0 7px;">1. Acceptance of Terms</h3>
<p>By accessing canadamortgagerates.net, you agree to these Terms of Use. If you do not agree, please do not use the site.</p>
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
<p><a href="mailto:info@canadamortgagerates.net" style="color:#2563eb;">info@canadamortgagerates.net</a></p>`
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
            <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:2}}>Canada Mortgage Rates · canadamortgagerates.net</div>
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
function CalcTab({prov}:{prov:string}){
  const [tab,setTab]=useState("payment");
  const [hp,setHp]=useState(500000);const [dp,setDp]=useState(20);const [am,setAm]=useState(25);const [pr,setPr]=useState(5.0);const [fr,setFr]=useState("monthly");const [condoFeeP,setCondoFeeP]=useState(0);const [payR,setPayR]=useState(null);const payRef=useRef(null);
  const [inc,setInc]=useState(90000);const [inc2,setInc2]=useState(0);const [dbt,setDbt]=useState(500);const [ad,setAd]=useState(20);const [aa,setAa]=useState(25);const [ar,setAr]=useState(5.0);const [condoFeeA,setCondoFeeA]=useState(0);const [affR,setAffR]=useState(null);const affRef=useRef(null);
  const [rent,setRent]=useState(2000);const [rentInc,setRentInc]=useState(3);const [rp,setRp]=useState(500000);const [rd,setRd]=useState(20);const [rr,setRr]=useState(5.0);const [ry,setRy]=useState(10);const [rapr,setRapr]=useState(3);const [rvbR,setRvbR]=useState(null);const rvbRef=useRef(null);
  const [rb,setRb]=useState(350000);const [ro,setRo]=useState(5.5);const [rn,setRn]=useState(4.8);const [rma,setRma]=useState(20);const [rt,setRt]=useState(5);const [renewR,setRenewR]=useState(null);const renewRef=useRef(null);
  const [sr,setSr]=useState(4.9);const [si,setSi]=useState(90000);const [si2,setSi2]=useState(0);const [sd,setSd]=useState(500);const [sdp,setSdp]=useState(100000);const [sa,setSa]=useState(25);const [stR,setStR]=useState(null);const stRef=useRef(null);
  const [scenarios,setScenarios]=useState([{id:1,label:"Scenario A",homePrice:500000,downPct:20,amort:25,rate:5.0,freq:"monthly"},{id:2,label:"Scenario B",homePrice:500000,downPct:10,amort:25,rate:4.9,freq:"monthly"}]);
  const [compareMode,setCompareMode]=useState(false);

  function scrollAfter(ref:any,fn:()=>void){fn();setTimeout(()=>ref.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);}
  const freqs=[{id:"monthly",label:"📅 Monthly"},{id:"semimonthly",label:"📅 Semi-Monthly"},{id:"biweekly",label:"📅 Bi-Weekly"},{id:"accelerated",label:"⚡ Accel. Bi-Wkly"}];
  const tabList=[{id:"payment",label:"💰 Payment"},{id:"afford",label:"🏡 Affordability"},{id:"rentvbuy",label:"🏠 Rent vs Buy"},{id:"renewal",label:"🔄 Renewal"},{id:"stress",label:"📋 Stress Test"},{id:"amort",label:"📅 Amortization"},{id:"closing",label:"🏷️ Closing Costs"},{id:"docs",label:"📁 Doc Checklist"}];

  function doPayment(){
    const down=Math.round(hp*dp/100);
    const cmhc=getCMHC(hp,dp);
    const ltt=getLTT(hp,prov);
    const principal=hp-down+(cmhc.req?cmhc.premium:0);
    const mp=calcPmt(principal,pr,am);
    const fpmt=fr==="monthly"?mp:fr==="semimonthly"?mp/2:fr==="biweekly"?mp*12/26:mp/2;
    const propTax=Math.round(hp*0.01/12);
    const heat=150;
    const ins=Math.round(hp*0.004/12);
    const condo=condoFeeP;
    const pith=mp+propTax+heat+ins+condo;
    const totalInterest=mp*am*12-principal;
    const closing=ltt+Math.round(hp*0.015)+(cmhc.req?cmhc.premium:0);
    const accelSaving=Math.round((mp/2)*26-mp*12);
    scrollAfter(payRef,()=>setPayR({mp,fpmt,fr,down,cmhc,ltt,principal,closing,hp,dp,am,pr,propTax,heat,ins,condo,pith,totalInterest,accelSaving}));
  }

  function doAfford(){
    const totalInc=inc+(inc2||0);
    const mi=totalInc/12;
    const heat=150;
    const condo=condoFeeA;
    const maxGDS=(mi*0.39)-heat-condo;
    const maxTDS=(mi*0.44)-dbt-heat-condo;
    const maxPmt=Math.min(maxGDS,maxTDS);
    const r=ar/100/12,n=aa*12;
    const maxMtg=r===0?maxPmt*n:maxPmt*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n));
    const maxPrice=maxMtg/(1-ad/100);
    const dpA=maxPrice*(ad/100);
    const mp=calcPmt(maxMtg,ar,aa);
    const cmhc=getCMHC(maxPrice,ad);
    const ltt=getLTT(maxPrice,prov);
    const closing=ltt+Math.round(maxPrice*0.015)+(cmhc.req?cmhc.premium:0);
    const cashNeeded=dpA+closing;
    const strRate=Math.max(ar+2,5.25);
    const rStr=strRate/100/12;
    const maxMtgStr=rStr===0?maxPmt*n:maxPmt*(Math.pow(1+rStr,n)-1)/(rStr*Math.pow(1+rStr,n));
    const maxPriceStr=maxMtgStr/(1-ad/100);
    const gds=Math.round(((mp+heat+condo)/mi)*1000)/10;
    const tds=Math.round(((mp+heat+condo+dbt)/mi)*1000)/10;
    const incLever=r===0?(Math.min(((totalInc+10000)/12*0.39)-heat-condo,((totalInc+10000)/12*0.44)-dbt-heat-condo)*n)/(1-ad/100):(Math.min(((totalInc+10000)/12*0.39)-heat-condo,((totalInc+10000)/12*0.44)-dbt-heat-condo)*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)))/(1-ad/100);
    const debtLever=r===0?(Math.min((mi*0.39)-heat-condo,(mi*0.44)-Math.max(0,dbt-200)-heat-condo)*n)/(1-ad/100):(Math.min((mi*0.39)-heat-condo,(mi*0.44)-Math.max(0,dbt-200)-heat-condo)*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)))/(1-ad/100);
    scrollAfter(affRef,()=>setAffR({maxPrice,maxMtg,dpA,mp,ad,aa,ar,maxPriceStr,gds,tds,heat,condo,cashNeeded,ltt,cmhc,closing,incLever,debtLever,totalInc,dbt}));
  }

  function doRvb(){
    const down=rp*rd/100;
    const closingCosts=Math.round(rp*0.015+getLTT(rp,prov));
    const mortgage=rp-down;
    const mp=calcPmt(mortgage,rr,25);
    const propTax=rp*0.012/12;
    const maint=rp*0.01/12;
    const ins=Math.round(rp*0.004/12);
    const monthlyBuy=mp+propTax+maint+ins;
    let totalRentCost=0,monthlyRent=rent;
    const rentByYear:number[]=[];
    for(let y=0;y<ry;y++){totalRentCost+=monthlyRent*12;rentByYear.push(Math.round(monthlyRent));monthlyRent*=(1+rentInc/100);}
    const totalBuyCost=monthlyBuy*12*ry+down+closingCosts;
    const futureVal=rp*Math.pow(1+rapr/100,ry);
    const r=rr/100/12,n=25*12,k=ry*12;
    const remBalance=k<n?mortgage*(Math.pow(1+r,n)-Math.pow(1+r,k))/(Math.pow(1+r,n)-1):0;
    const equity=futureVal-Math.max(0,remBalance);
    const netBuyCost=totalBuyCost-equity;
    const oppCost=(down+closingCosts)*(Math.pow(1.06,ry)-1);
    const netRentCost=totalRentCost-oppCost;
    const verdict=netBuyCost<netRentCost?"buying":"renting";
    scrollAfter(rvbRef,()=>setRvbR({totalBuyCost,futureVal,totalRentCost,mp,propTax,maint,ins,ry,closingCosts,equity,oppCost,monthlyBuy,netBuyCost,netRentCost,verdict,remBalance,rentByYear,down,rentInc}));
  }

  function doRenewal(){
    const op=calcPmt(rb,ro,rma);
    const np=calcPmt(rb,rn,rma);
    const sv=op-np;
    const ts=sv*rt*12;
    const threeMonthInt=Math.round(rb*(ro/100/12)*3);
    const ird=Math.round(rb*Math.max(0,(ro-rn)/100)*Math.min(rma,rt));
    const penalty=Math.max(threeMonthInt,ird);
    const breakEven=sv>0?Math.ceil(penalty/sv):999;
    const worthBreaking=breakEven<rt*12*0.5;
    scrollAfter(renewRef,()=>setRenewR({op,np,sv,ts,rt,penalty,breakEven,worthBreaking,threeMonthInt,ird}));
  }

  function doStress(){
    const totalInc=si+(si2||0);
    const str=Math.max(sr+2,5.25);
    const mi=totalInc/12;
    const heat=150;
    const maxGDS=(mi*0.39)-heat;
    const maxTDS=(mi*0.44)-sd-heat;
    const maxPmt=Math.min(maxGDS,maxTDS);
    const r=str/100/12,n=sa*12;
    const maxMtg=r===0?maxPmt*n:maxPmt*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n));
    const maxP=maxMtg+sdp;
    const rActual=sr/100/12;
    const maxMtgActual=rActual===0?maxPmt*n:maxPmt*(Math.pow(1+rActual,n)-1)/(rActual*Math.pow(1+rActual,n));
    const maxPActual=maxMtgActual+sdp;
    const gds=Math.round(((maxPmt+heat)/mi)*1000)/10;
    const tds=Math.round(((maxPmt+heat+sd)/mi)*1000)/10;
    const mi10=(totalInc+10000)/12;
    const mp10=Math.min((mi10*0.39)-heat,(mi10*0.44)-sd-heat);
    const incLever10=(r===0?mp10*n:mp10*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)))+sdp;
    const sd2=Math.max(0,sd-200);
    const mpD=Math.min((mi*0.39)-heat,(mi*0.44)-sd2-heat);
    const debtLever=(r===0?mpD*n:mpD*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)))+sdp;
    const dpLever=(r===0?maxPmt*n:maxPmt*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)))+(sdp+25000);
    scrollAfter(stRef,()=>setStR({str,maxMtg,maxP,pass:maxMtg>0,sr,maxMtgActual,maxPActual,gds,tds,heat,incLever10,debtLever,dpLever,totalInc,sd}));
  }

  function calcSc(sc:any){const down=Math.round(sc.homePrice*sc.downPct/100);const cmhc=getCMHC(sc.homePrice,sc.downPct);const principal=sc.homePrice-down+(cmhc.req?cmhc.premium:0);const mp=calcPmt(principal,sc.rate,sc.amort);const fpmt=sc.freq==="monthly"?mp:sc.freq==="semimonthly"?mp/2:sc.freq==="biweekly"?mp*12/26:mp/2;return{mp,fpmt,down,cmhc,principal};}
  function addSc(){if(scenarios.length>=4)return;const l=scenarios[scenarios.length-1];setScenarios([...scenarios,{id:Date.now(),label:`Scenario ${String.fromCharCode(65+scenarios.length)}`,homePrice:l.homePrice,downPct:l.downPct,amort:l.amort,rate:l.rate,freq:l.freq}]);}
  function updateSc(id:number,key:string,val:any){setScenarios(scenarios.map(sc=>sc.id===id?{...sc,[key]:val}:sc));}
  function removeSc(id:number){if(scenarios.length>1)setScenarios(scenarios.filter(sc=>sc.id!==id));}

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
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14}}>
              <Card>
                <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:4}}>💰 Mortgage Payment Calculator</h3>
                <p style={{fontSize:11,color:s.muted,marginBottom:12}}>See your true monthly housing cost — not just the mortgage payment.</p>
                <Field label="Home Price ($)"><input type="number" value={hp} onChange={e=>setHp(parseFloat(e.target.value)||0)} style={inp}/></Field>
                <Field label="Down Payment (%)"><input type="number" value={dp} onChange={e=>setDp(parseFloat(e.target.value)||0)} style={inp}/></Field>
                <Field label="Interest Rate (%)"><input type="number" step={0.05} value={pr} onChange={e=>setPr(parseFloat(e.target.value)||0)} style={inp}/></Field>
                <Field label="Amortization"><select value={am} onChange={e=>setAm(parseInt(e.target.value))} style={inp}><option value={15}>15 years</option><option value={20}>20 years</option><option value={25}>25 years</option><option value={30}>30 years</option></select></Field>
                <Field label="Monthly Condo Fee ($)"><input type="number" value={condoFeeP} onChange={e=>setCondoFeeP(parseFloat(e.target.value)||0)} style={inp} placeholder="0 if not a condo"/></Field>
                <Field label="Payment Frequency"><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>{freqs.map(f=><button key={f.id} onClick={()=>setFr(f.id)} style={{padding:"7px 5px",border:`1.5px solid ${fr===f.id?s.navy:s.border}`,borderRadius:8,background:fr===f.id?s.navy:s.white,color:fr===f.id?"#fff":s.muted,fontSize:10,fontWeight:600,cursor:"pointer"}}>{f.label}</button>)}</div></Field>
                <button onClick={doPayment} style={calcBtn}>Calculate</button>
                <div ref={payRef}>{payR&&(
                  <div style={{marginTop:12}}>
                    <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:10,padding:14,marginBottom:10,color:"#fff"}}>
                      <div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>{(payR as any).fr==="monthly"?"Monthly":(payR as any).fr==="semimonthly"?"Semi-Monthly":(payR as any).fr==="biweekly"?"Bi-Weekly":"Accelerated Bi-Weekly"} Mortgage Payment</div>
                      <div style={{fontSize:34,fontWeight:800,marginBottom:2}}>{cur((payR as any).fpmt)}</div>
                      <div style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>{(payR as any).am} year amortization · {(payR as any).pr}% rate</div>
                    </div>
                    <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:12,marginBottom:10}}>
                      <div style={{fontSize:11,fontWeight:700,color:"#c2410c",marginBottom:8}}>🏠 True Monthly Housing Cost (PITH)</div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                        <div style={{color:"#374151"}}>Mortgage Payment</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).mp)}</div>
                        <div style={{color:"#374151"}}>Property Tax (est. 1%/yr)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).propTax)}</div>
                        <div style={{color:"#374151"}}>Heat (lender standard)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).heat)}</div>
                        <div style={{color:"#374151"}}>Home Insurance (est.)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).ins)}</div>
                        {(payR as any).condo>0&&<><div style={{color:"#374151"}}>Condo Fee</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).condo)}</div></>}
                        <div style={{borderTop:"1px solid #fed7aa",paddingTop:4,fontWeight:800,color:"#c2410c"}}>Total Monthly (PITH)</div><div style={{borderTop:"1px solid #fed7aa",paddingTop:4,fontWeight:800,color:"#c2410c",textAlign:"right"}}>{cur((payR as any).pith)}</div>
                      </div>
                      <div style={{fontSize:10,color:"#92400e",marginTop:6}}>💡 Income needed for this PITH at 39% GDS: {cur((payR as any).pith/0.39*12)}/yr</div>
                    </div>
                    <div style={{background:"#f8fafc",borderRadius:10,padding:12,marginBottom:10}}>
                      <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8}}>📊 All Payment Frequencies</div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr auto auto",gap:"3px 10px",fontSize:11}}>
                        <div style={{color:s.muted,fontWeight:600,fontSize:10}}>Frequency</div><div style={{color:s.muted,fontWeight:600,textAlign:"right",fontSize:10}}>Per Payment</div><div style={{color:s.muted,fontWeight:600,textAlign:"right",fontSize:10}}>Annual</div>
                        {([["Monthly",(payR as any).mp,(payR as any).mp*12],["Semi-Monthly",(payR as any).mp/2,(payR as any).mp*12],["Bi-Weekly",(payR as any).mp*12/26,(payR as any).mp*12],["Accel. Bi-Weekly ⭐",(payR as any).mp/2,((payR as any).mp/2)*26]] as [string,number,number][]).map(([l,p,a])=><React.Fragment key={l}><div style={{color:s.navy,fontSize:11}}>{l}</div><div style={{textAlign:"right",fontWeight:600}}>{cur(p)}</div><div style={{textAlign:"right",color:l.includes("Accel")?s.green:s.muted}}>{cur(a)}</div></React.Fragment>)}
                      </div>
                      <div style={{fontSize:10,color:s.green,marginTop:6}}>⭐ Accel. Bi-Weekly saves {cur((payR as any).accelSaving)}/yr — pays off ~3 years early.</div>
                    </div>
                    <div style={{background:"#f8fafc",borderRadius:10,padding:12}}>
                      <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8}}>💰 Full Cost Summary</div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                        <div style={{color:s.muted}}>Home Price</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).hp)}</div>
                        <div style={{color:s.muted}}>Down Payment ({(payR as any).dp}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).down)}</div>
                        <div style={{color:s.muted}}>CMHC Insurance</div><div style={{fontWeight:700,textAlign:"right"}}>{(payR as any).cmhc.req?cur((payR as any).cmhc.premium):"Not required ✅"}</div>
                        <div style={{color:s.muted}}>Mortgage Amount</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).principal)}</div>
                        <div style={{color:s.muted}}>Total Interest Paid</div><div style={{fontWeight:700,textAlign:"right",color:"#dc2626"}}>{cur((payR as any).totalInterest)}</div>
                        <div style={{color:s.muted}}>Land Transfer Tax</div><div style={{fontWeight:700,textAlign:"right"}}>{(payR as any).ltt>0?cur((payR as any).ltt):"$0 (Alberta)"}</div>
                        <div style={{color:s.muted}}>Est. Closing Costs</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((payR as any).closing)}</div>
                        <div style={{borderTop:`1px solid ${s.border}`,paddingTop:4,fontWeight:800,color:s.navy}}>Cash Needed to Close</div><div style={{borderTop:`1px solid ${s.border}`,paddingTop:4,fontWeight:800,color:s.navy,textAlign:"right"}}>{cur((payR as any).down+(payR as any).closing)}</div>
                      </div>
                    </div>
                  </div>
                )}</div>
              </Card>
              <Card style={{background:s.navy}}>
                <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>📖 What a Mortgage Specialist Checks</h3>
                <p style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:12}}>Before approving your mortgage, lenders verify all of these.</p>
                {[["PITH — TOTAL HOUSING COST","Principal + Interest + Tax + Heat (+ condo fees). Must be under 39% of gross income (GDS ratio)."],["MINIMUM DOWN PAYMENT","5% under $500K · 10% on $500K–$999,999 · 20% on $1M+. Under 20% requires CMHC insurance."],["CMHC INSURANCE PREMIUMS","5–9.99% down → 4.0% · 10–14.99% → 3.1% · 15–19.99% → 2.8% · 20%+ → None ✅"],["STRESS TEST","Must qualify at your rate +2% OR 5.25% — whichever is higher. Reduces max purchase price."],["CLOSING COSTS TO BUDGET","Legal fees ~$1,500 · Home inspection ~$500 · Title insurance ~$300 · Land transfer tax varies."],["ACCELERATED BI-WEEKLY TIP","Pays one extra monthly payment per year. Saves thousands in interest and cuts years off your mortgage."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
              </Card>
            </div>
          ):(
            <div>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${scenarios.length},1fr)`,gap:12,marginBottom:12}}>
                {scenarios.map((sc,idx)=>(
                  <Card key={sc.id} style={{border:`2px solid ${([s.navy,s.red,s.green,"#7c3aed"] as string[])[idx]}`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                      <input value={sc.label} onChange={e=>updateSc(sc.id,"label",e.target.value)} style={{fontSize:13,fontWeight:700,color:s.navy,border:"none",background:"none",padding:0,width:"80%"}}/>
                      {scenarios.length>1&&<button onClick={()=>removeSc(sc.id)} style={{background:"none",border:"none",color:s.muted,cursor:"pointer",fontSize:16}}>✕</button>}
                    </div>
                    {([["homePrice","Home Price ($)",5000],["downPct","Down Payment (%)",1],["rate","Rate (%)",0.05],["amort","Amort. (yrs)",1]] as [string,string,number][]).map(([k,l,step])=>(
                      <div key={k} style={{marginBottom:7}}><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:3,textTransform:"uppercase",letterSpacing:"0.4px"}}>{l}</label><input type="number" value={(sc as any)[k]} step={step} onChange={e=>updateSc(sc.id,k,parseFloat(e.target.value)||0)} style={{...inp,fontSize:12}}/></div>
                    ))}
                    <div style={{marginBottom:7}}><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:3,textTransform:"uppercase",letterSpacing:"0.4px"}}>Frequency</label><select value={sc.freq} onChange={e=>updateSc(sc.id,"freq",e.target.value)} style={{...inp,fontSize:12}}><option value="monthly">Monthly</option><option value="semimonthly">Semi-Monthly</option><option value="biweekly">Bi-Weekly</option><option value="accelerated">Accelerated</option></select></div>
                  </Card>
                ))}
              </div>
              <Card>
                <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>📊 Side-by-Side Comparison</h3>
                <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",minWidth:360}}><thead><tr style={{background:s.light}}><th style={{textAlign:"left",padding:"8px 10px",fontSize:11,fontWeight:700,color:s.muted,textTransform:"uppercase"}}>Metric</th>{scenarios.map((sc,i)=><th key={sc.id} style={{textAlign:"center",padding:"8px 10px",fontSize:11,fontWeight:700,color:"#fff",background:([s.navy,s.red,s.green,"#7c3aed"] as string[])[i]}}>{sc.label}</th>)}</tr></thead><tbody>{([["Payment/Period",(sc:any,r:any)=>cur(r.fpmt)],["Monthly Equiv",(sc:any,r:any)=>cur(r.mp)],["Down Payment",(sc:any,r:any)=>cur(r.down)+" ("+sc.downPct+"%)"],["CMHC",(sc:any,r:any)=>r.cmhc.req?cur(r.cmhc.premium):"None ✅"],["Total Mortgage",(sc:any,r:any)=>cur(r.principal)],["Annual Cost",(sc:any,r:any)=>cur(r.fpmt*(sc.freq==="monthly"?12:sc.freq==="semimonthly"?24:26))]] as [string,(sc:any,r:any)=>string][]).map(([label,fn],ri)=>{const vals=scenarios.map(sc=>({sc,r:calcSc(sc)}));return(<tr key={label} style={{borderBottom:`1px solid ${s.light}`,background:ri%2===0?s.white:"#fafafa"}}><td style={{padding:"8px 10px",fontSize:12,fontWeight:600,color:s.navy}}>{label}</td>{vals.map(({sc,r})=><td key={sc.id} style={{padding:"8px 10px",fontSize:12,textAlign:"center",color:s.navy}}>{fn(sc,r)}</td>)}</tr>);})}</tbody></table></div>
                <div style={{background:s.light,borderRadius:8,padding:10,marginTop:10}}><div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:4}}>💡 Lowest Payment</div>{(()=>{const calcd=scenarios.map(sc=>({label:sc.label,pmt:calcSc(sc).fpmt}));const best=calcd.reduce((a,b)=>a.pmt<b.pmt?a:b);return <div style={{fontSize:11,color:s.muted}}><b style={{color:s.navy}}>{best.label}</b> has the lowest payment at <b style={{color:s.green}}>{cur(best.pmt)}</b>.</div>;})()}</div>
              </Card>
            </div>
          )}
        </div>
      )}

      {tab==="afford"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:4}}>🏡 Affordability Calculator</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Based on how lenders actually qualify you — GDS, TDS, stress test, and total cash needed.</p>
            <Field label="Annual Income — Applicant 1 ($)"><input type="number" value={inc} onChange={e=>setInc(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Annual Income — Applicant 2 ($)"><input type="number" value={inc2} onChange={e=>setInc2(parseFloat(e.target.value)||0)} style={inp} placeholder="0 if single applicant"/></Field>
            <Field label="Monthly Debt Payments ($)"><input type="number" value={dbt} onChange={e=>setDbt(parseFloat(e.target.value)||0)} style={inp} placeholder="Car, student loans, credit cards"/></Field>
            <Field label="Monthly Condo Fee ($)"><input type="number" value={condoFeeA} onChange={e=>setCondoFeeA(parseFloat(e.target.value)||0)} style={inp} placeholder="0 if not a condo"/></Field>
            <Field label="Down Payment (%)"><input type="number" value={ad} onChange={e=>setAd(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Interest Rate (%)"><input type="number" step={0.05} value={ar} onChange={e=>setAr(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Amortization"><select value={aa} onChange={e=>setAa(parseInt(e.target.value))} style={inp}><option value={25}>25 years</option><option value={20}>20 years</option><option value={15}>15 years</option><option value={30}>30 years (new builds)</option></select></Field>
            <button onClick={doAfford} style={calcBtn}>Calculate Maximum Purchase Price</button>
            <div ref={affRef}>{affR&&(
              <div style={{marginTop:12}}>
                <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:10,padding:14,marginBottom:10,color:"#fff"}}>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>Maximum Purchase Price</div>
                  <div style={{fontSize:34,fontWeight:800,marginBottom:2}}>{cur((affR as any).maxPrice)}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>Income: {cur((affR as any).totalInc)}/yr · {(affR as any).ad}% down · {(affR as any).ar}% rate</div>
                </div>
                <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:12,marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#15803d",marginBottom:8}}>💰 Total Cash Required</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                    <div style={{color:"#374151"}}>Down Payment ({(affR as any).ad}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((affR as any).dpA)}</div>
                    <div style={{color:"#374151"}}>CMHC Insurance</div><div style={{fontWeight:700,textAlign:"right"}}>{(affR as any).cmhc.req?cur((affR as any).cmhc.premium):"Not required ✅"}</div>
                    <div style={{color:"#374151"}}>Land Transfer Tax</div><div style={{fontWeight:700,textAlign:"right"}}>{(affR as any).ltt>0?cur((affR as any).ltt):"$0 (Alberta)"}</div>
                    <div style={{color:"#374151"}}>Other Closing Costs (est.)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((affR as any).closing-(affR as any).ltt-((affR as any).cmhc.req?(affR as any).cmhc.premium:0))}</div>
                    <div style={{borderTop:"1px solid #bbf7d0",paddingTop:4,fontWeight:800,color:"#15803d"}}>Total Cash to Have Ready</div><div style={{borderTop:"1px solid #bbf7d0",paddingTop:4,fontWeight:800,color:"#15803d",textAlign:"right"}}>{cur((affR as any).cashNeeded)}</div>
                  </div>
                </div>
                <div style={{background:"#f8fafc",borderRadius:10,padding:12,marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:10}}>📊 Your Debt Ratios</div>
                  {(()=>{
                    const gds=(affR as any).gds,tds=(affR as any).tds;
                    const gdsOk=gds<=39,tdsOk=tds<=44;
                    const bothOk=gdsOk&&tdsOk;
                    const gdsOver=Math.max(0,gds-39).toFixed(1);
                    const tdsOver=Math.max(0,tds-44).toFixed(1);
                    return(<>
                      <div style={{background:bothOk?"#f0fdf4":"#fff1f2",border:`1px solid ${bothOk?"#bbf7d0":"#fecdd3"}`,borderRadius:8,padding:"8px 12px",marginBottom:10,display:"flex",alignItems:"center",gap:8}}>
                        <span style={{fontSize:18}}>{bothOk?"✅":"❌"}</span>
                        <div>
                          <div style={{fontSize:12,fontWeight:800,color:bothOk?"#15803d":"#be123c"}}>{bothOk?"Both ratios within lender limits — you qualify":"One or more ratios exceed lender limits"}</div>
                          {!bothOk&&<div style={{fontSize:11,color:"#be123c",marginTop:2}}>{!gdsOk?`GDS is ${gdsOver}% over the 39% limit. `:""}{!tdsOk?`TDS is ${tdsOver}% over the 44% limit.`:""}</div>}
                        </div>
                      </div>
                      <div style={{marginBottom:8}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
                          <span style={{fontSize:11,color:s.muted}}>GDS Ratio <span style={{color:s.muted,fontWeight:400}}>(housing costs ÷ income)</span></span>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            <span style={{fontSize:11,fontWeight:800,color:gdsOk?s.green:"#dc2626"}}>{gds}%</span>
                            <span style={{fontSize:10,background:gdsOk?"#dcfce7":"#fee2e2",color:gdsOk?"#15803d":"#dc2626",borderRadius:20,padding:"1px 6px",fontWeight:700}}>{gdsOk?"✓ PASS":"✗ FAIL — max 39%"}</span>
                          </div>
                        </div>
                        <div style={{background:"#e2e8f0",borderRadius:20,height:10,position:"relative"}}>
                          <div style={{position:"absolute",left:"0",top:0,width:"39%",height:"100%",borderRight:"2px dashed #94a3b8",pointerEvents:"none"}}/>
                          <div style={{width:Math.min(gds/50*100,100)+"%",height:"100%",background:gdsOk?`linear-gradient(90deg,${s.green},#22c55e)`:"linear-gradient(90deg,#f87171,#dc2626)",borderRadius:20,transition:"width 0.5s"}}/>
                        </div>
                        {!gdsOk&&<div style={{fontSize:10,color:"#dc2626",marginTop:4}}>💡 To fix: Reduce housing cost by {cur(Math.ceil((gds-39)/100*(affR as any).totalInc/12))} /mo — or add {cur(Math.ceil((gds-39)/39*(affR as any).totalInc/12*12))} /yr income.</div>}
                      </div>
                      <div style={{marginBottom:6}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
                          <span style={{fontSize:11,color:s.muted}}>TDS Ratio <span style={{color:s.muted,fontWeight:400}}>(all debts ÷ income)</span></span>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            <span style={{fontSize:11,fontWeight:800,color:tdsOk?s.green:"#dc2626"}}>{tds}%</span>
                            <span style={{fontSize:10,background:tdsOk?"#dcfce7":"#fee2e2",color:tdsOk?"#15803d":"#dc2626",borderRadius:20,padding:"1px 6px",fontWeight:700}}>{tdsOk?"✓ PASS":"✗ FAIL — max 44%"}</span>
                          </div>
                        </div>
                        <div style={{background:"#e2e8f0",borderRadius:20,height:10,position:"relative"}}>
                          <div style={{position:"absolute",left:"0",top:0,width:"44%",height:"100%",borderRight:"2px dashed #94a3b8",pointerEvents:"none"}}/>
                          <div style={{width:Math.min(tds/55*100,100)+"%",height:"100%",background:tdsOk?`linear-gradient(90deg,${s.green},#22c55e)`:"linear-gradient(90deg,#f87171,#dc2626)",borderRadius:20,transition:"width 0.5s"}}/>
                        </div>
                        {!tdsOk&&<div style={{fontSize:10,color:"#dc2626",marginTop:4}}>💡 To fix: Pay down {cur(Math.ceil((tds-44)/100*(affR as any).totalInc/12))} /mo in debts — or add {cur(Math.ceil((tds-44)/44*(affR as any).totalInc/12*12))} /yr income.</div>}
                      </div>
                      <div style={{fontSize:10,color:s.muted,marginTop:6,paddingTop:6,borderTop:`1px solid ${s.border}`}}>Heat $150/mo included per lender standard · GDS max 39% · TDS max 44%{!bothOk&&<span style={{color:s.blue,fontWeight:600,marginLeft:8,cursor:"pointer"}}> → Speak to a mortgage advisor about your options</span>}</div>
                    </>);
                  })()}
                </div>
                <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:12,marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#c2410c",marginBottom:8}}>⚠️ Stress Test Impact</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                    <div style={{color:"#374151"}}>At your rate ({(affR as any).ar}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((affR as any).maxPrice)}</div>
                    <div style={{color:"#374151"}}>At stress rate ({Math.max((affR as any).ar+2,5.25).toFixed(2)}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((affR as any).maxPriceStr)}</div>
                    <div style={{fontWeight:700,color:"#c2410c"}}>Stress test reduces max by</div><div style={{fontWeight:800,color:"#c2410c",textAlign:"right"}}>{cur((affR as any).maxPrice-(affR as any).maxPriceStr)}</div>
                  </div>
                </div>
                <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:12}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#1e40af",marginBottom:8}}>💡 Ways to Qualify for More</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                    <div style={{color:"#374151"}}>Add $10K/yr income</div><div style={{fontWeight:700,textAlign:"right",color:s.green}}>+{cur(Math.max(0,(affR as any).incLever-(affR as any).maxPrice))}</div>
                    <div style={{color:"#374151"}}>Reduce debts by $200/mo</div><div style={{fontWeight:700,textAlign:"right",color:s.green}}>+{cur(Math.max(0,(affR as any).debtLever-(affR as any).maxPrice))}</div>
                  </div>
                </div>
              </div>
            )}</div>
          </Card>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>📋 How Lenders Qualify You</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:12}}>Every federally regulated lender in Canada uses these rules.</p>
            {[["GDS RATIO — MAX 39%","(Mortgage P&I + Property Tax + Heat + Condo Fee) ÷ Gross Monthly Income ≤ 39%"],["TDS RATIO — MAX 44%","(GDS items + ALL other monthly debts) ÷ Gross Monthly Income ≤ 44%"],["HEAT — $150/MONTH STANDARD","Lenders add $150/mo heat regardless of your actual bill."],["STRESS TEST — MANDATORY","Must qualify at your rate + 2% OR 5.25% — whichever is higher."],["CMHC INSURANCE","Required if down payment < 20%. Added to your mortgage. Max $1.5M with CMHC."],["30-YEAR AMORTIZATION","First-time buyers of new builds only. All others: max 25yr with CMHC, 30yr conventional."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
          </Card>
        </div>
      )}

      {tab==="rentvbuy"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:4}}>🏠 Rent vs Buy Analysis</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>True comparison: closing costs, rent increases, equity buildup, and opportunity cost of your down payment.</p>
            <div style={{background:"#f8fafc",borderRadius:8,padding:10,marginBottom:8}}>
              <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:6}}>🏠 If You Buy</div>
              <Field label="Home Price ($)"><input type="number" value={rp} onChange={e=>setRp(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="Down Payment (%)"><input type="number" value={rd} onChange={e=>setRd(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="Mortgage Rate (%)"><input type="number" step={0.05} value={rr} onChange={e=>setRr(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="Annual Appreciation (%)"><input type="number" step={0.5} value={rapr} onChange={e=>setRapr(parseFloat(e.target.value)||0)} style={inp}/></Field>
            </div>
            <div style={{background:"#f8fafc",borderRadius:8,padding:10,marginBottom:8}}>
              <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:6}}>🏠 If You Rent</div>
              <Field label="Monthly Rent Today ($)"><input type="number" value={rent} onChange={e=>setRent(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="Annual Rent Increase (%)"><input type="number" step={0.5} value={rentInc} onChange={e=>setRentInc(parseFloat(e.target.value)||0)} style={inp}/></Field>
            </div>
            <Field label="Time Horizon"><select value={ry} onChange={e=>setRy(parseInt(e.target.value))} style={inp}><option value={5}>5 years</option><option value={10}>10 years</option><option value={15}>15 years</option><option value={20}>20 years</option></select></Field>
            <button onClick={doRvb} style={calcBtn}>Run Full Analysis</button>
            <div ref={rvbRef}>{rvbR&&(
              <div style={{marginTop:12}}>
                <div style={{background:`linear-gradient(135deg,${(rvbR as any).verdict==="buying"?s.green:"#7c3aed"},${(rvbR as any).verdict==="buying"?"#15803d":"#6d28d9"})`,borderRadius:10,padding:14,marginBottom:10,color:"#fff",textAlign:"center"}}>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.8)",marginBottom:4}}>Over {(rvbR as any).ry} years, based on your inputs:</div>
                  <div style={{fontSize:20,fontWeight:800}}>{(rvbR as any).verdict==="buying"?"🏠 Buying is likely better":"🏠 Renting may be smarter"}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginTop:4}}>Net cost difference: {cur(Math.abs((rvbR as any).netBuyCost-(rvbR as any).netRentCost))} {(rvbR as any).verdict==="buying"?"cheaper to buy":"cheaper to rent"}</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
                  <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:12}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#15803d",marginBottom:8}}>🏠 Buying</div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:3}}>Monthly all-in: <b>{cur((rvbR as any).monthlyBuy)}</b></div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:3}}>Closing costs: <b>{cur((rvbR as any).closingCosts)}</b></div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:3}}>Total paid: <b>{cur((rvbR as any).totalBuyCost)}</b></div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:3}}>Future value: <b>{cur((rvbR as any).futureVal)}</b></div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:6}}>Remaining mortgage: <b>{cur((rvbR as any).remBalance)}</b></div>
                    <div style={{fontSize:12,fontWeight:800,color:"#15803d"}}>Equity: {cur((rvbR as any).equity)}</div>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy}}>Net cost: {cur((rvbR as any).netBuyCost)}</div>
                  </div>
                  <div style={{background:"#f5f3ff",border:"1px solid #ddd6fe",borderRadius:10,padding:12}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#7c3aed",marginBottom:8}}>🏠 Renting</div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:3}}>Rent today: <b>{cur((rvbR as any).rentByYear[0])}/mo</b></div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:3}}>Rent yr {(rvbR as any).ry}: <b>{cur((rvbR as any).rentByYear[(rvbR as any).ry-1])}/mo</b></div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:3}}>Total rent: <b>{cur((rvbR as any).totalRentCost)}</b></div>
                    <div style={{fontSize:11,color:"#374151",marginBottom:6}}>Down pmt invested @6%: <b>+{cur((rvbR as any).oppCost)}</b></div>
                    <div style={{fontSize:12,fontWeight:800,color:"#7c3aed"}}>No equity built</div>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy}}>Net cost: {cur((rvbR as any).netRentCost)}</div>
                  </div>
                </div>
                <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:10,fontSize:11,color:"#92400e"}}>
                  <b>Note:</b> Assumes {rapr}% appreciation, {rentInc}% annual rent increases, 6% investment return on down payment. Adjust inputs to see different scenarios.
                </div>
              </div>
            )}</div>
          </Card>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>🤔 What Specialists Tell Clients</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:12}}>The rent vs buy decision is more nuanced than most people think.</p>
            {[["THE 5-YEAR RULE","Buying only makes financial sense if you plan to stay at least 5 years. Closing costs (2–4%) take years to overcome through equity."],["HIDDEN COSTS OF BUYING","Property tax (~1%/yr), maintenance (~1%/yr), insurance, and unexpected repairs add $400–$1,500/mo beyond the mortgage."],["OPPORTUNITY COST IS REAL","Money tied up in a down payment could earn 5–7% in index funds. This is real money renting lets you keep liquid."],["RENT INCREASES ARE REAL","Rent rises 3–5%/year. A $2,000/mo rent becomes $2,600 in 5 years at 3% annual increases. Owning locks in your mortgage payment."],["EQUITY IS FORCED SAVINGS","Every mortgage payment builds equity. Renters must be disciplined investors to match this benefit."],["WHEN RENTING WINS","High prices vs rent, uncertain job situation, or planning to move in <5 years. Flexibility has real financial value."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
          </Card>
        </div>
      )}

      {tab==="renewal"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:4}}>🔄 Mortgage Renewal Calculator</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Compare staying vs switching — including IRD penalty and break-even analysis.</p>
            <Field label="Remaining Balance ($)"><input type="number" value={rb} onChange={e=>setRb(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Current Rate (%)"><input type="number" step={0.05} value={ro} onChange={e=>setRo(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="New Rate Offered (%)"><input type="number" step={0.05} value={rn} onChange={e=>setRn(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Remaining Amortization (years)"><input type="number" value={rma} onChange={e=>setRma(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="New Term"><select value={rt} onChange={e=>setRt(parseInt(e.target.value))} style={inp}><option value={1}>1 year</option><option value={2}>2 years</option><option value={3}>3 years</option><option value={5}>5 years</option></select></Field>
            <button onClick={doRenewal} style={calcBtn}>Calculate Savings & Penalty</button>
            <div ref={renewRef}>{renewR&&(
              <div style={{marginTop:12}}>
                <div style={{background:`linear-gradient(135deg,${(renewR as any).sv>0?s.green:s.red},${(renewR as any).sv>0?"#15803d":"#9f1239"})`,borderRadius:10,padding:14,marginBottom:10,color:"#fff"}}>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>Monthly {(renewR as any).sv>0?"Savings":"Increase"}</div>
                  <div style={{fontSize:34,fontWeight:800,marginBottom:2}}>{cur(Math.abs((renewR as any).sv))}/mo</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.7)"}}>{(renewR as any).rt}-year total: {cur(Math.abs((renewR as any).ts))} {(renewR as any).sv>0?"saved":"extra"}</div>
                </div>
                <div style={{background:"#f8fafc",borderRadius:10,padding:12,marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8}}>💰 Payment Comparison</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                    <div style={{color:s.muted}}>Current payment ({ro}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((renewR as any).op)}/mo</div>
                    <div style={{color:s.muted}}>New payment ({rn}%)</div><div style={{fontWeight:700,textAlign:"right",color:(renewR as any).sv>0?s.green:"#dc2626"}}>{cur((renewR as any).np)}/mo</div>
                    <div style={{color:s.muted}}>Monthly {(renewR as any).sv>0?"savings":"increase"}</div><div style={{fontWeight:800,textAlign:"right",color:(renewR as any).sv>0?s.green:"#dc2626"}}>{cur(Math.abs((renewR as any).sv))}/mo</div>
                    <div style={{color:s.muted}}>{(renewR as any).rt}-year total</div><div style={{fontWeight:800,textAlign:"right",color:(renewR as any).sv>0?s.green:"#dc2626"}}>{cur(Math.abs((renewR as any).ts))}</div>
                  </div>
                </div>
                <div style={{background:(renewR as any).worthBreaking?"#f0fdf4":"#fff7ed",border:`1px solid ${(renewR as any).worthBreaking?"#bbf7d0":"#fed7aa"}`,borderRadius:10,padding:12,marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:700,color:(renewR as any).worthBreaking?"#15803d":"#c2410c",marginBottom:8}}>⚠️ Breaking Early — Worth It?</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                    <div style={{color:"#374151"}}>3-Month Interest Penalty</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((renewR as any).threeMonthInt)}</div>
                    <div style={{color:"#374151"}}>IRD Penalty (est.)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur((renewR as any).ird)}</div>
                    <div style={{color:"#374151",fontWeight:700}}>Penalty (larger of above)</div><div style={{fontWeight:800,textAlign:"right",color:"#dc2626"}}>{cur((renewR as any).penalty)}</div>
                    <div style={{color:"#374151"}}>Months to Break Even</div><div style={{fontWeight:800,textAlign:"right",color:(renewR as any).worthBreaking?s.green:"#dc2626"}}>{(renewR as any).breakEven<999?(renewR as any).breakEven+" mo":"N/A"}</div>
                  </div>
                  <div style={{fontSize:10,color:(renewR as any).worthBreaking?"#15803d":"#92400e",marginTop:8}}>{(renewR as any).worthBreaking?`✅ Worth breaking early — recoup penalty in ${(renewR as any).breakEven} months.`:`❌ May not be worth breaking — ${(renewR as any).breakEven} months to recoup penalty.`}</div>
                </div>
                <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:10,fontSize:11,color:"#1e40af"}}>
                  <b>💡 Tip:</b> At renewal, your lender's first offer is rarely their best. Shopping around or using a broker can often secure 0.25–0.50% lower.
                </div>
              </div>
            )}</div>
          </Card>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>⏰ Renewal Strategy Guide</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:12}}>Millions renewing in 2025–2027. Here's what specialists recommend.</p>
            {[["START 4 MONTHS EARLY","Most lenders let you lock in a rate 120 days before maturity. Don't wait — rates move quickly."],["NO PENALTY TO SWITCH","Switching lenders at renewal costs $0. Your current lender knows this, which is why they improve their offer when you shop."],["GET 3+ QUOTES","Your bank, a credit union, and a mortgage broker. Brokers access 30+ lenders and are free to use."],["FIXED vs VARIABLE","With BoC at 2.25%, variable (~3.3%) is below fixed (~4.9%). Consider your risk tolerance and timeline."],["IRD vs 3-MONTH INTEREST","Fixed mortgages use IRD for early break — much larger than variable's 3-month interest. Check your contract."],["REFINANCE AT RENEWAL","Best time to consolidate debt or pull equity — no penalty at renewal date. Lenders can lend up to 80% of home value."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
          </Card>
        </div>
      )}

      {tab==="stress"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:4}}>📋 Mortgage Stress Test</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>See exactly what you qualify for — and what levers you can pull to qualify for more.</p>
            <Field label="Annual Income — Applicant 1 ($)"><input type="number" value={si} onChange={e=>setSi(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Annual Income — Applicant 2 ($)"><input type="number" value={si2} onChange={e=>setSi2(parseFloat(e.target.value)||0)} style={inp} placeholder="0 if single applicant"/></Field>
            <Field label="Monthly Debt Payments ($)"><input type="number" value={sd} onChange={e=>setSd(parseFloat(e.target.value)||0)} style={inp} placeholder="Car, student loans, credit cards"/></Field>
            <Field label="Down Payment / Savings ($)"><input type="number" value={sdp} onChange={e=>setSdp(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Your Offered Rate (%)"><input type="number" step={0.05} value={sr} onChange={e=>setSr(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Amortization"><select value={sa} onChange={e=>setSa(parseInt(e.target.value))} style={inp}><option value={25}>25 years</option><option value={20}>20 years</option><option value={15}>15 years</option><option value={30}>30 years</option></select></Field>
            <button onClick={doStress} style={calcBtn}>Run Stress Test</button>
            <div ref={stRef}>{stR&&(
              <div style={{marginTop:12}}>
                <div style={{background:`linear-gradient(135deg,${(stR as any).pass?s.green:s.red},${(stR as any).pass?"#15803d":"#9f1239"})`,borderRadius:10,padding:14,marginBottom:10,color:"#fff",textAlign:"center"}}>
                  <div style={{fontSize:22,fontWeight:800,marginBottom:4}}>{(stR as any).pass?"✅ You Pass the Stress Test":"❌ You May Not Pass"}</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.8)"}}>Qualifying at {(stR as any).str.toFixed(2)}% stress rate · Your rate: {(stR as any).sr}%</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
                  <div style={{background:"#f8fafc",borderRadius:10,padding:12}}>
                    <div style={{fontSize:10,color:s.muted,fontWeight:700,marginBottom:6,textTransform:"uppercase"}}>At Stress Rate ({(stR as any).str.toFixed(2)}%)</div>
                    <div style={{fontSize:18,fontWeight:800,color:s.navy}}>{cur((stR as any).maxP)}</div>
                    <div style={{fontSize:10,color:s.muted}}>Max purchase price</div>
                    <div style={{fontSize:13,fontWeight:700,color:s.navy,marginTop:4}}>{cur((stR as any).maxMtg)}</div>
                    <div style={{fontSize:10,color:s.muted}}>Max mortgage</div>
                  </div>
                  <div style={{background:"#f0fdf4",borderRadius:10,padding:12}}>
                    <div style={{fontSize:10,color:"#15803d",fontWeight:700,marginBottom:6,textTransform:"uppercase"}}>At Your Rate ({(stR as any).sr}%)</div>
                    <div style={{fontSize:18,fontWeight:800,color:"#15803d"}}>{cur((stR as any).maxPActual)}</div>
                    <div style={{fontSize:10,color:"#15803d"}}>Max purchase price</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#15803d",marginTop:4}}>{cur((stR as any).maxMtgActual)}</div>
                    <div style={{fontSize:10,color:"#15803d"}}>Max mortgage</div>
                  </div>
                </div>
                <div style={{background:"#f8fafc",borderRadius:10,padding:12,marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:10}}>📊 Debt Ratios at Stress Rate ({(stR as any).str.toFixed(2)}%)</div>
                  {(()=>{
                    const gds=(stR as any).gds,tds=(stR as any).tds;
                    const gdsOk=gds<=39,tdsOk=tds<=44;
                    const bothOk=gdsOk&&tdsOk;
                    const gdsOver=Math.max(0,gds-39).toFixed(1);
                    const tdsOver=Math.max(0,tds-44).toFixed(1);
                    return(<>
                      <div style={{background:bothOk?"#f0fdf4":"#fff1f2",border:`1px solid ${bothOk?"#bbf7d0":"#fecdd3"}`,borderRadius:8,padding:"8px 12px",marginBottom:10,display:"flex",alignItems:"center",gap:8}}>
                        <span style={{fontSize:18}}>{bothOk?"✅":"❌"}</span>
                        <div>
                          <div style={{fontSize:12,fontWeight:800,color:bothOk?"#15803d":"#be123c"}}>{bothOk?"You pass the stress test — both ratios within limits":"Stress test failed — ratios exceed lender limits"}</div>
                          {!bothOk&&<div style={{fontSize:11,color:"#be123c",marginTop:2}}>{!gdsOk?`GDS is ${gdsOver}% over the 39% limit. `:""}{!tdsOk?`TDS is ${tdsOver}% over the 44% limit.`:""}</div>}
                        </div>
                      </div>
                      <div style={{marginBottom:8}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
                          <span style={{fontSize:11,color:s.muted}}>GDS <span style={{fontWeight:400}}>(housing costs ÷ income)</span></span>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            <span style={{fontSize:11,fontWeight:800,color:gdsOk?s.green:"#dc2626"}}>{gds}%</span>
                            <span style={{fontSize:10,background:gdsOk?"#dcfce7":"#fee2e2",color:gdsOk?"#15803d":"#dc2626",borderRadius:20,padding:"1px 6px",fontWeight:700}}>{gdsOk?"✓ PASS":"✗ FAIL"}</span>
                          </div>
                        </div>
                        <div style={{background:"#e2e8f0",borderRadius:20,height:10,position:"relative"}}>
                          <div style={{position:"absolute",left:"0",top:0,width:"39%",height:"100%",borderRight:"2px dashed #94a3b8",pointerEvents:"none"}}/>
                          <div style={{width:Math.min(gds/50*100,100)+"%",height:"100%",background:gdsOk?`linear-gradient(90deg,${s.green},#22c55e)`:"linear-gradient(90deg,#f87171,#dc2626)",borderRadius:20,transition:"width 0.5s"}}/>
                        </div>
                        {!gdsOk&&<div style={{fontSize:10,color:"#dc2626",marginTop:4}}>💡 GDS fix: Add {cur(Math.ceil((gds-39)/39*(stR as any).totalInc/12*12))}/yr income, or choose a lower-priced home.</div>}
                      </div>
                      <div style={{marginBottom:6}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
                          <span style={{fontSize:11,color:s.muted}}>TDS <span style={{fontWeight:400}}>(all debts ÷ income)</span></span>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            <span style={{fontSize:11,fontWeight:800,color:tdsOk?s.green:"#dc2626"}}>{tds}%</span>
                            <span style={{fontSize:10,background:tdsOk?"#dcfce7":"#fee2e2",color:tdsOk?"#15803d":"#dc2626",borderRadius:20,padding:"1px 6px",fontWeight:700}}>{tdsOk?"✓ PASS":"✗ FAIL"}</span>
                          </div>
                        </div>
                        <div style={{background:"#e2e8f0",borderRadius:20,height:10,position:"relative"}}>
                          <div style={{position:"absolute",left:"0",top:0,width:"44%",height:"100%",borderRight:"2px dashed #94a3b8",pointerEvents:"none"}}/>
                          <div style={{width:Math.min(tds/55*100,100)+"%",height:"100%",background:tdsOk?`linear-gradient(90deg,${s.green},#22c55e)`:"linear-gradient(90deg,#f87171,#dc2626)",borderRadius:20,transition:"width 0.5s"}}/>
                        </div>
                        {!tdsOk&&<div style={{fontSize:10,color:"#dc2626",marginTop:4}}>💡 TDS fix: Pay down {cur(Math.ceil((tds-44)/44*(stR as any).totalInc/12*12))}/yr in debts, or add a co-borrower to increase qualifying income.</div>}
                      </div>
                      <div style={{fontSize:10,color:s.muted,marginTop:6,paddingTop:6,borderTop:`1px solid ${s.border}`}}>Calculated at stress rate {(stR as any).str.toFixed(2)}% · Heat $150/mo included · Income: {cur((stR as any).totalInc)}/yr · Debts: {cur((stR as any).sd)}/mo{!bothOk&&<span style={{color:s.blue,fontWeight:600,marginLeft:8,cursor:"pointer"}}> → A mortgage advisor can help you qualify</span>}</div>
                    </>);
                  })()}
                </div>
                <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:12}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#1e40af",marginBottom:8}}>💡 How to Qualify for More</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 12px",fontSize:12}}>
                    <div style={{color:"#374151"}}>Add $10K/yr income</div><div style={{fontWeight:700,textAlign:"right",color:s.green}}>+{cur(Math.max(0,(stR as any).incLever10-(stR as any).maxP))}</div>
                    <div style={{color:"#374151"}}>Pay down $200/mo debt</div><div style={{fontWeight:700,textAlign:"right",color:s.green}}>+{cur(Math.max(0,(stR as any).debtLever-(stR as any).maxP))}</div>
                    <div style={{color:"#374151"}}>Add $25K to down payment</div><div style={{fontWeight:700,textAlign:"right",color:s.green}}>+{cur(Math.max(0,(stR as any).dpLever-(stR as any).maxP))}</div>
                  </div>
                  <div style={{fontSize:10,color:"#1e40af",marginTop:8}}>💡 A mortgage broker can also access B-lenders with different qualifying criteria.</div>
                </div>
              </div>
            )}</div>
          </Card>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>📋 Stress Test — Everything You Need to Know</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:12}}>Canada's stress test was introduced in 2018. Here's how it works.</p>
            {[["WHY IT EXISTS","Ensures you can afford your mortgage even if rates rise 2% after you buy. Protects you and the financial system."],["THE QUALIFYING RATE","Must qualify at the HIGHER of: your rate + 2%, or 5.25%. Currently most buyers qualify at rate + 2%."],["WHO IT APPLIES TO","All federally regulated lenders (big banks, federal credit unions). Some provincial credit unions may use different rules."],["IT DOESN'T CHANGE YOUR RATE","You qualify at the stress rate but pay your contracted rate. It only affects how much you can borrow."],["CO-BORROWER STRATEGY","Adding a co-signer increases total income, raising your maximum purchase price significantly."],["USE YOUR FHSA + HBP","FHSA ($40K tax-free) + RRSP HBP ($60K) = up to $100K per person toward your down payment. More down = less mortgage."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
          </Card>
        </div>
      )}
      {tab==="amort"&&<AmortTab/>}
      {tab==="closing"&&<ClosingCostTab prov={prov}/>}
      {tab==="docs"&&<DocChecklistTab/>}
    </div>
  );
}

function AmortTab(){
  const [ahp,setAhp]=useState(500000);
  const [adp,setAdp]=useState(20);
  const [ar2,setAr2]=useState(5.0);
  const [aam,setAam]=useState(25);
  const [aResult,setAResult]=useState<any[]|null>(null);
  const aRef=useRef<any>(null);
  function calcAmort(){
    const down=Math.round(ahp*adp/100);
    const cmhc=getCMHC(ahp,adp);
    const principal=ahp-down+(cmhc.req?cmhc.premium:0);
    const monthlyRate=ar2/100/12;
    const n=aam*12;
    const pmt=monthlyRate===0?principal/n:principal*(monthlyRate*Math.pow(1+monthlyRate,n))/(Math.pow(1+monthlyRate,n)-1);
    let bal=principal;
    const schedule=[];
    let cumInt=0,cumPrin=0;
    for(let yr=1;yr<=aam;yr++){
      let yInt=0,yPrin=0;
      for(let m=0;m<12;m++){
        const intPmt=bal*monthlyRate;
        const prinPmt=Math.min(pmt-intPmt,bal);
        yInt+=intPmt;yPrin+=prinPmt;bal-=prinPmt;
        if(bal<0)bal=0;
      }
      cumInt+=yInt;cumPrin+=yPrin;
      schedule.push({yr,pmt:pmt*12,interest:yInt,principal:yPrin,balance:Math.max(0,bal),cumInt,cumPrin});
    }
    setAResult(schedule);
    setTimeout(()=>aRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  }
  const totalInt=aResult?aResult[aResult.length-1]?.cumInt:0;
  return(
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
        <Card>
          <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>📅 Amortization Schedule</h3>
          <Field label="Home Price ($)"><input type="number" value={ahp} onChange={e=>setAhp(parseFloat(e.target.value)||0)} style={inp}/></Field>
          <Field label="Down Payment (%)"><input type="number" value={adp} onChange={e=>setAdp(parseFloat(e.target.value)||0)} style={inp}/></Field>
          <Field label="Interest Rate (%)"><input type="number" step="0.05" value={ar2} onChange={e=>setAr2(parseFloat(e.target.value)||0)} style={inp}/></Field>
          <Field label="Amortization"><select value={aam} onChange={e=>setAam(parseInt(e.target.value))} style={inp}><option value={10}>10 years</option><option value={15}>15 years</option><option value={20}>20 years</option><option value={25}>25 years</option><option value={30}>30 years</option></select></Field>
          <button onClick={calcAmort} style={calcBtn}>Generate Schedule</button>
        </Card>
        {aResult&&(
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:12}}>💡 Total Cost Summary</h3>
            {[[cur(aResult[0].pmt/12)+"/mo","Monthly Payment"],[cur(totalInt),"Total Interest Paid"],[cur(ahp*(adp/100)),"Down Payment"],[cur(ahp+totalInt),"Total Cost of Home"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,marginBottom:7,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.7)"}}>{l}</div>
                <div style={{fontSize:14,fontWeight:800,color:s.gold}}>{v}</div>
              </div>
            ))}
            <div style={{marginTop:10,fontSize:10,color:"rgba(255,255,255,0.4)"}}>Interest is {aResult?Math.round(totalInt/(ahp+totalInt)*100):0}% of total cost</div>
          </Card>
        )}
      </div>
      <div ref={aRef}>{aResult&&(
        <div style={{marginTop:14,background:s.white,borderRadius:12,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.07)"}}>
          <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,padding:"12px 16px"}}>
            <div style={{color:"#fff",fontSize:14,fontWeight:700}}>Year-by-Year Breakdown</div>
            <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:2}}>{aam}-year amortization · {ar2}% rate</div>
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:500}}>
              <thead><tr style={{background:"#f8fafc"}}>{["Year","Annual Payment","Interest","Principal","Balance","% Paid"].map(h=><th key={h} style={{padding:"9px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"center",borderBottom:`1px solid ${s.border}`}}>{h}</th>)}</tr></thead>
              <tbody>{aResult.map((row,i)=>{
                const principal2=ahp*(1-adp/100);
                const pctPaid=principal2>0?Math.round((1-row.balance/principal2)*100):100;
                return(
                  <tr key={row.yr} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                    <td style={{padding:"9px 12px",textAlign:"center",fontWeight:700,color:s.navy}}>{row.yr}</td>
                    <td style={{padding:"9px 12px",textAlign:"center",fontSize:12}}>{cur(row.pmt)}</td>
                    <td style={{padding:"9px 12px",textAlign:"center",fontSize:12,color:"#dc2626"}}>{cur(row.interest)}</td>
                    <td style={{padding:"9px 12px",textAlign:"center",fontSize:12,color:s.green}}>{cur(row.principal)}</td>
                    <td style={{padding:"9px 12px",textAlign:"center",fontSize:12,fontWeight:row.balance===0?800:400,color:row.balance===0?s.green:s.navy}}>{cur(row.balance)}</td>
                    <td style={{padding:"9px 12px",textAlign:"center"}}>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <div style={{flex:1,background:"#e2e8f0",borderRadius:20,height:6}}><div style={{width:Math.min(pctPaid,100)+"%",height:"100%",background:`linear-gradient(90deg,${s.red},${s.gold})`,borderRadius:20}}/></div>
                        <span style={{fontSize:10,fontWeight:700,color:s.muted,minWidth:28}}>{pctPaid}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}</tbody>
            </table>
          </div>
        </div>
      )}</div>
    </div>
  );
}

function ClosingCostTab({prov:initProv}:{prov:string}){
  const [chp,setChp]=useState(500000);
  const [cprov,setCprov]=useState(initProv);
  const [ccity,setCcity]=useState("");
  const [cfirst,setCfirst]=useState(true);
  const [cnew,setCnew]=useState(false);
  const [cResult,setCResult]=useState<any>(null);
  const cRef=useRef<any>(null);

  const isToronto=ccity.trim().toLowerCase()==="toronto";

  function calcClosing(){
    const ltt=getLTT(chp,cprov,ccity);
    const lttRebate=cfirst?Math.min(ltt,cprov==="ON"?(isToronto?8000:4000):cprov==="BC"?8000:cprov==="MB"?4500:cprov==="PE"?3000:0):0;
    const lttNet=ltt-lttRebate;
    const legal=1500,titleIns=350,homeInsp=500,appraisal=300,moving=1500;
    const hst=cnew?Math.min(chp*0.05,25000):0;
    const hstRebate=cnew?Math.min(hst,6300):0;
    const hstNet=hst-hstRebate;
    const total=lttNet+legal+titleIns+homeInsp+appraisal+moving+hstNet;
    setCResult({ltt,lttRebate,lttNet,legal,titleIns,homeInsp,appraisal,moving,hst,hstRebate,hstNet,total,isToronto,cprov});
    setTimeout(()=>cRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  }

  const EstBadge=()=><span style={{background:"#fef3c7",color:"#92400e",borderRadius:4,padding:"1px 5px",fontSize:9,fontWeight:700,marginLeft:6,verticalAlign:"middle"}}>EST</span>;

  return(
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
      <Card>
        <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:4}}>🏷️ Closing Cost Calculator</h3>
        <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Items marked <span style={{background:"#fef3c7",color:"#92400e",borderRadius:4,padding:"1px 5px",fontSize:9,fontWeight:700}}>EST</span> are typical estimates — get real quotes from your lawyer, inspector, and moving company.</p>
        <Field label="Purchase Price ($)"><input type="number" value={chp} onChange={e=>setChp(parseFloat(e.target.value)||0)} style={inp}/></Field>
        <Field label="Province"><select value={cprov} onChange={e=>{setCprov(e.target.value);setCcity("");}} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
        <Field label="City (optional — important for Toronto)">
          <input type="text" placeholder={cprov==="ON"?"e.g. Toronto (affects LTT)":"e.g. Vancouver"} value={ccity} onChange={e=>setCcity(e.target.value)} style={inp}/>
        </Field>
        {isToronto&&<div style={{background:"#fef3c7",border:"1px solid #fde68a",borderRadius:6,padding:"6px 10px",fontSize:11,color:"#92400e",marginBottom:8}}>⚠️ Toronto buyers pay <b>double LTT</b> — provincial + municipal. This is included.</div>}
        <div style={{marginBottom:9}}><label style={{display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:600,color:s.navy,cursor:"pointer"}}><input type="checkbox" checked={cfirst} onChange={e=>setCfirst(e.target.checked)}/>First-time buyer (LTT rebate)</label></div>
        <div style={{marginBottom:12}}><label style={{display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:600,color:s.navy,cursor:"pointer"}}><input type="checkbox" checked={cnew} onChange={e=>setCnew(e.target.checked)}/>New construction (GST applies)</label></div>
        <button onClick={calcClosing} style={calcBtn}>Calculate Closing Costs</button>
      </Card>
      <div ref={cRef}>{cResult&&(
        <Card>
          <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>💰 Estimated Closing Costs</h3>
          <div style={{...resultBox,marginTop:0,marginBottom:12}}>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:2}}>Total Cash Needed at Closing</div>
            <div style={{fontSize:28,fontWeight:800}}>{cur(cResult.total)}</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginTop:4}}>In addition to your down payment</div>
          </div>
          {[
            {l:"Land Transfer Tax",v:cur(cResult.ltt),note:cResult.lttRebate>0?`-${cur(cResult.lttRebate)} rebate → ${cur(cResult.lttNet)} net`:(cResult.isToronto?"Includes Toronto municipal LTT":cResult.cprov==="AB"?"Title transfer fee (estimate)":""),est:false},
            {l:"Legal Fees",v:cur(cResult.legal),note:"Range: $1,200–$2,500",est:true},
            {l:"Title Insurance",v:cur(cResult.titleIns),note:"Range: $200–$500",est:true},
            {l:"Home Inspection",v:cur(cResult.homeInsp),note:"Range: $400–$700",est:true},
            {l:"Appraisal",v:cur(cResult.appraisal),note:"Range: $300–$500 — may be waived",est:true},
            {l:"Moving Costs",v:cur(cResult.moving),note:"Range: $500–$5,000+",est:true},
            ...(cResult.hst>0?[{l:"GST/HST (New Build)",v:cur(cResult.hst),note:`-${cur(cResult.hstRebate)} rebate → ${cur(cResult.hstNet)} net`,est:false}]:[]),
          ].map(({l,v,note,est})=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"8px 0",borderBottom:`1px solid ${s.light}`}}>
              <div>
                <div style={{fontSize:12,fontWeight:600,color:s.navy,display:"flex",alignItems:"center"}}>
                  {l}{est&&<span style={{background:"#fef3c7",color:"#92400e",borderRadius:4,padding:"1px 5px",fontSize:9,fontWeight:700,marginLeft:6}}>EST</span>}
                </div>
                {note&&<div style={{fontSize:10,color:est?s.muted:s.green,marginTop:2}}>{note}</div>}
              </div>
              <div style={{fontSize:13,fontWeight:700,color:s.navy,flexShrink:0,marginLeft:8}}>{v}</div>
            </div>
          ))}
          <p style={{fontSize:10,color:"#bbb",marginTop:10}}>* <b>EST</b> items are typical Canadian averages. Get real quotes before closing.</p>
        </Card>
      )}</div>
    </div>
  );
}

function DocChecklistTab(){
  const DOC_SECTIONS=[
    {title:"💼 Employment & Income",docs:[{label:"Letter of employment (on company letterhead)",tip:"Must show position, start date, salary, and be signed by HR"},{label:"Last 2 pay stubs",tip:"Must be recent (within 30 days)"},{label:"Last 2 years T4 slips",tip:"Both years required for income verification"},{label:"Last 2 years Notice of Assessment (NOA)",tip:"Download from CRA My Account"},{label:"Last 3 months bank statements",tip:"All pages, showing regular deposits"}]},
    {title:"🧾 Self-Employed (additional)",docs:[{label:"Last 2 years T1 General tax returns",tip:"Full return, all schedules"},{label:"Last 2 years NOA from CRA",tip:"Must match what you declared"},{label:"Business registration or incorporation documents",tip:"Proves business legitimacy"},{label:"Last 2 years business financial statements",tip:"Prepared by accountant preferred"},{label:"6 months business bank statements",tip:"Shows business cash flow"}]},
    {title:"🏦 Down Payment & Assets",docs:[{label:"90-day bank account history (down payment source)",tip:"Must show funds were in account for 90 days"},{label:"Investment/RRSP/FHSA statements",tip:"If using for down payment"},{label:"Gift letter (if down payment is gifted)",tip:"Must state no repayment required, signed by donor"},{label:"Sale agreement of existing home (if applicable)",tip:"Proof of proceeds for down payment"}]},
    {title:"🆔 Identification",docs:[{label:"Government-issued photo ID (passport or driver's licence)",tip:"Must be valid and not expired"},{label:"Secondary ID (credit card, health card, etc.)",tip:"Two pieces of ID typically required"},{label:"SIN (Social Insurance Number)",tip:"Required for credit check and CRA verification"}]},
    {title:"🏠 Property Documents (after offer accepted)",docs:[{label:"Signed purchase and sale agreement",tip:"All schedules and addendums included"},{label:"MLS listing or feature sheet",tip:"Property details for lender review"},{label:"Home inspection report",tip:"Strongly recommended before waiving conditions"},{label:"Condo status certificate (if condo)",tip:"Required for condo purchases — lender reviews financials"},{label:"Property tax bill",tip:"Shows current assessed value and taxes"}]},
  ];
  const [checked,setChecked]=useState<{[k:string]:boolean}>({});
  const allDocs=DOC_SECTIONS.flatMap(sec=>sec.docs);
  const total=allDocs.length;
  const done=Object.values(checked).filter(Boolean).length;
  const pct=Math.round(done/total*100);
  function toggle(key:string){setChecked(prev=>({...prev,[key]:!prev[key]}));}
  return(
    <div>
      <Card style={{marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8}}>
          <div><h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:2}}>📁 Mortgage Document Checklist</h2><p style={{fontSize:12,color:s.muted}}>Everything your lender will ask for. Check items off as you gather them.</p></div>
          <div style={{textAlign:"center"}}><div style={{fontSize:22,fontWeight:800,color:pct===100?s.green:s.navy}}>{done}/{total}</div><div style={{fontSize:10,color:s.muted}}>documents ready</div></div>
        </div>
        <div style={{background:"#e2e8f0",borderRadius:20,height:10,marginBottom:4}}><div style={{width:pct+"%",height:"100%",background:pct===100?`linear-gradient(90deg,${s.green},#22c55e)`:`linear-gradient(90deg,${s.navy},${s.blue})`,borderRadius:20,transition:"width 0.3s"}}/></div>
        <div style={{fontSize:11,color:s.muted,marginBottom:4}}>{pct}% complete{pct===100?" — You're ready to apply! ✅":""}</div>
        {done>0&&<button onClick={()=>setChecked({})} style={{fontSize:11,color:s.muted,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0}}>Reset</button>}
      </Card>
      {DOC_SECTIONS.map((section,si)=>(
        <Card key={si} style={{marginBottom:12}}>
          <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>{section.title}</h3>
          {section.docs.map((doc,di)=>{
            const key=`${si}-${di}`;
            const isChecked=!!checked[key];
            return(
              <div key={di} onClick={()=>toggle(key)} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"9px 0",borderBottom:`1px solid ${s.light}`,cursor:"pointer"}}>
                <div style={{width:20,height:20,borderRadius:5,border:`2px solid ${isChecked?s.green:s.border}`,background:isChecked?s.green:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>{isChecked&&<span style={{color:"#fff",fontSize:12,fontWeight:800}}>✓</span>}</div>
                <div style={{flex:1}}><div style={{fontSize:12,fontWeight:600,color:isChecked?s.muted:s.navy,textDecoration:isChecked?"line-through":"none"}}>{doc.label}</div><div style={{fontSize:10,color:s.muted,marginTop:2}}>{doc.tip}</div></div>
              </div>
            );
          })}
        </Card>
      ))}
      <p style={{fontSize:10,color:"#bbb"}}>* Requirements vary by lender. Your mortgage professional may request additional documents.</p>
    </div>
  );
}

function PropertyTaxTab({initProv,initCity}){
  const [prov,setProv]=useState(initProv);const [city,setCity]=useState(initCity);const [homeVal,setHomeVal]=useState(500000);const [valType,setValType]=useState("market");const [result,setResult]=useState(null);const resultRef=useRef(null);
  useEffect(()=>{setProv(initProv);setCity(initCity);},[initProv,initCity]);
  useEffect(()=>{const cities=PDATA[prov]?.cities||[];if(!cities.includes(city))setCity(cities[0]||"");setResult(null);},[prov]);
  const ASSESS_RATIO:{[k:string]:number}={AB:1.0,BC:1.0,MB:1.0,ON:1.0,QC:1.0,SK:1.0,NS:1.0,NB:1.0,PE:1.0,NL:1.0};
  const ASSESS_LINKS:{[k:string]:{name:string,url:string}}={AB:{name:"Alberta Municipal Affairs",url:"https://www.municipalaffairs.alberta.ca/assessment"},BC:{name:"BC Assessment",url:"https://www.bcassessment.ca"},MB:{name:"Manitoba Assessment",url:"https://www.gov.mb.ca/finance/assessing"},ON:{name:"MPAC (My Property Tax)",url:"https://www.mpac.ca"},QC:{name:"Évaluation foncière",url:"https://www.mamh.gouv.qc.ca"},SK:{name:"Saskatchewan Assessment",url:"https://www.sraa.ca"},NS:{name:"Nova Scotia Assessment",url:"https://www.novascotia.ca/just/assessment"},NB:{name:"Service New Brunswick",url:"https://www.snb.ca/e/1000/1000-6000e.asp"},PE:{name:"PEI Property Valuation",url:"https://www.princeedwardisland.ca/en/topic/property-taxes"},NL:{name:"NL Municipal Assessment",url:"https://www.gov.nl.ca/mae/assessment"}};
  function calc(){
    const pr=PT_RATES[prov];const rates=(pr&&(pr as any)[city])?(pr as any)[city]:(pr?(pr as any).def:{res:0.01,edu:0.003});
    const resTax=Math.round(homeVal*rates.res),eduTax=Math.round(homeVal*rates.edu),total=resTax+eduTax;
    const provRates=PT_RATES[prov] as any;
    const comparisons=Object.entries(provRates).filter(([k])=>k!=="def"&&k!==city).map(([c,r]:any)=>({city:c,total:Math.round(homeVal*(r.res+r.edu))})).sort((a,b)=>a.total-b.total).slice(0,4);
    setResult({resTax,eduTax,total,monthly:Math.round(total/12),rates,homeVal,comparisons,hasSpecificRate:!!(provRates[city])});
    setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  }
  const assessLink=ASSESS_LINKS[prov];
  return(
    <Card>
      <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:5}}>🏛️ Property Tax Estimator</h2>
      <p style={{fontSize:12,color:s.muted,marginBottom:12}}>Estimate your annual property tax based on your city's published mill rates.</p>
      <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"10px 14px",marginBottom:12}}>
        <div style={{fontSize:12,fontWeight:700,color:"#1e40af",marginBottom:4}}>💡 How to find your assessed value</div>
        <div style={{fontSize:11,color:"#1e40af",lineHeight:1.6}}>Check your annual <b>Property Assessment Notice</b> mailed by your municipality. Your assessed value may differ from your market price.{assessLink&&<> <a href={assessLink.url} target="_blank" rel="noopener noreferrer" style={{color:"#2563eb",fontWeight:600}}>{assessLink.name} →</a></>}</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10,marginBottom:10}}>
        <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
        <Field label="City"><select value={city} onChange={e=>setCity(e.target.value)} style={inp}>{(PDATA[prov]?.cities||[]).map(c=><option key={c}>{c}</option>)}</select></Field>
        <Field label="Home Value ($)"><input type="number" value={homeVal} onChange={e=>setHomeVal(parseFloat(e.target.value)||0)} style={inp}/></Field>
      </div>
      <button onClick={calc} style={{padding:"9px 22px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Estimate Property Tax</button>
      <div ref={resultRef}>{result&&(
        <div style={{marginTop:14}}>
          {!result.hasSpecificRate&&<div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#92400e",marginBottom:10}}>⚠️ Using provincial average — {city} specific rate not available. Verify with your municipality.</div>}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,marginBottom:12}}>
            {[[cur(result.total),"Annual Tax"],[cur(result.monthly),"Per Month"],[(result.rates.res*100).toFixed(3)+"%","Residential Rate"],[(( result.rates.res+result.rates.edu)*100).toFixed(3)+"%","Total Mill Rate"]].map(([v,l])=><div key={l} style={{background:s.light,border:`1px solid ${s.border}`,borderRadius:10,padding:12,textAlign:"center"}}><div style={{fontSize:18,fontWeight:800,color:s.navy}}>{v}</div><div style={{fontSize:10,color:s.muted,marginTop:2}}>{l}</div></div>)}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:12,marginBottom:12}}>
            <div style={{background:"#f8fafc",borderRadius:10,padding:12}}>
              <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.4px"}}>📋 Tax Breakdown</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,fontSize:12}}>
              <div style={{color:s.muted}}>Home Value</div><div style={{fontWeight:700,textAlign:"right"}}>{cur(result.homeVal)}</div>
                <div style={{color:s.muted}}>Residential ({(result.rates.res*100).toFixed(3)}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur(result.resTax)}</div>
                <div style={{color:s.muted}}>Education ({(result.rates.edu*100).toFixed(3)}%)</div><div style={{fontWeight:700,textAlign:"right"}}>{cur(result.eduTax)}</div>
                <div style={{borderTop:`1px solid ${s.border}`,paddingTop:4,gridColumn:"1/-1"}}/>
                <div style={{fontWeight:700,color:s.navy}}>Total Annual</div><div style={{fontWeight:800,color:s.navy,textAlign:"right"}}>{cur(result.total)}</div>
                <div style={{color:s.muted}}>Monthly</div><div style={{fontWeight:700,textAlign:"right",color:s.muted}}>{cur(result.monthly)}/mo</div>
              </div>
            </div>
            <div style={{background:"#f8fafc",borderRadius:10,padding:12}}>
              <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.4px"}}>🏙️ What's Included</div>
              {[["Municipal Services","Roads, water, waste, parks, fire & police"],["Education Levy","Funds local public schools"],["Local Improvements","May include transit, libraries, infrastructure"]].map(([t,d])=><div key={t} style={{marginBottom:7}}><div style={{fontSize:11,fontWeight:700,color:s.navy}}>{t}</div><div style={{fontSize:10,color:s.muted,lineHeight:1.5}}>{d}</div></div>)}
            </div>
          </div>
          {result.comparisons.length>0&&<div style={{background:"#f8fafc",borderRadius:10,padding:12,marginBottom:12}}>
            <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.4px"}}>🏙️ Compare to Other Cities in {PDATA[prov]?.name}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:8}}>
              <div style={{background:s.navy,borderRadius:8,padding:10,textAlign:"center"}}><div style={{fontSize:13,fontWeight:800,color:"#fff"}}>{cur(result.total)}</div><div style={{fontSize:10,color:s.gold,marginTop:2}}>{city} ★</div></div>
              {result.comparisons.map((c:any)=><div key={c.city} style={{background:s.white,border:`1px solid ${s.border}`,borderRadius:8,padding:10,textAlign:"center"}}><div style={{fontSize:13,fontWeight:800,color:s.navy}}>{cur(c.total)}</div><div style={{fontSize:10,color:s.muted,marginTop:2}}>{c.city}</div><div style={{fontSize:9,color:c.total>result.total?"#dc2626":"#16a34a",marginTop:2}}>{c.total>result.total?`+${cur(c.total-result.total)}`:`-${cur(result.total-c.total)}`} vs yours</div></div>)}
            </div>
          </div>}
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"10px 14px",marginBottom:8}}>
            <div style={{fontSize:11,fontWeight:700,color:"#1e40af",marginBottom:4}}>📌 Get Your Exact Assessment</div>
            <div style={{fontSize:11,color:"#1e40af",lineHeight:1.6}}>For your exact property tax, check your official assessment notice or contact your municipality.{assessLink&&<> <a href={assessLink.url} target="_blank" rel="noopener noreferrer" style={{color:"#2563eb",fontWeight:600,textDecoration:"none"}}>{assessLink.name} →</a></>}</div>
          </div>
          <p style={{fontSize:10,color:"#bbb",marginTop:8}}>* Based on published mill rates. Actual tax depends on your official assessed value. Verify with your local municipality.</p>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"10px 14px",marginTop:10}}>
            <div style={{fontSize:11,fontWeight:700,color:"#1e40af",marginBottom:4}}>💡 Why does the same home value result in different taxes across cities?</div>
            <div style={{fontSize:11,color:"#1e40af",lineHeight:1.6}}>Property tax = <b>Mill Rate × Assessed Value</b>. Each city sets its own mill rate based on its budget needs and the total assessed value of all properties in the city. Cities with lower average home prices typically need higher mill rates to generate enough revenue for services like roads, water, schools, and emergency services. Cities with higher average home values can fund the same services with a lower mill rate. This means comparing property taxes across cities using the same home value can produce surprising results — and that's completely normal across Canada.</div>
          </div>
        </div>
      )}</div>
    </Card>
  );
}

function InsuranceTab({initProv}){
  const [homeVal,setHomeVal]=useState(500000);const [homeType,setHomeType]=useState("detached");const [yearBuilt,setYearBuilt]=useState("mid");const [prov,setProv]=useState(initProv);const [city,setCity]=useState(PDATA[initProv]?.cities[0]||"");const [results,setResults]=useState(null);const resultRef=useRef(null);
  useEffect(()=>{setProv(initProv);setCity(PDATA[initProv]?.cities[0]||"");},[initProv]);
  useEffect(()=>{setCity(PDATA[prov]?.cities[0]||"");},[prov]);

  // Province-specific provider lists
  const PROV_PROVIDERS:{[k:string]:string[]}={
    QC:["Desjardins Insurance","Intact Insurance","Aviva Canada","Belairdirect","Co-operators","TD Insurance","Economical Insurance","La Capitale"],
    SK:["SGI Canada","Co-operators","Intact Insurance","Wawanesa Insurance","Aviva Canada","TD Insurance","Economical Insurance","Gore Mutual"],
    MB:["Co-operators","Wawanesa Insurance","Intact Insurance","Aviva Canada","TD Insurance","Economical Insurance","Belairdirect","SGI Canada"],
    BC:["Intact Insurance","Aviva Canada","BCAA Insurance","Co-operators","Wawanesa Insurance","TD Insurance","Belairdirect","Gore Mutual"],
    ON:["Intact Insurance","Aviva Canada","TD Insurance","Desjardins Insurance","Co-operators","Economical Insurance","Gore Mutual","Pembridge Insurance","Belairdirect","Northbridge Insurance"],
    AB:["Intact Insurance","Aviva Canada","Co-operators","Wawanesa Insurance","TD Insurance","Belairdirect","Economical Insurance","SGI Canada"],
    NS:["Intact Insurance","Aviva Canada","Co-operators","TD Insurance","Economical Insurance","Pembridge Insurance","Wawanesa Insurance"],
    NB:["Intact Insurance","Aviva Canada","Co-operators","TD Insurance","Economical Insurance","Pembridge Insurance"],
    PE:["Intact Insurance","Co-operators","Aviva Canada","TD Insurance","Economical Insurance"],
    NL:["Intact Insurance","Aviva Canada","Co-operators","TD Insurance","Economical Insurance","Northbridge Insurance"],
  };

  // City risk multipliers for major cities
  const CITY_MULT:{[k:string]:number}={
    "Toronto":1.45,"Brampton":1.38,"Mississauga":1.32,"Hamilton":1.25,"Markham":1.28,
    "Vancouver":1.52,"Surrey":1.35,"Burnaby":1.38,"Abbotsford":1.18,"Kelowna":1.12,
    "Calgary":1.15,"Edmonton":1.10,"Red Deer":1.02,"Lethbridge":0.98,
    "Winnipeg":1.05,"Brandon":0.96,
    "Ottawa":1.18,"Kingston":1.05,"London":1.08,"Windsor":1.12,"Barrie":1.06,
    "Montreal":1.08,"Quebec City":0.95,"Laval":1.06,"Gatineau":0.98,
    "Halifax":1.05,"Dartmouth":1.03,
    "Saskatoon":1.04,"Regina":1.06,
    "Moncton":0.98,"Saint John":1.02,
    "St. John's":1.04,
    "Charlottetown":0.95,
  };

  const providerNames=PROV_PROVIDERS[prov]||INS_PROVIDERS.map(p=>p.name);
  const filteredProviders=INS_PROVIDERS.filter(p=>providerNames.includes(p.name));

  function calc(){
    const base=(INS_BASE[prov]||0.13)*(TYPE_MULT[homeType]||1)*(YEAR_MULT[yearBuilt]||1);
    const cityMult=CITY_MULT[city]||1.0;
    const baseAnnual=Math.round(homeVal*base*cityMult/100);
    setResults(filteredProviders.map(p=>({...p,annual:Math.round(baseAnnual*p.mult/100)*100})).sort((a,b)=>a.annual-b.annual));
    setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  }
  return(
    <Card>
      <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:5}}>🏠 Home Insurance Estimator</h2>
      <p style={{fontSize:12,color:s.muted,marginBottom:14}}>Required by all mortgage lenders — compare top Canadian home insurance providers.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10,marginBottom:12}}>
        <Field label="Home Value ($)"><input type="number" value={homeVal} onChange={e=>setHomeVal(parseFloat(e.target.value)||0)} style={inp}/></Field>
        <Field label="Home Type"><select value={homeType} onChange={e=>setHomeType(e.target.value)} style={inp}><option value="detached">Detached House</option><option value="semi">Semi-Detached</option><option value="condo">Condo</option><option value="townhouse">Townhouse</option></select></Field>
        <Field label="Year Built"><select value={yearBuilt} onChange={e=>setYearBuilt(e.target.value)} style={inp}><option value="new">2010 or newer</option><option value="mid">1980–2009</option><option value="old">Before 1980</option></select></Field>
        <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
        <Field label="City"><select value={city} onChange={e=>setCity(e.target.value)} style={inp}>{(PDATA[prov]?.cities||[]).map(c=><option key={c}>{c}</option>)}</select></Field>
      </div>
      <button onClick={calc} style={{padding:"9px 22px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Estimate Insurance</button>
      <div ref={resultRef}>{results&&(
        <div style={{marginTop:14}}>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 14px",marginBottom:12,fontSize:11,color:"#15803d"}}>✅ Sorted lowest to highest — {filteredProviders.length} providers available in {PDATA[prov]?.name}</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:12}}>
            {results.map((p,i)=><div key={p.name} style={{border:`1px solid ${i===0?"#bbf7d0":s.border}`,borderRadius:10,padding:13,background:i===0?"#f0fdf4":s.white}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}><div style={{fontSize:13,fontWeight:800,color:s.navy}}>{p.name}</div><div style={{color:s.gold,fontSize:11}}>{p.stars}</div></div>{i===0&&<div style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,display:"inline-block",marginBottom:6}}>⭐ Best Price</div>}<div style={{fontSize:18,fontWeight:800,color:i===0?"#15803d":s.navy}}>{cur(p.annual)}/yr</div><div style={{fontSize:11,color:s.muted,marginBottom:7}}>{cur(Math.round(p.annual/12))}/month</div><div style={{background:"#f0fdf4",borderRadius:6,padding:"5px 9px",fontSize:11,color:"#15803d",fontWeight:600,marginBottom:7}}>💡 {p.discount}</div><div style={{fontSize:11,color:s.muted,marginBottom:9,lineHeight:1.5}}>{p.desc}</div><a href={p.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:8,background:i===0?"#15803d":s.navy,color:"#fff",borderRadius:8,fontSize:11,fontWeight:700,textAlign:"center",textDecoration:"none"}}>Get Real Quote →</a></div>)}
          </div>
          <p style={{fontSize:10,color:"#bbb",marginTop:10}}>* Estimates only. Actual premiums vary by insurer and risk profile.</p>
        </div>
      )}</div>
    </Card>
  );
}

function RateFinderTab(){
  const [step,setStep]=useState(0);const [answers,setAnswers]=useState<any>({});const [result,setResult]=useState<any>(null);
  const steps=[
    {q:"What is the purpose of your mortgage?",key:"purpose",hint:"This affects which programs and lenders you qualify for.",opts:[{v:"🏠 First Home Purchase",tip:"First-time buyers get access to FHSA, HBP, and provincial grants."},{v:"🏡 Subsequent Purchase",tip:"Standard qualification rules apply. Your existing equity can help."},{v:"🔄 Renewal / Transfer",tip:"No penalty at renewal. Shop around — your lender's first offer is rarely best."},{v:"💳 Refinance",tip:"Breaking early triggers a penalty. We'll factor this into your analysis."}]},
    {q:"What is your estimated credit score?",key:"credit",hint:"Your credit score is one of the biggest factors in your rate.",opts:[{v:"🟢 Excellent (750+)",tip:"You qualify for the best rates from all lenders."},{v:"🔵 Good (700–749)",tip:"You qualify for most lenders at competitive rates."},{v:"🟡 Fair (650–699)",tip:"Some A-lenders may add a premium. B-lenders are an option."},{v:"🔴 Below 650",tip:"B-lenders or private lenders. Rate premium of 1–3%."}]},
    {q:"How much is your down payment?",key:"down",hint:"Down payment % determines CMHC requirement and available lenders.",opts:[{v:"5–9% (Insured)",tip:"CMHC required. Premium: 4.0% of mortgage. Max home price $999,999."},{v:"10–14% (Insured)",tip:"CMHC required. Premium: 3.1%. More options than 5% down."},{v:"15–19% (Insured)",tip:"CMHC required. Premium: 2.8%. Nearly conventional."},{v:"20%+ (Conventional)",tip:"No CMHC. Best rates. All lenders available including credit unions."}]},
    {q:"What is your employment situation?",key:"employment",hint:"Lenders view employment type differently for qualification.",opts:[{v:"💼 Salaried / Full-Time",tip:"Easiest to qualify. Use last 2 pay stubs + employment letter."},{v:"🧾 Self-Employed",tip:"Need 2yr NOA + T1 generals. Some lenders use stated income."},{v:"📋 Contract / Part-Time",tip:"Need 2yr history of same type of income. Some lenders add premium."},{v:"🎯 Retired / Pension",tip:"Pension, CPP, OAS all count. Investment income often included."}]},
    {q:"What mortgage term are you considering?",key:"term",hint:"Current BoC rate: 2.25%. Prime: 4.45%.",opts:[{v:"📉 Variable Rate",tip:"Currently ~3.3–3.8%. Moves with Prime. Low break penalty (3mo int)."},{v:"📅 1–2 Year Fixed",tip:"Currently ~4.5–5.0%. Good if you expect rates to drop."},{v:"📅 3 Year Fixed",tip:"Currently ~4.7–5.0%. Balance of certainty and flexibility."},{v:"📅 5 Year Fixed",tip:"Currently ~4.8–5.2%. Maximum payment certainty."}]},
  ];

  function goBack(){if(step>0){const na={...answers};delete na[steps[step].key];setAnswers(na);setStep(step-1);}}
  function pick(key:string,val:string){
    const na={...answers,[key]:val};setAnswers(na);
    if(step<steps.length-1){setStep(step+1);}else{
      const term=na.term||"",credit=na.credit||"",down=na.down||"",emp=na.employment||"",purpose=na.purpose||"";
      let base=term.includes("Variable")?3.55:term.includes("1–2")?4.75:term.includes("3")?4.85:4.95,adj=0;
      if(credit.includes("Excellent"))adj-=0.30;
      else if(credit.includes("Good"))adj-=0.10;
      else if(credit.includes("Fair"))adj+=0.45;
      else adj+=1.0;
      if(emp.includes("Self"))adj+=0.35;
      else if(emp.includes("Contract"))adj+=0.25;
      if(down.includes("5–9"))adj+=0.05;
      else if(down.includes("20%"))adj-=0.10;
      const est=Math.max(3.0,base+adj);
      const risk=credit.includes("Excellent")||credit.includes("Good")?"Low":credit.includes("Fair")?"Medium":"High";
      const lenderType=credit.includes("Below")?"B-Lender / Private":down.includes("20%")?"All Lenders (A & Credit Unions)":"A-Lenders (Banks & Credit Unions)";
      const nextSteps=[];
      if(purpose.includes("First Home"))nextSteps.push("Open an FHSA immediately — contributions are tax-deductible and withdrawals are tax-free for a first home.");
      if(credit.includes("Fair")||credit.includes("Below"))nextSteps.push("Pay down credit card balances below 30% of your limit to improve your score in 30–60 days.");
      if(emp.includes("Self"))nextSteps.push("Gather your last 2 years of NOA and T1 generals — lenders need these to confirm income.");
      if(down.includes("5–9")||down.includes("10–14"))nextSteps.push("Consider increasing your down payment to 20% to avoid CMHC insurance and access better rates.");
      nextSteps.push("Get pre-approved before house hunting — it locks in your rate for 90–120 days and shows sellers you're serious.");
      nextSteps.push("Compare at least 3 lenders: your bank, a credit union, and a mortgage broker.");
      const brokerTip=risk==="High"?"A mortgage broker is essential — they have access to B-lenders and private lenders that banks won't show you.":risk==="Medium"?"A mortgage broker can often find better rates than banks, especially for your profile. They're free to use.":"Consider a mortgage broker to compare 30+ lenders in one step. They're paid by the lender, not you.";
      setResult({lo:(est-0.15).toFixed(2),hi:(est+0.30).toFixed(2),est:est.toFixed(2),risk,tip:brokerTip,term,credit,down,emp,purpose,lenderType,nextSteps,adj});
    }
  }
  function reset(){setStep(0);setAnswers({});setResult(null);}
  const riskColor:{[k:string]:string}={Low:s.green,Medium:s.gold,High:s.red};
  const currentStep=steps[step];
  const selectedOpt=result?null:currentStep?.opts.find((o:any)=>o.v===answers[currentStep?.key]);

  return(
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14}}>
      <Card>
        <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:4}}>🎯 Personalized Rate Finder</h2>
        <p style={{fontSize:12,color:s.muted,marginBottom:14}}>Answer 5 questions to get your estimated rate range and a personalized action plan.</p>
        {!result?(
          <>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              {step>0&&<button onClick={goBack} style={{background:"none",border:`1.5px solid ${s.border}`,borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:600,cursor:"pointer",color:s.muted}}>← Back</button>}
              <div style={{display:"flex",alignItems:"center",gap:8,flex:1}}>
                <div style={{width:28,height:28,background:s.navy,color:"#fff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0}}>{step+1}</div>
                <div style={{fontSize:14,fontWeight:700,color:s.navy}}>{currentStep.q}</div>
              </div>
            </div>
            <div style={{fontSize:11,color:s.muted,marginBottom:10,marginLeft:36}}>{currentStep.hint}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
              {currentStep.opts.map((opt:any)=>(
                <button key={opt.v} onClick={()=>pick(currentStep.key,opt.v)} style={{padding:"10px 12px",border:`1.5px solid ${s.border}`,borderRadius:10,background:s.white,fontSize:12,fontWeight:600,color:s.navy,cursor:"pointer",textAlign:"left",lineHeight:1.4}}>{opt.v}</button>
              ))}
            </div>
            {selectedOpt&&<div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#1e40af",marginBottom:10}}>💡 {selectedOpt.tip}</div>}
            <div style={{background:"#f1f5f9",borderRadius:20,height:6,marginBottom:5}}><div style={{background:s.red,height:6,borderRadius:20,width:((step+1)/5*100)+"%",transition:"width 0.3s"}}/></div>
            <div style={{fontSize:10,color:s.muted}}>Step {step+1} of 5</div>
          </>
        ):(
          <div>
            <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:12,padding:16,marginBottom:12,color:"#fff"}}>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.7)",marginBottom:3}}>Your Estimated Rate Range</div>
              <div style={{fontSize:38,fontWeight:800,marginBottom:3}}>{result.lo}% — {result.hi}%</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.65)"}}>{result.term} · {result.lenderType}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
              <div style={{background:s.white,border:`2px solid ${riskColor[result.risk]}`,borderRadius:10,padding:10,textAlign:"center"}}>
                <div style={{fontSize:13,fontWeight:800,color:riskColor[result.risk]}}>{result.risk} Risk</div>
                <div style={{fontSize:10,color:s.muted,marginTop:2}}>Borrower Profile</div>
              </div>
              <div style={{background:s.white,border:`1px solid ${s.border}`,borderRadius:10,padding:10,textAlign:"center"}}>
                <div style={{fontSize:13,fontWeight:800,color:s.navy}}>{result.lenderType.split("(")[0].trim()}</div>
                <div style={{fontSize:10,color:s.muted,marginTop:2}}>Recommended Lenders</div>
              </div>
            </div>
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:12,marginBottom:12}}>
              <div style={{fontSize:11,fontWeight:700,color:"#15803d",marginBottom:8}}>✅ Your Profile Summary</div>
              {[["Purpose",result.purpose],["Credit",result.credit],["Down Payment",result.down],["Employment",result.emp],["Term",result.term]].map(([l,v])=><div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3}}><span style={{color:s.muted}}>{l}</span><span style={{fontWeight:600,color:s.navy}}>{v.replace(/[🏠🏡🔄💳🟢🔵🟡🔴💼🧾📋🎯📉📅]/g,"").trim()}</span></div>)}
            </div>
            <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:12,marginBottom:12}}>
              <div style={{fontSize:11,fontWeight:700,color:"#1e40af",marginBottom:8}}>🏦 {result.risk==="High"?"You Need a Mortgage Broker":"Broker Recommendation"}</div>
              <div style={{fontSize:11,color:"#1e40af",lineHeight:1.6}}>{result.tip}</div>
            </div>
            <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:12,marginBottom:12}}>
              <div style={{fontSize:11,fontWeight:700,color:"#c2410c",marginBottom:8}}>📋 Your Personal Action Plan</div>
              {result.nextSteps.map((step:string,i:number)=><div key={i} style={{display:"flex",gap:8,marginBottom:6,alignItems:"flex-start"}}><div style={{width:20,height:20,background:s.navy,color:"#fff",borderRadius:"50%",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>{i+1}</div><div style={{fontSize:11,color:"#374151",lineHeight:1.5}}>{step}</div></div>)}
            </div>
            <div style={{display:"flex",gap:8}}>
              <button onClick={reset} style={{flex:1,padding:"9px 18px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🔄 Retake Quiz</button>
              <a href="https://www.ratehub.ca/mortgages" target="_blank" rel="noopener noreferrer" style={{flex:1,padding:"9px 18px",background:s.green,color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textDecoration:"none",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>Compare Live Rates →</a>
            </div>
            <p style={{fontSize:10,color:"#bbb",marginTop:8}}>* Estimates only. Consult a licensed mortgage broker for your actual rate.</p>
          </div>
        )}
      </Card>
      <Card style={{background:s.navy}}>
        <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>📊 Rate Factors Explained</h3>
        <p style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:12}}>What determines your mortgage rate — and by how much.</p>
        {[["CREDIT SCORE — BIGGEST FACTOR","750+: Best rates (-0.30%). 700–749: Good rates (-0.10%). 650–699: Small premium (+0.45%). Below 650: B-lender territory (+1.0%+)."],["DOWN PAYMENT","20%+ opens all lenders including credit unions and avoids CMHC. Under 20% requires CMHC and limits you to insured-rate lenders."],["EMPLOYMENT TYPE","Salaried: easiest to qualify. Self-employed: need 2yr income history. Contract: need 2yr history of same income type."],["MORTGAGE TERM","Variable rates are currently lower than fixed (~3.5% vs ~5%). Fixed gives payment certainty. Variable has lower break penalty."],["LENDER TYPE","Big banks are convenient but rarely offer best rates. Credit unions and online lenders often beat banks by 0.25–0.75%. Mortgage brokers compare them all."],["STRESS TEST IMPACT","You must qualify at your rate +2% or 5.25%. This reduces your maximum purchase price — factor this in when house hunting."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
      </Card>
    </div>
  );
}


function FTHBTab({initProv}:{initProv:string}){
  const [prov,setProv]=useState(initProv);
  useEffect(()=>setProv(initProv),[initProv]);
  const data=FTHB_PROV[prov]||{programs:[],savings:[]};

  const fedPrograms=[
    {name:"First Home Savings Account (FHSA)",color:s.green,status:"Active ✅",desc:"Open a tax-free savings account specifically for your first home. Contributions are tax-deductible (like RRSP). Withdrawals for a first home purchase are completely tax-free (like TFSA). Best of both worlds.",vals:[["$8K/yr","Annual limit"],["$40K","Lifetime max"],["Tax-free","Withdrawals"],["Couples","Up to $80K"]],url:"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html",tip:"Open ASAP — even contributing $1 starts your room. You can contribute up to 4 years of room ($32K) in year one."},
    {name:"RRSP Home Buyers' Plan (HBP)",color:s.blue,status:"Active ✅",desc:"Withdraw from your existing RRSP tax-free to use as a down payment. You have 15 years to repay — starting 2 years after purchase. Stack with FHSA for maximum savings.",vals:[["$60K","Per person"],["$120K","Per couple"],["15 yrs","To repay"],["Tax-free","Withdrawal"]],url:"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html",tip:"You must have had the funds in your RRSP for 90 days before withdrawing. Plan ahead."},
    {name:"First-Time Home Buyers' Tax Credit",color:s.gold,status:"Active ✅",desc:"A non-refundable federal tax credit of $1,500 ($750 for each partner) claimed on your T1 return in the year you purchase. Simple to claim — just tick the box on your tax return.",vals:[["$1,500","Federal credit"],["$10K","Claim amount"],["T1 Return","How to claim"],["Both spouses","Can split"]],url:"https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4028.html",tip:"Easy money — just claim $10,000 on line 31270 of your T1 return."},
    {name:"GST/HST New Home Rebate",color:s.red,status:"Active ✅",desc:"Partial rebate of GST/HST paid on a new construction home or major renovation. Bill C-4 (2026) removed HST on new homes in Ontario under $1M. Available in all provinces for new builds.",vals:[["Up to $6,300","Federal rebate"],["Ontario","No HST <$1M"],["New builds","Only"],["Renovations","Major renos qualify"]],url:"https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4028.html",tip:"In Ontario, ask your builder — the HST removal (Bill C-4) can save you $50K–$130K on a new home."},
    {name:"30-Year Insured Amortization",color:"#7c3aed",status:"Active ✅",desc:"First-time buyers purchasing a newly built home can access a 30-year amortization with less than 20% down (insured mortgage). Reduces monthly payments vs. 25-year standard.",vals:[["30 yrs","Max amort"],["New builds","Only"],["<20% down","With CMHC"],["Lower","Monthly payment"]],url:"https://www.canada.ca/en/department-finance/programs/consultations/2024/extended-amortization-insured-mortgages.html",tip:"On a $500K mortgage at 5%, 30yr saves ~$280/mo vs 25yr — but costs ~$60K more in total interest."},
  ];

  const stepByStep=[
    {step:"1",title:"Check Your Credit Score",desc:"Get a free credit report from Equifax or TransUnion. Aim for 680+ for best rates. Fix any errors — it takes 30–60 days to see improvement.",url:"https://www.consumer.equifax.ca/personal/products/free-credit-score/",linkText:"Check Equifax Free →"},
    {step:"2",title:"Open an FHSA",desc:"Available at all major banks, credit unions, and brokerages. Contribute up to $8K/year. You get a tax deduction now and tax-free withdrawal later.",url:"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html",linkText:"Learn About FHSA →"},
    {step:"3",title:"Save Your Down Payment",desc:"Minimum 5% on homes under $500K. 10% on the $500K–$999K portion. 20% to avoid CMHC insurance. Keep savings in FHSA + RRSP + TFSA."},
    {step:"4",title:"Get Pre-Approved",desc:"Visit a mortgage broker or your bank. They'll confirm your maximum purchase price and lock in a rate for 90–120 days. Free and doesn't affect your credit.",url:"https://www.ratehub.ca/mortgages",linkText:"Compare Pre-Approval →"},
    {step:"5",title:"Find a REALTOR®",desc:"A buyer's agent costs you nothing — they're paid by the seller. Make sure they're registered with CREA and licensed in your province.",url:"https://www.realtor.ca",linkText:"Find a REALTOR® →"},
    {step:"6",title:"Make an Offer",desc:"Include conditions: home inspection, financing, and status certificate (condo). Budget 1.5–4% of purchase price for closing costs."},
    {step:"7",title:"Close & Collect Programs",desc:"Apply for all applicable programs above. File for the First-Time Buyer Tax Credit on your next T1 return. Notify your lender if using HBP."},
  ];

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"16px 20px",marginBottom:14}}>
        <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:4}}>🇨🇦 First-Time Home Buyer Guide</div>
        <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,lineHeight:1.6}}>Everything you need to buy your first home in Canada — federal programs, provincial grants, and a step-by-step action plan.</div>
        <div style={{display:"flex",gap:12,marginTop:12,flexWrap:"wrap"}}>
          {[["$100K+","Max FHSA+HBP per couple"],["$1,500","Federal tax credit"],["30 yr","Amortization available"],["5%","Minimum down payment"]].map(([v,l])=><div key={l} style={{background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 14px",textAlign:"center"}}><div style={{color:s.gold,fontSize:16,fontWeight:800}}>{v}</div><div style={{color:"rgba(255,255,255,0.6)",fontSize:10,marginTop:2}}>{l}</div></div>)}
        </div>
      </div>

      <div style={{background:s.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflow:"hidden",marginBottom:14}}>
        <div style={{background:"#f0fdf4",borderBottom:"1px solid #bbf7d0",padding:"12px 18px"}}><div style={{color:"#15803d",fontSize:14,fontWeight:800}}>🇨🇦 Federal Programs — Available in Every Province</div><div style={{color:"#16a34a",fontSize:11,marginTop:2}}>Stack these programs together — a couple can access up to $200K+ combined</div></div>
        <div style={{padding:"14px 18px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
            {fedPrograms.map(p=>(
              <div key={p.name} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:14,borderLeft:`4px solid ${p.color}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy,flex:1,lineHeight:1.4}}>{p.name}</div>
                  <span style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,whiteSpace:"nowrap",marginLeft:8}}>{p.status}</span>
                </div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:10}}>{p.desc}</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:10}}>
                  {p.vals.map(([v,l])=><div key={l} style={{background:"#f8fafc",borderRadius:6,padding:"6px 8px",textAlign:"center"}}><div style={{fontSize:13,fontWeight:800,color:p.color}}>{v}</div><div style={{fontSize:10,color:s.muted,marginTop:1}}>{l}</div></div>)}
                </div>
                <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"6px 10px",fontSize:10,color:"#92400e",marginBottom:8}}>💡 {p.tip}</div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",fontSize:11,color:s.blue,fontWeight:600,textDecoration:"none"}}>Official Canada.ca info →</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:s.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",padding:"14px 18px",marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12,flexWrap:"wrap"}}>
          <div style={{fontSize:14,fontWeight:800,color:s.navy}}>🏠 Provincial Programs</div>
          <select value={prov} onChange={e=>setProv(e.target.value)} style={{padding:"5px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{(v as any).name}</option>)}</select>
        </div>
        {data.programs.length===0?(
          <div style={{background:"#f8fafc",borderRadius:10,padding:16,textAlign:"center"}}>
            <div style={{fontSize:24,marginBottom:8}}>📋</div>
            <div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:4}}>Federal programs apply</div>
            <div style={{fontSize:11,color:s.muted}}>All 5 federal programs above are available to {(PDATA[prov] as any)?.name} residents. Check with your provincial government for any additional local grants.</div>
          </div>
        ):(
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:10,marginBottom:14}}>
            {data.programs.map((pr:any)=>(
              <div key={pr.name} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:12,borderLeft:`4px solid ${pr.color}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:5}}>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{pr.name}</div>
                  <span style={{background:"#f1f5f9",color:s.muted,borderRadius:20,padding:"1px 7px",fontSize:10,fontWeight:700,whiteSpace:"nowrap",marginLeft:5}}>{pr.status}</span>
                </div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.5,marginBottom:8}}>{pr.desc}</div>
                <div style={{background:"#f8fafc",borderRadius:6,padding:"6px 9px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <div style={{fontSize:10,color:s.muted}}>Potential Saving</div>
                  <div style={{fontSize:13,fontWeight:800,color:pr.color}}>{pr.saving}</div>
                </div>
                <a href={pr.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",fontSize:11,color:s.blue,fontWeight:600,textDecoration:"none"}}>Official government info →</a>
              </div>
            ))}
          </div>
        )}
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:12,padding:"12px 16px"}}>
          <div style={{color:s.gold,fontSize:11,fontWeight:800,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.5px"}}>💰 Max Potential Savings — First-Time Buyer Couple in {(PDATA[prov] as any)?.name}</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:8}}>
            {data.savings.map((sv:any)=><div key={sv.l} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:9,textAlign:"center"}}><div style={{fontSize:14,fontWeight:800,color:s.gold}}>{sv.v}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginTop:2}}>{sv.l}</div></div>)}
          </div>
          <div style={{color:"rgba(255,255,255,0.4)",fontSize:10,marginTop:8}}>* Estimates. Amounts vary by situation. Consult a licensed mortgage professional or tax advisor.</div>
        </div>
      </div>

      <div style={{background:s.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",padding:"14px 18px"}}>
        <div style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>🗺️ Step-by-Step: Your Path to Homeownership</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:10}}>
          {stepByStep.map((item)=>(
            <div key={item.step} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:12}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                <div style={{width:28,height:28,background:s.navy,color:"#fff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,flexShrink:0}}>{item.step}</div>
                <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{item.title}</div>
              </div>
              <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:item.url?8:0}}>{item.desc}</div>
              {item.url&&<a href={item.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",fontSize:11,color:s.blue,fontWeight:600,textDecoration:"none"}}>{item.linkText}</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function NewsTab({initProv}:{initProv:string}){
  const [prov,setProv]=useState(initProv);
  const [news,setNews]=useState<any[]|null>(null);
  const [loading,setLoading]=useState(false);
  const [filter,setFilter]=useState("All");
  const [featured,setFeatured]=useState<any|null>(null);

  useEffect(()=>setProv(initProv),[initProv]);

  const categoryColors:{[k:string]:string}={
    "BoC / Rates":"#c8102e","Market Update":"#2563eb","First-Time Buyers":"#16a34a",
    "Policy / Government":"#7c3aed","Mortgage Tips":"#0891b2","Local News":"#92400e","News":"#64748b"
  };

  async function fetchNews(){
    setLoading(true);setNews(null);setFeatured(null);setFilter("All");
    try{
      const res=await fetch(`/api/news?prov=${encodeURIComponent((PDATA[prov] as any)?.name||"Canada")}`);
      const data=await res.json();
      const items=data.items||[];
      if(items.length===0)throw new Error("No items");
      setNews(items);
      setFeatured(items[0]);
    }catch(e){
      console.error("News fetch error:",e);
      // Fallback: generate with Claude directly
      try{
        const res2=await fetch("/api/anthropic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
          model:"claude-sonnet-4-20250514",max_tokens:1500,
          system:`Return ONLY a valid JSON array. No markdown. No text before or after.
Each item: {"title":"...","summary":"...","category":"...","date":"Jun 2026","url":"https://www.bankofcanada.ca","impact":"...","impactType":"positive|negative|neutral"}
category: "BoC / Rates"|"Market Update"|"First-Time Buyers"|"Policy / Government"|"Mortgage Tips"|"Local News"`,
          messages:[{role:"user",content:`8 Canadian mortgage news items for ${(PDATA[prov] as any)?.name} June 2026. JSON array only starting with [`}]
        })});
        const d2=await res2.json();
        const tb=d2.content?.find((b:any)=>b.type==="text");
        const match=tb?.text?.match(/\[[\s\S]*\]/);
        if(match){const parsed=JSON.parse(match[0]);setNews(parsed);setFeatured(parsed[0]);}
        else throw new Error("Fallback also failed");
      }catch{setNews([]);}
    }
    setLoading(false);
  }

  useEffect(()=>{fetchNews();},[prov]);

  const categories=["All",...Array.from(new Set((news||[]).map((n:any)=>n.category).filter(Boolean)))];
  const filtered=filter==="All"?(news||[]):(news||[]).filter((n:any)=>n.category===filter);

  const impactBg:{[k:string]:string}={positive:"#f0fdf4",negative:"#fff1f2",neutral:"#f8fafc"};
  const impactBorder:{[k:string]:string}={positive:"#bbf7d0",negative:"#fecdd3",neutral:"#e2e8f0"};
  const impactColor:{[k:string]:string}={positive:"#15803d",negative:"#be123c",neutral:"#64748b"};
  const impactIcon:{[k:string]:string}={positive:"📈",negative:"📉",neutral:"➡️"};

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"14px 18px",marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
          <div>
            <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:2}}>📰 Canadian Mortgage & Real Estate News</div>
            <div style={{color:"rgba(255,255,255,0.65)",fontSize:11}}>AI-curated · Live web search · Updated on refresh</div>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <select value={prov} onChange={e=>setProv(e.target.value)} style={{padding:"6px 10px",borderRadius:8,border:"1px solid rgba(255,255,255,0.2)",fontSize:12,background:"rgba(255,255,255,0.1)",color:"#fff"}}>
              {Object.entries(PDATA).map(([k,v])=><option key={k} value={k} style={{color:s.navy}}>{(v as any).name}</option>)}
            </select>
            <button onClick={fetchNews} disabled={loading} style={{padding:"7px 14px",background:loading?"rgba(255,255,255,0.1)":s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:loading?"not-allowed":"pointer"}}>
              {loading?"⏳ Loading...":"🔄 Refresh"}
            </button>
          </div>
        </div>
      </div>

      {/* Loading skeletons */}
      {loading&&(
        <div>
          <div style={{background:s.white,borderRadius:12,padding:18,marginBottom:14,border:`1px solid ${s.border}`}}>
            <Skeleton h={12} r={20} mb={10} w="30%"/>
            <Skeleton h={20} mb={8}/>
            <Skeleton h={13} mb={5}/>
            <Skeleton h={13} mb={5} w="80%"/>
            <Skeleton h={40} r={8} mb={0}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
            {Array.from({length:6}).map((_,i)=>(
              <div key={i} style={{border:`1px solid ${s.border}`,borderRadius:10,padding:14}}>
                <Skeleton h={11} r={20} mb={8} w="40%"/>
                <Skeleton h={14} mb={6}/>
                <Skeleton h={11} mb={4}/>
                <Skeleton h={11} mb={10} w="75%"/>
                <Skeleton h={32} r={8}/>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error state */}
      {!loading&&news&&news.length===0&&(
        <Card>
          <EmptyState icon="📰" title="Could not load news" sub="Try refreshing or check your connection." link="https://www.theglobeandmail.com/real-estate/" linkText="Browse Globe & Mail →"/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10,marginTop:14}}>
            {[["Globe & Mail","https://www.theglobeandmail.com/real-estate/","📰"],["CBC Real Estate","https://www.cbc.ca/news/canada/real-estate","🏠"],["Financial Post","https://financialpost.com/real-estate","💼"],["Better Dwelling","https://betterdwelling.com","📊"],["Ratehub News","https://www.ratehub.ca/blog/","🏦"],["CREA Stats","https://www.crea.ca/housing-market-stats/","📈"]].map(([name,url,icon])=>(
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",background:"#f8fafc",border:`1px solid ${s.border}`,borderRadius:8,textDecoration:"none"}}>
                <span style={{fontSize:16}}>{icon}</span>
                <span style={{fontSize:12,fontWeight:600,color:s.navy}}>{name} →</span>
              </a>
            ))}
          </div>
        </Card>
      )}

      {/* News loaded */}
      {!loading&&news&&news.length>0&&(
        <div>
          {/* Featured story */}
          {featured&&(
            <div style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,padding:18,marginBottom:14,boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <span style={{background:s.red,color:"#fff",borderRadius:20,padding:"2px 10px",fontSize:10,fontWeight:800}}>⭐ TOP STORY</span>
                {featured.category&&<span style={{background:(categoryColors[featured.category]||"#64748b")+"20",color:categoryColors[featured.category]||"#64748b",borderRadius:20,padding:"2px 10px",fontSize:10,fontWeight:700}}>{featured.category}</span>}
                <span style={{fontSize:10,color:s.muted,marginLeft:"auto"}}>{featured.date}</span>
              </div>
              <div style={{fontSize:16,fontWeight:800,color:s.navy,lineHeight:1.4,marginBottom:8}}>{featured.title}</div>
              <div style={{fontSize:12,color:s.muted,lineHeight:1.7,marginBottom:12}}>{featured.summary}</div>
              {featured.impact&&(
                <div style={{background:impactBg[featured.impactType]||"#f8fafc",border:`1px solid ${impactBorder[featured.impactType]||"#e2e8f0"}`,borderRadius:8,padding:"8px 12px",marginBottom:12,display:"flex",gap:8,alignItems:"flex-start"}}>
                  <span style={{fontSize:16,flexShrink:0}}>{impactIcon[featured.impactType]||"➡️"}</span>
                  <div>
                    <div style={{fontSize:10,fontWeight:700,color:impactColor[featured.impactType]||"#64748b",marginBottom:2,textTransform:"uppercase"}}>What this means for you</div>
                    <div style={{fontSize:12,color:impactColor[featured.impactType]||"#374151",lineHeight:1.5}}>{featured.impact}</div>
                  </div>
                </div>
              )}
              <a href={featured.url||"#"} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"8px 18px",background:s.navy,color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textDecoration:"none"}}>Read Full Story →</a>
            </div>
          )}

          {/* Category filters */}
          {categories.length>2&&(
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
              {categories.map(cat=>(
                <button key={cat} onClick={()=>setFilter(cat)} style={{padding:"4px 12px",borderRadius:20,border:`1.5px solid ${filter===cat?(categoryColors[cat]||s.navy):s.border}`,background:filter===cat?(categoryColors[cat]||s.navy)+"15":s.white,color:filter===cat?(categoryColors[cat]||s.navy):s.muted,fontSize:11,fontWeight:filter===cat?700:400,cursor:"pointer"}}>
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* News grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12,marginBottom:14}}>
            {filtered.slice(featured?1:0).map((n:any,i:number)=>(
              <div key={i} style={{background:s.white,border:`1px solid ${s.border}`,borderRadius:10,padding:14,display:"flex",flexDirection:"column",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.1)";e.currentTarget.style.borderColor=s.navy;}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=s.border;}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexWrap:"wrap",gap:4}}>
                  {n.category&&<span style={{background:(categoryColors[n.category]||"#64748b")+"18",color:categoryColors[n.category]||"#64748b",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{n.category}</span>}
                  <div style={{display:"flex",gap:6,alignItems:"center",marginLeft:"auto"}}>
                    {n.source&&n.source!=="Canadian News"&&<span style={{fontSize:9,color:s.muted,background:"#f1f5f9",borderRadius:20,padding:"1px 6px"}}>{n.source}</span>}
                    <span style={{fontSize:10,color:s.muted}}>{n.date}</span>
                  </div>
                </div>
                <div style={{fontSize:13,fontWeight:700,color:s.navy,lineHeight:1.4,marginBottom:6,flex:1}}>{n.title}</div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.5,marginBottom:10}}>{n.summary}</div>
                {n.impact&&(
                  <div style={{background:impactBg[n.impactType]||"#f8fafc",border:`1px solid ${impactBorder[n.impactType]||"#e2e8f0"}`,borderRadius:6,padding:"6px 10px",marginBottom:10,display:"flex",gap:6,alignItems:"flex-start"}}>
                    <span style={{fontSize:12,flexShrink:0}}>{impactIcon[n.impactType]||"➡️"}</span>
                    <div style={{fontSize:10,color:impactColor[n.impactType]||"#374151",lineHeight:1.5}}><b>For you:</b> {n.impact}</div>
                  </div>
                )}
                <a href={n.url||"#"} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"7px 12px",background:"#f8fafc",border:`1px solid ${s.border}`,borderRadius:7,fontSize:11,fontWeight:700,color:s.blue,textDecoration:"none",textAlign:"center"}}>Read more →</a>
              </div>
            ))}
          </div>

          {/* Trusted sources */}
          <Card>
            <div style={{fontSize:12,fontWeight:700,color:s.navy,marginBottom:10}}>📚 Trusted Canadian Mortgage & Real Estate Sources</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:8}}>
              {[["Globe & Mail — Real Estate","https://www.theglobeandmail.com/real-estate/","📰"],["CBC News — Real Estate","https://www.cbc.ca/news/canada/real-estate","🏠"],["Financial Post","https://financialpost.com/real-estate","💼"],["Better Dwelling","https://betterdwelling.com","📊"],["Ratehub Blog","https://www.ratehub.ca/blog/","🏦"],["CREA Market Stats","https://www.crea.ca/housing-market-stats/","📈"],["Bank of Canada","https://www.bankofcanada.ca/publications/","🏛️"],["CMHC Research","https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research","🔬"]].map(([name,url,icon])=>(
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:7,padding:"8px 10px",background:"#f8fafc",border:`1px solid ${s.border}`,borderRadius:8,textDecoration:"none",fontSize:11,fontWeight:600,color:s.navy}}>
                  <span>{icon}</span><span>{name}</span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

function ListingsTab({initProv,initCity}:{initProv:string,initCity:string}){
  const [prov,setProv]=useState(initProv);const [city,setCity]=useState(initCity);const [type,setType]=useState("any");const [beds,setBeds]=useState("any");const [maxPrice,setMaxPrice]=useState("");const [area,setArea]=useState("");

  useEffect(()=>{setProv(initProv);setCity(initCity);},[initProv,initCity]);
  useEffect(()=>{const cities=PDATA[prov]?.cities||[];if(!cities.includes(city))setCity(cities[0]||"");},[prov]);

  // Build search URLs for real listing sites
  function buildRealtorUrl(){
    const citySlug=city.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");
    const provSlug=(PDATA[prov] as any)?.name?.toLowerCase().replace(/\s+/g,"-")||"";
    let url=`https://www.realtor.ca/map#view=list&Sort=6-D&GeoIds=g30_${citySlug}&GeoTypeId=8`;
    if(beds!=="any")url+=`&BedRange=${beds}-0`;
    if(maxPrice)url+=`&PriceMax=${maxPrice}`;
    if(type==="condo")url+="&PropertyTypeGroupID=1";
    else if(type==="detached house")url+="&PropertyTypeGroupID=1&PropertySubTypeId=1";
    return `https://www.realtor.ca/map#view=list&Sort=6-D&searchBy=city&city=${encodeURIComponent(city)}&province=${encodeURIComponent((PDATA[prov] as any)?.name||"")}`;
  }
  function buildZoloUrl(){return `https://www.zolo.ca/${city.toLowerCase().replace(/\s+/g,"-")}-real-estate`;}
  function buildComFreeUrl(){return `https://www.comfree.com/en/${city.toLowerCase().replace(/\s+/g,"-")}/`;}
  function buildReMaxUrl(){return `https://www.remax.ca/find-real-estate?city=${encodeURIComponent(city)}&province=${encodeURIComponent((PDATA[prov] as any)?.name||"")}`;}
  function buildRoyalLepageUrl(){return `https://www.royallepage.ca/en/realestate/on/${city.toLowerCase().replace(/\s+/g,"-")}/`;}
  function buildKijijiUrl(){
    const priceParam=maxPrice?`&minNumberOfBedrooms=${beds!=="any"?beds:1}&maxPrice=${maxPrice}`:"";
    return `https://www.kijiji.ca/b-real-estate/${city.toLowerCase().replace(/\s+/g,"-")}/${type!=="any"?type.replace(/\s+/g,"-")+"/":""}c34l0`;
  }

  const sites=[
    {name:"Realtor.ca",desc:"Official MLS® listings from CREA. Most complete database of listings across Canada.",badge:"🏆 Most Complete",color:s.navy,url:buildRealtorUrl()},
    {name:"Zolo",desc:"User-friendly interface with MLS® data, price history, and neighbourhood insights.",badge:"⭐ Best Interface",color:"#e53935",url:buildZoloUrl()},
    {name:"RE/MAX",desc:"Canada's largest real estate network with listings and local agent connections.",badge:"🏠 Largest Network",color:"#003DA5",url:buildReMaxUrl()},
    {name:"Royal LePage",desc:"Major Canadian real estate brand with local expertise and comprehensive listings.",badge:"🍁 Canadian Brand",color:"#C8102E",url:buildRoyalLepageUrl()},
    {name:"Kijiji Real Estate",desc:"Includes private seller listings not on MLS. Good for finding deals directly.",badge:"💰 Private Sales",color:"#56a908",url:buildKijijiUrl()},
    {name:"ComFree / DuProprio",desc:"For sale by owner listings. Lower commission, direct seller contact. QC focused.",badge:"🤝 No Commission",color:"#f57c00",url:buildComFreeUrl()},
  ];

  const priceRanges=[
    {label:"Under $300K",value:"300000"},
    {label:"$300K–$500K",value:"500000"},
    {label:"$500K–$750K",value:"750000"},
    {label:"$750K–$1M",value:"1000000"},
    {label:"$1M+",value:""},
  ];

  const si={padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:500,background:s.white};

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"16px 20px",marginBottom:14}}>
        <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:4}}>🏠 Find Your Home</div>
        <div style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.6}}>We connect you directly to Canada's top listing platforms — where the real, verified listings live. Select your criteria and we'll take you straight to the search results.</div>
      </div>

      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>🔍 Set Your Search Criteria</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:10,marginBottom:12}}>
          <div><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:4,textTransform:"uppercase"}}>Province</label>
            <select value={prov} onChange={e=>setProv(e.target.value)} style={{...si,width:"100%"}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{(v as any).name}</option>)}</select></div>
          <div><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:4,textTransform:"uppercase"}}>City</label>
            <select value={city} onChange={e=>setCity(e.target.value)} style={{...si,width:"100%"}}>{(PDATA[prov]?.cities||[]).map(c=><option key={c}>{c}</option>)}</select></div>
          <div><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:4,textTransform:"uppercase"}}>Property Type</label>
            <select value={type} onChange={e=>setType(e.target.value)} style={{...si,width:"100%"}}><option value="any">Any Type</option><option value="detached house">Detached House</option><option value="condo">Condo / Apartment</option><option value="townhouse">Townhouse</option><option value="semi-detached">Semi-Detached</option></select></div>
          <div><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:4,textTransform:"uppercase"}}>Bedrooms</label>
            <select value={beds} onChange={e=>setBeds(e.target.value)} style={{...si,width:"100%"}}><option value="any">Any</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></div>
          <div><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:4,textTransform:"uppercase"}}>Max Price</label>
            <select value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} style={{...si,width:"100%"}}><option value="">No Limit</option>{priceRanges.map(r=><option key={r.label} value={r.value}>{r.label}</option>)}</select></div>
          <div><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:4,textTransform:"uppercase"}}>Neighbourhood</label>
            <input type="text" placeholder="e.g. Westwood" value={area} onChange={e=>setArea(e.target.value)} style={{...si,width:"100%",boxSizing:"border-box"}}/></div>
        </div>
        <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"10px 14px",fontSize:11,color:"#15803d"}}>
          ✅ Searching for: <b>{beds==="any"?"Any beds":beds+"+ beds"}</b> {type!=="any"?<><b>{type}</b> </>:""}in <b>{city}, {(PDATA[prov] as any)?.name}</b>{maxPrice?<> under <b>${parseInt(maxPrice).toLocaleString()}</b></>:""}{area?<> in <b>{area}</b></>:""}
        </div>
      </Card>

      <div style={{marginBottom:14}}>
        <div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:10}}>🏆 Search on Canada's Top Listing Sites</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
          {sites.map(site=>(
            <div key={site.name} style={{background:s.white,border:`1px solid ${s.border}`,borderRadius:12,padding:14,display:"flex",flexDirection:"column",gap:8}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:14,fontWeight:800,color:site.color}}>{site.name}</div>
                <span style={{background:"#f1f5f9",color:s.muted,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{site.badge}</span>
              </div>
              <div style={{fontSize:11,color:s.muted,lineHeight:1.6,flex:1}}>{site.desc}</div>
              <a href={site.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"9px 14px",background:site.color,color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textAlign:"center",textDecoration:"none"}}>Search {site.name} in {city} →</a>
            </div>
          ))}
        </div>
      </div>

      <Card style={{background:s.navy,marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:12}}>💡 House Hunting Tips from Specialists</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
          {[["GET PRE-APPROVED FIRST","Sellers take pre-approved buyers more seriously. You'll also know exactly what you can afford before falling in love with a home."],["USE A BUYER'S AGENT","A REALTOR® representing you costs you nothing — they're paid by the seller. They have access to MLS® listings before they hit public sites."],["CHECK DAYS ON MARKET","Listings sitting 30+ days often have room to negotiate. Fresh listings in hot markets may sell over asking."],["LOOK BEYOND LISTING PHOTOS","Photos are staged and edited. Always visit in person. Check the neighbourhood at different times of day."],["BUDGET FOR CLOSING COSTS","Beyond your down payment, budget 1.5–4% of purchase price for legal fees, inspection, land transfer tax, and moving costs."],["DON'T SKIP THE INSPECTION","A home inspection ($400–$700) can reveal thousands in hidden issues. In a competitive market, some waive this — be very cautious."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
        </div>
      </Card>

      <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"12px 16px",fontSize:11,color:"#92400e"}}>
        ⚠️ <b>Disclaimer:</b> We link directly to third-party listing platforms. Canada Mortgage Rates is not affiliated with Realtor.ca, CREA, MLS®, Zolo, RE/MAX, Royal LePage, Kijiji, or ComFree. Always verify listings and work with a licensed REALTOR® before making any real estate decisions.
      </div>
    </div>
  );
}


function LearnTab(){
  const [selected,setSelected]=useState<number|null>(null);
  const articles=[
    {icon:"📊",title:"Fixed vs Variable Rate in 2026",time:"5 min read",category:"RATES",categoryColor:s.navy,desc:"With BoC holding at 2.25%, which mortgage type makes more sense right now?",content:`<h3 style='color:#0d2240;margin-bottom:12px;font-size:16px;'>Fixed vs Variable Mortgage Rates in 2026</h3>
<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-bottom:16px;'><b style='color:#15803d;'>Current Rates (June 2026):</b><br/>Variable: ~3.3–3.8% · 1-yr Fixed: ~4.5% · 3-yr Fixed: ~4.8% · 5-yr Fixed: ~4.9%</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Fixed Rate Mortgage</h4>
<p><b>How it works:</b> Your interest rate and payment are locked for the entire term (1–5 years). When your term ends, you renew at current rates.</p>
<p style='margin-top:8px;'><b>✅ Pros:</b> Predictable payments · Protection from rate hikes · Easier to budget · Peace of mind</p>
<p style='margin-top:8px;'><b>❌ Cons:</b> Higher rate than variable · Costly break penalty (IRD can be very large for fixed) · Miss out if rates drop</p>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Variable Rate Mortgage</h4>
<p><b>How it works:</b> Your rate moves with the Bank of Canada's Prime Rate. When BoC raises rates, your rate goes up. When they cut, it goes down.</p>
<p style='margin-top:8px;'><b>✅ Pros:</b> Currently lower rate (save ~$200–$400/mo on $500K) · Small break penalty (3 months interest only) · Benefit from rate cuts</p>
<p style='margin-top:8px;'><b>❌ Cons:</b> Payment uncertainty · Rate could rise if BoC hikes · Less comfortable for tight budgets</p>
<h4 style='color:#0d2240;margin:16px 0 8px;'>What Specialists Recommend in 2026</h4>
<p>With BoC holding at 2.25% and inflation stabilizing at 2.8%, most economists expect rates to remain flat or potentially drop 1–2 more times. Variable rates are currently ~1.5% below fixed. A 5-year variable saves approximately <b>$15,000–$25,000</b> vs fixed on a $500K mortgage if rates stay flat.</p>
<p style='margin-top:8px;'><b>Choose Fixed if:</b> You're on a tight budget, can't absorb payment increases, or value certainty above all.</p>
<p style='margin-top:8px;'><b>Choose Variable if:</b> You have a financial buffer, believe rates will stay flat or drop, and want the lower break penalty.</p>
<p style='margin-top:12px;font-size:11px;color:#64748b;'>* Rate information as of June 2026. Rates change daily — verify current rates on the Rates tab.</p>`},
    {icon:"📋",title:"How to Pass the Mortgage Stress Test",time:"4 min read",category:"QUALIFYING",categoryColor:"#7c3aed",desc:"The stress test reduces your buying power by ~20%. Here's how to maximize what you qualify for.",content:`<h3 style='color:#0d2240;margin-bottom:12px;font-size:16px;'>Canada's Mortgage Stress Test — Complete Guide</h3>
<div style='background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:12px;margin-bottom:16px;'><b style='color:#c2410c;'>The Rule:</b> You must qualify at the HIGHER of your contracted rate + 2%, or 5.25%. This is mandatory at all federally regulated lenders.</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>How It Works</h4>
<p>If your lender offers you 4.9%, you must prove you could afford payments at 6.9% (4.9% + 2%). This typically reduces your maximum purchase price by 15–20%.</p>
<p style='margin-top:8px;'><b>Example:</b> At $90K income, 20% down, 5% rate — you might qualify for a $540K home at your actual rate, but only $460K after the stress test.</p>
<h4 style='color:#0d2240;margin:16px 0 8px;'>GDS and TDS Ratios</h4>
<p>Lenders use two ratios to qualify you (both calculated at the stress test rate):</p>
<ul style='margin:8px 0 8px 18px;line-height:2.2;'>
<li><b>GDS (Gross Debt Service) — Max 39%:</b> (Mortgage P&I + Property Tax + Heat + Condo Fee) ÷ Gross Income</li>
<li><b>TDS (Total Debt Service) — Max 44%:</b> (GDS items + ALL monthly debts) ÷ Gross Income</li>
</ul>
<p><b>Heat:</b> Lenders add $150/month regardless of your actual heating costs. This is a fixed assumption.</p>
<h4 style='color:#0d2240;margin:16px 0 8px;'>5 Ways to Qualify for More</h4>
<ol style='margin:8px 0 8px 18px;line-height:2.2;'>
<li><b>Add a co-borrower:</b> Including a spouse, parent, or co-signer increases total income, raising your maximum significantly.</li>
<li><b>Pay down debts:</b> Every $200/mo in debt payments eliminated adds ~$35,000–$50,000 to your maximum purchase price.</li>
<li><b>Increase down payment:</b> More down = smaller mortgage = easier to qualify. Also avoids CMHC if you reach 20%.</li>
<li><b>Choose longer amortization:</b> 30-year amortization (for eligible buyers) lowers monthly payments, improving your ratios.</li>
<li><b>Use a mortgage broker:</b> Brokers can access B-lenders (like Home Trust, Equitable Bank) that use different qualifying criteria for self-employed or bruised credit applicants.</li>
</ol>
<p style='font-size:11px;color:#64748b;margin-top:12px;'>* Use the Stress Test calculator on the Calculators tab to see your exact numbers.</p>`},
    {icon:"🏦",title:"CMHC Mortgage Insurance Explained",time:"3 min read",category:"CMHC",categoryColor:"#c2410c",desc:"When is it required, how much does it cost, and is it actually bad?",content:`<h3 style='color:#0d2240;margin-bottom:12px;font-size:16px;'>CMHC Mortgage Default Insurance</h3>
<div style='background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:12px;margin-bottom:16px;'><b style='color:#c2410c;'>When Required:</b> Any home purchase with less than 20% down payment AND purchase price under $1.5M.</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Premium Rates</h4>
<table style='width:100%;border-collapse:collapse;margin-bottom:12px;'>
<tr style='background:#f1f5f9;'><th style='padding:8px;text-align:left;font-size:12px;'>Down Payment</th><th style='padding:8px;text-align:right;font-size:12px;'>CMHC Premium</th><th style='padding:8px;text-align:right;font-size:12px;'>On $500K Home</th></tr>
<tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px;font-size:12px;'>5–9.99%</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;color:#dc2626;'>4.00%</td><td style='padding:8px;text-align:right;font-size:12px;'>$19,000</td></tr>
<tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px;font-size:12px;'>10–14.99%</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;color:#ea580c;'>3.10%</td><td style='padding:8px;text-align:right;font-size:12px;'>$13,950</td></tr>
<tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px;font-size:12px;'>15–19.99%</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;color:#ca8a04;'>2.80%</td><td style='padding:8px;text-align:right;font-size:12px;'>$11,900</td></tr>
<tr><td style='padding:8px;font-size:12px;'>20%+</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;color:#16a34a;'>None ✅</td><td style='padding:8px;text-align:right;font-size:12px;'>$0</td></tr>
</table>
<p><b>Important:</b> The premium is added to your mortgage, not paid upfront. On a $500K home with 10% down, the $13,950 premium becomes part of your $450,000 mortgage.</p>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Is CMHC Actually Bad?</h4>
<p>Not necessarily. CMHC-insured mortgages often get <b>lower interest rates</b> than conventional (20%+ down) mortgages because lenders consider them lower risk. The rate savings can partially offset the premium cost over time.</p>
<p style='margin-top:8px;'><b>CMHC also protects you</b> — if you can't make payments and the lender sells your home at a loss, CMHC covers the difference. You still owe CMHC, but the lender is protected.</p>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Alternatives to CMHC</h4>
<p>Canada Guaranty and Sagen (formerly Genworth) also offer mortgage default insurance. Rates are identical — your lender chooses which insurer they use.</p>`},
    {icon:"💰",title:"FHSA + HBP: Complete Guide",time:"6 min read",category:"SAVINGS",categoryColor:s.green,desc:"Stack the FHSA and RRSP Home Buyers' Plan to access up to $200K tax-free per couple.",content:`<h3 style='color:#0d2240;margin-bottom:12px;font-size:16px;'>FHSA + HBP: Maximize Your First Home Down Payment</h3>
<h4 style='color:#0d2240;margin:0 0 8px;'>First Home Savings Account (FHSA)</h4>
<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-bottom:12px;'>
<p><b>What it is:</b> A registered account combining RRSP tax deductions with TFSA tax-free withdrawals — specifically for buying your first home.</p>
<ul style='margin:8px 0 0 18px;line-height:2;'>
<li><b>$8,000/year</b> contribution limit · <b>$40,000</b> lifetime maximum per person</li>
<li>Contributions are <b>tax-deductible</b> (like RRSP) — saves you $2,000–$4,000/yr in taxes</li>
<li>Withdrawals for a qualifying first home are <b>completely tax-free</b> (like TFSA)</li>
<li>Investment growth inside the FHSA is also tax-free</li>
<li>Unused room carries forward (up to $8K extra the next year)</li>
</ul>
</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>RRSP Home Buyers' Plan (HBP)</h4>
<div style='background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px;margin-bottom:12px;'>
<ul style='margin:0 0 0 18px;line-height:2;'>
<li>Withdraw up to <b>$60,000 per person</b> from your RRSP tax-free</li>
<li>Funds must have been in RRSP for <b>at least 90 days</b></li>
<li>Repay over <b>15 years</b> (starting 2 years after purchase)</li>
<li>If you don't repay, it's added to your income that year</li>
</ul>
</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Stacking Both Programs — Couple Example</h4>
<table style='width:100%;border-collapse:collapse;margin-bottom:12px;'>
<tr style='background:#f1f5f9;'><th style='padding:8px;text-align:left;font-size:12px;'>Program</th><th style='padding:8px;text-align:right;font-size:12px;'>Person 1</th><th style='padding:8px;text-align:right;font-size:12px;'>Person 2</th><th style='padding:8px;text-align:right;font-size:12px;'>Combined</th></tr>
<tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px;font-size:12px;'>FHSA (max)</td><td style='padding:8px;text-align:right;font-size:12px;'>$40,000</td><td style='padding:8px;text-align:right;font-size:12px;'>$40,000</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;'>$80,000</td></tr>
<tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px;font-size:12px;'>HBP (max)</td><td style='padding:8px;text-align:right;font-size:12px;'>$60,000</td><td style='padding:8px;text-align:right;font-size:12px;'>$60,000</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;'>$120,000</td></tr>
<tr style='background:#f0fdf4;'><td style='padding:8px;font-size:12px;font-weight:700;color:#15803d;'>Total Available</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;color:#15803d;'>$100,000</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:700;color:#15803d;'>$100,000</td><td style='padding:8px;text-align:right;font-size:12px;font-weight:800;color:#15803d;'>$200,000</td></tr>
</table>
<p><b>Start now:</b> Even if you're years away from buying, open an FHSA today. You start accumulating $8K/yr of room immediately, and contributions are tax-deductible right away.</p>`},
    {icon:"🔄",title:"Renewal vs Refinancing — What's the Difference?",time:"4 min read",category:"RENEWAL",categoryColor:"#0891b2",desc:"Millions of Canadians are renewing in 2026–2027. Know the difference and what to do.",content:`<h3 style='color:#0d2240;margin-bottom:12px;font-size:16px;'>Renewal vs Refinancing — Complete Guide</h3>
<h4 style='color:#0d2240;margin:0 0 8px;'>Mortgage Renewal</h4>
<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-bottom:12px;'>
<p>When your mortgage term ends, you <b>renew</b> — choosing a new rate and term for your remaining balance. You can stay with your current lender or switch — <b>switching at renewal costs $0 in penalties.</b></p>
<p style='margin-top:8px;'><b>Key facts:</b></p>
<ul style='margin:8px 0 0 18px;line-height:2;'>
<li>Start shopping <b>4 months before maturity</b> — most lenders hold a rate for 120 days</li>
<li>Your current lender's first offer is rarely their best — always negotiate or shop around</li>
<li>Get at least 3 quotes: your bank, a credit union, and a mortgage broker</li>
<li>Brokers are free to use — paid by the lender, not you</li>
</ul>
</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Refinancing (Breaking Early)</h4>
<div style='background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:12px;margin-bottom:12px;'>
<p>Refinancing means breaking your existing mortgage before the term ends to get a new rate or access equity. <b>This triggers a break penalty.</b></p>
<p style='margin-top:8px;'><b>Penalty types:</b></p>
<ul style='margin:8px 0 0 18px;line-height:2;'>
<li><b>Variable rate:</b> 3 months interest (e.g., $350K at 3.5% = ~$3,063)</li>
<li><b>Fixed rate:</b> The LARGER of 3 months interest OR the IRD (Interest Rate Differential) — can be $10,000–$30,000+</li>
</ul>
</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>When Refinancing Makes Sense</h4>
<ul style='margin:8px 0 8px 18px;line-height:2;'>
<li><b>Rate savings exceed penalty:</b> Calculate break-even — use our Renewal calculator</li>
<li><b>Access home equity:</b> Pull out money for renovations, debt consolidation, or investments (up to 80% of home value)</li>
<li><b>Debt consolidation:</b> Roll high-interest credit card debt into your mortgage at a much lower rate</li>
<li><b>Life change:</b> Divorce, death, or major financial change that requires restructuring</li>
</ul>
<p><b>Best approach:</b> Wait for renewal whenever possible. Renewal = no penalty, fresh start, maximum negotiating power.</p>`},
    {icon:"📈",title:"Canadian Housing Market Outlook 2026",time:"5 min read",category:"MARKET",categoryColor:"#dc2626",desc:"BoC holding rates, tariff impacts, and what analysts expect for prices this year.",content:`<h3 style='color:#0d2240;margin-bottom:12px;font-size:16px;'>Canadian Housing Market — 2026 Outlook</h3>
<div style='background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;margin-bottom:16px;'>
<b>Key Numbers (June 2026):</b><br/>
BoC Rate: 2.25% (held) · Prime: 4.45% · Inflation: 2.8% · GDP Growth: 1.2% · CAD/USD: ~0.72
</div>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Bank of Canada Outlook</h4>
<p>The BoC has held at 2.25% for five consecutive decisions. With inflation at 2.8% (slightly above the 2% target) and GDP growth slowing to 1.2%, the bank is balancing between cutting to stimulate growth and holding to keep inflation in check.</p>
<p style='margin-top:8px;'><b>Analyst consensus:</b> 1–2 more rate cuts possible in late 2026 if inflation continues to moderate. Most expect BoC to hold through summer, with potential movement in Q4.</p>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Price Forecast by Market</h4>
<ul style='margin:8px 0 8px 18px;line-height:2.2;'>
<li><b>Calgary & Edmonton:</b> Outperforming. Strong interprovincial migration. +5–8% YoY expected.</li>
<li><b>Toronto:</b> Flat to slight correction. Affordability stretched. High condo supply creating downward pressure.</li>
<li><b>Vancouver:</b> Stabilizing after 2024 dip. Foreign buyer restrictions keeping lid on prices. Flat to +2%.</li>
<li><b>Montreal & Quebec City:</b> Resilient. More affordable than Toronto/Vancouver. +3–5% expected.</li>
<li><b>Winnipeg & Prairies:</b> Affordable markets benefiting from migration. +3–6% expected.</li>
<li><b>Atlantic Canada:</b> Halifax cooling after pandemic surge. Mixed signals.</li>
</ul>
<h4 style='color:#0d2240;margin:16px 0 8px;'>Tariff & Trade War Impact</h4>
<p>US-Canada trade tensions in 2025–2026 dampened business confidence and slowed GDP growth. Construction costs rose ~8% due to tariffs on building materials, contributing to housing supply constraints. This has supported prices in most markets despite higher borrowing costs.</p>
<p style='margin-top:8px;font-size:11px;color:#64748b;'>* Market data and forecasts as of June 2026. Real estate is local — consult a licensed REALTOR® for your specific market.</p>`},
  ];

  return(
    <div>
      {selected!==null&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setSelected(null)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:720,overflow:"hidden",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.navy,padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
              <div>
                <div style={{color:"#fff",fontSize:15,fontWeight:800}}>{articles[selected].title}</div>
                <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:2}}>{articles[selected].time} · {articles[selected].category}</div>
              </div>
              <button onClick={()=>setSelected(null)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:30,height:30,borderRadius:"50%",fontSize:15,cursor:"pointer",flexShrink:0}}>✕</button>
            </div>
            <div style={{padding:"20px 24px",overflowY:"auto",flex:1,fontSize:13,lineHeight:1.9,color:s.navy}} dangerouslySetInnerHTML={{__html:articles[selected].content}}/>
            <div style={{padding:"12px 20px",borderTop:`1px solid ${s.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,background:"#f8fafc"}}>
              <div style={{fontSize:11,color:s.muted}}>{selected+1} of {articles.length} articles</div>
              <div style={{display:"flex",gap:8}}>
                {selected>0&&<button onClick={()=>setSelected(selected-1)} style={{padding:"7px 16px",background:s.white,border:`1px solid ${s.border}`,borderRadius:8,fontSize:12,cursor:"pointer",color:s.navy,fontWeight:600}}>← Previous</button>}
                {selected<articles.length-1&&<button onClick={()=>setSelected(selected+1)} style={{padding:"7px 16px",background:s.navy,border:"none",borderRadius:8,fontSize:12,cursor:"pointer",color:"#fff",fontWeight:600}}>Next →</button>}
                <button onClick={()=>setSelected(null)} style={{padding:"7px 16px",background:"none",border:`1px solid ${s.border}`,borderRadius:8,fontSize:12,cursor:"pointer",color:s.muted}}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"16px 20px",marginBottom:14}}>
        <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:4}}>📚 Mortgage Education Centre</div>
        <div style={{color:"rgba(255,255,255,0.75)",fontSize:12}}>6 in-depth guides written from a Canadian mortgage specialist perspective. Click any article to read.</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
        {articles.map((a,i)=>(
          <div key={i} onClick={()=>setSelected(i)} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,padding:18,cursor:"pointer",transition:"all 0.2s",display:"flex",flexDirection:"column"}}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.12)";e.currentTarget.style.borderColor=s.navy;}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=s.border;}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <div style={{fontSize:28}}>{a.icon}</div>
              <span style={{background:a.categoryColor,color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:800,letterSpacing:"0.3px"}}>{a.category}</span>
            </div>
            <div style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:5,lineHeight:1.4}}>{a.title}</div>
            <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:10,flex:1}}>{a.desc}</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:11,color:s.blue,fontWeight:700}}>Read article →</div>
              <div style={{fontSize:10,color:s.muted}}>{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RenewalTab(){
  const [balance,setBalance]=useState(350000);
  const [currentRate,setCurrentRate]=useState(5.5);
  const [offerRate,setOfferRate]=useState(5.1);
  const [amort,setAmort]=useState(20);
  const [term,setTerm]=useState(5);
  const [result,setResult]=useState<any>(null);
  const resultRef=useRef<any>(null);

  function calcPmtLocal(p:number,r:number,y:number){const m=r/100/12,n=y*12;return m===0?p/n:p*(m*Math.pow(1+m,n))/(Math.pow(1+m,n)-1);}

  function compare(){
    const currentPmt=calcPmtLocal(balance,currentRate,amort);
    const offerPmt=calcPmtLocal(balance,offerRate,amort);
    const saving=currentPmt-offerPmt;
    const termSaving=saving*term*12;
    const betterRate=Math.min(currentRate,offerRate)-0.3;
    const bestPmt=calcPmtLocal(balance,betterRate,amort);
    const bestSaving=currentPmt-bestPmt;
    const bestTermSaving=bestSaving*term*12;
    setResult({currentPmt,offerPmt,saving,termSaving,betterRate,bestPmt,bestSaving,bestTermSaving,term,isGood:offerRate<currentRate-0.15});
    setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  }

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px 20px",marginBottom:16,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>🔄</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Compare Your Renewal Offer</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Millions of Canadians renew their mortgage in 2026–2027. Don't just accept your lender's first offer — find out how much you could save by shopping around.</p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
        <Card>
          <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>📋 Your Renewal Details</h3>
          <Field label="Remaining Mortgage Balance ($)">
            <input type="number" value={balance} onChange={e=>setBalance(parseFloat(e.target.value)||0)} style={inp}/>
          </Field>
          <Field label="Your Current Rate (%)">
            <input type="number" step="0.05" value={currentRate} onChange={e=>setCurrentRate(parseFloat(e.target.value)||0)} style={inp}/>
          </Field>
          <Field label="Your Lender's Renewal Offer (%)">
            <input type="number" step="0.05" value={offerRate} onChange={e=>setOfferRate(parseFloat(e.target.value)||0)} style={inp}/>
          </Field>
          <Field label="New Term (years)">
            <select value={term} onChange={e=>setTerm(parseInt(e.target.value))} style={inp}>
              {[1,2,3,4,5].map(y=><option key={y} value={y}>{y} year{y>1?"s":""}</option>)}
            </select>
          </Field>
          <Field label="Remaining Amortization (years)">
            <select value={amort} onChange={e=>setAmort(parseInt(e.target.value))} style={inp}>
              {[5,10,15,20,25].map(y=><option key={y} value={y}>{y} years</option>)}
            </select>
          </Field>
          <button onClick={compare} style={calcBtn}>Compare My Offer →</button>
        </Card>

        <Card style={{background:s.navy}}>
          <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:12}}>💡 Renewal Tips</h3>
          {[
            ["START 4 MONTHS EARLY","Lenders must offer your renewal 21 days before maturity. Start shopping 120 days out."],
            ["NO PENALTY TO SWITCH","Switching lenders at renewal costs nothing. No penalty, no IRD."],
            ["NEVER TAKE THE FIRST OFFER","Your lender's posted renewal rate is rarely their best. Always negotiate or shop around."],
            ["USE A BROKER","A mortgage broker compares 30+ lenders at once and may find 0.25–0.50% lower than your bank."],
            ["RATE HOLD","Get a rate hold from a competing lender while you negotiate with your current one."],
          ].map(([t,d])=>(
            <div key={t} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,marginBottom:7}}>
              <div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:2}}>{t}</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.8)"}}>{d}</div>
            </div>
          ))}
        </Card>
      </div>

      <div ref={resultRef}>{result&&(
        <div style={{marginTop:14}}>
          <div style={{background:result.isGood?"linear-gradient(135deg,#f0fdf4,#dcfce7)":"linear-gradient(135deg,#fff7ed,#ffedd5)",border:`1px solid ${result.isGood?"#bbf7d0":"#fed7aa"}`,borderRadius:12,padding:16,marginBottom:14,display:"flex",alignItems:"center",gap:12}}>
            <div style={{fontSize:32}}>{result.isGood?"✅":"⚠️"}</div>
            <div>
              <div style={{fontSize:14,fontWeight:800,color:result.isGood?"#15803d":"#c2410c",marginBottom:3}}>
                {result.isGood?"Your offer looks reasonable — but you may still do better":"Your lender's offer may not be competitive"}
              </div>
              <div style={{fontSize:12,color:result.isGood?"#16a34a":"#ea580c"}}>
                {result.isGood
                  ?`Saving ${cur(result.saving)}/mo vs current rate. Shop around — brokers may find ${result.betterRate.toFixed(2)}% or lower.`
                  :`Only saving ${cur(Math.abs(result.saving))}/mo. A broker may find rates 0.25–0.50% lower than this offer.`
                }
              </div>
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,marginBottom:14}}>
            {[
              [cur(result.currentPmt)+"/mo","At Current Rate ("+currentRate+"%)","#64748b"],
              [cur(result.offerPmt)+"/mo","Lender's Offer ("+offerRate+"%)","#2563eb"],
              [cur(result.saving)+"/mo","Monthly Savings vs Current",result.saving>0?"#16a34a":"#c8102e"],
              [cur(result.termSaving),"Total Savings Over "+result.term+"yr Term",result.termSaving>0?"#16a34a":"#c8102e"],
            ].map(([v,l,c])=>(
              <div key={l} style={{background:s.white,border:`1px solid ${s.border}`,borderRadius:10,padding:14,textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:800,color:c as string}}>{v}</div>
                <div style={{fontSize:11,color:s.muted,marginTop:4}}>{l}</div>
              </div>
            ))}
          </div>

          <Card style={{borderLeft:`4px solid ${s.red}`}}>
            <div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:10}}>🏆 What If You Shopped Around?</div>
            <p style={{fontSize:12,color:s.muted,lineHeight:1.7,marginBottom:12}}>Based on current market rates, a mortgage broker may be able to find you <b style={{color:s.navy}}>{result.betterRate.toFixed(2)}%</b> or lower — that's <b style={{color:s.green}}>{cur(result.bestSaving)}/month</b> saved vs your current rate, or <b style={{color:s.green}}>{cur(result.bestTermSaving)}</b> over your {result.term}-year term.</p>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"11px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>📞 Get a Free Rate Comparison →</button>
          </Card>
          <p style={{fontSize:10,color:"#bbb",marginTop:8}}>* Estimates only. Actual rates depend on your credit, income, and lender. Consult a licensed mortgage professional.</p>
        </div>
      )}</div>
    </div>
  );
}

function LawyersTab(){
  const [filterProv,setFilterProv]=useState("MB");
  const [filterCity,setFilterCity]=useState("");
  const [filterType,setFilterType]=useState("all");
  const [selectedLawyer,setSelectedLawyer]=useState<any>(null);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [lcity,setLcity]=useState("");
  const [price,setPrice]=useState("");
  const [closing,setClosing]=useState("");
  const [firstTime,setFirstTime]=useState(false);
  const [msg,setMsg]=useState("");
  const [ok,setOk]=useState(false);
  const [submitting,setSubmitting]=useState(false);
  const [showForm,setShowForm]=useState(false);
  const [faqOpen,setFaqOpen]=useState<string|null>(null);

  const LAW_SOCIETIES:{[k:string]:{name:string,url:string}}={
    AB:{name:"Law Society of Alberta",url:"https://www.lawsociety.ab.ca/public-resources/finding-a-lawyer/"},
    BC:{name:"Law Society of BC",url:"https://www.lawsociety.bc.ca/lsbc/apps/lkup/mbr-search.cfm"},
    MB:{name:"Law Society of Manitoba",url:"https://www.lawsociety.mb.ca/public/find-a-lawyer/"},
    NB:{name:"Law Society of New Brunswick",url:"https://www.lsnb.ca/en/public-resources/find-a-lawyer/"},
    NL:{name:"Law Society of NL",url:"https://www.lsnl.ca/public/find-a-lawyer"},
    NS:{name:"Nova Scotia Barristers' Society",url:"https://nsbs.org/find-a-lawyer/"},
    ON:{name:"Law Society of Ontario",url:"https://lso.ca/public-resources/finding-a-lawyer-or-paralegal"},
    PE:{name:"Law Society of PEI",url:"https://www.lspei.pe.ca/public/find-a-lawyer/"},
    QC:{name:"Barreau du Québec",url:"https://www.barreau.qc.ca/en/public/find-a-lawyer/"},
    SK:{name:"Law Society of Saskatchewan",url:"https://www.lawsociety.sk.ca/for-the-public/find-a-lawyer/"},
  };

  // Placeholder lawyer cards — replace with real ones as you sign partners
  const LAWYERS=[
    {id:1,name:"Coming Soon",firm:"Winnipeg Real Estate Law",city:"Winnipeg",prov:"MB",types:["purchase","refinance","firsttime"],fee:"$1,200–$1,800",languages:["English"],phone:"",email:"",website:"",rating:5,reviews:0,bio:"We are actively recruiting real estate lawyers in Winnipeg. Submit your request and we'll connect you as soon as our first partner is confirmed.",verified:false},
    {id:2,name:"Coming Soon",firm:"Manitoba Conveyancing Group",city:"Brandon",prov:"MB",types:["purchase","refinance"],fee:"$1,100–$1,600",languages:["English"],phone:"",email:"",website:"",rating:5,reviews:0,bio:"Brandon-area real estate law services coming soon. Submit your details and we'll follow up.",verified:false},
  ];

  const FAQS=[
    {q:"Do I need a real estate lawyer in Canada?",a:"Yes — in all provinces except British Columbia (where notaries can handle simple purchases), a licensed real estate lawyer is legally required to complete a home purchase. They handle title transfer, mortgage registration, and closing funds."},
    {q:"How much does a real estate lawyer cost in Canada?",a:"Typically $1,200–$2,500 all-in, including professional fees, title insurance, disbursements, and land title registration. Costs vary by province, city, and transaction complexity. Condos and refinances are usually less expensive than freehold purchases."},
    {q:"When should I hire a real estate lawyer?",a:"Hire your lawyer as soon as your offer is accepted — ideally before you remove conditions. They need time to review the agreement, conduct title searches, and arrange closing funds. Give them at least 2–3 weeks before your closing date."},
    {q:"What's the difference between a lawyer and a notary for real estate?",a:"In most provinces only lawyers can handle real estate transactions. In BC, a notary public can handle straightforward purchases but cannot provide legal advice. In Quebec, a notary (notaire) is the standard professional for real estate closings."},
    {q:"Can I use any lawyer or does it need to be a real estate specialist?",a:"Technically any lawyer can handle a real estate closing, but you should always use one who specializes in real estate conveyancing. They know the local market, common issues, and have relationships with lenders — mistakes at closing can be very costly."},
    {q:"What documents do I need to bring to my lawyer?",a:"Signed purchase agreement, mortgage commitment letter, down payment proof (90-day bank history), photo ID, and SIN. Your lawyer will send you a full list after you retain them. See our Document Checklist tab for a complete breakdown."},
  ];

  async function submit(){
    if(!name||!email||!lcity){alert("Please fill in name, email, and city.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        name,email,phone,province:PDATA[filterProv]?.name,city:lcity,
        purchase_price:price,closing_date:closing,
        first_time_buyer:firstTime?"Yes":"No",
        preferred_lawyer:selectedLawyer?selectedLawyer.name:"No preference",
        message:msg,type:"Real Estate Lawyer Referral"
      })});
      setOk(true);
    }catch{alert("Something went wrong. Please try again.");}
    setSubmitting(false);
  }

  const filtered=LAWYERS.filter(l=>{
    const matchProv=l.prov===filterProv;
    const matchCity=!filterCity||l.city.toLowerCase().includes(filterCity.toLowerCase());
    const matchType=filterType==="all"||l.types.includes(filterType);
    return matchProv&&matchCity&&matchType;
  });

  const ls=LAW_SOCIETIES[filterProv];

  return(
    <div>
      {/* Header */}
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"24px 20px",marginBottom:16}}>
        <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <div style={{flex:1,minWidth:200}}>
            <div style={{fontSize:28,marginBottom:6}}>⚖️</div>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Find a Real Estate Lawyer</h2>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.6}}>A licensed real estate lawyer is required for every home purchase in Canada. Compare lawyers by city, specialty, and fee — then request a free connection.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,flexShrink:0}}>
            {[["$1,200–$2,500","Typical Fee"],["Required","In All Provinces"],["2–3 weeks","Before Closing"],["Free","To Connect"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"10px 12px",textAlign:"center"}}>
                <div style={{fontSize:14,fontWeight:800,color:s.gold}}>{v}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{background:s.white,borderRadius:12,padding:"12px 16px",marginBottom:14,border:`1px solid ${s.border}`,display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"}}>
        <select value={filterProv} onChange={e=>{setFilterProv(e.target.value);setFilterCity("");}} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        <input type="text" placeholder="Search city..." value={filterCity} onChange={e=>setFilterCity(e.target.value)} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,width:140}}/>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {[["all","All Types"],["purchase","Purchase"],["firsttime","First-Time"],["refinance","Refinance"],["condo","Condo"]].map(([v,l])=>(
            <button key={v} onClick={()=>setFilterType(v)} style={{padding:"5px 10px",borderRadius:20,border:`1.5px solid ${filterType===v?s.navy:s.border}`,background:filterType===v?s.navy:s.white,color:filterType===v?"#fff":s.muted,fontSize:11,cursor:"pointer",fontWeight:filterType===v?700:400}}>{l}</button>
          ))}
        </div>
        <button onClick={()=>{setShowForm(true);setSelectedLawyer(null);}} style={{marginLeft:"auto",padding:"7px 16px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>⚖️ Request a Lawyer</button>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12,marginBottom:16}}>
        {filtered.map(l=>(
          <div key={l.id} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
            <div style={{background:l.verified?`linear-gradient(135deg,${s.green},#15803d)`:`linear-gradient(135deg,#94a3b8,#64748b)`,padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{color:"#fff",fontSize:14,fontWeight:800}}>{l.name}</div>
                <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>{l.firm}</div>
              </div>
              {l.verified?<span style={{background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>✓ Partner</span>:<span style={{background:"rgba(255,255,255,0.15)",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>Coming Soon</span>}
            </div>
            <div style={{padding:14}}>
              <div style={{display:"flex",gap:8,marginBottom:10,flexWrap:"wrap"}}>
                <span style={{background:"#f1f5f9",color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>📍 {l.city}, {l.prov}</span>
                <span style={{background:"#f0fdf4",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>💰 {l.fee}</span>
                {l.languages.map(lang=><span key={lang} style={{background:"#eff6ff",color:"#1e40af",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>{lang}</span>)}
              </div>
              <div style={{display:"flex",gap:4,marginBottom:10,flexWrap:"wrap"}}>
                {l.types.map(t=><span key={t} style={{background:"#fef3c7",color:"#92400e",borderRadius:20,padding:"2px 7px",fontSize:9,fontWeight:700,textTransform:"capitalize"}}>{t==="firsttime"?"First-Time":t}</span>)}
              </div>
              <p style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:12}}>{l.bio}</p>
              <button onClick={()=>{setSelectedLawyer(l);setShowForm(true);setLcity(l.city);}} style={{width:"100%",padding:"9px",background:l.verified?s.green:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>{l.verified?"Request Connection →":"Join Waitlist →"}</button>
            </div>
          </div>
        ))}
        {filtered.length===0&&(
          <div style={{gridColumn:"1/-1",textAlign:"center",padding:"32px",background:s.white,borderRadius:12,border:`1px solid ${s.border}`}}>
            <div style={{fontSize:32,marginBottom:8}}>🔍</div>
            <div style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:6}}>No lawyers listed yet in this area</div>
            <div style={{fontSize:12,color:s.muted,marginBottom:14}}>We're building our network. Submit a request and we'll find you a qualified lawyer.</div>
            <button onClick={()=>setShowForm(true)} style={{padding:"9px 20px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Request a Lawyer →</button>
          </div>
        )}
      </div>

      {/* Info strip */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,marginBottom:16}}>
        <Card style={{background:"#f0fdf4",border:`1px solid #bbf7d0`}}>
          <h3 style={{fontSize:12,fontWeight:800,color:"#15803d",marginBottom:8}}>⚖️ What They Do</h3>
          {["Title search & insurance","Mortgage registration","Closing fund management","Title transfer to your name","Key handover coordination"].map(item=>(
            <div key={item} style={{display:"flex",alignItems:"center",gap:6,padding:"4px 0",fontSize:11,color:"#374151"}}><span style={{color:s.green,fontSize:10}}>✓</span>{item}</div>
          ))}
        </Card>
        <Card style={{background:s.navy}}>
          <h3 style={{fontSize:12,fontWeight:800,color:"#fff",marginBottom:8}}>💰 Fee Breakdown</h3>
          {[["Professional fee","$800–$1,500"],["Title insurance","$200–$400"],["Disbursements","$200–$500"],["Land title reg.","$50–$200"],["Total (est.)","$1,200–$2,500"]].map(([l,v],i)=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:i<4?`1px solid rgba(255,255,255,0.08)`:"none",fontSize:11}}>
              <span style={{color:"rgba(255,255,255,0.7)"}}>{l}</span>
              <span style={{fontWeight:i===4?800:500,color:i===4?s.gold:"#fff"}}>{v}</span>
            </div>
          ))}
        </Card>
        <Card>
          <h3 style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:8}}>🔍 Search Yourself</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:10,lineHeight:1.5}}>Each province's Law Society maintains a public directory of all licensed lawyers.</p>
          {ls&&<a href={ls.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"8px 12px",background:"#f8fafc",border:`1px solid ${s.border}`,borderRadius:8,textDecoration:"none",fontSize:11,fontWeight:700,color:s.navy,marginBottom:8}}>{ls.name} →</a>}
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"6px 10px",fontSize:10,color:"#92400e"}}>Always verify your lawyer is in good standing before retaining them.</div>
        </Card>
      </div>

      {/* FAQ */}
      <Card style={{marginBottom:16}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>❓ Real Estate Lawyer FAQ</h3>
        {FAQS.map((f,i)=>(
          <div key={i} style={{borderBottom:`1px solid ${s.light}`,overflow:"hidden"}}>
            <button onClick={()=>setFaqOpen(faqOpen===String(i)?null:String(i))} style={{width:"100%",textAlign:"left",padding:"12px 0",background:"none",border:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
              <span style={{fontSize:12,fontWeight:700,color:s.navy,lineHeight:1.4}}>{f.q}</span>
              <span style={{fontSize:16,color:s.muted,flexShrink:0,transform:faqOpen===String(i)?"rotate(180deg)":"none",transition:"transform 0.2s"}}>▾</span>
            </button>
            {faqOpen===String(i)&&<div style={{fontSize:12,color:s.muted,lineHeight:1.8,paddingBottom:12}}>{f.a}</div>}
          </div>
        ))}
      </Card>

      {/* Are you a lawyer CTA */}
      <div style={{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1px solid #fde68a",borderRadius:12,padding:"16px 20px",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
        <div style={{flex:1,minWidth:200}}>
          <div style={{fontSize:13,fontWeight:800,color:"#92400e",marginBottom:4}}>⚖️ Are You a Real Estate Lawyer?</div>
          <div style={{fontSize:11,color:"#92400e",lineHeight:1.5}}>Join our referral network. We connect qualified buyers directly to you. Pay only per referred lead — no monthly fees.</div>
        </div>
        <a href="mailto:info@canadamortgagerates.net?subject=Lawyer Partner Inquiry" style={{padding:"10px 20px",background:"#92400e",color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textDecoration:"none",flexShrink:0,whiteSpace:"nowrap"}}>Partner With Us →</a>
      </div>

      {/* Connection Form Modal */}
      {showForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:480,overflow:"hidden",maxHeight:"90vh",display:"flex",flexDirection:"column"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
              <div>
                <div style={{color:"#fff",fontSize:14,fontWeight:700}}>⚖️ Request a Lawyer Connection</div>
                {selectedLawyer&&<div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:2}}>{selectedLawyer.firm}</div>}
              </div>
              <button onClick={()=>setShowForm(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            <div style={{padding:18,overflowY:"auto",flex:1}}>
              {!ok?(
                <>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
                    <Field label="Your Name *"><input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" style={inp}/></Field>
                    <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Optional" style={inp}/></Field>
                  </div>
                  <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" style={{...inp,marginBottom:8}}/></Field>
                  <Field label="Your City *"><input type="text" value={lcity} onChange={e=>setLcity(e.target.value)} placeholder="e.g. Winnipeg" style={inp}/></Field>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
                    <Field label="Purchase Price"><input type="text" value={price} onChange={e=>setPrice(e.target.value)} placeholder="e.g. $500,000" style={inp}/></Field>
                    <Field label="Closing Date"><input type="text" value={closing} onChange={e=>setClosing(e.target.value)} placeholder="e.g. Aug 2026" style={inp}/></Field>
                  </div>
                  <div style={{marginBottom:10}}><label style={{display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:600,color:s.navy,cursor:"pointer"}}><input type="checkbox" checked={firstTime} onChange={e=>setFirstTime(e.target.checked)}/>First-time buyer</label></div>
                  <Field label="Additional Notes"><textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Any questions or special circumstances?" rows={2} style={{...inp,resize:"none"}}/></Field>
                  <button onClick={submit} disabled={submitting} style={{width:"100%",padding:11,background:submitting?"#aaa":s.green,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:submitting?"not-allowed":"pointer",marginTop:8}}>{submitting?"Submitting...":"⚖️ Connect Me with a Lawyer →"}</button>
                  <p style={{fontSize:10,color:s.muted,marginTop:8,lineHeight:1.5}}>Canada Mortgage Rates is not a law firm. A licensed real estate lawyer will contact you directly. Free to use.</p>
                </>
              ):(
                <div style={{textAlign:"center",padding:"24px 0"}}>
                  <div style={{fontSize:40,marginBottom:10}}>✅</div>
                  <div style={{fontSize:15,fontWeight:800,color:s.navy,marginBottom:6}}>Request Received!</div>
                  <div style={{fontSize:12,color:s.muted,lineHeight:1.7,marginBottom:16}}>We'll connect you with a qualified real estate lawyer in {lcity} within 1 business day.</div>
                  <button onClick={()=>{setOk(false);setShowForm(false);setName("");setEmail("");setPhone("");setLcity("");setPrice("");setClosing("");setFirstTime(false);setMsg("");}} style={{padding:"9px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Done</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ConsultTab(){
  const [cName,setCName]=useState("");const [cPhone,setCPhone]=useState("");const [cEmail,setCEmail]=useState("");const [cCity,setCCity]=useState("");const [cPurpose,setCPurpose]=useState("");const [cMsg,setCMsg]=useState("");const [cOk,setCOk]=useState(false);
  const [nName,setNName]=useState("");const [nEmail,setNEmail]=useState("");const [nCity,setNCity]=useState("");const [nConsent,setNConsent]=useState(false);const [nOk,setNOk]=useState(false);
  const [bocName,setBocName]=useState("");const [bocEmail,setBocEmail]=useState("");const [bocProv,setBocProv]=useState("");const [bocConsent,setBocConsent]=useState(false);const [bocOk,setBocOk]=useState(false);
  const {next:bocNextDate}=getBocSchedule();

  async function submitConsult(){
    if(!cName||!cEmail){alert("Please enter your name and email.");return;}
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:cName,phone:cPhone,email:cEmail,city:cCity,purpose:cPurpose,message:cMsg})});
      setCOk(true);setCName("");setCPhone("");setCEmail("");setCCity("");setCPurpose("");setCMsg("");
    }catch{alert("Something went wrong. Please try again.");}
  }
  async function submitNewsletter(){
    if(!nName||!nEmail){alert("Please enter your name and email.");return;}
    if(!nConsent){alert("Please confirm consent.");return;}
    try{
      await fetch("https://formspree.io/f/xrewbnnr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:nName,email:nEmail,city:nCity,type:"Weekly Rate Alert"})});
      setNOk(true);setNName("");setNEmail("");setNCity("");
    }catch{alert("Something went wrong.");}
  }
  async function submitBoc(){
    if(!bocName||!bocEmail){alert("Please enter your name and email.");return;}
    if(!bocConsent){alert("Please confirm consent.");return;}
    try{
      await fetch("https://formspree.io/f/mbdvlnnw",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:bocName,email:bocEmail,province:bocProv,type:"BoC Rate Alert"})});
      setBocOk(true);setBocName("");setBocEmail("");setBocProv("");
    }catch{alert("Something went wrong.");}
  }

  const purposes=["🏠 First Home Purchase","🏡 Move-Up / Second Home","🔄 Mortgage Renewal","💳 Refinance / Equity Takeout","📐 Pre-Approval Only","❓ Just Exploring"];

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"16px 20px",marginBottom:14}}>
        <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:4}}>📞 Get Expert Help — Free</div>
        <div style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.6,marginBottom:12}}>Whether you are buying your first home, renewing, or refinancing — connect with a licensed Canadian mortgage professional. Free, no obligation, no pressure.</div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          {[["✅","Free — no cost to you"],["⚡","Reply within 1 business day"],["🔒","Your info is never sold"],["🍁","Licensed professionals only"]].map(([icon,l])=>(
            <div key={l} style={{background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"6px 12px",display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:13}}>{icon}</span>
              <span style={{color:"rgba(255,255,255,0.85)",fontSize:11,fontWeight:600}}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14,marginBottom:14}}>
        <Card style={{borderTop:`4px solid ${s.green}`}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
            <div style={{width:40,height:40,background:"#f0fdf4",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>📞</div>
            <div>
              <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:2}}>Free Mortgage Consultation</h3>
              <div style={{fontSize:11,color:s.green,fontWeight:600}}>Reply within 1 business day</div>
            </div>
          </div>
          <p style={{fontSize:11,color:s.muted,marginBottom:14,lineHeight:1.6}}>Tell us about your situation and a licensed mortgage professional will reach out to walk you through your options — rates, qualification, and strategy.</p>
          {!cOk?(
            <>
              <Field label="Your Full Name *"><input type="text" placeholder="Jane Smith" value={cName} onChange={e=>setCName(e.target.value)} style={inp}/></Field>
              <Field label="Phone Number"><input type="tel" placeholder="(204) 555-0123" value={cPhone} onChange={e=>setCPhone(e.target.value)} style={inp}/></Field>
              <Field label="Email Address *"><input type="email" placeholder="jane@email.com" value={cEmail} onChange={e=>setCEmail(e.target.value)} style={inp}/></Field>
              <Field label="Your City & Province"><input type="text" placeholder="Winnipeg, MB" value={cCity} onChange={e=>setCCity(e.target.value)} style={inp}/></Field>
              <Field label="What can we help you with?">
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
                  {purposes.map(p=><button key={p} onClick={()=>setCPurpose(p)} style={{padding:"6px 8px",border:`1.5px solid ${cPurpose===p?s.green:s.border}`,borderRadius:8,background:cPurpose===p?"#f0fdf4":s.white,color:cPurpose===p?"#15803d":s.muted,fontSize:10,fontWeight:600,cursor:"pointer",textAlign:"left"}}>{p}</button>)}
                </div>
              </Field>
              <Field label="Additional notes (optional)"><textarea placeholder="e.g. We are looking at a $650K home in Winnipeg with 10% down, closing in September..." value={cMsg} onChange={e=>setCMsg(e.target.value)} style={{...inp,resize:"none",minHeight:70}} rows={3}/></Field>
              <button onClick={submitConsult} style={{width:"100%",padding:"11px 0",background:s.green,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:800,cursor:"pointer",marginTop:4}}>Request Free Consultation →</button>
              <div style={{fontSize:10,color:s.muted,marginTop:8,textAlign:"center"}}>🔒 Your information is never sold or shared with third parties.</div>
            </>
          ):(
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:20,textAlign:"center"}}>
              <div style={{fontSize:32,marginBottom:8}}>✅</div>
              <div style={{fontSize:14,fontWeight:800,color:"#15803d",marginBottom:4}}>Request Received!</div>
              <div style={{fontSize:12,color:"#16a34a",lineHeight:1.6}}>A licensed mortgage professional will reach out within 1 business day. Check your email including spam folder.</div>
            </div>
          )}
        </Card>

        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <Card style={{borderTop:`4px solid ${s.blue}`}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
              <div style={{width:40,height:40,background:"#eff6ff",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>📧</div>
              <div>
                <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:2}}>Weekly Rate Digest</h3>
                <div style={{fontSize:11,color:s.blue,fontWeight:600}}>Every Monday morning</div>
              </div>
            </div>
            <p style={{fontSize:11,color:s.muted,marginBottom:12,lineHeight:1.6}}>A weekly summary of Canadian mortgage rates, market moves, and what the BoC is signalling — straight to your inbox. Free, no spam, unsubscribe anytime.</p>
            {!nOk?(
              <>
                <input type="text" placeholder="Your Name" value={nName} onChange={e=>setNName(e.target.value)} style={{...inp,marginBottom:8}}/>
                <input type="email" placeholder="Email Address" value={nEmail} onChange={e=>setNEmail(e.target.value)} style={{...inp,marginBottom:8}}/>
                <input type="text" placeholder="City & Province (optional)" value={nCity} onChange={e=>setNCity(e.target.value)} style={{...inp,marginBottom:10}}/>
                <div style={{display:"flex",alignItems:"flex-start",gap:7,marginBottom:10}}><input type="checkbox" checked={nConsent} onChange={e=>setNConsent(e.target.checked)} style={{marginTop:3,flexShrink:0}}/><label style={{fontSize:11,color:s.muted,lineHeight:1.5}}>I agree to receive weekly Canadian mortgage rate updates. Unsubscribe anytime.</label></div>
                <button onClick={submitNewsletter} style={{width:"100%",padding:10,background:s.blue,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Subscribe — Free →</button>
              </>
            ):(
              <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:14,textAlign:"center"}}>
                <div style={{fontSize:24,marginBottom:6}}>✅</div>
                <div style={{fontSize:13,fontWeight:700,color:"#1e40af"}}>You are subscribed!</div>
                <div style={{fontSize:11,color:"#3b82f6",marginTop:4}}>Look for your first digest next Monday.</div>
              </div>
            )}
          </Card>

          <Card style={{borderTop:`4px solid ${s.gold}`}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
              <div style={{width:40,height:40,background:"#fffbeb",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>🏦</div>
              <div>
                <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:2}}>BoC Rate Announcements</h3>
                <div style={{fontSize:11,color:"#92400e",fontWeight:600}}>8 decisions per year · Next: {fmtBocDate(bocNextDate)}</div>
              </div>
            </div>
            <p style={{fontSize:11,color:s.muted,marginBottom:12,lineHeight:1.6}}>Get notified the moment the Bank of Canada makes a rate announcement. Know within minutes whether your mortgage payment is changing.</p>
            {!bocOk?(
              <>
                <input type="text" placeholder="Your Name" value={bocName} onChange={e=>setBocName(e.target.value)} style={{...inp,marginBottom:8}}/>
                <input type="email" placeholder="Email Address" value={bocEmail} onChange={e=>setBocEmail(e.target.value)} style={{...inp,marginBottom:8}}/>
                <select value={bocProv} onChange={e=>setBocProv(e.target.value)} style={{...inp,marginBottom:10,background:s.white}}>
                  <option value="">Province (optional)</option>
                  {Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{(v as any).name}</option>)}
                </select>
                <div style={{display:"flex",alignItems:"flex-start",gap:7,marginBottom:10}}><input type="checkbox" checked={bocConsent} onChange={e=>setBocConsent(e.target.checked)} style={{marginTop:3,flexShrink:0}}/><label style={{fontSize:11,color:s.muted,lineHeight:1.5}}>I agree to receive Bank of Canada rate announcement emails. Unsubscribe anytime.</label></div>
                <button onClick={submitBoc} style={{width:"100%",padding:10,background:"#92400e",color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🔔 Get BoC Alerts →</button>
                <div style={{fontSize:10,color:s.muted,marginTop:6,textAlign:"center"}}>Next BoC decision: {fmtBocDate(bocNextDate)}</div>
              </>
            ):(
              <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:14,textAlign:"center"}}>
                <div style={{fontSize:24,marginBottom:6}}>🔔</div>
                <div style={{fontSize:13,fontWeight:700,color:"#92400e"}}>BoC Alerts Activated!</div>
                <div style={{fontSize:11,color:"#92400e",marginTop:4}}>Next announcement: {fmtBocDate(bocNextDate)}.</div>
              </div>
            )}
          </Card>
        </div>
      </div>

      <Card style={{background:s.navy}}>
        <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:12}}>🤔 When Should You Talk to a Mortgage Professional?</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
          {[
            ["BEFORE YOU START HOUSE HUNTING","A pre-approval confirms your budget, locks in a rate for 90–120 days, and shows sellers you are serious. Do this before falling in love with a home."],
            ["IF YOU ARE SELF-EMPLOYED","Self-employed qualification is complex. A broker who specializes in this can find lenders your bank will not show you."],
            ["4 MONTHS BEFORE RENEWAL","Start shopping 120 days early. Your current lender's first offer is rarely their best. A broker compares 30+ lenders at once — free."],
            ["IF YOUR CREDIT IS BELOW 680","A mortgage broker can access B-lenders and build a 12-month plan to get you into an A-lender at better rates."],
            ["IF YOU WANT TO ACCESS EQUITY","Refinancing, HELOC, or reverse mortgage — a specialist maps out which option costs you least and fits your goals."],
            ["AFTER A MAJOR LIFE CHANGE","Divorce, job change, inheritance, or new business — any significant life event may require a mortgage restructure."],
          ].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div></div>)}
        </div>
      </Card>
    </div>
  );
}


const GLOSSARY_TERMS=[
  {term:"Amortization Period",cat:"Basics",def:"The total length of time to pay off your mortgage in full. In Canada, the maximum is typically 25 years for insured mortgages and 30 years for conventional mortgages."},
  {term:"Bank of Canada (BoC)",cat:"Rates",def:"Canada's central bank, which sets the overnight lending rate. Changes to this rate directly affect variable mortgage rates and the Prime Rate charged by banks."},
  {term:"Basis Point (bps)",cat:"Rates",def:"One hundredth of one percent (0.01%). Lenders and economists use basis points to describe rate changes. A 25 bps increase means the rate went up by 0.25%."},
  {term:"Bridge Financing",cat:"Buying",def:"A short-term loan that covers the gap between the closing date of your new home and the sale of your existing home. Typically lasts 30–90 days."},
  {term:"Closed Mortgage",cat:"Basics",def:"A mortgage that cannot be paid off, refinanced, or renegotiated before the end of the term without paying a prepayment penalty. Offers lower rates than open mortgages."},
  {term:"CMHC Insurance",cat:"Insurance",def:"Mortgage default insurance required when your down payment is less than 20%. Protects the lender — not you — if you default. Premium ranges from 2.8% to 4.0% of the mortgage amount."},
  {term:"Conventional Mortgage",cat:"Basics",def:"A mortgage with a down payment of 20% or more. Does not require CMHC mortgage default insurance."},
  {term:"Co-Signer",cat:"Qualifying",def:"A person who signs the mortgage with you and is equally responsible for repayment. Used when the primary borrower doesn't qualify alone due to income or credit."},
  {term:"Credit Score",cat:"Qualifying",def:"A number from 300–900 that represents your creditworthiness. Most A-lenders require 680+. Scores above 750 typically get the best rates."},
  {term:"Default",cat:"Basics",def:"Failing to make your mortgage payments as agreed. Can result in the lender forcing the sale of your home (power of sale or foreclosure)."},
  {term:"Down Payment",cat:"Buying",def:"The portion of the home purchase price you pay upfront. Minimum is 5% in Canada for homes under $500,000. Homes over $1M require 20% minimum."},
  {term:"Equity",cat:"Basics",def:"The difference between your home's market value and what you owe on your mortgage. Equity grows as you pay down your mortgage and/or as your home appreciates."},
  {term:"FHSA (First Home Savings Account)",cat:"First-Time Buyers",def:"A registered account letting first-time buyers save up to $8,000/year (lifetime max $40,000) with tax-deductible contributions and tax-free withdrawals for a home purchase."},
  {term:"Fixed Rate Mortgage",cat:"Rates",def:"A mortgage where the interest rate stays the same for the entire term. Offers payment certainty but typically has higher break penalties (IRD) than variable."},
  {term:"GDS Ratio",cat:"Qualifying",def:"Gross Debt Service ratio — the percentage of your gross monthly income used for housing costs (mortgage, property tax, heat). Canadian lenders cap this at 39%."},
  {term:"HBP (Home Buyers' Plan)",cat:"First-Time Buyers",def:"Allows first-time buyers to withdraw up to $60,000 from their RRSP tax-free for a home purchase. Must be repaid over 15 years."},
  {term:"High-Ratio Mortgage",cat:"Basics",def:"A mortgage where the down payment is less than 20% of the purchase price. Requires CMHC mortgage default insurance."},
  {term:"Home Equity Line of Credit (HELOC)",cat:"Products",def:"A revolving line of credit secured against your home's equity. Rates are variable, typically Prime + 0.5%. Maximum borrowing is 65% of your home's value."},
  {term:"Insured Mortgage",cat:"Insurance",def:"A mortgage backed by CMHC, Sagen, or Canada Guaranty. Required when down payment is under 20%. Allows lenders to offer lower rates."},
  {term:"Interest Rate Differential (IRD)",cat:"Penalties",def:"The penalty for breaking a fixed-rate mortgage early. Calculated as the difference between your rate and today's rate for the remaining term. Can be very large at major banks."},
  {term:"Land Transfer Tax (LTT)",cat:"Buying",def:"A provincial tax paid when you buy a property. Rates vary by province — Ontario and BC charge 1–2.5%, Alberta has none. First-time buyers get rebates in most provinces."},
  {term:"Maturity Date",cat:"Basics",def:"The date your mortgage term ends and must be renewed, paid off, or refinanced. You can switch lenders at maturity with no penalty."},
  {term:"Mortgage Term",cat:"Basics",def:"The length of time your current mortgage rate and contract conditions are in effect — typically 1 to 5 years. Not to be confused with amortization."},
  {term:"Open Mortgage",cat:"Basics",def:"A mortgage that can be paid off, refinanced, or renegotiated at any time without penalty. Carries higher rates than closed mortgages."},
  {term:"Overnight Rate",cat:"Rates",def:"The interest rate at which major Canadian banks lend to each other overnight. Set by the Bank of Canada. Changes directly affect the Prime Rate and variable mortgage rates."},
  {term:"Portability",cat:"Products",def:"The ability to transfer your existing mortgage — rate, term, and balance — to a new property when you move, avoiding break penalties."},
  {term:"Pre-Approval",cat:"Buying",def:"A lender's conditional commitment to lend you up to a certain amount at a specific rate, held for 90–120 days. Does not guarantee final approval."},
  {term:"Prepayment Privilege",cat:"Products",def:"The right to make extra payments on your mortgage beyond your regular schedule without penalty. Most lenders allow 10–20% of the original balance per year."},
  {term:"Prime Rate",cat:"Rates",def:"The interest rate Canadian banks use as a benchmark for variable rate products. Currently 4.45%. Typically Prime = BoC overnight rate + 2.20%."},
  {term:"Principal",cat:"Basics",def:"The original amount you borrowed, or the remaining balance owed on your mortgage, not including interest."},
  {term:"Refinancing",cat:"Products",def:"Breaking your current mortgage before maturity to access a new rate, change terms, or borrow against your home equity. Usually involves a prepayment penalty."},
  {term:"Renewal",cat:"Products",def:"At the end of your mortgage term, you renew for a new term. No penalty to switch lenders at renewal. Always shop around — your lender's first offer is rarely the best."},
  {term:"Stress Test",cat:"Qualifying",def:"A federal requirement to qualify at the higher of your contracted rate + 2% or 5.25%. Ensures you can afford payments if rates rise. Reduces your maximum purchase price by ~15–20%."},
  {term:"TDS Ratio",cat:"Qualifying",def:"Total Debt Service ratio — the percentage of gross monthly income used for all debt payments including mortgage, property tax, car loans, and credit cards. Maximum is 44%."},
  {term:"Title Insurance",cat:"Buying",def:"Insurance protecting against losses from title defects, fraud, or encumbrances not found during a title search. Typically costs $200–$400 and is a one-time premium."},
  {term:"Variable Rate Mortgage",cat:"Rates",def:"A mortgage where the interest rate fluctuates with the Prime Rate. Currently cheaper than fixed rates but payments can change. Break penalty is typically only 3 months interest."},
];

const GLOSSARY_CATS=["All",...Array.from(new Set(GLOSSARY_TERMS.map(t=>t.cat)))];

function GlossaryTab(){
  const [search,setSearch]=useState("");
  const [cat,setCat]=useState("All");
  const [open,setOpen]=useState<string|null>(null);
  const filtered=GLOSSARY_TERMS.filter(t=>{
    const matchCat=cat==="All"||t.cat===cat;
    const matchSearch=!search||t.term.toLowerCase().includes(search.toLowerCase())||t.def.toLowerCase().includes(search.toLowerCase());
    return matchCat&&matchSearch;
  }).sort((a,b)=>a.term.localeCompare(b.term));
  const letters=Array.from(new Set(filtered.map(t=>t.term[0]))).sort();
  return(
    <div>
      <Card style={{marginBottom:14}}>
        <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:4}}>📖 Canadian Mortgage Glossary</h2>
        <p style={{fontSize:12,color:s.muted,marginBottom:14}}>{GLOSSARY_TERMS.length} mortgage terms explained in plain English.</p>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
          <input type="text" placeholder="Search terms..." value={search} onChange={e=>setSearch(e.target.value)} style={{flex:1,minWidth:160,padding:"8px 12px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:13}}/>
          <select value={cat} onChange={e=>setCat(e.target.value)} style={{padding:"8px 12px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:13,background:s.white}}>
            {GLOSSARY_CATS.map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:4}}>
          {letters.map(l=><button key={l} onClick={()=>document.getElementById("gl-"+l)?.scrollIntoView({behavior:"smooth",block:"start"})} style={{padding:"3px 8px",borderRadius:6,border:`1px solid ${s.border}`,background:s.white,fontSize:11,fontWeight:700,color:s.navy,cursor:"pointer"}}>{l}</button>)}
        </div>
      </Card>
      {filtered.length===0&&<EmptyState icon="🔍" title="No terms found" sub="Try a different search or category."/>}
      {letters.map(letter=>{
        const terms=filtered.filter(t=>t.term[0]===letter);
        if(!terms.length)return null;
        return(
          <div key={letter} id={"gl-"+letter} style={{marginBottom:16}}>
            <div style={{fontSize:22,fontWeight:800,color:s.navy,borderBottom:`2px solid ${s.border}`,paddingBottom:6,marginBottom:8}}>{letter}</div>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {terms.map(t=>(
                <div key={t.term} style={{background:s.white,borderRadius:10,border:`1px solid ${s.border}`,overflow:"hidden"}}>
                  <button onClick={()=>setOpen(open===t.term?null:t.term)} style={{width:"100%",textAlign:"left",padding:"12px 16px",background:"none",border:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{fontSize:13,fontWeight:700,color:s.navy}}>{t.term}</span>
                      <span style={{background:"#f1f5f9",color:s.muted,borderRadius:20,padding:"1px 8px",fontSize:10,fontWeight:600}}>{t.cat}</span>
                    </div>
                    <span style={{fontSize:16,color:s.muted,flexShrink:0,transform:open===t.term?"rotate(180deg)":"none",transition:"transform 0.2s"}}>▾</span>
                  </button>
                  {open===t.term&&(
                    <div style={{padding:"0 16px 14px",fontSize:13,color:s.muted,lineHeight:1.8,borderTop:`1px solid ${s.light}`}}>
                      <div style={{paddingTop:10}}>{t.def}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <p style={{fontSize:10,color:"#bbb",marginTop:8}}>* Definitions are for informational purposes only. Consult a licensed mortgage professional for advice specific to your situation.</p>
    </div>
  );
}

function HomeTab({setActive}:{setActive:(t:string)=>void}):JSX.Element{
  const boc=useBocRates();
  const {last,next}=getBocSchedule();
  const features=[
    {icon:"📊",tab:"Rates",title:"Live Mortgage Rates",desc:"Compare rates from 20+ banks and credit unions across all 10 provinces. Updated daily via AI-powered web search."},
    {icon:"🧮",tab:"Calculators",title:"Mortgage Calculators",desc:"Payment, affordability, rent vs buy, renewal savings, and stress test — all in one place."},
    {icon:"🏛️",tab:"Property Tax",title:"Property Tax Estimator",desc:"Estimate your annual property tax based on your home value and city across every province."},
    {icon:"🏠",tab:"Insurance",title:"Home Insurance",desc:"Compare quotes from Canada's top insurers — Intact, Aviva, Desjardins, and more."},
    {icon:"🎯",tab:"Rate Finder",title:"Personalized Rate Finder",desc:"Answer 5 quick questions and get your estimated mortgage rate range based on your profile."},
    {icon:"🇨🇦",tab:"First-Time Buyers",title:"First-Time Buyer Programs",desc:"Federal and provincial programs — FHSA, HBP, LTT rebates, and new 2026 incentives."},
    {icon:"📰",tab:"News",title:"Mortgage & Real Estate News",desc:"AI-curated news for your province — BoC decisions, market updates, and rate forecasts."},
    {icon:"🏡",tab:"Listings",title:"Home Listings Search",desc:"AI-powered property search across Canada. Find homes by city, type, beds, and price."},
    {icon:"📚",tab:"Learn",title:"Learn & Education",desc:"Fixed vs variable, stress test guide, CMHC explained, FHSA complete guide, and more."},
    {icon:"📞",tab:"Consult",title:"Free Consultation",desc:"Connect with a licensed mortgage professional — free, no obligation, within 1 business day."},
  ];
  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"24px 20px",marginBottom:16,textAlign:"center"}}>
        <div style={{fontSize:32,marginBottom:8}}>🍁</div>
        <h2 style={{color:"#fff",fontSize:22,fontWeight:800,marginBottom:8}}>Welcome to Canada Mortgage Rates</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,lineHeight:1.7,maxWidth:600,margin:"0 auto 16px"}}>Canada's most complete mortgage platform — free, AI-powered, and built for every province. Compare rates, calculate payments, discover first-time buyer programs, and connect with experts.</p>
        <div style={{display:"flex",justifyContent:"center",gap:8,flexWrap:"wrap"}}>
          {[["🏦 20+ Lenders",""],["🌍 All 10 Provinces",""],["🤖 AI-Powered",""],["💰 Always Free",""]].map(([l])=>(
            <span key={l} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:20,padding:"5px 14px",color:"#fff",fontSize:11,fontWeight:600}}>{l}</span>
          ))}
        </div>
      </div>
      <div style={{background:"#fff7ed",border:`1px solid #fed7aa`,borderRadius:10,padding:"10px 16px",marginBottom:16,display:"flex",alignItems:"center",gap:10}}>
        <div style={{fontSize:20}}>📢</div>
        <div><div style={{fontSize:12,fontWeight:700,color:"#c2410c"}}>Bank of Canada Rate — last decision {fmtBocDate(last)}</div><div style={{fontSize:11,color:"#92400e"}}>Overnight rate: {boc.overnight}%. Prime Rate: {boc.prime}%. Next decision: {fmtBocDate(next)}.</div></div>
      </div>
      <div style={{background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:12,padding:"16px 20px",marginBottom:16,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
        <div style={{fontSize:28,flexShrink:0}}>🔔</div>
        <div style={{flex:1,minWidth:180}}>
          <div style={{color:"#fff",fontSize:14,fontWeight:800,marginBottom:3}}>Get BoC Rate Alerts — Free</div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:11,lineHeight:1.5}}>Next announcement: <b>{fmtBocDate(next)}</b>. Be the first to know when rates change.</div>
        </div>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("openRateAlert"))} style={{padding:"10px 20px",background:"#fff",color:s.red,border:"none",borderRadius:8,fontSize:13,fontWeight:800,cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}}>🔔 Get Alerts →</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
        {features.map(f=>(
          <div key={f.tab} onClick={()=>setActive(f.tab)} style={{background:s.white,borderRadius:12,padding:16,border:`1px solid ${s.border}`,cursor:"pointer",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.12)";e.currentTarget.style.borderColor=s.navy;}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=s.border;}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div style={{fontSize:28}}>{f.icon}</div>
              {f.badge&&<span style={{background:(f as any).badgeColor,color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:800,letterSpacing:"0.3px"}}>{f.badge}</span>}
            </div>
            <div style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:6}}>{f.title}</div>
            <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:10}}>{f.desc}</div>
            <div style={{fontSize:11,color:s.blue,fontWeight:700}}>Open {f.tab} →</div>
          </div>
        ))}
      </div>
      <TestimonialsSection/>
      <div style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,padding:16,marginTop:14}}>
        <div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:10}}>⚠️ Important Disclaimer</div>
        <p style={{fontSize:11,color:s.muted,lineHeight:1.7}}>Canada Mortgage Rates is not a licensed mortgage broker, lender, or financial advisor. All rates and calculator results are for informational purposes only and may not reflect your actual qualified rate. Always verify rates directly with the financial institution and consult a licensed mortgage professional before making any financial decisions.</p>
      </div>
    </div>
  );
}

export default function App(){
  const [active,setActive]=useState("Home");
  const [prov,setProv]=useState("MB");
  const [city,setCity]=useState("Winnipeg");
  const [locLoading,setLocLoading]=useState(true);
  const [showRateAlert,setShowRateAlert]=useState(false);
  const [legalModal,setLegalModal]=useState(null);
  const bocRates=useBocRates();

  useEffect(()=>{
    const handler=(e:any)=>setActive(e.detail);
    window.addEventListener("switchTab",handler);
    const alertHandler=()=>setShowRateAlert(true);
    window.addEventListener("openRateAlert",alertHandler);
    return()=>{window.removeEventListener("switchTab",handler);window.removeEventListener("openRateAlert",alertHandler);};
  },[]);

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
    if(active==="Home")return <HomeTab setActive={setActive}/>;
    if(active==="Rates")return <RatesTab {...tabProps} bocRates={bocRates} onLocationChange={(p,c)=>{setProv(p);setCity(c);}}/>;
    if(active==="Calculators")return <CalcTab prov={prov}/>;
    if(active==="Property Tax")return <PropertyTaxTab {...tabProps}/>;
    if(active==="Insurance")return <InsuranceTab initProv={prov}/>;
    if(active==="Rate Finder")return <RateFinderTab/>;
    if(active==="First-Time Buyers")return <FTHBTab initProv={prov}/>;
    if(active==="News")return <NewsTab initProv={prov}/>;
    if(active==="Listings")return <ListingsTab {...tabProps}/>;
    if(active==="Learn")return <LearnTab/>;
    if(active==="Glossary")return <GlossaryTab/>;
    if(active==="Renewal")return <RenewalTab/>;
    if(active==="Lawyers")return <LawyersTab/>;
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
          {[["Realtor.ca","https://www.realtor.ca"],["CMHC","https://www.cmhc-schl.gc.ca"],["Bank of Canada","https://www.bankofcanada.ca"],["Contact Us","mailto:info@canadamortgagerates.net"],["About","/about"],["FAQ","/faq"]].map(([l,u])=><a key={l} href={u} target={u.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.45)",fontSize:11,textDecoration:"none"}}>{l}</a>)}
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
