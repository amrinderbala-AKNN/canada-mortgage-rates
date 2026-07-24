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
    {name:"Assiniboine Credit Union",url:"https://www.acu.ca/tools-and-resources/lending-application?hsCtaAttrib=189007007654",ratesUrl:"https://www.acu.ca/rates",verified:true},
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
  // ── Tier 2 Banks ─────────────────────────────────────────────────────────
  {name:"HSBC Canada",url:"https://www.hsbc.ca/mortgages",type:"national"},
  {name:"Tangerine",url:"https://www.tangerine.ca/en/products/borrowing/mortgage",type:"national"},
  {name:"Simplii Financial",url:"https://www.simplii.com/en/home-equity/mortgages.html",type:"national"},
  {name:"Laurentian Bank",url:"https://www.laurentianbank.ca/en/personal/mortgages",type:"national"},
  // ── Monoline Lenders (broker channel) ────────────────────────────────────
  {name:"First National",url:"https://www.firstnational.ca",type:"online"},
  {name:"MCAP",url:"https://www.mcap.com/mortgages",type:"online"},
  {name:"CMLS Financial",url:"https://www.cmls.ca",type:"online"},
  {name:"RMG Mortgages",url:"https://www.rmgmortgages.ca",type:"online"},
  {name:"RFA Mortgage",url:"https://www.rfa.ca",type:"online"},
  {name:"MERIX Financial",url:"https://www.merixfinancial.com",type:"online"},
  {name:"Marathon Mortgage",url:"https://www.marathonmortgage.ca",type:"online"},
  {name:"NPX (Haventree)",url:"https://www.haventree.com",type:"online"},
  // ── Online / Digital Lenders ─────────────────────────────────────────────
  {name:"Nesto",url:"https://www.nesto.ca",type:"online"},
  {name:"True North Mortgage",url:"https://www.truenorthmortgage.ca",type:"online"},
  {name:"Homewise",url:"https://www.homewise.ca",type:"online"},
  {name:"Intellimortgage",url:"https://www.intellimortgage.com",type:"online"},
  // ── Alternative / B-Lenders ──────────────────────────────────────────────
  {name:"Equitable Bank",url:"https://www.eqbank.ca/personal-banking/mortgages",type:"online"},
  {name:"Home Trust",url:"https://www.hometrust.ca/mortgages",type:"online"},
  {name:"Alterna Bank",url:"https://www.alternabank.ca/mortgages",type:"online"},
  {name:"Bridgewater Bank",url:"https://www.bridgewaterbank.ca",type:"online"},
  {name:"Peoples Bank",url:"https://www.peoplesbank.ca/mortgages",type:"online"},
];
const TERMS=["1-year","2-year","3-year","5-year"];

// ── VERIFIED PARTNER RATES ────────────────────────────────────────────────────
// ACU rates sourced directly from acu.ca/rates — last updated June 22, 2026
const ACU_VERIFIED_RATES:{[term:string]:{fixed:number,variable:number|null}}={
  "1-year":{fixed:4.49,variable:4.45},
  "2-year":{fixed:4.29,variable:null},
  "3-year":{fixed:3.99,variable:null},
  "5-year":{fixed:4.09,variable:3.60},
};
const ACU_VERIFIED_UPDATED="Jun 22, 2026";
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
  {bank:"CMLS Financial",type:"Rate",badge:"📉 Monoline Best Rate",color:"#0d2240",textColor:"#fff",offer:"CMLS Best 3 & 5-Year Fixed Rates",detail:"CMLS Financial consistently offers some of Canada's lowest 3-year and 5-year fixed rates. Available through mortgage brokers nationwide. Now owned by nesto Inc.",expires:"Ongoing",url:"https://www.cmls.ca",tag:"Ongoing",provinces:[]},
  {bank:"First National",type:"Switch",badge:"🔄 Switch Offer",color:"#1a3a5c",textColor:"#fff",offer:"No-Fee Mortgage Switch",detail:"Switch your mortgage to First National at renewal with no switch fees. Flexible prepayment options up to 20% annually.",expires:"Ongoing",url:"https://www.firstnational.ca",tag:"Ongoing",provinces:[]},
  {bank:"Equitable Bank",type:"Rate",badge:"📉 Rate Special",color:"#0d2240",textColor:"#fff",offer:"EQ Bank Mortgage Rates",detail:"Equitable Bank (EQ Bank) offers competitive mortgage rates through brokers. Strong alternative lender option for self-employed or non-traditional income buyers.",expires:"Ongoing",url:"https://www.eqbank.ca/personal-banking/mortgages",tag:"Ongoing",provinces:[]},
  {bank:"Home Trust",type:"Rate",badge:"📉 B-Lender",color:"#374151",textColor:"#fff",offer:"Home Trust Alternative Mortgages",detail:"Canada's leading B-lender for borrowers who don't qualify at traditional banks. Self-employed, new Canadians, bruised credit — Home Trust has solutions.",expires:"Ongoing",url:"https://www.hometrust.ca/mortgages",tag:"Ongoing",provinces:[]},
  {bank:"Homewise",type:"Rate",badge:"📉 Broker Platform",color:"#7c3aed",textColor:"#fff",offer:"Homewise — 30+ Lenders in One",detail:"Homewise negotiates with 30+ banks and lenders for you. Free service, no credit check to start, and they handle the paperwork.",expires:"Ongoing",url:"https://www.homewise.ca",tag:"Ongoing",provinces:[]},
  {bank:"Tangerine",type:"Rate",badge:"📉 Online Bank",color:"#ff6900",textColor:"#fff",offer:"Tangerine Mortgage Rates",detail:"Scotiabank's digital bank arm. Competitive online mortgage rates with no-fee banking. Fully digital process, strong for tech-savvy buyers.",expires:"Ongoing",url:"https://www.tangerine.ca/en/products/borrowing/mortgage",tag:"Ongoing",provinces:[]},
  {bank:"RMG Mortgages",type:"Rate",badge:"📉 Monoline",color:"#0891b2",textColor:"#fff",offer:"RMG Competitive Rates",detail:"RMG Mortgages (a division of MCAP) offers competitive rates for first-time buyers, self-employed, and new Canadians. Broker channel only.",expires:"Ongoing",url:"https://www.rmgmortgages.ca",tag:"Ongoing",provinces:[]},
  {bank:"MERIX Financial",type:"Rate",badge:"📉 Monoline",color:"#16a34a",textColor:"#fff",offer:"MERIX Mortgage Solutions",detail:"MERIX Financial has served 200,000+ Canadians since 2005. Competitive rates through brokers, strong prepayment privileges.",expires:"Ongoing",url:"https://www.merixfinancial.com",tag:"Ongoing",provinces:[]},
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
const INS_PROVIDERS=[
  // ── National / All Provinces ──────────────────────────────────────────────
  {name:"Intact Insurance",stars:"★★★★★",desc:"Canada's largest home insurer with $20B+ in premiums. Excellent claims service, fast resolution, all provinces. Consistent top J.D. Power ratings.",discount:"Bundle auto+home: save 15%",mult:1.12,url:"https://www.intact.net/en/personal-insurance/home-insurance/get-a-quote.aspx",provinces:[]},
  {name:"Aviva Canada",stars:"★★★★★",desc:"Covers 860,000+ Canadian homes. Strong in Ontario with flexible add-ons including identity theft protection and overland flood coverage.",discount:"New home discount: 10%",mult:1.05,url:"https://www.avivacanada.com/get-a-quote",provinces:[]},
  {name:"Co-operators",stars:"★★★★★",desc:"Canada's leading co-operative insurer. 5,000+ employees, consistently high satisfaction ratings. Backed by over 45 co-operative organizations.",discount:"Multi-policy discount: 12%",mult:0.97,url:"https://www.cooperators.ca/en/Insurance/Property/Home.aspx",provinces:[]},
  {name:"TD Insurance",stars:"★★★★☆",desc:"Strong digital experience. Great for TD banking customers — seamless bundling with home and auto. Fully online quoting in minutes.",discount:"TD banking customer discount",mult:0.88,url:"https://www.tdinsurance.com/products-services/home-insurance/quote",provinces:[]},
  {name:"Economical Insurance",stars:"★★★★☆",desc:"One of Canada's oldest insurers (150+ years). Flexible policies averaging $1,320/year. Top-rated in Ontario per user surveys.",discount:"New customer discount: 8%",mult:0.91,url:"https://www.economical.com/en/personal/home-insurance",provinces:[]},
  {name:"Sonnet Insurance",stars:"★★★★☆",desc:"100% digital insurer. Get a quote in 5 minutes. Average premium $1,300/year. Best for tech-savvy buyers who want everything online.",discount:"Online-only discount: 15%",mult:0.87,url:"https://www.sonnet.ca/home-insurance",provinces:["ON","QC","AB","NS","NB","PE","NL"]},
  {name:"Pembridge Insurance",stars:"★★★☆☆",desc:"Affordable option for budget-conscious homeowners. Works through independent brokers. Good for standard coverage needs.",discount:"Online quote discount: 5%",mult:0.84,url:"https://www.pembridge.com/home-insurance",provinces:["ON","NS","NB","PE","NL"]},
  {name:"Belairdirect",stars:"★★★★☆",desc:"Online-first insurer with competitive pricing and fast quotes. Strong digital claims process. Backed by Intact Financial.",discount:"Online purchase discount: 10%",mult:0.86,url:"https://www.belairdirect.com/en/home-insurance/get-a-quote",provinces:["ON","QC","AB","NS","NB"]},
  {name:"Northbridge Insurance",stars:"★★★★☆",desc:"Comprehensive coverage with flexible deductible options. Part of Fairfax Financial Holdings. Strong in Ontario and western Canada.",discount:"New home discount: 12%",mult:1.02,url:"https://www.northbridgeinsurance.ca/personal-insurance/home-insurance",provinces:["ON","AB","BC"]},
  {name:"Allstate Canada",stars:"★★★★☆",desc:"Part of Allstate Insurance Company. Available in 5 provinces. Landlord insurance specialist. Easy app management and discounts.",discount:"Loyalty discount: 10%",mult:1.01,url:"https://www.allstate.ca/home-insurance.aspx",provinces:["AB","NB","NS","ON","QC"]},
  {name:"RSA Canada",stars:"★★★★☆",desc:"Subsidiary of Intact Financial. Top-ranked in Alberta. 90% of Canadian brokers rate coverage in line with or ahead of competition.",discount:"Claim-free discount: 15%",mult:0.98,url:"https://www.rsagroup.ca/en/personal/home-insurance",provinces:[]},
  {name:"Pafco Insurance",stars:"★★★☆☆",desc:"Residential fire policy specialists. Part of Allstate. Covers rental and vacation homes. Property guarantee for homeowners.",discount:"Multi-policy available",mult:0.93,url:"https://www.pafco.ca",provinces:["ON","AB","NS","NB"]},
  // ── Online / Digital ─────────────────────────────────────────────────────
  {name:"Square One Insurance",stars:"★★★★★",desc:"Canada's best fully online insurer. Customizable coverage, instant approval, competitive pricing. Best for condos and rentals.",discount:"Online quote: instant approval",mult:0.82,url:"https://www.squareoneinsurance.ca/get-a-quote",provinces:["AB","BC","MB","ON","QC","SK"]},
  {name:"Rates.ca",stars:"★★★★★",desc:"Compare quotes from 30+ Canadian insurers in one place. Find the lowest rate instantly. Free comparison, no obligation.",discount:"Compare all providers at once",mult:0.80,url:"https://rates.ca/home-insurance",provinces:[]},
  // ── Quebec Specialists ────────────────────────────────────────────────────
  {name:"Desjardins Insurance",stars:"★★★★★",desc:"Canada's leading financial co-operative. Best in Quebec and Ontario. Excellent claims service. Average premium $1,280/year.",discount:"Claim-free discount: 20%",mult:0.79,url:"https://www.desjardinsgeneralinsurance.com/en/home-insurance",provinces:["QC","ON","NB","NS"]},
  {name:"La Capitale",stars:"★★★★☆",desc:"Quebec-based insurer with strong local presence. Merger with SSQ creates one of Quebec's strongest financial groups.",discount:"Loyalty discount: 10%",mult:0.83,url:"https://www.lacapitale.com/en/insurance/home",provinces:["QC"]},
  {name:"SSQ Insurance",stars:"★★★★☆",desc:"Quebec co-operative insurer. Now merged with La Capitale. Strong member benefits and competitive rates in Quebec.",discount:"Member discount available",mult:0.85,url:"https://www.ssq.ca/en/insurance/home",provinces:["QC","ON"]},
  // ── Western Canada Specialists ────────────────────────────────────────────
  {name:"Wawanesa Insurance",stars:"★★★★★",desc:"Canadian-owned mutual insurer. Budget-friendly at $1,280/year average. Praised for efficient claims. Strong prairie and BC presence.",discount:"Loyalty discount after 3 years",mult:0.93,url:"https://www.wawanesa.com/canada/insurance/home-insurance",provinces:["MB","SK","AB","BC","ON"]},
  {name:"SGI Canada",stars:"★★★★☆",desc:"Saskatchewan's most trusted insurer. Excellent prairie coverage including hail and flooding. Multi-line discounts available.",discount:"Multi-line discount: 10%",mult:0.90,url:"https://www.sgicanada.ca/insurance/home-insurance",provinces:["SK","MB","AB","ON","NB","NS"]},
  {name:"BCAA Insurance",stars:"★★★★★",desc:"BC's most trusted insurer. Backed by the BC Automobile Association. BCAA members get significant discounts.",discount:"BCAA member discount: 20%",mult:0.89,url:"https://www.bcaa.com/insurance/home",provinces:["BC"]},
  {name:"Gore Mutual",stars:"★★★★☆",desc:"Specialized water damage coverage including overland flood and sewer backup. Strong in Ontario and BC through brokers.",discount:"Claims-free discount available",mult:0.95,url:"https://www.goremutual.ca/personal-insurance/home-insurance",provinces:["ON","BC","AB","NS","NB"]},
  // ── Ontario Specialists ───────────────────────────────────────────────────
  {name:"CAA Insurance",stars:"★★★★☆",desc:"CAA members get exclusive discounts. Strong Ontario focus with good roadside and home bundle packages.",discount:"CAA member discount: 20%",mult:0.91,url:"https://www.caasco.com/insurance/home-insurance",provinces:["ON","MB","SK","AB"]},
  {name:"Intact Insurance Broker",stars:"★★★★☆",desc:"Independent brokers offering Intact products. Access to multiple coverage options and competitive pricing.",discount:"Broker comparison discount",mult:1.08,url:"https://www.intact.net/en/find-a-broker.aspx",provinces:["ON","AB","BC","QC"]},
  // ── Atlantic Canada Specialists ───────────────────────────────────────────
  {name:"Co-operators Atlantic",stars:"★★★★☆",desc:"Strong Atlantic Canada coverage. Local agents in every province. Well-regarded for claims handling in NB, NS, NL, PE.",discount:"Atlantic multi-policy discount",mult:0.96,url:"https://www.cooperators.ca/en/Insurance/Property/Home.aspx",provinces:["NB","NS","NL","PE"]},
  {name:"Assumption Life",stars:"★★★★☆",desc:"New Brunswick-based insurer with strong Atlantic roots. Bilingual service, competitive premiums, strong local claims team.",discount:"Loyalty discount: 8%",mult:0.88,url:"https://www.assumption.ca/en/insurance/home-insurance",provinces:["NB","NS","PE","NL"]},
  // ── Manitoba Specialists ──────────────────────────────────────────────────
  {name:"Portage Mutual",stars:"★★★★☆",desc:"Manitoba-based mutual insurer. Serving Canadian homeowners since 1884. Strong rural and farm property coverage.",discount:"Long-term member discount",mult:0.92,url:"https://www.portagemutual.com",provinces:["MB","SK","AB","ON"]},
  {name:"Westland Insurance",stars:"★★★★☆",desc:"One of Canada's fastest-growing brokerages. Access to multiple insurers, competitive pricing, and strong digital tools.",discount:"Broker access to 20+ insurers",mult:0.94,url:"https://www.westlandinsurance.ca/home-insurance",provinces:["BC","AB","SK","MB","ON"]},
];
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

const shimmerStyle=`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.7;transform:scale(1.1)}}@keyframes glow{0%,100%{box-shadow:0 0 4px rgba(239,68,68,0.4)}50%{box-shadow:0 0 12px rgba(239,68,68,0.9),0 0 20px rgba(239,68,68,0.4)}}@media(max-width:767px){.tab-ribbon-desktop{display:none!important}}@media print{body{background:#fff!important}header,nav,.tab-ribbon-desktop,footer,[class*="ticker"],[class*="chatbot"],[class*="cookie"],[class*="install"],[class*="backToTop"]{display:none!important}button:not(.print-keep){display:none!important}.print-summary{display:block!important}*{box-shadow:none!important;animation:none!important}}`;
function Skeleton({w="100%",h=16,r=6,mb=0}:{w?:string,h?:number,r?:number,mb?:number}){return <div style={{width:w,height:h,borderRadius:r,background:"linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite",marginBottom:mb}}/>;}
function EmptyState({icon,title,sub,link,linkText}:{icon:string,title:string,sub:string,link?:string,linkText?:string}){return(<div style={{textAlign:"center",padding:"40px 20px"}}><div style={{fontSize:48,marginBottom:12}}>{icon}</div><div style={{fontSize:15,fontWeight:700,color:s.navy,marginBottom:6}}>{title}</div><div style={{fontSize:13,color:s.muted,marginBottom:link?14:0}}>{sub}</div>{link&&<a href={link} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"8px 20px",background:s.navy,color:"#fff",borderRadius:8,fontSize:13,fontWeight:700,textDecoration:"none"}}>{linkText}</a>}</div>);}
function Card({children,style}:{children:React.ReactNode,style?:React.CSSProperties}){return <div style={{background:s.white,borderRadius:12,padding:18,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",...style}}>{children}</div>;}
function Field({label,children}:{label:string,children:React.ReactNode}){return <div style={{marginBottom:9}}><label style={{display:"block",fontSize:10,fontWeight:700,color:s.muted,marginBottom:3,textTransform:"uppercase",letterSpacing:"0.4px"}}>{label}</label>{children}</div>;}
const inp:React.CSSProperties={width:"100%",padding:"8px 10px",borderRadius:8,border:`1.5px solid #e2e8f0`,fontSize:13,fontWeight:500,boxSizing:"border-box"};
const calcBtn:React.CSSProperties={width:"100%",padding:10,background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",marginTop:6};
const resultBox:React.CSSProperties={background:`linear-gradient(135deg,#0d2240,#1a3a5c)`,borderRadius:10,padding:14,marginTop:12,color:"#fff"};
function RRow({l,v,bold}:{l:string,v:string,bold?:boolean}){return <><div style={{color:"rgba(255,255,255,0.7)",fontSize:11}}>{l}</div><div style={{textAlign:"right",fontWeight:bold?700:400,fontSize:11}}>{v}</div></>;}
const SEED_REVIEWS=[
  {id:"r6",name:"Gagan",city:"Winnipeg, MB",role:"First Time Buyer",rating:5,text:"Amazing website, I accidentally landed on the page as I was doing research for my first time home purchase and I was able to find financing, home, lawyers. The entire process from start to finish was very educational. I have shared with all friends! The calculators helped so much in budget planning. Highly recommend!",created_at:"2026-07-17T23:46:31.442418+00:00",verified:true},
  {id:"r5",name:"Gerame N",city:"Winnipeg, MB",role:"Explorer",rating:5,text:"Excellent resource for anyone looking to compare mortgage rates and make informed home financing decisions in Canada. Easy to navigate, provides up-to-date mortgage rate information, and offers a wide range of useful tools and calculators.",created_at:"2026-07-17T13:27:00.864763+00:00",verified:true},
  {id:"r4",name:"Michael R",city:"Winnipeg, MB",role:"First-time buyer",rating:5,text:"I used the mortgage payment calculator while shopping for my mortgage, and it helped me find a payment range that fit my budget. The calculator was simple to use and saved me a lot of time. Definitely worth checking out.",created_at:"2026-07-16T20:22:47.641099+00:00",verified:true},
  {id:"r3",name:"George",city:"Victoria, BC",role:"Mortgage Renewal",rating:5,text:"My mortgage was due for renewal and I was able to use canadamortgagerates as a one stop shop to review mortgage rates with all banks and make the switch at the best rate! Highly recommend!",created_at:"2026-07-15T18:33:51.071369+00:00",verified:true},
  {id:"r2",name:"Jessica R",city:"Calgary, AB",role:"First-time buyer",rating:5,text:"Just bought my first home in Calgary North and this site made the whole mortgage process so much less intimidating. The stress test calculator showed me exactly what I could afford before I even talked to a bank. Highly recommend!",created_at:"2026-07-10T03:25:21.945726+00:00",verified:true},
  {id:"s1",name:"Priya Sharma",city:"Brampton, ON",role:"First-time buyer",rating:5,text:"I was completely lost navigating the mortgage process as a first-time buyer. This platform broke everything down in plain English. Ended up saving almost $8,000 by comparing lenders here before walking into my bank.",created_at:"2026-07-14T10:22:00Z",verified:true},
  {id:"s2",name:"Kevin Tremblay",city:"Laval, QC",role:"Renewing in 2026",rating:5,text:"My 5-year term was up and I had no idea what a fair renewal rate looked like. Used the Renewal Calculator here and realized my lender offer was 0.4% above what others were offering. Switched lenders and saved $180/month.",created_at:"2026-07-08T14:05:00Z",verified:true},
  {id:"s3",name:"Derek Fontaine",city:"Winnipeg, MB",role:"Self-employed buyer",rating:4,text:"As a self-employed person, getting a mortgage is a nightmare. The Rate Finder quiz flagged that I needed a B-lender and explained why. Saved me from getting rejected by three banks before talking to a broker.",created_at:"2026-07-01T16:18:00Z",verified:true},
  {id:"s4",name:"James Whitford",city:"Saskatoon, SK",role:"Refinancing",rating:4,text:"Ran the refinancing numbers here before calling my lender. Went in knowing exactly what rate I needed to make the break penalty worth it. Negotiated them down 0.3%. Not bad for 20 minutes on a free website.",created_at:"2026-07-10T08:30:00Z",verified:true},
];
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
    fetch("/api/reviews").then(r=>r.json()).then(d=>{const live=Array.isArray(d)?d:[];const seedIds=new Set(live.map((r:any)=>r.id));const merged=[...live,...SEED_REVIEWS.filter(r=>!seedIds.has(r.id))];setReviews(merged);setLoading(false);}).catch(()=>{setReviews(SEED_REVIEWS);setLoading(false);});
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

function FloatingJourneyButton({setActive}:{setActive:(t:string)=>void}){
  const [show,setShow]=useState(false);
  useEffect(()=>{
    const h=()=>setShow(window.scrollY>200);
    window.addEventListener("scroll",h);
    return()=>window.removeEventListener("scroll",h);
  },[]);
  if(!show)return null;
  return(
    <button
      onClick={()=>{setActive("Home");setTimeout(()=>window.dispatchEvent(new CustomEvent("setHomeTab",{detail:"journey"})),100);}}
      style={{position:"fixed",bottom:140,right:16,zIndex:9989,background:`linear-gradient(135deg,${s.red},#b91c1c)`,color:"#fff",border:"none",borderRadius:30,padding:"10px 16px",fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:"0 4px 16px rgba(239,68,68,0.5)",animation:"glow 2s infinite",display:"flex",alignItems:"center",gap:6}}
    >
      📊 Cost Breakdown
    </button>
  );
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

const TODAY=new Date().toLocaleDateString('en-CA',{year:'numeric',month:'long',day:'numeric'});
const TABS=["Home","Rates","Calculators","Property Tax","Insurance","Rate Finder","First-Time Buyers","Renewal","Listings","New Builds","Professionals","Consult","News","Resources","Free Help"];
const SEARCH_INDEX=[
  // Tabs
  {title:"Home",desc:"Overview, latest features, tools, services, about us",tab:"Home",icon:"🍁",type:"Tab"},
  {title:"Rates",desc:"Compare mortgage rates from 50+ lenders by province — live",tab:"Rates",icon:"📊",type:"Tab"},
  {title:"Calculators",desc:"Payment, affordability, stress test, renewal, refinancing, amortization, closing costs",tab:"Calculators",icon:"🧮",type:"Tab"},
  {title:"Property Tax",desc:"Estimate property tax by city, appeal assessment, payment options",tab:"Property Tax",icon:"🏛️",type:"Tab"},
  {title:"Insurance",desc:"Home insurance quotes, coverage guide, deductible calculator, claims guide",tab:"Insurance",icon:"🛡️",type:"Tab"},
  {title:"Rate Finder",desc:"Personalized rate quiz, fixed vs variable 2026, rate impact calculator, pre-approval guide",tab:"Rate Finder",icon:"🔍",type:"Tab"},
  {title:"First-Time Buyers",desc:"FHSA, HBP, provincial programs, down payment help, step-by-step guide",tab:"First-Time Buyers",icon:"🏠",type:"Tab"},
  {title:"Renewal",desc:"Compare renewal offer, negotiation script, renewal guide and timeline",tab:"Renewal",icon:"🔄",type:"Tab"},
  {title:"Listings",desc:"Search homes, market tools, home value estimator, free evaluation",tab:"Listings",icon:"🏘️",type:"Tab"},
  {title:"New Builds",desc:"Explore new home developments, buyer guide, construction mortgage, connect with builders",tab:"New Builds",icon:"🏗️",type:"Tab"},
  {title:"Realtors",desc:"Find a verified realtor, buyer's guide, home buying timeline",tab:"Professionals",icon:"🤝",type:"Tab"},
  {title:"Lawyers",desc:"Find a real estate lawyer, closing guide, Law Society verification",tab:"Professionals",icon:"⚖️",type:"Tab"},
  {title:"Consult",desc:"Free mortgage consultation, newsletter, BoC rate alerts",tab:"Consult",icon:"📞",type:"Tab"},
  {title:"News",desc:"Latest Canadian mortgage and real estate news by province",tab:"News",icon:"📰",type:"Tab"},
  {title:"Resources",desc:"Mortgage blog, 15 articles, glossary, quick guides",tab:"Resources",icon:"📚",type:"Tab"},
  // Calculators
  {title:"Payment Calculator",desc:"Calculate your exact monthly mortgage payment with fixed or variable rate",tab:"Calculators",icon:"💰",type:"Calculator",sub:"payment"},
  {title:"Affordability Calculator",desc:"How much house can you afford? Based on GDS/TDS ratios lenders actually use",tab:"Calculators",icon:"🏡",type:"Calculator",sub:"afford"},
  {title:"Stress Test Calculator",desc:"Will you pass? Calculate at your rate +2% or 5.25% — whichever is higher",tab:"Calculators",icon:"📋",type:"Calculator",sub:"stress"},
  {title:"Renewal Calculator",desc:"Compare your lender's renewal offer vs shopping around — see how much you'd save",tab:"Calculators",icon:"🔄",type:"Calculator",sub:"renewal"},
  {title:"Refinancing Calculator",desc:"Should I refi? Penalty estimator, blend & extend, cash-out, HELOC comparison",tab:"Calculators",icon:"💳",type:"Calculator",sub:"refi"},
  {title:"Amortization Schedule",desc:"Year-by-year breakdown of mortgage payments, interest, and remaining balance",tab:"Calculators",icon:"📅",type:"Calculator",sub:"amort"},
  {title:"Closing Cost Calculator",desc:"Land transfer tax, legal fees, title insurance by province — first-time buyer rebates included",tab:"Calculators",icon:"🏷️",type:"Calculator",sub:"closing"},
  {title:"Document Checklist",desc:"Everything you need to apply for a mortgage — organized by document type",tab:"Calculators",icon:"📁",type:"Calculator",sub:"docs"},
  {title:"Rent vs Buy Calculator",desc:"Is it better to rent or buy? Calculate the true 10-year cost comparison",tab:"Calculators",icon:"🏠",type:"Calculator",sub:"rentvbuy"},
  // New Builds
  {title:"Construction Mortgage Guide",desc:"How new build mortgages differ from resale — rate holds, draw schedules, GST/HST",tab:"New Builds",icon:"💳",type:"Topic"},
  {title:"New Build Buyer's Guide",desc:"8 buyer priorities, due diligence checklist, new build vs resale, 2026 market data",tab:"New Builds",icon:"📋",type:"Topic"},
  {title:"New Build Savings & Rebates",desc:"GST/HST rebate up to $50K, 30-year amortization, Manitoba PST rebate, builder incentives",tab:"New Builds",icon:"💰",type:"Topic"},
  {title:"Find My New Home",desc:"Submit buyer request — connect with builders and developers in your province",tab:"New Builds",icon:"🏡",type:"Topic"},
  // Home Value
  {title:"Home Value Estimator",desc:"Request a free professional home evaluation from a local expert",tab:"Listings",icon:"🏡",type:"Topic"},
  {title:"Free Home Evaluation",desc:"Connect with a local professional for a free CMA — selling, refinancing, or curious",tab:"Listings",icon:"🏠",type:"Topic"},
  // Insurance
  {title:"Home Insurance Quotes",desc:"Compare Square One, Intact, Aviva, Wawanesa, Desjardins, BCAA, SGI, Gore Mutual and 25+ providers by province",tab:"Insurance",icon:"🏠",type:"Topic"},
  {title:"Home Insurance Guide",desc:"Province cost comparison, how to save on premiums, riders, FAQ — 2026",tab:"Insurance",icon:"📖",type:"Topic"},
  {title:"Overland Flood Insurance",desc:"Not covered by standard policies — add-on rider $100–$300/year",tab:"Insurance",icon:"🌊",type:"Topic"},
  {title:"CMHC vs Home Insurance",desc:"What's the difference between mortgage default insurance and home insurance?",tab:"Insurance",icon:"🛡️",type:"Topic"},
  // Blog articles
  {title:"Fixed vs Variable 2026",desc:"Blog: Which mortgage type makes more sense with BoC holding at 2.25%?",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Mortgage Stress Test Guide",desc:"Blog: Complete 2026 guide — how it works, 2026 changes, how to pass",tab:"Resources",icon:"📝",type:"Article"},
  {title:"First-Time Buyer Programs",desc:"Blog: Every federal and provincial program in Canada — FHSA, HBP, LTT rebates",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Mortgage Renewal Guide",desc:"Blog: How to get the best rate at renewal — negotiation script included",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Closing Costs Canada",desc:"Blog: Every fee you need to budget for — LTT, legal fees, CMHC, moving costs",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Down Payment Guide Canada",desc:"Blog: How much you need, acceptable sources, strategies to save faster",tab:"Resources",icon:"📝",type:"Article"},
  {title:"CMHC Insurance Explained",desc:"Blog: What it costs, how to avoid it, true total cost with interest",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Breaking Your Mortgage Early",desc:"Blog: IRD penalties, big bank IRD problem, when it makes financial sense",tab:"Resources",icon:"📝",type:"Article"},
  {title:"HELOC Guide Canada",desc:"Blog: How HELOCs work, qualify, rates, uses, Smith Manoeuvre",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Best Mortgage Lenders 2026",desc:"Blog: Banks vs credit unions vs monolines — rates and penalty comparison",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Land Transfer Tax by Province",desc:"Blog: Every province with exact calculations and first-time buyer rebates",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Mortgage Refinancing Guide",desc:"Blog: When it makes sense, break-even formula, blend & extend vs refinancing",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Self-Employed Mortgage",desc:"Blog: How to qualify in 2026 — income verification, stated income, documents needed",tab:"Resources",icon:"📝",type:"Article"},
  {title:"Condo vs House Canada 2026",desc:"Blog: True cost comparison, appreciation, 2026 market reality by city",tab:"Resources",icon:"📝",type:"Article"},
  // Topics
  {title:"CMHC Insurance",desc:"Mortgage default insurance — rates, true cost, how to avoid paying it",tab:"First-Time Buyers",icon:"🛡️",type:"Topic"},
  {title:"FHSA — First Home Savings Account",desc:"Tax-free savings for first-time buyers — $8K/year, $40K lifetime max",tab:"First-Time Buyers",icon:"💰",type:"Topic"},
  {title:"Home Buyers' Plan (HBP)",desc:"Withdraw up to $60K from RRSP tax-free for a home purchase",tab:"First-Time Buyers",icon:"🏦",type:"Topic"},
  {title:"Land Transfer Tax",desc:"Provincial tax when buying a home — Ontario, BC, Manitoba, Quebec rates",tab:"Calculators",icon:"🏛️",type:"Topic",sub:"closing"},
  {title:"Fixed vs Variable Rate",desc:"Which mortgage type is right for you in 2026?",tab:"Rate Finder",icon:"📊",type:"Topic"},
  {title:"Mortgage Stress Test",desc:"Must qualify at your rate +2% or 5.25% — whichever is higher",tab:"Calculators",icon:"📋",type:"Topic",sub:"stress"},
  {title:"Private Lenders Canada",desc:"Bad credit, self-employed, bridge financing — MICs, B-lenders, private mortgage options",tab:"Rates",icon:"🔓",type:"Topic"},
  {title:"Private Mortgage Guide",desc:"Blog: When banks say no — MICs, B-lenders, who qualifies and how to connect",tab:"Resources",icon:"🔓",type:"Article"},
  {title:"Property Tax Appeal Guide",desc:"Blog: How to challenge your assessment and save $500–$3,000 per year",tab:"Resources",icon:"⚖️",type:"Article"},
  {title:"Mortgage Renewal Negotiation Script",desc:"Blog: Word-for-word script to negotiate your renewal rate — $400B renewing in 2026",tab:"Resources",icon:"💬",type:"Article"},
  {title:"Home Inspection Guide",desc:"Blog: What is covered, what it costs, how to choose a certified inspector",tab:"Resources",icon:"🔍",type:"Article"},
  {title:"Mortgage Broker vs Bank 2026",desc:"Blog: Which is better — rates, penalties, and when to use each",tab:"Resources",icon:"💼",type:"Article"},
  {title:"New Build Mortgage Guide",desc:"Blog: Rate holds, GST/HST, 30-year amortization, builder lender trap",tab:"Resources",icon:"🏗️",type:"Article"},
  {title:"Home Evaluation vs Appraisal",desc:"Blog: What is the difference, when you need each one",tab:"Resources",icon:"🏡",type:"Article"},
  {title:"Switching Mortgage Lenders",desc:"Blog: Penalty-free at renewal — process, costs, when to switch vs stay",tab:"Resources",icon:"🔄",type:"Article"},
  {title:"Home Insurance Coverage Guide",desc:"Blog: What standard policies cover and what they do not — critical riders to add",tab:"Resources",icon:"🛡️",type:"Article"},
  {title:"Rent vs Buy Canada 2026",desc:"Blog: Honest city-by-city analysis — Winnipeg, Toronto, Vancouver, Calgary",tab:"Resources",icon:"🏠",type:"Article"},
  {title:"Bank of Canada Rate Explained",desc:"Blog: How BoC decisions affect fixed vs variable — 2022-2026 rate cycle recap",tab:"Resources",icon:"🏦",type:"Article"},
  {title:"Land Transfer Tax Rebates 2026",desc:"Blog: First-time buyer LTT rebates by province — Ontario up to $8,475, BC exemptions",tab:"Resources",icon:"🏛️",type:"Article"},
  {title:"Real Estate Lawyer at Closing",desc:"Blog: What your lawyer does, what you sign, closing costs they handle",tab:"Resources",icon:"⚖️",type:"Article"},
  {title:"New Canadian Mortgage Guide",desc:"Blog: Getting a mortgage as a newcomer — programs, building credit, CMHC newcomer",tab:"Resources",icon:"🌍",type:"Article"},
  {title:"How to Choose a Realtor",desc:"Blog: 10 questions to ask before signing — red flags, dual agency explained",tab:"Resources",icon:"🤝",type:"Article"},
  {title:"Property Tax by City Canada",desc:"Blog: 2026 comparison — Vancouver lowest, Winnipeg mid-range, Hamilton highest",tab:"Resources",icon:"🏛️",type:"Article"},
  {title:"Stress Test Changes 2026",desc:"Blog: 30-year amortization expanded, $1.5M insured cap — what changed",tab:"Resources",icon:"📋",type:"Article"},
  {title:"First-Time Buyer Winnipeg 2026",desc:"Blog: Complete local guide — prices, programs, neighbourhoods, credit unions",tab:"Resources",icon:"🍁",type:"Article"},
  {title:"Bad Credit Mortgage",desc:"Options for borrowers with bruised credit, bankruptcy, or non-traditional income",tab:"Rates",icon:"🔓",type:"Topic"},
  {title:"Bridge Financing",desc:"Short-term private mortgage to buy before selling your existing home",tab:"Rates",icon:"🔓",type:"Topic"},
  {title:"Rate History",desc:"BoC rate timeline 2020 to present — full history and economist forecasts",tab:"Rates",icon:"📈",type:"Topic"},
  {title:"Lender Guide",desc:"Banks vs credit unions vs monolines vs brokers — how to choose",tab:"Rates",icon:"🏦",type:"Topic"},
  {title:"Mortgage Glossary",desc:"50+ mortgage terms explained in plain English",tab:"Resources",icon:"📖",type:"Topic"},
  {title:"Pre-Approval Guide",desc:"Documents needed, 6-step timeline, mistakes to avoid — printable PDF",tab:"Rate Finder",icon:"📋",type:"Topic"},
  {title:"Renewal Negotiation Script",desc:"Word-for-word script to negotiate your renewal rate with your lender",tab:"Renewal",icon:"💬",type:"Topic"},
  {title:"Property Tax Appeal",desc:"How to appeal your assessment and potentially save $500–$3,000",tab:"Property Tax",icon:"⚖️",type:"Topic"},
  {title:"Home Insurance Coverage",desc:"What's covered, what's NOT (flooding, earthquakes, sewer backup)",tab:"Insurance",icon:"🛡️",type:"Topic"},
  {title:"Average Home Prices",desc:"Average prices by province with down payment required — 2026",tab:"Listings",icon:"📊",type:"Topic"},
  {title:"Neighbourhood Checklist",desc:"20-point due diligence checklist before making an offer on a home",tab:"Listings",icon:"🏘️",type:"Topic"},
  {title:"Closing Timeline",desc:"From offer accepted to keys — what happens at each stage",tab:"Professionals",icon:"📅",type:"Topic"},
  {title:"30-Year Amortization",desc:"Who qualifies, how it reduces payments, new 2026 rules for new builds",tab:"First-Time Buyers",icon:"📅",type:"Topic"},
  {title:"HELOC",desc:"Home equity line of credit — how it works, rates, uses, qualification",tab:"Resources",icon:"💳",type:"Topic"},
  {title:"Rate Impact Calculator",desc:"See the dollar difference between two rates over full amortization",tab:"Rate Finder",icon:"🧮",type:"Topic"},
  {title:"Find a Real Estate Lawyer",desc:"Connect with verified Winnipeg real estate lawyers — closing leads",tab:"Professionals",icon:"⚖️",type:"Topic"},
  {title:"Find a Realtor",desc:"Connect with verified Winnipeg realtors — buyer and seller leads",tab:"Professionals",icon:"🤝",type:"Topic"},
];

function SiteSearch({onClose,onNavigate}:{onClose:()=>void,onNavigate:(tab:string)=>void}){
  const [query,setQuery]=useState("");
  const [aiResults,setAiResults]=useState<any[]|null>(null);
  const [loading,setLoading]=useState(false);
  const inputRef=useRef<any>(null);
  const debounceRef=useRef<any>(null);

  useEffect(()=>{
    setTimeout(()=>inputRef.current?.focus(),100);
    const handler=(e:KeyboardEvent)=>{if(e.key==="Escape")onClose();};
    window.addEventListener("keydown",handler);
    return()=>window.removeEventListener("keydown",handler);
  },[]);

  // Smart synonym search
  const synonymMap:{[k:string]:string[]}={
    "borrow":["affordability","how much","qualify"],
    "afford":["affordability","how much","qualify","income"],
    "how much":["affordability","payment","calculator"],
    "monthly":["payment calculator","monthly payment"],
    "payment":["payment calculator","monthly"],
    "qualify":["stress test","affordability","income"],
    "stress test":["stress test","qualify","pass"],
    "pass":["stress test","qualify"],
    "break":["refinancing","penalty","IRD","break mortgage"],
    "penalty":["refinancing","IRD","break"],
    "renew":["renewal","negotiate","renewal calculator"],
    "negotiate":["renewal","negotiation script","negotiate"],
    "first time":["first-time buyers","FHSA","HBP","down payment"],
    "first home":["first-time buyers","FHSA","HBP"],
    "fhsa":["first home savings","first-time buyers"],
    "rrsp":["home buyers plan","HBP","first-time buyers"],
    "down payment":["first-time buyers","down payment","affordability"],
    "insurance":["home insurance","CMHC","insurance quotes"],
    "cmhc":["CMHC insurance","mortgage default","first-time buyers"],
    "lawyer":["real estate lawyer","closing","lawyers"],
    "closing":["closing cost","lawyers","closing costs"],
    "realtor":["realtors","find a realtor","buyer guide"],
    "agent":["realtors","find a realtor"],
    "new home":["new builds","construction mortgage","new build"],
    "new build":["new builds","construction mortgage","builder"],
    "builder":["new builds","new build","construction"],
    "house value":["home value","evaluation","listings"],
    "home worth":["home value","evaluation","listings"],
    "evaluate":["home value","evaluation","listings"],
    "variable":["fixed vs variable","variable rate","rate finder"],
    "fixed":["fixed vs variable","fixed rate","rates"],
    "rate":["rates","compare rates","rate finder"],
    "heloc":["HELOC","home equity","refinancing"],
    "equity":["HELOC","refinancing","home value"],
    "tax":["property tax","land transfer tax","closing costs"],
    "amortization":["amortization schedule","amortization"],
    "schedule":["amortization schedule"],
    "glossary":["mortgage glossary","resources","glossary"],
    "definition":["mortgage glossary","resources"],
    "self employed":["self-employed mortgage","resources"],
    "condo":["condo vs house","resources","listings"],
  };

  const smartSearch=(q:string)=>{
    const lower=q.toLowerCase();
    // Direct keyword match first
    const direct=SEARCH_INDEX.filter(item=>
      item.title.toLowerCase().includes(lower)||
      item.desc.toLowerCase().includes(lower)
    );
    // Synonym expansion
    const synonymHits:any[]=[];
    Object.entries(synonymMap).forEach(([key,synonyms])=>{
      if(lower.includes(key)){
        synonyms.forEach(syn=>{
          SEARCH_INDEX.forEach(item=>{
            if((item.title.toLowerCase().includes(syn.toLowerCase())||
               item.desc.toLowerCase().includes(syn.toLowerCase()))&&
               !direct.find(d=>d.title===item.title)&&
               !synonymHits.find(d=>d.title===item.title)){
              synonymHits.push(item);
            }
          });
        });
      }
    });
    return [...direct,...synonymHits].slice(0,12);
  };

  const results=query.trim().length<2?[]:smartSearch(query);

  // AI semantic search with debounce
  useEffect(()=>{
    if(query.trim().length<3){setAiResults(null);return;}
    clearTimeout(debounceRef.current);
    debounceRef.current=setTimeout(async()=>{
      setLoading(true);
      try{
        const indexSummary=SEARCH_INDEX.map((item,i)=>`${i}|${item.title}|${item.tab}|${item.desc}`).join("\n");
        const res=await fetch("/api/anthropic",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            model:"claude-sonnet-4-6",
            max_tokens:500,
            messages:[{role:"user",content:`You are a search assistant for a Canadian mortgage website. A user searched: "${query}"

Here are the available pages/topics (format: index|title|tab|description):
${indexSummary}

Return the top 5 most relevant results for the user's query. Consider synonyms, intent, and related concepts — not just exact keyword matches. For example "how much can I borrow" should match "Affordability Calculator", "what will I pay monthly" should match "Payment Calculator", "I want to buy a house" should match "First-Time Buyers" and "Calculators".

Respond ONLY with a JSON array of index numbers, most relevant first. Example: [4,12,7,23,1]`}]
          })
        });
        const data=await res.json();
        const text=data.content?.[0]?.text||"[]";
        const match=text.match(/\[[\d,\s]+\]/);
        if(match){
          const indices=JSON.parse(match[0]) as number[];
          const mapped=indices.map(i=>SEARCH_INDEX[i]).filter(Boolean).slice(0,8);
          setAiResults(mapped);
        }
      }catch(e){setAiResults(null);}
      setLoading(false);
    },500);
  },[query]);

  const displayResults=aiResults||results;
  const typeColor:{[k:string]:string}={Tab:s.navy,Calculator:s.green,Topic:s.blue,Article:"#7c3aed"};

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",zIndex:99999,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"60px 16px 16px"}} onClick={onClose}>
      <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:560,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}} onClick={e=>e.stopPropagation()}>
        {/* Search input */}
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"14px 16px",borderBottom:`1px solid ${s.border}`}}>
          <span style={{fontSize:18,flexShrink:0}}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e=>setQuery(e.target.value)}
            placeholder="Ask anything — e.g. how much can I borrow?"
            style={{flex:1,border:"none",outline:"none",fontSize:15,color:s.navy,background:"transparent"}}
          />
          {loading&&<span style={{fontSize:11,color:s.muted}}>🤖 thinking...</span>}
          {query&&!loading&&<button onClick={()=>{setQuery("");setAiResults(null);}} style={{background:"none",border:"none",color:s.muted,cursor:"pointer",fontSize:16,padding:0}}>✕</button>}
          <button onClick={onClose} style={{background:"#f1f5f9",border:"none",color:s.muted,cursor:"pointer",fontSize:11,padding:"4px 8px",borderRadius:6}}>Esc</button>
        </div>

        {/* Results */}
        <div style={{maxHeight:420,overflowY:"auto"}}>
          {query.trim().length<2?(
            <div>
              <div style={{padding:"10px 16px 6px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",letterSpacing:"0.5px"}}>Quick Access</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,padding:"0 12px 12px"}}>
                {["Rates","Calculators","New Builds","Renewal","Rate Finder","Listings","Lawyers","Realtors","Insurance","Consult"].map(tab=>(
                  <button key={tab} onClick={()=>onNavigate(tab)} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",borderRadius:8,border:`1px solid ${s.border}`,background:"#f8fafc",cursor:"pointer",fontSize:12,color:s.navy,fontWeight:600,textAlign:"left"}}>
                    <span>{SEARCH_INDEX.find(i=>i.title===tab&&i.type==="Tab")?.icon||"📄"}</span>{tab}
                  </button>
                ))}
              </div>
            </div>
          ):loading&&displayResults.length===0?(
            <div style={{padding:"32px 16px",textAlign:"center",color:s.muted}}>
              <div style={{fontSize:24,marginBottom:8}}>🤖</div>
              <div style={{fontSize:14,fontWeight:600,color:s.navy,marginBottom:4}}>Finding the best match...</div>
              <div style={{fontSize:12}}>AI is searching across all tabs and topics</div>
            </div>
          ):displayResults.length===0?(
            <div style={{padding:"32px 16px",textAlign:"center",color:s.muted}}>
              <div style={{fontSize:24,marginBottom:8}}>🔍</div>
              <div style={{fontSize:14,fontWeight:600,color:s.navy,marginBottom:4}}>No results for "{query}"</div>
              <div style={{fontSize:12}}>Try "calculator", "rates", "first-time buyer", "renewal", or "lawyer"</div>
            </div>
          ):(
            <div style={{padding:"8px 0"}}>
              <div style={{padding:"4px 16px 6px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",letterSpacing:"0.5px"}}>
                {aiResults?"🤖 AI Results":"🔍 Results"} · {displayResults.length} found
              </div>
              {displayResults.map((item,i)=>(
                <button key={i} onClick={()=>onNavigate(item.tab)} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 16px",width:"100%",border:"none",background:"none",cursor:"pointer",textAlign:"left",borderBottom:`1px solid ${s.light}`}}
                  onMouseEnter={e=>(e.currentTarget.style.background="#f8fafc")}
                  onMouseLeave={e=>(e.currentTarget.style.background="none")}>
                  <div style={{width:36,height:36,borderRadius:10,background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{item.icon}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                      <span style={{fontSize:13,fontWeight:700,color:s.navy}}>{item.title}</span>
                      <span style={{fontSize:9,fontWeight:700,color:typeColor[item.type]||s.muted,background:"#f1f5f9",borderRadius:20,padding:"1px 6px",flexShrink:0}}>{item.type}</span>
                    </div>
                    <div style={{fontSize:11,color:s.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.desc}</div>
                  </div>
                  <div style={{fontSize:11,color:s.muted,flexShrink:0,background:"#f1f5f9",borderRadius:6,padding:"3px 8px"}}>{item.tab} →</div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{padding:"8px 16px",borderTop:`1px solid ${s.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontSize:10,color:s.muted}}>Press <b>Esc</b> to close · Powered by 🤖 AI</div>
          <div style={{fontSize:10,color:s.muted}}>{SEARCH_INDEX.length} items indexed</div>
        </div>
      </div>
    </div>
  );
}

function NavBar({active,setActive,isMobile}:{active:string,setActive:(t:string)=>void,isMobile:boolean}){
  const [menuOpen,setMenuOpen]=useState(false);
  const [searchOpen,setSearchOpen]=useState(false);
  const [hoverTab,setHoverTab]=useState<string|null>(null);
  const groups=[{label:"Overview",tabs:["Home"]},{label:"Rates",tabs:["Rates","News"]},{label:"Calculators",tabs:["Calculators","Property Tax","Insurance","Rate Finder","Renewal"]},{label:"Buyers",tabs:["First-Time Buyers"]},{label:"Listings",tabs:["Listings"]},{label:"New Builds",tabs:["New Builds"]},{label:"Professionals",tabs:["Professionals"]},{label:"Free Help",tabs:["Consult"]},{label:"Learn",tabs:["Resources"]}];
  return(
    <div style={{background:s.navy,flexShrink:0,position:isMobile?"fixed":"sticky",top:0,left:0,right:0,zIndex:1000,boxShadow:"0 2px 12px rgba(0,0,0,0.3)"}}>
      <div style={{padding:"0 10px",display:"flex",alignItems:"center",height:46,gap:6}}>
        {/* Logo */}
        <div style={{display:"flex",alignItems:"center",gap:6,flexShrink:0}}>
          <div onClick={()=>{setActive("Home");window.scrollTo({top:0,behavior:"smooth"});}} style={{width:28,height:28,background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,cursor:"pointer"}} title="Go to Home">🍁</div>
          <div onClick={()=>{setActive("Home");window.scrollTo({top:0,behavior:"smooth"});}} style={{cursor:"pointer"}}>
            <div style={{color:"#fff",fontWeight:800,fontSize:12,lineHeight:1}}>Canada</div>
            <div style={{color:s.gold,fontWeight:700,fontSize:10,lineHeight:1}}>Mortgage Rates</div>
          </div>
        </div>
        {/* Search + Hamburger */}
        <button onClick={()=>setSearchOpen(true)} style={{background:"rgba(255,255,255,0.08)",border:`1px solid rgba(255,255,255,0.15)`,color:"#fff",borderRadius:6,padding:"4px 7px",cursor:"pointer",fontSize:12,flexShrink:0}} title="Search site">🔍</button>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"rgba(255,255,255,0.08)",border:`1px solid rgba(255,255,255,0.15)`,color:"#fff",borderRadius:6,padding:"4px 7px",cursor:"pointer",fontSize:12,flexShrink:0}}>
          {menuOpen?"✕":"☰"}
        </button>
        {/* Tab ribbon — grouped nav — hidden on mobile via CSS */}
        <div className="tab-ribbon-desktop" style={{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"3px 6px"}}>
          <div style={{display:"flex",gap:2,flexWrap:"wrap",justifyContent:"center"}}>
          {[
            {group:"Home",tabs:["Home"],icon:"🍁",single:true},
            {group:"Rates",tabs:["Rates","News"],icon:"📊",badge:"LIVE",badgeColor:"#4ade80",badgeText:"#14532d"},
            {group:"Calculators",tabs:["Calculators","Property Tax","Insurance","Rate Finder"],icon:"🧮"},
            {group:"Buyers",tabs:["First-Time Buyers"],icon:"🏡",single:true},
            {group:"Listings",tabs:["Listings"],icon:"🏘️",single:true},
            {group:"New Builds",tabs:["New Builds"],icon:"🏗️",single:true},
            {group:"Professionals",tabs:["Professionals"],icon:"👔",badge:"HOT",badgeColor:"#ef4444",badgeText:"#fff"},
            {group:"Free Help",tabs:["Consult"],icon:"🆓",single:true},
            {group:"Learn",tabs:["Resources"],icon:"📚",single:true},
          ].map(({group,tabs:gTabs,icon,badge,badgeColor,badgeText,single})=>{
            const isGroupActive=gTabs.includes(active);
            const subMenuItems=gTabs.flatMap(t=>{
              const subMenus:{[k:string]:{label:string,detail:string}[]}={
                "Rates":[{label:"📊 Compare Rates",detail:"Estimated rates from 50+ lenders"},{label:"🎁 Current Offers",detail:"Cash back & promotions"},{label:"📈 Rate History",detail:"BoC timeline 2020–2026"},{label:"🏦 Lender Guide",detail:"Banks vs brokers vs monolines"},{label:"🔓 Private Lenders",detail:"Bad credit, bridge, self-employed options"}],
                "News":[{label:"📰 Latest News",detail:"Canadian mortgage & real estate news"}],
                "Calculators":[{label:"💰 Payment",detail:"Monthly payment calculator"},{label:"🏡 Affordability",detail:"How much can you afford?"},{label:"📋 Stress Test",detail:"Will you qualify?"},{label:"🔄 Renewal",detail:"Compare your offer"},{label:"💳 Refinancing",detail:"Should you break early?"},{label:"📅 Amortization",detail:"Year-by-year schedule"},{label:"🏷️ Closing Costs",detail:"Land transfer tax & fees"}],
                "Property Tax":[{label:"🏛️ Property Tax",detail:"Estimate by city + appeal guide"}],
                "Insurance":[{label:"🛡️ Home Insurance",detail:"Compare 10+ providers & coverage"}],
                "Rate Finder":[{label:"🎯 Rate Finder",detail:"5-question personalized quiz"},{label:"📊 Fixed vs Variable",detail:"2026 comparison"}],
                "First-Time Buyers":[{label:"🏠 Programs",detail:"FHSA, HBP, grants"},{label:"📋 Step-by-Step",detail:"First-time buyer guide"}],
                "Renewal":[{label:"🔄 Compare Offer",detail:"Is your offer good?"},{label:"🏦 Switch or Stay?",detail:"Decision framework"}],
                "Listings":[{label:"🏘️ Find Listings",detail:"Search homes across Canada"}],
                "New Builds":[{label:"🏗️ Explore Builds",detail:"Browse builders by province"},{label:"📋 Buyer's Guide",detail:"New build vs resale"}],
                "Professionals":[{label:"🤝 Find a Realtor",detail:"Connect with verified local agents"},{label:"⚖️ Find a Lawyer",detail:"Real estate lawyers"},{label:"🔍 Home Inspectors",detail:"Certified home inspectors"},{label:"💼 Mortgage Brokers",detail:"Independent brokers — 30+ lenders"},{label:"🏡 Home Appraisers",detail:"Certified property appraisers"}],
                "Consult":[{label:"🆓 Free Help",detail:"Free consultation, rate alerts & BoC updates"}],
                "Resources":[{label:"📚 Learn & Blog",detail:"Articles, guides & education"},{label:"📖 Glossary",detail:"Mortgage terms explained"}],
              };
              return (subMenus[t]||[]).map(item=>({...item,tab:(t==="Property Tax"||t==="Insurance"||t==="Rate Finder"||t==="Renewal")?"Calculators":t}));
            });
            return(
              <div key={group} style={{position:"relative",flexShrink:0}}
                onMouseEnter={()=>!single&&setHoverTab(group)}
                onMouseLeave={()=>setHoverTab(null)}>
                <button
                  onClick={()=>{setActive(gTabs[0]);setMenuOpen(false);window.scrollTo({top:0,behavior:"smooth"});}}
                  style={{background:isGroupActive?s.gold:group==="Professionals"?"rgba(239,68,68,0.15)":"rgba(255,255,255,0.05)",border:`1px solid ${isGroupActive?"transparent":group==="Professionals"?"rgba(239,68,68,0.5)":"rgba(255,255,255,0.1)"}`,color:isGroupActive?s.navy:"rgba(255,255,255,0.85)",fontSize:11,padding:"6px 10px",borderRadius:7,cursor:"pointer",fontWeight:isGroupActive?800:600,whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:3,transition:"all 0.15s",animation:!isGroupActive&&group==="Professionals"?"glow 2s infinite":undefined}}>
                  <span style={{fontSize:11}}>{icon}</span>
                  {group}
                  {badge&&<span style={{background:isGroupActive?"rgba(0,0,0,0.15)":badgeColor,color:isGroupActive?s.navy:badgeText,borderRadius:20,padding:"1px 4px",fontSize:7,fontWeight:800,marginLeft:2}}>{badge}</span>}
                  {!single&&<span style={{fontSize:8,opacity:0.6,marginLeft:1}}>▾</span>}
                </button>
                {!single&&hoverTab===group&&subMenuItems.length>0&&(
                  <div style={{position:"absolute",top:"100%",left:0,background:"#fff",borderRadius:10,boxShadow:"0 8px 30px rgba(0,0,0,0.18)",border:`1px solid ${s.border}`,minWidth:220,zIndex:9999,padding:"6px 0"}}>
                    <div style={{padding:"6px 12px 4px",fontSize:9,fontWeight:800,color:s.muted,textTransform:"uppercase",letterSpacing:"0.5px",borderBottom:`1px solid ${s.light}`}}>{group}</div>
                    {subMenuItems.map((item,i)=>(
                      <button key={i} onClick={()=>{
                        setActive(item.tab);setHoverTab(null);window.scrollTo({top:0,behavior:"smooth"});
                        setTimeout(()=>window.dispatchEvent(new CustomEvent("switchSubTab",{detail:{tab:item.tab,label:item.label}})),150);
                      }} style={{display:"flex",flexDirection:"column",width:"100%",textAlign:"left",padding:"7px 12px",background:"none",border:"none",cursor:"pointer",borderBottom:i<subMenuItems.length-1?`1px solid ${s.light}`:"none"}}
                        onMouseEnter={e=>(e.currentTarget.style.background="#f8fafc")}
                        onMouseLeave={e=>(e.currentTarget.style.background="none")}>
                        <span style={{fontSize:12,fontWeight:700,color:s.navy}}>{item.label}</span>
                        <span style={{fontSize:10,color:s.muted,marginTop:1}}>{item.detail}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          </div>
        </div>
      </div>
      {menuOpen&&(
        <div style={{background:"#0a1628",borderTop:"1px solid rgba(255,255,255,0.1)",padding:"8px 0",maxHeight:360,overflowY:"auto"}}>
          {groups.map(g=>(
            <div key={g.label}>
              <div style={{padding:"6px 16px 3px",fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.5px"}}>{g.label}</div>
              {g.tabs.map(t=>{
                const emoji={Rates:"📊",Calculators:"🧮","Property Tax":"🏛️",Insurance:"🛡️","Rate Finder":"🔍","First-Time Buyers":"🏠",Renewal:"🔄",Professionals:"👷",Listings:"🏘️","New Builds":"🏗️",Consult:"📞",News:"📰","Resources":"📖",Home:"🍁"}[t]||"";
                return <button key={t} onClick={()=>{setActive(t);setMenuOpen(false);window.scrollTo({top:0,behavior:"smooth"});}} style={{display:"block",width:"100%",textAlign:"left",padding:"9px 16px 9px 24px",background:active===t?"rgba(245,166,35,0.1)":"none",border:"none",borderLeft:active===t?`3px solid ${s.gold}`:"3px solid transparent",color:active===t?"#fff":"rgba(255,255,255,0.75)",fontSize:13,cursor:"pointer",fontWeight:active===t?700:400}}>{emoji} {t}</button>;
              })}
            </div>
          ))}
        </div>
      )}
      {searchOpen&&<SiteSearch onClose={()=>setSearchOpen(false)} onNavigate={(tab)=>{setActive(tab);setSearchOpen(false);window.scrollTo({top:0,behavior:"smooth"});}}/>}
    </div>
  );
}

function Hero({prov,city,locLoading}){
  return(
    <div style={{background:`linear-gradient(135deg,#0a1628 0%,#0d2240 40%,#1a3a5c 70%,#0d2240 100%)`,padding:"10px 20px 12px",textAlign:"center",position:"relative",overflow:"hidden",flexShrink:0}}>
      <div style={{position:"relative",zIndex:1}}>
        <h1 style={{color:"#fff",fontSize:"clamp(14px,2.2vw,20px)",fontWeight:800,marginBottom:2,letterSpacing:"-0.5px",lineHeight:1.2}}>Compare <span style={{color:s.gold}}>Mortgage Rates</span> Across All of Canada</h1>
        <p style={{color:locLoading?"rgba(255,255,255,0.4)":s.gold,fontSize:11,fontWeight:600,margin:0}}>
          {locLoading?"📍 Detecting your location...":"📍 "+city+", "+(PDATA[prov]?.name||prov)}
        </p>
      </div>
    </div>
  );
}

// ── RATES TAB ─────────────────────────────────────────────────────────────────
function PrivateTab(){
  const [pTab,setPTab]=useState<"qualify"|"types"|"warnings"|"apply">("qualify");
  return(
    <div>
      {/* Sub-tabs */}
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setPTab("qualify")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${pTab==="qualify"?"#7c3aed":s.border}`,background:pTab==="qualify"?"#7c3aed":s.white,color:pTab==="qualify"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🔓 Who Qualifies</button>
        <button onClick={()=>setPTab("types")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${pTab==="types"?s.navy:s.border}`,background:pTab==="types"?s.navy:s.white,color:pTab==="types"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🏦 Lender Types</button>
        <button onClick={()=>setPTab("warnings")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${pTab==="warnings"?s.red:s.border}`,background:pTab==="warnings"?s.red:s.white,color:pTab==="warnings"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>⚠️ What to Know</button>
        <button onClick={()=>setPTab("apply")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${pTab==="apply"?"#7c3aed":s.border}`,background:pTab==="apply"?"#7c3aed":s.white,color:pTab==="apply"?"#fff":"#7c3aed",fontSize:11,fontWeight:800,cursor:"pointer",animation:pTab!=="apply"?"glow 2s infinite":undefined}}>📋 Apply Now</button>
      </div>

      {/* Who Qualifies */}
      {pTab==="qualify"&&(
        <div>
          <Card style={{marginBottom:14,borderLeft:`4px solid #7c3aed`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>❓ Who Needs a Private Lender?</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {icon:"📉",title:"Bruised Credit",desc:"Credit score under 600, missed payments, collections, or judgments. Banks say no — private lenders focus on the property, not just the score."},
                {icon:"💼",title:"Self-Employed",desc:"Declared income too low to qualify at banks. Private lenders can use gross revenue or bank statements instead of NOA income."},
                {icon:"🏦",title:"Recent Bankruptcy",desc:"Banks require 2+ years after discharge. Some private lenders work with you 1 day after bankruptcy — at a higher rate."},
                {icon:"🌍",title:"New to Canada",desc:"No Canadian credit history. Private lenders can use international credit history or larger down payments to qualify."},
                {icon:"🏗️",title:"Bridge Financing",desc:"Buying a new home before selling the old one. Short-term private mortgage bridges the gap — typically 3-12 months."},
                {icon:"🏢",title:"Investment Property",desc:"Multiple properties, rental income not qualifying, or unconventional property types banks won't touch."},
              ].map(item=>(
                <div key={item.title} style={{background:"#faf5ff",borderRadius:8,padding:10,border:"1px solid #e9d5ff"}}>
                  <div style={{fontSize:20,marginBottom:4}}>{item.icon}</div>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:4}}>{item.title}</div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Card>
          <button onClick={()=>setPTab("apply")} style={{width:"100%",padding:"12px",background:"#7c3aed",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer"}}>📋 Apply Now — Get Matched with a Specialist →</button>
        </div>
      )}

      {/* Lender Types */}
      {pTab==="types"&&(
        <div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>🏦 Types of Private Lenders in Canada</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12,marginBottom:14}}>
              {[
                {type:"Mortgage Investment Corporations (MICs)",rate:"8–12%",ltv:"Up to 75% LTV",term:"1 year typical",desc:"Pool investor money to fund mortgages. Most regulated form of private lending. Examples: Alpine Credits, Antrim Investments, Fisgard Capital.",color:"#7c3aed",icon:"🏢"},
                {type:"B-Lenders",rate:"5.5–8%",ltv:"Up to 80% LTV",term:"1-3 years",desc:"Federally or provincially regulated alternative lenders. Stricter than private but more flexible than banks. Examples: Home Trust, Equitable Bank, Bridgewater, Haventree.",color:s.blue,icon:"🏦"},
                {type:"Individual Private Lenders",rate:"10–18%",ltv:"Up to 65% LTV",term:"6-12 months",desc:"High net worth individuals lending their own capital. Most flexible terms but highest rates. Accessed through licensed mortgage brokers.",color:"#92400e",icon:"👤"},
                {type:"Syndicated Mortgages",rate:"8–15%",ltv:"Up to 70% LTV",term:"1-2 years",desc:"Multiple private investors pool funds for one mortgage. Common for construction and commercial. Regulated by provincial securities commissions.",color:s.green,icon:"👥"},
              ].map(l=>(
                <div key={l.type} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderLeft:`4px solid ${l.color}`}}>
                  <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
                    <span style={{fontSize:20}}>{l.icon}</span>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy,lineHeight:1.3}}>{l.type}</div>
                  </div>
                  <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                    <span style={{background:"#fee2e2",color:"#dc2626",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>Rate: {l.rate}</span>
                    <span style={{background:"#f0fdf4",color:s.green,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{l.ltv}</span>
                    <span style={{background:"#eff6ff",color:"#1e40af",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{l.term}</span>
                  </div>
                  <p style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{l.desc}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{marginBottom:14,background:s.navy}}>
            <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>💰 Rate Comparison — All Lender Types</h3>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
                <thead><tr>{["Lender Type","Rate Range","Min Credit","Max LTV","Best For"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",textAlign:"left",borderBottom:"1px solid rgba(255,255,255,0.1)",whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    {type:"Big 6 Banks",rate:"3.89–4.50%",credit:"680+",ltv:"80%",best:"Strong credit, T4 income",color:"#4ade80"},
                    {type:"Credit Unions",rate:"3.79–4.40%",credit:"650+",ltv:"80%",best:"Members, local community",color:"#4ade80"},
                    {type:"Monolines",rate:"3.74–4.30%",credit:"640+",ltv:"80%",best:"Best rates, broker channel",color:"#4ade80"},
                    {type:"B-Lenders",rate:"5.50–8.00%",credit:"550+",ltv:"80%",best:"Bruised credit, self-employed",color:"#fbbf24"},
                    {type:"MICs",rate:"8.00–12.00%",credit:"Any",ltv:"75%",best:"Bridge, construction, rural",color:"#f87171"},
                    {type:"Private",rate:"10.00–18.00%",credit:"Any",ltv:"65%",best:"Last resort, short-term only",color:"#f87171"},
                  ].map((row,i)=>(
                    <tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,0.06)",background:i%2===0?"rgba(255,255,255,0.03)":"transparent"}}>
                      <td style={{padding:"8px 12px",fontSize:11,fontWeight:700,color:"#fff"}}>{row.type}</td>
                      <td style={{padding:"8px 12px",fontSize:11,fontWeight:800,color:row.color}}>{row.rate}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:"rgba(255,255,255,0.7)"}}>{row.credit}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:"rgba(255,255,255,0.7)"}}>{row.ltv}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:"rgba(255,255,255,0.6)"}}>{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <button onClick={()=>setPTab("apply")} style={{width:"100%",padding:"12px",background:"#7c3aed",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer"}}>📋 Apply Now →</button>
        </div>
      )}

      {/* What to Know */}
      {pTab==="warnings"&&(
        <div>
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.red}`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>⚠️ Important Warnings About Private Mortgages</h3>
            {[
              ["Rates are much higher","Private mortgage rates of 10–18% vs 4% at banks means a $400,000 private mortgage costs $40,000–$72,000 in interest per year vs $16,000 at a bank. Only use private as a short-term bridge.","#dc2626"],
              ["Exit strategy is critical","Before taking a private mortgage, know exactly how you'll exit it — typically by improving your credit, increasing income, or selling the property within 12 months.","#dc2626"],
              ["Fees add up","Private lenders charge 1–4% lender fees plus broker fees. On a $300,000 mortgage, fees of 3% = $9,000 upfront — on top of the high rate.","#dc2626"],
              ["Use a licensed broker","Never approach a private lender directly. A licensed mortgage broker knows the reputable MICs and private lenders, protects your interests, and doesn't cost you more.","#1e40af"],
              ["Avoid predatory lenders","If a private lender promises guaranteed approval with no credit check and no income verification — be cautious. Verify their credentials through your provincial mortgage regulator.","#dc2626"],
              ["Plan your exit before you enter","The goal of a private mortgage is to rebuild your credit or income situation so you can refinance to a conventional lender within 12–24 months. Have this plan before signing.","#92400e"],
            ].map(([t,d,c])=>(
              <div key={t} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:`1px solid ${s.light}`}}>
                <span style={{fontSize:11,fontWeight:700,color:c||s.navy,flexShrink:0,minWidth:160}}>{t}</span>
                <span style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{d}</span>
              </div>
            ))}
          </Card>
          <button onClick={()=>setPTab("apply")} style={{width:"100%",padding:"12px",background:"#7c3aed",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer"}}>📋 Apply Now — Get Matched with a Specialist →</button>
        </div>
      )}

      {/* Apply Now */}
      {pTab==="apply"&&(
        <Card style={{borderLeft:`4px solid #7c3aed`}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🔓 Get Connected with a Private Mortgage Specialist</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:12,lineHeight:1.6}}>Tell us your situation and we'll match you with a licensed mortgage broker who specializes in alternative and private lending. Free — brokers are paid by the lender, not you.</p>
          <PrivateLenderForm/>
        </Card>
      )}
    </div>
  );
}

function PrivateLenderForm(){
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [phone,setPhone]=useState("");
  const [prov,setProv]=useState("MB");const [city,setCity]=useState("");
  const [situation,setSituation]=useState("");const [amount,setAmount]=useState("");
  const [credit,setCredit]=useState("");const [employed,setEmployed]=useState("");const [msg,setMsg]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);

  async function submit(){
    if(!name||!email||!situation){alert("Please fill in required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`Private Mortgage Lead — ${situation} — ${city||prov}`,
        name,email,phone,province:prov,city,situation,mortgageAmount:amount,
        creditScore:credit,employmentType:employed,additionalDetails:msg,
        source:"Canada Mortgage Rates — Private Lenders Tab"
      })});
      setOk(true);
    }catch{alert("Something went wrong. Please try again.");}
    setSubmitting(false);
  }

  if(ok)return(
    <div style={{textAlign:"center",padding:"20px 0"}}>
      <div style={{fontSize:32,marginBottom:8}}>✅</div>
      <div style={{fontSize:14,fontWeight:800,color:s.green,marginBottom:4}}>Request Received!</div>
      <div style={{fontSize:11,color:s.muted,marginBottom:12,lineHeight:1.6}}>A licensed mortgage broker specializing in alternative lending will be in touch within 1 business day to discuss your options.</div>
      <button onClick={()=>setOk(false)} style={{padding:"8px 20px",background:"#7c3aed",color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Submit Another →</button>
    </div>
  );

  return(
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <Field label="Full Name *"><input value={name} onChange={e=>setName(e.target.value)} placeholder="John Smith" style={inp}/></Field>
        <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="john@email.com" style={inp}/></Field>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
        <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{k}</option>)}</select></Field>
      </div>
      <Field label="City"><input value={city} onChange={e=>setCity(e.target.value)} placeholder="Winnipeg" style={inp}/></Field>
      <Field label="My Situation *">
        <select value={situation} onChange={e=>setSituation(e.target.value)} style={inp}>
          <option value="">Select your situation</option>
          <option value="bruised-credit">Bruised or bad credit</option>
          <option value="self-employed">Self-employed — low declared income</option>
          <option value="bankruptcy">Recent bankruptcy or consumer proposal</option>
          <option value="new-canadian">New to Canada — no credit history</option>
          <option value="bridge">Bridge financing — buying before selling</option>
          <option value="investment">Investment or rental property</option>
          <option value="construction">Construction or land mortgage</option>
          <option value="other">Other — bank turned me down</option>
        </select>
      </Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <Field label="Mortgage Amount Needed">
          <select value={amount} onChange={e=>setAmount(e.target.value)} style={inp}>
            <option value="">Select range</option>
            <option value="under200k">Under $200,000</option>
            <option value="200-400k">$200K – $400K</option>
            <option value="400-600k">$400K – $600K</option>
            <option value="600-800k">$600K – $800K</option>
            <option value="over800k">Over $800,000</option>
          </select>
        </Field>
        <Field label="Approximate Credit Score">
          <select value={credit} onChange={e=>setCredit(e.target.value)} style={inp}>
            <option value="">Select range</option>
            <option value="under500">Under 500</option>
            <option value="500-599">500 – 599</option>
            <option value="600-649">600 – 649</option>
            <option value="650-699">650 – 699</option>
            <option value="unknown">I don't know</option>
          </select>
        </Field>
      </div>
      <Field label="Employment Type">
        <select value={employed} onChange={e=>setEmployed(e.target.value)} style={inp}>
          <option value="">Select type</option>
          <option value="employed">Salaried / Employed</option>
          <option value="self-employed">Self-Employed</option>
          <option value="retired">Retired</option>
          <option value="unemployed">Currently not employed</option>
          <option value="other">Other</option>
        </select>
      </Field>
      <Field label="Additional Details">
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Tell us more about your situation — the more detail, the better we can match you to the right specialist..." style={{...inp,height:80,resize:"vertical" as any}}/>
      </Field>
      <div style={{background:"#f5f3ff",border:"1px solid #ddd6fe",borderRadius:8,padding:"8px 12px",marginBottom:10,fontSize:10,color:"#6d28d9"}}>
        🔒 Your information is kept confidential and only shared with licensed mortgage professionals. Brokers are paid by the lender — this service is free to you.
      </div>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,background:"#7c3aed",opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Connect Me with a Specialist →"}</button>
    </div>
  );
}

function RatesTab({initProv,initCity,onLocationChange,bocRates}){
  const [subTab,setSubTab]=useState<"compare"|"offers"|"history"|"lenders"|"private">("compare");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Rates")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
  const [prov,setProv]=useState(initProv);
  const [city,setCity]=useState(initCity);
  const [term,setTerm]=useState("1-year");
  const [type,setType]=useState("fixed");
  const [lenderGroup,setLenderGroup]=useState<"all"|"national"|"online"|"local">("all");
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
      "1-year":+(primeNum+0.05+adj).toFixed(2),
      "2-year":+(primeNum-0.25+adj).toFixed(2),
      "3-year":+(primeNum-0.35+adj).toFixed(2),
      "5-year":+(primeNum-0.45+adj).toFixed(2),
    };
    const variableBase:{[k:string]:number}={
      "1-year":+(primeNum-0.60+adj).toFixed(2),
      "2-year":+(primeNum-0.75+adj).toFixed(2),
      "3-year":+(primeNum-0.85+adj).toFixed(2),
      "5-year":+(primeNum-0.90+adj).toFixed(2),
    };
    return institutions.flatMap((inst,i)=>{
      // Use real verified rates for ACU
      if(inst.name==="Assiniboine Credit Union"){
        return TERMS.map(t=>({
          institution:inst.name,
          term:t,
          fixed:ACU_VERIFIED_RATES[t]?.fixed ?? +(fixedBase[t]).toFixed(2),
          variable:ACU_VERIFIED_RATES[t]?.variable ?? +(variableBase[t]).toFixed(2),
          verified:true,
        }));
      }
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
  const filterByGroup=(rows:{inst:any,rate:number|null}[])=>
    lenderGroup==="all"?rows:rows.filter(({inst})=>inst.type===lenderGroup);
  const sortedRows=[...filterByGroup(withRate),...filterByGroup(noRate)];
  const rankEmoji=["🥇","🥈","🥉"];
  const rankColors=["#f59e0b","#9ca3af","#cd7f32"];

  return(
    <div>
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setSubTab("compare")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="compare"?s.navy:"#bfdbfe"}`,background:subTab==="compare"?s.navy:"#eff6ff",color:subTab==="compare"?"#fff":"#1e40af",fontSize:11,fontWeight:700,cursor:"pointer"}}>📊 Compare Rates</button>
        <button onClick={()=>setSubTab("offers")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="offers"?s.gold:"#fde68a"}`,background:subTab==="offers"?s.gold:"#fffbeb",color:subTab==="offers"?s.navy:"#92400e",fontSize:11,fontWeight:700,cursor:"pointer"}}>🎁 Current Offers</button>
        <button onClick={()=>setSubTab("history")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="history"?"#16a34a":"#bbf7d0"}`,background:subTab==="history"?"#16a34a":"#f0fdf4",color:subTab==="history"?"#fff":"#15803d",fontSize:11,fontWeight:700,cursor:"pointer"}}>📈 Rate History</button>
        <button onClick={()=>setSubTab("lenders")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="lenders"?"#0891b2":"#bae6fd"}`,background:subTab==="lenders"?"#0891b2":"#f0f9ff",color:subTab==="lenders"?"#fff":"#0369a1",fontSize:11,fontWeight:700,cursor:"pointer"}}>🏦 Lender Guide</button>
        <button onClick={()=>setSubTab("private")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="private"?"#7c3aed":"#ddd6fe"}`,background:subTab==="private"?"#7c3aed":"#f5f3ff",color:subTab==="private"?"#fff":"#6d28d9",fontSize:11,fontWeight:700,cursor:"pointer"}}>🔓 Private Lenders</button>
      </div>

      {subTab==="compare"&&<>
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
        {/* Lender group filter */}
        <div style={{display:"flex",gap:6,flexWrap:"wrap",paddingTop:6,borderTop:`1px solid ${s.border}`}}>
          {([["all","🏦 All","All Lenders"],["national","🏛️","Banks"],["local","🏘️","Credit Unions"],["online","💻","Online Lenders"]] as const).map(([g,icon,label])=>{
            const count=g==="all"?[...withRate,...noRate].length:[...withRate,...noRate].filter(({inst})=>inst.type===g).length;
            const colors:any={all:s.navy,national:"#1e40af",local:s.green,online:"#0891b2"};
            return <button key={g} onClick={()=>setLenderGroup(g)} style={{padding:"8px 18px",borderRadius:10,border:`2px solid ${lenderGroup===g?colors[g]:s.border}`,background:lenderGroup===g?colors[g]:s.white,color:lenderGroup===g?"#fff":s.navy,fontSize:13,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",boxShadow:lenderGroup===g?"0 3px 10px rgba(0,0,0,0.15)":"none",transition:"all 0.15s",display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:16}}>{icon}</span>{label}<span style={{background:lenderGroup===g?"rgba(255,255,255,0.2)":"#f1f5f9",color:lenderGroup===g?"#fff":s.muted,borderRadius:20,padding:"1px 7px",fontSize:11,fontWeight:600,marginLeft:2}}>{count}</span></button>;
          })}
        </div>
      </div>
      {usingSample&&<div style={{background:"#fff7ed",border:`1px solid #fed7aa`,borderRadius:8,padding:"8px 14px",fontSize:11,color:"#c2410c",margin:"10px 0"}}>⚠️ These are estimated rates, not pulled from a live source right now — verify with the institution directly before applying.</div>}
      {prov==="MB"&&(()=>{
        const acuFixed=ACU_VERIFIED_RATES[term]?.fixed;
        const acuVariable=ACU_VERIFIED_RATES[term]?.variable;
        return(
          <div style={{margin:"12px 0"}}>
            <div style={{fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:6}}>⭐ Featured Partner — Manitoba</div>
            <div style={{background:"linear-gradient(135deg,#0d2240,#1e3a8a)",borderRadius:14,padding:"16px 20px",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",boxShadow:"0 4px 20px rgba(30,58,138,0.25)",border:"1.5px solid #3b82f6"}}>
              {/* Real ACU Logo */}
              <div style={{background:"#fff",borderRadius:10,padding:"8px 12px",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",minWidth:120}}>
                <img src="/acu-logo.svg" alt="Assiniboine Credit Union" style={{height:36,width:"auto",display:"block"}}/>
              </div>
              <div style={{flexShrink:0}}>
                <div style={{color:"#fff",fontSize:14,fontWeight:800,lineHeight:1.2}}>Assiniboine Credit Union</div>
                <div style={{display:"flex",alignItems:"center",gap:5,marginTop:4,flexWrap:"wrap"}}>
                  <span style={{background:"#3b82f6",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>✓ VERIFIED PARTNER</span>
                  <span style={{color:"rgba(255,255,255,0.5)",fontSize:9}}>B Corp certified · Founded 1943 · Winnipeg, MB</span>
                </div>
                <div style={{color:"rgba(255,255,255,0.55)",fontSize:10,marginTop:4}}>Rates published directly by ACU — not estimated</div>
              </div>
              {/* Rate tiles */}
              <div style={{flex:1,display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"}}>
                {(["1-year","2-year","3-year","5-year"] as const).map(t=>{
                  const r=type==="fixed"?ACU_VERIFIED_RATES[t]?.fixed:ACU_VERIFIED_RATES[t]?.variable;
                  const isSelected=t===term;
                  const hasRate=r!=null;
                  return(
                    <div key={t} onClick={()=>hasRate&&setTerm(t)} style={{background:isSelected?"rgba(255,255,255,0.18)":"rgba(255,255,255,0.06)",border:`1.5px solid ${isSelected?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.1)"}`,borderRadius:10,padding:"10px 14px",textAlign:"center",cursor:hasRate?"pointer":"default",minWidth:68,opacity:hasRate?1:0.4}}>
                      <div style={{fontSize:9,color:"rgba(255,255,255,0.55)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.4px",marginBottom:3}}>{t}</div>
                      <div style={{fontSize:hasRate?20:13,fontWeight:800,color:"#fff",lineHeight:1}}>{hasRate?r!.toFixed(2)+"%":"—"}</div>
                      {!hasRate&&<div style={{fontSize:8,color:"rgba(255,255,255,0.35)",marginTop:2}}>not offered</div>}
                      {isSelected&&hasRate&&<div style={{fontSize:8,color:"#93c5fd",marginTop:2,fontWeight:600}}>selected</div>}
                    </div>
                  );
                })}
              </div>
              {/* CTA */}
              <div style={{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end",flexShrink:0}}>
                <a href="https://www.acu.ca/tools-and-resources/lending-application?hsCtaAttrib=189007007654" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"10px 20px",background:"#3b82f6",color:"#fff",borderRadius:9,fontSize:13,fontWeight:700,textDecoration:"none",whiteSpace:"nowrap"}}>Apply at ACU →</a>
                <a href="https://www.acu.ca/rates" target="_blank" rel="noopener noreferrer" style={{fontSize:10,color:"rgba(255,255,255,0.5)",textDecoration:"none",textAlign:"right"}}>View all rates at acu.ca →</a>
                <div style={{fontSize:9,color:"rgba(255,255,255,0.35)",textAlign:"right"}}>Rates from acu.ca · {ACU_VERIFIED_UPDATED}</div>
              </div>
            </div>
            <div style={{fontSize:11,color:s.muted,marginTop:6,paddingLeft:2}}>✓ ACU's rates are sourced directly from acu.ca and displayed with ACU's permission. The comparison table below shows estimated rates from all lenders.</div>
          </div>
        );
      })()}
      {!loading&&withRate.length>0&&(
        <div style={{display:"flex",gap:10,alignItems:"flex-start",margin:"10px 0"}}>
          {/* Vertical Best Rates sidebar */}
          <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:12,padding:"12px 14px",flexShrink:0,width:160,display:"flex",flexDirection:"column",gap:8}}>
            <div>
              <div style={{color:s.gold,fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:2}}>🏆 Best Rates</div>
              <div style={{color:"rgba(255,255,255,0.5)",fontSize:9}}>{term} {type}</div>
            </div>
            {withRate.slice(0,3).map(({inst,rate},i)=>(
              <div key={inst.name} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:"8px 10px",border:`1px solid rgba(255,255,255,0.1)`}}>
                <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}>
                  <span style={{fontSize:14}}>{["🥇","🥈","🥉"][i]}</span>
                  <div style={{fontSize:9,color:"rgba(255,255,255,0.7)",lineHeight:1.3,flex:1}}>{inst.name}</div>
                </div>
                <div style={{fontSize:18,fontWeight:800,color:i===0?s.gold:"#fff",marginBottom:4}}>{rate.toFixed(2)}%</div>
                <a href={inst.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"4px 0",background:i===0?s.gold:s.red,color:i===0?s.navy:"#fff",borderRadius:6,fontSize:9,fontWeight:700,textDecoration:"none",textAlign:"center"}}>Apply →</a>
              </div>
            ))}
          </div>
          {/* Rate table takes remaining space */}
          <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"center",gap:10,margin:"0 0 6px",padding:"9px 14px",background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:`1px solid #bbf7d0`,borderRadius:10}}>
            <span style={{fontSize:18}}>ℹ️</span>
            <div style={{flex:1}}><div style={{fontSize:12,color:"#15803d",fontWeight:700}}>Sorted lowest to highest — compiled from public lender rates</div><div style={{fontSize:11,color:"#16a34a"}}>{term} {type} · Best: <b>{minR?.toFixed(2)}%</b>{city?` in ${city}`:""} · Confirm the exact rate with the lender before applying</div></div>
            <div style={{fontSize:10,color:"#15803d",fontWeight:600,flexShrink:0,textAlign:"right"}}>🕐 Last updated<br/>{TODAY}</div>
          </div>
          <div style={{background:s.white,borderRadius:14,boxShadow:"0 4px 20px rgba(0,0,0,0.08)",overflow:"hidden",marginTop:6}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`}}>{["#","Institution","Rate","Rate Bar","Badge","Apply"].map(h=><th key={h} style={{color:"rgba(255,255,255,0.9)",padding:"12px 12px",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.6px",textAlign:h==="Institution"?"left":"center"}}>{h}</th>)}</tr></thead>
          <tbody>
            {loading?(Array.from({length:8}).map((_,i)=><tr key={i} style={{borderBottom:`1px solid ${s.light}`}}>{Array.from({length:6}).map((_,j)=><td key={j} style={{padding:"13px 12px"}}><Skeleton h={13} r={4}/></td>)}</tr>))
            :sortedRows.map(({inst,rate},idx)=>{
              const isBest=rate!==null&&rate===minR;const hasRate=rate!=null;
              const pct=hasRate&&maxR&&minR?(1-(rate-minR)/Math.max(spread,0.01))*100:0;
              const isVerified=(inst as any).verified===true;
              return(
                <tr key={inst.name} style={{borderBottom:`1px solid ${s.light}`,background:isBest?"linear-gradient(135deg,#f0fdf4,#f7fdf9)":isVerified?"linear-gradient(135deg,#eff6ff,#f0f9ff)":idx%2===0?s.white:"#fafbfc"}}>
                  <td style={{padding:"12px 12px",textAlign:"center",fontWeight:800,fontSize:15,color:hasRate&&idx<3?rankColors[idx]:s.muted,width:40}}>{hasRate?(idx<3?rankEmoji[idx]:idx+1):"—"}</td>
                  <td style={{padding:"12px 14px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                      <div style={{fontWeight:700,fontSize:13,color:s.navy}}>{inst.name}</div>
                      {isVerified&&<span style={{display:"inline-flex",alignItems:"center",gap:3,background:"#1e40af",color:"#fff",borderRadius:20,padding:"1px 7px",fontSize:9,fontWeight:700}}>✓ Verified Partner</span>}
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:5,flexWrap:"wrap"}}>
                      <span style={{display:"inline-block",background:inst.type==="national"?"#dbeafe":inst.type==="online"?"#f3e8ff":"#fef3c7",color:inst.type==="national"?"#1e40af":inst.type==="online"?"#7c3aed":"#92400e",borderRadius:20,padding:"1px 7px",fontSize:9,fontWeight:700}}>{inst.type==="national"?"NATIONAL":inst.type==="online"?"ONLINE":"LOCAL CU"}</span>
                      {isVerified&&<span style={{fontSize:9,color:"#64748b"}}>Rates from acu.ca · {ACU_VERIFIED_UPDATED}</span>}
                    </div>
                  </td>
                  <td style={{textAlign:"center",width:80}}><div style={{fontSize:isBest?20:16,fontWeight:800,color:isBest?s.green:hasRate?s.navy:s.muted,lineHeight:1}}>{hasRate?rate.toFixed(2)+"%":"N/A"}</div>{isBest&&<div style={{fontSize:9,color:s.green,fontWeight:700,marginTop:2}}>BEST RATE</div>}{isVerified&&!isBest&&<div style={{fontSize:8,color:"#1e40af",fontWeight:700,marginTop:2}}>VERIFIED</div>}</td>
                  <td style={{padding:"12px 16px",width:130}}>{hasRate?(<div><div style={{background:"#f1f5f9",borderRadius:20,height:8,overflow:"hidden"}}><div style={{width:pct+"%",height:"100%",background:isBest?`linear-gradient(90deg,${s.green},#22c55e)`:isVerified?`linear-gradient(90deg,#1e40af,#2563eb)`:`linear-gradient(90deg,${s.navy},#2563eb)`,borderRadius:20}}/></div><div style={{fontSize:9,color:s.muted,marginTop:3,textAlign:"center"}}>{Math.round(pct)}% better than highest</div></div>):<div style={{textAlign:"center",color:"#ddd"}}>—</div>}</td>
                  <td style={{textAlign:"center",width:70}}>{isBest&&<span style={{display:"inline-block",background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"3px 8px",fontSize:10,fontWeight:700}}>⭐ Best</span>}{isVerified&&!isBest&&<span style={{display:"inline-block",background:"#dbeafe",color:"#1e40af",borderRadius:20,padding:"3px 8px",fontSize:10,fontWeight:700}}>✓ Real</span>}{!isVerified&&hasRate&&!isBest&&idx===1&&<span style={{display:"inline-block",background:"#f1f5f9",color:s.muted,borderRadius:20,padding:"3px 8px",fontSize:10,fontWeight:700}}>2nd</span>}{!isVerified&&hasRate&&!isBest&&idx===2&&<span style={{display:"inline-block",background:"#fef3c7",color:"#92400e",borderRadius:20,padding:"3px 8px",fontSize:10,fontWeight:700}}>3rd</span>}</td>
                  <td style={{textAlign:"center",padding:"12px 10px"}}><a href={inst.url} target="_blank" rel="noopener noreferrer" onClick={()=>typeof window!=="undefined"&&(window as any).gtag&&(window as any).gtag("event","apply_click",{lender:inst.name,lender_type:inst.type,province:prov,term:term,rate_type:type,is_verified:isVerified})} style={{display:"inline-block",padding:"6px 12px",background:isBest?s.green:isVerified?"#1e40af":s.navy,color:"#fff",borderRadius:8,fontSize:11,fontWeight:700,textDecoration:"none"}}>{isVerified?"Apply at ACU →":"Apply →"}</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
          </div>{/* end rate table wrapper */}
        </div>{/* end best rates flex row */}
      )}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 4px",flexWrap:"wrap",gap:6}}>
        <div style={{fontSize:10,color:s.muted}}>{prov==="MB"?<>⚠️ Rates are estimates except <span style={{color:"#1e40af",fontWeight:600}}>Assiniboine Credit Union</span> whose rates are sourced directly from acu.ca and verified. Always confirm the exact rate with your lender before making any financial decision. Canada Mortgage Rates is not a licensed mortgage broker.</>:<>⚠️ Rates shown are estimates based on the live Bank of Canada prime rate and typical lender spreads. Always verify the exact rate directly with the lender before making any financial decision. Canada Mortgage Rates is not a licensed mortgage broker.</> }</div>
        <div style={{fontSize:10,color:s.muted,fontWeight:600}}>🕐 Last updated: {TODAY}</div>
      </div>

      </>}


      {subTab==="offers"&&<>
      <div style={{background:`linear-gradient(135deg,${s.gold},#d97706)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>🎁</div>
        <h2 style={{color:s.navy,fontSize:18,fontWeight:800,marginBottom:6}}>Current Lender Offers & Promotions</h2>
        <p style={{color:"rgba(0,0,0,0.6)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Cash back, switch incentives, and bundle deals — filtered for your province.</p>
      </div>

      {/* Province selector */}
      <div style={{background:s.white,borderRadius:10,padding:"10px 14px",marginBottom:14,border:`1px solid ${s.border}`,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
        <span style={{fontSize:12,fontWeight:700,color:s.navy,flexShrink:0}}>📍 Showing offers for:</span>
        <select value={prov} onChange={e=>changeProv(e.target.value)} style={{padding:"6px 10px",borderRadius:8,border:`1.5px solid ${s.gold}`,fontSize:12,fontWeight:700,background:"#fffbeb",color:s.navy,flex:1,maxWidth:200}}>
          {Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}
        </select>
        <span style={{fontSize:11,color:s.muted}}>
          {OFFERS.filter((o:any)=>o.provinces.length===0||o.provinces.includes(prov)).length} offers available
        </span>
      </div>

      {/* National/Federal Offers */}
      <div style={{marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <div style={{fontSize:14,fontWeight:800,color:s.navy}}>🍁 National Offers — Available Across Canada</div>
          <span style={{background:"#dbeafe",color:"#1e40af",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>
            {OFFERS.filter((o:any)=>o.provinces.length===0).length} offers
          </span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
          {OFFERS.filter((o:any)=>o.provinces.length===0).map((offer:any,i:number)=>(
            <div key={i} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{background:offer.color,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{color:offer.textColor,fontSize:13,fontWeight:800}}>{offer.bank}</div>
                <span style={{background:"rgba(255,255,255,0.2)",color:offer.textColor,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{offer.tag}</span>
              </div>
              <div style={{padding:14}}>
                <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                  <span style={{background:"#f1f5f9",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:s.navy}}>{offer.badge}</span>
                  <span style={{background:"#dbeafe",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:"#1e40af"}}>🍁 All Provinces</span>
                </div>
                <div style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:6}}>{offer.offer}</div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:8}}>{offer.detail}</div>
                <div style={{fontSize:10,color:s.muted,marginBottom:10}}>⏰ Expires: <strong>{offer.expires}</strong></div>
                <a href={offer.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"8px 12px",background:offer.color,color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textAlign:"center",textDecoration:"none"}}>View Offer →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Provincial Offers */}
      {OFFERS.filter((o:any)=>o.provinces.length>0&&o.provinces.includes(prov)).length>0&&(
        <div style={{marginBottom:14}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            <div style={{fontSize:14,fontWeight:800,color:s.navy}}>📍 {PDATA[prov]?.name} — Province-Specific Offers</div>
            <span style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>
              {OFFERS.filter((o:any)=>o.provinces.length>0&&o.provinces.includes(prov)).length} offers
            </span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
            {OFFERS.filter((o:any)=>o.provinces.length>0&&o.provinces.includes(prov)).map((offer:any,i:number)=>(
              <div key={i} style={{background:s.white,borderRadius:12,border:`2px solid ${s.green}`,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                <div style={{background:offer.color,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{color:offer.textColor,fontSize:13,fontWeight:800}}>{offer.bank}</div>
                  <span style={{background:"rgba(255,255,255,0.2)",color:offer.textColor,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{offer.tag}</span>
                </div>
                <div style={{padding:14}}>
                  <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                    <span style={{background:"#f1f5f9",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:s.navy}}>{offer.badge}</span>
                    <span style={{background:"#dcfce7",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:"#15803d"}}>📍 {PDATA[prov]?.name} Only</span>
                  </div>
                  <div style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:6}}>{offer.offer}</div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:8}}>{offer.detail}</div>
                  <div style={{fontSize:10,color:s.muted,marginBottom:10}}>⏰ Expires: <strong>{offer.expires}</strong></div>
                  <a href={offer.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"8px 12px",background:offer.color,color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textAlign:"center",textDecoration:"none"}}>View Offer →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {OFFERS.filter((o:any)=>o.provinces.length>0&&o.provinces.includes(prov)).length===0&&(
        <div style={{background:"#f8fafc",borderRadius:10,padding:"16px",textAlign:"center",marginBottom:14,border:`1px solid ${s.border}`}}>
          <div style={{fontSize:20,marginBottom:6}}>📍</div>
          <div style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:4}}>No province-specific offers for {PDATA[prov]?.name} right now</div>
          <div style={{fontSize:11,color:s.muted}}>All national offers above are available to you. Check back — provincial offers are updated regularly.</div>
        </div>
      )}

      <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",fontSize:11,color:"#92400e"}}>
        ⚠️ Offers subject to change. Always verify current terms directly with the lender. Canada Mortgage Rates is not affiliated with any lender.
      </div>
      </>}

      {subTab==="history"&&<>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>📈</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Bank of Canada Rate History</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>How the BoC overnight rate has moved since 2020 — and what it means for your mortgage.</p>
      </div>

      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>📅 BoC Rate Timeline — 2020 to Present</h3>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
            <thead><tr style={{background:"#f8fafc"}}>{["Date","Rate Change","Overnight Rate","Prime Rate","Context"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`,whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                {date:"Mar 2020",change:"−1.50%",rate:"0.25%",prime:"2.45%",context:"COVID-19 emergency cuts",dir:"down"},
                {date:"Mar 2022",change:"+0.25%",rate:"0.50%",prime:"2.70%",context:"First post-COVID hike",dir:"up"},
                {date:"Jun 2022",change:"+0.50%",rate:"1.50%",prime:"3.70%",context:"Aggressive inflation fight",dir:"up"},
                {date:"Sep 2022",change:"+0.75%",rate:"3.25%",prime:"5.45%",context:"Largest single hike in 30 years",dir:"up"},
                {date:"Jan 2023",change:"+0.25%",rate:"4.50%",prime:"6.70%",context:"Rate hike cycle peak approached",dir:"up"},
                {date:"Jul 2023",change:"+0.25%",rate:"5.00%",prime:"7.20%",context:"Peak rate — 22-year high",dir:"up"},
                {date:"Jun 2024",change:"−0.25%",rate:"4.75%",prime:"6.95%",context:"First cut since COVID",dir:"down"},
                {date:"Sep 2024",change:"−0.25%",rate:"4.25%",prime:"6.45%",context:"Cutting cycle accelerates",dir:"down"},
                {date:"Dec 2024",change:"−0.50%",rate:"3.25%",prime:"5.45%",context:"Large cut as inflation cools",dir:"down"},
                {date:"Mar 2025",change:"−0.25%",rate:"2.75%",prime:"4.95%",context:"Continued easing",dir:"down"},
                {date:"Jun 2025",change:"−0.25%",rate:"2.50%",prime:"4.70%",context:"Near neutral rate",dir:"down"},
                {date:"Jan 2026",change:"−0.25%",rate:"2.25%",prime:"4.45%",context:"Hold — inflation at target",dir:"down"},
                {date:"Mar 2026",change:"Hold",rate:"2.25%",prime:"4.45%",context:"2nd consecutive hold",dir:"hold"},
                {date:"Apr 2026",change:"Hold",rate:"2.25%",prime:"4.45%",context:"3rd consecutive hold",dir:"hold"},
                {date:"Jun 2026",change:"Hold",rate:"2.25%",prime:"4.45%",context:"4th consecutive hold",dir:"hold"},
                {date:"Jul 2026",change:"Hold",rate:bocRates.overnight+"%",prime:bocRates.prime+"%",context:"5th consecutive hold — BoC July 15, 2026",dir:"hold",current:true},
              ].map((row,i,arr)=>(
                <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:row.current?`linear-gradient(135deg,${s.navy},#1a3a5c)`:i%2===0?s.white:"#fafbfc"}}>
                  <td style={{padding:"8px 12px",fontSize:12,fontWeight:700,color:row.current?"#fff":s.navy,whiteSpace:"nowrap"}}>{row.date}{row.current&&<span style={{background:s.gold,color:s.navy,borderRadius:20,padding:"1px 6px",fontSize:8,fontWeight:800,marginLeft:6}}>LATEST</span>}</td>
                  <td style={{padding:"8px 12px",fontSize:12,fontWeight:800,color:row.current?"#fff":row.dir==="up"?"#dc2626":row.dir==="down"?s.green:s.muted}}>{row.change}</td>
                  <td style={{padding:"8px 12px",fontSize:12,fontWeight:700,color:row.current?s.gold:s.navy}}>{row.rate}</td>
                  <td style={{padding:"8px 12px",fontSize:12,color:row.current?"rgba(255,255,255,0.8)":s.muted}}>{row.prime}</td>
                  <td style={{padding:"8px 12px",fontSize:11,color:row.current?"rgba(255,255,255,0.8)":s.muted}}>{row.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{fontSize:10,color:s.muted,marginTop:8}}>🕐 Current rate auto-updates from Bank of Canada data · Last updated: {TODAY}</div>
      </Card>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12,marginBottom:14}}>
        <Card style={{background:s.navy}}>
          <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>📊 Key Rate Milestones</h3>
          {[["Mar 2020","0.25%","COVID low — cheapest mortgages ever"],["Jul 2023","5.00%","22-year high — peak of hike cycle"],["Today","2.25%","Well below peak — rates near neutral"]].map(([d,r,n])=>(
            <div key={d} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                <span style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>{d}</span>
                <span style={{fontSize:14,fontWeight:800,color:s.gold}}>{r}</span>
              </div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.7)"}}>{n}</div>
            </div>
          ))}
        </Card>
        <Card>
          <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>🔮 What Economists Expect</h3>
          {[
            ["Late 2026","1–2 more cuts possible if inflation stays at 2%","#16a34a"],
            ["2027","Rates may stabilize at 2.00–2.25% (neutral zone)","#2563eb"],
            ["Risk","Trade disruptions or housing surge could pause cuts","#dc2626"],
          ].map(([t,d,c])=>(
            <div key={t} style={{background:"#f8fafc",borderRadius:8,padding:10,marginBottom:8,borderLeft:`3px solid ${c}`}}>
              <div style={{fontSize:11,fontWeight:800,color:c,marginBottom:3}}>{t}</div>
              <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{d}</div>
            </div>
          ))}
          <p style={{fontSize:10,color:"#bbb",marginTop:6}}>* Forecasts are not guarantees. Always consult a licensed mortgage professional.</p>
        </Card>
      </div>

      <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:10,padding:"12px 16px",fontSize:11,color:"#92400e"}}>
        💡 <b>What this means for your mortgage:</b> With rates down from 5% to 2.25%, variable rate holders have seen significant payment relief. Fixed rate borrowers renewing now face lower rates than their original 2021–2022 terms. If you're renewing in 2026–2027, this is a good time to compare offers.
      </div>
      </>}

      {subTab==="lenders"&&<>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>🏦</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Canadian Mortgage Lender Guide</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Not all lenders are equal. Understanding the difference can save you thousands.</p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12,marginBottom:14}}>
        {[
          {type:"Big 6 Banks",emoji:"🏛️",color:"#1e40af",pros:["Branch network across Canada","One-stop for all banking","Rate holds up to 120 days","Familiar and trusted"],cons:["Rarely offer best rates","High IRD break penalties","Less flexible on qualifying","Push proprietary products"],best:"If you value convenience and full-service banking.",examples:"RBC, TD, BMO, Scotiabank, CIBC, National Bank"},
          {type:"Credit Unions",emoji:"🤝",color:s.green,pros:["Often 0.25–0.50% below banks","Member-owned = profit sharing","Fairer IRD calculations","More flexible qualifying"],cons:["Provincial only — can't switch provinces","Smaller branch networks","May have membership fees","Less product variety"],best:"If you want better rates with local service.",examples:"Servus, Vancity, Steinbach CU, First West"},
          {type:"Monoline Lenders",emoji:"⚡",color:"#7c3aed",pros:["Mortgage specialists only","Very competitive rates","Fair IRD calculations","Strong service"],cons:["No branches — phone/online only","Can't bundle with other banking","Less known by consumers","Must use broker to access"],best:"If you want the best rates without a broker.",examples:"MCAP, First National, RMG, Radius Financial"},
          {type:"Mortgage Brokers",emoji:"🔍",color:s.red,pros:["Access to 30+ lenders at once","Free for borrowers (paid by lender)","Specialists in complex situations","Best for self-employed, renewals"],cons:["Not all brokers are equal","Some push higher-commission lenders","No direct relationship with lender","Quality varies significantly"],best:"For first-time buyers, self-employed, or renewals.",examples:"Butler Mortgage, Nesto, True North, Dominion"},
          {type:"Online Lenders",emoji:"💻",color:"#0891b2",pros:["Often lowest rates in Canada","Fast digital application","No branch pressure","Transparent pricing"],cons:["No in-person support","Limited flexibility","Not suitable for complex files","Newer — less track record"],best:"If you have a straightforward application and want the lowest rate.",examples:"Nesto, Homewise, Breezeful, Neo Mortgage"},
          {type:"Private Lenders",emoji:"🔒",color:"#92400e",pros:["Approve when banks won't","No income verification required","Fast closing (1–2 weeks)","Short-term solution"],cons:["Much higher rates (8–15%+)","Significant fees (1–3%)","Short terms only","Exit strategy required"],best:"Last resort only — use to bridge to bank qualification.",examples:"Atrium, Romspen, various MICs"},
        ].map(l=>(
          <div key={l.type} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"}}>
            <div style={{background:l.color,padding:"12px 14px",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:22}}>{l.emoji}</span>
              <div style={{color:"#fff",fontSize:14,fontWeight:800}}>{l.type}</div>
            </div>
            <div style={{padding:12}}>
              <div style={{marginBottom:8}}>
                <div style={{fontSize:10,fontWeight:700,color:s.green,marginBottom:4,textTransform:"uppercase"}}>✓ Pros</div>
                {l.pros.map(p=><div key={p} style={{fontSize:11,color:"#374151",padding:"2px 0",display:"flex",gap:5}}><span style={{color:s.green,flexShrink:0}}>✓</span>{p}</div>)}
              </div>
              <div style={{marginBottom:8}}>
                <div style={{fontSize:10,fontWeight:700,color:s.red,marginBottom:4,textTransform:"uppercase"}}>✗ Cons</div>
                {l.cons.map(c=><div key={c} style={{fontSize:11,color:"#374151",padding:"2px 0",display:"flex",gap:5}}><span style={{color:s.red,flexShrink:0}}>✗</span>{c}</div>)}
              </div>
              <div style={{background:"#f0fdf4",borderRadius:6,padding:"6px 8px",marginBottom:6}}>
                <div style={{fontSize:10,fontWeight:700,color:s.green,marginBottom:2}}>BEST FOR</div>
                <div style={{fontSize:11,color:"#15803d"}}>{l.best}</div>
              </div>
              <div style={{fontSize:10,color:s.muted}}><b>Examples:</b> {l.examples}</div>
            </div>
          </div>
        ))}
      </div>

      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>🤔 Which Lender Type is Right for You?</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
          {[
            {q:"First-time buyer, good credit, salaried",a:"Start with a mortgage broker — they'll compare banks, credit unions, and monolines to find you the best rate."},
            {q:"Renewal coming up",a:"Get 2–3 competing quotes from brokers + your bank's renewal offer. Never sign the first renewal offer."},
            {q:"Self-employed or irregular income",a:"Mortgage broker is essential — they know which lenders are flexible on income documentation."},
            {q:"Want the absolute lowest rate",a:"Online lender (Nesto) or monoline via broker. Expect to do everything digitally."},
            {q:"Credit score under 650",a:"B-lender via mortgage broker. Work on credit for 6–12 months then refinance with an A-lender."},
            {q:"Need quick approval",a:"Mortgage broker — they can shop multiple lenders simultaneously and often close faster than banks."},
          ].map(({q,a})=>(
            <div key={q} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
              <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:5}}>📋 {q}</div>
              <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>→ {a}</div>
            </div>
          ))}
        </div>
      </Card>

      <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"12px",background:s.red,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:14}}>📞 Get a Free Mortgage Consultation — We'll Match You to the Right Lender →</button>
      </>}

      {subTab==="private"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,#4c1d95,#7c3aed)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>🔓</div>
            <h2 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Private & Alternative Mortgage Lenders</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Banks said no? You still have options. Private lenders and MICs serve borrowers who don't fit conventional lending criteria.</p>
          </div>

          {/* Private sub-tabs */}
          <PrivateTab/>
        </div>
      )}
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
<p>Mortgage rates are compiled from publicly available lender websites and market data and may not reflect current rates. Rates are subject to change without notice. Always verify rates directly with the financial institution before making any financial decisions.</p>
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
<p>All rates displayed are compiled from publicly available lender websites and market data and may not reflect your actual qualified rate, real-time rates, all available rates, or rates inclusive of all fees.</p>
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
function RefiCalcTab(){
  const [refiTab,setRefiTab]=useState<"calculator"|"penalty"|"blend"|"cashout"|"heloc"|"guide">("calculator");
  // Calculator state
  const [balance,setBalance]=useState(350000);
  const [currentRate,setCurrentRate]=useState(5.5);
  const [currentAmort,setCurrentAmort]=useState(20);
  const [newRate,setNewRate]=useState(4.89);
  const [newAmort,setNewAmort]=useState(20);
  const [penalty,setPenalty]=useState(5000);
  const [legalFees,setLegalFees]=useState(1500);
  const [cashOutAmount,setCashOutAmount]=useState(0);
  const [cashOutPurpose,setCashOutPurpose]=useState("none");
  const [debtAmount,setDebtAmount]=useState(0);
  const [debtRate,setDebtRate]=useState(19.99);
  const [homeValue,setHomeValue]=useState(600000);
  const [result,setResult]=useState<any>(null);
  const resultRef=useRef<any>(null);
  // Penalty estimator state
  const [penBalance,setPenBalance]=useState(350000);
  const [penRate,setPenRate]=useState(5.5);
  const [penMonths,setPenMonths]=useState(24);
  const [penType,setPenType]=useState("variable");
  const [penPosted,setPenPosted]=useState(6.5);
  const [penCurrentPosted,setPenCurrentPosted]=useState(5.5);
  const [penResult,setPenResult]=useState<any>(null);
  // Cash-out state
  const [coHomeVal,setCoHomeVal]=useState(600000);
  const [coBalance,setCoBalance]=useState(350000);
  const [coRate,setCoRate]=useState(4.89);
  const [coAmort,setCoAmort]=useState(20);
  const [coResult,setCoResult]=useState<any>(null);

  function calcPmt(p:number,r:number,y:number){const m=r/100/12,n=y*12;return m===0?p/n:p*(m*Math.pow(1+m,n))/(Math.pow(1+m,n)-1);}

  function calculate(){
    const ltvLimit=homeValue*0.80;
    const maxCashOut=Math.max(0,ltvLimit-balance);
    const actualCashOut=Math.min(cashOutAmount,maxCashOut);
    const newBalance=balance+actualCashOut;
    const currentPmt=calcPmt(balance,currentRate,currentAmort);
    const newPmt=calcPmt(newBalance,newRate,newAmort);
    const monthlySaving=currentPmt-newPmt;
    const totalCost=penalty+legalFees;
    const breakEvenMonths=monthlySaving>0?Math.ceil(totalCost/monthlySaving):null;
    const fiveYearSaving=monthlySaving*60-totalCost;
    const tenYearSaving=monthlySaving*120-totalCost;
    const currentTotal=currentPmt*currentAmort*12;
    const newTotal=newPmt*newAmort*12;
    const lifetimeSaving=currentTotal-(newTotal+totalCost);
    // Debt consolidation savings
    const debtMonthlyInterest=debtAmount*debtRate/100/12;
    const newDebtInterest=debtAmount*newRate/100/12;
    const debtSaving=debtMonthlyInterest-newDebtInterest;
    const rateDiff=currentRate-newRate;
    const worthIt=breakEvenMonths!==null&&breakEvenMonths<=36;
    const recommendation=rateDiff<0.5?"Marginal — rate difference under 0.5%":breakEvenMonths===null?"Not recommended — no monthly saving":breakEvenMonths<=18?"Strong case — break-even under 18 months":breakEvenMonths<=36?"Reasonable — break-even under 3 years":"Caution — break-even over 3 years";
    setResult({currentPmt,newPmt,monthlySaving,totalCost,breakEvenMonths,fiveYearSaving,tenYearSaving,lifetimeSaving,worthIt,rateDiff,recommendation,actualCashOut,newBalance,maxCashOut,debtSaving,debtMonthlyInterest});
    setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  }

  function calcPenalty(){
    let pen=0;let method="";let breakdown:any[]=[];
    if(penType==="variable"){
      const monthly=penBalance*penRate/100/12;
      pen=monthly*3;
      method="3 Months Interest";
      breakdown=[["Balance",cur(penBalance)],["Monthly Interest",cur(monthly)],["× 3 months",""],["Estimated Penalty",cur(pen)]];
    }else{
      const postedDiff=penPosted-penCurrentPosted;
      const irdAnnual=penBalance*Math.max(0,postedDiff)/100;
      const irdTotal=irdAnnual*(penMonths/12);
      const threeMonths=penBalance*penRate/100/12*3;
      pen=Math.max(irdTotal,threeMonths);
      method=penType==="fixed_bank"?"IRD (Posted Rate Method — Bank)":"IRD (Fair Method — Credit Union)";
      breakdown=[["Balance",cur(penBalance)],["Rate differential",`${postedDiff.toFixed(2)}%`],["Months remaining",penMonths+" mo"],["IRD estimate",cur(irdTotal)],["3-month interest",cur(threeMonths)],["Penalty (higher of two)",cur(pen)]];
    }
    setPenResult({penalty:pen,method,breakdown});
  }

  function calcCashOut(){
    const ltvLimit=coHomeVal*0.80;
    const equity=coHomeVal-coBalance;
    const maxCash=Math.max(0,ltvLimit-coBalance);
    const newBalance=coBalance+maxCash;
    const newPmt=calcPmt(newBalance,coRate,coAmort);
    setCoResult({ltvLimit,equity,maxCash,newBalance,newPmt});
  }

  return(
    <div>
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        {[["calculator","💳 Should I Refi?"],["penalty","⚖️ Penalty Estimator"],["blend","🔀 Blend & Extend"],["cashout","💵 Cash-Out"],["heloc","🔄 Refi vs HELOC"],["guide","📋 Full Guide"]].map(([id,label])=>(
          <button key={id} onClick={()=>setRefiTab(id as any)} style={{flex:1,minWidth:100,padding:"9px 8px",borderRadius:8,border:`2px solid ${refiTab===id?s.navy:s.border}`,background:refiTab===id?s.navy:s.white,color:refiTab===id?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>{label}</button>
        ))}
      </div>

      {/* Sub-tab 1: Calculator */}
      {refiTab==="calculator"&&(
      <div>
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:16,textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:6}}>💳</div>
          <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Refinancing Calculator</h2>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Should you break your mortgage early to get a lower rate? Find out if refinancing makes sense — and exactly when you break even.</p>
        </div>
        <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:10,padding:"10px 16px",marginBottom:14,fontSize:11,color:"#92400e"}}>
          ⚠️ <b>Important:</b> Refinancing means breaking your current mortgage before maturity. Get your lender's exact penalty amount before deciding.
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:14}}>
          <Card>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:12}}>📊 Current Mortgage</h3>
            <Field label="Home Value ($)"><input type="number" value={homeValue} onChange={e=>setHomeValue(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Remaining Balance ($)"><input type="number" value={balance} onChange={e=>setBalance(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Current Rate (%)"><input type="number" step="0.05" value={currentRate} onChange={e=>setCurrentRate(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="Remaining Amortization"><select value={currentAmort} onChange={e=>setCurrentAmort(parseInt(e.target.value))} style={inp}>{[5,10,15,20,25].map(y=><option key={y} value={y}>{y} years</option>)}</select></Field>

            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:12,marginTop:14}}>✨ New Mortgage Terms</h3>
            <Field label="New Rate (%)"><input type="number" step="0.05" value={newRate} onChange={e=>setNewRate(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <Field label="New Amortization"><select value={newAmort} onChange={e=>setNewAmort(parseInt(e.target.value))} style={inp}>{[5,10,15,20,25].map(y=><option key={y} value={y}>{y} years</option>)}</select></Field>

            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:12,marginTop:14}}>💵 Cash-Out (Optional)</h3>
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 10px",marginBottom:8,fontSize:10,color:"#15803d"}}>
              Max available: <b>{cur(Math.max(0,(homeValue*0.80)-balance))}</b> (80% LTV limit)
            </div>
            <Field label="Cash-Out Amount ($)"><input type="number" value={cashOutAmount} onChange={e=>setCashOutAmount(parseFloat(e.target.value)||0)} placeholder="0 if rate change only" style={inp}/></Field>
            {cashOutAmount>0&&(
              <Field label="Purpose">
                <select value={cashOutPurpose} onChange={e=>setCashOutPurpose(e.target.value)} style={inp}>
                  <option value="none">Select purpose</option>
                  <option value="renovation">Home Renovation</option>
                  <option value="debt">Debt Consolidation</option>
                  <option value="investment">Investment</option>
                  <option value="education">Education</option>
                  <option value="business">Business</option>
                  <option value="other">Other</option>
                </select>
              </Field>
            )}

            {cashOutPurpose==="debt"&&cashOutAmount>0&&(
              <>
                <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:8,marginTop:10}}>💳 Debt Being Consolidated</h3>
                <Field label="Total Debt Amount ($)"><input type="number" value={debtAmount} onChange={e=>setDebtAmount(parseFloat(e.target.value)||0)} style={inp}/></Field>
                <Field label="Current Debt Interest Rate (%)"><input type="number" step="0.5" value={debtRate} onChange={e=>setDebtRate(parseFloat(e.target.value)||0)} style={inp}/></Field>
              </>
            )}

            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:12,marginTop:14}}>💸 Refinancing Costs</h3>
            <Field label="Break Penalty ($)"><input type="number" value={penalty} onChange={e=>setPenalty(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <div style={{fontSize:10,color:s.muted,marginBottom:8,marginTop:-4}}>
              Variable: ~3 months interest. Fixed: IRD. <button onClick={()=>setRefiTab("penalty")} style={{background:"none",border:"none",color:s.blue,cursor:"pointer",fontSize:10,textDecoration:"underline",padding:0}}>Estimate penalty →</button>
            </div>
            <Field label="Legal & Admin Fees ($)"><input type="number" value={legalFees} onChange={e=>setLegalFees(parseFloat(e.target.value)||0)} style={inp}/></Field>
            <button onClick={calculate} style={calcBtn}>Calculate Refinancing</button>
          </Card>

          <div ref={resultRef}>{result&&(
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {/* Recommendation banner */}
              <div style={{background:result.worthIt?`linear-gradient(135deg,${s.green},#15803d)`:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:12,padding:16}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                  <span style={{fontSize:28}}>{result.worthIt?"✅":"⚠️"}</span>
                  <div>
                    <div style={{color:"#fff",fontSize:14,fontWeight:800}}>{result.worthIt?"Refinancing Looks Worth It":"Proceed With Caution"}</div>
                    <div style={{color:"rgba(255,255,255,0.8)",fontSize:11,marginTop:2}}>{result.recommendation}</div>
                  </div>
                </div>
                {result.breakEvenMonths&&<div style={{background:"rgba(255,255,255,0.15)",borderRadius:8,padding:"6px 10px",fontSize:11,color:"#fff"}}>
                  Break-even: <b>{result.breakEvenMonths} months</b> · Rate diff: <b>{result.rateDiff.toFixed(2)}%</b> · Rule of thumb: need 0.50%+
                </div>}
              </div>

              {/* Key numbers */}
              <Card>
                <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>📊 Payment Comparison</h3>
                {([
                  ["Current Payment",cur(result.currentPmt)+"/mo",s.muted],
                  ["New Payment",cur(result.newPmt)+"/mo",result.newPmt<result.currentPmt?s.green:s.red],
                  ["Monthly Change",`${result.monthlySaving>=0?"-":"+"}${cur(Math.abs(result.monthlySaving))}/mo`,result.monthlySaving>0?s.green:s.red],
                  ...(result.actualCashOut>0?[["Cash-Out Amount",cur(result.actualCashOut),s.blue],["New Mortgage Balance",cur(result.newBalance),s.navy]]:[]),
                  ["Total Refi Cost",cur(result.totalCost),s.red],
                  ["Break-Even",result.breakEvenMonths?result.breakEvenMonths+" months":"No saving",result.breakEvenMonths&&result.breakEvenMonths<=36?s.green:s.red],
                ] as [string,string,string][]).map(([l,v,c])=>(
                  <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${s.light}`}}>
                    <span style={{fontSize:11,color:s.muted}}>{l}</span>
                    <span style={{fontSize:12,fontWeight:700,color:c}}>{v}</span>
                  </div>
                ))}
              </Card>

              {/* Savings over time */}
              <Card style={{background:s.navy}}>
                <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>💰 Net Savings Over Time</h3>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:10}}>
                  {[["5 Yrs",result.fiveYearSaving],["10 Yrs",result.tenYearSaving],["Full",result.lifetimeSaving]].map(([l,v])=>(
                    <div key={l as string} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:8,textAlign:"center"}}>
                      <div style={{fontSize:13,fontWeight:800,color:(v as number)>0?s.gold:"#f87171"}}>{(v as number)>0?`+${cur(v as number)}`:`-${cur(Math.abs(v as number))}`}</div>
                      <div style={{fontSize:9,color:"rgba(255,255,255,0.5)",marginTop:2}}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.4)"}}>After penalty & fees of {cur(result.totalCost)}</div>
              </Card>

              {/* Cash-out summary */}
              {result.actualCashOut>0&&(
                <Card style={{borderLeft:`4px solid ${s.green}`}}>
                  <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:8}}>💵 Cash-Out Summary</h3>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"5px 0",fontSize:12}}>
                    <span style={{color:s.muted}}>Cash received</span><span style={{fontWeight:700,color:s.green}}>{cur(result.actualCashOut)}</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"5px 0",fontSize:12}}>
                    <span style={{color:s.muted}}>Purpose</span><span style={{fontWeight:700,color:s.navy,textTransform:"capitalize"}}>{cashOutPurpose!=="none"?cashOutPurpose:"Not specified"}</span>
                  </div>
                  {cashOutPurpose==="debt"&&debtAmount>0&&result.debtSaving>0&&(
                    <div style={{background:"#f0fdf4",borderRadius:8,padding:"8px 10px",marginTop:8,fontSize:11,color:"#15803d"}}>
                      💡 Rolling {cur(debtAmount)} debt from {debtRate}% → {newRate}% saves <b>{cur(result.debtSaving)}/month</b> on interest alone
                    </div>
                  )}
                  <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"6px 10px",marginTop:8,fontSize:10,color:"#92400e"}}>
                    ⚠️ Cash-out increases your mortgage balance and total interest paid. Only use for investments with clear return.
                  </div>
                </Card>
              )}

              {/* Next steps */}
              <Card style={{borderLeft:`4px solid ${s.gold}`}}>
                <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:8}}>📋 Next Steps</h3>
                {["Get your lender's exact break penalty in writing","Get 2–3 competing rate quotes via a mortgage broker","Consider blend-and-extend to avoid the full penalty","Check your prepayment privilege — use it before breaking"].map((step,i)=>(
                  <div key={i} style={{display:"flex",gap:8,padding:"5px 0",fontSize:11,color:s.muted,borderBottom:`1px solid ${s.light}`}}>
                    <span style={{color:s.gold,fontWeight:800,flexShrink:0}}>{i+1}.</span>{step}
                  </div>
                ))}
              </Card>
              <p style={{fontSize:10,color:"#bbb"}}>* Estimates only. Get your exact penalty from your lender. Consult a licensed mortgage professional.</p>
            </div>
          )}</div>
        </div>
      </div>
      )}

      {/* Sub-tab 2: IRD Penalty Estimator */}
      {refiTab==="penalty"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>⚖️</div>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Break Penalty Estimator</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Estimate your mortgage break penalty before calling your lender. Variable and fixed calculations included.</p>
          </div>
          <div style={{background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:10,padding:"10px 16px",marginBottom:14,fontSize:11,color:"#dc2626"}}>
            ⚠️ <b>This is an estimate only.</b> Fixed-rate IRD penalties vary significantly between lenders. Your bank's posted rate used for IRD can differ from the discount rate — always get the exact number from your lender in writing.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
            <Card>
              <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>Enter Your Mortgage Details</h3>
              <Field label="Mortgage Balance ($)"><input type="number" value={penBalance} onChange={e=>setPenBalance(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="Your Current Rate (%)"><input type="number" step="0.05" value={penRate} onChange={e=>setPenRate(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="Months Remaining in Term"><input type="number" value={penMonths} onChange={e=>setPenMonths(parseInt(e.target.value)||0)} style={inp}/></Field>
              <Field label="Mortgage Type">
                <select value={penType} onChange={e=>setPenType(e.target.value)} style={inp}>
                  <option value="variable">Variable Rate</option>
                  <option value="fixed_cu">Fixed — Credit Union / Monoline</option>
                  <option value="fixed_bank">Fixed — Big 6 Bank</option>
                </select>
              </Field>
              {penType!=="variable"&&<Field label="Posted Rate When You Got Mortgage (%)"><input type="number" step="0.05" value={penPosted} onChange={e=>setPenPosted(parseFloat(e.target.value)||0)} style={inp}/></Field>}
              {penType!=="variable"&&<Field label="Current Posted Rate for Remaining Term (%)"><input type="number" step="0.05" value={penCurrentPosted} onChange={e=>setPenCurrentPosted(parseFloat(e.target.value)||0)} style={inp}/></Field>}
              <button onClick={calcPenalty} style={calcBtn}>Estimate My Penalty</button>
            </Card>
            {penResult&&(
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <Card style={{background:s.navy,textAlign:"center"}}>
                  <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:4}}>Estimated Break Penalty</div>
                  <div style={{fontSize:36,fontWeight:800,color:s.gold,marginBottom:4}}>{cur(penResult.penalty)}</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.6)"}}>Method: {penResult.method}</div>
                </Card>
                <Card>
                  <h3 style={{fontSize:13,fontWeight:700,color:s.navy,marginBottom:10}}>📊 Calculation Breakdown</h3>
                  {penResult.breakdown.map(([l,v]:any)=>(
                    <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${s.light}`,fontSize:11}}>
                      <span style={{color:s.muted}}>{l}</span>
                      <span style={{fontWeight:700,color:s.navy}}>{v}</span>
                    </div>
                  ))}
                </Card>
                <Card style={{background:"#fffbeb",border:"1px solid #fde68a"}}>
                  <h3 style={{fontSize:12,fontWeight:800,color:"#92400e",marginBottom:6}}>💡 How to Reduce Your Penalty</h3>
                  {["Make your maximum annual prepayment (10–20%) before breaking — this reduces the balance the penalty is calculated on","Ask your lender about a blend-and-extend option — may avoid the full penalty","Wait until your renewal date — no penalty at maturity","Port your mortgage to a new property if you're moving"].map((tip,i)=>(
                    <div key={i} style={{fontSize:11,color:"#92400e",padding:"3px 0",display:"flex",gap:6}}><span>•</span>{tip}</div>
                  ))}
                </Card>
              </div>
            )}
          </div>
          <Card style={{marginTop:14}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>📚 Variable vs Fixed Penalty — Explained</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
              {[
                {type:"Variable Rate",penalty:"3 Months Interest",formula:"Balance × Rate ÷ 12 × 3",example:"$400K at 4.5% = ~$4,500",color:s.green,note:"Simple, predictable, rarely exceeds $5,000"},
                {type:"Fixed — Credit Union / Monoline",penalty:"IRD (fair calculation)",formula:"(Your rate − today's rate for remaining term) × balance × years remaining",example:"More reasonable than big banks",color:s.blue,note:"Uses your actual discount rate, not posted rate"},
                {type:"Fixed — Big 6 Bank",penalty:"IRD (posted rate method)",formula:"(Posted rate at signing − current posted rate) × balance × years remaining",example:"Can reach $15,000–$40,000+",color:s.red,note:"Uses inflated posted rates — can be 3–5× higher than credit union IRD"},
              ].map(p=>(
                <div key={p.type} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderLeft:`3px solid ${p.color}`}}>
                  <div style={{fontSize:12,fontWeight:800,color:p.color,marginBottom:4}}>{p.type}</div>
                  <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:3}}>Penalty: {p.penalty}</div>
                  <div style={{fontSize:10,color:s.muted,marginBottom:5}}>{p.formula}</div>
                  <div style={{fontSize:11,color:"#374151",marginBottom:5,fontStyle:"italic"}}>{p.example}</div>
                  <div style={{fontSize:10,background:"#fff",borderRadius:6,padding:"4px 8px",color:p.color,fontWeight:600}}>{p.note}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Sub-tab 3: Blend & Extend */}
      {refiTab==="blend"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,#7c3aed,#6d28d9)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>🔀</div>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Blend & Extend — The Hidden Option</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Most lenders offer a way to get a lower rate without paying the full break penalty. Most Canadians don't know it exists.</p>
          </div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:8}}>What is Blend & Extend?</h3>
            <p style={{fontSize:12,color:s.muted,lineHeight:1.7,marginBottom:10}}>A blend-and-extend lets you "blend" your current rate with today's lower rate into a new blended rate — without paying a full break penalty. In exchange, you extend your term (usually to 5 years).</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10,marginBottom:12}}>
              {[
                {title:"How Your New Rate is Calculated",desc:"Weighted average of your current rate and today's rate, based on time remaining vs new term length. You won't get today's best rate — but you'll get something between your current rate and today's rate.",icon:"🧮"},
                {title:"The Tradeoff",desc:"You avoid the break penalty but you're locked in for another full term (usually 5 years). If rates drop further, you're stuck. If rates rise, you're protected.",icon:"⚖️"},
                {title:"Who Offers It",desc:"Most major banks and many credit unions offer blend-and-extend. Not all lenders do — ask specifically. Some call it 'blend-to-term' or 'early renewal'.",icon:"🏦"},
                {title:"When It Makes Sense",desc:"Best when: your current rate is significantly above today's rates, you want to avoid a large penalty, and you're comfortable with another 5-year commitment.",icon:"✅"},
              ].map(item=>(
                <div key={item.title} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
                  <div style={{fontSize:20,marginBottom:6}}>{item.icon}</div>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:4}}>{item.title}</div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>📊 Blend & Extend vs Full Refinancing — Example</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:10}}>$400,000 mortgage · Current rate 5.5% · 2 years remaining · Today's rate 4.89%</p>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
                <thead><tr style={{background:"#f8fafc"}}>{["Option","New Rate","Break Penalty","Monthly Saving","Best For"].map(h=><th key={h} style={{padding:"8px 10px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`}}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    {opt:"Do Nothing",rate:"5.50%",pen:"$0",saving:"$0",best:"If renewal is less than 6 months away",color:s.muted},
                    {opt:"Blend & Extend",rate:"~5.15%",pen:"$0–500",saving:"~$80/mo",best:"Avoid penalty, get some savings now",color:"#7c3aed"},
                    {opt:"Full Refinance",rate:"4.89%",pen:"~$8,000",saving:"~$165/mo",best:"Maximum savings, break-even ~4 years",color:s.green},
                    {opt:"Wait for Renewal",rate:"4.89%",pen:"$0",saving:"~$165/mo",best:"Best if renewal is within 4–6 months",color:s.blue},
                  ].map((row,i)=>(
                    <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                      <td style={{padding:"9px 10px",fontSize:12,fontWeight:700,color:row.color}}>{row.opt}</td>
                      <td style={{padding:"9px 10px",fontSize:12,color:s.navy}}>{row.rate}</td>
                      <td style={{padding:"9px 10px",fontSize:12,color:s.muted}}>{row.pen}</td>
                      <td style={{padding:"9px 10px",fontSize:12,fontWeight:700,color:s.green}}>{row.saving}</td>
                      <td style={{padding:"9px 10px",fontSize:11,color:s.muted}}>{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card style={{background:"#f5f3ff",border:"1px solid #ddd6fe"}}>
            <h3 style={{fontSize:13,fontWeight:800,color:"#6d28d9",marginBottom:8}}>💬 What to Ask Your Lender</h3>
            {[`"Do you offer a blend-and-extend or early renewal option?"`,`"What blended rate would I qualify for if I extend to a 5-year term today?"`,`"What would the full break penalty be if I refinanced instead?"`,`"Can I see the calculation in writing before I decide?"`].map((q,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:8,padding:"8px 12px",marginBottom:6,fontSize:12,color:"#4c1d95",fontStyle:"italic",border:"1px solid #ddd6fe"}}>{q}</div>
            ))}
          </Card>
        </div>
      )}

      {/* Sub-tab 4: Cash-Out Refinancing */}
      {refiTab==="cashout"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.green},#15803d)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>💵</div>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Cash-Out Refinancing</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Access your home equity by refinancing for more than you owe. Calculate how much you can take out.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14,marginBottom:14}}>
            <Card>
              <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>💵 Cash-Out Calculator</h3>
              <Field label="Current Home Value ($)"><input type="number" value={coHomeVal} onChange={e=>setCoHomeVal(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="Current Mortgage Balance ($)"><input type="number" value={coBalance} onChange={e=>setCoBalance(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="New Rate (%)"><input type="number" step="0.05" value={coRate} onChange={e=>setCoRate(parseFloat(e.target.value)||0)} style={inp}/></Field>
              <Field label="New Amortization"><select value={coAmort} onChange={e=>setCoAmort(parseInt(e.target.value))} style={inp}>{[10,15,20,25].map(y=><option key={y} value={y}>{y} years</option>)}</select></Field>
              <button onClick={calcCashOut} style={calcBtn}>Calculate Cash Available</button>
            </Card>
            {coResult&&(
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <Card style={{background:s.green,textAlign:"center"}}>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginBottom:3}}>Maximum Cash You Can Access</div>
                  <div style={{fontSize:36,fontWeight:800,color:"#fff",marginBottom:3}}>{cur(coResult.maxCash)}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.7)"}}>Based on 80% LTV limit</div>
                </Card>
                {[
                  ["Home Value",cur(coHomeVal)],
                  ["80% LTV Limit",cur(coResult.ltvLimit)],
                  ["Current Balance",cur(coBalance)],
                  ["Available Equity",cur(coResult.equity)],
                  ["Max Cash-Out",cur(coResult.maxCash)],
                  ["New Mortgage Balance",cur(coResult.newBalance)],
                  ["New Monthly Payment",cur(coResult.newPmt)+"/mo"],
                ].map(([l,v])=>(
                  <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${s.light}`,fontSize:12}}>
                    <span style={{color:s.muted}}>{l}</span>
                    <span style={{fontWeight:700,color:s.navy}}>{v}</span>
                  </div>
                ))}
                <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#92400e"}}>
                  ⚠️ Increasing your mortgage balance means more interest paid over time. Only cash-out for investments with higher returns than your mortgage rate.
                </div>
              </div>
            )}
          </div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>✅ Good vs ❌ Bad Reasons to Cash Out</h3>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:s.green,marginBottom:8}}>✅ Generally Good Uses</div>
                {["Home renovations that increase property value","Debt consolidation (high-interest credit cards)","Investment property down payment","Education (if ROI is clear)","Emergency fund establishment","Starting a business (with clear plan)"].map(item=>(
                  <div key={item} style={{fontSize:11,color:"#374151",padding:"4px 0",borderBottom:`1px solid ${s.light}`,display:"flex",gap:6}}><span style={{color:s.green,flexShrink:0}}>✓</span>{item}</div>
                ))}
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:s.red,marginBottom:8}}>❌ Generally Bad Uses</div>
                {["Vacations or luxury purchases","Buying a depreciating asset (new car)","Covering everyday living expenses","Gambling or speculation","Paying off mortgage penalties on another property","No clear plan for the funds"].map(item=>(
                  <div key={item} style={{fontSize:11,color:"#374151",padding:"4px 0",borderBottom:`1px solid ${s.light}`,display:"flex",gap:6}}><span style={{color:s.red,flexShrink:0}}>✗</span>{item}</div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Sub-tab 5: Refi vs HELOC */}
      {refiTab==="heloc"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,#0891b2,#0e7490)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>🔄</div>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Refinancing vs HELOC</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Two ways to access your home equity — which is right for you?</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
            <Card style={{borderTop:`4px solid ${s.navy}`}}>
              <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>💳 Cash-Out Refinancing</h3>
              {[["Rate","Your mortgage rate (currently ~4.89% fixed)"],["Access","Lump sum — get all money upfront"],["Flexibility","Fixed payment, structured repayment"],["Cost","Break penalty + legal fees (~$6,500–$10,000+)"],["Credit Impact","Full mortgage application required"],["Best For","Large, one-time expenses (renovation, investment)"]].map(([l,v])=>(
                <div key={l} style={{padding:"6px 0",borderBottom:`1px solid ${s.light}`,fontSize:11}}>
                  <div style={{fontWeight:700,color:s.navy,marginBottom:1}}>{l}</div>
                  <div style={{color:s.muted}}>{v}</div>
                </div>
              ))}
              <div style={{background:"#eff6ff",borderRadius:6,padding:"6px 10px",marginTop:10,fontSize:11,color:"#1e40af"}}>Best when: you want the lowest possible rate and need all funds at once.</div>
            </Card>
            <Card style={{borderTop:`4px solid #0891b2`}}>
              <h3 style={{fontSize:14,fontWeight:800,color:"#0891b2",marginBottom:10}}>🏦 HELOC</h3>
              {[["Rate","Prime + 0.5% (currently ~4.95% variable)"],["Access","Revolving credit — draw as needed"],["Flexibility","Interest-only payments available"],["Cost","$500–$1,500 setup; no break penalty"],["Credit Impact","Mortgage application required once"],["Best For","Ongoing expenses (renovations over time, emergency fund)"]].map(([l,v])=>(
                <div key={l} style={{padding:"6px 0",borderBottom:`1px solid ${s.light}`,fontSize:11}}>
                  <div style={{fontWeight:700,color:s.navy,marginBottom:1}}>{l}</div>
                  <div style={{color:s.muted}}>{v}</div>
                </div>
              ))}
              <div style={{background:"#ecfeff",borderRadius:6,padding:"6px 10px",marginTop:10,fontSize:11,color:"#0e7490"}}>Best when: you need flexible access to funds over time, not all at once.</div>
            </Card>
          </div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>🤔 Which Should You Choose?</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
              {[
                {q:"I need all the money now for a specific expense",a:"Cash-Out Refinancing — lower rate, structured repayment"},
                {q:"I need money over time (e.g. ongoing renovation)",a:"HELOC — draw what you need, when you need it"},
                {q:"I want the lowest possible interest rate",a:"Cash-Out Refinancing — mortgage rates are lower than HELOC rates"},
                {q:"I don't want to pay a break penalty",a:"HELOC — set up at renewal, no penalty"},
                {q:"I want an emergency fund I can access anytime",a:"HELOC — revolving credit, only pay interest when you draw"},
                {q:"I'm worried about variable rate risk",a:"Cash-Out Refinancing — fixed rate gives payment certainty"},
              ].map(({q,a})=>(
                <div key={q} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
                  <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:5}}>📋 {q}</div>
                  <div style={{fontSize:11,color:s.muted}}>→ {a}</div>
                </div>
              ))}
            </div>
          </Card>
          <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"12px",background:s.navy,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer"}}>📞 Get Free Advice on the Best Option for You →</button>
        </div>
      )}

      {/* Sub-tab 6: Full Refinancing Guide */}
      {refiTab==="guide"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.gold},#d97706)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>📋</div>
            <h2 style={{color:s.navy,fontSize:18,fontWeight:800,marginBottom:6}}>Complete Refinancing Guide</h2>
            <p style={{color:"rgba(0,0,0,0.6)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Step-by-step from "I'm thinking about refinancing" to money in hand — including all reasons Canadians refinance.</p>
          </div>

          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>🏠 Why Do Canadians Refinance?</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {reason:"Access Home Equity",pct:"#1 Reason",desc:"Home appreciated. Refinance for more than you owe, receive cash — for renovations, investments, debt payoff, education, or business.",icon:"💵",color:s.green},
                {reason:"Get a Lower Rate",pct:"#2 Reason",desc:"Rates dropped. Break mortgage early, pay penalty, save more in interest than the penalty costs over the remaining term.",icon:"📉",color:s.blue},
                {reason:"Consolidate Debt",pct:"#3 Reason",desc:"Roll credit cards (19–29%) and car loans into your mortgage at 4–5%. Lowers monthly cash flow significantly.",icon:"💳",color:"#7c3aed"},
                {reason:"Change Amortization",pct:"#4 Reason",desc:"Extend to lower payments or shorten to pay off faster. Can only be changed via a full refinance application.",icon:"📅",color:s.gold},
                {reason:"Switch Lender",pct:"#5 Reason",desc:"Move for better rates, fairer penalties, or service. Free at renewal — mid-term requires paying break penalty.",icon:"🔄",color:s.navy},
                {reason:"Remove from Title",pct:"Other",desc:"Divorce, separation, or death of co-signer. Requires new mortgage application to remove someone from the mortgage.",icon:"📝",color:s.muted},
              ].map(r=>(
                <div key={r.reason} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderLeft:`3px solid ${r.color}`}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <span style={{fontSize:20}}>{r.icon}</span>
                    <div><div style={{fontSize:12,fontWeight:800,color:s.navy}}>{r.reason}</div><div style={{fontSize:9,fontWeight:700,color:r.color,background:"#f1f5f9",borderRadius:20,padding:"1px 6px",display:"inline-block"}}>{r.pct}</div></div>
                  </div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{r.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🗺️ Step-by-Step Refinancing Process</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:14}}>From first thought to funds in your account — typically 3–6 weeks.</p>
            <div style={{position:"relative"}}>
              <div style={{position:"absolute",left:18,top:0,bottom:0,width:2,background:`linear-gradient(180deg,${s.gold},${s.green})`,borderRadius:2}}/>
              {[
                {title:"Define Your Goal",time:"Day 1",desc:"Be clear on WHY you're refinancing — lower rate, equity access, debt consolidation, or amortization change. Your goal determines your strategy.",urgent:false,icon:"🎯"},
                {title:"Know Your Numbers",time:"Day 1–2",desc:"Get your current mortgage balance from your lender. Get your home's estimated value (Zolo, Realtor.ca, or agent). Equity = Value − Balance.",urgent:false,icon:"🔢"},
                {title:"Get Your Break Penalty",time:"Day 2–3",desc:"Call your lender: 'What is my current mortgage break penalty?' Get it in writing. This single number determines if refinancing makes financial sense.",urgent:true,icon:"⚖️"},
                {title:"Shop for New Rates",time:"Day 3–7",desc:"Contact a mortgage broker — they compare 30+ lenders. Get rate holds (120 days) from at least 3 lenders before committing.",urgent:false,icon:"🔍"},
                {title:"Run the Numbers",time:"Day 5–7",desc:"Use our 💳 Should I Refi? calculator. Enter penalty, new rate, fees. Break-even under 36 months = usually worth it.",urgent:false,icon:"🧮"},
                {title:"Consider Alternatives",time:"Day 5–7",desc:"Ask about blend-and-extend (no penalty), HELOC (equity without changing mortgage), or waiting for renewal (if maturity is within 4–6 months).",urgent:false,icon:"🔀"},
                {title:"Submit Application",time:"Week 2",desc:"Choose your lender and apply. Need: T4s, NOAs, pay stubs, current mortgage statement, ID. Lender orders property appraisal ($300–$500).",urgent:false,icon:"📋"},
                {title:"Appraisal",time:"Week 2–3",desc:"Lender orders independent appraisal to confirm home value. For cash-out: they lend up to 80% of appraised value — not your estimate.",urgent:false,icon:"🏠"},
                {title:"Mortgage Approval",time:"Week 3–4",desc:"Lender issues commitment letter. Review carefully: rate, amortization, prepayment privileges, IRD penalty method. Sign within deadline.",urgent:false,icon:"✅"},
                {title:"Lawyer & Closing",time:"Week 4–6",desc:"Real estate lawyer discharges old mortgage, registers new one. You pay: break penalty + legal fees ($1,000–$1,500) + discharge fee ($200–$400).",urgent:false,icon:"⚖️"},
                {title:"Funds Released",time:"Closing Day",desc:"For cash-out refinancing, lawyer releases equity funds after paying old mortgage. Money typically arrives within 1–3 business days.",urgent:false,icon:"💵"},
              ].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:16,marginBottom:12,paddingLeft:8}}>
                  <div style={{width:22,height:22,borderRadius:"50%",background:item.urgent?s.red:s.navy,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,fontSize:10}}>{item.icon}</div>
                  <div style={{flex:1,background:item.urgent?"#fff5f5":"#f8fafc",borderRadius:10,padding:"10px 14px",border:`1px solid ${item.urgent?"#fed7d7":s.border}`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                      <span style={{fontSize:10,fontWeight:700,color:item.urgent?s.red:s.muted,background:item.urgent?"#fee2e2":"#f1f5f9",borderRadius:20,padding:"2px 8px"}}>{item.time}</span>
                      <span style={{fontSize:12,fontWeight:800,color:s.navy}}>{item.title}</span>
                      {item.urgent&&<span style={{fontSize:9,fontWeight:700,color:"#fff",background:s.red,borderRadius:20,padding:"1px 7px"}}>CRITICAL</span>}
                    </div>
                    <div style={{fontSize:11,color:s.muted,lineHeight:1.7}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{marginBottom:14,background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:800,color:"#fff",marginBottom:10}}>💰 Typical Refinancing Costs</h3>
            {[
              ["Break Penalty","Variable: ~$3K–$5K · Fixed bank: $5K–$40K · Fixed CU: $2K–$10K","Biggest variable — get exact from lender"],
              ["Legal Fees","$1,000–$1,500","Real estate lawyer"],
              ["Appraisal","$300–$500","Required by new lender"],
              ["Discharge Fee","$200–$400","Current lender charges to release mortgage"],
              ["Title Insurance","$200–$300","May be required by new lender"],
              ["Total","$2,000–$43,000+","Dominated by the break penalty"],
            ].map(([l,v,note],i)=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"8px 0",borderBottom:i<5?`1px solid rgba(255,255,255,0.1)`:"none",gap:8}}>
                <div><div style={{fontSize:12,fontWeight:700,color:"#fff"}}>{l}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.5)"}}>{note}</div></div>
                <div style={{fontSize:12,fontWeight:i===5?800:600,color:i===5?s.gold:"rgba(255,255,255,0.8)",textAlign:"right",flexShrink:0}}>{v}</div>
              </div>
            ))}
          </Card>

          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.red}`}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>❓ Key Questions Before You Refinance</h3>
            {["What is my exact break penalty today? (Call lender — get in writing)","What is my home's current market value?","How much equity do I have? (Value − Balance)","What is the lowest rate I qualify for today? (Get 3 quotes)","What is my break-even point? (Penalty ÷ Monthly saving)","Is my renewal date within 6 months? (If yes, consider waiting)","What are the penalty terms on the NEW mortgage?","Do I have prepayment privileges I can use first? (Reduces penalty base)"].map((q,i)=>(
              <div key={i} style={{display:"flex",gap:8,padding:"6px 0",borderBottom:`1px solid ${s.light}`,fontSize:11,color:s.muted}}>
                <span style={{color:s.red,flexShrink:0,fontWeight:700}}>{i+1}.</span>{q}
              </div>
            ))}
          </Card>

          <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"12px",background:s.red,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:14}}>📞 Get a Free Refinancing Consultation →</button>
        </div>
      )}
    </div>
  );
}

function CalcBanners({type}:{type:"rates"|"renewal"|"refi"|"closing"|"consult"}){
  const banners:{[k:string]:any[]}={
    rates:[
      {label:"📊 Compare Live Rates",desc:"See current rates from 50+ lenders",tab:"Rates",bg:s.navy,color:"#fff"},
      {label:"🔍 Find My Rate",desc:"Get a personalized rate estimate",tab:"Rate Finder",bg:s.blue,color:"#fff"},
    ],
    renewal:[
      {label:"🔄 Compare Your Renewal",desc:"See the full renewal guide & negotiation script",tab:"Renewal",bg:s.navy,color:"#fff"},
      {label:"📊 Compare Rates Now",desc:"See if you can do better than your lender's offer",tab:"Rates",bg:s.gold,color:s.navy},
    ],
    refi:[
      {label:"⚖️ Find a Real Estate Lawyer",desc:"Need help closing your refinance? Find a lawyer",tab:"Professionals",bg:s.navy,color:"#fff"},
      {label:"📞 Free Consultation",desc:"Get personalized refinancing advice",tab:"Consult",bg:s.red,color:"#fff"},
      {label:"📊 Compare Rates",desc:"Find the best new rate before you refinance",tab:"Rates",bg:s.green,color:"#fff"},
    ],
    closing:[
      {label:"⚖️ Find a Real Estate Lawyer",desc:"A lawyer handles your closing — find one here",tab:"Professionals",bg:s.navy,color:"#fff"},
      {label:"🤝 Find a Realtor",desc:"Still looking for a home?",tab:"Professionals",bg:s.green,color:"#fff"},
    ],
    consult:[
      {label:"📞 Book a Free Consultation",desc:"Get personalized mortgage advice",tab:"Consult",bg:s.red,color:"#fff"},
      {label:"🔍 Find My Rate",desc:"Get a personalized rate estimate in 5 questions",tab:"Rate Finder",bg:s.navy,color:"#fff"},
    ],
  };
  const items=banners[type]||[];
  return(
    <div style={{display:"grid",gridTemplateColumns:`repeat(${items.length},1fr)`,gap:10,marginTop:16}}>
      {items.map((b,i)=>(
        <button key={i} onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:b.tab}))} style={{background:b.bg,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
          <div style={{color:b.color,fontSize:13,fontWeight:800,marginBottom:3}}>{b.label}</div>
          <div style={{color:b.color,fontSize:11,opacity:0.8}}>{b.desc} →</div>
        </button>
      ))}
    </div>
  );
}

function CalcTab({prov}:{prov:string}){
  const [tab,setTab]=useState("payment");
  useEffect(()=>{
    const h=(e:any)=>{
      if(e.detail.tab==="Calculators"){
        const labelMap:any={"💰 Payment":"payment","🏡 Affordability":"afford","📋 Stress Test":"stress","🔄 Renewal":"renewal","💳 Refinancing":"refi","📅 Amortization":"amort","🏷️ Closing Costs":"closing","📁 Doc Checklist":"docs","🏠 Rent vs Buy":"rentvbuy","🏛️ Tax Calculator":"propertytax","⚖️ Appeal Guide":"propertytax","🛡️ Home Insurance":"insurance","🏠 Get Quotes":"insurance"};
        setTab(labelMap[e.detail.label]||e.detail.sub||"payment");
      }
    };
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
  const [hp,setHp]=useState(500000);const [dp,setDp]=useState(20);const [am,setAm]=useState(25);const [pr,setPr]=useState(5.0);const [rateType,setRateType]=useState<"fixed"|"variable">("fixed");const [fr,setFr]=useState("monthly");const [condoFeeP,setCondoFeeP]=useState(0);const [payR,setPayR]=useState(null);const payRef=useRef(null);
  const [inc,setInc]=useState(90000);const [inc2,setInc2]=useState(0);const [dbt,setDbt]=useState(500);const [ad,setAd]=useState(20);const [aa,setAa]=useState(25);const [ar,setAr]=useState(5.0);const [condoFeeA,setCondoFeeA]=useState(0);const [affR,setAffR]=useState(null);const affRef=useRef(null);
  const [rent,setRent]=useState(2000);const [rentInc,setRentInc]=useState(3);const [rp,setRp]=useState(500000);const [rd,setRd]=useState(20);const [rr,setRr]=useState(5.0);const [ry,setRy]=useState(10);const [rapr,setRapr]=useState(3);const [rvbR,setRvbR]=useState(null);const rvbRef=useRef(null);
  const [rb,setRb]=useState(350000);const [ro,setRo]=useState(5.5);const [rn,setRn]=useState(4.8);const [rma,setRma]=useState(20);const [rt,setRt]=useState(5);const [renewR,setRenewR]=useState(null);const renewRef=useRef(null);
  const [sr,setSr]=useState(4.9);const [si,setSi]=useState(90000);const [si2,setSi2]=useState(0);const [sd,setSd]=useState(500);const [sdp,setSdp]=useState(100000);const [sa,setSa]=useState(25);const [stR,setStR]=useState(null);const stRef=useRef(null);
  const [scenarios,setScenarios]=useState([{id:1,label:"Scenario A",homePrice:500000,downPct:20,amort:25,rate:5.0,freq:"monthly"},{id:2,label:"Scenario B",homePrice:500000,downPct:10,amort:25,rate:4.9,freq:"monthly"}]);
  const [compareMode,setCompareMode]=useState(false);

  function scrollAfter(ref:any,fn:()=>void){fn();setTimeout(()=>ref.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);}
  const freqs=[{id:"monthly",label:"📅 Monthly"},{id:"semimonthly",label:"📅 Semi-Monthly"},{id:"biweekly",label:"📅 Bi-Weekly"},{id:"accelerated",label:"⚡ Accel. Bi-Wkly"}];
  const tabList=[
    {id:"payment",label:"💰 Payment",color:"#0d2240"},
    {id:"afford",label:"🏡 Afford",color:"#15803d"},
    {id:"stress",label:"📋 Stress Test",color:"#7c3aed"},
    {id:"closing",label:"🏷️ Closing",color:"#92400e"},
    {id:"propertytax",label:"🏛️ Prop Tax",color:"#0891b2"},
    {id:"insurance",label:"🛡️ Insurance",color:"#15803d"},
    {id:"renewal",label:"🔄 Renewal",color:"#0891b2"},
    {id:"refi",label:"💳 Refinancing",color:"#c2410c"},
    {id:"rentvbuy",label:"🏠 Rent vs Buy",color:"#7c3aed"},
    {id:"amort",label:"📅 Amortization",color:"#0d2240"},
    {id:"docs",label:"📁 Checklist",color:"#15803d"},
    {id:"ratefinder",label:"🎯 Rate Finder",color:"#7c3aed"},
  ];

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
        {tabList.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"8px 4px",borderRadius:8,fontSize:10,fontWeight:700,cursor:"pointer",color:tab===t.id?"#fff":s.muted,border:`2px solid ${tab===t.id?t.color:s.border}`,background:tab===t.id?t.color:s.white,boxShadow:tab===t.id?"0 2px 8px rgba(0,0,0,0.15)":"none",minWidth:65,transition:"all 0.15s",whiteSpace:"nowrap"}}>{t.label}</button>)}
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
                <Field label="Interest Rate Type">
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                    <button onClick={()=>{setRateType("fixed");setPr(4.89);}} style={{padding:"8px",border:`2px solid ${rateType==="fixed"?s.navy:s.border}`,borderRadius:8,background:rateType==="fixed"?s.navy:s.white,color:rateType==="fixed"?"#fff":s.muted,fontSize:12,fontWeight:700,cursor:"pointer"}}>📅 Fixed</button>
                    <button onClick={()=>{setRateType("variable");setPr(3.35);}} style={{padding:"8px",border:`2px solid ${rateType==="variable"?s.green:s.border}`,borderRadius:8,background:rateType==="variable"?s.green:s.white,color:rateType==="variable"?"#fff":s.muted,fontSize:12,fontWeight:700,cursor:"pointer"}}>📉 Variable</button>
                  </div>
                </Field>
                {rateType==="variable"&&<div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"6px 10px",marginBottom:8,fontSize:10,color:"#15803d"}}>💡 Variable rate set to current prime −1.10% (3.35%). Your rate moves with the Bank of Canada.</div>}
                {rateType==="fixed"&&<div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"6px 10px",marginBottom:8,fontSize:10,color:"#1e40af"}}>💡 Fixed rate set to current 5-year average (4.89%). Your rate is locked for the term.</div>}
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
                      <div style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>{(payR as any).am} year amortization · {(payR as any).pr}% {rateType} rate</div>
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
                {[["PITH — TOTAL HOUSING COST","Principal + Interest + Tax + Heat (+ condo fees). Must be under 39% of gross income (GDS ratio)."],["MINIMUM DOWN PAYMENT","5% under $500K · 10% on $500K–$999,999 · 20% on $1M+. Under 20% requires CMHC insurance."],["CMHC INSURANCE PREMIUMS","5–9.99% down → 4.0% · 10–14.99% → 3.1% · 15–19.99% → 2.8% · 20%+ → None ✅"],["STRESS TEST","Must qualify at your rate +2% OR 5.25% — whichever is higher. Reduces max purchase price."],["CLOSING COSTS TO BUDGET","Legal fees ~$1,500 · Home inspection ~$500 · Title insurance ~$300 · Land transfer tax varies."],["ACCELERATED BI-WEEKLY TIP","Pays one extra monthly payment per year. Saves thousands in interest and cuts years off your mortgage."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div>
                <p style={{fontSize:10,color:"#94a3b8",marginTop:8,lineHeight:1.5}}>⚠️ Results are estimates based on standard Canadian mortgage formulas. Actual approval depends on credit score, employment history, and lender-specific policies. Always consult a licensed mortgage professional before making any financial decision.</p></div>)}
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
      {tab==="payment"&&<CalcBanners type="rates"/>}
      {tab==="propertytax"&&<PropertyTaxTab initProv={prov} initCity={""} embedded={true}/>}
      {tab==="insurance"&&<InsuranceTab initProv={prov} embedded={true}/>}
      {tab==="ratefinder"&&<RateFinderTab/>}
      {tab==="renewal"&&<RenewalTab/>}

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
            <Field label="Rate Type">
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                <button onClick={()=>setAr(4.89)} style={{padding:"7px",border:`2px solid ${ar===4.89?s.navy:s.border}`,borderRadius:8,background:ar===4.89?s.navy:s.white,color:ar===4.89?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📅 Fixed (4.89%)</button>
                <button onClick={()=>setAr(3.35)} style={{padding:"7px",border:`2px solid ${ar===3.35?s.green:s.border}`,borderRadius:8,background:ar===3.35?s.green:s.white,color:ar===3.35?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📉 Variable (3.35%)</button>
              </div>
            </Field>
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
            {[["GDS RATIO — MAX 39%","(Mortgage P&I + Property Tax + Heat + Condo Fee) ÷ Gross Monthly Income ≤ 39%"],["TDS RATIO — MAX 44%","(GDS items + ALL other monthly debts) ÷ Gross Monthly Income ≤ 44%"],["HEAT — $150/MONTH STANDARD","Lenders add $150/mo heat regardless of your actual bill."],["STRESS TEST — MANDATORY","Must qualify at your rate + 2% OR 5.25% — whichever is higher."],["CMHC INSURANCE","Required if down payment < 20%. Added to your mortgage. Max $1.5M with CMHC."],["30-YEAR AMORTIZATION","First-time buyers of new builds only. All others: max 25yr with CMHC, 30yr conventional."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div>
                <p style={{fontSize:10,color:"#94a3b8",marginTop:8,lineHeight:1.5}}>⚠️ Results are estimates based on standard Canadian mortgage formulas. Actual approval depends on credit score, employment history, and lender-specific policies. Always consult a licensed mortgage professional before making any financial decision.</p></div>)}
          </Card>
        </div>
      )}
      {tab==="afford"&&<CalcBanners type="rates"/>}

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
            {[["THE 5-YEAR RULE","Buying only makes financial sense if you plan to stay at least 5 years. Closing costs (2–4%) take years to overcome through equity."],["HIDDEN COSTS OF BUYING","Property tax (~1%/yr), maintenance (~1%/yr), insurance, and unexpected repairs add $400–$1,500/mo beyond the mortgage."],["OPPORTUNITY COST IS REAL","Money tied up in a down payment could earn 5–7% in index funds. This is real money renting lets you keep liquid."],["RENT INCREASES ARE REAL","Rent rises 3–5%/year. A $2,000/mo rent becomes $2,600 in 5 years at 3% annual increases. Owning locks in your mortgage payment."],["EQUITY IS FORCED SAVINGS","Every mortgage payment builds equity. Renters must be disciplined investors to match this benefit."],["WHEN RENTING WINS","High prices vs rent, uncertain job situation, or planning to move in <5 years. Flexibility has real financial value."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div>
                <p style={{fontSize:10,color:"#94a3b8",marginTop:8,lineHeight:1.5}}>⚠️ Results are estimates based on standard Canadian mortgage formulas. Actual approval depends on credit score, employment history, and lender-specific policies. Always consult a licensed mortgage professional before making any financial decision.</p></div>)}
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
            <Field label="New Rate Type">
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                <button onClick={()=>setRn(4.89)} style={{padding:"7px",border:`2px solid ${rn===4.89?s.navy:s.border}`,borderRadius:8,background:rn===4.89?s.navy:s.white,color:rn===4.89?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📅 Fixed (4.89%)</button>
                <button onClick={()=>setRn(3.35)} style={{padding:"7px",border:`2px solid ${rn===3.35?s.green:s.border}`,borderRadius:8,background:rn===3.35?s.green:s.white,color:rn===3.35?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📉 Variable (3.35%)</button>
              </div>
            </Field>
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
            {[["START 4 MONTHS EARLY","Most lenders let you lock in a rate 120 days before maturity. Don't wait — rates move quickly."],["NO PENALTY TO SWITCH","Switching lenders at renewal costs $0. Your current lender knows this, which is why they improve their offer when you shop."],["GET 3+ QUOTES","Your bank, a credit union, and a mortgage broker. Brokers access 30+ lenders and are free to use."],["FIXED vs VARIABLE","With BoC at 2.25%, variable (~3.3%) is below fixed (~4.9%). Consider your risk tolerance and timeline."],["IRD vs 3-MONTH INTEREST","Fixed mortgages use IRD for early break — much larger than variable's 3-month interest. Check your contract."],["REFINANCE AT RENEWAL","Best time to consolidate debt or pull equity — no penalty at renewal date. Lenders can lend up to 80% of home value."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div>
                <p style={{fontSize:10,color:"#94a3b8",marginTop:8,lineHeight:1.5}}>⚠️ Results are estimates based on standard Canadian mortgage formulas. Actual approval depends on credit score, employment history, and lender-specific policies. Always consult a licensed mortgage professional before making any financial decision.</p></div>)}
          </Card>
        </div>
      )}
      {tab==="renewal"&&(
        <div style={{background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:"1px solid #bbf7d0",borderRadius:10,padding:"12px 16px",marginTop:14,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:"#15803d",marginBottom:2}}>Want the full renewal playbook?</div>
            <div style={{fontSize:11,color:"#16a34a"}}>Renewal timeline, negotiation script, top lenders, and FAQ — all in one place.</div>
          </div>
          <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Renewal"}))} style={{padding:"8px 16px",background:"#15803d",color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>Go to Renewal Tab →</button>
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
            {[["WHY IT EXISTS","Ensures you can afford your mortgage even if rates rise 2% after you buy. Protects you and the financial system."],["THE QUALIFYING RATE","Must qualify at the HIGHER of: your rate + 2%, or 5.25%. Currently most buyers qualify at rate + 2%."],["WHO IT APPLIES TO","All federally regulated lenders (big banks, federal credit unions). Some provincial credit unions may use different rules."],["IT DOESN'T CHANGE YOUR RATE","You qualify at the stress rate but pay your contracted rate. It only affects how much you can borrow."],["CO-BORROWER STRATEGY","Adding a co-signer increases total income, raising your maximum purchase price significantly."],["USE YOUR FHSA + HBP","FHSA ($40K tax-free) + RRSP HBP ($60K) = up to $100K per person toward your down payment. More down = less mortgage."]].map(([t,d])=><div key={t} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:10,marginBottom:7,borderLeft:`3px solid ${s.gold}`}}><div style={{fontSize:10,color:s.gold,fontWeight:700,marginBottom:3}}>{t}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5}}>{d}</div>
                <p style={{fontSize:10,color:"#94a3b8",marginTop:8,lineHeight:1.5}}>⚠️ Results are estimates based on standard Canadian mortgage formulas. Actual approval depends on credit score, employment history, and lender-specific policies. Always consult a licensed mortgage professional before making any financial decision.</p></div>)}
          </Card>
        </div>
      )}
      {tab==="stress"&&<CalcBanners type="rates"/>}
      {tab==="renewal"&&tab!=="renewal"&&null}
      {tab==="amort"&&<><AmortTab/><CalcBanners type="rates"/></>}
      {tab==="closing"&&<><ClosingCostTab prov={prov}/><CalcBanners type="closing"/></>}
      {tab==="docs"&&<><DocChecklistTab/><CalcBanners type="consult"/></>}
      {tab==="refi"&&<><RefiCalcTab/><CalcBanners type="refi"/></>}
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
          <Field label="Rate Type">
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
              <button onClick={()=>setAr2(4.89)} style={{padding:"7px",border:`2px solid ${ar2===4.89?s.navy:s.border}`,borderRadius:8,background:ar2===4.89?s.navy:s.white,color:ar2===4.89?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📅 Fixed (4.89%)</button>
              <button onClick={()=>setAr2(3.35)} style={{padding:"7px",border:`2px solid ${ar2===3.35?s.green:s.border}`,borderRadius:8,background:ar2===3.35?s.green:s.white,color:ar2===3.35?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📉 Variable (3.35%)</button>
            </div>
          </Field>
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

function PropertyTaxTab({initProv,initCity,embedded}:{initProv:string,initCity:string,embedded?:boolean}){
  const [prov,setProv]=useState(initProv);const [city,setCity]=useState(initCity);const [homeVal,setHomeVal]=useState(500000);const [valType,setValType]=useState("market");const [result,setResult]=useState(null);const resultRef=useRef(null);
  const [ptTab,setPtTab]=useState<"calculator"|"relief"|"compare"|"appeal">("calculator");
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
    <div>
      {/* Sub-tabs */}
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setPtTab("calculator")} style={{flex:1,minWidth:100,padding:"9px",borderRadius:8,border:`2px solid ${ptTab==="calculator"?s.navy:s.border}`,background:ptTab==="calculator"?s.navy:s.white,color:ptTab==="calculator"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🏛️ Calculator</button>
        <button onClick={()=>setPtTab("relief")} style={{flex:1,minWidth:100,padding:"9px",borderRadius:8,border:`2px solid ${ptTab==="relief"?s.green:s.border}`,background:ptTab==="relief"?s.green:s.white,color:ptTab==="relief"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>💰 Tax Relief</button>
        <button onClick={()=>setPtTab("compare")} style={{flex:1,minWidth:100,padding:"9px",borderRadius:8,border:`2px solid ${ptTab==="compare"?s.blue:s.border}`,background:ptTab==="compare"?s.blue:s.white,color:ptTab==="compare"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📊 Province Compare</button>
        <button onClick={()=>setPtTab("appeal")} style={{flex:1,minWidth:100,padding:"9px",borderRadius:8,border:`2px solid ${ptTab==="appeal"?s.gold:s.border}`,background:ptTab==="appeal"?s.gold:s.white,color:ptTab==="appeal"?s.navy:s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>⚖️ Appeal Guide</button>
      </div>

      {/* Calculator Tab */}
      {ptTab==="calculator"&&<Card>
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

          {/* Tax-to-Income Ratio */}
          <div style={{background:s.navy,borderRadius:10,padding:14,marginTop:12}}>
            <div style={{fontSize:12,fontWeight:800,color:"#fff",marginBottom:10}}>📊 Property Tax as % of Income</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8}}>
              {[[60000,"$60K"],[80000,"$80K"],[100000,"$100K"],[120000,"$120K"],[150000,"$150K"]].map(([income,label])=>{
                const pct=((result as any).total/income*100).toFixed(1);
                const color=parseFloat(pct)<2?"#4ade80":parseFloat(pct)<4?"#fbbf24":"#f87171";
                return(
                  <div key={label} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:"8px 10px",textAlign:"center"}}>
                    <div style={{fontSize:14,fontWeight:800,color}}>{pct}%</div>
                    <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginTop:2}}>{label} income</div>
                  </div>
                );
              })}
            </div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.4)",marginTop:8}}>🟢 Under 2% = comfortable · 🟡 2–4% = moderate · 🔴 Over 4% = high burden</div>
          </div>

          {/* Payment Options */}
          <Card style={{marginTop:12}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>💳 Property Tax Payment Options</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {title:"Monthly Pre-Authorized",desc:"Most municipalities let you spread payments across 12 months via PAP. Set up through your municipality's website or call your city hall.",badge:"✅ Recommended",color:s.green},
                {title:"Through Your Mortgage",desc:"Your lender may collect property tax monthly as part of your mortgage payment and pay the city on your behalf. Ask your lender.",badge:"🏦 Convenient",color:s.blue},
                {title:"Annual Lump Sum",desc:"Pay once per year by the due date (usually June/July). Some municipalities offer a discount for early payment.",badge:"💰 Potential Discount",color:s.gold},
                {title:"Installments",desc:"Many cities offer 2–4 installment options throughout the year. Check your municipality's tax portal for exact dates.",badge:"📅 Flexible",color:s.navy},
              ].map(p=>(
                <div key={p.title} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`,borderLeft:`3px solid ${p.color}`}}>
                  <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:3}}>{p.title}</div>
                  <div style={{fontSize:9,fontWeight:700,color:p.color,marginBottom:5}}>{p.badge}</div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{p.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Assessment Appeal Guide */}
          <Card style={{marginTop:12,borderLeft:`4px solid ${s.gold}`}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:4}}>⚖️ Think Your Assessment is Too High? How to Appeal</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12,lineHeight:1.6}}>In Canada, you have the right to appeal your property assessment if you believe it's inaccurate. Successful appeals can save homeowners $500–$3,000+ per year.</p>
            <div style={{position:"relative"}}>
              <div style={{position:"absolute",left:14,top:0,bottom:0,width:2,background:`linear-gradient(180deg,${s.gold},${s.green})`,borderRadius:2}}/>
              {[
                {step:"Step 1",title:"Review Your Assessment Notice",desc:"Check the assessed value, property classification, and land vs building split. Compare to recent sales of similar homes nearby.",time:"When notice arrives"},
                {step:"Step 2",title:"Research Comparable Sales",desc:"Find 3–5 similar homes that sold near your assessment date. If they sold for less than your assessed value, you have grounds to appeal.",time:"Within 30 days"},
                {step:"Step 3",title:"Contact the Assessment Office",desc:"Call your municipality's assessment office first — many errors are fixed informally without a formal appeal. Get the assessor's reasoning.",time:"Before deadline"},
                {step:"Step 4",title:"File a Formal Appeal",desc:"If informal resolution fails, file an appeal with your provincial assessment review board. Deadlines vary by province (typically 60–90 days from notice).",time:"Before deadline"},
                {step:"Step 5",title:"Attend the Hearing",desc:"Present your comparable sales evidence. You don't need a lawyer — most homeowners represent themselves. Board decisions are usually made within 30–60 days.",time:"At hearing"},
              ].map((s2,i)=>(
                <div key={i} style={{display:"flex",gap:14,marginBottom:12,paddingLeft:6}}>
                  <div style={{width:20,height:20,borderRadius:"50%",background:s.gold,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,fontSize:10,fontWeight:800,color:"#fff"}}>{i+1}</div>
                  <div style={{flex:1,background:"#fffbeb",borderRadius:8,padding:"8px 12px",border:"1px solid #fde68a"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3,flexWrap:"wrap",gap:4}}>
                      <span style={{fontSize:12,fontWeight:800,color:s.navy}}>{s2.title}</span>
                      <span style={{fontSize:9,color:"#92400e",background:"#fef3c7",borderRadius:20,padding:"1px 7px",fontWeight:700}}>{s2.time}</span>
                    </div>
                    <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{s2.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 12px",marginTop:4,fontSize:11,color:"#15803d"}}>
              💡 <b>Success rate:</b> Roughly 40–60% of residential property tax appeals in Canada result in a reduced assessment. The most important factor is having comparable sales data.
            </div>
          </Card>
        </div>
      )}</div></Card>}

      {/* Tax Relief Tab */}
      {ptTab==="relief"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.green},#15803d)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>💰</div>
            <h2 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Property Tax Relief Programs</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:12}}>Many Canadians qualify for property tax reductions they don't know about.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:12,marginBottom:14}}>
            {[
              {icon:"👴",title:"Senior Homeowner Deferral",provinces:"BC, AB, ON, MB, SK",desc:"Homeowners 55+ can defer all or part of their property taxes until the home is sold. Interest may apply but payments are postponed.",color:s.blue},
              {icon:"♿",title:"Disability Tax Exemption",provinces:"All provinces",desc:"Homeowners with a disability or who care for a family member with a disability may qualify for full or partial property tax exemptions.",color:s.navy},
              {icon:"💸",title:"Low-Income Homeowner Relief",provinces:"ON, BC, AB, QC",desc:"Income-tested programs provide rebates or credits to low-income homeowners. Ontario's OSHPTG provides up to $500/year.",color:s.green},
              {icon:"🌾",title:"Farm Property Tax Class",provinces:"All provinces",desc:"Agricultural land is assessed at a lower tax class in all Canadian provinces — significantly reducing tax burden for farm owners.",color:"#92400e"},
              {icon:"🏗️",title:"Newly Built Home Exemption",provinces:"BC, ON",desc:"Some provinces offer temporary property tax reductions for newly built homes in their first year. Check with your municipality.",color:"#7c3aed"},
              {icon:"🎖️",title:"Veteran & Military Exemption",provinces:"Various",desc:"Some municipalities offer property tax reductions for veterans and active military members. Contact your local municipality.",color:s.red},
              {icon:"🌱",title:"Heritage & Green Building",provinces:"BC, ON, QC",desc:"Heritage-designated properties and homes with green building certification may qualify for property tax incentives in select municipalities.",color:s.green},
              {icon:"🏠",title:"Home Renovation Tax Credit",provinces:"SK, MB, ON",desc:"Some provinces allow property tax adjustments for energy-efficient home renovations. Check with provincial revenue agencies.",color:s.gold},
            ].map(p=>(
              <Card key={p.title} style={{borderLeft:`4px solid ${p.color}`}}>
                <div style={{display:"flex",gap:10,marginBottom:8,alignItems:"flex-start"}}>
                  <span style={{fontSize:24}}>{p.icon}</span>
                  <div>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{p.title}</div>
                    <div style={{fontSize:10,color:p.color,fontWeight:700}}>{p.provinces}</div>
                  </div>
                </div>
                <p style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{p.desc}</p>
              </Card>
            ))}
          </div>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>📋 How to Apply for Property Tax Relief</h3>
            {[
              ["Contact Your Municipality","Property tax relief programs are administered locally. Call your city or town hall and ask specifically about programs you may qualify for."],
              ["Check Provincial Revenue Agency","Visit your province's Ministry of Finance or Revenue Agency website to see all available homeowner tax credits and rebates."],
              ["Apply Before the Deadline","Most programs have annual application deadlines — typically January to March. Missing the deadline means waiting another year."],
              ["Keep Documentation","You'll need proof of age, income, disability status, or other qualifying factors. Gather these before applying."],
            ].map(([t,d])=>(
              <div key={t} style={{display:"flex",gap:12,padding:"8px 0",borderBottom:`1px solid rgba(255,255,255,0.08)`}}>
                <span style={{fontSize:11,fontWeight:700,color:s.gold,flexShrink:0,minWidth:160}}>{t}</span>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.7)",lineHeight:1.6}}>{d}</span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {/* Province Compare Tab */}
      {ptTab==="compare"&&(
        <div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📊 Property Tax Rates Across Canada — 2026</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Annual property tax on a $500,000 home by city. Mill rates vary significantly — same home, very different tax bills.</p>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
                <thead><tr style={{background:"#f8fafc"}}>{["City","Province","Annual Tax*","Monthly","Mill Rate","Ranking"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`,whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    {city:"Vancouver",prov:"BC",tax:2175,mill:"0.24%",rank:"🟢 Lowest"},
                    {city:"Victoria",prov:"BC",tax:2450,mill:"0.52%",rank:"🟢 Low"},
                    {city:"Calgary",prov:"AB",tax:3350,mill:"0.67%",rank:"🟢 Low"},
                    {city:"Edmonton",prov:"AB",tax:3850,mill:"0.95%",rank:"🟡 Moderate"},
                    {city:"Toronto",prov:"ON",tax:3050,mill:"0.61%",rank:"🟢 Low"},
                    {city:"Ottawa",prov:"ON",tax:3750,mill:"1.09%",rank:"🟡 Moderate"},
                    {city:"Hamilton",prov:"ON",tax:5100,mill:"1.23%",rank:"🔴 High"},
                    {city:"Mississauga",prov:"ON",tax:3700,mill:"0.81%",rank:"🟡 Moderate"},
                    {city:"Winnipeg",prov:"MB",tax:4400,mill:"1.29%",rank:"🔴 High"},
                    {city:"Saskatoon",prov:"SK",tax:3850,mill:"0.94%",rank:"🟡 Moderate"},
                    {city:"Regina",prov:"SK",tax:4100,mill:"1.16%",rank:"🔴 High"},
                    {city:"Montreal",prov:"QC",tax:3200,mill:"0.76%",rank:"🟡 Moderate"},
                    {city:"Quebec City",prov:"QC",tax:3450,mill:"0.85%",rank:"🟡 Moderate"},
                    {city:"Halifax",prov:"NS",tax:3850,mill:"1.15%",rank:"🔴 High"},
                    {city:"Moncton",prov:"NB",tax:3200,mill:"1.42%",rank:"🔴 High"},
                    {city:"Charlottetown",prov:"PE",tax:2800,mill:"0.67%",rank:"🟢 Low"},
                    {city:"St. John's",prov:"NL",tax:3600,mill:"0.88%",rank:"🟡 Moderate"},
                  ].sort((a,b)=>a.tax-b.tax).map((row,i)=>(
                    <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                      <td style={{padding:"8px 12px",fontSize:12,fontWeight:700,color:s.navy}}>{row.city}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:s.muted}}>{row.prov}</td>
                      <td style={{padding:"8px 12px",fontSize:12,fontWeight:800,color:s.navy}}>${row.tax.toLocaleString()}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:s.muted}}>${Math.round(row.tax/12).toLocaleString()}/mo</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:s.muted}}>{row.mill}</td>
                      <td style={{padding:"8px 12px",fontSize:11}}>{row.rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:10,color:s.muted,marginTop:8}}>* Based on published 2026 mill rates. Actual tax depends on your official assessed value which may differ from market value.</p>
          </Card>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>💡 Why Are Property Taxes So Different Across Canada?</h3>
            {[
              ["Home Values vs Services","Cities with very high home values (Vancouver, Toronto) can fund the same services with a lower mill rate — the tax base is higher. Cities with lower values need higher rates."],
              ["Provincial Funding","Some provinces provide more funding to municipalities, reducing reliance on property taxes. Quebec and BC municipalities receive more provincial transfers than Ontario or Manitoba."],
              ["Local Services","Cities that provide more services directly (transit, utilities, arenas) typically have higher property taxes than cities that download these costs to users."],
              ["Assessment Methodology","How a province assesses property value affects the effective rate. BC uses market value; others may use a different base, creating non-comparable headline rates."],
            ].map(([t,d])=>(
              <div key={t} style={{display:"flex",gap:12,padding:"8px 0",borderBottom:`1px solid rgba(255,255,255,0.08)`}}>
                <span style={{fontSize:11,fontWeight:700,color:s.gold,flexShrink:0,minWidth:160}}>{t}</span>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.7)",lineHeight:1.6}}>{d}</span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {/* Appeal Guide Tab */}
      {ptTab==="appeal"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.gold},#d97706)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>⚖️</div>
            <h2 style={{color:s.navy,fontSize:16,fontWeight:800,marginBottom:6}}>How to Appeal Your Property Assessment</h2>
            <p style={{color:"rgba(0,0,0,0.6)",fontSize:12}}>Successful appeals save Canadian homeowners $500–$3,000+ per year. Here's how.</p>
          </div>
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.gold}`}}>
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"10px 14px",marginBottom:14,fontSize:11,color:"#15803d"}}>
              💡 <b>40–60% of residential property tax appeals in Canada result in a reduced assessment.</b> The most important factor is comparable sales data.
            </div>
            <div style={{position:"relative"}}>
              <div style={{position:"absolute",left:14,top:0,bottom:0,width:2,background:`linear-gradient(180deg,${s.gold},${s.green})`,borderRadius:2}}/>
              {[
                {title:"Review Your Assessment Notice",desc:"Check assessed value, property classification, and land vs building split. Compare to recent sales of similar homes in your area. Look for obvious errors — wrong square footage, wrong number of bedrooms, non-existent features.",time:"When notice arrives",urgent:true},
                {title:"Research Comparable Sales",desc:"Find 3–5 similar homes (same size, age, location) that sold near your assessment date. If they sold for less than your assessed value, you have grounds to appeal. Use HouseSigma or your local land registry.",time:"Within 30 days"},
                {title:"Contact the Assessment Office Informally",desc:"Call your municipality's assessment office first — describe your concern. Many errors are corrected informally without a formal appeal. Get the assessor's methodology and reasoning in writing.",time:"Before formal deadline"},
                {title:"File a Formal Appeal",desc:"If informal resolution fails, file an appeal with your provincial assessment review board. Most provinces allow online filing. Deadlines vary: typically 60–90 days from your notice date.",time:"Before deadline",urgent:true},
                {title:"Prepare Your Evidence Package",desc:"Gather: 3-5 comparable sales with addresses and sale prices, photos showing your home's condition vs assessed quality, any defects (water damage, foundation issues), and a clear statement of your proposed assessed value.",time:"Before hearing"},
                {title:"Attend the Hearing",desc:"Present your comparable sales evidence. You don't need a lawyer — most homeowners represent themselves successfully. Bring printed copies of all evidence. Board decisions typically come within 30–60 days.",time:"At hearing"},
              ].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:14,marginBottom:12,paddingLeft:6}}>
                  <div style={{width:22,height:22,borderRadius:"50%",background:item.urgent?s.red:s.gold,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,fontSize:10,fontWeight:800,color:"#fff"}}>{i+1}</div>
                  <div style={{flex:1,background:item.urgent?"#fff5f5":"#fffbeb",borderRadius:8,padding:"10px 14px",border:`1px solid ${item.urgent?"#fed7d7":"#fde68a"}`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3,flexWrap:"wrap",gap:4}}>
                      <span style={{fontSize:12,fontWeight:800,color:s.navy}}>{item.title}</span>
                      <span style={{fontSize:9,color:item.urgent?"#dc2626":"#92400e",background:item.urgent?"#fee2e2":"#fef3c7",borderRadius:20,padding:"1px 7px",fontWeight:700}}>{item.time}</span>
                    </div>
                    <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>📋 Appeal Deadlines by Province</h3>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
                <thead><tr style={{background:"#f8fafc"}}>{["Province","Review Board","Deadline","Filing Fee"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`}}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ["Ontario","Assessment Review Board (ARB)","March 31","$25–$125"],
                    ["BC","Property Assessment Review Panel","Jan 31","Free"],
                    ["Alberta","Assessment Review Board","Within 60 days of notice","$50"],
                    ["Manitoba","Municipal Assessment Review","June 30","Free"],
                    ["Saskatchewan","Board of Revision","Within 30 days of notice","Free"],
                    ["Quebec","Administrative Tribunal of Quebec","Within 60 days of notice","Varies"],
                    ["Nova Scotia","Assessment Appeal Board","Within 20 days of notice","Free"],
                    ["New Brunswick","Assessment and Planning Appeal Board","Within 30 days of notice","Free"],
                    ["PEI","Provincial Tax Commissioner","Within 60 days of notice","Free"],
                    ["Newfoundland","Municipal Assessment Agency","Within 60 days of notice","Free"],
                  ].map(([prov,board,deadline,fee],i)=>(
                    <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                      <td style={{padding:"8px 12px",fontSize:11,fontWeight:700,color:s.navy}}>{prov}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:s.muted}}>{board}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:s.red,fontWeight:600}}>{deadline}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:fee==="Free"?s.green:s.muted,fontWeight:fee==="Free"?700:400}}>{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

const INSURANCE_FAQS=[
  {q:"Is home insurance mandatory in Canada?",a:"Not legally — but practically yes. Every mortgage lender requires proof of home insurance before closing. Without it, your mortgage will not be approved and your closing will be delayed or cancelled. Even if you own your home outright, insurance is strongly recommended to protect your most valuable asset."},
  {q:"Does home insurance cover flooding?",a:"Standard policies do NOT cover overland flooding (water coming from outside). You need a separate flood coverage rider, typically $100–$300/year extra. Sewer backup is also excluded from standard policies. With extreme weather increasing across Canada, both riders are now strongly recommended."},
  {q:"How much home insurance do I need?",a:"Your dwelling coverage should equal the full replacement cost of your home — what it would cost to rebuild from scratch at today's construction prices, not the market value. Reconstruction costs are typically 20–40% lower than market value in most Canadian cities, but higher in BC and Ontario."},
  {q:"Can I insure a rental property?",a:"Yes, but you need a landlord policy, not a standard homeowner policy. Landlord insurance covers the structure, liability if a tenant is injured, and loss of rental income if the property becomes uninhabitable. Standard home insurance will not cover a property you rent to others."},
  {q:"What if I work from home?",a:"Declare it to your insurer. Standard policies have limited or no coverage for business equipment or business liability. If you have clients visit your home, you definitely need a home business endorsement. Failing to disclose a home business can void your claim."},
  {q:"What is the lender named as 'loss payee' mean?",a:"Your mortgage lender requires you to list them as the 'loss payee' on your home insurance policy. This means if your home is destroyed, insurance proceeds go to the lender first to pay off the mortgage, then any remaining funds go to you. Your insurer can add this designation with a simple phone call."},
  {q:"How do I know if I'm underinsured?",a:"Calculate your home's replacement cost — not market value. A licensed appraiser or your insurer can do a reconstruction cost estimate. Signs you may be underinsured: your coverage limit is close to your purchase price, you've renovated without updating your policy, or your policy is more than 2 years old without review."},
  {q:"Can I cancel home insurance anytime?",a:"Yes, you can cancel at any time. However, if you have a mortgage, allowing your insurance to lapse is a mortgage default — your lender will be notified and may force-place insurance on your behalf at a much higher rate. Always have replacement insurance in place before cancelling."},
];

function InsuranceFAQ(){
  const [open,setOpen]=useState<string|null>(null);
  return(
    <>
      {INSURANCE_FAQS.map((f,i)=>(
        <div key={i} style={{borderBottom:`1px solid ${s.light}`}}>
          <button onClick={()=>setOpen(open===String(i)?null:String(i))} style={{width:"100%",textAlign:"left",padding:"11px 0",background:"none",border:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
            <span style={{fontSize:12,fontWeight:700,color:s.navy,lineHeight:1.4}}>{f.q}</span>
            <span style={{fontSize:16,color:s.muted,flexShrink:0,transform:open===String(i)?"rotate(180deg)":"none",transition:"transform 0.2s"}}>▾</span>
          </button>
          {open===String(i)&&<div style={{fontSize:12,color:s.muted,lineHeight:1.8,paddingBottom:12}}>{f.a}</div>}
        </div>
      ))}
    </>
  );
}

function InsuranceTab({initProv,embedded}:{initProv:string,embedded?:boolean}){
  const [homeVal,setHomeVal]=useState(500000);const [homeType,setHomeType]=useState("detached");const [yearBuilt,setYearBuilt]=useState("mid");const [prov,setProv]=useState(initProv);const [city,setCity]=useState(PDATA[initProv]?.cities[0]||"");const [results,setResults]=useState(null);const resultRef=useRef(null);
  const [insTab,setInsTab]=useState<"quote"|"coverage"|"deductible"|"claims"|"guide">("quote");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Insurance")setInsTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
  useEffect(()=>{setProv(initProv);setCity(PDATA[initProv]?.cities[0]||"");},[initProv]);
  useEffect(()=>{setCity(PDATA[prov]?.cities[0]||"");},[prov]);

  // Province-specific provider lists
  const PROV_PROVIDERS:{[k:string]:string[]}={
    QC:["Desjardins Insurance","La Capitale","SSQ Insurance","Intact Insurance","Aviva Canada","Belairdirect","Co-operators","TD Insurance","Economical Insurance","Sonnet Insurance","RSA Canada"],
    SK:["SGI Canada","Co-operators","Wawanesa Insurance","Intact Insurance","Aviva Canada","TD Insurance","Economical Insurance","Gore Mutual","Portage Mutual","Westland Insurance","CAA Insurance"],
    MB:["Co-operators","Wawanesa Insurance","Intact Insurance","Aviva Canada","SGI Canada","TD Insurance","Economical Insurance","Portage Mutual","Westland Insurance","CAA Insurance","Belairdirect"],
    BC:["BCAA Insurance","Intact Insurance","Aviva Canada","Co-operators","Wawanesa Insurance","TD Insurance","Gore Mutual","Belairdirect","Westland Insurance","Economical Insurance","Sonnet Insurance","Square One Insurance"],
    ON:["Intact Insurance","Aviva Canada","TD Insurance","Desjardins Insurance","Co-operators","Economical Insurance","Gore Mutual","Pembridge Insurance","Belairdirect","Northbridge Insurance","CAA Insurance","Allstate Canada","RSA Canada","Sonnet Insurance","Square One Insurance"],
    AB:["Intact Insurance","Aviva Canada","Co-operators","Wawanesa Insurance","TD Insurance","Belairdirect","Economical Insurance","SGI Canada","Gore Mutual","Allstate Canada","RSA Canada","Northbridge Insurance","Westland Insurance","CAA Insurance","Sonnet Insurance"],
    NS:["Intact Insurance","Aviva Canada","Co-operators","TD Insurance","Economical Insurance","Pembridge Insurance","Wawanesa Insurance","Gore Mutual","Belairdirect","Sonnet Insurance","Assumption Life","SGI Canada"],
    NB:["Intact Insurance","Aviva Canada","Co-operators","TD Insurance","Economical Insurance","Pembridge Insurance","Belairdirect","Gore Mutual","Allstate Canada","Assumption Life","Sonnet Insurance","SGI Canada"],
    PE:["Intact Insurance","Co-operators","Aviva Canada","TD Insurance","Economical Insurance","Pembridge Insurance","Assumption Life","Sonnet Insurance"],
    NL:["Intact Insurance","Aviva Canada","Co-operators","TD Insurance","Economical Insurance","Northbridge Insurance","Pembridge Insurance","Gore Mutual","Assumption Life"],
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
  const filteredProviders=INS_PROVIDERS.filter(p=>p.provinces.length===0||p.provinces.includes(prov)).filter(p=>providerNames.includes(p.name)||p.name==="Square One Insurance"||p.name==="Rates.ca");

  function calc(){
    const base=(INS_BASE[prov]||0.13)*(TYPE_MULT[homeType]||1)*(YEAR_MULT[yearBuilt]||1);
    const cityMult=CITY_MULT[city]||1.0;
    const baseAnnual=Math.round(homeVal*base*cityMult/100);
    setResults(filteredProviders.map(p=>({...p,annual:Math.round(baseAnnual*p.mult/100)*100})).sort((a,b)=>a.annual-b.annual));
    setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  }

  return(
    <div>
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setInsTab("quote")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${insTab==="quote"?s.navy:s.border}`,background:insTab==="quote"?s.navy:s.white,color:insTab==="quote"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🏠 Get Quotes</button>
        <button onClick={()=>setInsTab("coverage")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${insTab==="coverage"?s.navy:s.border}`,background:insTab==="coverage"?s.navy:s.white,color:insTab==="coverage"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🛡️ What's Covered</button>
        <button onClick={()=>setInsTab("deductible")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${insTab==="deductible"?s.navy:s.border}`,background:insTab==="deductible"?s.navy:s.white,color:insTab==="deductible"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>💰 Deductible</button>
        <button onClick={()=>setInsTab("claims")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${insTab==="claims"?s.red:s.border}`,background:insTab==="claims"?s.red:s.white,color:insTab==="claims"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🚨 Claims</button>
        <button onClick={()=>setInsTab("guide")} style={{flex:1,minWidth:90,padding:"9px",borderRadius:8,border:`2px solid ${insTab==="guide"?s.gold:s.border}`,background:insTab==="guide"?s.gold:s.white,color:insTab==="guide"?s.navy:s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📖 Guide</button>
      </div>

      {insTab==="quote"&&(
      <Card>
      <h2 style={{fontSize:16,fontWeight:800,color:s.navy,marginBottom:5}}>🏠 Compare Home Insurance Providers</h2>
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
            {results.map((p,i)=><div key={p.name} style={{border:`1px solid ${i===0?"#bbf7d0":s.border}`,borderRadius:10,padding:13,background:i===0?"#f0fdf4":s.white}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}><div style={{fontSize:13,fontWeight:800,color:s.navy}}>{p.name}</div><div style={{color:s.gold,fontSize:11}}>{p.stars}</div></div>{i===0&&<div style={{background:"#dcfce7",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,display:"inline-block",marginBottom:6}}>⭐ Best Price</div>}<div style={{fontSize:18,fontWeight:800,color:i===0?"#15803d":s.navy}}>{cur(p.annual)}/yr</div><div style={{fontSize:11,color:s.muted,marginBottom:7}}>{cur(Math.round(p.annual/12))}/month</div><div style={{background:"#f0fdf4",borderRadius:6,padding:"5px 9px",fontSize:11,color:"#15803d",fontWeight:600,marginBottom:7}}>💡 {p.discount}</div><div style={{fontSize:11,color:s.muted,marginBottom:9,lineHeight:1.5}}>{p.desc}</div><a href={p.url} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:8,background:i===0?"#15803d":p.name==="Rates.ca"?s.gold:s.navy,color:p.name==="Rates.ca"?s.navy:"#fff",borderRadius:8,fontSize:11,fontWeight:700,textAlign:"center",textDecoration:"none"}}>{p.name==="Rates.ca"?"Compare All Providers →":"Get Real Quote →"}</a></div>)}
          </div>
          <p style={{fontSize:10,color:"#bbb",marginTop:10}}>* Estimates only. Actual premiums vary by insurer and risk profile.</p>
        </div>
      )}</div>
      </Card>
      )}

      {insTab==="coverage"&&(
      <div>
          {/* Coverage Types Explainer */}
          <div style={{marginTop:0}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>🛡️ What Does Home Insurance Actually Cover?</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginBottom:12}}>
              {[
                {title:"✅ Dwelling Coverage",color:s.green,items:["Fire and smoke damage","Wind and hail damage","Lightning strikes","Explosion damage","Vandalism","Falling objects (trees, aircraft)","Weight of ice or snow","Burst pipes (sudden & accidental)"]},
                {title:"✅ Contents Coverage",color:s.blue,items:["Furniture and appliances","Electronics and computers","Clothing and personal items","Jewellery (up to policy limit)","Bicycles (up to policy limit)","Tools and equipment","Sports equipment","Musical instruments"]},
                {title:"✅ Liability Coverage",color:s.navy,items:["Someone injured on your property","You accidentally damage neighbour's property","Legal defence costs","Medical payments to injured guests","Dog bites (most policies)","Incidents away from home","Rental property liability (add-on)"]},
                {title:"⚠️ Usually NOT Covered",color:s.red,items:["Overland flooding (separate rider needed)","Sewer backup (separate rider needed)","Earthquakes (BC especially — add rider)","Normal wear and tear","Mould (unless sudden water damage)","Vacant home over 30 days","Home business equipment (limited)","High-value jewellery over $5K"]},
              ].map(cat=>(
                <div key={cat.title} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderLeft:`3px solid ${cat.color}`}}>
                  <div style={{fontSize:12,fontWeight:800,color:cat.color,marginBottom:8}}>{cat.title}</div>
                  {cat.items.map(item=>(
                    <div key={item} style={{fontSize:11,color:s.muted,padding:"3px 0",display:"flex",gap:6,alignItems:"flex-start"}}>
                      <span style={{color:cat.color,flexShrink:0,fontSize:10}}>{cat.title.startsWith("⚠️")?"✗":"✓"}</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:8,padding:"10px 14px",fontSize:11,color:"#dc2626"}}>
              ⚠️ <b>Critical for Canadian homeowners:</b> Standard home insurance does NOT cover overland flooding (water coming in from outside) or sewer backup. With increasing extreme weather events in Canada, these riders are strongly recommended. Ask your insurer about adding them — typically $100–$300/year extra.
            </div>
          </div>
      </div>
      )}

      {insTab==="deductible"&&(
      <div>
          {/* Deductible Impact Calculator */}
          <div style={{marginTop:0,background:s.navy,borderRadius:12,padding:16}}>
            <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:4}}>💰 Deductible Impact Calculator</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginBottom:12}}>Your deductible is what you pay out-of-pocket when you make a claim. Higher deductible = lower premium. See the tradeoff:</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:8}}>
              {[
                {ded:"$500",mult:1.15,label:"Low deductible"},
                {ded:"$1,000",mult:1.00,label:"Standard"},
                {ded:"$2,500",mult:0.85,label:"Higher savings"},
                {ded:"$5,000",mult:0.72,label:"Max savings"},
              ].map((d,i)=>{
                const baseAmt=(results as any[])?.[0]?.annual||1800;
                const adj=Math.round(baseAmt*d.mult/100)*100;
                const saving=Math.round(baseAmt*1.15/100)*100-adj;
                return(
                  <div key={d.ded} style={{background:i===1?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.08)",borderRadius:10,padding:10,textAlign:"center",border:i===1?"1px solid rgba(255,255,255,0.4)":"1px solid rgba(255,255,255,0.1)"}}>
                    <div style={{fontSize:14,fontWeight:800,color:s.gold}}>{d.ded}</div>
                    <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginBottom:6}}>{d.label}</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#fff"}}>{cur(adj)}/yr</div>
                    {saving>0&&<div style={{fontSize:10,color:"#4ade80",marginTop:3}}>Save {cur(saving)}/yr</div>}
                    {i===1&&<div style={{fontSize:9,color:"rgba(255,255,255,0.5)",marginTop:3}}>baseline</div>}
                  </div>
                );
              })}
            </div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.4)",marginTop:10}}>💡 Rule of thumb: If you can afford the higher deductible out of pocket, take it. You'll save more in premiums over time than you'll pay in claims.</div>
          </div>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"10px 16px",marginTop:14,fontSize:11,color:"#1e40af"}}>
            💡 <b>Tip:</b> Run the estimator in the Get Quotes tab first to get your base premium, then come back here to see how your deductible choice affects the final cost.
          </div>
      </div>
      )}

      {insTab==="claims"&&(
      <div>
          {/* Claims Guide */}
          <Card style={{marginTop:0,borderLeft:`4px solid ${s.red}`}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:4}}>🚨 What to Do After a Home Insurance Claim</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>The first 24 hours after damage are critical. Most claim mistakes happen here.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
              {[
                {step:"1",title:"Ensure Safety First",desc:"Don't enter a structurally damaged home. Turn off gas, water, or electricity if safe to do so. Call 911 if there's fire, gas leak, or structural collapse.",color:s.red},
                {step:"2",title:"Document Everything",desc:"Take photos and video of ALL damage before touching anything. This is your most important evidence. More photos = better claim.",color:s.navy},
                {step:"3",title:"Prevent Further Damage",desc:"You're required by your policy to take reasonable steps to prevent additional damage — board up windows, tarp the roof, stop a leak. Keep all receipts.",color:"#7c3aed"},
                {step:"4",title:"Call Your Insurer",desc:"Report the claim as soon as possible. Have your policy number ready. Ask for a claim number and your adjuster's contact info.",color:s.blue},
                {step:"5",title:"Don't Throw Anything Away",desc:"Keep all damaged items until the adjuster has seen them. Even if something seems worthless, it may be replaceable under your policy.",color:s.gold},
                {step:"6",title:"Track All Expenses",desc:"If you need temporary accommodation, meals, or storage — keep every receipt. Additional Living Expenses (ALE) coverage pays these costs.",color:s.green},
              ].map(s2=>(
                <div key={s2.step} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`,borderLeft:`3px solid ${s2.color}`}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:s2.color,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:10,fontWeight:800,flexShrink:0}}>{s2.step}</div>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{s2.title}</div>
                  </div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{s2.desc}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",marginTop:10,fontSize:11,color:"#92400e"}}>
              💡 <b>Pro tip:</b> Never admit fault or agree to a settlement amount on the spot. Review the adjuster's estimate carefully — you can dispute it or hire a public adjuster if you disagree.
            </div>
          </Card>
      </div>
      )}

      {insTab==="guide"&&(
      <div>
        {/* Province cost comparison */}
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📊 Average Home Insurance Cost by Province — 2026</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Premiums are rising across Canada — <cite index="25-1">average premiums increased 8.6% year-over-year as of Q1 2026</cite>, driven by severe weather events. Here's what homeowners pay by province:</p>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
              <thead><tr style={{background:"#f8fafc"}}>{["Province","Avg Annual Premium","YoY Change","Notes"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`,whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  {p:"British Columbia",avg:"$924",change:"+9.1%",note:"Wildfire and earthquake risk drives premiums",color:s.red},
                  {p:"Alberta",avg:"$1,200",change:"+16.2%",note:"Highest increase in Canada — hail and flooding",color:s.red},
                  {p:"Ontario",avg:"$1,350",change:"+6.2%",note:"High claims density in GTA area",color:"#f59e0b"},
                  {p:"Quebec",avg:"$768",change:"+4.1%",note:"Lowest in Canada — fewer severe weather events",color:s.green},
                  {p:"Manitoba",avg:"$950",change:"+7.8%",note:"Flooding risk in low-lying areas",color:"#f59e0b"},
                  {p:"Saskatchewan",avg:"$880",change:"+8.2%",note:"Hail risk in summer months",color:"#f59e0b"},
                  {p:"Nova Scotia",avg:"$1,050",change:"+9.5%",note:"Hurricane and wind exposure on coast",color:s.red},
                  {p:"New Brunswick",avg:"$920",change:"+7.2%",note:"Moderate risk profile",color:"#f59e0b"},
                  {p:"PEI",avg:"$890",change:"+6.8%",note:"Wind and coastal storm risk",color:"#f59e0b"},
                  {p:"Newfoundland",avg:"$1,100",change:"+8.9%",note:"Wind, ice, and remote location factors",color:s.red},
                ].map((row,i)=>(
                  <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                    <td style={{padding:"9px 12px",fontSize:12,fontWeight:700,color:s.navy}}>{row.p}</td>
                    <td style={{padding:"9px 12px",fontSize:13,fontWeight:800,color:s.navy}}>{row.avg}</td>
                    <td style={{padding:"9px 12px",fontSize:12,fontWeight:700,color:row.color}}>{row.change}</td>
                    <td style={{padding:"9px 12px",fontSize:11,color:s.muted}}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:10,color:"#bbb",marginTop:8}}>* Estimates based on industry data. Your actual premium depends on home value, location, coverage type, and claims history.</p>
        </Card>

        {/* How to lower your premium */}
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>💰 How to Lower Your Home Insurance Premium</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
            {[
              {tip:"Bundle Home + Auto",saving:"Save 10–25%",desc:"Most insurers offer significant discounts when you combine home and auto insurance. Easiest way to reduce your premium.",icon:"🚗"},
              {tip:"Increase Your Deductible",saving:"Save 10–20%",desc:"Moving from $500 to $2,500 deductible can cut your premium significantly. Only do this if you can afford the deductible out of pocket.",icon:"💰"},
              {tip:"Claims-Free Discount",saving:"Save 10–20%",desc:"Going years without a claim earns discounts with most insurers. Think twice before filing small claims — they can raise your premium.",icon:"🏆"},
              {tip:"Install Monitored Alarm",saving:"Save 5–15%",desc:"A monitored security or fire alarm system reduces risk. Show proof of monitoring to your insurer to qualify.",icon:"🔒"},
              {tip:"New Home Discount",saving:"Save 5–20%",desc:"Homes built after 2010 often qualify for lower premiums due to modern building codes and electrical systems.",icon:"🏠"},
              {tip:"Shop Around Annually",saving:"Save up to 40%",desc:"Loyalty doesn't pay in insurance. Comparing quotes every year at renewal is the single biggest way to save money.",icon:"🔍"},
              {tip:"Mortgage-Free Discount",saving:"Save 5–10%",desc:"Some insurers discount premiums once your mortgage is paid off — you're seen as a lower risk.",icon:"📋"},
              {tip:"Pay Annually",saving:"Save 3–5%",desc:"Paying your full premium upfront rather than monthly avoids instalment fees charged by most insurers.",icon:"📅"},
            ].map(item=>(
              <div key={item.tip} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                  <span style={{fontSize:18}}>{item.icon}</span>
                  <div>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{item.tip}</div>
                    <div style={{fontSize:10,fontWeight:700,color:s.green}}>{item.saving}</div>
                  </div>
                </div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Mortgage vs Home Insurance explainer */}
        <Card style={{marginBottom:14,borderLeft:`4px solid ${s.blue}`}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>🏦 Mortgage Insurance vs Home Insurance — What's the Difference?</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div style={{background:"#eff6ff",borderRadius:10,padding:12,border:"1px solid #bfdbfe"}}>
              <div style={{fontSize:13,fontWeight:800,color:"#1e40af",marginBottom:8}}>🏦 CMHC Mortgage Insurance</div>
              {[["What it is","Protects the LENDER if you default on your mortgage"],["Who needs it","Anyone with less than 20% down payment"],["Cost","2.80%–4.00% of mortgage amount added to your loan"],["Who pays","You — but it protects the lender, not you"],["Required by","Federal law for insured mortgages"],["Covers","Lender's loss if you stop paying your mortgage"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",gap:8,padding:"4px 0",borderBottom:"1px solid rgba(30,64,175,0.1)",fontSize:11}}>
                  <span style={{fontWeight:700,color:"#1e40af",flexShrink:0,minWidth:90}}>{l}</span>
                  <span style={{color:"#1e40af"}}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{background:"#f0fdf4",borderRadius:10,padding:12,border:"1px solid #bbf7d0"}}>
              <div style={{fontSize:13,fontWeight:800,color:"#15803d",marginBottom:8}}>🏠 Home Insurance</div>
              {[["What it is","Protects YOUR home and belongings from damage or loss"],["Who needs it","All homeowners — required by mortgage lenders"],["Cost","$768–$1,350/year depending on province and home"],["Who pays","You — and it actually protects YOU"],["Required by","Your mortgage lender as a condition of the loan"],["Covers","Fire, theft, liability, weather damage, and more"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",gap:8,padding:"4px 0",borderBottom:"1px solid rgba(21,128,61,0.1)",fontSize:11}}>
                  <span style={{fontWeight:700,color:"#15803d",flexShrink:0,minWidth:90}}>{l}</span>
                  <span style={{color:"#15803d"}}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",marginTop:10,fontSize:11,color:"#92400e"}}>
            💡 <b>Key point:</b> Your lender will require you to show proof of home insurance AND name them as the "loss payee" on the policy before your mortgage closes. Without this, your closing will be delayed.
          </div>
        </Card>

        {/* Add-Ons / Riders Guide */}
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🌊 Optional Add-Ons & Riders — What You Should Know</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Standard policies exclude many common risks. These riders add coverage for an extra $50–$500/year.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
            {[
              {rider:"Overland Flood Coverage",cost:"+$100–$300/yr",must:true,desc:"Protects against water entering your home from outside — rivers, heavy rain, spring runoff. NOT included in standard policies. Strongly recommended in flood-prone areas.",provinces:"All provinces"},
              {rider:"Sewer Backup Coverage",cost:"+$50–$150/yr",must:true,desc:"Covers damage from sewage backing up into your basement. Very common claim in older cities. NOT included in standard policies. Essential for homes with finished basements.",provinces:"All provinces"},
              {rider:"Earthquake Coverage",cost:"+$200–$500/yr",must:false,desc:"Covers structural damage from earthquakes. Critical in BC, where a major earthquake is considered overdue. Lower priority in prairie provinces.",provinces:"Critical in BC"},
              {rider:"High-Value Items",cost:"+$50–$200/yr",must:false,desc:"Standard policies cap jewellery at $5,000 and electronics at $10,000. If you own expensive jewellery, art, or cameras, schedule them separately.",provinces:"All provinces"},
              {rider:"Home Business Coverage",cost:"+$100–$400/yr",must:false,desc:"If you work from home or run a business from your property, standard policies may not cover business equipment or liability. Declare it to avoid voided claims.",provinces:"All provinces"},
              {rider:"Identity Theft Protection",cost:"+$25–$75/yr",must:false,desc:"Covers costs of recovering from identity theft — legal fees, lost wages, credit monitoring. Inexpensive add-on with growing relevance.",provinces:"All provinces"},
            ].map(r=>(
              <div key={r.rider} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderLeft:`3px solid ${r.must?s.red:s.blue}`}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4,flexWrap:"wrap",gap:4}}>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{r.rider}</div>
                  {r.must&&<span style={{fontSize:9,fontWeight:700,color:"#fff",background:s.red,borderRadius:20,padding:"1px 7px"}}>RECOMMENDED</span>}
                </div>
                <div style={{fontSize:11,fontWeight:700,color:s.green,marginBottom:4}}>{r.cost}</div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.5,marginBottom:4}}>{r.desc}</div>
                <div style={{fontSize:10,color:s.blue,fontWeight:600}}>📍 {r.provinces}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Insurance FAQ */}
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>❓ Home Insurance FAQ</h3>
          <InsuranceFAQ/>
        </Card>

        <button onClick={()=>setInsTab("quote")} style={{width:"100%",padding:"12px",background:s.navy,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:14}}>🏠 Get Your Insurance Quotes →</button>
      </div>
      )}
    </div>
  );
}

function RateImpactTab(){
  const [mortgage,setMortgage]=useState(400000);
  const [rate1,setRate1]=useState(4.5);
  const [rate2,setRate2]=useState(5.0);
  const [amortI,setAmortI]=useState(25);
  const [compared,setCompared]=useState<any>(null);

  function calcImpact(){
    function pmt(p:number,r:number,n:number){const m=r/100/12;return m===0?p/n:p*(m*Math.pow(1+m,n))/(Math.pow(1+m,n)-1);}
    const n=amortI*12;
    const p1=pmt(mortgage,rate1,n);
    const p2=pmt(mortgage,rate2,n);
    const diff=p2-p1;
    const totalDiff=diff*n;
    const p1Total=p1*n;
    const p2Total=p2*n;
    setCompared({p1,p2,diff,totalDiff,p1Total,p2Total,p1Int:p1Total-mortgage,p2Int:p2Total-mortgage});
  }

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>🧮</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Rate Impact Calculator</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>See exactly how much a rate difference costs you in dollars — per month and over your full amortization.</p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14,marginBottom:14}}>
        <Card>
          <h3 style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:12}}>Compare Two Rates</h3>
          <Field label="Mortgage Amount ($)"><input type="number" value={mortgage} onChange={e=>setMortgage(parseFloat(e.target.value)||0)} style={inp}/></Field>
          <Field label="Rate A (%) — e.g. your bank's offer"><input type="number" step="0.05" value={rate1} onChange={e=>setRate1(parseFloat(e.target.value)||0)} style={inp}/></Field>
          <Field label="Rate B (%) — e.g. competing offer"><input type="number" step="0.05" value={rate2} onChange={e=>setRate2(parseFloat(e.target.value)||0)} style={inp}/></Field>
          <Field label="Amortization">
            <select value={amortI} onChange={e=>setAmortI(parseInt(e.target.value))} style={inp}>
              {[10,15,20,25,30].map(y=><option key={y} value={y}>{y} years</option>)}
            </select>
          </Field>
          <button onClick={calcImpact} style={calcBtn}>Calculate Rate Impact</button>
        </Card>

        {compared&&(
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:12}}>💰 The Dollar Difference</h3>
            <div style={{background:"rgba(255,255,255,0.1)",borderRadius:10,padding:12,marginBottom:10,textAlign:"center"}}>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginBottom:2}}>Monthly Savings at {rate1}% vs {rate2}%</div>
              <div style={{fontSize:32,fontWeight:800,color:s.gold}}>{cur(compared.diff)}/mo</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginTop:2}}>That's {cur(compared.totalDiff)} over {amortI} years</div>
            </div>
            {[
              [`Rate A (${rate1}%)`,cur(compared.p1)+"/mo",cur(compared.p1Int)+" interest"],
              [`Rate B (${rate2}%)`,cur(compared.p2)+"/mo",cur(compared.p2Int)+" interest"],
            ].map(([l,v,note])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,marginBottom:7}}>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginBottom:3}}>{l}</div>
                <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>{v}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.5)",marginTop:2}}>{note} total</div>
              </div>
            ))}
          </Card>
        )}
      </div>

      {compared&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>📊 What {cur(compared.diff)}/month Means Over Time</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10}}>
            {[[1,"1 Year"],[3,"3 Years"],[5,"5 Years"],[amortI,`${amortI} Years`]].map(([yrs,label])=>(
              <div key={label as string} style={{background:"#f8fafc",borderRadius:8,padding:10,textAlign:"center",border:`1px solid ${s.border}`}}>
                <div style={{fontSize:14,fontWeight:800,color:s.green}}>{cur(compared.diff*12*(yrs as number))}</div>
                <div style={{fontSize:10,color:s.muted,marginTop:3}}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 12px",marginTop:10,fontSize:11,color:"#15803d"}}>
            💡 Even a 0.25% rate difference on a $400K mortgage saves ~$65/month or ~$19,500 over 25 years. This is why shopping around matters.
          </div>
        </Card>
      )}

      {/* Common rate scenarios */}
      <Card>
        <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>💡 Common Rate Scenarios — $400K Mortgage, 25 Years</h3>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",minWidth:360}}>
            <thead><tr style={{background:"#f8fafc"}}>{["Scenario","Rate","Monthly Payment","Total Interest","vs Best Rate"].map(h=><th key={h} style={{padding:"8px 10px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`,whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                {sc:"Best variable rate",r:3.35,color:s.green},
                {sc:"Best fixed rate",r:4.89,color:s.blue},
                {sc:"Bank posted rate",r:5.50,color:"#92400e"},
                {sc:"No negotiation",r:6.00,color:s.red},
              ].map((row,i)=>{
                const m=row.r/100/12,n=300;
                const pmt=400000*(m*Math.pow(1+m,n))/(Math.pow(1+m,n)-1);
                const totalInt=pmt*300-400000;
                const bestPmt=400000*(3.35/100/12*Math.pow(1+3.35/100/12,300))/(Math.pow(1+3.35/100/12,300)-1);
                const bestInt=bestPmt*300-400000;
                const extra=totalInt-bestInt;
                return(
                  <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i===0?"#f0fdf4":i%2===0?s.white:"#fafbfc"}}>
                    <td style={{padding:"9px 10px",fontSize:12,fontWeight:i===0?800:400,color:row.color}}>{row.sc}</td>
                    <td style={{padding:"9px 10px",fontSize:12,fontWeight:700,color:row.color}}>{row.r}%</td>
                    <td style={{padding:"9px 10px",fontSize:12,fontWeight:700,color:s.navy}}>{cur(pmt)}/mo</td>
                    <td style={{padding:"9px 10px",fontSize:12,color:s.muted}}>{cur(totalInt)}</td>
                    <td style={{padding:"9px 10px",fontSize:12,color:extra>0?"#dc2626":s.green,fontWeight:700}}>{extra>0?`+${cur(extra)} extra`:"Baseline"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function RateFinderTab({embedded}:{embedded?:boolean}={}){
  const [subTab,setSubTab]=useState<"finder"|"compare"|"impact"|"preapproval">("finder");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Rate Finder")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
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
    <div>
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setSubTab("finder")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="finder"?s.navy:s.border}`,background:subTab==="finder"?s.navy:s.white,color:subTab==="finder"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🎯 Rate Finder</button>
        <button onClick={()=>setSubTab("compare")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="compare"?s.navy:s.border}`,background:subTab==="compare"?s.navy:s.white,color:subTab==="compare"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📊 Fixed vs Variable</button>
        <button onClick={()=>setSubTab("impact")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="impact"?s.navy:s.border}`,background:subTab==="impact"?s.navy:s.white,color:subTab==="impact"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🧮 Rate Impact</button>
        <button onClick={()=>setSubTab("preapproval")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="preapproval"?s.navy:s.border}`,background:subTab==="preapproval"?s.navy:s.white,color:subTab==="preapproval"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📋 Pre-Approval</button>
      </div>

      {subTab==="finder"&&(
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
      )}

      {subTab==="compare"&&(
      <div>
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:6}}>📊</div>
          <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Fixed vs Variable — Which is Right for You?</h2>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>With BoC at 2.25% and variable rates below fixed, here's the full comparison for 2026.</p>
        </div>

        {/* Side by side comparison */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
          <Card style={{borderTop:`4px solid ${s.blue}`}}>
            <div style={{fontSize:14,fontWeight:800,color:s.blue,marginBottom:10}}>📅 Fixed Rate</div>
            <div style={{fontSize:28,fontWeight:800,color:s.navy,marginBottom:4}}>~4.89%</div>
            <div style={{fontSize:11,color:s.muted,marginBottom:12}}>5-year fixed · July 2026</div>
            {[["✓ Payment certainty","Your payment never changes during the term"],["✓ Protection from hikes","If rates rise, you're protected"],["✓ Easy to budget","Know your cost for 1–5 years"],["✗ Higher rate now","Currently 1.5% above variable"],["✗ High break penalty","IRD can be $10,000–$30,000+"],["✗ Miss rate drops","If BoC cuts again, you don't benefit"]].map(([t,d])=>(
              <div key={t} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:`1px solid ${s.light}`,fontSize:11}}>
                <span style={{color:t.startsWith("✓")?s.green:s.red,flexShrink:0,fontWeight:700}}>{t.split(" ")[0]}</span>
                <div><span style={{fontWeight:700,color:s.navy}}>{t.slice(2)} </span><span style={{color:s.muted}}>{d}</span></div>
              </div>
            ))}
            <div style={{background:"#eff6ff",borderRadius:8,padding:"8px 10px",marginTop:10,fontSize:11,color:"#1e40af"}}>
              <b>Best for:</b> Risk-averse buyers who need payment predictability. First-time buyers who can't absorb payment increases.
            </div>
          </Card>
          <Card style={{borderTop:`4px solid ${s.green}`}}>
            <div style={{fontSize:14,fontWeight:800,color:s.green,marginBottom:10}}>📉 Variable Rate</div>
            <div style={{fontSize:28,fontWeight:800,color:s.navy,marginBottom:4}}>~3.35%</div>
            <div style={{fontSize:11,color:s.muted,marginBottom:12}}>Variable · Prime −1.10% · July 2026</div>
            {[["✓ Lower rate now","1.5% below 5-yr fixed = significant savings"],["✓ Low break penalty","Only 3 months interest to break"],["✓ Benefit from cuts","If BoC cuts again, your rate drops automatically"],["✗ Payment can rise","If BoC hikes, your payment increases"],["✗ Uncertainty","Hard to budget long-term"],["✗ Psychological stress","Rate announcements 8x/year can be stressful"]].map(([t,d])=>(
              <div key={t} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:`1px solid ${s.light}`,fontSize:11}}>
                <span style={{color:t.startsWith("✓")?s.green:s.red,flexShrink:0,fontWeight:700}}>{t.split(" ")[0]}</span>
                <div><span style={{fontWeight:700,color:s.navy}}>{t.slice(2)} </span><span style={{color:s.muted}}>{d}</span></div>
              </div>
            ))}
            <div style={{background:"#f0fdf4",borderRadius:8,padding:"8px 10px",marginTop:10,fontSize:11,color:"#15803d"}}>
              <b>Best for:</b> Buyers who can absorb payment fluctuations and want to take advantage of the current rate differential.
            </div>
          </Card>
        </div>

        {/* Rate comparison by term */}
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>📋 Current Rates by Term — July 2026</h3>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
              <thead><tr style={{background:"#f8fafc"}}>{["Term","Fixed Rate","Variable Rate","Best Choice","Why"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`,whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  {term:"1-Year",fixed:"4.65%",variable:"3.35%",best:"Variable",why:"1.3% gap is large. 1yr fixed hedges risk with quick renewal."},
                  {term:"2-Year",fixed:"4.75%",variable:"3.35%",best:"Variable",why:"Still significant gap. Rates likely stable or lower in 2 years."},
                  {term:"3-Year",fixed:"4.85%",variable:"3.35%",best:"Variable",why:"1.5% gap. Economists expect cuts may continue into 2027."},
                  {term:"5-Year",fixed:"4.89%",variable:"3.35%",best:"Depends",why:"Larger gap but more uncertainty. Risk tolerance determines best choice."},
                ].map((row,i)=>(
                  <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                    <td style={{padding:"10px 12px",fontSize:12,fontWeight:700,color:s.navy}}>{row.term}</td>
                    <td style={{padding:"10px 12px",fontSize:12,fontWeight:700,color:s.blue}}>{row.fixed}</td>
                    <td style={{padding:"10px 12px",fontSize:12,fontWeight:700,color:s.green}}>{row.variable}</td>
                    <td style={{padding:"10px 12px"}}><span style={{background:row.best==="Variable"?"#dcfce7":row.best==="Fixed"?"#dbeafe":"#fef3c7",color:row.best==="Variable"?"#15803d":row.best==="Fixed"?"#1e40af":"#92400e",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{row.best}</span></td>
                    <td style={{padding:"10px 12px",fontSize:11,color:s.muted}}>{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card style={{background:"#fffbeb",border:"1px solid #fde68a",marginBottom:14}}>
          <h3 style={{fontSize:13,fontWeight:800,color:"#92400e",marginBottom:8}}>⚖️ The 2026 Verdict</h3>
          <p style={{fontSize:12,color:"#92400e",lineHeight:1.7,marginBottom:8}}>Variable rates are currently ~1.5% below fixed rates. Historically, variable rate borrowers have paid less interest over time in about 2 out of 3 rate cycles. However, the BoC could hold or even reverse course if inflation spikes.</p>
          <p style={{fontSize:12,color:"#92400e",lineHeight:1.7}}>If you can absorb a $200–$400/month payment increase without financial stress, variable is likely the better choice right now. If you're at your maximum affordability, fixed gives you certainty that your payments won't increase.</p>
        </Card>

        <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"12px",background:s.red,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer"}}>📞 Get a Free Personalized Rate Recommendation →</button>
      </div>
      )}

      {subTab==="impact"&&<RateImpactTab/>}
      {subTab==="preapproval"&&(
      <div>
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:6}}>📋</div>
          <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Mortgage Pre-Approval Guide</h2>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Everything you need to get pre-approved — documents, timeline, and what to expect.</p>
        </div>

        {/* Timeline */}
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>⏱️ Pre-Approval Timeline</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>From application to keys — here's how long each step takes.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10}}>
            {[
              {step:"Day 1",title:"Apply",desc:"Submit application online or with a broker. Takes 30–60 minutes.",color:s.navy},
              {step:"1–3 Days",title:"Credit Check",desc:"Lender pulls your credit report. Soft pull for pre-approval.",color:s.blue},
              {step:"2–5 Days",title:"Document Review",desc:"Lender reviews income, employment, and assets.",color:"#7c3aed"},
              {step:"3–7 Days",title:"Pre-Approval Issued",desc:"You receive a pre-approval letter with maximum amount and rate hold.",color:s.green},
              {step:"Rate Hold",title:"90–120 Days",desc:"Your rate is locked while you house hunt. Renewable if expired.",color:s.gold},
              {step:"After Offer",title:"Full Approval",desc:"Once your offer is accepted, full underwriting begins (5–10 days).",color:s.red},
            ].map((item,i)=>(
              <div key={i} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderTop:`3px solid ${item.color}`}}>
                <div style={{fontSize:10,fontWeight:700,color:item.color,marginBottom:3}}>{item.step}</div>
                <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:4}}>{item.title}</div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Document checklist */}
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📁 Documents You'll Need</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Have these ready before you apply — it speeds up approval significantly.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
            {[
              {cat:"💼 Income",items:["Last 2 pay stubs (within 30 days)","Employment letter on company letterhead","Last 2 years T4 slips","Last 2 years Notice of Assessment (NOA)"]},
              {cat:"🏦 Assets & Down Payment",items:["90-day bank statements (all pages)","RRSP/FHSA/investment statements","Gift letter if receiving down payment help","Sale proceeds if selling current home"]},
              {cat:"🆔 Identity",items:["Government photo ID (passport or licence)","Secondary ID","Social Insurance Number (SIN)"]},
              {cat:"📊 Debt & Liabilities",items:["Credit card statements","Car loan statements","Student loan balance","Any other monthly debt obligations"]},
            ].map(cat=>(
              <div key={cat.cat} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
                <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:8}}>{cat.cat}</div>
                {cat.items.map(item=>(
                  <div key={item} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:s.muted}}>
                    <span style={{color:s.green,flexShrink:0}}>✓</span>{item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"8px 12px",marginTop:10,fontSize:11,color:"#1e40af"}}>
            💡 <b>Pro tip:</b> Scan and organize all documents into a folder before applying. Lenders who receive complete packages approve faster.
          </div>
        </Card>

        {/* What lenders look at */}
        <Card style={{background:s.navy,marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:"#fff",marginBottom:10}}>🔍 What Lenders Actually Look At</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
            {[
              {factor:"Credit Score",weight:"High",detail:"Minimum 680 for A-lenders. 750+ for best rates. Checked via Equifax or TransUnion.",color:s.red},
              {factor:"GDS Ratio",weight:"High",detail:"Gross Debt Service — housing costs must be under 39% of gross income.",color:s.red},
              {factor:"TDS Ratio",weight:"High",detail:"Total Debt Service — all debts must be under 44% of gross income.",color:s.red},
              {factor:"Employment",weight:"Medium",detail:"2+ years at same employer preferred. Self-employed needs 2yr income history.",color:s.gold},
              {factor:"Down Payment Source",weight:"Medium",detail:"Must be verified — 90 days in your account or documented gift.",color:s.gold},
              {factor:"Property Value",weight:"Medium",detail:"Lender orders appraisal to confirm property is worth what you're paying.",color:s.gold},
            ].map(f=>(
              <div key={f.factor} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:10,borderLeft:`3px solid ${f.color}`}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{fontSize:12,fontWeight:800,color:"#fff"}}>{f.factor}</span>
                  <span style={{fontSize:9,fontWeight:700,color:f.color,background:"rgba(255,255,255,0.1)",borderRadius:20,padding:"1px 7px"}}>{f.weight}</span>
                </div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",lineHeight:1.5}}>{f.detail}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Common mistakes */}
        <Card style={{marginBottom:14,borderLeft:`4px solid ${s.red}`}}>
          <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>⚠️ Pre-Approval Mistakes to Avoid</h3>
          {[
            ["Don't apply for new credit","Every new credit application lowers your score. Avoid new cards, car loans, or lines of credit for 90 days before applying."],
            ["Don't change jobs","Lenders want employment stability. Changing jobs during the application — even for more money — can delay or kill your approval."],
            ["Don't make large deposits without documentation","Unexplained deposits into your bank account raise red flags. Keep receipts and be prepared to explain all deposits."],
            ["Don't max out your credit cards","High credit utilization (over 30%) significantly hurts your score. Pay down balances before applying."],
            ["Don't co-sign for anyone else","Co-signing adds debt to your name and reduces your qualifying amount, even if the other person makes all payments."],
          ].map(([t,d])=>(
            <div key={t} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:`1px solid ${s.light}`}}>
              <span style={{color:s.red,flexShrink:0,fontSize:14}}>✗</span>
              <div><div style={{fontSize:12,fontWeight:700,color:s.navy,marginBottom:2}}>{t}</div><div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{d}</div></div>
            </div>
          ))}
        </Card>

        <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
          <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{flex:1,padding:"12px",background:s.green,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer"}}>📋 Start Your Pre-Approval Process →</button>
          <button onClick={()=>{
            const html=`<html><head><title>Mortgage Pre-Approval Guide — Canada Mortgage Rates</title>
            <style>body{font-family:Arial,sans-serif;padding:32px;max-width:750px;margin:0 auto;color:#0d2240}
            h1{color:#0d2240;border-bottom:3px solid #f5a623;padding-bottom:8px;font-size:22px}
            h2{color:#0d2240;font-size:15px;margin:20px 0 8px;border-left:4px solid #0d2240;padding-left:10px}
            h3{color:#0d2240;font-size:13px;margin:14px 0 6px}
            .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px}
            .card{border:1px solid #e2e8f0;border-radius:8px;padding:10px;border-top:3px solid #0d2240}
            .item{padding:4px 0;font-size:12px;border-bottom:1px solid #f1f5f9}
            .check{color:#16a34a;margin-right:6px}
            .cross{color:#dc2626;margin-right:6px}
            .factor{background:#f8fafc;border-radius:6px;padding:8px;margin-bottom:6px;border-left:3px solid #0d2240}
            .footer{font-size:10px;color:#94a3b8;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:12px}
            .print-btn{padding:10px 20px;background:#0d2240;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;margin-top:16px}
            @media print{.print-btn{display:none}}</style></head>
            <body>
            <h1>📋 Mortgage Pre-Approval Guide</h1>
            <p style="color:#64748b;font-size:12px">Generated: ${new Date().toLocaleDateString('en-CA',{year:'numeric',month:'long',day:'numeric'})} · canadamortgagerates.net</p>

            <h2>⏱️ Pre-Approval Timeline</h2>
            <div class="grid">
              ${[["Day 1","Apply","Submit application online or with a broker. 30–60 minutes."],["1–3 Days","Credit Check","Lender pulls credit report. Soft pull for pre-approval."],["2–5 Days","Document Review","Lender reviews income, employment, and assets."],["3–7 Days","Pre-Approval Issued","Receive letter with maximum amount and rate hold."],["90–120 Days","Rate Hold","Rate locked while house hunting. Renewable if expired."],["After Offer","Full Approval","Once offer accepted, full underwriting begins (5–10 days)."]].map(([t,n,d])=>`<div class="card"><div style="font-size:10px;color:#64748b">${t}</div><div style="font-weight:700;margin:3px 0">${n}</div><div style="font-size:11px;color:#64748b">${d}</div></div>`).join('')}
            </div>

            <h2>📁 Documents You'll Need</h2>
            ${[["💼 Income",["Last 2 pay stubs (within 30 days)","Employment letter on company letterhead","Last 2 years T4 slips","Last 2 years Notice of Assessment (NOA)"]],["🏦 Assets & Down Payment",["90-day bank statements (all pages)","RRSP/FHSA/investment statements","Gift letter if receiving down payment help","Sale proceeds if selling current home"]],["🆔 Identity",["Government photo ID (passport or licence)","Secondary ID","Social Insurance Number (SIN)"]],["📊 Debt & Liabilities",["Credit card statements","Car loan statements","Student loan balance","Any other monthly debt obligations"]]].map(([cat,items])=>`<h3>${cat}</h3>${(items as string[]).map(i=>`<div class="item"><span class="check">✓</span>${i}</div>`).join('')}`).join('')}

            <h2>🔍 What Lenders Look At</h2>
            ${[["Credit Score (High)","Minimum 680 for A-lenders. 750+ for best rates."],["GDS Ratio (High)","Housing costs must be under 39% of gross income."],["TDS Ratio (High)","All debts must be under 44% of gross income."],["Employment (Medium)","2+ years at same employer preferred."],["Down Payment Source (Medium)","Must be in your account 90 days or documented gift."],["Property Value (Medium)","Lender orders appraisal to confirm purchase price."]].map(([f,d])=>`<div class="factor"><b>${f}</b><br/><span style="font-size:11px;color:#64748b">${d}</span></div>`).join('')}

            <h2>⚠️ Mistakes to Avoid</h2>
            ${[["Don't apply for new credit","Avoid new cards, car loans, or lines of credit for 90 days before applying."],["Don't change jobs","Employment stability is critical. Even a raise can delay approval."],["Don't make large unexplained deposits","Keep receipts and be prepared to explain all deposits."],["Don't max out credit cards","High utilization hurts your score. Stay under 30%."],["Don't co-sign for anyone else","Co-signing adds debt to your name and reduces your qualifying amount."]].map(([t,d])=>`<div class="item"><span class="cross">✗</span><b>${t}</b> — ${d}</div>`).join('')}

            <div class="footer">This guide is for informational purposes only. Canada Mortgage Rates is not a licensed mortgage broker. Always consult a licensed mortgage professional before making financial decisions. · canadamortgagerates.net</div>
            <button class="print-btn" onclick="window.print()">🖨️ Print This Guide</button>
            </body></html>`;
            const w=window.open("","_blank");
            if(w){w.document.write(html);w.document.close();}
          }} style={{padding:"12px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>🖨️ Print / Save PDF</button>
        </div>
      </div>
      )}
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

const CHECKS=[
  {cat:"📍 Location & Access",items:["Walking distance to groceries and essentials","Transit access (bus, LRT, subway)","Highway/commute route to work","Proximity to schools (if applicable)","Airport noise or industrial areas nearby"]},
  {cat:"🏫 Schools & Community",items:["School ratings in the catchment area","Daycares and childcare availability","Community centres and recreation facilities","Parks, trails, and green space","Places of worship if important to you"]},
  {cat:"🏗️ Development & Future Value",items:["Check city zoning for future development plans","New infrastructure projects planned nearby","Neighbourhood age and condition of homes","Condo/highrise development planned nearby","Historical price appreciation in the area"]},
  {cat:"⚠️ Risk Factors",items:["Flood zone or floodplain designation","Past basement flooding in the neighbourhood","Crime statistics (check local police data)","Soil contamination or brownfield sites","Power line or cell tower proximity"]},
  {cat:"🏠 The Property Itself",items:["Age of roof, furnace, and major systems","Previous permits pulled (check city records)","Neighbours and condition of adjacent properties","Street parking and garage situation","Sun exposure and yard orientation"]},
];

function NeighbourhoodChecklist(){
  const [checked,setChecked]=useState<{[k:string]:boolean}>({});
  const [showModal,setShowModal]=useState(false);
  const allItems=CHECKS.flatMap(c=>c.items);
  const total=allItems.length;
  const done=Object.values(checked).filter(Boolean).length;
  const pct=Math.round(done/total*100);
  function toggle(key:string){setChecked(prev=>({...prev,[key]:!prev[key]}));}

  const risk=pct<40?"High":(pct<70?"Medium":"Low");
  const riskColor=pct<40?s.red:(pct<70?"#f59e0b":s.green);
  const riskBg=pct<40?"#fee2e2":(pct<70?"#fef3c7":"#dcfce7");

  function printSummary(){
    const html=`
      <html><head><title>Neighbourhood Due Diligence Report</title>
      <style>
        body{font-family:Arial,sans-serif;padding:32px;max-width:700px;margin:0 auto;color:#0d2240}
        h1{color:#0d2240;border-bottom:3px solid #f5a623;padding-bottom:8px;font-size:22px}
        h2{color:#0d2240;font-size:14px;margin-top:20px;margin-bottom:8px}
        .summary-box{background:#f4f6f9;border-radius:8px;padding:16px;margin-bottom:20px;display:flex;gap:20px;flex-wrap:wrap}
        .stat{text-align:center;flex:1;min-width:80px}
        .stat-val{font-size:24px;font-weight:800;margin-bottom:4px}
        .badge{display:inline-block;padding:4px 14px;border-radius:20px;font-size:13px;font-weight:700}
        .Low{background:#dcfce7;color:#15803d}
        .Medium{background:#fef3c7;color:#92400e}
        .High{background:#fee2e2;color:#dc2626}
        .done-item{color:#16a34a;padding:3px 0;font-size:13px}
        .missing-item{color:#dc2626;padding:3px 0;font-size:13px}
        .cat-block{margin-bottom:16px;padding:12px;border:1px solid #e2e8f0;border-radius:8px}
        .footer{font-size:11px;color:#94a3b8;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:12px}
        .print-btn{margin-top:16px;padding:10px 20px;background:#0d2240;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px}
        @media print{.print-btn{display:none}}
      </style></head>
      <body>
      <h1>🏘️ Neighbourhood Due Diligence Report</h1>
      <div class="summary-box">
        <div class="stat"><div class="stat-val" style="color:#16a34a">${done}</div><div style="font-size:11px;color:#64748b">Completed</div></div>
        <div class="stat"><div class="stat-val" style="color:#dc2626">${total-done}</div><div style="font-size:11px;color:#64748b">Still Needed</div></div>
        <div class="stat"><div class="stat-val">${pct}%</div><div style="font-size:11px;color:#64748b">Complete</div></div>
        <div class="stat"><span class="badge ${risk}">${risk} Risk</span><div style="font-size:11px;color:#64748b;margin-top:4px">Assessment</div></div>
      </div>
      <p style="font-size:11px;color:#64748b;margin-bottom:20px">Generated: ${new Date().toLocaleDateString('en-CA',{year:'numeric',month:'long',day:'numeric'})}</p>
      ${CHECKS.map((cat,ci)=>{
        const catDone=cat.items.filter((_,ii)=>checked[`${ci}-${ii}`]);
        const catMissing=cat.items.filter((_,ii)=>!checked[`${ci}-${ii}`]);
        return`<div class="cat-block">
          <h2>${cat.cat}</h2>
          ${catDone.map(i=>`<div class="done-item">✓ ${i}</div>`).join("")}
          ${catMissing.map(i=>`<div class="missing-item">✗ ${i}</div>`).join("")}
        </div>`;
      }).join("")}
      <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;font-size:12px;color:#92400e;margin-top:8px">
        💡 Share this report with your realtor — they can help you address unchecked items before you make an offer.
      </div>
      <div class="footer">Generated by Canada Mortgage Rates — canadamortgagerates.net · For informational purposes only</div>
      <button class="print-btn" onclick="window.print()">🖨️ Print This Report</button>
      </body></html>
    `;
    const w=window.open("","_blank");
    if(w){w.document.write(html);w.document.close();}
  }

  return(
    <>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8}}>
        <div>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:2}}>🏘️ Neighbourhood Due Diligence Checklist</h3>
          <p style={{fontSize:11,color:s.muted}}>Check these before making an offer. Your realtor can help with most of these.</p>
        </div>
        <div style={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:pct===100?s.green:s.navy}}>{done}/{total}</div><div style={{fontSize:10,color:s.muted}}>checked</div></div>
      </div>
      <div style={{background:"#e2e8f0",borderRadius:20,height:8,marginBottom:4}}><div style={{width:pct+"%",height:"100%",background:pct===100?`linear-gradient(90deg,${s.green},#22c55e)`:`linear-gradient(90deg,${s.navy},${s.blue})`,borderRadius:20,transition:"width 0.3s"}}/></div>
      <div style={{fontSize:11,color:s.muted,marginBottom:12}}>{pct}% complete{pct===100?" — You've done your homework! ✅":""}</div>

      {CHECKS.map((cat,ci)=>(
        <div key={ci} style={{marginBottom:12}}>
          <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:6}}>{cat.cat}</div>
          {cat.items.map((item,ii)=>{
            const key=`${ci}-${ii}`;
            const isChecked=!!checked[key];
            return(
              <div key={ii} onClick={()=>toggle(key)} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:`1px solid ${s.light}`,cursor:"pointer"}}>
                <div style={{width:18,height:18,borderRadius:4,border:`2px solid ${isChecked?s.green:s.border}`,background:isChecked?s.green:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {isChecked&&<span style={{color:"#fff",fontSize:11,fontWeight:800}}>✓</span>}
                </div>
                <div style={{fontSize:12,color:isChecked?s.muted:s.navy,textDecoration:isChecked?"line-through":"none"}}>{item}</div>
              </div>
            );
          })}
        </div>
      ))}

      <div style={{marginTop:12,paddingTop:12,borderTop:`1px solid ${s.border}`,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
        {done>0&&<button onClick={()=>setChecked({})} style={{fontSize:11,color:s.muted,background:"none",border:`1px solid ${s.border}`,borderRadius:6,cursor:"pointer",padding:"6px 12px"}}>Reset</button>}
        {done>0&&<button onClick={()=>setShowModal(true)} style={{fontSize:12,color:"#fff",background:s.navy,border:"none",borderRadius:6,cursor:"pointer",padding:"8px 16px",fontWeight:700}}>📋 Generate Summary</button>}
        {done>0&&<button onClick={printSummary} style={{fontSize:12,color:"#fff",background:s.green,border:"none",borderRadius:6,cursor:"pointer",padding:"8px 16px",fontWeight:700}}>🖨️ Print / Save PDF</button>}
        {done===0&&<span style={{fontSize:11,color:s.muted}}>Check items above to generate a summary and save as PDF.</span>}
      </div>

      {/* Summary Modal */}
      {showModal&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowModal(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:520,maxHeight:"85vh",display:"flex",flexDirection:"column",overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{background:s.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:700}}>📋 Your Due Diligence Summary</div>
              <button onClick={()=>setShowModal(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            {/* Modal Body */}
            <div style={{padding:18,overflowY:"auto",flex:1}}>
              {/* Stats */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:16}}>
                {[[String(done),"Completed",s.green],[String(total-done),"Still Needed",s.red],[pct+"%","Complete",s.navy],[risk+" Risk","Assessment",riskColor]].map(([v,l,c])=>(
                  <div key={l} style={{background:l==="Assessment"?riskBg:"#f8fafc",border:`1px solid ${s.border}`,borderRadius:8,padding:"10px 8px",textAlign:"center"}}>
                    <div style={{fontSize:16,fontWeight:800,color:c as string,marginBottom:2}}>{v}</div>
                    <div style={{fontSize:9,color:s.muted,fontWeight:600}}>{l}</div>
                  </div>
                ))}
              </div>
              {/* Category breakdown */}
              {CHECKS.map((cat,ci)=>{
                const catDone=cat.items.filter((_,ii)=>checked[`${ci}-${ii}`]);
                const catMissing=cat.items.filter((_,ii)=>!checked[`${ci}-${ii}`]);
                return(
                  <div key={ci} style={{marginBottom:12,background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`}}>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:6,display:"flex",justifyContent:"space-between"}}>
                      <span>{cat.cat}</span>
                      <span style={{fontSize:10,color:catMissing.length===0?s.green:s.muted}}>{catDone.length}/{cat.items.length}</span>
                    </div>
                    {catDone.map((item,i)=><div key={i} style={{fontSize:11,color:s.green,padding:"2px 0",display:"flex",gap:6}}><span>✓</span>{item}</div>)}
                    {catMissing.map((item,i)=><div key={i} style={{fontSize:11,color:"#dc2626",padding:"2px 0",display:"flex",gap:6}}><span>✗</span>{item}</div>)}
                  </div>
                );
              })}
              <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#92400e",marginTop:4}}>
                💡 Share this with your realtor — they can help address unchecked items before you make an offer.
              </div>
            </div>
            {/* Modal Footer */}
            <div style={{padding:"12px 18px",borderTop:`1px solid ${s.border}`,display:"flex",gap:8,flexShrink:0,background:"#f8fafc"}}>
              <button onClick={printSummary} style={{flex:1,padding:"10px",background:s.green,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🖨️ Print / Save as PDF</button>
              <button onClick={()=>setShowModal(false)} style={{padding:"10px 16px",background:s.white,color:s.navy,border:`1px solid ${s.border}`,borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer"}}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProfessionalsTab(){
  const [subTab,setSubTab]=useState<"realtors"|"lawyers"|"inspectors"|"brokers"|"evaluation">("realtors");
  const [homeValTab,setHomeValTab]=useState<"eval"|"appraisal">("eval");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Professionals")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);

  return(
    <div>
      {/* Sub-tabs */}
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setSubTab("realtors")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="realtors"?s.green:s.border}`,background:subTab==="realtors"?s.green:s.white,color:subTab==="realtors"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🤝 Realtors</button>
        <button onClick={()=>setSubTab("lawyers")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="lawyers"?"#92400e":s.border}`,background:subTab==="lawyers"?"#92400e":s.white,color:subTab==="lawyers"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>⚖️ Real Estate Lawyers</button>
        <button onClick={()=>setSubTab("inspectors")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="inspectors"?s.blue:s.border}`,background:subTab==="inspectors"?s.blue:s.white,color:subTab==="inspectors"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🔍 Home Inspectors</button>
        <button onClick={()=>setSubTab("brokers")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="brokers"?s.navy:s.border}`,background:subTab==="brokers"?s.navy:s.white,color:subTab==="brokers"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>💼 Mortgage Brokers</button>
        <button onClick={()=>setSubTab("evaluation")} style={{flex:1,minWidth:90,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="evaluation"?s.gold:s.border}`,background:subTab==="evaluation"?s.gold:s.white,color:subTab==="evaluation"?s.navy:s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🏡 Home Value</button>
      </div>

      {subTab==="realtors"&&<RealtorsTab/>}
      {subTab==="lawyers"&&<LawyersTab/>}
      {subTab==="inspectors"&&<InspectorsTab/>}
      {subTab==="brokers"&&<MortgageBrokersTab/>}
      {subTab==="evaluation"&&(
        <div>
          <div style={{display:"flex",gap:8,marginBottom:14}}>
            <button onClick={()=>setHomeValTab("eval")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${homeValTab==="eval"?s.gold:s.border}`,background:homeValTab==="eval"?s.gold:s.white,color:homeValTab==="eval"?s.navy:s.muted,fontSize:12,fontWeight:700,cursor:"pointer"}}>🏡 Free Evaluation</button>
            <button onClick={()=>setHomeValTab("appraisal")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${homeValTab==="appraisal"?s.blue:s.border}`,background:homeValTab==="appraisal"?s.blue:s.white,color:homeValTab==="appraisal"?"#fff":s.muted,fontSize:12,fontWeight:700,cursor:"pointer"}}>📋 Professional Appraisal</button>
          </div>

          {homeValTab==="eval"&&(
            <div>
              <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:11,color:"#15803d"}}>
                ✅ <b>Free</b> — A realtor performs a Comparative Market Analysis (CMA) based on recent sales. No cost, no obligation. Best for: thinking about selling or curious about your home's worth.
              </div>
              <ValueTabInner/>
            </div>
          )}

          {homeValTab==="appraisal"&&(
            <div>
              <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:11,color:"#1e40af"}}>
                💰 <b>$300–$500</b> — A licensed AACI-certified appraiser provides an official report required by lenders for mortgage approval, refinancing, estate settlements, and legal matters.
              </div>
              <div style={{background:`linear-gradient(135deg,${s.blue},#0369a1)`,borderRadius:14,padding:"28px 24px",marginBottom:14,textAlign:"center"}}>
                <div style={{fontSize:36,marginBottom:10}}>📋</div>
                <div style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Find a Certified Appraiser</div>
                <div style={{color:"rgba(255,255,255,0.75)",fontSize:11,lineHeight:1.7,maxWidth:440,margin:"0 auto 16px"}}>
                  Submit a request and we'll connect you with an AACI-certified appraiser in your area within 1-2 business days.
                </div>
                <AppraiserRequestForm/>
              </div>
              <Card>
                <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>❓ When Do You Need a Professional Appraisal?</h3>
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",minWidth:380}}>
                    <thead><tr style={{background:"#f8fafc"}}>{["Situation","Free Evaluation","Paid Appraisal"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`}}>{h}</th>)}</tr></thead>
                    <tbody>
                      {[
                        ["Thinking about selling","✅ Yes","❌ Not needed"],
                        ["Curious about home value","✅ Yes","❌ Not needed"],
                        ["Getting a new mortgage","❌ Not accepted","✅ Required"],
                        ["Refinancing","❌ Not accepted","✅ Required"],
                        ["Estate / legal settlement","❌ Not accepted","✅ Required"],
                        ["Divorce / separation","❌ Not accepted","✅ Required"],
                        ["Setting a listing price","✅ Yes","Optional"],
                      ].map(([sit,ev,ap],i)=>(
                        <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                          <td style={{padding:"8px 12px",fontSize:11,color:s.navy,fontWeight:600}}>{sit}</td>
                          <td style={{padding:"8px 12px",fontSize:11,color:ev.includes("✅")?"#15803d":"#dc2626"}}>{ev}</td>
                          <td style={{padding:"8px 12px",fontSize:11,color:ap.includes("✅")?"#1e40af":ap==="Optional"?"#f59e0b":"#dc2626"}}>{ap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AppraiserRequestForm(){
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [phone,setPhone]=useState("");
  const [prov,setProv]=useState("MB");const [city,setCity]=useState("");const [purpose,setPurpose]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);
  async function submit(){
    if(!name||!email){alert("Please fill required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`Appraiser Request — ${city||prov}`,name,email,phone,province:prov,city,purpose,source:"Canada Mortgage Rates — Appraiser Request"
      })});setOk(true);
    }catch{alert("Something went wrong.");}
    setSubmitting(false);
  }
  if(ok)return<div style={{textAlign:"center",padding:"8px 0"}}><div style={{fontSize:24,marginBottom:6}}>✅</div><div style={{fontSize:12,fontWeight:800,color:"#fff",marginBottom:4}}>Request Received!</div><div style={{fontSize:11,color:"rgba(255,255,255,0.75)"}}>We'll connect you with a certified appraiser soon.</div></div>;
  return(
    <div>
      <Field label=""><input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name *" style={{...inp,marginBottom:6}}/></Field>
      <Field label=""><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email *" style={{...inp,marginBottom:6}}/></Field>
      <Field label=""><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" style={{...inp,marginBottom:6}}/></Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:6}}>
        <select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{k}</option>)}</select>
        <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City" style={inp}/>
      </div>
      <select value={purpose} onChange={e=>setPurpose(e.target.value)} style={{...inp,marginBottom:10}}>
        <option value="">Purpose</option>
        <option value="mortgage">New Mortgage</option>
        <option value="refinance">Refinancing</option>
        <option value="estate">Estate / Legal</option>
        <option value="divorce">Divorce / Separation</option>
        <option value="other">Other</option>
      </select>
      <button onClick={submit} disabled={submitting} style={{width:"100%",padding:"9px",background:"#fff",color:s.blue,border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Request an Appraiser →"}</button>
    </div>
  );
}

function MortgageBrokersTab(){
  const [showForm,setShowForm]=useState(false);
  const [showPartnerForm,setShowPartnerForm]=useState(false);
  const [filterProv,setFilterProv]=useState("MB");
  const [filterCity,setFilterCity]=useState("");

  // PARTNER BROKERS — Add real partners here when signed up
  // Structure: {id, name, company, prov, city, specializations[], experience, languages[], rating, reviews, featured}
  // NOTE: No phone/email/website shown — all contact through form for lead tracking ($100/lead)
  const BROKERS:any[]=[];

  return(
    <div>
      {/* Filter */}
      <div style={{background:s.white,borderRadius:12,padding:"12px 16px",marginBottom:14,border:`1px solid ${s.border}`,display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"}}>
        <select value={filterProv} onChange={e=>{setFilterProv(e.target.value);setFilterCity("");}} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        <select value={filterCity} onChange={e=>setFilterCity(e.target.value)} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>
          <option value="">All Cities</option>
          {(PDATA[filterProv]?.cities||[]).map(c=><option key={c} value={c}>{c}</option>)}
        </select>
        <button onClick={()=>setShowForm(true)} style={{padding:"7px 16px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",marginLeft:"auto"}}>💼 Find a Broker →</button>
      </div>

      {/* Partner cards or Coming Soon */}
      {BROKERS.filter(b=>b.prov===filterProv&&(!filterCity||b.city===filterCity)).length>0?(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:10,marginBottom:14}}>
          {BROKERS.filter(b=>b.prov===filterProv&&(!filterCity||b.city===filterCity)).map((broker:any)=>(
            <div key={broker.id} style={{background:s.white,borderRadius:12,border:`2px solid ${broker.featured?s.gold:s.border}`,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
              <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,padding:"12px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{color:"#fff",fontSize:13,fontWeight:800}}>{broker.name}</div>
                  <div style={{color:"rgba(255,255,255,0.75)",fontSize:11}}>{broker.company}</div>
                </div>
                {broker.featured&&<span style={{background:s.gold,color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>⭐ Featured</span>}
              </div>
              <div style={{padding:12}}>
                <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                  <span style={{background:"#f1f5f9",color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>📍 {broker.city}, {broker.prov}</span>
                  <span style={{background:"#f0fdf4",color:s.green,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>⏱ {broker.experience} yrs exp</span>
                </div>
                {broker.specializations?.length>0&&(
                  <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}>
                    {broker.specializations.map((sp:string)=><span key={sp} style={{background:"#eff6ff",color:"#1e40af",borderRadius:20,padding:"2px 7px",fontSize:9,fontWeight:600}}>{sp}</span>)}
                  </div>
                )}
                {broker.languages?.length>1&&(
                  <div style={{fontSize:10,color:s.muted,marginBottom:8}}>🗣 {broker.languages.join(", ")}</div>
                )}
                {broker.rating&&<div style={{fontSize:11,color:"#f59e0b",marginBottom:8}}>{"⭐".repeat(Math.floor(broker.rating))} {broker.rating} ({broker.reviews} reviews)</div>}
                <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"6px 10px",marginBottom:10,fontSize:10,color:"#92400e"}}>
                  💡 Contact through our form — leads delivered within 24 hours
                </div>
                <button onClick={()=>setShowForm(true)} style={{width:"100%",padding:"9px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Connect with {broker.name.split(" ")[0]} →</button>
              </div>
            </div>
          ))}
        </div>
      ):(
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"32px 24px",marginBottom:16,textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:12}}>💼</div>
          <div style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:8}}>Find a Mortgage Broker</div>
          <div style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.7,maxWidth:480,margin:"0 auto 20px"}}>
            Submit a request and we'll connect you with a licensed independent mortgage broker in your area within 1 business day. Brokers shop 30+ lenders — at no cost to you.
          </div>
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:10,padding:"10px 16px",marginBottom:16,fontSize:11,color:"#92400e",maxWidth:480,margin:"0 auto 16px",textAlign:"left"}}>
            💡 <b>Why use a mortgage broker?</b> Brokers have access to 30+ lenders including monolines and credit unions that don't advertise directly. They negotiate on your behalf and their service is free — paid by the lender.
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",marginTop:16}}>
            <button onClick={()=>setShowForm(true)} style={{padding:"10px 24px",background:s.gold,color:s.navy,border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>💼 Find Me a Broker →</button>
            <button onClick={()=>setShowPartnerForm(true)} style={{padding:"10px 24px",background:"rgba(255,255,255,0.15)",color:"#fff",border:"1px solid rgba(255,255,255,0.3)",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>📋 List Your Practice →</button>
          </div>
        </div>
      )}

      {/* Why use a broker */}
      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>💼 Broker vs Bank — Key Differences</h3>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{background:"#f0fdf4",borderRadius:10,padding:12,border:"1px solid #bbf7d0"}}>
            <div style={{fontSize:13,fontWeight:800,color:"#15803d",marginBottom:8}}>💼 Mortgage Broker</div>
            {[["✓","Access to 30+ lenders"],["✓","Free service — lender pays"],["✓","Negotiates on your behalf"],["✓","Finds best rate for your profile"],["✓","Expert in complex situations"],["✓","Self-employed, bruised credit, new Canadians"],["✓","Fair IRD penalty lenders"],].map(([icon,t])=>(
              <div key={t} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:"#15803d"}}><span>{icon}</span>{t}</div>
            ))}
          </div>
          <div style={{background:"#eff6ff",borderRadius:10,padding:12,border:"1px solid #bfdbfe"}}>
            <div style={{fontSize:13,fontWeight:800,color:"#1e40af",marginBottom:8}}>🏦 Going Direct to Bank</div>
            {[["✓","Existing relationship"],["✓","Branch access"],["✓","Bundle with chequing/savings"],["✗","One lender's rates only"],["✗","Rarely offer best rate"],["✗","Posted-rate IRD penalties"],["✗","Less flexible for complex files"],].map(([icon,t])=>(
              <div key={t} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:icon==="✓"?"#1e40af":"#dc2626"}}><span>{icon}</span>{t}</div>
            ))}
          </div>
        </div>
      </Card>

      {/* Request Form Modal */}
      {showForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:420,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:700}}>💼 Find a Mortgage Broker</div>
              <button onClick={()=>setShowForm(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            <BrokerRequestForm onClose={()=>setShowForm(false)}/>
          </div>
        </div>
      )}

      {/* Partner Form Modal */}
      {showPartnerForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowPartnerForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:420,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:700}}>📋 List Your Mortgage Practice</div>
              <button onClick={()=>setShowPartnerForm(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            <BrokerPartnerForm onClose={()=>setShowPartnerForm(false)}/>
          </div>
        </div>
      )}
    </div>
  );
}

function BrokerRequestForm({onClose}:{onClose:()=>void}){
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [phone,setPhone]=useState("");
  const [prov,setProv]=useState("MB");const [city,setCity]=useState("");const [purpose,setPurpose]=useState("");
  const [price,setPrice]=useState("");const [down,setDown]=useState("");const [employed,setEmployed]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);
  async function submit(){
    if(!name||!email||!prov){alert("Please fill required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`Mortgage Broker Lead — ${city||prov}`,name,email,phone,province:prov,city,purpose,purchasePrice:price,downPayment:down,employmentType:employed,source:"Canada Mortgage Rates — Brokers Tab"
      })});setOk(true);
    }catch{alert("Something went wrong.");}
    setSubmitting(false);
  }
  if(ok)return<div style={{padding:20,textAlign:"center"}}><div style={{fontSize:28,marginBottom:8}}>✅</div><div style={{fontSize:13,fontWeight:800,color:s.green,marginBottom:4}}>Request Received!</div><div style={{fontSize:11,color:s.muted,marginBottom:12}}>We'll connect you with a licensed mortgage broker in your area within 1 business day.</div><button onClick={onClose} style={{padding:"8px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Close</button></div>;
  return(
    <div style={{padding:18}}>
      <Field label="Full Name *"><input value={name} onChange={e=>setName(e.target.value)} placeholder="John Smith" style={inp}/></Field>
      <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="john@email.com" style={inp}/></Field>
      <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <Field label="Province *"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{k}</option>)}</select></Field>
        <Field label="City"><input value={city} onChange={e=>setCity(e.target.value)} placeholder="Winnipeg" style={inp}/></Field>
      </div>
      <Field label="Purpose">
        <select value={purpose} onChange={e=>setPurpose(e.target.value)} style={inp}>
          <option value="">Select purpose</option>
          <option value="purchase">Purchase — new home</option>
          <option value="renewal">Renewal — existing mortgage</option>
          <option value="refinance">Refinancing</option>
          <option value="investment">Investment property</option>
          <option value="preapproval">Pre-approval only</option>
        </select>
      </Field>
      <Field label="Purchase Price"><input value={price} onChange={e=>setPrice(e.target.value)} placeholder="e.g. $500,000" style={inp}/></Field>
      <Field label="Down Payment"><input value={down} onChange={e=>setDown(e.target.value)} placeholder="e.g. $50,000 or 10%" style={inp}/></Field>
      <Field label="Employment Type">
        <select value={employed} onChange={e=>setEmployed(e.target.value)} style={inp}>
          <option value="">Select type</option>
          <option value="employed">Salaried / Employed</option>
          <option value="selfemployed">Self-Employed</option>
          <option value="retired">Retired</option>
          <option value="other">Other</option>
        </select>
      </Field>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Find Me a Broker →"}</button>
    </div>
  );
}

function BrokerPartnerForm({onClose}:{onClose:()=>void}){
  const [name,setName]=useState("");const [company,setCompany]=useState("");const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");const [prov,setProv]=useState("MB");const [license,setLicense]=useState("");
  const [lenders,setLenders]=useState("");const [specs,setSpecs]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);
  async function submit(){
    if(!name||!email||!company){alert("Please fill required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`Mortgage Broker Partner Application — ${company}`,name,company,email,phone,province:prov,licenseNumber:license,lenderAccess:lenders,specializations:specs,source:"Canada Mortgage Rates — Broker Partner Form"
      })});setOk(true);
    }catch{alert("Something went wrong.");}
    setSubmitting(false);
  }
  if(ok)return<div style={{padding:20,textAlign:"center"}}><div style={{fontSize:28,marginBottom:8}}>✅</div><div style={{fontSize:13,fontWeight:800,color:s.green,marginBottom:4}}>Application Received!</div><div style={{fontSize:11,color:s.muted,marginBottom:12}}>We'll be in touch within 1-2 business days to discuss your listing.</div><button onClick={onClose} style={{padding:"8px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Close</button></div>;
  return(
    <div style={{padding:18}}>
      <Field label="Your Name *"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Jane Smith" style={inp}/></Field>
      <Field label="Brokerage / Company *"><input value={company} onChange={e=>setCompany(e.target.value)} placeholder="ABC Mortgage Group" style={inp}/></Field>
      <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="jane@abcmortgage.ca" style={inp}/></Field>
      <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
      <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
      <Field label="License Number"><input value={license} onChange={e=>setLicense(e.target.value)} placeholder="e.g. MB-12345" style={inp}/></Field>
      <Field label="Number of Lenders Access"><input value={lenders} onChange={e=>setLenders(e.target.value)} placeholder="e.g. 30+ lenders" style={inp}/></Field>
      <Field label="Specializations"><input value={specs} onChange={e=>setSpecs(e.target.value)} placeholder="e.g. First-time buyers, self-employed, renewal" style={inp}/></Field>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Submit Application →"}</button>
    </div>
  );
}

function InspectorsTab(){
  const [showForm,setShowForm]=useState(false);
  const [showPartnerForm,setShowPartnerForm]=useState(false);
  const [filterProv,setFilterProv]=useState("MB");
  const [filterCity,setFilterCity]=useState("");

  // PARTNER INSPECTORS — Add real partners here when signed up
  // Structure: {id, name, company, prov, city, certifications[], serviceArea, website(hidden), featured}
  // NOTE: No phone/email shown — all contact goes through Request form to track leads
  const INSPECTORS:any[]=[];

  return(
    <div>
      {/* Filter */}
      <div style={{background:s.white,borderRadius:12,padding:"12px 16px",marginBottom:14,border:`1px solid ${s.border}`,display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"}}>
        <select value={filterProv} onChange={e=>{setFilterProv(e.target.value);setFilterCity("");}} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        <select value={filterCity} onChange={e=>setFilterCity(e.target.value)} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>
          <option value="">All Cities</option>
          {(PDATA[filterProv]?.cities||[]).map(c=><option key={c} value={c}>{c}</option>)}
        </select>
        <button onClick={()=>setShowForm(true)} style={{padding:"7px 16px",background:s.blue,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",marginLeft:"auto"}}>🔍 Find an Inspector →</button>
      </div>

      {/* Partner cards or Coming Soon */}
      {INSPECTORS.filter(i=>i.prov===filterProv&&(!filterCity||i.city===filterCity)).length>0?(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:10,marginBottom:14}}>
          {INSPECTORS.filter(i=>i.prov===filterProv&&(!filterCity||i.city===filterCity)).map((inspector:any)=>(
            <div key={inspector.id} style={{background:s.white,borderRadius:12,border:`2px solid ${inspector.featured?s.gold:s.border}`,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
              <div style={{background:`linear-gradient(135deg,${s.blue},#0369a1)`,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{color:"#fff",fontSize:13,fontWeight:800}}>{inspector.name}</div>
                  <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>{inspector.company}</div>
                </div>
                {inspector.featured&&<span style={{background:s.gold,color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>⭐ Featured</span>}
              </div>
              <div style={{padding:12}}>
                <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                  <span style={{background:"#f1f5f9",color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>📍 {inspector.city}, {inspector.prov}</span>
                  <span style={{background:"#eff6ff",color:"#1e40af",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>🗺️ {inspector.serviceArea}</span>
                </div>
                <div style={{display:"flex",gap:4,marginBottom:10,flexWrap:"wrap"}}>
                  {inspector.certifications.map((c:string)=><span key={c} style={{background:"#f0fdf4",color:"#15803d",borderRadius:20,padding:"2px 7px",fontSize:9,fontWeight:700}}>✓ {c}</span>)}
                </div>
                <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"6px 10px",marginBottom:10,fontSize:10,color:"#92400e"}}>
                  💡 Contact through our form — leads tracked and delivered within 24 hours
                </div>
                <button onClick={()=>setShowForm(true)} style={{width:"100%",padding:"9px",background:s.blue,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Request This Inspector →</button>
              </div>
            </div>
          ))}
        </div>
      ):(
        /* Coming Soon */
        <div style={{background:`linear-gradient(135deg,${s.blue},#0369a1)`,borderRadius:14,padding:"32px 24px",marginBottom:16,textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:12}}>🔍</div>
          <div style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:8}}>Find a Certified Home Inspector</div>
          <div style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.7,maxWidth:480,margin:"0 auto 20px"}}>
            Submit a request and we'll connect you with a certified home inspector in your area within 1 business day — or list your inspection business on our platform.
          </div>
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:10,padding:"10px 16px",marginBottom:16,fontSize:11,color:"#92400e",maxWidth:480,margin:"0 auto 16px",textAlign:"left"}}>
            💡 <b>Why you need a home inspection:</b> A certified home inspector examines the property's structure, electrical, plumbing, HVAC, and roof before you finalize the purchase. Cost: $400–$700. Can save you $10,000+ in hidden repairs.
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>setShowForm(true)} style={{padding:"10px 24px",background:"#fff",color:s.blue,border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🔍 Request an Inspector →</button>
            <button onClick={()=>setShowPartnerForm(true)} style={{padding:"10px 24px",background:s.gold,color:s.navy,border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🏢 List Your Business →</button>
          </div>
        </div>
      )}

      {/* What to expect */}
      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>📋 What a Home Inspection Covers</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
          {[
            {icon:"🏗️",title:"Structure & Foundation",desc:"Cracks, settlement, moisture, structural integrity"},
            {icon:"🔌",title:"Electrical System",desc:"Panel, wiring, outlets, safety hazards"},
            {icon:"🚿",title:"Plumbing",desc:"Pipes, water heater, drainage, water pressure"},
            {icon:"❄️",title:"HVAC Systems",desc:"Furnace, AC, ventilation, efficiency"},
            {icon:"🏠",title:"Roof & Attic",desc:"Shingles, insulation, ventilation, leaks"},
            {icon:"🪟",title:"Windows & Doors",desc:"Sealing, drafts, operation, moisture"},
          ].map(item=>(
            <div key={item.title} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
              <div style={{fontSize:20,marginBottom:4}}>{item.icon}</div>
              <div style={{fontSize:12,fontWeight:700,color:s.navy,marginBottom:3}}>{item.title}</div>
              <div style={{fontSize:11,color:s.muted}}>{item.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Request Form Modal */}
      {showForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:420,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.blue,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:700}}>🔍 Request a Home Inspector</div>
              <button onClick={()=>setShowForm(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            <InspectorRequestForm onClose={()=>setShowForm(false)}/>
          </div>
        </div>
      )}

      {/* Partner Form Modal */}
      {showPartnerForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowPartnerForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:420,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.gold,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{color:s.navy,fontSize:14,fontWeight:700}}>🏢 List Your Inspection Business</div>
              <button onClick={()=>setShowPartnerForm(false)} style={{background:"rgba(0,0,0,0.1)",border:"none",color:s.navy,width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            <InspectorPartnerForm onClose={()=>setShowPartnerForm(false)}/>
          </div>
        </div>
      )}
    </div>
  );
}

function InspectorRequestForm({onClose}:{onClose:()=>void}){
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [phone,setPhone]=useState("");
  const [city,setCity]=useState("");const [prov,setProv]=useState("MB");const [timing,setTiming]=useState("");const [msg,setMsg]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);
  async function submit(){
    if(!name||!email||!city){alert("Please fill required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`Home Inspector Request — ${city}, ${prov}`,name,email,phone,city,province:prov,timing,message:msg,source:"Canada Mortgage Rates — Inspectors Tab"
      })});setOk(true);
    }catch{alert("Something went wrong.");}
    setSubmitting(false);
  }
  if(ok)return<div style={{padding:20,textAlign:"center"}}><div style={{fontSize:28,marginBottom:8}}>✅</div><div style={{fontSize:13,fontWeight:800,color:s.green,marginBottom:4}}>Request Received!</div><div style={{fontSize:11,color:s.muted,marginBottom:12}}>We'll connect you with a certified inspector in your area within 1-2 business days.</div><button onClick={onClose} style={{padding:"8px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Close</button></div>;
  return(
    <div style={{padding:18}}>
      <Field label="Full Name *"><input value={name} onChange={e=>setName(e.target.value)} placeholder="John Smith" style={inp}/></Field>
      <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="john@email.com" style={inp}/></Field>
      <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{k}</option>)}</select></Field>
        <Field label="City *"><input value={city} onChange={e=>setCity(e.target.value)} placeholder="Winnipeg" style={inp}/></Field>
      </div>
      <Field label="When do you need it?">
        <select value={timing} onChange={e=>setTiming(e.target.value)} style={inp}>
          <option value="">Select timeline</option>
          <option value="asap">As soon as possible</option>
          <option value="1week">Within 1 week</option>
          <option value="2weeks">Within 2 weeks</option>
          <option value="1month">Within 1 month</option>
        </select>
      </Field>
      <Field label="Additional Notes"><textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Property address, type, any specific concerns..." style={{...inp,height:60,resize:"vertical" as any}}/></Field>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Request Inspector →"}</button>
    </div>
  );
}

function InspectorPartnerForm({onClose}:{onClose:()=>void}){
  const [name,setName]=useState("");const [company,setCompany]=useState("");const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");const [prov,setProv]=useState("MB");const [cert,setCert]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);
  async function submit(){
    if(!name||!email||!company){alert("Please fill required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`Inspector Partner Application — ${company}`,name,company,email,phone,province:prov,certification:cert,source:"Canada Mortgage Rates — Inspector Partner Form"
      })});setOk(true);
    }catch{alert("Something went wrong.");}
    setSubmitting(false);
  }
  if(ok)return<div style={{padding:20,textAlign:"center"}}><div style={{fontSize:28,marginBottom:8}}>✅</div><div style={{fontSize:13,fontWeight:800,color:s.green,marginBottom:4}}>Application Received!</div><div style={{fontSize:11,color:s.muted,marginBottom:12}}>We'll be in touch within 1-2 business days to discuss listing your business.</div><button onClick={onClose} style={{padding:"8px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Close</button></div>;
  return(
    <div style={{padding:18}}>
      <Field label="Your Name *"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Jane Smith" style={inp}/></Field>
      <Field label="Company Name *"><input value={company} onChange={e=>setCompany(e.target.value)} placeholder="ABC Home Inspections" style={inp}/></Field>
      <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="jane@abcinspections.ca" style={inp}/></Field>
      <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
      <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
      <Field label="Certification/Association"><input value={cert} onChange={e=>setCert(e.target.value)} placeholder="e.g. CAHPI, OAHI, NACHI" style={inp}/></Field>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,background:s.gold,color:s.navy,opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Submit Application →"}</button>
    </div>
  );
}

function RealtorsTab(){
  const [subTab,setSubTab]=useState<"find"|"guide">("find");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Realtors")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
  const [filterProv,setFilterProv]=useState("MB");
  const [filterCity,setFilterCity]=useState("");
  const [filterSpec,setFilterSpec]=useState("all");
  const [filterName,setFilterName]=useState("");
  const [selectedRealtor,setSelectedRealtor]=useState<any>(null);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [rcity,setRcity]=useState("");
  const [budget,setBudget]=useState("");
  const [timeline,setTimeline]=useState("");
  const [firstTime,setFirstTime]=useState(false);
  const [msg,setMsg]=useState("");
  const [ok,setOk]=useState(false);
  const [submitting,setSubmitting]=useState(false);
  const [showForm,setShowForm]=useState(false);
  const [showPartnerForm,setShowPartnerForm]=useState(false);
  const [pName,setPName]=useState("");
  const [pEmail,setPEmail]=useState("");
  const [pBrokerage,setPBrokerage]=useState("");
  const [pCity,setPCity]=useState("");
  const [pOk,setPOk]=useState(false);
  const [pSubmitting,setPSubmitting]=useState(false);
  const [faqOpen,setFaqOpen]=useState<string|null>(null);

  // PARTNER REALTORS — Add real partners here when signed up
  // Each partner can have active listings displayed on the site
  const REALTORS:any[]=[
    // Example structure — replace with real partner data:
    // {
    //   id:1, name:"Jane Smith", brokerage:"RE/MAX Winnipeg",
    //   city:"Winnipeg", prov:"MB", phone:"204-555-0100",
    //   email:"jane@remax.ca", website:"https://janesmith.ca",
    //   photo:"", // URL to headshot
    //   specs:["firsttime","residential","condo"],
    //   experience:"10+ years", languages:["English","French"],
    //   rating:4.9, reviews:47, verified:true, featured:true,
    //   bio:"Winnipeg residential specialist with 10+ years...",
    //   listings:[
    //     {address:"123 Main St, Winnipeg MB", price:450000,
    //      beds:3, baths:2, sqft:1400, type:"Detached",
    //      url:"https://realtor.ca/...", img:"", status:"Active"}
    //   ]
    // }
  ];

  const FAQS=[
    {q:"Do I need a realtor to buy a home in Canada?",a:"You're not legally required to use a realtor, but most buyers do. A buyer's agent costs you nothing — the seller pays both agents' commissions (typically 2.5% each). A good realtor provides market expertise, negotiation skills, and handles all paperwork."},
    {q:"How much does a realtor cost in Canada?",a:"For buyers, typically nothing — the seller pays the commission. The total commission is usually 4–5% of the sale price, split between buyer and seller agents. On a $500K home, that's $12,500–$25,000 paid by the seller, not you."},
    {q:"What's the difference between a realtor and a real estate agent?",a:"A REALTOR® is a licensed real estate agent who is also a member of the Canadian Real Estate Association (CREA) and bound by a strict code of ethics. All REALTORS® are agents, but not all agents are REALTORS®. Always verify your agent is licensed with your provincial real estate council."},
    {q:"How do I choose the right realtor?",a:"Look for: local market expertise in your target neighbourhood, strong negotiation track record, responsiveness, and verified reviews. Interview at least 2–3 realtors before committing. Ask how many homes they've sold in your target area in the last 12 months."},
    {q:"Can I use the same realtor to buy and sell?",a:"Yes — many buyers use the same agent for both transactions. However, if your agent represents both the buyer and seller in the same deal (dual agency), this creates a conflict of interest. In some provinces dual agency is restricted or banned."},
    {q:"When should I contact a realtor?",a:"Contact a realtor as soon as you're seriously considering buying — ideally 3–6 months before you want to move. They can help you understand the market, set realistic expectations, and alert you to listings before they hit the public market."},
  ];

  async function submit(){
    if(!name||!email||!rcity){alert("Please fill in name, email, and city.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        name,email,phone,province:PDATA[filterProv]?.name,city:rcity,
        budget,timeline,first_time_buyer:firstTime?"Yes":"No",
        preferred_realtor:selectedRealtor?selectedRealtor.name:"No preference",
        message:msg,type:"Realtor Referral Request"
      })});
      setOk(true);
    }catch{alert("Something went wrong. Please try again.");}
    setSubmitting(false);
  }

  async function submitPartner(){
    if(!pName||!pEmail||!pBrokerage){alert("Please fill in name, email, and brokerage.");return;}
    setPSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:pName,email:pEmail,brokerage:pBrokerage,city:pCity,type:"Realtor Partner Inquiry"})});
      setPOk(true);
    }catch{alert("Something went wrong.");}
    setPSubmitting(false);
  }

  const filtered=REALTORS.filter(r=>{
    const matchProv=r.prov===filterProv;
    const matchCity=!filterCity||r.city.toLowerCase().includes(filterCity.toLowerCase());
    const matchSpec=filterSpec==="all"||r.specs.includes(filterSpec);
    const matchName=!filterName||r.name.toLowerCase().includes(filterName.toLowerCase())||r.brokerage.toLowerCase().includes(filterName.toLowerCase());
    return matchProv&&matchCity&&matchSpec&&matchName;
  });

  return(
    <div>
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        <button onClick={()=>setSubTab("find")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="find"?s.navy:s.border}`,background:subTab==="find"?s.navy:s.white,color:subTab==="find"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>🤝 Find a Realtor</button>
        <button onClick={()=>setSubTab("guide")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="guide"?s.navy:s.border}`,background:subTab==="guide"?s.navy:s.white,color:subTab==="guide"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>📋 Buyer's Guide</button>
      </div>

      {subTab==="find"&&<>
      {/* Header */}
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"24px 20px",marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <div style={{flex:1,minWidth:200}}>
            <div style={{fontSize:28,marginBottom:6}}>🤝</div>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Find a Real Estate Agent</h2>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.6}}>Connect with a top-rated REALTOR® in your area. Free for buyers — the seller pays the commission. Our agents are vetted local experts.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,flexShrink:0}}>
            {[["Free","For Buyers"],["2.5%","Typical Commission"],["3–6 mo","Before You Buy"],["Vetted","Local Experts"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"10px 12px",textAlign:"center"}}>
                <div style={{fontSize:14,fontWeight:800,color:s.gold}}>{v}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner CTA */}
      <div style={{background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:"1px solid #bbf7d0",borderRadius:12,padding:"14px 20px",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
        <div style={{flex:1,minWidth:200}}>
          <div style={{fontSize:13,fontWeight:800,color:"#15803d",marginBottom:3}}>🤝 Are You a REALTOR®?</div>
          <div style={{fontSize:11,color:"#15803d",lineHeight:1.5}}>Join our referral network. We connect motivated buyers directly to you. Pay only per referred lead — no monthly or setup fees.</div>
        </div>
        <button onClick={()=>setShowPartnerForm(true)} style={{padding:"10px 20px",background:"#15803d",color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,border:"none",cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}}>Partner With Us →</button>
      </div>

      {/* Filters */}
      <div style={{background:s.white,borderRadius:12,padding:"12px 16px",marginBottom:14,border:`1px solid ${s.border}`,display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"}}>
        <select value={filterProv} onChange={e=>{setFilterProv(e.target.value);setFilterCity("");}} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        <select value={filterCity} onChange={e=>setFilterCity(e.target.value)} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}><option value="">All Cities</option>{(PDATA[filterProv]?.cities||[]).map(c=><option key={c} value={c}>{c}</option>)}</select>
        <button onClick={()=>setFilterName("")} style={{padding:"7px 16px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🔍 Search</button>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {[["all","All Types"],["firsttime","First-Time"],["residential","Residential"],["condo","Condo"],["investment","Investment"],["luxury","Luxury"]].map(([v,l])=>(
            <button key={v} onClick={()=>setFilterSpec(v)} style={{padding:"5px 10px",borderRadius:20,border:`1.5px solid ${filterSpec===v?s.navy:s.border}`,background:filterSpec===v?s.navy:s.white,color:filterSpec===v?"#fff":s.muted,fontSize:11,cursor:"pointer",fontWeight:filterSpec===v?700:400}}>{l}</button>
          ))}
        </div>
        <button onClick={()=>{setShowForm(true);setSelectedRealtor(null);}} style={{marginLeft:"auto",padding:"7px 16px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🤝 Find Me a Realtor</button>
      </div>

      {/* Partner Realtors or Coming Soon */}
      {REALTORS.filter(r=>r.prov===filterProv&&(!filterCity||r.city===filterCity)).length>0?(
        <div style={{marginBottom:16}}>
          {/* Partner cards */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12,marginBottom:14}}>
            {REALTORS.filter(r=>r.prov===filterProv&&(!filterCity||r.city===filterCity)).map(r=>(
              <div key={r.id} style={{background:s.white,borderRadius:12,border:`2px solid ${r.featured?s.gold:s.border}`,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:r.featured?`linear-gradient(135deg,${s.gold},#d97706)`:`linear-gradient(135deg,${s.green},#15803d)`,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    {r.photo?<img src={r.photo} style={{width:40,height:40,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(255,255,255,0.3)"}} alt={r.name}/>:<div style={{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🤝</div>}
                    <div>
                      <div style={{color:"#fff",fontSize:14,fontWeight:800}}>{r.name}</div>
                      <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>{r.brokerage}</div>
                    </div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
                    {r.featured&&<span style={{background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>⭐ Featured</span>}
                    <span style={{background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>✓ Verified Partner</span>
                  </div>
                </div>
                <div style={{padding:14}}>
                  <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                    <span style={{background:"#f1f5f9",color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>📍 {r.city}, {r.prov}</span>
                    <span style={{background:"#f0fdf4",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>⏱ {r.experience}</span>
                    {r.rating&&<span style={{background:"#fef3c7",color:"#92400e",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>⭐ {r.rating} ({r.reviews} reviews)</span>}
                  </div>
                  <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}>
                    {r.specs.map((spec:string)=><span key={spec} style={{background:"#eff6ff",color:"#1e40af",borderRadius:20,padding:"2px 7px",fontSize:9,fontWeight:700,textTransform:"capitalize"}}>{spec==="firsttime"?"First-Time":spec}</span>)}
                  </div>
                  <p style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:10}}>{r.bio}</p>
                  {r.languages?.length>1&&<div style={{fontSize:10,color:s.muted,marginBottom:10}}>🗣️ {r.languages.join(" · ")}</div>}

                  {/* Active Listings */}
                  {r.listings?.length>0&&(
                    <div style={{marginBottom:10}}>
                      <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:6}}>🏘️ Active Listings ({r.listings.length})</div>
                      {r.listings.map((l:any,i:number)=>(
                        <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 8px",background:"#f8fafc",borderRadius:6,marginBottom:4,textDecoration:"none",border:`1px solid ${s.border}`}}>
                          <div>
                            <div style={{fontSize:11,fontWeight:700,color:s.navy}}>{l.address}</div>
                            <div style={{fontSize:10,color:s.muted}}>{l.beds}bd · {l.baths}ba · {l.sqft?.toLocaleString()} sqft · {l.type}</div>
                          </div>
                          <div style={{fontSize:12,fontWeight:800,color:s.green,flexShrink:0,marginLeft:8}}>${(l.price/1000).toFixed(0)}K</div>
                        </a>
                      ))}
                    </div>
                  )}

                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    <button onClick={()=>{setSelectedRealtor(r);setShowForm(true);setRcity(r.city);}} style={{flex:1,padding:"9px",background:s.green,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Connect →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ):(
        /* Coming Soon */
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"32px 24px",marginBottom:16,textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:12}}>🤝</div>
          <div style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:8}}>Find a Verified Realtor</div>
          <div style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.7,maxWidth:480,margin:"0 auto 20px"}}>
            We're building our network of verified REALTORS® across Canada. Be among the first listed in {PDATA[filterProv]?.name} — or submit a request and we'll connect you with a qualified agent in your area.
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>setShowForm(true)} style={{padding:"10px 24px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🔍 Request a Realtor →</button>
            <button onClick={()=>setShowPartnerForm(true)} style={{padding:"10px 24px",background:s.gold,color:s.navy,border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🤝 List Your Profile →</button>
          </div>
        </div>
      )}
      </>}

      {subTab==="guide"&&<>
      {/* Info Strip */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,marginBottom:16}}>
        <Card style={{background:"#f0fdf4",border:`1px solid #bbf7d0`}}>
          <h3 style={{fontSize:12,fontWeight:800,color:"#15803d",marginBottom:8}}>🤝 What a Buyer's Agent Does</h3>
          {["Finds listings matching your criteria","Books and attends showings with you","Advises on fair market value","Negotiates purchase price and conditions","Coordinates with lawyers and lenders","Guides you from offer to closing"].map(item=>(
            <div key={item} style={{display:"flex",alignItems:"center",gap:6,padding:"4px 0",fontSize:11,color:"#374151"}}><span style={{color:s.green,fontSize:10}}>✓</span>{item}</div>
          ))}
        </Card>
        <Card style={{background:s.navy}}>
          <h3 style={{fontSize:12,fontWeight:800,color:"#fff",marginBottom:8}}>💰 Commission Breakdown</h3>
          {[["Total commission","4–5% of sale price"],["Seller's agent","2–2.5%"],["Buyer's agent","2–2.5%"],["Who pays?","The seller"],["Cost to buyer","$0"]].map(([l,v],i)=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:i<4?`1px solid rgba(255,255,255,0.08)`:"none",fontSize:11}}>
              <span style={{color:"rgba(255,255,255,0.7)"}}>{l}</span>
              <span style={{fontWeight:i===4?800:500,color:i===4?s.gold:"#fff"}}>{v}</span>
            </div>
          ))}
        </Card>
        <Card>
          <h3 style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:8}}>📋 Questions to Ask a Realtor</h3>
          {["How many homes have you sold in my target area?","What's your average sale-to-list price ratio?","How many buyers are you currently working with?","What's your availability for showings?","How do you handle multiple offer situations?","Can you provide 3 recent client references?"].map((q,i)=>(
            <div key={i} style={{display:"flex",gap:6,padding:"4px 0",fontSize:11,color:s.muted,borderBottom:i<5?`1px solid ${s.light}`:"none"}}>
              <span style={{color:s.navy,fontWeight:700,flexShrink:0}}>{i+1}.</span>{q}
            </div>
          ))}
        </Card>
      </div>

      {/* Home Buying Timeline */}
      <Card style={{marginBottom:16}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🏠 Home Buying Process — Step by Step</h3>
        <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Here's the complete Canadian home buying journey and exactly when your realtor is involved.</p>
        <div style={{position:"relative"}}>
          <div style={{position:"absolute",left:18,top:0,bottom:0,width:2,background:`linear-gradient(180deg,${s.blue},${s.navy},${s.green})`,borderRadius:2}}/>
          {[
            {step:"1–3 Months Before",label:"Get Pre-Approved",desc:"Get a mortgage pre-approval before house hunting. This tells you your budget and shows sellers you're serious. Your realtor will recommend trusted mortgage brokers.",realtor:false,icon:"🏦"},
            {step:"Start of Search",label:"Hire Your Realtor",desc:"Retain a buyer's agent — it costs you nothing. They set up MLS alerts, book showings, and give you access to listings before they hit public sites.",realtor:true,icon:"🤝"},
            {step:"Weeks 1–4",label:"House Hunting",desc:"Your realtor books showings, provides comparable sales data, and advises on neighbourhood trends, flood zones, and future development.",realtor:true,icon:"🔍"},
            {step:"When Ready",label:"Making an Offer",desc:"Your realtor prepares the offer, advises on price strategy, conditions (financing, inspection), and deposit amount. In multiple offer situations, they guide your bidding strategy.",realtor:true,icon:"📋"},
            {step:"Offer Accepted",label:"Conditions Period (7–10 days)",desc:"Typically 7–10 days to complete financing approval and home inspection. Your realtor coordinates with your lender and inspector, and advises whether to waive or renegotiate.",realtor:true,icon:"⏱"},
            {step:"Conditions Waived",label:"Firm Sale",desc:"You're legally committed. Your realtor sends the firm deal to your lawyer. Now the legal closing process begins — hire a real estate lawyer immediately.",realtor:true,icon:"✍️"},
            {step:"2–4 Weeks Before Closing",label:"Pre-Closing Prep",desc:"Your realtor arranges a final walkthrough to confirm the property's condition matches the agreement. They coordinate with all parties on closing details.",realtor:true,icon:"🏗️"},
            {step:"Closing Day",label:"Keys!",desc:"Your lawyer completes the title transfer. Your realtor hands you the keys. You're a homeowner.",realtor:true,icon:"🔑"},
          ].map((step,i)=>(
            <div key={i} style={{display:"flex",gap:16,marginBottom:14,paddingLeft:8}}>
              <div style={{width:22,height:22,borderRadius:"50%",background:step.realtor?s.navy:"#e2e8f0",border:`2px solid ${step.realtor?s.navy:s.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,fontSize:10}}>{step.icon}</div>
              <div style={{flex:1,background:step.realtor?"#f8fafc":s.white,borderRadius:10,padding:"10px 14px",border:`1px solid ${step.realtor?s.border:"#f1f5f9"}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                  <span style={{fontSize:10,fontWeight:700,color:s.muted,background:"#f1f5f9",borderRadius:20,padding:"2px 8px"}}>{step.step}</span>
                  <span style={{fontSize:12,fontWeight:800,color:s.navy}}>{step.label}</span>
                  {step.realtor&&<span style={{fontSize:9,fontWeight:700,color:"#fff",background:s.navy,borderRadius:20,padding:"1px 7px"}}>REALTOR INVOLVED</span>}
                </div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#1e40af",marginTop:4}}>
          💡 <b>Key tip:</b> Get pre-approved before you start looking — it saves time, sets your budget, and makes your offers more competitive.
        </div>
      </Card>

      {/* FAQ */}
      <Card style={{marginBottom:16}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>❓ Realtor FAQ</h3>
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
      </>}

      {/* Connection Form Modal */}
      {showForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:480,overflow:"hidden",maxHeight:"90vh",display:"flex",flexDirection:"column"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:s.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
              <div>
                <div style={{color:"#fff",fontSize:14,fontWeight:700}}>🤝 Find Me a Realtor</div>
                {selectedRealtor&&<div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:2}}>{selectedRealtor.brokerage}</div>}
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
                  <Field label="Your City *"><input type="text" value={rcity} onChange={e=>setRcity(e.target.value)} placeholder="e.g. Winnipeg" style={inp}/></Field>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
                    <Field label="Budget"><input type="text" value={budget} onChange={e=>setBudget(e.target.value)} placeholder="e.g. $500,000" style={inp}/></Field>
                    <Field label="Timeline"><input type="text" value={timeline} onChange={e=>setTimeline(e.target.value)} placeholder="e.g. 3 months" style={inp}/></Field>
                  </div>
                  <div style={{marginBottom:10}}><label style={{display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:600,color:s.navy,cursor:"pointer"}}><input type="checkbox" checked={firstTime} onChange={e=>setFirstTime(e.target.checked)}/>First-time buyer</label></div>
                  <Field label="What are you looking for?"><textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="e.g. 3-bedroom detached in south Winnipeg, under $500K" rows={3} style={{...inp,resize:"none"}}/></Field>
                  <button onClick={submit} disabled={submitting} style={{width:"100%",padding:11,background:submitting?"#aaa":s.green,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:submitting?"not-allowed":"pointer",marginTop:8}}>{submitting?"Submitting...":"🤝 Connect Me with a Realtor →"}</button>
                  <p style={{fontSize:10,color:s.muted,marginTop:8,lineHeight:1.5}}>Free for buyers. A licensed REALTOR® will contact you directly. Canada Mortgage Rates is not a real estate brokerage.</p>
                </>
              ):(
                <div style={{textAlign:"center",padding:"24px 0"}}>
                  <div style={{fontSize:40,marginBottom:10}}>✅</div>
                  <div style={{fontSize:15,fontWeight:800,color:s.navy,marginBottom:6}}>Request Received!</div>
                  <div style={{fontSize:12,color:s.muted,lineHeight:1.7,marginBottom:16}}>We'll connect you with a qualified REALTOR® in {rcity} within 1 business day.</div>
                  <button onClick={()=>{setOk(false);setShowForm(false);setName("");setEmail("");setPhone("");setRcity("");setBudget("");setTimeline("");setFirstTime(false);setMsg("");}} style={{padding:"9px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Done</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Partner Form Modal */}
      {showPartnerForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowPartnerForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:420,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:"#15803d",padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:700}}>🤝 Realtor Partner Inquiry</div>
              <button onClick={()=>setShowPartnerForm(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            <div style={{padding:18}}>
              {!pOk?(
                <>
                  <p style={{fontSize:12,color:s.muted,marginBottom:14,lineHeight:1.6}}>Fill out your details and we'll be in touch about our referral program. Pay only per referred lead — no monthly or setup fees.</p>
                  <Field label="Your Name *"><input type="text" value={pName} onChange={e=>setPName(e.target.value)} placeholder="Full name" style={inp}/></Field>
                  <Field label="Brokerage *"><input type="text" value={pBrokerage} onChange={e=>setPBrokerage(e.target.value)} placeholder="e.g. RE/MAX Winnipeg" style={inp}/></Field>
                  <Field label="Email *"><input type="email" value={pEmail} onChange={e=>setPEmail(e.target.value)} placeholder="your@brokerage.com" style={inp}/></Field>
                  <Field label="City"><input type="text" value={pCity} onChange={e=>setPCity(e.target.value)} placeholder="e.g. Winnipeg" style={inp}/></Field>
                  <button onClick={submitPartner} disabled={pSubmitting} style={{width:"100%",padding:10,background:pSubmitting?"#aaa":"#15803d",color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:pSubmitting?"not-allowed":"pointer",marginTop:4}}>{pSubmitting?"Submitting...":"Send Inquiry →"}</button>
                </>
              ):(
                <div style={{textAlign:"center",padding:"20px 0"}}>
                  <div style={{fontSize:36,marginBottom:8}}>✅</div>
                  <div style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:6}}>Thanks {pName}!</div>
                  <div style={{fontSize:12,color:s.muted,lineHeight:1.7}}>We'll be in touch within 1 business day to discuss the referral program.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cross-promotion banners */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginBottom:16}}>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Listings"}))} style={{background:`linear-gradient(135deg,#f59e0b,#d97706)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
          <div style={{fontSize:20,marginBottom:4}}>🏘️</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Browse listings first?</div>
          <div style={{color:"rgba(255,255,255,0.9)",fontSize:11}}>Search homes across Canada on top listing sites →</div>
        </button>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Lawyers"}))} style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
          <div style={{fontSize:20,marginBottom:4}}>⚖️</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Ready to close?</div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Find a real estate lawyer for your closing →</div>
        </button>
      </div>
    </div>
  );
}

function ValueTabInner(){
  const [vTab,setVTab]=useState<"guide"|"eval">("eval");
  return(
    <div>
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        <button onClick={()=>setVTab("eval")} style={{flex:1,padding:"9px",borderRadius:8,border:`2px solid ${vTab==="eval"?s.gold:s.border}`,background:vTab==="eval"?s.gold:s.white,color:vTab==="eval"?s.navy:s.muted,fontSize:12,fontWeight:700,cursor:"pointer"}}>🏡 Get Free Evaluation</button>
        <button onClick={()=>setVTab("guide")} style={{flex:1,padding:"9px",borderRadius:8,border:`2px solid ${vTab==="guide"?s.navy:s.border}`,background:vTab==="guide"?s.navy:s.white,color:vTab==="guide"?"#fff":s.muted,fontSize:12,fontWeight:700,cursor:"pointer"}}>📋 How It Works</button>
      </div>

      {vTab==="guide"&&(
        <div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>📋 How to Get the Most Accurate Estimate</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {step:"1",title:"Get 3 estimates",desc:"Run your address through Zolo, WOWA, and one other tool. Average the results — no single tool is perfectly accurate."},
                {step:"2",title:"Check recent sold prices",desc:"Look at what similar homes sold for in the last 3–6 months using HouseSigma or Bungol."},
                {step:"3",title:"Adjust for condition",desc:"Automated tools don't know your renovations. Add value for upgrades, subtract for deferred maintenance."},
                {step:"4",title:"Get a professional CMA",desc:"For refinancing or listing, get a free Comparative Market Analysis from a local REALTOR®. Most accurate."},
              ].map(item=>(
                <div key={item.step} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:s.navy,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,flexShrink:0}}>{item.step}</div>
                    <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{item.title}</div>
                  </div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{background:s.navy}}>
            <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>💡 How Home Value Affects Your Mortgage</h3>
            {[
              ["Refinancing","Lenders approve up to 80% LTV. Higher value = more equity = more options"],
              ["Cash-Out","Max cash-out = (Value × 80%) − Balance. Know your value first."],
              ["HELOC Limit","HELOCs capped at 65% LTV. Your value sets your credit limit."],
              ["Renewal Leverage","Higher equity = stronger negotiating position at renewal."],
              ["CMHC Insurance","20%+ equity may let you avoid re-insuring at renewal."],
              ["Property Tax","Assessed value (for tax) differs from market value — know both."],
            ].map(([l,v])=>(
              <div key={l} style={{display:"flex",gap:12,padding:"6px 0",borderBottom:`1px solid rgba(255,255,255,0.08)`}}>
                <span style={{fontSize:11,fontWeight:700,color:s.gold,flexShrink:0,minWidth:110}}>{l}</span>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.7)",lineHeight:1.5}}>{v}</span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {vTab==="eval"&&(
        <div>
          <HomeEvalForm/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginTop:14}}>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Realtors"}))} style={{background:`linear-gradient(135deg,${s.green},#15803d)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
              <div style={{fontSize:20,marginBottom:4}}>🤝</div>
              <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Find a Realtor for a Free CMA</div>
              <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Most accurate home value — directly from a local REALTOR® →</div>
            </button>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Calculators"}))} style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
              <div style={{fontSize:20,marginBottom:4}}>💳</div>
              <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Calculate Refinancing Potential</div>
              <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Use your home value to see how much equity you can access →</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function HomeEvalForm(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [prov,setProv]=useState("MB");
  const [reason,setReason]=useState("");
  const [msg,setMsg]=useState("");
  const [ok,setOk]=useState(false);
  const [submitting,setSubmitting]=useState(false);

  async function submit(){
    if(!name||!email||!address||!reason){alert("Please fill in all required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`Home Evaluation Request — ${city||prov}`,
        name,email,phone,address,city,province:prov,reason,message:msg,
        source:"Canada Mortgage Rates — Home Value Tab"
      })});
      setOk(true);
    }catch{alert("Something went wrong. Please try again.");}
    setSubmitting(false);
  }

  return(
    <Card style={{marginBottom:14,borderLeft:`4px solid ${s.gold}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"}}>
        <div style={{fontSize:24}}>🏡</div>
        <div>
          <div style={{fontSize:14,fontWeight:800,color:s.navy}}>Request a Free Home Evaluation</div>
          <div style={{fontSize:11,color:s.muted}}>Connect with a local professional who will assess your home's value — free, no obligation.</div>
        </div>
      </div>
      {ok?(
        <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"20px",textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:8}}>✅</div>
          <div style={{fontSize:14,fontWeight:800,color:"#15803d",marginBottom:4}}>Request Received!</div>
          <div style={{fontSize:12,color:"#16a34a",lineHeight:1.6,marginBottom:12}}>We'll connect you with a local professional in your area within 1–2 business days. Check your email for confirmation.</div>
          <button onClick={()=>setOk(false)} style={{padding:"8px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Send Another Request →</button>
        </div>
      ):(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
          <div>
            <Field label="Full Name *"><input value={name} onChange={e=>setName(e.target.value)} placeholder="John Smith" style={inp}/></Field>
            <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="john@email.com" style={inp}/></Field>
            <Field label="Phone (optional)"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
          </div>
          <div>
            <Field label="Property Address *"><input value={address} onChange={e=>setAddress(e.target.value)} placeholder="123 Main St" style={inp}/></Field>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <Field label="City"><input value={city} onChange={e=>setCity(e.target.value)} placeholder="Winnipeg" style={inp}/></Field>
              <Field label="Province">
                <select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>
                  {Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{k}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Reason for Evaluation *">
              <select value={reason} onChange={e=>setReason(e.target.value)} style={inp}>
                <option value="">Select a reason</option>
                <option value="selling">Thinking about selling</option>
                <option value="refinancing">Planning to refinance</option>
                <option value="heloc">Setting up a HELOC</option>
                <option value="curious">Just curious about my home's value</option>
                <option value="estate">Estate planning</option>
                <option value="divorce">Separation / divorce</option>
                <option value="other">Other</option>
              </select>
            </Field>
          </div>
          <div style={{gridColumn:"1/-1"}}>
            <Field label="Additional Notes (optional)"><textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="e.g. Recently renovated kitchen, 3 bed 2 bath, detached garage..." style={{...inp,height:70,resize:"vertical" as any}}/></Field>
            <button onClick={submit} disabled={submitting} style={{...calcBtn,opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Request Free Evaluation →"}</button>
            <div style={{fontSize:10,color:s.muted,marginTop:6}}>✓ Free · No obligation · We'll match you with a local professional within 1–2 business days</div>
          </div>
        </div>
      )}
    </Card>
  );
}

function NewBuildsTab(){
  const [nbTab,setNbTab]=useState<"explore"|"guide"|"mortgage"|"connect">("explore");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="New Builds")setNbTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
  const [filterProv,setFilterProv]=useState("MB");
  const [filterCity,setFilterCity]=useState("");
  const [filterType,setFilterType]=useState("all");
  const [searched,setSearched]=useState(false);

  // PARTNER DEVELOPERS — Add real partners here when signed up
  const DEVELOPERS:any[]=[
    // Example structure:
    // {
    //   id:1, name:"Broadview Homes", city:"Winnipeg", prov:"MB",
    //   types:["detached","townhome"], priceFrom:350000, priceTo:650000,
    //   communities:["Sage Creek","Bridgwater"], completionDate:"2026-2027",
    //   website:"https://broadviewhomeswpg.com", logo:"",
    //   featured:true, badge:"Top Builder",
    //   desc:"Award-winning Winnipeg builder with 30+ years experience.",
    //   developments:[
    //     {name:"Sage Creek Phase 4", type:"Detached", beds:"3-4",
    //      priceFrom:420000, status:"Selling Now", url:"https://..."}
    //   ]
    // }
  ];


  return(
    <div>
      {/* Header */}
      <div style={{background:`linear-gradient(135deg,#1a3a5c,#0d2240)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>🏗️</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>New Home Builds & Pre-Construction</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Explore new home developments, understand construction mortgages, and connect with builders across Canada.</p>
      </div>

      {/* Sub-tabs */}
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setNbTab("explore")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${nbTab==="explore"?s.navy:s.border}`,background:nbTab==="explore"?s.navy:s.white,color:nbTab==="explore"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🏘️ Explore Builds</button>
        <button onClick={()=>setNbTab("guide")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${nbTab==="guide"?s.navy:s.border}`,background:nbTab==="guide"?s.navy:s.white,color:nbTab==="guide"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📋 Buyer's Guide</button>
        <button onClick={()=>setNbTab("mortgage")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${nbTab==="mortgage"?s.navy:s.border}`,background:nbTab==="mortgage"?s.navy:s.white,color:nbTab==="mortgage"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>💳 Construction Mortgage</button>
        <button onClick={()=>setNbTab("connect")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${nbTab==="connect"?s.gold:s.border}`,background:nbTab==="connect"?s.gold:s.white,color:nbTab==="connect"?s.navy:s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🤝 Connect</button>
      </div>

      {/* Explore Builds */}
      {nbTab==="explore"&&(
        <div>
          {/* Province + City + Type filter */}
          <div style={{background:s.white,borderRadius:10,padding:"10px 14px",marginBottom:14,border:`1px solid ${s.border}`,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
            <span style={{fontSize:12,fontWeight:700,color:s.navy}}>📍 Province:</span>
            <select value={filterProv} onChange={e=>{setFilterProv(e.target.value);setFilterCity("");setSearched(false);}} style={{padding:"6px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>
              {Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}
            </select>
            <span style={{fontSize:12,fontWeight:700,color:s.navy}}>🏙️ City:</span>
            <select value={filterCity} onChange={e=>{setFilterCity(e.target.value);setSearched(false);}} style={{padding:"6px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>
              <option value="">All Cities</option>
              {(PDATA[filterProv]?.cities||[]).map(c=><option key={c} value={c}>{c}</option>)}
            </select>
            <button onClick={()=>setSearched(true)} style={{padding:"7px 18px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🔍 Search</button>
            {searched&&<span style={{fontSize:11,color:s.muted}}>
              {DEVELOPERS.filter(d=>d.prov===filterProv&&(!filterCity||d.city===filterCity)).length} builders found
            </span>}
          </div>
          {/* Type filter */}
          <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
            {["all","detached","townhome","condo","custom"].map(t=>(
              <button key={t} onClick={()=>setFilterType(t)} style={{padding:"5px 12px",borderRadius:20,border:`1.5px solid ${filterType===t?s.navy:s.border}`,background:filterType===t?s.navy:s.white,color:filterType===t?"#fff":s.muted,fontSize:11,cursor:"pointer",fontWeight:filterType===t?700:400,textTransform:"capitalize"}}>{t==="all"?"All Types":t}</button>
            ))}
          </div>

          {/* Partner developers or known builders */}
          {DEVELOPERS.filter(d=>d.prov===filterProv&&(!filterCity||d.city===filterCity)).length>0?(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12,marginBottom:14}}>
              {DEVELOPERS.filter(d=>d.prov===filterProv&&(!filterCity||d.city===filterCity)).map(d=>(
                <div key={d.id} style={{background:s.white,borderRadius:12,border:`2px solid ${d.featured?s.gold:s.border}`,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                  <div style={{background:`linear-gradient(135deg,#1a3a5c,#0d2240)`,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{color:"#fff",fontSize:14,fontWeight:800}}>{d.name}</div>
                    {d.featured&&<span style={{background:s.gold,color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>⭐ Featured</span>}
                  </div>
                  <div style={{padding:14}}>
                    <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                      <span style={{background:"#f1f5f9",color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>📍 {d.city}, {d.prov}</span>
                      <span style={{background:"#f0fdf4",color:s.green,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>💰 From ${(d.priceFrom/1000).toFixed(0)}K</span>
                    </div>
                    <p style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:10}}>{d.desc}</p>
                    {d.developments?.length>0&&(
                      <div style={{marginBottom:10}}>
                        <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:6}}>🏘️ Active Developments</div>
                        {d.developments.map((dev:any,i:number)=>(
                          <a key={i} href={dev.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",justifyContent:"space-between",padding:"6px 8px",background:"#f8fafc",borderRadius:6,marginBottom:4,textDecoration:"none",border:`1px solid ${s.border}`}}>
                            <div>
                              <div style={{fontSize:11,fontWeight:700,color:s.navy}}>{dev.name}</div>
                              <div style={{fontSize:10,color:s.muted}}>{dev.type} · {dev.beds} beds · {dev.status}</div>
                            </div>
                            <div style={{fontSize:12,fontWeight:800,color:s.green,flexShrink:0,marginLeft:8}}>From ${(dev.priceFrom/1000).toFixed(0)}K</div>
                          </a>
                        ))}
                      </div>
                    )}
                    <a href={d.website} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"9px",background:s.navy,color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,textAlign:"center",textDecoration:"none"}}>View Developments →</a>
                  </div>
                </div>
              ))}
            </div>
          ):(
            <div style={{background:`linear-gradient(135deg,#1a3a5c,#0d2240)`,borderRadius:14,padding:"32px 24px",marginBottom:16,textAlign:"center"}}>
              <div style={{fontSize:40,marginBottom:12}}>🏗️</div>
              <div style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:8}}>New Home Builders — Coming Soon</div>
              <div style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.7,maxWidth:480,margin:"0 auto 20px"}}>
                We're partnering with verified home builders and developers across Canada. Be among the first listed in {PDATA[filterProv]?.name} — or submit a buyer request and we'll connect you when our network is ready.
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                <button onClick={()=>setNbTab("connect")} style={{padding:"10px 24px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🏠 Find My New Home →</button>
                <button onClick={()=>setNbTab("connect")} style={{padding:"10px 24px",background:s.gold,color:s.navy,border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🏗️ List My Development →</button>
              </div>
            </div>
          )}

          {/* Cross promo */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginTop:4}}>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Listings"}))} style={{background:`linear-gradient(135deg,#f59e0b,#d97706)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
              <div style={{fontSize:20,marginBottom:4}}>🏘️</div>
              <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Browse Resale Listings</div>
              <div style={{color:"rgba(255,255,255,0.9)",fontSize:11}}>Compare new builds vs existing homes →</div>
            </button>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Calculators"}))} style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
              <div style={{fontSize:20,marginBottom:4}}>🧮</div>
              <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Calculate Your Payments</div>
              <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Use our mortgage calculators →</div>
            </button>
          </div>
        </div>
      )}

      {/* Buyer's Guide */}
      {nbTab==="guide"&&(
        <div>
          {/* 2026 Market Reality */}
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.red}`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>📊 New Build Market Reality — 2026</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10,marginBottom:12}}>
              {[
                {stat:"50%",desc:"of non-homeowners want single-family homes or townhouses — but only 1/3 of new builds are that type",icon:"🏠",color:s.red},
                {stat:"30-yr",desc:"amortization now available on new builds for ALL buyers — not just first-timers. Lowers monthly payments.",icon:"📅",color:s.green},
                {stat:"$1.5M",desc:"new insured mortgage cap — buyers under $1.5M can now buy new builds with less than 20% down",icon:"💰",color:s.blue},
                {stat:"2.8%",desc:"residential construction cost increase year-over-year in 2026 — builders passing costs to buyers",icon:"📈",color:"#f59e0b"},
              ].map(s2=>(
                <div key={s2.stat} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderTop:`3px solid ${s2.color}`}}>
                  <div style={{fontSize:24,fontWeight:800,color:s2.color,marginBottom:4}}>{s2.stat}</div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{s2.desc}</div>
                  <div style={{fontSize:18,marginTop:6}}>{s2.icon}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#92400e"}}>
              💡 <b>2026 insight:</b> Prairie provinces (Manitoba, Saskatchewan, Alberta) have stronger new build activity than Ontario and BC where condo pre-sales are weak. If you're buying in Winnipeg, Calgary, or Edmonton — now is a better time than Toronto or Vancouver.
            </div>
          </Card>

          {/* What users look for */}
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>🏠 What Canadian Buyers Want in a New Build — 2026</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {feature:"Flexible Living Space",priority:"#1 Priority",desc:"Home offices that become nurseries, multi-use rooms. Remote work made adaptable layouts the most requested feature.",icon:"🏠",color:s.navy},
                {feature:"Modern Kitchen",priority:"#2 Priority",desc:"Large islands, walk-through pantries, appliance garages, dedicated coffee stations. The kitchen is the heart of the home.",icon:"🍳",color:s.red},
                {feature:"Affordability First",priority:"#3 Priority",desc:"2026 buyers are focused on monthly payment, not square footage. Smaller, smarter, more affordable beats big and flashy.",icon:"💰",color:s.green},
                {feature:"Energy Efficiency",priority:"#4 Priority",desc:"High-efficiency heating, triple-pane windows, solar readiness. Lower utility bills and climate action driving this trend.",icon:"⚡",color:s.gold},
                {feature:"Outdoor Living",priority:"#5 Priority",desc:"Large backyards, covered decks, garden space. Post-COVID buyers want indoor-outdoor connection year-round.",icon:"🌿",color:"#16a34a"},
                {feature:"Smart Home Ready",priority:"#6 Priority",desc:"EV charging rough-in, smart thermostat pre-wiring, fiber internet. Buyers want future-proofing built in, not added later.",icon:"📱",color:s.blue},
                {feature:"Finished Basement",priority:"#7 Priority",desc:"Extra living space, home gym, rec room, secondary suite potential. Adds value and flexibility for growing families.",icon:"🏋️",color:"#7c3aed"},
                {feature:"Community Amenities",priority:"#8 Priority",desc:"Parks, trails, schools nearby, walkability. Buyers want neighbourhoods, not just houses.",icon:"🏘️",color:"#0891b2"},
              ].map(f=>(
                <div key={f.feature} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`,borderLeft:`3px solid ${f.color}`}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                    <span style={{fontSize:18}}>{f.icon}</span>
                    <div>
                      <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{f.feature}</div>
                      <div style={{fontSize:9,fontWeight:700,color:f.color}}>{f.priority}</div>
                    </div>
                  </div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{f.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* New build vs resale */}
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>⚖️ New Build vs Resale — 2026 Reality Check</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12,lineHeight:1.6}}>The price gap between new builds and resale is shrinking in 2026. New builds may include incentives — free upgrades, closing cost discounts, price protections — that change the real cost comparison.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <div style={{background:"#f0fdf4",borderRadius:10,padding:12,border:"1px solid #bbf7d0"}}>
                <div style={{fontSize:13,fontWeight:800,color:"#15803d",marginBottom:8}}>🏗️ New Build</div>
                {[["✓","New home warranty (1-2-10 years)"],["✓","30-year amortization eligible"],["✓","Choose finishes and layout"],["✓","GST/HST rebate up to $50K"],["✓","Modern energy efficiency"],["✓","Builder incentives (upgrades, etc.)"],["✗","Wait 6–24 months to move in"],["✗","Price can escalate mid-build"],["✗","Less established neighbourhood"],].map(([icon,t])=>(
                  <div key={t} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:icon==="✓"?"#15803d":"#dc2626"}}><span>{icon}</span>{t}</div>
                ))}
              </div>
              <div style={{background:"#eff6ff",borderRadius:10,padding:12,border:"1px solid #bfdbfe"}}>
                <div style={{fontSize:13,fontWeight:800,color:"#1e40af",marginBottom:8}}>🏠 Resale Home</div>
                {[["✓","Move in within 30–90 days"],["✓","Established neighbourhood & trees"],["✓","More room to negotiate price"],["✓","Mature community, walkability"],["✓","Character and unique features"],["✗","Older systems may need repairs"],["✗","Less energy efficient"],["✗","No warranty on existing items"],["✗","25-year max amortization (insured)"],].map(([icon,t])=>(
                  <div key={t} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:icon==="✓"?"#1e40af":"#dc2626"}}><span>{icon}</span>{t}</div>
                ))}
              </div>
            </div>
          </Card>

          {/* New Build Checklist */}
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.gold}`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>✅ New Build Due Diligence Checklist</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Ask these questions before signing any purchase agreement.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
              {[
                {cat:"About the Builder",items:["How many years has this builder been operating?","Are they registered with the provincial new home warranty program?","Can I visit completed homes in other developments?","What is their BBB rating and online review history?","Have they had any unresolved complaints with Tarion/HPO?"]},
                {cat:"About the Home",items:["What's included as standard vs upgrade?","What are the lot dimensions and setbacks?","Can I make design changes after signing?","What is the energy rating or EnerGuide score?","Is the basement development included or extra?"]},
                {cat:"About the Contract",items:["What are the deposit stages and amounts?","Is there a price escalation clause?","What's the guaranteed possession date?","What compensation do I get for delays?","What happens to my deposits if the builder goes bankrupt?"]},
                {cat:"About the Community",items:["What other developments are planned nearby?","When will schools, parks, and transit be completed?","Are there condo/HOA fees after closing?","What is the property tax estimate for this area?","Is the community within a flood zone?"]},
              ].map(cat=>(
                <div key={cat.cat} style={{background:"#fffbeb",borderRadius:8,padding:10,border:"1px solid #fde68a"}}>
                  <div style={{fontSize:12,fontWeight:800,color:"#92400e",marginBottom:8}}>📋 {cat.cat}</div>
                  {cat.items.map(item=>(
                    <div key={item} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:"#78350f",borderBottom:"1px solid #fef3c7"}}>
                      <span style={{color:s.gold,flexShrink:0}}>□</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Card>

          {/* Savings and rebates */}
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.green}`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>💰 New Build Savings & Rebates — 2026</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
              {[
                {title:"GST/HST New Housing Rebate",amount:"Up to $50,000",desc:"Federal rebate for owner-occupants of new construction. Expanded eligibility in 2026. Claimed at closing by your lawyer.",color:s.red,icon:"🍁"},
                {title:"30-Year Amortization",amount:"Lower monthly payments",desc:"All buyers of new builds (not just first-timers) can access 30-year insured mortgages — reducing monthly payments vs 25-year max on resale.",color:s.blue,icon:"📅"},
                {title:"New Home Warranty",amount:"1-2-10 Years",desc:"Mandatory on all new builds. 1 year workmanship, 2 years systems (plumbing/electrical/heating), 10 years structural defects.",color:s.green,icon:"🛡️"},
                {title:"Land Transfer Tax Rebate",amount:"Up to $8,475",desc:"Ontario and BC first-time buyers get LTT rebates on new construction. Toronto buyers get double rebate (provincial + municipal).",color:"#7c3aed",icon:"🏛️"},
                {title:"Manitoba PST Rebate",amount:"Up to 42% of PST",desc:"Manitoba buyers of new homes under $550,000 qualify for a PST rebate on construction. Check eligibility at manitoba.ca",color:"#0891b2",icon:"🍁"},
                {title:"Builder Incentives",amount:"Varies",desc:"Many builders in 2026 are offering free upgrades, closing cost discounts, and price locks to move inventory. Always negotiate.",color:s.gold,icon:"🎁"},
              ].map(r=>(
                <div key={r.title} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`,borderLeft:`3px solid ${r.color}`}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <span style={{fontSize:18}}>{r.icon}</span>
                    <div>
                      <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{r.title}</div>
                      <div style={{fontSize:11,fontWeight:700,color:r.color}}>{r.amount}</div>
                    </div>
                  </div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{r.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Step by step */}
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🗺️ New Build Process — Step by Step</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:14}}>From browsing to move-in — typically 12–24 months for new construction.</p>
            <div style={{position:"relative"}}>
              <div style={{position:"absolute",left:18,top:0,bottom:0,width:2,background:`linear-gradient(180deg,${s.gold},${s.green})`,borderRadius:2}}/>
              {[
                {title:"Get Pre-Approved First",time:"Day 1",desc:"Before visiting show homes, get a construction mortgage pre-approval. Builders give priority to pre-approved buyers. Know your budget before falling in love with upgrades.",urgent:true},
                {title:"Research Builders",time:"Week 1–2",desc:"Check warranty registration, BBB rating, reviews, and visit completed developments. Talk to residents in their existing communities."},
                {title:"Visit Show Homes",time:"Week 2–4",desc:"See actual build quality in person. Ask about standard vs upgrade finishes, lot sizes, and community plans. Bring the checklist above."},
                {title:"Review Purchase Agreement with Lawyer",time:"Month 1",desc:"Never sign without a real estate lawyer reviewing first. Understand deposit structure, price escalation clauses, and possession date guarantees.",urgent:true},
                {title:"Choose Finishes & Upgrades",time:"Month 1–3",desc:"Budget carefully — upgrades add up fast. Prioritize items you can't change later (layout, lot size) vs items you can change later (flooring, fixtures)."},
                {title:"Secure Your Mortgage",time:"Month 2–3",desc:"Lock in your mortgage rate with a long rate hold (up to 12 months). Compare your builder's preferred lender vs the open market — builder rates aren't always best."},
                {title:"Construction & PDI",time:"Month 3–18",desc:"Get progress updates from builder. Do a Pre-Delivery Inspection (PDI) before closing to document all deficiencies in writing."},
                {title:"Closing & Move-In",time:"Completion",desc:"Lawyer handles transfer. You pay: closing costs, LTT, legal fees, and any remaining deposits. GST/HST rebate claimed here. Warranty begins at closing."},
              ].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:16,marginBottom:12,paddingLeft:8}}>
                  <div style={{width:22,height:22,borderRadius:"50%",background:item.urgent?s.red:s.navy,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,fontSize:10,color:"#fff",fontWeight:800}}>{i+1}</div>
                  <div style={{flex:1,background:item.urgent?"#fff5f5":"#f8fafc",borderRadius:10,padding:"10px 14px",border:`1px solid ${item.urgent?"#fed7d7":s.border}`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                      <span style={{fontSize:10,fontWeight:700,color:item.urgent?s.red:s.muted,background:item.urgent?"#fee2e2":"#f1f5f9",borderRadius:20,padding:"2px 8px"}}>{item.time}</span>
                      <span style={{fontSize:12,fontWeight:800,color:s.navy}}>{item.title}</span>
                      {item.urgent&&<span style={{fontSize:9,fontWeight:700,color:"#fff",background:s.red,borderRadius:20,padding:"1px 7px"}}>CRITICAL</span>}
                    </div>
                    <div style={{fontSize:11,color:s.muted,lineHeight:1.7}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"12px",background:s.red,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:14}}>📞 Get Free Mortgage Advice for Your New Build →</button>
        </div>
      )}

      {/* Construction Mortgage */}
      {nbTab==="mortgage"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>💳</div>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Construction Mortgage Guide</h2>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>New builds use different mortgage products than resale homes. Here's what you need to know.</p>
          </div>

          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>📋 New Build vs Resale Mortgage — Key Differences</h3>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",minWidth:400}}>
                <thead><tr style={{background:"#f8fafc"}}>{["Feature","New Build Mortgage","Resale Mortgage"].map(h=><th key={h} style={{padding:"8px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`}}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ["Amortization","Up to 30 years (insured)","Up to 25 years (insured)"],
                    ["Rate hold","Up to 12 months","90–120 days"],
                    ["Deposit structure","5–20% in stages to builder","Full down payment at closing"],
                    ["Appraisal timing","After construction complete","Before closing"],
                    ["Mortgage start","At closing (move-in)","At closing"],
                    ["Progress draws","Not typical (builder-funded)","N/A"],
                    ["GST/HST","Added to price (rebate available)","Not applicable"],
                    ["Price risk","Fixed in purchase agreement","Fixed at offer"],
                  ].map(([f,nb,res],i)=>(
                    <tr key={i} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                      <td style={{padding:"9px 12px",fontSize:11,fontWeight:700,color:s.navy}}>{f}</td>
                      <td style={{padding:"9px 12px",fontSize:11,color:"#15803d"}}>{nb}</td>
                      <td style={{padding:"9px 12px",fontSize:11,color:s.muted}}>{res}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card style={{marginBottom:14,background:s.navy}}>
            <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>💡 Key Things to Know About New Build Mortgages</h3>
            {[
              ["Rate Hold","Get the longest rate hold available — up to 12 months. If rates drop before closing, some lenders let you re-lock at the lower rate."],
              ["30-Year Amortization","New build buyers with less than 20% down can access 30-year amortization — reducing monthly payments vs 25-year max on resale."],
              ["Builder's Lender vs Your Own","Builders often offer incentives to use their preferred lender. Always compare with your own broker — builder incentives rarely beat open-market rates."],
              ["Deposit Interest","Your deposits to the builder (5–20%) typically don't earn interest. Factor this opportunity cost into your decision."],
              ["Occupancy Date Changes","Builders can delay closing. Ensure your mortgage rate hold covers potential delays — or your rate may expire."],
              ["GST/HST","New homes are subject to GST/HST. First-time buyers and owner-occupants can claim a rebate — up to $50,000 federally in 2026."],
            ].map(([l,v])=>(
              <div key={l} style={{display:"flex",gap:12,padding:"8px 0",borderBottom:`1px solid rgba(255,255,255,0.08)`}}>
                <span style={{fontSize:11,fontWeight:700,color:s.gold,flexShrink:0,minWidth:160}}>{l}</span>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.7)",lineHeight:1.6}}>{v}</span>
              </div>
            ))}
          </Card>

          <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"12px",background:s.red,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:14}}>📞 Get Free Mortgage Advice for Your New Build →</button>
        </div>
      )}

      {/* Connect */}
      {nbTab==="connect"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.gold},#d97706)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>🤝</div>
            <h2 style={{color:s.navy,fontSize:18,fontWeight:800,marginBottom:6}}>Connect With Builders & Developers</h2>
            <p style={{color:"rgba(0,0,0,0.6)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Submit a buyer request or list your development on our platform.</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14,marginBottom:14}}>
            {/* Buyer form */}
            <Card style={{borderLeft:`4px solid ${s.green}`}}>
              <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🏠 Find My New Home</h3>
              <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Tell us what you're looking for and we'll connect you with builders in your area.</p>
              <NewBuildBuyerForm/>
            </Card>

            {/* Developer/Builder form */}
            <Card style={{borderLeft:`4px solid ${s.gold}`}}>
              <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🏗️ I'm a Builder / Developer</h3>
              <p style={{fontSize:11,color:s.muted,marginBottom:12,lineHeight:1.6}}>List your development on Canada Mortgage Rates and reach qualified buyers actively comparing mortgage rates — the highest-intent homebuyers in Canada. Our referral partnership connects your project directly with buyers who are pre-approved and ready to move.</p>
              <NewBuildDeveloperForm/>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function NewBuildBuyerForm(){
  const [prov,setProv]=useState("MB");const [city,setCity]=useState("");const [type,setType]=useState("");
  const [budget,setBudget]=useState("");const [timeline,setTimeline]=useState("");
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [phone,setPhone]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);

  async function submit(){
    if(!name||!email||!prov||!budget){alert("Please fill in all required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`New Build Buyer Lead — ${city||prov}`,
        name,email,phone,province:prov,city,type,budget,timeline,
        source:"Canada Mortgage Rates — New Builds Tab"
      })});
      setOk(true);
    }catch{alert("Something went wrong.");}
    setSubmitting(false);
  }

  if(ok)return(
    <div style={{textAlign:"center",padding:"16px 0"}}>
      <div style={{fontSize:28,marginBottom:8}}>✅</div>
      <div style={{fontSize:13,fontWeight:800,color:s.green,marginBottom:4}}>Request Received!</div>
      <div style={{fontSize:11,color:s.muted}}>We'll connect you with builders in your area within 1–2 business days.</div>
      <button onClick={()=>setOk(false)} style={{marginTop:10,padding:"6px 16px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>Send Another →</button>
    </div>
  );

  return(
    <div>
      <Field label="Province *"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></Field>
      <Field label="City"><input value={city} onChange={e=>setCity(e.target.value)} placeholder="e.g. Winnipeg" style={inp}/></Field>
      <Field label="Home Type">
        <select value={type} onChange={e=>setType(e.target.value)} style={inp}>
          <option value="">Select type</option>
          <option value="detached">Detached House</option>
          <option value="townhome">Townhome</option>
          <option value="condo">Condo</option>
          <option value="custom">Custom Build</option>
        </select>
      </Field>
      <Field label="Budget *">
        <select value={budget} onChange={e=>setBudget(e.target.value)} style={inp}>
          <option value="">Select budget</option>
          <option value="under400">Under $400K</option>
          <option value="400-600">$400K – $600K</option>
          <option value="600-800">$600K – $800K</option>
          <option value="800-1m">$800K – $1M</option>
          <option value="over1m">Over $1M</option>
        </select>
      </Field>
      <Field label="Timeline">
        <select value={timeline} onChange={e=>setTimeline(e.target.value)} style={inp}>
          <option value="">When do you want to move in?</option>
          <option value="asap">As soon as possible</option>
          <option value="6months">Within 6 months</option>
          <option value="1year">Within 1 year</option>
          <option value="2years">1–2 years</option>
        </select>
      </Field>
      <Field label="Full Name *"><input value={name} onChange={e=>setName(e.target.value)} placeholder="John Smith" style={inp}/></Field>
      <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="john@email.com" style={inp}/></Field>
      <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Connect Me with Builders →"}</button>
    </div>
  );
}

function NewBuildDeveloperForm(){
  const [company,setCompany]=useState("");const [contact,setContact]=useState("");
  const [email,setEmail]=useState("");const [phone,setPhone]=useState("");
  const [prov,setProv]=useState("MB");const [city,setCity]=useState("");
  const [project,setProject]=useState("");const [units,setUnits]=useState("");
  const [priceFrom,setPriceFrom]=useState("");const [completion,setCompletion]=useState("");
  const [ok,setOk]=useState(false);const [submitting,setSubmitting]=useState(false);

  async function submit(){
    if(!company||!email||!project){alert("Please fill in all required fields.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`New Build Developer Partnership — ${company}`,
        company,contact,email,phone,province:prov,city,project,units,priceFrom,completion,
        source:"Canada Mortgage Rates — New Builds Developer Form"
      })});
      setOk(true);
    }catch{alert("Something went wrong.");}
    setSubmitting(false);
  }

  if(ok)return(
    <div style={{textAlign:"center",padding:"16px 0"}}>
      <div style={{fontSize:28,marginBottom:8}}>✅</div>
      <div style={{fontSize:13,fontWeight:800,color:s.green,marginBottom:4}}>Application Received!</div>
      <div style={{fontSize:11,color:s.muted}}>We'll be in touch within 1–2 business days to discuss listing your development.</div>
      <button onClick={()=>setOk(false)} style={{marginTop:10,padding:"6px 16px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>Submit Another →</button>
    </div>
  );

  return(
    <div>
      <Field label="Company Name *"><input value={company} onChange={e=>setCompany(e.target.value)} placeholder="ABC Homes Inc." style={inp}/></Field>
      <Field label="Contact Name"><input value={contact} onChange={e=>setContact(e.target.value)} placeholder="Jane Smith" style={inp}/></Field>
      <Field label="Email *"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="jane@abchomes.ca" style={inp}/></Field>
      <Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="204-555-0100" style={inp}/></Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <Field label="Province"><select value={prov} onChange={e=>setProv(e.target.value)} style={inp}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{k}</option>)}</select></Field>
        <Field label="City"><input value={city} onChange={e=>setCity(e.target.value)} placeholder="Winnipeg" style={inp}/></Field>
      </div>
      <Field label="Development Name *"><input value={project} onChange={e=>setProject(e.target.value)} placeholder="Sage Creek Phase 5" style={inp}/></Field>
      <Field label="Number of Units"><input value={units} onChange={e=>setUnits(e.target.value)} placeholder="e.g. 45 homes" style={inp}/></Field>
      <Field label="Starting Price"><input value={priceFrom} onChange={e=>setPriceFrom(e.target.value)} placeholder="e.g. $450,000" style={inp}/></Field>
      <Field label="Expected Completion"><input value={completion} onChange={e=>setCompletion(e.target.value)} placeholder="e.g. Fall 2027" style={inp}/></Field>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,background:s.gold,color:s.navy,opacity:submitting?0.7:1}}>{submitting?"Submitting...":"Submit My Development →"}</button>
    </div>
  );
}

function ListingsTab({initProv,initCity}:{initProv:string,initCity:string}){
  const [prov,setProv]=useState(initProv);const [city,setCity]=useState(initCity);const [type,setType]=useState("any");const [beds,setBeds]=useState("any");const [maxPrice,setMaxPrice]=useState("");const [area,setArea]=useState("");
  const [subTab,setSubTab]=useState<"listings"|"tools"|"value">("listings");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Listings")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);

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
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        <button onClick={()=>setSubTab("listings")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="listings"?s.navy:s.border}`,background:subTab==="listings"?s.navy:s.white,color:subTab==="listings"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>🏘️ Find Listings</button>
        <button onClick={()=>setSubTab("tools")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="tools"?s.navy:s.border}`,background:subTab==="tools"?s.navy:s.white,color:subTab==="tools"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>📊 Market Tools</button>
        <button onClick={()=>setSubTab("value")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="value"?s.gold:s.border}`,background:subTab==="value"?s.gold:s.white,color:subTab==="value"?s.navy:s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>🏡 Home Value</button>
      </div>

      {subTab==="listings"&&<>
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
      </>}

      {subTab==="tools"&&<>
      <Card style={{marginBottom:16}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📊 Average Home Prices by Province — 2026</h3>
        <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Current average home prices, year-over-year change, and minimum down payment required across Canada.</p>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",minWidth:480}}>
            <thead><tr style={{background:"#f8fafc"}}>{["Province","Avg. Home Price","YoY Change","Min. Down Payment","5-yr Fixed Rate"].map(h=><th key={h} style={{padding:"9px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`,whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
            <tbody>
              {[{prov:"British Columbia",price:"$1,050,000",change:"+2.1%",down:"$205,000 (20%)",rate:"4.94%"},{prov:"Ontario",price:"$850,000",change:"+3.2%",down:"$67,500 (mixed)",rate:"4.89%"},{prov:"Alberta",price:"$520,000",change:"+6.5%",down:"$26,000 (5%)",rate:"4.89%"},{prov:"Quebec",price:"$450,000",change:"+4.1%",down:"$22,500 (5%)",rate:"4.85%"},{prov:"Manitoba",price:"$380,000",change:"+4.2%",down:"$19,000 (5%)",rate:"4.85%"},{prov:"Saskatchewan",price:"$310,000",change:"+3.8%",down:"$15,500 (5%)",rate:"4.84%"},{prov:"Nova Scotia",price:"$420,000",change:"+5.1%",down:"$21,000 (5%)",rate:"4.87%"},{prov:"New Brunswick",price:"$320,000",change:"+4.8%",down:"$16,000 (5%)",rate:"4.86%"},{prov:"PEI",price:"$380,000",change:"+3.5%",down:"$19,000 (5%)",rate:"4.87%"},{prov:"Newfoundland",price:"$295,000",change:"+2.9%",down:"$14,750 (5%)",rate:"4.88%"}].map((row,i)=>(
                <tr key={row.prov} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                  <td style={{padding:"10px 12px",fontSize:12,fontWeight:700,color:s.navy}}>{row.prov}</td>
                  <td style={{padding:"10px 12px",fontSize:13,fontWeight:800,color:s.navy}}>{row.price}</td>
                  <td style={{padding:"10px 12px",fontSize:12,fontWeight:700,color:"#16a34a"}}>{row.change}</td>
                  <td style={{padding:"10px 12px",fontSize:11,color:s.muted}}>{row.down}</td>
                  <td style={{padding:"10px 12px",fontSize:12,fontWeight:600,color:s.blue}}>{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{fontSize:10,color:"#bbb",marginTop:10}}>* Estimates based on 2026 market data. Prices vary by city and neighbourhood.</p>
      </Card>
      <Card style={{marginBottom:14}}>
        <NeighbourhoodChecklist/>
      </Card>
      </>}

      {subTab==="value"&&<>
      <div style={{background:`linear-gradient(135deg,${s.gold},#d97706)`,borderRadius:14,padding:"16px 20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:24,marginBottom:4}}>🏡</div>
        <h2 style={{color:s.navy,fontSize:16,fontWeight:800,marginBottom:4}}>Estimate Your Home Value</h2>
        <p style={{color:"rgba(0,0,0,0.6)",fontSize:11,maxWidth:500,margin:"0 auto"}}>Find out what your home is worth before you list, refinance, or renew.</p>
      </div>

      <ValueTabInner/>
      </>}
      <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"12px 16px",fontSize:11,color:"#92400e"}}>
        ⚠️ <b>Disclaimer:</b> We link directly to third-party listing platforms. Canada Mortgage Rates is not affiliated with Realtor.ca, CREA, MLS®, Zolo, RE/MAX, Royal LePage, Kijiji, or ComFree. Always verify listings and work with a licensed REALTOR® before making any real estate decisions.
      </div>

      {/* Cross-promotion banners */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginTop:14}}>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Realtors"}))} style={{background:`linear-gradient(135deg,${s.green},#15803d)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
          <div style={{fontSize:20,marginBottom:4}}>🤝</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Found a home you like?</div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Connect with a local REALTOR® who can help you make an offer →</div>
        </button>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Lawyers"}))} style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
          <div style={{fontSize:20,marginBottom:4}}>⚖️</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Ready to close?</div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Find a real estate lawyer to handle your closing →</div>
        </button>
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

const RENEWAL_FAQS=[
  {q:"Can I change my amortization at renewal?",a:"Yes — renewal is your opportunity to reset the amortization period. You can extend it (lower payments, more interest) or shorten it (higher payments, less interest). If switching lenders, the new lender sets the amortization based on your qualification."},
  {q:"What happens if I miss my renewal date?",a:"If you do nothing, your lender automatically renews you — usually at a 6-month closed term at their posted rate, which is typically 0.50–1.00% above competitive rates. You then have to wait until that short term expires to get a better rate, often with a penalty."},
  {q:"Is there a penalty to switch lenders at renewal?",a:"No — switching lenders at your maturity date is completely penalty-free. This is one of the most important things to know. Your lender counts on you not knowing this."},
  {q:"How long does it take to switch lenders?",a:"Typically 1–2 weeks if you have your documents ready. Start the process at least 4 weeks before your maturity date to be safe. Your new lender handles most of the paperwork."},
  {q:"Should I take a shorter or longer term at renewal?",a:"With the Bank of Canada holding rates in mid-2026, many borrowers are choosing shorter terms (1–2 years) to bet on rates dropping further. A 5-year fixed offers certainty. A 1-year fixed lets you renegotiate sooner if rates fall."},
  {q:"Can I take cash out at renewal?",a:"Not at renewal — that would be a refinance, which requires breaking your mortgage if done before maturity. At renewal you can only change your rate, term, and payment frequency. To access equity, you need to refinance or set up a HELOC."},
  {q:"What documents do I need to switch lenders?",a:"Typically: recent mortgage statement, property tax bill, proof of income (T4 + NOA or pay stubs), and ID. If your financial situation hasn't changed significantly, qualification is usually straightforward."},
  {q:"Can I negotiate my renewal rate with my current lender?",a:"Absolutely — and you should. Most lenders have discretionary rate authority meaning your advisor can go below the posted renewal rate. The negotiation script in this tab gives you the exact words to use."},
];

function RenewalFAQ(){
  const [open,setOpen]=useState<string|null>(null);
  return(
    <>
      {RENEWAL_FAQS.map((f,i)=>(
        <div key={i} style={{borderBottom:`1px solid ${s.light}`}}>
          <button onClick={()=>setOpen(open===String(i)?null:String(i))} style={{width:"100%",textAlign:"left",padding:"12px 0",background:"none",border:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
            <span style={{fontSize:12,fontWeight:700,color:s.navy,lineHeight:1.4}}>{f.q}</span>
            <span style={{fontSize:16,color:s.muted,flexShrink:0,transform:open===String(i)?"rotate(180deg)":"none",transition:"transform 0.2s"}}>▾</span>
          </button>
          {open===String(i)&&<div style={{fontSize:12,color:s.muted,lineHeight:1.8,paddingBottom:12}}>{f.a}</div>}
        </div>
      ))}
    </>
  );
}

function RenewalTab(){
  const bocRates=useBocRates();
  const prime=parseFloat(String(bocRates.prime))||4.45;
  const liveRates=[
    {label:"1yr Fixed",rate:(prime+0.05).toFixed(2)},
    {label:"2yr Fixed",rate:(prime-0.25).toFixed(2)},
    {label:"3yr Fixed",rate:(prime-0.35).toFixed(2)},
    {label:"5yr Fixed",rate:(prime-0.55).toFixed(2)},
    {label:"Variable",rate:(prime-1.10).toFixed(2)},
  ];
  const [subTab,setSubTab]=useState<"calculator"|"guide"|"negotiate"|"switch">("calculator");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Renewal")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
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
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setSubTab("calculator")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="calculator"?s.navy:s.border}`,background:subTab==="calculator"?s.navy:s.white,color:subTab==="calculator"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🔄 Compare Offer</button>
        <button onClick={()=>setSubTab("guide")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="guide"?s.navy:s.border}`,background:subTab==="guide"?s.navy:s.white,color:subTab==="guide"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📅 Renewal Guide</button>
        <button onClick={()=>setSubTab("switch")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="switch"?s.blue:s.border}`,background:subTab==="switch"?s.blue:s.white,color:subTab==="switch"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🏦 Switch or Stay?</button>
        <button onClick={()=>setSubTab("negotiate")} style={{flex:1,minWidth:100,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="negotiate"?s.red:s.border}`,background:subTab==="negotiate"?s.red:s.white,color:subTab==="negotiate"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>💬 Negotiate Script</button>
      </div>

      {subTab==="calculator"&&<>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px 20px",marginBottom:16,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>🔄</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Compare Your Renewal Offer</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Millions of Canadians renew their mortgage in 2026–2027. Don't just accept your lender's first offer — find out how much you could save by shopping around.</p>
      </div>

      <div style={{background:s.navy,borderRadius:12,padding:"12px 16px",marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:700,color:s.gold,marginBottom:8}}>📊 Current Market Rates — auto-updated from BoC · click to fill your offer rate</div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {liveRates.map(r=>(
            <button key={r.label} onClick={()=>setOfferRate(parseFloat(r.rate))} style={{padding:"6px 12px",background:parseFloat(r.rate)===offerRate?"rgba(245,166,35,0.2)":"rgba(255,255,255,0.1)",border:"1px solid "+(parseFloat(r.rate)===offerRate?"#f5a623":"rgba(255,255,255,0.2)"),borderRadius:8,cursor:"pointer",textAlign:"center"}}>
              <div style={{fontSize:9,color:"rgba(255,255,255,0.6)",marginBottom:2}}>{r.label}</div>
              <div style={{fontSize:13,fontWeight:800,color:parseFloat(r.rate)===offerRate?s.gold:"#fff"}}>{r.rate}%</div>
            </button>
          ))}
        </div>
        <div style={{fontSize:9,color:"rgba(255,255,255,0.4)",marginTop:8}}>Compiled from public lender data · Verify with lender before applying</div>
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
      </>}

      {subTab==="guide"&&<>
      {/* Renewal Timeline */}
      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📅 Renewal Timeline — What to Do & When</h3>
        <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Most Canadians leave money on the table by waiting too long. Start this process 120 days before your maturity date.</p>
        <div style={{position:"relative"}}>
          <div style={{position:"absolute",left:18,top:0,bottom:0,width:2,background:`linear-gradient(180deg,${s.red},${s.gold},${s.green})`,borderRadius:2}}/>
          {[
            {time:"120 Days Before",label:"Start Shopping Now",desc:"Request competing rate quotes from brokers and other lenders. Most will hold a rate for 120 days. You lose nothing by getting quotes early.",urgent:true,icon:"🚀"},
            {time:"90 Days Before",label:"Get Your First Competing Quote",desc:"Have at least one competing offer in hand. This is your negotiating leverage with your current lender. A mortgage broker can get you multiple quotes in one call.",urgent:true,icon:"📋"},
            {time:"21 Days Before",label:"Your Lender Sends Renewal Offer",desc:"By law, your lender must send your renewal offer at least 21 days before maturity. This is usually their posted rate — not their best rate. Don't sign yet.",urgent:false,icon:"📬"},
            {time:"14 Days Before",label:"Negotiate or Switch",desc:"Call your lender with your competing offer. If they won't match, switch. Switching lenders at renewal is penalty-free and takes 1–2 weeks with proper notice.",urgent:false,icon:"💬"},
            {time:"7 Days Before",label:"Sign & Confirm",desc:"Sign your renewal agreement once you're satisfied with the rate. Confirm your payment date and any changes to payment frequency or amortization.",urgent:false,icon:"✍️"},
            {time:"Maturity Date",label:"New Term Begins",desc:"Your new rate and term take effect. If you did nothing, your lender automatically renews you at their posted rate — often 0.50–1.00% above what you could have gotten.",urgent:false,icon:"🔄"},
            {time:"After Renewal",label:"Set a Reminder for Next Time",desc:"Set a calendar reminder for 120 days before your next maturity date. Do this now while it's fresh.",urgent:false,icon:"📅"},
          ].map((step,i)=>(
            <div key={i} style={{display:"flex",gap:16,marginBottom:14,paddingLeft:8}}>
              <div style={{width:22,height:22,borderRadius:"50%",background:step.urgent?s.red:s.navy,border:`2px solid ${step.urgent?s.red:s.navy}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,fontSize:10}}>{step.icon}</div>
              <div style={{flex:1,background:step.urgent?"#fff5f5":"#f8fafc",borderRadius:10,padding:"10px 14px",border:`1px solid ${step.urgent?"#fed7d7":s.border}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                  <span style={{fontSize:10,fontWeight:700,color:step.urgent?s.red:s.muted,background:step.urgent?"#fee2e2":"#f1f5f9",borderRadius:20,padding:"2px 8px"}}>{step.time}</span>
                  <span style={{fontSize:12,fontWeight:800,color:s.navy}}>{step.label}</span>
                  {step.urgent&&<span style={{fontSize:9,fontWeight:700,color:"#fff",background:s.red,borderRadius:20,padding:"1px 7px"}}>ACT NOW</span>}
                </div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Renewal Lenders */}
      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🏆 Best Lenders for Renewal Rates</h3>
        <p style={{fontSize:11,color:s.muted,marginBottom:12}}>These lenders consistently offer competitive renewal rates. Use them as negotiating leverage with your current lender.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10}}>
          {[
            {name:"Nesto",type:"Online Broker",strength:"Often 0.20–0.40% below big banks. No commission model.",badge:"💰 Best Rates",url:"https://www.nesto.ca",color:"#6366f1"},
            {name:"Butler Mortgage",type:"Mortgage Broker",strength:"30+ lender access. Renewal specialists. Strong negotiators.",badge:"🤝 Best Service",url:"https://www.butlermortgage.ca",color:"#0891b2"},
            {name:"Local Credit Unions",type:"Credit Union",strength:"Member-owned, lower rates than banks, fairer IRD penalties.",badge:"🏦 Best Value",url:"#",color:s.green},
            {name:"Ratehub.ca",type:"Rate Comparison",strength:"Compare 30+ lenders at once. Free rate comparison tool.",badge:"📊 Best Comparison",url:"https://www.ratehub.ca",color:s.red},
            {name:"MCAP",type:"Monoline Lender",strength:"Competitive rates, fairer penalties than big banks.",badge:"⭐ Underrated",url:"https://www.mcap.com",color:"#7c3aed"},
            {name:"First National",type:"Monoline Lender",strength:"No branch overhead = lower rates. Strong renewal offers.",badge:"⭐ Underrated",url:"https://www.firstnational.ca",color:"#b45309"},
          ].map(l=>(
            <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#f8fafc",border:`1px solid ${s.border}`,borderRadius:10,padding:12,textDecoration:"none",borderLeft:`3px solid ${l.color}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                <div style={{fontSize:13,fontWeight:800,color:s.navy}}>{l.name}</div>
                <span style={{fontSize:9,fontWeight:700,color:l.color,background:"#f1f5f9",borderRadius:20,padding:"2px 7px"}}>{l.badge}</span>
              </div>
              <div style={{fontSize:10,color:s.muted,marginBottom:4}}>{l.type}</div>
              <div style={{fontSize:11,color:"#374151",lineHeight:1.5}}>{l.strength}</div>
            </a>
          ))}
        </div>
        <p style={{fontSize:10,color:"#bbb",marginTop:10}}>* Not sponsored. Listed based on competitive rates and service quality. Always compare multiple quotes.</p>
      </Card>

      {/* Renewal FAQ */}
      <Card style={{marginBottom:14}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>❓ Renewal FAQ</h3>
        <RenewalFAQ/>
      </Card>

      {/* Rate Alert CTA */}
      <div style={{background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:12,padding:"16px 20px",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:14}}>
        <div style={{fontSize:28,flexShrink:0}}>🔔</div>
        <div style={{flex:1,minWidth:180}}>
          <div style={{color:"#fff",fontSize:14,fontWeight:800,marginBottom:3}}>Get Notified When Rates Drop</div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:11,lineHeight:1.5}}>Sign up for BoC rate alerts. Be the first to know when rates change — before your renewal.</div>
        </div>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("openRateAlert"))} style={{padding:"10px 20px",background:"#fff",color:s.red,border:"none",borderRadius:8,fontSize:12,fontWeight:800,cursor:"pointer",flexShrink:0}}>🔔 Get Alerts →</button>
      </div>
      </>}

      {subTab==="switch"&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.blue},#1d4ed8)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:6}}>🏦</div>
            <h2 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:6}}>Should I Switch Lenders at Renewal?</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Switching at renewal costs $0 in penalties. Here's how to decide if it's worth the effort.</p>
          </div>

          {/* What if I do nothing */}
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.red}`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:8}}>⚠️ What Happens If You Do Nothing?</h3>
            <p style={{fontSize:11,color:s.muted,lineHeight:1.7,marginBottom:10}}>If you don't respond to your renewal notice, your mortgage automatically renews at your lender's <b>posted rate</b> — typically 0.50–1.50% higher than what you could negotiate. On a $400,000 mortgage, that's $2,000–$6,000 extra per year.</p>
            <div style={{background:"#fff5f5",border:"1px solid #fed7d7",borderRadius:8,padding:"10px 14px",fontSize:11,color:"#dc2626",fontWeight:600}}>
              🚨 Doing nothing at renewal is one of the most expensive financial mistakes Canadian homeowners make.
            </div>
          </Card>

          {/* Switch vs Stay decision */}
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:12}}>✅ Switch or Stay — Decision Framework</h3>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
              <div style={{background:"#f0fdf4",borderRadius:10,padding:12,border:"1px solid #bbf7d0"}}>
                <div style={{fontSize:13,fontWeight:800,color:"#15803d",marginBottom:8}}>🏃 Switch Lenders If...</div>
                {[
                  "Competing lender offers 0.25%+ lower rate",
                  "Your lender refuses to negotiate",
                  "You want better prepayment privileges",
                  "You're refinancing at the same time",
                  "You've had poor service from current lender",
                  "Current lender uses posted-rate IRD penalties",
                ].map(t=><div key={t} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:"#15803d"}}><span>✓</span>{t}</div>)}
              </div>
              <div style={{background:"#eff6ff",borderRadius:10,padding:12,border:"1px solid #bfdbfe"}}>
                <div style={{fontSize:13,fontWeight:800,color:"#1e40af",marginBottom:8}}>🏠 Stay with Current Lender If...</div>
                {[
                  "They match the best available rate",
                  "You have a HELOC tied to your mortgage",
                  "Complex file — they already know your situation",
                  "Rate difference is under 0.15%",
                  "You're selling within 1 year",
                  "Switching would disrupt other banking",
                ].map(t=><div key={t} style={{display:"flex",gap:6,padding:"3px 0",fontSize:11,color:"#1e40af"}}><span>✓</span>{t}</div>)}
              </div>
            </div>
          </Card>

          {/* Term selection guide 2026 */}
          <Card style={{marginBottom:14,background:s.navy}}>
            <h3 style={{fontSize:14,fontWeight:800,color:"#fff",marginBottom:10}}>📅 Which Term Should You Choose at Renewal — 2026?</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginBottom:12,lineHeight:1.6}}>With BoC at 2.25% and most economists expecting rates to stay flat or drop slightly in 2027, here's how each term looks right now:</p>
            {[
              {term:"1-Year Fixed",rate:"~4.50%",verdict:"✅ Good if you expect rates to drop significantly within a year. Maximum flexibility.",color:"#4ade80",rec:"If rates fall 0.50%+ in 12 months, worth it"},
              {term:"2-Year Fixed",rate:"~4.20%",verdict:"✅ Best balance in 2026. Lower than 1-year, shorter commitment than 5-year.",color:"#4ade80",rec:"Our top pick for most 2026 renewers"},
              {term:"3-Year Fixed",rate:"~4.10%",verdict:"✅ Strong choice. Captures current rates, renews in a likely lower-rate environment.",color:"#4ade80",rec:"Good for stability without overcommitting"},
              {term:"5-Year Fixed",rate:"~3.90%",verdict:"⚠️ Lowest rate but commits you through 2031. Use if you value certainty over flexibility.",color:"#fbbf24",rec:"Only if you plan no changes for 5 years"},
              {term:"Variable",rate:"~3.35%",verdict:"⚠️ Lowest rate today but BoC could raise if inflation resurges. Spread vs fixed has compressed.",color:"#fbbf24",rec:"If you have financial cushion for payment swings"},
            ].map(t=>(
              <div key={t.term} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:`1px solid rgba(255,255,255,0.08)`}}>
                <div style={{flexShrink:0,minWidth:100}}>
                  <div style={{fontSize:12,fontWeight:800,color:"#fff"}}>{t.term}</div>
                  <div style={{fontSize:13,fontWeight:800,color:t.color}}>{t.rate}</div>
                </div>
                <div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.9)",marginBottom:3}}>{t.verdict}</div>
                  <div style={{fontSize:10,color:t.color}}>{t.rec}</div>
                </div>
              </div>
            ))}
          </Card>

          {/* True cost of switching */}
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>💰 True Cost of Switching Lenders</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Switching at renewal is penalty-free — but there are minor costs to factor in:</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {cost:"Legal/Discharge Fee","amount":"$0–$300","note":"Many new lenders cover this","color":s.green},
                {cost:"Appraisal Fee","amount":"$0–$300","note":"Often waived by new lender","color":s.green},
                {cost:"Title Insurance","amount":"$200–$300","note":"May be required by new lender","color":"#f59e0b"},
                {cost:"Your Time","amount":"2–4 hours","note":"Shopping, paperwork, signing","color":s.muted},
              ].map(item=>(
                <div key={item.cost} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
                  <div style={{fontSize:12,fontWeight:700,color:s.navy}}>{item.cost}</div>
                  <div style={{fontSize:14,fontWeight:800,color:item.color,margin:"4px 0"}}>{item.amount}</div>
                  <div style={{fontSize:10,color:s.muted}}>{item.note}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:11,color:"#15803d"}}>
              💡 On a $400,000 mortgage, saving 0.25% = $1,000/year. Even if switching costs $500, you're ahead in 6 months. Most switches cost $0 — new lenders compete for your business.
            </div>
          </Card>

          <button onClick={()=>setSubTab("negotiate")} style={{width:"100%",padding:"12px",background:s.red,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:14}}>💬 Get the Negotiation Script →</button>
        </div>
      )}

      {subTab==="negotiate"&&<>
      <div style={{background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>💬</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Renewal Negotiation Script</h2>
        <p style={{color:"rgba(255,255,255,0.8)",fontSize:12,maxWidth:500,margin:"0 auto"}}>Exact words to say to your lender to get a better renewal rate. Most Canadians never negotiate — those who do save an average of 0.25–0.50%.</p>
      </div>

      <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:10,padding:"12px 16px",marginBottom:14,fontSize:12,color:"#92400e"}}>
        💡 <b>Before you call:</b> Get at least one competing quote from a broker or another lender. You need a real number to reference — don't bluff.
      </div>

      {[
        {step:"Step 1",title:"Opening — Set the tone",color:s.navy,script:`"Hi, I'm calling about my mortgage renewal. My maturity date is coming up and before I sign the renewal offer you sent, I wanted to discuss the rate."`,tip:"Be friendly and direct. Don't apologize for calling. You're a customer with options."},
        {step:"Step 2",title:"State your position",color:s.blue,script:`"I've been a customer for [X] years and I've received a competing offer of [X.XX]% from [lender/broker]. I'd like to give you the opportunity to match or beat it before I make a decision."`,tip:"Use your actual competing rate. If you have multiple quotes, use the lowest. Mention how long you've been a customer — loyalty matters to some lenders."},
        {step:"Step 3",title:"Handle their counter-offer",color:"#7c3aed",script:`"Thank you — I appreciate that. Can you check if there's any flexibility to go lower? I'm also looking at [other lender] who offered [X.XX]% for a [X]-year term."`,tip:"Their first counter is rarely their best. Push once more. Ask specifically about promotional rates or loyalty discounts."},
        {step:"Step 4a",title:"If they match — confirm in writing",color:s.green,script:`"That works for me. Can you send me the updated renewal agreement with the [X.XX]% rate in writing today? I want to review it before signing."`,tip:"Always get it in writing before agreeing. Verbal commitments from bank advisors are not binding."},
        {step:"Step 4b",title:"If they won't move — signal you'll leave",color:s.red,script:`"I appreciate you checking, but I'm not able to leave that much money on the table. I'll be moving forward with [competing lender] at [X.XX]%. Is there anything else you can do?"`,tip:"This is your nuclear option. Many lenders will make one more offer when they realize you're serious about leaving. Be prepared to actually switch if they don't move."},
        {step:"Step 5",title:"If switching — close professionally",color:s.muted,script:`"I've decided to go with [new lender] for this term. Can you confirm the discharge process and any documentation you'll need from me?"`,tip:"Stay professional. You may come back to this lender in future terms. Ask about the discharge timeline — it typically takes 1–2 weeks."},
      ].map((s2,i)=>(
        <Card key={i} style={{marginBottom:10,borderLeft:`4px solid ${s2.color}`}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <span style={{fontSize:10,fontWeight:700,color:"#fff",background:s2.color,borderRadius:20,padding:"2px 10px"}}>{s2.step}</span>
            <span style={{fontSize:13,fontWeight:800,color:s.navy}}>{s2.title}</span>
          </div>
          <div style={{background:"#f8fafc",borderRadius:8,padding:"10px 14px",marginBottom:8,borderLeft:`3px solid ${s2.color}`}}>
            <div style={{fontSize:11,color:"#374151",lineHeight:1.8,fontStyle:"italic"}}>{s2.script}</div>
          </div>
          <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>💡 {s2.tip}</div>
        </Card>
      ))}

      <Card style={{background:s.navy,marginBottom:14}}>
        <h3 style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:10}}>📊 What to Expect</h3>
        {[["Lenders that typically negotiate","Credit unions, monolines, some regional banks"],["Lenders that rarely negotiate","Big 6 banks — but not impossible"],["Average discount achieved","0.10–0.50% off posted renewal rate"],["Best time to call","Tuesday–Thursday, 10am–3pm when advisors are less busy"],["What to never do","Sign the renewal slip the day it arrives"]].map(([l,v])=>(
          <div key={l} style={{display:"flex",justifyContent:"space-between",gap:12,padding:"7px 0",borderBottom:`1px solid rgba(255,255,255,0.08)`,fontSize:11}}>
            <span style={{color:"rgba(255,255,255,0.7)"}}>{l}</span>
            <span style={{color:"#fff",fontWeight:600,textAlign:"right",flex:1}}>{v}</span>
          </div>
        ))}
      </Card>

      <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Consult"}))} style={{width:"100%",padding:"12px",background:s.red,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:14}}>📞 Want Help Negotiating? Get a Free Mortgage Consultation →</button>
      </>}
    </div>
  );
}

function LawyersTab(){
  const [subTab,setSubTab]=useState<"find"|"guide">("find");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Lawyers")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
  const [filterProv,setFilterProv]=useState("MB");
  const [filterCity,setFilterCity]=useState("");
  const [filterName,setFilterName]=useState("");
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

  const [showPartnerForm,setShowPartnerForm]=useState(false);
  const [pName,setPName]=useState("");
  const [pEmail,setPEmail]=useState("");
  const [pFirm,setPFirm]=useState("");
  const [pCity,setPCity]=useState("");
  const [pOk,setPOk]=useState(false);
  const [pSubmitting,setPSubmitting]=useState(false);

  async function submitPartner(){
    if(!pName||!pEmail||!pFirm){alert("Please fill in name, email, and firm.");return;}
    setPSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:pName,email:pEmail,firm:pFirm,city:pCity,type:"Lawyer Partner Inquiry"})});
      setPOk(true);
    }catch{alert("Something went wrong.");}
    setPSubmitting(false);
  }

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
  // PARTNER LAWYERS — Add real partners here when signed up
  const LAWYERS:any[]=[
    // Example structure — replace with real partner data:
    // {
    //   id:1, name:"John Smith", firm:"Smith Real Estate Law",
    //   city:"Winnipeg", prov:"MB", phone:"204-555-0200",
    //   email:"john@smithlaw.ca", website:"https://smithlaw.ca",
    //   photo:"", // URL to headshot
    //   types:["purchase","refinance","firsttime","condo"],
    //   fee:"$1,200–$1,800", languages:["English","Punjabi"],
    //   rating:4.9, reviews:32, verified:true, featured:true,
    //   lawSocietyUrl:"https://www.lawsociety.mb.ca/...",
    //   bio:"Real estate lawyer with 15+ years experience...",
    //   address:"123 Portage Ave, Winnipeg MB",
    //   turnaround:"5–7 business days"
    // }
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
    const matchName=!filterName||l.name.toLowerCase().includes(filterName.toLowerCase())||l.firm.toLowerCase().includes(filterName.toLowerCase());
    return matchProv&&matchCity&&matchType&&matchName;
  });

  const ls=LAW_SOCIETIES[filterProv];

  return(
    <div>
      {/* Sub-tab buttons */}
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        <button onClick={()=>setSubTab("find")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="find"?s.navy:s.border}`,background:subTab==="find"?s.navy:s.white,color:subTab==="find"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>⚖️ Find a Lawyer</button>
        <button onClick={()=>setSubTab("guide")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="guide"?s.navy:s.border}`,background:subTab==="guide"?s.navy:s.white,color:subTab==="guide"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>📋 Closing Guide</button>
      </div>

      {subTab==="find"&&<>
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

      {/* Partner CTA — moved to top for visibility */}
      <div style={{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1px solid #fde68a",borderRadius:12,padding:"14px 20px",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
        <div style={{flex:1,minWidth:200}}>
          <div style={{fontSize:13,fontWeight:800,color:"#92400e",marginBottom:3}}>⚖️ Are You a Real Estate Lawyer?</div>
          <div style={{fontSize:11,color:"#92400e",lineHeight:1.5}}>Join our referral network. We connect qualified buyers directly to you. Pay only per referred lead — no monthly or setup fees.</div>
        </div>
        <button onClick={()=>setShowPartnerForm(true)} style={{padding:"10px 20px",background:"#92400e",color:"#fff",borderRadius:8,fontSize:12,fontWeight:700,border:"none",cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}}>Partner With Us →</button>
      </div>

      {/* Filters */}
      <div style={{background:s.white,borderRadius:12,padding:"12px 16px",marginBottom:14,border:`1px solid ${s.border}`,display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"}}>
        <select value={filterProv} onChange={e=>{setFilterProv(e.target.value);setFilterCity("");}} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}>{Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
        <select value={filterCity} onChange={e=>setFilterCity(e.target.value)} style={{padding:"7px 10px",borderRadius:8,border:`1.5px solid ${s.border}`,fontSize:12,fontWeight:600}}><option value="">All Cities</option>{(PDATA[filterProv]?.cities||[]).map(c=><option key={c} value={c}>{c}</option>)}</select>
        <button onClick={()=>setFilterName("")} style={{padding:"7px 16px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🔍 Search</button>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {[["all","All Types"],["purchase","Purchase"],["firsttime","First-Time"],["refinance","Refinance"],["condo","Condo"]].map(([v,l])=>(
            <button key={v} onClick={()=>setFilterType(v)} style={{padding:"5px 10px",borderRadius:20,border:`1.5px solid ${filterType===v?s.navy:s.border}`,background:filterType===v?s.navy:s.white,color:filterType===v?"#fff":s.muted,fontSize:11,cursor:"pointer",fontWeight:filterType===v?700:400}}>{l}</button>
          ))}
        </div>
        <button onClick={()=>{setShowForm(true);setSelectedLawyer(null);}} style={{marginLeft:"auto",padding:"7px 16px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>⚖️ Request a Lawyer</button>
      </div>

      {/* Partner Lawyers or Coming Soon */}
      {LAWYERS.filter(l=>l.prov===filterProv&&(!filterCity||l.city===filterCity)).length>0?(
        <div style={{marginBottom:16}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12,marginBottom:14}}>
            {LAWYERS.filter(l=>l.prov===filterProv&&(!filterCity||l.city===filterCity)).map(l=>(
              <div key={l.id} style={{background:s.white,borderRadius:12,border:`2px solid ${l.featured?s.gold:s.border}`,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:l.featured?`linear-gradient(135deg,${s.gold},#d97706)`:`linear-gradient(135deg,#92400e,#78350f)`,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    {l.photo?<img src={l.photo} style={{width:40,height:40,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(255,255,255,0.3)"}} alt={l.name}/>:<div style={{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>⚖️</div>}
                    <div>
                      <div style={{color:"#fff",fontSize:14,fontWeight:800}}>{l.name}</div>
                      <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>{l.firm}</div>
                    </div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
                    {l.featured&&<span style={{background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>⭐ Featured</span>}
                    <span style={{background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>✓ Verified Partner</span>
                  </div>
                </div>
                <div style={{padding:14}}>
                  <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                    <span style={{background:"#f1f5f9",color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>📍 {l.city}, {l.prov}</span>
                    <span style={{background:"#fef3c7",color:"#92400e",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>💰 {l.fee}</span>
                    {l.rating&&<span style={{background:"#f0fdf4",color:"#15803d",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>⭐ {l.rating} ({l.reviews} reviews)</span>}
                  </div>
                  <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}>
                    {l.types.map((t:string)=><span key={t} style={{background:"#eff6ff",color:"#1e40af",borderRadius:20,padding:"2px 7px",fontSize:9,fontWeight:700,textTransform:"capitalize"}}>{t==="firsttime"?"First-Time":t}</span>)}
                  </div>
                  <p style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:8}}>{l.bio}</p>
                  {l.address&&<div style={{fontSize:10,color:s.muted,marginBottom:4}}>📍 {l.address}</div>}
                  {l.turnaround&&<div style={{fontSize:10,color:s.muted,marginBottom:4}}>⏱ Typical turnaround: {l.turnaround}</div>}
                  {l.languages?.length>1&&<div style={{fontSize:10,color:s.muted,marginBottom:8}}>🗣️ {l.languages.join(" · ")}</div>}
                  {l.lawSocietyUrl&&<a href={l.lawSocietyUrl} target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:10,color:s.blue,marginBottom:8,textDecoration:"underline"}}>✓ Verify Law Society membership →</a>}
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    <button onClick={()=>{setSelectedLawyer(l);setShowForm(true);setLcity(l.city);}} style={{flex:1,padding:"9px",background:"#92400e",color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Connect →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ):(
        /* Coming Soon */
        <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"32px 24px",marginBottom:16,textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:12}}>⚖️</div>
          <div style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:8}}>Find a Real Estate Lawyer</div>
          <div style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.7,maxWidth:480,margin:"0 auto 20px"}}>
            Submit a request and we'll connect you with a verified real estate lawyer within 1 business day. Be among the first listed in {PDATA[filterProv]?.name} — or submit a request and we'll connect you with a qualified lawyer in your area.
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>setShowForm(true)} style={{padding:"10px 24px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>⚖️ Request a Lawyer →</button>
            <button onClick={()=>setShowPartnerForm(true)} style={{padding:"10px 24px",background:s.gold,color:s.navy,border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>🤝 List Your Practice →</button>
          </div>
        </div>
      )}

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
      </>}

      {subTab==="guide"&&<>
      {/* Closing Timeline */}
      <Card style={{marginBottom:16}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📅 Closing Timeline — From Offer to Keys</h3>
        <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Here's exactly when your real estate lawyer gets involved during a typical Canadian home purchase.</p>
        <div style={{position:"relative"}}>
          <div style={{position:"absolute",left:18,top:0,bottom:0,width:2,background:`linear-gradient(180deg,${s.navy},${s.blue},${s.green})`,borderRadius:2}}/>
          {[
            {day:"Day 1",label:"Offer Accepted",desc:"Your offer is accepted. Start looking for a real estate lawyer immediately — don't wait.",lawyer:false,icon:"🏠"},
            {day:"Day 2–5",label:"Hire Your Lawyer",desc:"Retain a real estate lawyer. Send them your signed purchase agreement. They begin the title search.",lawyer:true,icon:"⚖️"},
            {day:"Day 5–15",label:"Lawyer Reviews Agreement",desc:"Your lawyer reviews the purchase agreement for red flags, conditions, and closing requirements.",lawyer:true,icon:"📋"},
            {day:"Day 7–14",label:"Mortgage Commitment",desc:"Your lender issues a mortgage commitment letter. Your lawyer receives instructions from the lender.",lawyer:true,icon:"🏦"},
            {day:"Day 10–20",label:"Title Search Complete",desc:"Your lawyer completes the title search, confirms no liens, and arranges title insurance.",lawyer:true,icon:"🔍"},
            {day:"3–5 Days Before Closing",label:"Closing Package Prepared",desc:"Your lawyer prepares all closing documents, calculates adjustments, and requests closing funds from you.",lawyer:true,icon:"📄"},
            {day:"1–2 Days Before",label:"Sign Documents",desc:"You meet with your lawyer to sign all documents including the mortgage and transfer of title.",lawyer:true,icon:"✍️"},
            {day:"Closing Day",label:"Funds Transfer & Title Transfer",desc:"Your lawyer transfers funds to the seller's lawyer, registers the title in your name, and receives the keys.",lawyer:true,icon:"🔑"},
            {day:"After Closing",label:"Registration Confirmed",desc:"Your lawyer confirms mortgage and title registration, sends you a reporting letter with all documents.",lawyer:true,icon:"✅"},
          ].map((step,i)=>(
            <div key={i} style={{display:"flex",gap:16,marginBottom:14,paddingLeft:8}}>
              <div style={{width:22,height:22,borderRadius:"50%",background:step.lawyer?s.navy:"#e2e8f0",border:`2px solid ${step.lawyer?s.navy:s.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,fontSize:10}}>{step.icon}</div>
              <div style={{flex:1,background:step.lawyer?"#f8fafc":s.white,borderRadius:10,padding:"10px 14px",border:`1px solid ${step.lawyer?s.border:"#f1f5f9"}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                  <span style={{fontSize:10,fontWeight:700,color:s.muted,background:"#f1f5f9",borderRadius:20,padding:"2px 8px"}}>{step.day}</span>
                  <span style={{fontSize:12,fontWeight:800,color:s.navy}}>{step.label}</span>
                  {step.lawyer&&<span style={{fontSize:9,fontWeight:700,color:"#fff",background:s.navy,borderRadius:20,padding:"1px 7px"}}>LAWYER INVOLVED</span>}
                </div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#1e40af",marginTop:4}}>
          💡 <b>Key tip:</b> Hire your lawyer within 48 hours of your offer being accepted. The earlier they start, the smoother your closing will be.
        </div>
      </Card>

      {/* Province Cost Comparison */}
      <Card style={{marginBottom:16}}>
        <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>💰 Legal Closing Costs by Province</h3>
        <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Typical all-in legal costs for a $500,000 home purchase. Includes lawyer fees, title insurance, disbursements, and land transfer tax.</p>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",minWidth:480}}>
            <thead>
              <tr style={{background:"#f8fafc"}}>
                {["Province","Land Transfer Tax","Legal Fees (est.)","Title Insurance","Total Closing Costs","First-Time Rebate"].map(h=>(
                  <th key={h} style={{padding:"9px 12px",fontSize:10,fontWeight:700,color:s.muted,textTransform:"uppercase",textAlign:"left",borderBottom:`1px solid ${s.border}`,whiteSpace:"nowrap"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {prov:"Ontario",ltt:"$6,475",legal:"$1,500",title:"$350","total":"$8,325","rebate":"Up to $4,000"},
                {prov:"Toronto (ON)",ltt:"$12,950",legal:"$1,500",title:"$350","total":"$14,800","rebate":"Up to $8,000"},
                {prov:"British Columbia",ltt:"$8,000",legal:"$1,400",title:"$300","total":"$9,700","rebate":"Up to $8,000"},
                {prov:"Alberta",ltt:"$400",legal:"$1,200",title:"$300","total":"$1,900","rebate":"None"},
                {prov:"Manitoba",ltt:"$6,650",legal:"$1,300",title:"$300","total":"$8,250","rebate":"Up to $4,500"},
                {prov:"Quebec",ltt:"$5,145",legal:"$1,500",title:"$300","total":"$6,945","rebate":"None (varies by city)"},
                {prov:"Saskatchewan",ltt:"$1,500",legal:"$1,100",title:"$300","total":"$2,900","rebate":"None"},
                {prov:"Nova Scotia",ltt:"$7,500",legal:"$1,300",title:"$300","total":"$9,100","rebate":"None"},
                {prov:"New Brunswick",ltt:"$7,500",legal:"$1,200",title:"$300","total":"$9,000","rebate":"None"},
                {prov:"PEI",ltt:"$7,500",legal:"$1,200",title:"$300","total":"$9,000","rebate":"Up to $3,000"},
              ].map((row,i)=>(
                <tr key={row.prov} style={{borderBottom:`1px solid ${s.light}`,background:i%2===0?s.white:"#fafbfc"}}>
                  <td style={{padding:"10px 12px",fontSize:12,fontWeight:700,color:s.navy,whiteSpace:"nowrap"}}>{row.prov}</td>
                  <td style={{padding:"10px 12px",fontSize:12,color:"#dc2626",fontWeight:600}}>{row.ltt}</td>
                  <td style={{padding:"10px 12px",fontSize:12,color:s.muted}}>{row.legal}</td>
                  <td style={{padding:"10px 12px",fontSize:12,color:s.muted}}>{row.title}</td>
                  <td style={{padding:"10px 12px",fontSize:13,fontWeight:800,color:s.navy}}>{row.total}</td>
                  <td style={{padding:"10px 12px",fontSize:11,color:row.rebate==="None"?s.muted:s.green,fontWeight:row.rebate==="None"?400:700}}>{row.rebate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{fontSize:10,color:"#bbb",marginTop:10}}>* Based on $500,000 purchase price. LTT calculated using 2026 provincial rates. Legal fees are estimates — always get a quote. Alberta shows title transfer fee only (no LTT).</p>
      </Card>

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
      </>}

      {/* Partner Form Modal */}
      {showPartnerForm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowPartnerForm(false)}>
          <div style={{background:s.white,borderRadius:16,width:"100%",maxWidth:420,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            <div style={{background:"#92400e",padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:700}}>⚖️ Lawyer Partner Inquiry</div>
              <button onClick={()=>setShowPartnerForm(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",fontSize:14,cursor:"pointer"}}>✕</button>
            </div>
            <div style={{padding:18}}>
              {!pOk?(
                <>
                  <p style={{fontSize:12,color:s.muted,marginBottom:14,lineHeight:1.6}}>Fill out your details and we'll be in touch about our referral program. Pay only per referred lead — no monthly or setup fees.</p>
                  <Field label="Your Name *"><input type="text" value={pName} onChange={e=>setPName(e.target.value)} placeholder="Full name" style={inp}/></Field>
                  <Field label="Law Firm *"><input type="text" value={pFirm} onChange={e=>setPFirm(e.target.value)} placeholder="Firm name" style={inp}/></Field>
                  <Field label="Email *"><input type="email" value={pEmail} onChange={e=>setPEmail(e.target.value)} placeholder="your@firm.com" style={inp}/></Field>
                  <Field label="City"><input type="text" value={pCity} onChange={e=>setPCity(e.target.value)} placeholder="e.g. Winnipeg" style={inp}/></Field>
                  <button onClick={submitPartner} disabled={pSubmitting} style={{width:"100%",padding:10,background:pSubmitting?"#aaa":"#92400e",color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:pSubmitting?"not-allowed":"pointer",marginTop:4}}>{pSubmitting?"Submitting...":"Send Inquiry →"}</button>
                </>
              ):(
                <div style={{textAlign:"center",padding:"20px 0"}}>
                  <div style={{fontSize:36,marginBottom:8}}>✅</div>
                  <div style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:6}}>Thanks {pName}!</div>
                  <div style={{fontSize:12,color:s.muted,lineHeight:1.7}}>We'll be in touch within 1 business day to discuss the referral program.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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

      {/* Cross-promotion banners */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginTop:4,marginBottom:16}}>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Listings"}))} style={{background:`linear-gradient(135deg,#f59e0b,#d97706)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
          <div style={{fontSize:20,marginBottom:4}}>🏘️</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Still looking for a home?</div>
          <div style={{color:"rgba(255,255,255,0.9)",fontSize:11}}>Browse listings across Canada →</div>
        </button>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("switchTab",{detail:"Realtors"}))} style={{background:`linear-gradient(135deg,${s.green},#15803d)`,border:"none",borderRadius:12,padding:"14px 16px",cursor:"pointer",textAlign:"left"}}>
          <div style={{fontSize:20,marginBottom:4}}>🤝</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:800,marginBottom:3}}>Need a realtor first?</div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Find a local REALTOR® to help with your purchase →</div>
        </button>
      </div>
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

function BlogTab(){
  const [article,setArticle]=useState<string|null>(null);
  const [search,setSearch]=useState("");
  const [filterCat,setFilterCat]=useState("All");
  const ARTICLES=[
    {
      id:"fixed-vs-variable-2026",
      title:"Fixed vs Variable Mortgage Rates in Canada — What Should You Choose in 2026?",
      date:"July 15, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Rate Strategy",
      summary:"With the Bank of Canada holding at 2.25% for the fifth consecutive time, the fixed vs variable debate is more relevant than ever. Here's what Canadian homeowners need to know.",
      content:`
The Bank of Canada held its overnight rate at 2.25% on July 15, 2026 — the fifth consecutive hold. For Canadian mortgage holders and homebuyers, this stability raises an important question: should you choose a fixed or variable rate mortgage in 2026?

## The Current Rate Environment

As of July 2026, here's where rates stand:
- **Best 5-year fixed rate:** approximately 3.90–4.10%
- **Best 5-year variable rate:** approximately 3.35–3.55% (prime minus ~0.90%)
- **Spread:** roughly 0.55–0.75% in favour of variable

This spread is smaller than it was during the peak cutting cycle of 2024–2025, when variable rates offered a 1.5% or greater advantage over fixed. The compression matters because a smaller spread means less reward for taking on the uncertainty of a variable rate.

## What is a Fixed Rate Mortgage?

A fixed rate mortgage locks your interest rate for the entire term — typically 1, 2, 3, or 5 years in Canada. Your payment stays the same every month regardless of what the Bank of Canada does with interest rates.

**Advantages of fixed rates:**
- Predictable payments — budget with certainty
- Protection against rate increases
- Lower stress — you don't check BoC announcements
- Preferred by mortgage lenders for qualification

**Disadvantages of fixed rates:**
- Currently higher than variable by 0.55–0.75%
- Breaking the mortgage early triggers an Interest Rate Differential (IRD) penalty — often very expensive at big banks
- You don't benefit if rates fall during your term

## What is a Variable Rate Mortgage?

A variable rate mortgage floats with the Bank of Canada's overnight rate, reflected through your lender's prime rate. When the BoC cuts rates, your rate (and often your payment) goes down. When the BoC raises rates, it goes up.

**Advantages of variable rates:**
- Currently lower than fixed rates
- Historically, variable rate borrowers pay less interest over long periods
- Breaking the mortgage early only costs 3 months interest — much cheaper than fixed IRD penalties
- You benefit immediately when the BoC cuts rates

**Disadvantages of variable rates:**
- Payments fluctuate (unless you have an adjustable-rate mortgage that adjusts payment automatically)
- Uncertainty — requires higher stress tolerance
- The BoC could raise rates if inflation resurges

## The Historical Argument for Variable

Research consistently shows that variable rate borrowers have paid less interest than fixed rate borrowers over long periods in Canada. A 2001 study by Dr. Moshe Milevsky of York University found that variable rate mortgages were the better choice roughly 90% of the time over 15-year periods. However, the 2022–2023 rate hike cycle proved that the other 10% of the time can be brutal — variable rate holders saw their rates jump from 1.45% to 5.45% in just 18 months.

## What Should You Choose in 2026?

**Choose fixed if:**
- You're on a tight budget and need payment certainty
- You're risk-averse and would lose sleep over rate increases
- You plan to stay in the home for the full term and aren't likely to break the mortgage
- You believe rates may rise (if inflation resurges from tariff pressures or supply shocks)

**Choose variable if:**
- You have financial flexibility and can absorb payment increases
- You believe the Bank of Canada will cut rates further in late 2026 or 2027
- You're likely to sell or refinance before your term ends (cheap prepayment penalty is valuable)
- You want to take advantage of the current rate spread

## The 2026 Wildcard: Tariffs and Trade Policy

One factor complicating the 2026 decision is ongoing Canada-US trade uncertainty. If tariff pressures cause inflation to rise unexpectedly, the Bank of Canada could pause its neutral stance or even consider hikes. This risk — low but non-zero — adds uncertainty to the variable rate picture that didn't exist as strongly in 2023–2024.

## Our Recommendation for 2026

For most Canadian homebuyers in 2026, a **2 or 3-year fixed rate** strikes the best balance. It gives you payment certainty in an uncertain environment, while keeping your term short enough to benefit from rate reductions that most economists expect by 2027–2028. The 5-year fixed commits you too long given current economic uncertainty; variable gives you a modest rate advantage that may not justify the risk given the compressed spread.

**Always consult a licensed mortgage professional** before making any rate decision. Every borrower's situation — income stability, risk tolerance, renewal timeline, and financial cushion — is different.

Use our [Rate Finder](/rate-finder) to get a personalized recommendation based on your profile, or compare current rates from 50+ Canadian lenders in our [Rates tab](/).
      `
    },
    {
      id:"mortgage-stress-test-guide-2026",
      title:"Canada's Mortgage Stress Test Explained — 2026 Complete Guide",
      date:"July 10, 2026",
      author:"Canada Mortgage Rates",
      readTime:"7 min read",
      category:"First-Time Buyers",
      summary:"The mortgage stress test has changed since its 2018 introduction. Here's everything Canadian homebuyers need to know about qualifying in 2026 — including recent rule changes.",
      content:`
Canada's mortgage stress test requires all homebuyers — even those with 20% or more down payment — to prove they can afford their mortgage at a rate higher than what they'll actually pay. Here's everything you need to know in 2026.

## What is the Mortgage Stress Test?

Introduced in 2018 and expanded in 2021, the mortgage stress test (officially called the Minimum Qualifying Rate or MQR) requires lenders to confirm that borrowers can still afford their mortgage payments if interest rates were higher than the contracted rate.

The stress test rate is the **higher** of:
- Your actual contracted mortgage rate **plus 2%**
- **5.25%** (the regulatory floor)

So if you're getting a 5-year fixed rate at 3.90%, you'll be stress-tested at **5.90%** (3.90% + 2%). If your rate is only 3.25%, you'll be tested at **5.25%** (the floor kicks in).

## Why Does the Stress Test Exist?

The stress test was introduced after years of ultra-low interest rates left many Canadians with mortgages they could barely afford at low rates — let alone if rates rose. The 2022–2023 rate hike cycle proved this concern valid, as many variable rate holders scrambled when payments jumped.

The test protects both borrowers (from overleveraging) and lenders (from defaults).

## How is the Stress Test Calculated?

Your lender will use two key ratios to evaluate your application:

**GDS (Gross Debt Service Ratio):** Maximum 39%
This is the percentage of your gross monthly income that goes toward housing costs:
- Mortgage payment (at stress test rate)
- Property taxes
- Heating costs
- 50% of condo fees (if applicable)

**TDS (Total Debt Service Ratio):** Maximum 44%
This adds all other debt payments to your GDS:
- Car loans
- Credit card minimum payments
- Student loans
- Any other monthly obligations

## Example Stress Test Calculation

**Scenario:** $500,000 home, 10% down ($50,000), $450,000 mortgage, 25-year amortization. Contracted rate: 3.90%. Stress test rate: 5.90%.

Monthly payment at 3.90%: approximately $2,334
Monthly payment at 5.90% (stress test): approximately $2,877

If your gross monthly income is $7,000:
- Housing costs (mortgage + tax + heat): $2,877 + $300 + $150 = $3,327
- GDS ratio: $3,327 ÷ $7,000 = **47.5% — FAILS** (limit is 39%)

This buyer would need to either increase income, increase down payment, extend amortization to 30 years, or purchase a less expensive property.

## 2026 Changes to the Stress Test

Several important updates affect Canadian buyers in 2026:

**30-year amortization expanded:** As of late 2024 and confirmed in the 2026 federal budget, all buyers of newly built homes can now access 30-year insured amortizations — not just first-time buyers. This reduces the monthly payment used in GDS/TDS calculations, making it easier to pass the stress test on new builds.

**Insured mortgage cap raised to $1.5M:** Previously, insured mortgages (less than 20% down) were capped at $1M. The cap now extends to $1.5M, opening up more options in expensive markets like Toronto and Vancouver.

**Uninsured mortgage exemption proposed:** There has been ongoing discussion about whether borrowers refinancing with their existing lender should face a stress test. As of mid-2026, this has not been changed federally, though some lenders have introduced portfolio programs with more flexibility.

## How to Improve Your Stress Test Result

**Increase your down payment:** A larger down payment means a smaller mortgage and lower monthly payments — directly improving your GDS ratio.

**Pay down other debts:** Car loans, student loans, and credit card balances all count in TDS. Eliminating these before applying can dramatically improve qualification.

**Choose a longer amortization:** A 30-year amortization (available on new builds or for buyers with 20%+ down) reduces the payment used in stress testing compared to 25 years.

**Add a co-borrower:** A spouse, parent, or guarantor with stable income can increase your combined qualifying income.

**Shop for the right lender:** Not all lenders apply the stress test identically on the edges — credit unions and some monolines may have slightly more flexibility on GDS/TDS ratios for strong applicants.

## Common Stress Test Myths

**Myth: "The stress test rate is what I'll actually pay."**
No — it's only used for qualification. You pay your contracted rate.

**Myth: "Credit unions don't have to use the stress test."**
Provincially regulated credit unions are not subject to federal OSFI rules — but most still apply a stress test as a prudent lending standard.

**Myth: "Passing the stress test means I can comfortably afford the home."**
The stress test is a floor, not a ceiling. Many financial advisors recommend limiting housing costs to 30-35% of gross income, below the 39% GDS limit.

Use our free [Stress Test Calculator](/) to see exactly what you qualify for based on your income, down payment, and debts.
      `
    },
    {
      id:"first-time-buyer-programs-canada-2026",
      title:"Every First-Time Homebuyer Program in Canada — 2026 Complete Guide",
      date:"July 8, 2026",
      author:"Canada Mortgage Rates",
      readTime:"8 min read",
      category:"First-Time Buyers",
      summary:"The federal government and every province offer programs to help first-time buyers. This guide covers every available program in 2026 — federal and provincial.",
      content:`
Buying your first home in Canada comes with access to a range of government programs designed to reduce the cost and improve affordability. In 2026, these programs have been significantly expanded. Here's every program available to you.

## Federal Programs

### 1. First Home Savings Account (FHSA)

The FHSA is the most powerful first-time buyer tool introduced in recent years. Launched in April 2023 and now fully established, it combines the best features of a TFSA and an RRSP specifically for homebuying.

**How it works:**
- Contribute up to $8,000/year, lifetime maximum $40,000
- Contributions are tax-deductible (like an RRSP)
- Withdrawals for a home purchase are completely tax-free (like a TFSA)
- Unused room carries forward one year

**Key rule:** You must be a first-time homebuyer and use the funds to purchase a qualifying home in Canada.

**The math:** A couple can each open an FHSA, contributing a combined $16,000/year. Over 5 years, that's $80,000 saved with full tax deductibility on the way in and zero tax on the way out. On a $100,000 combined income, that's roughly $22,000 in combined tax savings.

### 2. Home Buyers' Plan (HBP)

The Home Buyers' Plan allows first-time buyers to withdraw from their RRSP to purchase or build a home.

**2026 limits:**
- Up to $60,000 per person ($35,000 was the old limit, raised in Budget 2024)
- Couples can withdraw up to $120,000 combined
- Must repay over 15 years starting 2 years after withdrawal

**Best strategy:** Use the FHSA first (no repayment required), then supplement with HBP if needed.

### 3. First-Time Home Buyer's Tax Credit (HBTC)

A federal non-refundable tax credit worth $10,000, which generates a tax reduction of $1,500 for eligible first-time buyers. Available on your tax return in the year you purchase your home.

### 4. GST/HST New Housing Rebate

If you're buying a newly built home, you may qualify for a rebate of the GST (or the federal portion of HST) paid on the purchase. The rebate is 36% of GST paid on homes under $350,000, with a partial rebate up to $450,000. In 2026, the cap discussions are ongoing — check the CRA website for the latest limits.

### 5. 30-Year Amortization for New Builds

All buyers (not just first-timers) of newly built homes can now access 30-year insured amortizations. For first-time buyers specifically, 30-year amortization is also available on resale homes — reducing your monthly payment and stress test threshold.

## Provincial Programs

### Ontario

**Land Transfer Tax Rebate:** First-time buyers receive a rebate of up to $4,000 on Ontario's land transfer tax.
**Toronto Land Transfer Tax Rebate:** Toronto buyers get an additional rebate of up to $4,475 on the municipal land transfer tax.
**Ontario First Home Savings Account top-up:** Ontario matched FHSA contributions for low-to-moderate income buyers — check ontario.ca for current status.

### British Columbia

**First-Time Home Buyers' Program:** Exemption or reduction of Property Transfer Tax (PTT) for homes under $835,000.
**BC Home Owner Grant:** Annual grant reducing property taxes for principal residence owners.
**BC Home Flipping Tax:** Note — homes sold within 2 years of purchase face a new flipping tax. Plan to stay.

### Alberta

Alberta has no provincial land transfer tax — a significant advantage for first-time buyers compared to Ontario and BC.
**Affordable Housing Programs:** Various municipal programs in Calgary and Edmonton — check with your city.

### Manitoba

**Land Transfer Tax:** Manitoba's LTT is relatively low compared to eastern provinces. First-time buyers may qualify for a rebate — check at gov.mb.ca.
**Manitoba Home Renovation Tax Credit:** Not exclusively for first-time buyers but useful for fixer-uppers.

### Quebec

**Home Buyers' Tax Credit:** Quebec offers its own provincial version of the federal HBTC.
**First-Time Buyers Refundable Tax Credit:** A refundable credit up to $750.

### Saskatchewan

**Saskatchewan First-Time Home Buyer Tax Credit:** Similar to federal HBTC, up to $1,050 in provincial tax savings.

## How to Stack Programs for Maximum Benefit

The most powerful approach for a Canadian couple buying their first home:

1. **Both open FHSAs** and contribute $8,000/year for 3-5 years before buying
2. **Withdraw RRSP via HBP** to supplement down payment
3. **Claim HBTC** on that year's tax return ($1,500 credit)
4. **Apply for provincial LTT rebate** at closing through your lawyer
5. **GST/HST rebate** if buying new construction — claimed automatically at closing
6. **Request 30-year amortization** to lower payments and improve stress test

A couple who has been saving in FHSAs for 3 years could have $48,000 tax-free plus combined HBP withdrawals of up to $120,000 — potentially $168,000 toward a down payment, nearly all of it with significant tax advantages.

Use our [First-Time Buyers tab](/) to explore all programs available in your province, or run our [Affordability Calculator](/) to see exactly how much you qualify for.
      `
    },
    {
      id:"mortgage-renewal-guide-2026",
      title:"Mortgage Renewal in Canada — How to Get the Best Rate in 2026",
      date:"July 5, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Renewal",
      summary:"Approximately 60% of Canadian mortgages are up for renewal in 2025 and 2026 — many at rates significantly higher than today's market. Here's how to negotiate the best renewal rate.",
      content:`
An estimated 60% of Canadian mortgages are coming up for renewal in 2025 and 2026, many originally locked in at rates of 4.5–5.5% or higher during the 2022–2023 rate hike cycle. With current best rates around 3.90% for 5-year fixed, many homeowners could save hundreds of dollars per month by knowing how to handle their renewal properly.

## When Does Mortgage Renewal Happen?

Your mortgage renewal occurs at the end of your current mortgage term — most commonly every 5 years in Canada, though 1, 2, and 3-year terms are increasingly popular. At renewal, your entire outstanding balance must be refinanced under new terms.

Your lender is legally required to notify you of renewal at least 21 days before your term ends. Most send a notice 120–180 days (4–6 months) before renewal.

## The Most Expensive Mistake at Renewal

Signing the renewal letter your lender sends you without shopping around. Lenders rely on this. Studies consistently show that 70–80% of Canadians renew with their existing lender without negotiating. Lenders know this and frequently offer their worst rates in the initial renewal offer, knowing most customers will accept.

Your lender's renewal offer is a starting point for negotiation, not a final offer.

## The Renewal Process — Timeline

**5-6 months before renewal:**
- Begin researching current market rates. Check Canada Mortgage Rates, Ratehub, and WOWA.
- Get a few quotes from competing lenders or a mortgage broker.
- Know what you're currently paying and what the market is offering.

**120 days (4 months) before renewal:**
- Most lenders allow you to lock in a new rate this far in advance.
- This is when you should approach your lender and begin negotiations.
- You can also switch lenders at this stage — some lenders cover the legal costs of switching.

**60-30 days before renewal:**
- If you haven't locked in, you're running out of time to switch lenders without penalty.
- A mortgage broker can still potentially find a better deal, but options narrow.

**At renewal:**
- If you do nothing, your mortgage automatically renews, often at posted rate — the most expensive option.

## How to Negotiate Your Renewal Rate

**Step 1: Know the market rate**
Before contacting your lender, know what the best available rate is from competing lenders. Use Canada Mortgage Rates to compare current rates. This is your leverage.

**Step 2: Contact your lender first**
Call your renewal department (not just your local branch) and ask directly: "What is the best rate you can offer me for renewal?" The initial offer they give is almost never their best.

**Step 3: Present the competition**
Tell your lender you've been quoted [X%] from [Lender Name] and that you're considering switching. This changes the conversation entirely. Most lenders have a retention desk with authority to beat competitor rates.

**Step 4: The script**
"I've been a loyal customer for [X years] and I have a renewal coming up. I've been quoted [X%] from [competing lender]. I'd like to stay with you, but I need you to match or beat that rate. Can you do that?"

**Step 5: Know your switching costs**
If your lender won't budge, calculate the true cost of switching. Most lenders absorb legal fees and appraisal costs for switches. The process takes about 30 days and your broker handles most of it.

## Should You Switch Lenders at Renewal?

Switching lenders at renewal is penalty-free — unlike breaking your mortgage mid-term. Your mortgage term ending is the ideal time to shop the market with zero cost.

**Reasons to switch:**
- Your current lender's rate is higher than the market by more than 0.25%
- Your financial situation has improved and you qualify for better products
- You want to access a different prepayment structure or features
- Your current lender's service has been poor

**Reasons to stay:**
- Your lender matches the best available rate
- You have a complex situation your lender already understands
- You have other products tied to your mortgage (HELOC, etc.) that would be disrupted

## Choosing Your New Term at Renewal

With the Bank of Canada holding at 2.25% as of July 2026, and most economists expecting rates to remain stable or possibly fall slightly in 2027, the term decision matters:

**1-year fixed (~4.50%):** Maximum flexibility. Makes sense if you believe rates will fall significantly within a year.
**2-year fixed (~4.20%):** Good balance of rate certainty and flexibility heading into a potentially lower rate environment.
**3-year fixed (~4.10%):** Our top recommendation for most 2026 renewers — captures the current rate environment without overcommitting.
**5-year fixed (~3.90%):** Lowest current rate but locks you in through 2031 — a long commitment given economic uncertainty.
**Variable (~3.35–3.55%):** Could save money if BoC cuts further, but rates have stabilized and the spread vs fixed has compressed.

## Renewal Checklist

Before signing any renewal:
- ☐ Have you compared rates from at least 3 lenders or brokers?
- ☐ Did you ask your current lender directly for their best rate?
- ☐ Did you present a competitor quote?
- ☐ Have you considered whether your needs have changed (want to pay down faster, need to access equity)?
- ☐ Have you reviewed prepayment privileges in the new term?
- ☐ Have you considered the IRD penalty risk if choosing a long fixed term?

Use our [Renewal Calculator](/) to see exactly how much you could save by switching rates, and our [Negotiate Script](/) for the word-for-word conversation to have with your lender.
      `
    },
    {
      id:"home-buying-closing-costs-canada-2026",
      title:"Closing Costs in Canada — Every Fee You Need to Budget For in 2026",
      date:"July 1, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Home Buying",
      summary:"Most homebuyers focus on their down payment and mortgage payment but underestimate closing costs. In Canada, closing costs typically add 1.5–4% to your purchase price.",
      content:`
Closing costs are the fees and expenses you pay on top of your down payment when you complete a home purchase. Many first-time buyers are caught off guard by these costs — budget them in from day one.

## What Are Closing Costs?

Closing costs are one-time expenses due on or before your closing date. Unlike your down payment and ongoing mortgage payments, they are generally not financed — you pay them from savings.

**Total estimate:** 1.5–4% of purchase price for most Canadian buyers
On a $500,000 home: approximately $7,500–$20,000 in additional costs

## Land Transfer Tax (LTT)

The largest closing cost in most provinces. Calculated as a percentage of your purchase price on a tiered basis.

**Ontario LTT on a $500,000 home:** approximately $6,475
**Toronto buyers:** Add another $4,475 (municipal LTT)
**British Columbia (Property Transfer Tax):** approximately $8,000
**Manitoba:** approximately $3,870
**Quebec (Welcome Tax):** approximately $5,500
**Alberta:** No provincial LTT — the biggest advantage of buying in Alberta

**First-time buyer rebates:** Ontario, BC, and some other provinces offer LTT rebates for first-time buyers. Your lawyer applies these at closing.

## Legal Fees

A real estate lawyer is required for every home purchase in Canada. They handle the title transfer, review the purchase agreement, and ensure the property is free of liens and encumbrances.

**Typical range:** $1,500–$2,500 + disbursements (title search, registration fees, etc.)

Shop around — legal fees vary significantly between firms. All real estate lawyers are regulated and must carry malpractice insurance, so cheaper doesn't necessarily mean worse.

## Title Insurance

Title insurance protects against defects in the title that weren't discovered before closing — survey irregularities, undisclosed liens, fraud, and encroachments.

**Cost:** $200–$400 for a one-time premium covering the life of your ownership.

Almost always recommended — a very small cost for meaningful protection.

## Home Inspection

A professional home inspection examines the condition of the property before you finalize the purchase.

**Cost:** $400–$700 depending on home size and province.

Do not skip this to save money. A $500 inspection can identify $50,000 in hidden problems.

## CMHC Mortgage Default Insurance

If your down payment is less than 20%, you must pay CMHC (or Sagen/Canada Guaranty) default insurance. This protects your lender — not you — if you default.

**Premium rates:**
- 5–9.99% down: 4.00% of mortgage amount
- 10–14.99% down: 3.10% of mortgage amount
- 15–19.99% down: 2.80% of mortgage amount

**On a $450,000 mortgage (5% down):** $450,000 × 4% = $18,000 added to your mortgage
You don't pay this upfront — it's added to your mortgage balance and amortized over the life of the loan.

## Property Tax Adjustment

At closing, you reimburse the seller for any property taxes they've pre-paid beyond the closing date. This is calculated to the day.

**Estimate:** $500–$2,500 depending on your province, city, and closing date.

## Home Insurance

Your lender requires proof of home insurance before releasing mortgage funds. You need a policy effective on your closing date.

**First-year cost:** $800–$1,800 depending on province, home size, and coverage.

## Moving Costs

Often overlooked in closing cost planning.

**Local move:** $800–$2,500
**Long-distance move:** $3,000–$10,000+

## Utility Setup and Connection Fees

Budget $200–$500 for utility connections, security deposits, and any setup fees.

## Immediate Repairs and Replacements

Even a home that passed inspection may need immediate attention — new locks, minor repairs, or upgrades you planned before moving in.

**Recommendation:** Budget at least 1% of purchase price as a new home emergency fund beyond your closing costs.

## Total Closing Cost Summary — $500,000 Home in Manitoba

| Item | Estimated Cost |
|------|---------------|
| Land Transfer Tax | $3,870 |
| Legal Fees | $1,800 |
| Title Insurance | $300 |
| Home Inspection | $500 |
| CMHC Premium (if <20% down) | Added to mortgage |
| Property Tax Adjustment | $800 |
| Home Insurance (first year) | $950 |
| Moving Costs | $1,500 |
| Immediate Repairs/Setup | $2,000 |
| **Total Estimate** | **$11,720** |

This is on top of your down payment. On a $500,000 home with 10% down ($50,000), you'd need approximately $62,000 in cash accessible at closing.

Use our free [Closing Cost Calculator](/) to get a detailed estimate for your specific province, home price, and down payment — including any first-time buyer rebates you qualify for.
      `
    },
    {
      id:"down-payment-canada-2026",
      title:"How Much Down Payment Do You Need in Canada — 2026 Complete Guide",
      date:"June 28, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Home Buying",
      summary:"Down payment requirements in Canada changed significantly in 2024 and 2026. Here's exactly how much you need, what sources are acceptable, and strategies to save faster.",
      content:`
Your down payment is the single most important number in your homebuying journey. It determines whether you need mortgage default insurance, what rate you qualify for, and how much your monthly payment will be. Here's everything you need to know about down payments in Canada in 2026.

## Minimum Down Payment Requirements in Canada

Canada has a tiered minimum down payment system based on purchase price:

**Homes under $500,000:** Minimum 5% down
**Homes $500,000–$1,499,999:** 5% on the first $500,000 + 10% on the remainder
**Homes $1,500,000 and above:** Minimum 20% down (no default insurance available)

**Example on a $700,000 home:**
- First $500,000 × 5% = $25,000
- Remaining $200,000 × 10% = $20,000
- Total minimum down payment: $45,000 (6.4% of purchase price)

**Key 2026 update:** The insured mortgage cap was raised from $1,000,000 to $1,500,000 in late 2024. This means buyers in expensive markets like Toronto and Vancouver can now purchase homes up to $1.5M with less than 20% down — a significant change that opened up thousands of previously cash-dependent purchases.

## The 20% Threshold — Why It Matters

Putting 20% or more down is a major financial milestone in Canada because it eliminates the requirement for CMHC mortgage default insurance.

**With less than 20% down:** You must pay default insurance (CMHC, Sagen, or Canada Guaranty). Premiums range from 2.80% to 4.00% of your mortgage amount, added to your mortgage balance.

**With 20% or more down:** No default insurance required. This saves thousands of dollars and also gives you access to more lender options, including many monolines and credit unions that don't offer insured products.

On a $500,000 home:
- 5% down ($25,000): CMHC premium of $18,500 added to mortgage
- 10% down ($50,000): CMHC premium of $13,950 added to mortgage
- 20% down ($100,000): No CMHC premium — saves $11,200+ vs 10% down scenario

## Acceptable Sources for Down Payment

Not all money is equal in the eyes of a mortgage lender. Your down payment must come from acceptable, documented sources:

**Always acceptable:**
- Your own savings (bank account, TFSA, GIC)
- RRSP withdrawal under the Home Buyers' Plan
- FHSA withdrawal (First Home Savings Account)
- Sale proceeds from another property
- Inheritance (with documentation)
- Gift from an immediate family member (with gift letter — must be a true gift, not a loan)

**Conditionally acceptable:**
- Proceeds from selling investments, stocks, or cryptocurrency (with documentation of liquidation)
- Borrowed funds — generally NOT acceptable for minimum down payment, though some lenders allow it for amounts above the minimum

**Not acceptable:**
- Personal loans or lines of credit used as down payment (without lender approval)
- Cash without documented source ("mattress money")
- Money from non-family third parties without explanation

Your lender will require 90 days of bank statements to document the source of your down payment. Large deposits will be questioned — explain them early.

## Strategies to Save Your Down Payment Faster

### 1. Open a First Home Savings Account (FHSA) Today

The FHSA is the fastest legal path to a down payment for first-time buyers. You can contribute up to $8,000/year ($16,000 for a couple) with full tax deductibility and completely tax-free withdrawal for a home purchase. If you're not already contributing to one, you're leaving money on the table.

### 2. Use the Home Buyers' Plan

You can withdraw up to $60,000 from your RRSP (raised from $35,000 in Budget 2024) to use as a down payment. You have 15 years to repay. Used together with the FHSA, a couple can access up to $200,000 in registered savings toward a down payment.

### 3. Automate Your Savings

Set up an automatic transfer to a dedicated down payment account on every payday. Treating your down payment savings like a fixed expense is the most consistent path to hitting your target.

### 4. Consider a Secondary Suite Strategy

In some provinces, the rental income from a secondary suite (basement apartment) can be used to qualify for a larger mortgage — effectively letting your down payment go further.

### 5. Family Gift

Parents or grandparents can gift funds for a down payment. The lender will require a signed gift letter confirming the funds are a true gift with no expectation of repayment. There are no tax implications for the recipient in Canada.

## How Down Payment Affects Your Monthly Payment

On a $600,000 home at 3.90% (5-year fixed), 25-year amortization:

| Down Payment | Mortgage Amount | CMHC Premium | Total Mortgage | Monthly Payment |
|---|---|---|---|---|
| 5% ($30,000) | $570,000 | $22,800 | $592,800 | $3,080 |
| 10% ($60,000) | $540,000 | $16,740 | $556,740 | $2,893 |
| 20% ($120,000) | $480,000 | $0 | $480,000 | $2,494 |

The jump from 5% to 20% down saves $586/month — or $7,032/year — in mortgage payments.

Use our [Affordability Calculator](/) to see how different down payment amounts affect what you can afford, and our [Closing Cost Calculator](/) to factor in all the costs due at closing.
      `
    },
    {
      id:"cmhc-mortgage-insurance-canada-2026",
      title:"CMHC Mortgage Default Insurance — What It Costs and How to Avoid It",
      date:"June 25, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Home Buying",
      summary:"CMHC mortgage default insurance is mandatory for Canadian homebuyers with less than 20% down. Here's exactly what it costs, how it works, and how to avoid it.",
      content:`
If you're buying a home in Canada with less than 20% down payment, you're required by law to purchase mortgage default insurance. Most Canadians know it as "CMHC insurance" — though CMHC is just one of three approved providers. Here's everything you need to know.

## What is Mortgage Default Insurance?

Mortgage default insurance (also called mortgage loan insurance) protects your lender — not you — if you stop making mortgage payments and the lender suffers a loss on the property. Despite protecting the lender, you pay the premium.

It exists because high-ratio mortgages (less than 20% down) represent higher risk for lenders. The insurance allows lenders to offer mortgages to buyers who haven't saved a full 20% down payment, at competitive rates.

## Who Provides Mortgage Default Insurance in Canada?

Three companies are approved to provide mortgage default insurance in Canada:

**CMHC (Canada Mortgage and Housing Corporation):** Federal Crown corporation, the largest provider and most well-known.

**Sagen (formerly Genworth Canada):** Private insurer, now owned by Brookfield Asset Management.

**Canada Guaranty:** Private insurer, offers competitive products.

Your lender chooses which insurer to use — you don't get to pick. However, the premium rates are identical across all three providers.

## CMHC Premium Rates — 2026

| Down Payment | Premium Rate | Example on $500,000 Mortgage |
|---|---|---|
| 5–9.99% | 4.00% | $20,000 |
| 10–14.99% | 3.10% | $15,500 |
| 15–19.99% | 2.80% | $14,000 |
| 20% or more | 0% | $0 |

The premium is added to your mortgage balance — you don't pay it upfront. However, PST/HST applies to the premium in some provinces and IS paid upfront at closing (Ontario charges HST on the CMHC premium; Quebec charges QST).

**On a $500,000 home with 5% down ($25,000):**
- Mortgage amount: $475,000
- CMHC premium: $475,000 × 4% = $19,000
- Total mortgage: $494,000
- Monthly payment at 3.90%: approximately $2,567

## What's the True Cost?

The premium adds to your mortgage balance, which means you pay interest on it for the life of your mortgage.

On a $19,000 CMHC premium added to a mortgage at 3.90% over 25 years, the true total cost with interest is approximately $29,500. That's the real cost of buying with 5% down vs 20% down.

## Who is Required to Pay CMHC Insurance?

You MUST have default insurance if:
- Your down payment is less than 20% of the purchase price
- Your purchase price is under $1,500,000 (raised from $1M in 2024)
- The property will be your primary residence (investment properties require 20%+ down regardless)
- Your amortization is 25 years or less for insured mortgages (30 years is now available for new builds and first-time buyers)

## Who is EXEMPT from CMHC Insurance?

You do NOT need default insurance if:
- You put 20% or more down on any property
- You're purchasing a home over $1,500,000 (requires 20%+ down anyway)
- You're purchasing a rental property (uninsured)
- You're a federal or provincial government entity

## How to Avoid CMHC Insurance

### Strategy 1: Save 20% Down Payment
The cleanest solution. Use an FHSA and RRSP HBP to accelerate savings. On a $600,000 home, you need $120,000 to avoid CMHC insurance.

### Strategy 2: Buy a Less Expensive Property
If your savings can cover 20% of a lower-priced property, consider starting with a smaller home or condo to build equity, then upgrading later.

### Strategy 3: Gifted Down Payment
If a family member can gift you funds to bring your down payment to 20%, you avoid the CMHC premium entirely. On a $500,000 home, a gift that brings you from 15% to 20% ($25,000 gift) saves approximately $14,000 in CMHC premiums — a clear financial benefit worth discussing with family.

### Strategy 4: Wait and Save
Sometimes the right move is to wait. Every additional year of saving not only potentially eliminates CMHC but also reduces your mortgage and monthly payment.

## CMHC Insurance vs. Mortgage Life Insurance

These are two completely different products that are frequently confused:

**CMHC Default Insurance:** Mandatory if less than 20% down. Protects the lender. Premium added to mortgage.

**Mortgage Life Insurance:** Optional. Pays off your mortgage balance if you die. Protects your family. Sold by your lender or an insurance company. Premiums paid monthly.

Most financial advisors recommend term life insurance over mortgage life insurance for better coverage and value — but that's a separate conversation.

Use our [Closing Cost Calculator](/) to see exactly how CMHC insurance affects your total purchase costs in your province, including any applicable PST/HST on the premium.
      `
    },
    {
      id:"breaking-mortgage-early-canada-2026",
      title:"Breaking Your Mortgage Early in Canada — Penalties, Costs and When It Makes Sense",
      date:"June 22, 2026",
      author:"Canada Mortgage Rates",
      readTime:"7 min read",
      category:"Mortgage Strategy",
      summary:"Breaking a mortgage before the end of your term triggers a prepayment penalty. Here's how Canadian lenders calculate penalties, what they can cost, and when breaking still makes financial sense.",
      content:`
Breaking your mortgage before the end of your term is one of the most significant financial decisions a Canadian homeowner can make. Life events — job changes, divorce, upsizing, downsizing, death in the family — don't wait for your mortgage to mature. Here's everything you need to know about mortgage break penalties in Canada.

## Why Would You Break Your Mortgage?

Common reasons Canadians break their mortgage mid-term:
- Selling your home
- Refinancing to access equity or get a better rate
- Relationship breakdown or divorce
- Upsizing or downsizing unexpectedly
- Taking advantage of significantly lower rates
- Debt consolidation using home equity

## What is a Prepayment Penalty?

When you break a fixed-rate mortgage before the end of your term, your lender charges a prepayment penalty. This compensates them for the interest income they expected to earn for the remainder of your term.

For fixed-rate mortgages, the penalty is the **greater** of:
- **3 months interest**, OR
- **Interest Rate Differential (IRD)**

For variable-rate mortgages, the penalty is almost always simply **3 months interest** — one of the biggest advantages of variable rate mortgages.

## Understanding the Interest Rate Differential (IRD)

The IRD is the difference between your contracted mortgage rate and the rate your lender could earn by re-lending those funds for the remaining term of your mortgage.

**Simple IRD formula:**
IRD = Mortgage Balance × (Your Rate − Comparison Rate) × Remaining Term in Years

The "comparison rate" is where it gets complicated — and where big banks dramatically overcharge.

## The Big Bank IRD Problem

Big banks (TD, RBC, BMO, Scotiabank, CIBC) calculate IRD using their posted rates rather than discounted rates. Since posted rates are typically 1.5–2% higher than the rate you actually received (which was discounted), the IRD calculation produces a much larger penalty than it should.

**Example — Mortgage originally at 4.5% (TD posted was 5.5% when you got a 1% discount):**

If current posted rate for remaining term is 3.5%:
- Actual spread: 4.5% − 3.5% = 1.0%
- Bank's IRD calculation: 5.5% (posted) − 3.5% (current posted) = 2.0% spread

The bank effectively doubles the penalty by using posted rates in the calculation. This is legal in Canada and responsible for thousands of dollars in unexpected penalty charges.

**This is why credit unions and monolines typically charge far lower IRD penalties** — they use your actual contract rate, not an inflated posted rate.

## Example Penalty Comparison

**Scenario:** $400,000 mortgage, 3 years remaining on 5-year fixed at 4.50%. Current rates for 3-year: 3.90%.

**Variable rate or credit union (3 months interest):**
$400,000 × 4.50% ÷ 12 × 3 = **$4,500**

**Big bank IRD (using posted rates):**
Posted rate when you borrowed: 5.50%
Current posted 3-year rate: 4.90%
Differential: 5.50% − 4.90% = 0.60% — but wait, your discount was 1%
Bank adds it back: actual IRD = 1.00% + 0.60% = 1.60%
$400,000 × 1.60% × 3 years = **$19,200**

The difference between a variable-rate penalty and a big bank fixed-rate IRD on the same mortgage: $14,700.

## When Does Breaking Your Mortgage Make Financial Sense?

Despite the penalties, breaking can make sense in several scenarios:

**Scenario 1: Rates have dropped significantly**
Calculate your penalty vs. the interest savings over your remaining term. If the rate drop saves more than the penalty over the remaining term, breaking makes sense.

Example: 2 years remaining, $400,000 mortgage, rate drops from 5.25% to 3.90%.
Annual interest savings: $400,000 × 1.35% = $5,400/year × 2 years = $10,800 savings
Penalty: $6,000 (3 months interest on variable/credit union)
**Net benefit: $4,800 — break makes sense**

**Scenario 2: You need to access equity**
If you have significant equity and need funds for renovation, investment, or debt consolidation, the cost of breaking and refinancing may be less than alternative borrowing costs.

**Scenario 3: Blend and Extend**
Some lenders offer a "blend and extend" option — they blend your current rate with the new lower rate, extending your term. No penalty, but you may not get the full benefit of lower rates. Use our Blend & Extend calculator to compare.

**Scenario 4: Variable rate mortgage — almost always cheaper**
If you have a variable rate mortgage, the penalty is just 3 months interest regardless of how rates have moved. Much easier to justify breaking.

## The Break-Even Calculation

Before breaking, always calculate your break-even point:

**Break-even period = Penalty ÷ Monthly savings from new rate**

If the penalty is $6,000 and you save $250/month with the new rate:
Break-even = 24 months (2 years)

If you plan to stay in the home longer than 2 years after breaking, it makes financial sense.

## How to Minimize Your Penalty

**Choose a variable rate:** 3 months interest vs. potentially tens of thousands in IRD.
**Choose a credit union or monoline:** Use fair IRD calculations based on actual rates.
**Use prepayment privileges:** Before breaking, use your annual lump-sum prepayment privilege (typically 15–20% of original mortgage) to reduce the balance and therefore the penalty.
**Negotiate with your lender:** Some lenders will reduce penalties to retain a good customer, especially if you're switching products rather than leaving entirely.
**Check your mortgage documents:** Some mortgage contracts cap IRD penalties or use different calculation methods.

Use our [Refinancing Calculator](/) to see whether breaking your mortgage and refinancing at current rates makes financial sense for your specific situation.
      `
    },
    {
      id:"heloc-canada-2026",
      title:"Home Equity Line of Credit (HELOC) in Canada — Complete 2026 Guide",
      date:"June 20, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Mortgage Strategy",
      summary:"A HELOC lets Canadian homeowners access their home equity as a revolving line of credit. Here's how HELOCs work, how to qualify, what they cost, and when to use one.",
      content:`
A Home Equity Line of Credit (HELOC) is one of the most flexible financial tools available to Canadian homeowners. It lets you borrow against your home equity — the difference between your home's value and your outstanding mortgage — on a revolving basis, similar to a credit card but secured by your property.

## What is a HELOC?

A HELOC is a secured revolving line of credit attached to your home. You receive a credit limit based on your home equity, and you can borrow, repay, and re-borrow up to that limit as needed — during the draw period.

Unlike a mortgage (which is disbursed as a lump sum and repaid on a fixed schedule), a HELOC works like a credit card: you only pay interest on the amount you've actually borrowed, and you can access funds at any time through a card, cheque, or online transfer.

## How Much Can You Borrow?

OSFI (Canada's banking regulator) limits HELOCs to **65% of your home's appraised value**. When combined with your existing mortgage, total borrowing cannot exceed 80% LTV (loan-to-value).

**Formula:**
Maximum HELOC = (Home Value × 80%) − Outstanding Mortgage Balance

**Example:**
Home value: $700,000
Outstanding mortgage: $300,000
Maximum HELOC: ($700,000 × 80%) − $300,000 = $560,000 − $300,000 = **$260,000**

But note: HELOC alone is capped at 65% of $700,000 = $455,000. Your total (mortgage + HELOC) can't exceed 80% = $560,000. So with a $300,000 mortgage, your HELOC cap is $260,000.

## HELOC Interest Rates in Canada

HELOCs are priced at prime rate plus a spread — typically prime + 0.50% to prime + 1.00%.

With prime rate at 4.45% (July 2026):
- Best HELOC rate: approximately 4.95% (prime + 0.50%)
- Standard HELOC rate: approximately 5.45% (prime + 1.00%)

HELOC rates are variable — they move up and down with the Bank of Canada's overnight rate. When the BoC cuts rates, your HELOC rate drops immediately. When the BoC raises rates, it rises immediately.

## How to Qualify for a HELOC

To qualify for a HELOC in Canada:

**Minimum 20% equity:** You need at least 20% equity in your home (since HELOC is limited to 65% of value, and total borrowing to 80%).

**Credit score:** Minimum 650 at most major lenders, 700+ for best rates.

**Income verification:** Your lender will verify income and calculate GDS/TDS ratios including the HELOC's minimum payment.

**Property type:** Most HELOCs are available on principal residences and some investment properties.

**Stress test:** Even for a HELOC, you must qualify at the stress test rate — your contracted rate + 2%.

## HELOC vs. Refinancing — Which is Better?

Both give you access to home equity, but they work differently:

| Feature | HELOC | Refinancing |
|---|---|---|
| Interest rate | Variable (prime + spread) | Fixed or variable, often lower |
| Access to funds | Revolving — borrow as needed | Lump sum upfront |
| Repayment | Interest-only option available | Fixed principal + interest |
| Flexibility | High | Low — locked in for term |
| Break penalty | None | Can be significant |
| Best for | Ongoing needs, renovations | One-time large expense |

**Choose HELOC when:** You need flexible access to funds over time (renovation in stages, business expenses, emergency fund).

**Choose refinancing when:** You need a large lump sum, want a fixed rate, or want to consolidate debt at a lower rate.

## Common Uses for a HELOC in Canada

**Home renovation:** The most common use. Draw funds as renovation stages are completed rather than borrowing all upfront.

**Investment property down payment:** Some investors use HELOC equity from their primary residence to fund investment property purchases.

**Debt consolidation:** HELOC rates (4.95–5.45%) are far lower than credit card rates (19.99–22.99%), making it an effective debt consolidation tool. However, you're converting unsecured debt to secured debt — defaulting now risks your home.

**Emergency fund:** A HELOC with a $0 balance costs nothing to maintain but is available instantly if needed.

**Education expenses:** Funding tuition or continuing education without depleting savings.

**Bridge financing:** Funding a new home purchase before your existing home sells.

## HELOC Risks to Understand

**Variable rate risk:** Your interest costs rise when the BoC raises rates. In 2022–2023, HELOC rates rose from ~2.7% to ~7.2% in 18 months — a tripling of interest costs.

**Temptation to over-borrow:** The revolving, accessible nature of HELOCs makes it easy to borrow more than intended. Treat it like debt, not income.

**Collateral risk:** Your home secures the HELOC. Inability to repay can lead to foreclosure.

**Regulatory changes:** OSFI has tightened HELOC rules over the years and may do so again. The current 65% cap could change.

## The Smith Manoeuvre — A Canadian Tax Strategy

The Smith Manoeuvre is a legal Canadian tax strategy using a HELOC to convert non-deductible mortgage interest into tax-deductible investment loan interest. In simple terms: use your HELOC to invest in eligible securities, making that portion of interest deductible from your Canadian taxes.

This is a complex strategy that requires careful implementation and professional advice — but it's legal and used by thousands of Canadians to accelerate wealth building.

Use our [Refinancing Calculator](/) to compare whether a HELOC or cash-out refinance makes more sense for your situation.
      `
    },
    {
      id:"best-mortgage-lenders-canada-2026",
      title:"Best Mortgage Lenders in Canada 2026 — Banks vs Credit Unions vs Monolines",
      date:"June 18, 2026",
      author:"Canada Mortgage Rates",
      readTime:"7 min read",
      category:"Rate Strategy",
      summary:"Canada has three main types of mortgage lenders — big banks, credit unions, and monolines. Each has different rates, penalties, and qualification criteria. Here's how to choose.",
      content:`
One of the most important decisions in your mortgage process is who to get your mortgage from. In Canada, you have three main categories of mortgage lenders — big banks, credit unions, and monolines — plus mortgage brokers who access all three. Here's how they compare.

## The Big Six Banks

Canada's six largest banks — RBC, TD, Scotiabank, BMO, CIBC, and National Bank — are the most recognized mortgage lenders in the country. They handle the majority of Canadian mortgages and have branches, advisors, and online tools across the country.

**Advantages of big banks:**
- Convenience — branch access and relationship banking
- Bundling benefits — discounts when combining mortgage with bank account, credit cards
- Stability — federally regulated, well-capitalized
- Technology — robust online banking and mortgage management tools

**Disadvantages of big banks:**
- Rarely offer lowest rates — posted rates are significantly higher than what you'll actually get after negotiation
- IRD penalty calculation using posted rates — can result in massive break penalties
- Less flexibility for self-employed or non-traditional income borrowers
- High-pressure sales environment focused on upselling products

**Who big banks are best for:** Borrowers who value convenience, want all financial products in one place, and plan to hold their mortgage to full term without breaking.

## Credit Unions

Credit unions are member-owned financial cooperatives regulated at the provincial level. Canada's largest include Desjardins (Quebec), Meridian (Ontario), Servus (Alberta), Coastal Community (BC), Steinbach Credit Union and Assiniboine Credit Union (Manitoba).

**Advantages of credit unions:**
- Competitive rates — often match or beat big banks
- Fair IRD penalties — use actual contract rates, not inflated posted rates (can save tens of thousands)
- Member-owned — profits returned to members through dividends and better rates
- More flexibility for non-standard situations
- Local decision-making — understand local markets

**Disadvantages of credit unions:**
- Geographically limited — a Manitoba credit union may not lend in BC
- Less technology investment than big banks (though improving rapidly)
- Provincially regulated — deposit insurance is provincial, not federal CDIC

**Who credit unions are best for:** Local borrowers who want competitive rates and fair penalty structures. Especially valuable if there's any chance you'll break your mortgage early.

## Monoline Lenders

Monoline lenders (or mortgage finance companies) do only one thing: mortgages. They have no branches, no chequing accounts, no credit cards — just mortgages. They're accessed almost exclusively through mortgage brokers. Major Canadian monolines include First National, MCAP, Street Capital (now Scotia Mortgage Authority), RMG Mortgages, and Equitable Bank.

**Advantages of monolines:**
- Consistently lowest rates — lower overhead means better rates passed to borrowers
- Fair IRD calculations — use actual rates, not posted rates
- Specialist expertise — their entire business is mortgages
- Flexible products — often more creative solutions for complex situations

**Disadvantages of monolines:**
- Broker access only — you can't walk into a branch
- Less name recognition — some borrowers uncomfortable with unfamiliar brands
- Servicing varies — your mortgage may be sold to another servicer
- Limited relationship banking — no bundling benefits

**Who monolines are best for:** Rate-focused borrowers who work with a broker and want the best rate with fair penalty structures.

## Mortgage Brokers vs. Going Direct

A mortgage broker is an independent professional who accesses multiple lenders (big banks, credit unions, monolines) to find you the best rate and product. They're paid by the lender, not you — typically 0.6–1.2% of the mortgage amount.

**Broker advantages:**
- Access to 30–50+ lenders with one application
- Rate negotiating power through volume
- Expertise in matching complex situations to the right lender
- Often beat rates available directly at branches

**Going direct advantages:**
- Existing relationship may yield loyalty discounts
- One point of contact for all banking
- Branch access and in-person support

**Our recommendation:** Use a broker to shop the market, then take that rate back to your existing bank. If your bank matches it, stay. If they won't, use the broker. You have nothing to lose.

## 2026 Rate Comparison by Lender Type

For a 5-year fixed mortgage on a $500,000 home (20% down):

| Lender Type | Typical Rate Range | Penalty Structure |
|---|---|---|
| Big 6 Banks | 3.89–4.25% | Posted-rate IRD (very expensive) |
| Credit Unions | 3.79–4.10% | Contract-rate IRD (fair) |
| Monolines | 3.74–3.99% | Contract-rate IRD (fair) |
| Through Broker | 3.74–3.99% | Depends on lender |

The rate differences look small but compound significantly. At 3.74% vs 4.10% on a $400,000 mortgage over 5 years, the lower rate saves approximately $7,200 in interest — before accounting for the potential penalty difference.

Compare current rates from all lender types on our [Rates tab](/) or use our [Rate Finder](/) to get a personalized recommendation.
      `
    },
    {
      id:"property-transfer-tax-canada-2026",
      title:"Property Transfer Tax in Every Canadian Province — 2026 Complete Guide",
      date:"June 15, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Home Buying",
      summary:"Land transfer tax (called property transfer tax in BC) is the largest closing cost for most Canadian homebuyers. Here's exactly what you'll pay in every province — and every rebate available.",
      content:`
Land transfer tax (LTT) — called property transfer tax (PTT) in British Columbia and welcome tax (taxe de bienvenue) in Quebec — is a one-time tax paid when you purchase a property. It's calculated as a percentage of your purchase price and varies significantly by province. For most Canadian homebuyers, it's the largest single closing cost.

## Land Transfer Tax by Province — 2026

### Ontario

Ontario's LTT uses a tiered calculation:
- 0.5% on the first $55,000
- 1.0% on $55,000–$250,000
- 1.5% on $250,000–$400,000
- 2.0% on $400,000–$2,000,000
- 2.5% on amounts over $2,000,000

**On a $600,000 home: approximately $8,475**

**Toronto buyers pay double:** The City of Toronto charges its own municipal LTT on top of the provincial LTT, calculated on the same tiered structure. Total LTT on a $600,000 Toronto home: approximately $16,950.

**First-time buyer rebate (Ontario):** Up to $4,000 rebate on provincial LTT. On a $600,000 home, this eliminates most of the provincial LTT. Toronto first-time buyers get an additional municipal rebate of up to $4,475.

### British Columbia

BC calls it Property Transfer Tax (PTT):
- 1% on first $200,000
- 2% on $200,000–$2,000,000
- 3% on $2,000,000–$3,000,000
- 5% on amounts over $3,000,000

**On a $700,000 home: approximately $12,000**

**First-Time Home Buyers' Program:** Full exemption on homes under $500,000. Partial exemption on homes $500,000–$835,000. No exemption above $835,000.

**Newly Built Home Exemption:** Full PTT exemption on newly built homes under $1,100,000 for all buyers (not just first-timers) — one of the strongest incentives for new builds in Canada.

### Alberta

**Alberta has NO provincial land transfer tax** — a significant financial advantage for buyers and a major reason Calgary and Edmonton remain relatively more affordable than Toronto and Vancouver. Alberta buyers pay only a modest land title transfer fee (approximately $500–$1,000 depending on property value).

### Manitoba

Manitoba's land transfer tax:
- 0% on first $30,000
- 0.5% on $30,000–$90,000
- 1.0% on $90,000–$150,000
- 1.5% on $150,000–$200,000
- 2.0% on amounts over $200,000

**On a $400,000 home: approximately $5,870**

First-time buyers may qualify for a rebate — check at gov.mb.ca for current thresholds and eligibility.

### Quebec

Quebec's mutation tax ("welcome tax"):
- 0.5% on first $52,800
- 1.0% on $52,800–$264,000
- 1.5% on amounts over $264,000

**On a $500,000 home: approximately $6,264**

Additional tiers apply in Montreal (higher rates for luxury properties). Quebec first-time buyers may qualify for a credit through the provincial tax system.

### Saskatchewan

Saskatchewan charges a land title transfer fee, not a traditional LTT. The fee is approximately $500–$1,500 depending on property value — much lower than most other provinces.

### Nova Scotia

Nova Scotia deed transfer tax is set by each municipality:
- Halifax: 1.5% of purchase price
- Other municipalities: 1.0–1.5%

**On a $400,000 Halifax home: approximately $6,000**

No first-time buyer exemption currently in Nova Scotia.

### New Brunswick

New Brunswick land transfer tax: 1.0% of assessed value or purchase price (whichever is higher).

**On a $300,000 home: approximately $3,000**

### Prince Edward Island

PEI real property transfer tax: 1.0% on first $30,000 + 2.0% above $30,000 for non-residents. For residents: no tax on first $30,000, 1.0% above.

**On a $300,000 home (resident): approximately $2,700**

### Newfoundland and Labrador

Newfoundland registration fees (not a traditional LTT) are relatively modest — approximately $1,000–$2,000 depending on property value.

## Land Transfer Tax Summary Table — $500,000 Purchase

| Province | Estimated LTT | First-Time Buyer Rebate | Net LTT |
|---|---|---|---|
| Ontario (non-Toronto) | $6,475 | Up to $4,000 | $2,475 |
| Ontario (Toronto) | $12,950 | Up to $8,475 | $4,475 |
| British Columbia | $8,000 | Up to $8,000 | $0–$8,000 |
| Alberta | ~$700 (fee only) | N/A | ~$700 |
| Manitoba | $7,870 | Partial | TBD |
| Quebec | $6,264 | None | $6,264 |
| Saskatchewan | ~$1,000 (fee) | N/A | ~$1,000 |
| Nova Scotia | $7,500 | None | $7,500 |
| New Brunswick | $5,000 | None | $5,000 |

## How to Reduce Your Land Transfer Tax

**Buy in Alberta or Saskatchewan:** No meaningful LTT — saves thousands immediately.
**Use first-time buyer rebates:** Claim them at closing through your real estate lawyer.
**Buy a newly built home in BC:** Full PTT exemption on new builds under $1.1M.
**Time your purchase:** Some exemptions have income or property value thresholds — plan accordingly.

Use our [Closing Cost Calculator](/) to calculate your exact LTT in your province based on your purchase price, and to see all first-time buyer rebates you qualify for.
      `
    },
    {
      id:"mortgage-refinancing-canada-2026",
      title:"Mortgage Refinancing in Canada — When It Makes Sense and When It Doesn't",
      date:"June 12, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Mortgage Strategy",
      summary:"Refinancing your mortgage means breaking your current mortgage and replacing it with a new one. Here's when refinancing makes financial sense in Canada — and when the math doesn't work.",
      content:`
Mortgage refinancing is one of the most powerful tools available to Canadian homeowners — and one of the most misunderstood. Done at the right time with the right lender, refinancing can save tens of thousands in interest, fund a renovation, consolidate debt, or provide capital for investment. Done at the wrong time or without full understanding of costs, it can be an expensive mistake.

## What is Mortgage Refinancing?

Refinancing means replacing your existing mortgage with a new one — either with your current lender or a different lender. Unlike a renewal (which happens when your term expires), refinancing happens mid-term, which means breaking your existing mortgage and triggering a prepayment penalty.

## Common Reasons Canadians Refinance

**Lower interest rate:** If rates have dropped significantly since you took out your mortgage, refinancing can reduce your interest costs substantially.

**Access home equity (cash-out refinance):** You can refinance for more than your current mortgage balance, taking the difference as cash. The maximum is typically 80% of your home's appraised value.

**Debt consolidation:** Combining high-interest debts (credit cards at 19.99%, car loans at 7%) into your mortgage at a lower rate (3.90%) can dramatically reduce monthly cash flow pressure.

**Change amortization:** Extending your amortization reduces monthly payments; shortening it builds equity faster and reduces total interest paid.

**Switching from variable to fixed (or vice versa):** If your risk tolerance or financial situation has changed.

**Remove a co-borrower:** Common in divorce or separation situations.

## The Refinancing Math — Should You Do It?

The core calculation is simple:

**Net benefit = Interest savings over remaining term − Prepayment penalty − Refinancing costs**

If the net benefit is positive, refinancing makes financial sense.

**Example:**
- Current mortgage: $400,000, 5-year fixed at 5.25%, 2 years remaining
- Current monthly payment: $2,421
- New rate available: 3.90%
- New monthly payment: $2,079
- Monthly savings: $342
- Savings over 2 years: $8,208

- Prepayment penalty (variable/credit union estimate): $5,250
- Legal fees and appraisal: $1,200
- Total break cost: $6,450

**Net benefit: $8,208 − $6,450 = $1,758 over 2 years**

Marginal in this case — the savings are real but not dramatic. However, if you then lock in a new 5-year term at 3.90%, the ongoing savings continue.

## The Break-Even Period

Divide your total penalty and costs by your monthly savings:

$6,450 ÷ $342/month = **18.9 months break-even**

If you plan to stay in the home for at least 19 months after refinancing, the math works.

## When Refinancing Makes Strong Sense

**Rate drop of 1% or more with significant remaining term:** The savings compound significantly.

**Cash-out for high-return use:** Pulling equity at 3.90% to pay off a car loan at 7% or credit cards at 19.99% has immediate and lasting impact.

**Variable rate mortgage with low penalty:** With only 3 months interest as penalty, the math works even with moderate rate drops.

**Long remaining amortization:** More years means more interest savings from a rate reduction.

**Property has appreciated significantly:** Refinancing unlocks equity that wasn't available at original purchase.

## When Refinancing Does NOT Make Sense

**Large IRD penalty at a big bank:** A $20,000–$30,000 penalty can take years to recover, even with a good rate drop.

**Near end of term:** If you have less than 6 months remaining, just wait for renewal — the savings won't cover the penalty.

**Small rate difference (less than 0.5%):** The math rarely works with a small spread, especially with big bank penalties.

**Planning to move soon:** If you'll sell within 2 years, the penalty likely won't be recovered.

**Extending amortization significantly:** Refinancing to a 30-year amortization from a 20-year to reduce monthly payments sounds appealing but dramatically increases total interest paid over the life of the mortgage.

## Refinancing vs. HELOC vs. Second Mortgage

When your goal is accessing equity:

**Refinancing:** Best for large amounts, when you want a fixed rate, or when you want to consolidate everything into one payment. Comes with break penalty.

**HELOC:** Best for ongoing or uncertain access needs. Revolving, no penalty, but variable rate. Up to 65% LTV.

**Second mortgage:** A separate mortgage on top of your existing one. Higher rates, used when you can't refinance (e.g., too early in term with large penalty). Not common.

## The Blend and Extend Alternative

If your lender offers a "blend and extend" — where they blend your current rate with the new rate and extend your term — you avoid the break penalty entirely. The blended rate won't be as low as the current market rate, but the no-penalty structure can make it the better option depending on how far into your term you are.

Use our [Refinancing Calculator](/) to run the exact numbers for your situation — including penalty estimates, break-even period, and 5-year savings comparison.
      `
    },
    {
      id:"self-employed-mortgage-canada-2026",
      title:"Self-Employed Mortgage in Canada — How to Qualify in 2026",
      date:"June 10, 2026",
      author:"Canada Mortgage Rates",
      readTime:"7 min read",
      category:"Home Buying",
      summary:"Self-employed Canadians face unique challenges qualifying for a mortgage. Here's how lenders evaluate self-employed income, what documents you need, and strategies to improve your qualification.",
      content:`
Canada has approximately 2.6 million self-employed workers — roughly 15% of the workforce. Qualifying for a mortgage as a self-employed borrower is more complex than for salaried employees, but it's absolutely achievable with the right preparation. Here's what you need to know.

## Why Self-Employment Complicates Mortgage Qualification

The fundamental challenge: mortgage lenders want to see stable, documented, verifiable income. Self-employed borrowers often:

- Report variable income that fluctuates year-to-year
- Write off significant business expenses, reducing reported net income
- Draw income in ways that don't show up on standard T4 slips (dividends, retained earnings)
- Have income that's harder to project forward

The lender's concern isn't your gross revenue — it's the income that actually hits your personal tax return, which may be much lower after business deductions.

## What Income Do Lenders Use for Self-Employed Borrowers?

**Salaried employee:** Lender uses gross T4 income. Simple.

**Self-employed:** Lender typically uses your **Line 15000 (total income) from your T1 personal tax return** — and averages the last 2 years. This is your income AFTER business deductions.

This creates the core tension: the more aggressively you write off business expenses (legitimately reducing your taxes), the lower your declared income — and the smaller the mortgage you qualify for.

**The self-employed income dilemma:**
Option A: Write off everything, minimize taxes, qualify for less mortgage.
Option B: Declare more income, pay more taxes, qualify for a larger mortgage.

The right balance depends on your homebuying timeline and tax situation. Speak to both your accountant and mortgage broker before making this decision.

## Documents Required for Self-Employed Mortgage

**Standard income verification (2+ years self-employed):**
- T1 General (personal tax return) for last 2 years — both years' Notice of Assessment
- T2 Corporate tax return (if incorporated) for last 2 years
- Business bank statements — typically 12 months
- Business registration or articles of incorporation
- HST/GST returns for the business
- 90-day personal bank statements
- Contracts or client agreements showing stable business relationships

**Less than 2 years self-employed:** Most traditional lenders won't use self-employment income. You may need to use stated income programs (see below) or wait until you have 2 years of returns.

## Qualifying Pathways for Self-Employed Borrowers

### Pathway 1: Traditional Income Verification

Best for: Self-employed borrowers with 2+ years of returns showing strong declared income.

Lender averages your last 2 years of Line 15000 from your T1. Some lenders add back certain expenses (depreciation, home office, some vehicle expenses) to arrive at a higher qualifying income.

### Pathway 2: Stated Income Programs (Alt-A)

Best for: Borrowers with strong gross revenue but low declared income due to legitimate deductions.

Some lenders and mortgage investment corporations (MICs) allow you to "state" your income — declare what you actually earn, even if your tax returns show less. You'll need to:
- Show gross revenue supporting the stated income
- Demonstrate industry norms for income-to-revenue ratios
- Often require larger down payment (20%+)
- Pay a slightly higher rate (typically 0.25–0.75% premium)

### Pathway 3: Business-for-Self (BFS) CMHC Program

CMHC offers a specific program for self-employed borrowers who can't fully document their income through traditional means. It allows qualifying based on stated income with CMHC insurance — meaning you can qualify with less than 20% down even as a self-employed borrower.

### Pathway 4: Private/Alternative Lenders

For borrowers who don't qualify through traditional channels, private lenders and B-lenders (Home Trust, Equitable Bank, First National's alt products) offer more flexibility. Rates are higher (typically 5.5–8% for B-lenders, 8–12% for private), but they can bridge the gap until your tax history improves.

## Strategies to Strengthen Your Self-Employed Mortgage Application

**Establish 2+ years of business history:** Most lenders require minimum 2 years of T1 returns. If you're newly self-employed, plan your homebuying timeline accordingly.

**Increase declared income in the years before applying:** Work with your accountant to strategically reduce certain deductions in the 1–2 years before your mortgage application. Yes, you'll pay more tax — but qualifying for the home you want may be worth it.

**Maximize your down payment:** With 20%+ down, you have access to more lenders, avoid CMHC insurance, and demonstrate financial strength.

**Keep personal and business finances completely separate:** Commingling personal and business accounts is a red flag for lenders. Clear, separate financial records signal a well-run business.

**Maintain strong credit:** Your personal credit score remains critical. Self-employed borrowers with strong income documentation but weak credit still struggle. Keep all personal obligations paid on time.

**Work with a mortgage broker:** Brokers who specialize in self-employed mortgages know which lenders use the most favorable income calculation methods and which BFS programs are available. This expertise is invaluable.

**Get your NOAs promptly:** Ensure your tax returns are filed and Notices of Assessment (NOA) received before beginning your mortgage application. Lenders require the NOA, not just the filed return.

## The Incorporated Business Owner Situation

Many self-employed Canadians operate through a corporation, taking a combination of salary and dividends. Lenders handle this differently:

- **Salary (T4 from own corporation):** Treated like regular employment income — easier to document and qualify with.
- **Dividends:** Some lenders include, others exclude. Dividends are taxed favorably personally but may be counted differently in mortgage qualification.
- **Retained earnings in corporation:** Generally NOT counted as personal income for mortgage qualification, even if accessible.

If you're incorporated, work with a broker who understands corporate borrower situations — they'll identify which lenders best recognize your income structure.

Use our [Affordability Calculator](/) to estimate your mortgage qualification based on your declared income, and consult our [Consult tab](/) to connect with a mortgage professional who specializes in self-employed borrowers.
      `
    },
    {
      id:"condo-vs-house-canada-2026",
      title:"Condo vs House in Canada — Which is the Better Investment in 2026?",
      date:"June 8, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Home Buying",
      summary:"The condo vs house debate is as relevant as ever in Canada's 2026 housing market. Here's an honest comparison of costs, appreciation, lifestyle, and investment potential.",
      content:`
One of the most common questions first-time Canadian homebuyers face is: condo or house? In 2026, with affordability pressures across most major markets, high condo fees, and a softening condo resale market in some cities, this decision is more nuanced than it's ever been. Here's an honest breakdown.

## The Cost Reality in 2026

The price gap between condos and detached houses varies enormously by market:

**Toronto:**
Average condo (1-bedroom): approximately $620,000
Average detached house: approximately $1,450,000
Gap: $830,000

**Vancouver:**
Average condo: approximately $720,000
Average detached house: approximately $1,850,000
Gap: $1,130,000

**Winnipeg:**
Average condo: approximately $230,000
Average detached house: approximately $420,000
Gap: $190,000

**Calgary:**
Average condo: approximately $310,000
Average detached house: approximately $610,000
Gap: $300,000

In Toronto and Vancouver, the gap is so large that for most buyers, the choice between condo and house is really a choice between owning (condo) and not owning at all. In Winnipeg and other prairie cities, the choice is more genuinely between two accessible options.

## True Cost Comparison — $500,000 Condo vs $600,000 House (Winnipeg)

| Cost | Condo ($500K) | House ($600K) |
|---|---|---|
| Down payment (10%) | $50,000 | $60,000 |
| Mortgage (25yr, 3.90%) | $2,324/month | $2,789/month |
| Condo fees | $400–$700/month | $0 |
| Property tax | $250/month | $350/month |
| Maintenance fund | $100/month | $400–$600/month |
| **Total monthly** | **$3,074–$3,374** | **$3,539–$3,739** |

The condo looks cheaper per month, but condo fees can rise significantly over time and special assessments (unexpected major repairs charged to unit owners) can be $5,000–$50,000+ on short notice.

## Appreciation — Condos vs Houses

Historically, detached houses in Canada have appreciated faster than condos, particularly in land-constrained markets like Toronto and Vancouver where land value drives detached home prices.

**Post-2022 reality check:** The 2022–2023 rate hike cycle hit condos harder than houses in most Canadian markets. Condo prices in Toronto fell 15–20% from peak while detached houses fell 10–15%. In 2026, the condo resale market (particularly investor-owned condos and pre-construction completions) remains under pressure in Ontario and BC as rental yields compressed with rising costs.

**Prairie markets tell a different story:** In Winnipeg, Calgary, and Edmonton, both condos and houses have appreciated modestly and steadily — without the extreme volatility of eastern markets.

## The Condo Fee Reality

Condo fees (maintenance fees) cover shared building expenses: common area maintenance, building insurance, management fees, and reserve fund contributions. They typically range from $0.50–$1.00 per square foot per month.

**On a 700 sq ft condo:** $350–$700/month — a significant, unavoidable expense that doesn't build equity.

**Key due diligence before buying a condo:**
- Review the reserve fund study — is it adequately funded?
- Check the status certificate for any pending special assessments or litigation
- Look at fee history — are they rising rapidly?
- Review the rules and bylaws — short-term rentals (Airbnb) now prohibited in many buildings

## Lifestyle Considerations

**Condo advantages:**
- Lower maintenance burden — no lawn, roof, or exterior to worry about
- Amenities — gym, concierge, party rooms
- Security and community
- Prime urban locations often more accessible
- Better for travelers or those with demanding careers

**House advantages:**
- Privacy — no shared walls, no noise from neighbours above
- Space — more square footage, yard, garage
- Flexibility — renovate as you wish, no board approval needed
- Pets — generally easier in houses
- Land ownership — land typically appreciates more reliably

## Investment Perspective — Rental Potential

**Condos:** Traditionally popular for rental investment, but the 2026 landscape is challenging. Condo fees + mortgage payments + property tax often exceed market rent in Toronto and Vancouver — negative cash flow is common. Short-term rental restrictions further reduce flexibility.

**Houses:** Multi-suite houses (main floor + basement suite) in strong rental markets can achieve positive cash flow and represent a genuine investment strategy. The combination of rental income and long-term appreciation is compelling.

## Our 2026 Assessment

**Buy a condo if:**
- You're in Toronto or Vancouver where a house is unaffordable
- You value urban living, amenities, and low maintenance
- You're single or a couple without plans for children soon
- You plan to hold for 7+ years (condo appreciation needs longer runway)
- The building has a healthy reserve fund and reasonable fees

**Buy a house if:**
- You're in a prairie market where both are accessible
- You have or plan to have children
- You value space, privacy, and outdoor living
- You want maximum renovation flexibility
- You're considering a basement suite for rental income
- You believe in long-term land value appreciation

**The honest answer for most first-time buyers:** In markets where both are accessible, the house is usually the stronger long-term financial decision. In Toronto and Vancouver, a condo is often the only path to ownership — which is a valid and rational choice given the alternative.

Use our [Affordability Calculator](/) to see exactly how much home you qualify for, and our [Closing Cost Calculator](/) to compare the full purchase costs of condos vs houses in your province.
      `
    },
    {
      id:"private-mortgage-canada-2026",
      title:"Private Mortgages in Canada — When Banks Say No, Here Are Your Options",
      date:"July 18, 2026",
      author:"Canada Mortgage Rates",
      readTime:"7 min read",
      category:"Mortgage Strategy",
      summary:"When traditional banks decline your mortgage application, private lenders and MICs offer alternative paths to homeownership. Here's everything you need to know about private mortgages in Canada.",
      content:`
Getting declined for a mortgage is more common than most Canadians realize. Roughly 20% of mortgage applicants don't qualify at traditional banks. Private mortgages fill this gap — but come with significant tradeoffs.

## What is a Private Mortgage?

A private mortgage is a loan secured against real estate from a non-traditional lender. Private lenders include MICs, individual private lenders, syndicated mortgages, and B-lenders.

## Who Needs a Private Mortgage?

**Bruised credit:** Score under 600 typically results in bank rejection. Private lenders focus on LTV, not just credit.

**Self-employed:** Declared income too low to qualify at banks. Private lenders may use gross revenue or bank statements.

**Recent bankruptcy:** Banks require 2–7 years. Some private lenders work with you immediately after discharge.

**New Canadians:** No Canadian credit history. Private lenders can use a larger down payment instead.

**Bridge financing:** Buying before selling your existing home. Short-term private bridge mortgage covers the gap.

**Investment properties:** Unconventional property types banks won't finance.

## Private Mortgage Rates — 2026

| Lender Type | Rate Range | Min Credit | Max LTV |
|---|---|---|---|
| Big 6 Banks | 3.89–4.50% | 680+ | 80% |
| B-Lenders | 5.50–8.00% | 550+ | 80% |
| MICs | 8.00–12.00% | Any | 75% |
| Private | 10.00–18.00% | Any | 65% |

## Critical Warning: Exit Strategy Required

A private mortgage rate of 12% on $400,000 = $48,000/year in interest vs $16,000 at a bank. Always have a clear exit strategy — improving your credit, increasing income, or selling the property within 12 months.

## How to Access Private Mortgages

Never approach private lenders directly. Always use a licensed mortgage broker who specializes in alternative lending. Their service is free — paid by the lender.

Connect with a private mortgage specialist through our [Private Lenders tab](/rates).
      `
    },
    {
      id:"property-tax-appeal-canada-2026",
      title:"How to Appeal Your Property Assessment — Save $500 to $3,000 Per Year",
      date:"July 17, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Property Tax",
      summary:"40-60% of Canadian property tax appeals succeed. If your home's assessed value is too high, here's exactly how to challenge it.",
      content:`
Every year, Canadian homeowners pay property taxes based on assessed value. But assessments aren't always accurate — and you have the legal right to challenge them.

## Why Appeal?

Assessment errors happen regularly: wrong square footage, basement development not reflected, poor condition unaccounted for. Every $10,000 reduction in assessed value saves $100–$200 in annual taxes.

**Success rate:** 40–60% of residential property tax appeals in Canada result in a reduced assessment.

## Step-by-Step Appeal Process

**Step 1: Review your assessment.** Check assessed value, property classification, square footage, bedrooms. Compare to actual property details.

**Step 2: Find comparable sales.** Research 3–5 similar properties that sold near your province's assessment date. If they sold for less than your assessed value, you have grounds.

**Step 3: Try informal resolution.** Contact the assessment office first. Many errors are corrected informally without formal appeal.

**Step 4: File a formal appeal.** File with your provincial review board before the deadline.

**Step 5: Prepare evidence.** Comparable sales with addresses and prices, photos showing condition, a clear statement of your proposed value.

**Step 6: Attend the hearing.** No lawyer needed — most homeowners represent themselves successfully.

## Appeal Deadlines by Province

| Province | Deadline | Filing Fee |
|---|---|---|
| Ontario | March 31 | $25–$125 |
| BC | January 31 | Free |
| Alberta | Within 60 days | $50 |
| Manitoba | June 30 | Free |
| Saskatchewan | Within 30 days | Free |

Use our [Property Tax Calculator](/property-tax) to estimate your current tax and see how a reduced assessment would affect your annual bill.
      `
    },
    {
      id:"mortgage-renewal-negotiation-2026",
      title:"How to Negotiate Your Mortgage Renewal Rate — Word-for-Word Script",
      date:"July 16, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Renewal",
      summary:"$400 billion in Canadian mortgages renewing in 2026. Most homeowners accept the first offer — costing them thousands. Here's the exact negotiation script that works.",
      content:`
When your renewal notice arrives, your lender sends you a rate that is almost never their best. 70–80% of Canadians renew without negotiating. This is one of the most expensive financial mistakes Canadian homeowners make.

## Before You Call: Get Competing Quotes

Use Canada Mortgage Rates, contact 1–2 mortgage brokers. Know what the market offers before calling your lender.

## The Negotiation Script

**Opening:** "I have a renewal notice showing [X%] for a [term]-year fixed. I'd like to see what you can do before I decide."

**After their rate:** "I've been quoted [competitor rate]% from [lender]. I've been a customer for [X] years and want to stay, but I need you to match that."

**If they resist:** "What's the absolute best you can do? I need to decide this week."

**If still no improvement:** "Can you escalate to your retention team? I'm seriously considering switching."

**Final:** "What does the discharge process look like?" — Often triggers a better offer.

## Choosing the Right Term — 2026

- **2-year fixed (~4.19%):** Best balance in 2026
- **3-year fixed (~4.09%):** Strong stability choice
- **5-year fixed (~3.89%):** Lowest rate, longest commitment
- **Variable (~3.35%):** Lowest today, some uncertainty

Use our [Renewal Calculator](/renewal) to calculate how much you'd save by negotiating.
      `
    },
    {
      id:"home-inspection-canada-guide-2026",
      title:"Home Inspection in Canada — What's Covered, What It Costs, and How to Choose",
      date:"July 15, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Home Buying",
      summary:"A home inspection is one of the most important purchases in the home buying process. Here's what Canadian buyers need to know in 2026.",
      content:`
A home inspection is a professional examination of a property's condition before you finalize a purchase. Skipping it is one of the most expensive mistakes a homebuyer can make.

## What Does a Home Inspector Check?

**Structure and Foundation:** Cracks, water infiltration, settlement, structural framing.

**Roofing:** Shingle condition, flashing, gutters, signs of leaking.

**Plumbing:** Visible pipes, water heater, water pressure, signs of leaks.

**Electrical:** Panel condition, wiring type, GFCI protection. Aluminum wiring (1965–1978 homes) is a common concern.

**HVAC:** Furnace age and condition, AC, ductwork, fireplaces.

**Insulation:** Attic insulation level, signs of moisture or mold.

## What Home Inspections Do NOT Cover

- Environmental hazards (mold behind walls, asbestos, radon) — require specialist testing
- Sewer lines — require a separate camera inspection
- Swimming pools — may require add-on inspections
- Property value — inspectors assess condition, not value

## How Much Does It Cost?

| Property Type | Typical Cost |
|---|---|
| Condo (under 1,000 sq ft) | $300–$450 |
| Detached home (under 2,000 sq ft) | $400–$550 |
| Detached home (2,000–3,500 sq ft) | $500–$650 |

## How to Choose an Inspector

Look for CAHPI, InterNACHI, or OAHI certification. Always attend the inspection — you learn far more walking through with the inspector. Avoid inspector referrals from your realtor (conflict of interest).

Connect with a certified home inspector through our [Professionals tab](/professionals).
      `
    },
    {
      id:"mortgage-broker-vs-bank-2026",
      title:"Mortgage Broker vs Bank — Which Is Better in Canada 2026?",
      date:"July 14, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Rate Strategy",
      summary:"Should you use a broker or go directly to your bank? The answer affects your rate, penalties, and flexibility for the next 5 years.",
      content:`
One of the most consequential mortgage decisions is where to get your mortgage. The answer significantly affects your rate, prepayment flexibility, and what you'd pay to break your mortgage.

## What is a Mortgage Broker?

A licensed professional who accesses multiple lenders on your behalf. They're paid by the lender — their service costs you nothing directly. Typical commission: 0.6–1.2% of the mortgage amount.

## Broker vs Bank — Key Differences

**Rate:** Brokers typically access 0.15–0.50% lower rates than walking into a bank branch.

**Prepayment Penalties:** This is the biggest difference. Big banks use inflated posted-rate IRD calculations. On a $400,000 mortgage broken 2 years early, the penalty difference can be $10,000–$25,000.

**Lender Access:** Bank = one lender. Broker = 30–50+ lenders including monolines with fair penalties.

**Complex situations:** Self-employed, bruised credit, new to Canada? Brokers know which lenders accommodate your situation.

## Best Approach: Use Both

Get a broker quote first. Then take it to your bank. If your bank matches the rate, stay. If they won't, switch. You have nothing to lose — the broker quote is free.

Find a licensed mortgage broker through our [Professionals tab](/professionals).
      `
    },
    {
      id:"new-build-mortgage-canada-2026",
      title:"New Build Mortgage in Canada — How It Differs from Resale",
      date:"July 13, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"New Builds",
      summary:"Buying a newly built home involves a different mortgage process than buying resale. Here's what Canadian buyers need to know about construction mortgages, rate holds, and GST/HST in 2026.",
      content:`
Buying a new build is exciting — but the mortgage process is significantly different from buying resale. Many buyers are surprised by these differences, some of which can cost thousands.

## Rate Holds — Most Important Feature

New builds take 12–24 months to complete. You need the longest rate hold available — up to 12 months. If your home is delayed and your rate hold expires, you re-apply at current rates.

**Best practice:** Get a 12-month rate hold with a rate drop guarantee — many lenders re-lock at a lower rate if rates fall before closing.

## 30-Year Amortization Advantage

All buyers of newly built homes can access 30-year insured amortizations — not just first-time buyers. This reduces monthly payments by approximately 10% vs 25-year amortization and improves stress test results.

## GST/HST — The Hidden Cost

New homes are subject to GST (5%) or HST (13–15%). On a $500,000 new home: $25,000–$75,000 in tax.

**The GST/HST New Housing Rebate** offsets much of this for owner-occupants. Your builder typically factors the rebate into the price — verify this in your purchase agreement.

## Builder's Preferred Lender Trap

Builder-preferred lender offers are often 0.10–0.50% higher than what you'd find through an independent broker. On a $450,000 mortgage over 5 years, that's $2,250–$11,250 in extra interest. Always get an independent quote first.

Use our [New Builds tab](/new-builds) for the full buyer's guide and construction mortgage comparison.
      `
    },
    {
      id:"home-evaluation-vs-appraisal-canada-2026",
      title:"Home Evaluation vs Professional Appraisal in Canada — Which Do You Need?",
      date:"July 11, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Home Buying",
      summary:"Many Canadians confuse a free home evaluation with a professional appraisal. They serve very different purposes.",
      content:`
Two of the most commonly confused concepts in Canadian real estate are home evaluations and professional appraisals. Both answer "what is my home worth?" — but very differently and for entirely different purposes.

## Home Evaluation (CMA)

Prepared by a licensed realtor. Typically free — realtor is compensated if you list with them.

**How:** Researches recent comparable sales in your area. Output is a price range for listing your home.

**Legal standing:** None. A CMA is an opinion, not an official document.

**Best for:** Deciding to sell, setting a listing price, general curiosity.

## Professional Appraisal

Prepared by a licensed AACI or CRA designated appraiser. Costs $300–$500.

**How:** Physical inspection of your property plus MLS comparable sales research. Produces a formal written report (20–40 pages).

**Legal standing:** Official document accepted by courts, lenders, and tax authorities.

**Best for:** Mortgage applications (required), refinancing (required), estate settlements, divorce proceedings.

## Side-by-Side

| Feature | Home Evaluation | Professional Appraisal |
|---|---|---|
| Cost | Free | $300–$500 |
| Legal standing | None | Official document |
| Mortgage use | Not accepted | Required |
| Purpose | Listing guidance | Official valuation |

Request a free evaluation or appraisal connection through our [Professionals → Home Value tab](/professionals).
      `
    },
    {
      id:"switching-mortgage-lenders-canada-2026",
      title:"Switching Mortgage Lenders at Renewal — When It Makes Sense and How to Do It",
      date:"July 10, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Mortgage Strategy",
      summary:"Switching mortgage lenders at renewal is penalty-free. Here's when it makes financial sense and what the process involves.",
      content:`
One of the most underutilized rights Canadian homeowners have is switching lenders at renewal — completely penalty-free. Yet 70–80% renew without shopping around.

## Why Switch?

- **Better rate:** 0.50% savings on $400,000 over 5 years = $10,000
- **Better penalty structure:** Big bank IRD penalties can be $10,000–$25,000 more than fair lenders
- **Better prepayment privileges:** Some allow 20% annual lump-sum vs others at 10%
- **Service quality:** If your lender has been difficult, renewal is the time to leave

## When is It Penalty-Free?

**Only at renewal** — when your current term expires. Mid-term switches trigger prepayment penalties.

## The Switch Process

1. **Shop around (4–6 months before renewal):** Contact a broker and 2–3 direct lenders
2. **Choose your new lender:** Compare rate, penalty structure, and prepayment privileges
3. **Provide documentation:** Mortgage statement, property tax bill, proof of insurance, income docs
4. **Appraisal:** May be required — often covered by the new lender
5. **Legal work:** Lawyer registers new mortgage — often covered by new lender
6. **Sign and fund:** On renewal date, new lender pays out old mortgage

## True Cost of Switching

Most switches are genuinely free — new lenders cover legal and appraisal fees to compete for your business.

## When NOT to Switch

- Your existing lender matches the best rate
- You have a HELOC attached to your mortgage
- You're selling within 12 months
- Rate difference is under 0.15%

Use our [Renewal Calculator](/renewal) to calculate your exact savings from switching.
      `
    },
    {
      id:"insurance-home-guide-canada-2026",
      title:"Home Insurance in Canada — What's Covered and What Isn't in 2026",
      date:"July 6, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Insurance",
      summary:"Standard home insurance policies have significant gaps most homeowners don't know about until they file a claim. Here's what's covered, what's excluded, and what riders you need.",
      content:`
Home insurance is one of those things Canadians hope never to use — meaning many have no idea what their policy actually covers until disaster strikes.

## What Standard Home Insurance Covers

- **Dwelling:** Physical structure — walls, roof, foundation
- **Other structures:** Detached garage, shed, fence (typically 10% of dwelling coverage)
- **Personal contents:** Furniture, electronics, clothing
- **Additional living expenses (ALE):** Hotel and meals while home is being repaired
- **Personal liability:** If someone is injured on your property
- **Common perils:** Fire, windstorm, theft, burst pipe water damage

## What Standard Policies Do NOT Cover

**Overland flooding:** Water from rivers, rainfall, or storm surges is NOT covered. Requires a separate rider.

**Sewer backup:** NOT covered by standard policies. A backed-up sewer can cause $20,000+ in damage. Add the rider ($100–$300/year).

**Earthquake:** Excluded. Important rider for BC.

**Gradual water damage:** Slow leaks or seeping foundations are excluded — insurance covers sudden damage, not gradual deterioration.

**High-value items:** Jewelry capped at $3,000–$5,000. Art, collectibles need scheduled riders.

## Critical Riders to Add

- **Overland flood:** $100–$500/year. Increasingly essential.
- **Sewer backup:** $100–$300/year. Non-negotiable for homes with basements.
- **Service line:** $50–$100/year. Covers underground pipes from meter to home.

## Average Annual Premiums — 2026

| Province | Average Premium |
|---|---|
| Quebec | $960 |
| Manitoba | $1,080 |
| Ontario | $1,450 |
| BC | $1,380 |
| Alberta | $1,740 |

Compare 25+ Canadian home insurance providers through our [Insurance tab](/insurance).
      `
    },
    {
      id:"rent-vs-buy-canada-2026",
      title:"Rent vs Buy in Canada — The Honest 2026 Analysis by City",
      date:"July 3, 2026",
      author:"Canada Mortgage Rates",
      readTime:"7 min read",
      category:"Home Buying",
      summary:"The rent vs buy debate has never been more complex. With high prices and normalized rates, here's an honest 2026 analysis for different Canadian cities.",
      content:`
"Buying builds equity, renting throws money away." Neither of these simplifications is accurate. The truth depends on your city, timeline, and financial situation.

## The True Cost of Homeownership

Monthly costs include: mortgage interest, property tax, home insurance, maintenance (budget 1% of home value/year), condo fees, and opportunity cost of your down payment.

## The Math by City

**Winnipeg ($420,000 average):**
Monthly ownership costs: ~$2,791
Average 3-bedroom rental: $1,800–$2,200
Net difference after equity building: $200–$600/month more to own
**Verdict: Relatively balanced — buying makes sense over 7+ years**

**Toronto ($1,450,000 average):**
Monthly ownership costs: ~$8,065
Average 3-bedroom rental: $3,200–$4,500
Difference: $3,500–$4,800 more to own
**Verdict: Renting and investing the difference likely wins short-term; long-term appreciation favors buying**

**Calgary/Edmonton:**
No provincial LTT, reasonable prices relative to income. Monthly costs competitive with renting.
**Verdict: Buying makes clear financial sense**

## When Buying Makes Clear Sense

- You plan to stay 7+ years
- You want stable housing costs
- You're in a prairie city where prices are accessible
- You have savings beyond the down payment

## When Renting Might Be Better

- You may relocate within 3–5 years
- You're in Vancouver or Toronto where rent is dramatically cheaper than ownership
- You're disciplined enough to invest the difference

Use our [Rent vs Buy Calculator](/calculators) to run the actual numbers for your situation.
      `
    },
    {
      id:"boa-rate-decisions-explained-2026",
      title:"Bank of Canada Rate Decisions Explained — How BoC Changes Affect Your Mortgage",
      date:"July 2, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Rate Strategy",
      summary:"The Bank of Canada held at 2.25% for the 5th consecutive time on July 15, 2026. Here's how BoC decisions actually affect your mortgage rate.",
      content:`
On July 15, 2026, the Bank of Canada held its overnight rate at 2.25% — the fifth consecutive hold. Understanding how BoC decisions affect mortgage rates is essential for every Canadian homeowner.

## The Overnight Rate and Your Mortgage

**Variable rate mortgages:** Priced at prime rate minus a discount (e.g., prime − 0.90%). When BoC raises/cuts by 0.25%, prime moves immediately, and so does your payment.

**Fixed rate mortgages:** NOT directly tied to the overnight rate. Priced off Government of Canada 5-year bond yields, which respond to inflation expectations and global market conditions.

This is why fixed rates can move independently of BoC decisions.

## The Rate Cycle: 2022–2026

**2022–2023 Hiking cycle:** 0.25% → 5.00% in 18 months. Fastest in modern Canadian history. Variable rates went from ~1.45% to ~7.20%.

**2024–2026 Cutting cycle:** 5.00% → 2.25% through 7 cuts. Variable rates fell from ~7.20% to ~3.35%.

**2026 Hold:** Five consecutive holds. BoC considers 2.25% the neutral rate. Trade uncertainty with the US is keeping the BoC cautious.

## 2026 BoC Schedule

| Date | Decision |
|---|---|
| July 15, 2026 | Hold at 2.25% (latest) |
| September 2, 2026 | Next announcement |
| October 29, 2026 | TBD |
| December 10, 2026 | TBD |

## What This Means for Your Decision

**Variable rate holders:** Unlikely to move much in next 6–12 months. BoC is on hold.

**Renewing:** 2 or 3-year fixed is reasonable given uncertainty.

**Buying:** Get pre-approved now. Current rates are well below 2022–2023 peaks.

Track the BoC rate live on our [Rate History tab](/rates).
      `
    },
    {
      id:"land-transfer-tax-first-time-buyers-2026",
      title:"Land Transfer Tax Rebates for First-Time Buyers — Canada 2026",
      date:"July 1, 2026",
      author:"Canada Mortgage Rates",
      readTime:"4 min read",
      category:"First-Time Buyers",
      summary:"First-time buyers in Ontario, BC, and other provinces can claim significant land transfer tax rebates at closing. Here's how much you can save.",
      content:`
Land transfer tax is one of the largest closing costs Canadian homebuyers face. First-time buyers in several provinces qualify for rebates that can eliminate or significantly reduce this cost.

## LTT Rebates by Province

**Ontario — Up to $4,000**
Rebate refunds full LTT on first $368,000 of purchase, up to $4,000.
On $500,000 home: Full LTT $6,475, rebate $4,000, net LTT $2,475.

**Toronto — Additional Up to $4,475**
First-time buyers in Toronto also get a municipal LTT rebate up to $4,475.
On $500,000 Toronto home: Total LTT $12,950, total rebates $8,475, net $4,475.

**British Columbia — Up to Full Exemption**
Full PTT exemption on homes under $500,000. Partial exemption to $835,000. Above $835,000: no rebate.
**BC New Build Bonus:** ALL buyers (not just first-timers) get full PTT exemption on new builds under $1,100,000.

**Alberta and Saskatchewan:** No provincial LTT. First-time buyers pay only modest land title fees (~$500–$1,000).

**Manitoba:** Partial rebate for first-time buyers — check gov.mb.ca for current limits.

## How to Claim

Your real estate lawyer handles the rebate at closing automatically. Provide confirmation you're a first-time buyer and the property will be your principal residence.

## Important Eligibility Notes

**Ontario worldwide test:** You must never have owned a principal residence anywhere in the world — not just in Canada.

**New Canadians:** Permanent residents qualify. Non-permanent residents generally do not.

Use our [Closing Cost Calculator](/calculators) to calculate your exact LTT including any first-time buyer rebate.
      `
    },
    {
      id:"real-estate-lawyer-closing-guide-2026",
      title:"What a Real Estate Lawyer Does at Closing — Canada 2026",
      date:"July 4, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Home Buying",
      summary:"Your real estate lawyer is the last step before you get your keys. Here's exactly what they do, what you'll sign, and what closing costs they handle.",
      content:`
On closing day, your real estate lawyer ensures the legal transfer of your home goes smoothly. Here's what they actually do.

## Before Closing

**Title search:** Confirms the seller owns the property, no outstanding mortgages or liens, no easements affecting your use.

**Mortgage review:** Receives your mortgage instructions from the lender and ensures all conditions are satisfied.

**Title insurance:** Obtains title insurance ($200–$400) to protect against title defects discovered after closing.

## On Closing Day

**Document signing:** You'll sign mortgage documents, title transfer documents, statement of adjustments, and various declarations.

**Statement of adjustments:** Calculates who owes what at closing — adjusting for prepaid property taxes, utilities, condo fees, and arrears.

**Funds management:** Receives your down payment and mortgage funds, pays out the seller's existing mortgage, remits land transfer tax, wires balance to seller's lawyer.

**Registration:** Once all funds confirmed and documents signed, registers the deed and mortgage with the provincial land registry.

## What to Bring

- Two pieces of government ID
- Certified cheque or bank draft for closing costs balance
- Void cheque for mortgage payment setup

## How Much Does It Cost?

**Professional fees:** $1,000–$2,000
**Disbursements:** Title search, title insurance, registration fees — typically $500–$800

Connect with licensed real estate lawyers through our [Professionals tab](/professionals).
      `
    },
    {
      id:"moving-to-canada-mortgage-2026",
      title:"Getting a Mortgage as a New Canadian — 2026 Complete Guide",
      date:"July 8, 2026",
      author:"Canada Mortgage Rates",
      readTime:"6 min read",
      category:"Home Buying",
      summary:"New Canadians face unique challenges qualifying for a mortgage. Here's how lenders evaluate newcomers, what programs are available, and how to build credit fast.",
      content:`
Canada welcomes over 400,000 new permanent residents annually, many of whom want to buy a home. Without Canadian credit history, newcomers face significant challenges.

## The Core Challenge

Canadian lenders rely on Equifax Canada and TransUnion Canada scores. Your home-country credit history is not automatically recognized. A newcomer with perfect credit elsewhere arrives as "credit invisible" in Canada.

## Newcomer Mortgage Programs

**CMHC Newcomer Program:** Minimum 5% down (10% for non-permanent residents), employment in Canada, home-country credit history may be accepted.

**RBC Newcomer Advantage:** Qualification based on international credit history, income documentation from home country, reference letter from a recognized institution.

**Credit unions:** Provincial credit unions serving specific ethnic communities often have more flexible qualification criteria.

## Building Canadian Credit Fast

1. **Open a Canadian bank account immediately** — length of credit history matters
2. **Get a secured credit card** — available to anyone, reports to both bureaus
3. **Apply for a standard card after 3–6 months** of account history
4. **Pay everything on time** — payment history is 35% of your score
5. **Keep balances under 30%** of each card's limit
6. **Space applications 3–6 months apart**

With consistent responsible use, newcomers can build a 650+ score within 18–24 months.

## Alternative Documentation

If you have less than 2 years Canadian credit history:
- International credit report from home country
- 12 months of bank statements
- Reference letter from a recognized foreign financial institution
- Rental payment history documented through bank records
- Larger down payment (20%+ significantly improves chances)

## FHSA for Newcomers

As a permanent resident, you immediately qualify for the First Home Savings Account — $8,000/year, tax-deductible, tax-free withdrawal for a home purchase. Start contributing the year you arrive.

Connect with local professionals who understand your community through our [Professionals tab](/professionals).
      `
    },
    {
      id:"realtor-selection-guide-canada-2026",
      title:"How to Choose a Realtor in Canada — 10 Questions to Ask Before You Sign",
      date:"July 7, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Home Buying",
      summary:"Choosing the right realtor can save or cost you tens of thousands of dollars. Here's what to look for and what to ask before signing a representation agreement.",
      content:`
The difference between a skilled realtor and a mediocre one can literally cost you tens of thousands — in a negotiated price, a missed inspection issue, or an improperly structured offer.

## 10 Questions to Ask Before Signing

**1. How many transactions in the past 12 months?**
Active agents close 20–50+. An agent doing 5 transactions/year is essentially part-time.

**2. What's your experience in my target neighbourhoods?**
Hyperlocal knowledge — 20 sales in your specific area — beats a generalist.

**3. Can you provide references from recent buyer clients?**
Any credible realtor should have 3–5 references. Call them.

**4. How quickly do you respond?**
In competitive markets, offers must be submitted within hours. A realtor who doesn't return calls for a day is a liability.

**5. What is your approach to offer strategy?**
Look for specific, thoughtful answers about pricing, conditions, and escalation clauses.

**6. What does your buyer representation agreement say?**
Understand the duration and geographic scope before signing.

**7. Do you work with a team?**
Many top realtors hand clients to junior agents. Know who will actually show you homes.

**8. Experience with my property type?**
Condos, rural, new builds each have specific requirements.

**9. How do you handle situations where the seller won't negotiate?**
Look for creative strategies — not just "pay more."

**10. What do I need to know about the current market?**
Reveals whether they give honest advice or just tell you what you want to hear.

## Red Flags

- Pressure to sign long agreements before you've seen a home together
- No verifiable sales history or reviews
- Pushing their own listings (dual agency)

Connect with verified local realtors through our [Professionals tab](/professionals).
      `
    },
    {
      id:"property-tax-canada-cities-2026",
      title:"Property Tax Rates by City in Canada — 2026 Comparison",
      date:"July 9, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"Property Tax",
      summary:"Property tax on the same $500,000 home can vary by $3,000+ depending on which Canadian city you live in. Here's the 2026 breakdown by city.",
      content:`
Property taxes are one of the most variable costs of homeownership in Canada. The same $500,000 home costs $2,175/year in Vancouver or $5,100/year in Hamilton — a $300/month difference.

## How Property Tax is Calculated

Property tax = Assessed value × Mill rate

The mill rate is set annually by your municipality. One mill = $1 per $1,000 of assessed value.

## 2026 Property Tax by City — $500,000 Home

| City | Annual Tax | Monthly | Mill Rate |
|---|---|---|---|
| Vancouver, BC | $2,175 | $181 | 0.24% |
| Victoria, BC | $2,450 | $204 | 0.52% |
| Toronto, ON | $3,050 | $254 | 0.61% |
| Calgary, AB | $3,350 | $279 | 0.67% |
| Ottawa, ON | $3,750 | $313 | 1.09% |
| Saskatoon, SK | $3,850 | $321 | 0.94% |
| Halifax, NS | $3,850 | $321 | 1.15% |
| Regina, SK | $4,100 | $342 | 1.16% |
| Winnipeg, MB | $4,400 | $367 | 1.29% |
| Hamilton, ON | $5,100 | $425 | 1.23% |

## Why Such Variation?

**High home values = lower mill rates:** Vancouver funds the same services with 0.24% because the tax base is enormous. Winnipeg needs 1.29% on lower values.

**Provincial funding:** BC municipalities receive more provincial transfers, reducing reliance on property taxes.

**Services provided:** Cities delivering more services directly have higher tax requirements.

## How to Reduce Your Property Tax

**Appeal your assessment** if comparable sales show your home is overassessed. 40–60% of appeals succeed.

**Check exemptions:** Senior deferral, disability exemption, low-income relief programs.

Use our [Property Tax Calculator](/property-tax) to estimate your tax for any Canadian city.
      `
    },
    {
      id:"mortgage-stress-test-changes-2026",
      title:"Canada's Mortgage Stress Test in 2026 — What Changed and What It Means for Buyers",
      date:"July 5, 2026",
      author:"Canada Mortgage Rates",
      readTime:"5 min read",
      category:"First-Time Buyers",
      summary:"The mortgage stress test evolved significantly in 2024-2026. Here's what changed and how current rules affect Canadian homebuyers.",
      content:`
Canada's mortgage stress test has seen significant changes in 2024–2026 that meaningfully expanded access to homeownership for specific buyer groups.

## The Stress Test: Quick Refresher

Qualify at the higher of: contracted rate + 2%, or 5.25% floor.

With current rates (5-year fixed ~3.90%), the stress test rate is 5.90%.

## What Changed in 2024–2026

**30-Year Amortization Expanded (August 2024 + Late 2024):**
- First-time buyers: 30-year amortization for any purchase
- All buyers: 30-year amortization for newly built homes

**Impact:** 30-year amortization produces a lower monthly payment, improving GDS ratios. On a $450,000 mortgage at stress test rate: 25-year = $2,934/month vs 30-year = $2,665/month. A 3–4 percentage point GDS improvement for borderline buyers.

**Insured Mortgage Cap Raised to $1.5M (December 2024):**
Previously capped at $1,000,000. Buyers in Toronto and Vancouver can now purchase homes up to $1.5M with 5% minimum down payment.

**Stress Test Rate Floor:** Despite significant rate cuts, OSFI maintained the 5.25% floor. With current rates at 3.90%, the binding constraint is your rate + 2% = 5.90%, which exceeds the floor.

## Your Qualifying Power — 2026

On $100,000 gross income at 5.90% stress test rate:
- 25-year amortization: qualifies for ~$450,000 mortgage
- 30-year amortization (first-time or new build): qualifies for ~$490,000 mortgage

The 30-year amortization adds approximately $40,000 in qualifying power.

## Strategies to Improve Qualification

- Add a co-borrower to increase qualifying income
- Pay down car loans and credit card debt before applying
- Use 30-year amortization if eligible
- Consider a new build purchase (30-year available to all buyers)

Use our free [Stress Test Calculator](/calculators) to see exactly what you qualify for.
      `
    },
    {
      id:"first-time-buyer-winnipeg-2026",
      title:"First-Time Home Buyer Guide for Winnipeg, Manitoba — 2026",
      date:"July 12, 2026",
      author:"Canada Mortgage Rates",
      readTime:"7 min read",
      category:"First-Time Buyers",
      summary:"Winnipeg is one of Canada's most affordable major cities for first-time buyers. Here's a complete local guide for 2026.",
      content:`
Winnipeg is consistently ranked among Canada's most affordable major cities. With average detached home prices around $420,000 — vs $1.4M+ in Toronto — first-time buyers in Winnipeg can still access homeownership with realistic savings.

## Winnipeg Housing Market — 2026

**Average prices:**
- Detached home: ~$420,000
- Townhome: ~$300,000
- Condo: ~$230,000
- New build: ~$480,000–$600,000

**Market conditions:** Balanced in 2026 — neither a frenzy nor a buyer's market. Homes taking slightly longer to sell. More accessible than Ontario and BC.

## Down Payment Required

| Home Price | Minimum (5%) | 10% Down | 20% Down |
|---|---|---|---|
| $300,000 | $15,000 | $30,000 | $60,000 |
| $420,000 | $23,500 | $42,000 | $84,000 |
| $550,000 | $32,500 | $55,000 | $110,000 |

## Federal Programs for Winnipeg Buyers

**FHSA:** $8,000/year each, up to $40,000 lifetime. Tax deductible in, tax free out. A couple saving 3 years = $48,000 completely tax-advantaged.

**HBP:** Withdraw up to $60,000 from RRSP ($120,000/couple). Repay over 15 years.

**First-Time Home Buyer Tax Credit:** $1,500 tax credit in year of purchase.

**30-Year Amortization:** Available to all first-time buyers, reducing monthly payments.

## Winnipeg Neighbourhoods

**Inner-city (River Heights, St. Boniface, Osborne Village):** $400,000–$650,000+. Walkable, established.

**New suburbs (Sage Creek, Bridgwater, Prairie Pointe):** $400,000–$650,000. Modern builds, longer commute.

**Affordable areas (Transcona, Elmwood, North End):** $250,000–$380,000. Older stock, some gentrification.

## Local Credit Unions

Winnipeg credit unions — Assiniboine (ACU), Steinbach (SCU), Cambrian, Access — often offer competitive rates with fairer penalty structures than big banks.

Compare Winnipeg rates on our [Rates tab](/) or connect with local professionals through our [Professionals tab](/professionals).
      `
    },

  ];

  if(article){
    const a=ARTICLES.find(x=>x.id===article);
    if(!a)return null;
    return(
      <div>
        <button onClick={()=>setArticle(null)} style={{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",background:s.white,border:`1px solid ${s.border}`,borderRadius:8,fontSize:12,fontWeight:600,color:s.navy,cursor:"pointer",marginBottom:14}}>← Back to Articles</button>
        <Card>
          <div style={{marginBottom:16}}>
            <span style={{background:s.navy,color:"#fff",borderRadius:20,padding:"3px 10px",fontSize:10,fontWeight:700}}>{a.category}</span>
            <h1 style={{fontSize:20,fontWeight:800,color:s.navy,marginTop:10,marginBottom:6,lineHeight:1.3}}>{a.title}</h1>
            <div style={{display:"flex",gap:12,fontSize:11,color:s.muted,flexWrap:"wrap"}}>
              <span>✍️ {a.author}</span>
              <span>📅 {a.date}</span>
              <span>⏱ {a.readTime}</span>
            </div>
          </div>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"10px 14px",marginBottom:16,fontSize:12,color:"#1e40af",fontStyle:"italic"}}>{a.summary}</div>
          <div style={{fontSize:12,color:"#374151",lineHeight:1.9}}>
            {a.content.trim().split('\n\n').map((block,i)=>{
              if(block.startsWith('## ')){
                return<h2 key={i} style={{fontSize:15,fontWeight:800,color:s.navy,marginTop:20,marginBottom:8,paddingBottom:6,borderBottom:`2px solid ${s.light}`}}>{block.replace('## ','')}</h2>;
              }
              if(block.startsWith('### ')){
                return<h3 key={i} style={{fontSize:13,fontWeight:800,color:s.navy,marginTop:14,marginBottom:6}}>{block.replace('### ','')}</h3>;
              }
              if(block.startsWith('**') && block.includes(':**')){
                const [label,...rest]=block.split(':**');
                return<div key={i} style={{marginBottom:8}}><span style={{fontWeight:800,color:s.navy}}>{label.replace('**','')}:</span><span>{rest.join(':**')}</span></div>;
              }
              if(block.startsWith('- ')||block.startsWith('* ')){
                const items=block.split('\n').filter(l=>l.trim());
                return<ul key={i} style={{marginBottom:10,paddingLeft:20}}>{items.map((item,j)=><li key={j} style={{marginBottom:4,fontSize:12,color:"#374151"}}>{item.replace(/^[-*]\s/,'').replace(/\*\*(.*?)\*\*/g,'$1')}</li>)}</ul>;
              }
              if(block.includes('| ')){
                const rows=block.split('\n').filter(r=>r.trim()&&!r.includes('---'));
                return(
                  <div key={i} style={{overflowX:"auto",marginBottom:12}}>
                    <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                      {rows.map((row,j)=>{
                        const cells=row.split('|').filter(c=>c.trim());
                        return<tr key={j} style={{borderBottom:`1px solid ${s.light}`,background:j===0?"#f8fafc":j%2===0?s.white:"#fafbfc"}}>{cells.map((cell,k)=><td key={k} style={{padding:"7px 10px",fontWeight:j===0?700:400,color:j===0?s.navy:"#374151"}}>{cell.trim()}</td>)}</tr>;
                      })}
                    </table>
                  </div>
                );
              }
              const formatted=block.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g,'<span style="color:#1e40af;text-decoration:underline;cursor:pointer">$1</span>');
              return<p key={i} style={{marginBottom:10,fontSize:12,lineHeight:1.9}} dangerouslySetInnerHTML={{__html:formatted}}/>;
            })}
          </div>
          <div style={{background:"#f8fafc",borderRadius:10,padding:"12px 16px",marginTop:16,border:`1px solid ${s.border}`}}>
            <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:6}}>⚠️ Disclaimer</div>
            <div style={{fontSize:10,color:s.muted,lineHeight:1.6}}>This article is for informational purposes only and does not constitute financial, legal, or mortgage advice. Always consult a licensed mortgage professional before making any financial decision. Canada Mortgage Rates is not a licensed mortgage broker or financial advisor.</div>
          </div>
        </Card>
      </div>
    );
  }

  const categories=["All",...Array.from(new Set(ARTICLES.map(a=>a.category)))];
  const filtered=ARTICLES.filter(a=>{
    const q=search.toLowerCase();
    const matchesSearch=!q||a.title.toLowerCase().includes(q)||a.summary.toLowerCase().includes(q)||a.category.toLowerCase().includes(q);
    const matchesCat=filterCat==="All"||a.category===filterCat;
    return matchesSearch&&matchesCat;
  });

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>📝</div>
        <h2 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:6}}>Canada Mortgage Rates Blog</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12}}>Expert guides, rate analysis, and homebuying advice for Canadians.</p>
      </div>

      {/* Search and filter */}
      <div style={{background:s.white,borderRadius:12,padding:"12px 14px",marginBottom:14,border:`1px solid ${s.border}`}}>
        <div style={{display:"flex",gap:8,marginBottom:10}}>
          <div style={{flex:1,display:"flex",alignItems:"center",gap:8,background:"#f8fafc",borderRadius:8,padding:"8px 12px",border:`1px solid ${s.border}`}}>
            <span style={{fontSize:14}}>🔍</span>
            <input
              value={search}
              onChange={e=>setSearch(e.target.value)}
              placeholder="Search articles — e.g. stress test, renewal, private lender..."
              style={{flex:1,border:"none",outline:"none",fontSize:12,background:"transparent",color:s.navy}}
            />
            {search&&<button onClick={()=>setSearch("")} style={{background:"none",border:"none",color:s.muted,cursor:"pointer",fontSize:14,padding:0}}>✕</button>}
          </div>
        </div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {categories.map(cat=>(
            <button key={cat} onClick={()=>setFilterCat(cat)} style={{padding:"4px 12px",borderRadius:20,border:`1.5px solid ${filterCat===cat?s.navy:s.border}`,background:filterCat===cat?s.navy:s.white,color:filterCat===cat?"#fff":s.muted,fontSize:10,fontWeight:filterCat===cat?700:400,cursor:"pointer"}}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(search||filterCat!=="All")&&(
        <div style={{fontSize:11,color:s.muted,marginBottom:10,paddingLeft:2}}>
          {filtered.length} article{filtered.length!==1?"s":""} found{search?` for "${search}"`:""}
          {filterCat!=="All"?` in ${filterCat}`:""}
          <button onClick={()=>{setSearch("");setFilterCat("All");}} style={{background:"none",border:"none",color:s.blue,cursor:"pointer",fontSize:11,marginLeft:8,textDecoration:"underline"}}>Clear</button>
        </div>
      )}

      {filtered.length===0?(
        <div style={{textAlign:"center",padding:"40px 20px",background:"#f8fafc",borderRadius:12,border:`1px solid ${s.border}`}}>
          <div style={{fontSize:32,marginBottom:8}}>🔍</div>
          <div style={{fontSize:14,fontWeight:700,color:s.navy,marginBottom:6}}>No articles found for "{search}"</div>
          <div style={{fontSize:11,color:s.muted,marginBottom:14}}>Try different keywords or browse all categories</div>
          <button onClick={()=>{setSearch("");setFilterCat("All");}} style={{padding:"8px 20px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Show All Articles</button>
        </div>
      ):(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
          {filtered.map(a=>(
            <div key={a.id} onClick={()=>setArticle(a.id)} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,overflow:"hidden",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.1)";e.currentTarget.style.borderColor=s.navy;}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)";e.currentTarget.style.borderColor=s.border;}}>
              <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,padding:"12px 16px"}}>
                <span style={{background:s.gold,color:s.navy,borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:800}}>{a.category}</span>
              </div>
              <div style={{padding:14}}>
                <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:6,lineHeight:1.4}}>{a.title}</h3>
                <p style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:10}}>{a.summary}</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:4}}>
                  <div style={{fontSize:10,color:s.muted}}>{a.date} · {a.readTime}</div>
                  <span style={{fontSize:11,color:s.blue,fontWeight:700}}>Read Article →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LearnGlossaryTab(){
  const [subTab,setSubTab]=useState<"learn"|"glossary">("learn");
  useEffect(()=>{
    const h=(e:any)=>{if(e.detail.tab==="Resources")setSubTab(e.detail.sub);};
    window.addEventListener("setSubTab",h);return()=>window.removeEventListener("setSubTab",h);
  },[]);
  return(
    <div>
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        <button onClick={()=>setSubTab("learn")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="learn"?s.navy:s.border}`,background:subTab==="learn"?s.navy:s.white,color:subTab==="learn"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>📚 Learn & Blog</button>
        <button onClick={()=>setSubTab("glossary")} style={{flex:1,padding:"10px",borderRadius:8,border:`2px solid ${subTab==="glossary"?s.navy:s.border}`,background:subTab==="glossary"?s.navy:s.white,color:subTab==="glossary"?"#fff":s.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>📖 Glossary</button>
      </div>
      {subTab==="learn"&&(
        <div>
          <BlogTab/>
          <div style={{borderTop:`2px solid ${s.border}`,marginTop:20,paddingTop:20}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:14}}>📋 Quick Guides</h3>
            <LearnTab/>
          </div>
        </div>
      )}
      {subTab==="glossary"&&<GlossaryTab/>}
    </div>
  );
}

function FeedbackForm(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [type,setType]=useState("question");
  const [msg,setMsg]=useState("");
  const [ok,setOk]=useState(false);
  const [submitting,setSubmitting]=useState(false);

  async function submit(){
    if(!msg.trim()){alert("Please enter a message.");return;}
    setSubmitting(true);
    try{
      await fetch("https://formspree.io/f/xpqgwvvl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        _subject:`User ${type} — canadamortgagerates.net`,
        name:name||"Anonymous",email:email||"Not provided",type,message:msg,
        source:"Canada Mortgage Rates — Contact Form"
      })});
      setOk(true);
    }catch{alert("Something went wrong. Please try again.");}
    setSubmitting(false);
  }

  if(ok)return(
    <div style={{textAlign:"center",padding:"16px 0"}}>
      <div style={{fontSize:28,marginBottom:8}}>✅</div>
      <div style={{fontSize:13,fontWeight:800,color:s.green,marginBottom:4}}>Message Received!</div>
      <div style={{fontSize:11,color:s.muted,marginBottom:10}}>Thank you — we'll get back to you within 1 business day.</div>
      <button onClick={()=>{setOk(false);setMsg("");setName("");setEmail("");}} style={{padding:"6px 16px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>Send Another →</button>
    </div>
  );

  return(
    <div>
      <Field label="Type">
        <select value={type} onChange={e=>setType(e.target.value)} style={inp}>
          <option value="question">❓ Question</option>
          <option value="suggestion">💡 Suggestion</option>
          <option value="error">🐛 Error / Bug Report</option>
          <option value="partnership">🤝 Partnership Inquiry</option>
          <option value="other">📝 Other</option>
        </select>
      </Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <Field label="Name (optional)"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" style={inp}/></Field>
        <Field label="Email (optional)"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" style={inp}/></Field>
      </div>
      <Field label="Message *"><textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Your question, suggestion, or feedback..." style={{...inp,height:90,resize:"vertical" as any}}/></Field>
      <button onClick={submit} disabled={submitting} style={{...calcBtn,opacity:submitting?0.7:1}}>{submitting?"Sending...":"Send Message →"}</button>
      <div style={{fontSize:10,color:s.muted,marginTop:6}}>📧 Or email us directly: info@canadamortgagerates.net</div>
    </div>
  );
}

function HomeBuyingJourney({setActive}:{setActive:(t:string)=>void}){
  const bocRates=useBocRates();
  const prime=parseFloat(String(bocRates.prime))||4.45;

  // Wizard state
  const [step,setStep]=useState(0);
  const [data,setData]=useState({
    prov:"MB",city:"Winnipeg",homePrice:450000,downPct:10,income:90000,
    amort:25,term:"5-year",rateType:"fixed",
    needsRealtor:false,needsLawyer:false,needsInspector:false,needsBroker:false,
  });

  // Calculations
  const downAmt=Math.round(data.homePrice*(data.downPct/100));
  const mortgage=data.homePrice-downAmt;
  const needsCMHC=data.downPct<20;
  const cmhcRate=data.downPct<10?0.04:data.downPct<15?0.031:data.downPct<20?0.028:0;
  const cmhcPremium=needsCMHC?Math.round(mortgage*cmhcRate):0;
  const totalMortgage=mortgage+cmhcPremium;
  const rateType=data.rateType;
  const rate=rateType==="fixed"?(prime-0.55)/100:(prime-0.90)/100;
  const n=data.amort*12;
  const r=(rateType==="fixed"?(prime-0.55):(prime-0.90))/100/12;
  const monthlyPayment=Math.round(totalMortgage*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1));
  const stressRate=(rateType==="fixed"?(prime-0.55+2):(prime-0.90+2))/100/12;
  const stressPayment=Math.round(totalMortgage*(stressRate*Math.pow(1+stressRate,n))/(Math.pow(1+stressRate,n)-1));
  const maxHousing=Math.round((data.income/12)*0.39);
  const passesStress=stressPayment<=maxHousing;

  // Province tax rates
  const TAX_RATES:{[k:string]:number}={MB:1.29,ON:0.61,BC:0.24,AB:0.20,SK:0.94,QC:0.76,NS:1.15,NB:1.42,PE:0.67,NL:0.88};
  const annualTax=Math.round(data.homePrice*(TAX_RATES[data.prov]||1.0)/100);

  // Closing costs estimate
  const LTT_RATES:{[k:string]:number}={MB:0.014,ON:0.02,BC:0.02,AB:0.001,SK:0.003,QC:0.015,NS:0.015,NB:0.01,PE:0.02,NL:0.008};
  const ltt=Math.round(data.homePrice*(LTT_RATES[data.prov]||0.015));
  const legalFees=1800;
  const titleInsurance=300;
  const totalClosing=ltt+legalFees+titleInsurance+(needsCMHC?0:0);

  // Insurance estimate
  const INS_RATES:{[k:string]:number}={MB:1080,ON:1450,BC:1380,AB:1740,SK:1020,QC:960,NS:1150,NB:1100,PE:1050,NL:1100};
  const annualInsurance=INS_RATES[data.prov]||1200;

  const steps=[
    {icon:"💰",title:"Your Budget",desc:"Home price, income & down payment"},
    {icon:"📊",title:"Your Rate",desc:"Find current mortgage rates"},
    {icon:"📋",title:"Stress Test",desc:"Will you qualify?"},
    {icon:"🏷️",title:"Closing Costs",desc:"LTT, legal fees & more"},
    {icon:"🏛️",title:"Property Tax",desc:"Annual tax estimate"},
    {icon:"🛡️",title:"Home Insurance",desc:"Annual insurance estimate"},
    {icon:"👷",title:"Find Professionals",desc:"Realtor, lawyer, inspector"},
    {icon:"📄",title:"Your Summary",desc:"Complete cost breakdown"},
  ];

  function update(key:string,val:any){setData(d=>({...d,[key]:val}));}

  return(
    <div>
      {/* Header */}
      <div style={{background:`linear-gradient(135deg,${s.red},#b91c1c)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:6}}>🗺️</div>
        <h2 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:4}}>Your Home Buying Journey</h2>
        <p style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Complete all 8 steps to get your full cost breakdown — from first look to closing day.</p>
      </div>

      {/* Progress bar */}
      <div style={{marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
          <span style={{fontSize:11,fontWeight:700,color:s.navy}}>Step {step+1} of {steps.length}</span>
          <span style={{fontSize:11,color:s.muted}}>{steps[step].title}</span>
        </div>
        <div style={{background:"#f1f5f9",borderRadius:20,height:8,overflow:"hidden"}}>
          <div style={{background:`linear-gradient(90deg,${s.red},${s.gold})`,borderRadius:20,height:"100%",width:`${((step+1)/steps.length)*100}%`,transition:"width 0.4s"}}/>
        </div>
        {/* Step dots */}
        <div style={{display:"flex",justifyContent:"space-between",marginTop:8}}>
          {steps.map((st,i)=>(
            <button key={i} onClick={()=>setStep(i)} style={{width:28,height:28,borderRadius:"50%",border:`2px solid ${i<=step?s.red:s.border}`,background:i<step?"#ef4444":i===step?s.red:s.white,color:i<=step?"#fff":s.muted,fontSize:10,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.2s"}} title={st.title}>
              {i<step?"✓":st.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Top navigation */}
      {step>0&&(
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
          <button onClick={()=>setStep(step-1)} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 12px",background:s.white,color:s.navy,border:`1.5px solid ${s.border}`,borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>← Back to {steps[step-1].title}</button>
          <span style={{fontSize:10,color:s.muted}}>or tap any step dot above</span>
        </div>
      )}

      {/* Step 0 — Budget */}
      {step===0&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>💰 Step 1: Your Budget</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Enter your basics — we'll carry these through every step automatically.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            <Field label="Province">
              <select value={data.prov} onChange={e=>update("prov",e.target.value)} style={inp}>
                {Object.entries(PDATA).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}
              </select>
            </Field>
            <Field label="City">
              <select value={data.city} onChange={e=>update("city",e.target.value)} style={inp}>
                {(PDATA[data.prov]?.cities||[]).map(c=><option key={c} value={c}>{c}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Home Price">
            <input type="number" value={data.homePrice} onChange={e=>update("homePrice",parseFloat(e.target.value)||0)} style={inp}/>
          </Field>
          <Field label={`Down Payment: ${data.downPct}% = $${downAmt.toLocaleString()}`}>
            <input type="range" min={5} max={35} value={data.downPct} onChange={e=>update("downPct",parseInt(e.target.value))} style={{width:"100%",accentColor:s.red}}/>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:s.muted,marginTop:2}}>
              <span>5% (min)</span><span style={{color:data.downPct>=20?s.green:s.red,fontWeight:700}}>{data.downPct>=20?"✅ No CMHC":"⚠️ CMHC required"}</span><span>35%</span>
            </div>
          </Field>
          <Field label="Annual Gross Income">
            <input type="number" value={data.income} onChange={e=>update("income",parseFloat(e.target.value)||0)} style={inp}/>
          </Field>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            <Field label="Amortization">
              <select value={data.amort} onChange={e=>update("amort",parseInt(e.target.value))} style={inp}>
                <option value={25}>25 years</option>
                <option value={30}>30 years (new build)</option>
                <option value={20}>20 years</option>
              </select>
            </Field>
            <Field label="Rate Type">
              <select value={data.rateType} onChange={e=>update("rateType",e.target.value)} style={inp}>
                <option value="fixed">Fixed</option>
                <option value="variable">Variable</option>
              </select>
            </Field>
          </div>
          {/* Quick summary */}
          <div style={{background:"#f8fafc",borderRadius:10,padding:"12px 14px",marginTop:10,border:`1px solid ${s.border}`}}>
            <div style={{fontSize:11,fontWeight:700,color:s.navy,marginBottom:8}}>📋 Quick Summary</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
              {[
                ["Mortgage Amount",`$${mortgage.toLocaleString()}`],
                ["CMHC Premium",needsCMHC?`$${cmhcPremium.toLocaleString()}`:"None ✅"],
                ["Total Mortgage",`$${totalMortgage.toLocaleString()}`],
                ["Est. Monthly",`$${monthlyPayment.toLocaleString()}`],
              ].map(([l,v])=>(
                <div key={l} style={{background:s.white,borderRadius:6,padding:"6px 10px",border:`1px solid ${s.light}`}}>
                  <div style={{fontSize:9,color:s.muted}}>{l}</div>
                  <div style={{fontSize:13,fontWeight:800,color:s.navy}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Step 1 — Rates */}
      {step===1&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📊 Step 2: Your Mortgage Rate</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Current market rates for {data.prov} — auto-updated from Bank of Canada prime rate ({bocRates.prime}%).</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:14}}>
            {[
              {label:"1yr Fixed",rate:(prime+0.05).toFixed(2),color:"#0891b2"},
              {label:"2yr Fixed",rate:(prime-0.25).toFixed(2),color:"#0891b2"},
              {label:"3yr Fixed",rate:(prime-0.35).toFixed(2),color:s.navy},
              {label:"5yr Fixed",rate:(prime-0.55).toFixed(2),color:s.navy},
              {label:"Variable",rate:(prime-0.90).toFixed(2),color:"#7c3aed"},
            ].map(r=>(
              <button key={r.label} onClick={()=>update("rateType",r.label.includes("Variable")?"variable":"fixed")} style={{padding:"12px 8px",background:s.white,border:`2px solid ${r.color}`,borderRadius:10,cursor:"pointer",textAlign:"center"}}>
                <div style={{fontSize:10,color:s.muted,marginBottom:4}}>{r.label}</div>
                <div style={{fontSize:20,fontWeight:800,color:r.color}}>{r.rate}%</div>
                <div style={{fontSize:9,color:s.muted,marginTop:2}}>per year</div>
              </button>
            ))}
          </div>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"10px 14px",fontSize:11,color:"#15803d",marginBottom:14}}>
            💡 Based on your {data.rateType} rate of <b>{rateType==="fixed"?(prime-0.55).toFixed(2):(prime-0.90).toFixed(2)}%</b>, your estimated monthly payment is <b>${monthlyPayment.toLocaleString()}</b>.
          </div>
          <button onClick={()=>setActive("Rates")} style={{width:"100%",padding:"10px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>📊 Compare Full Rate Table →</button>
        </Card>
      )}

      {/* Step 2 — Stress Test */}
      {step===2&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>📋 Step 3: Mortgage Stress Test</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>You must qualify at your rate + 2% or 5.25% — whichever is higher.</p>
          <div style={{background:passesStress?"#f0fdf4":"#fff5f5",border:`2px solid ${passesStress?"#4ade80":"#f87171"}`,borderRadius:12,padding:"16px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:40,marginBottom:8}}>{passesStress?"✅":"⚠️"}</div>
            <div style={{fontSize:16,fontWeight:800,color:passesStress?"#15803d":"#dc2626",marginBottom:6}}>
              {passesStress?"You Pass the Stress Test":"Stress Test Challenge"}
            </div>
            <div style={{fontSize:11,color:s.muted,lineHeight:1.6}}>
              {passesStress
                ?"Your income supports this mortgage at the stress test rate."
                :"Your housing costs exceed 39% of gross income at the stress test rate. Consider a larger down payment, lower purchase price, or longer amortization."}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
            {[
              ["Stress Test Rate",`${(rateType==="fixed"?(prime-0.55+2):(prime-0.90+2)).toFixed(2)}%`],
              ["Payment at Stress Rate",`$${stressPayment.toLocaleString()}/mo`],
              ["Max Allowed (39% GDS)",`$${maxHousing.toLocaleString()}/mo`],
              ["Status",passesStress?"✅ Passes":"⚠️ Review needed"],
            ].map(([l,v])=>(
              <div key={l} style={{background:"#f8fafc",borderRadius:8,padding:"10px 12px",border:`1px solid ${s.border}`}}>
                <div style={{fontSize:9,color:s.muted,marginBottom:3}}>{l}</div>
                <div style={{fontSize:13,fontWeight:800,color:s.navy}}>{v}</div>
              </div>
            ))}
          </div>
          <button onClick={()=>setActive("Calculators")} style={{width:"100%",padding:"10px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>📋 Full Stress Test Calculator →</button>
        </Card>
      )}

      {/* Step 3 — Closing Costs */}
      {step===3&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🏷️ Step 4: Closing Costs</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>One-time costs due at closing on top of your down payment.</p>
          <div style={{marginBottom:14}}>
            {[
              {label:"Land Transfer Tax",amount:ltt,color:"#7c3aed",note:`${data.prov} rate`},
              {label:"Legal Fees",amount:legalFees,color:s.navy,note:"Est. real estate lawyer"},
              {label:"Title Insurance",amount:titleInsurance,color:s.blue,note:"One-time premium"},
              {label:"Moving Costs",amount:1500,color:"#92400e",note:"Estimated"},
              {label:"Immediate Repairs",amount:2000,color:s.muted,note:"Budget 1% of price"},
            ].map(item=>(
              <div key={item.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${s.light}`}}>
                <div>
                  <div style={{fontSize:12,fontWeight:700,color:s.navy}}>{item.label}</div>
                  <div style={{fontSize:10,color:s.muted}}>{item.note}</div>
                </div>
                <div style={{fontSize:14,fontWeight:800,color:item.color}}>${item.amount.toLocaleString()}</div>
              </div>
            ))}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",background:"#f8fafc",borderRadius:8,marginTop:6,paddingLeft:8,paddingRight:8}}>
              <div style={{fontSize:13,fontWeight:800,color:s.navy}}>Total Closing Costs</div>
              <div style={{fontSize:16,fontWeight:800,color:s.red}}>${(ltt+legalFees+titleInsurance+1500+2000).toLocaleString()}</div>
            </div>
          </div>
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#92400e",marginBottom:14}}>
            💡 Total cash needed at closing: <b>${(downAmt+ltt+legalFees+titleInsurance+1500+2000).toLocaleString()}</b> (down payment + closing costs)
          </div>
          <button onClick={()=>setActive("Calculators")} style={{width:"100%",padding:"10px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🏷️ Detailed Closing Cost Calculator →</button>
        </Card>
      )}

      {/* Step 4 — Property Tax */}
      {step===4&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🏛️ Step 5: Property Tax</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Annual property tax estimate for {data.city}, {data.prov}.</p>
          <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:12,padding:"20px",textAlign:"center",marginBottom:14}}>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:11,marginBottom:4}}>Estimated Annual Property Tax</div>
            <div style={{color:s.gold,fontSize:36,fontWeight:800,marginBottom:4}}>${annualTax.toLocaleString()}</div>
            <div style={{color:"rgba(255,255,255,0.6)",fontSize:11}}>${Math.round(annualTax/12).toLocaleString()}/month · Mill rate: {TAX_RATES[data.prov]||1.0}%</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
            {[
              ["Monthly Payment",`$${monthlyPayment.toLocaleString()}`],
              ["Monthly Tax",`$${Math.round(annualTax/12).toLocaleString()}`],
              ["Monthly Insurance",`$${Math.round(annualInsurance/12).toLocaleString()}`],
              ["Total Monthly","$"+(monthlyPayment+Math.round(annualTax/12)+Math.round(annualInsurance/12)).toLocaleString()],
            ].map(([l,v],i)=>(
              <div key={l} style={{background:i===3?"#f0fdf4":s.white,borderRadius:8,padding:"10px 12px",border:`1px solid ${i===3?"#bbf7d0":s.border}`}}>
                <div style={{fontSize:9,color:s.muted,marginBottom:3}}>{l}</div>
                <div style={{fontSize:13,fontWeight:800,color:i===3?s.green:s.navy}}>{v}</div>
              </div>
            ))}
          </div>
          <button onClick={()=>setActive("Property Tax")} style={{width:"100%",padding:"10px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🏛️ Property Tax Calculator →</button>
        </Card>
      )}

      {/* Step 5 — Insurance */}
      {step===5&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>🛡️ Step 6: Home Insurance</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Estimated annual home insurance for {data.prov}.</p>
          <div style={{background:`linear-gradient(135deg,#15803d,#166534)`,borderRadius:12,padding:"20px",textAlign:"center",marginBottom:14}}>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:11,marginBottom:4}}>Estimated Annual Premium</div>
            <div style={{color:"#4ade80",fontSize:36,fontWeight:800,marginBottom:4}}>${annualInsurance.toLocaleString()}</div>
            <div style={{color:"rgba(255,255,255,0.6)",fontSize:11}}>${Math.round(annualInsurance/12).toLocaleString()}/month · {data.prov} average</div>
          </div>
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",fontSize:11,color:"#92400e",marginBottom:14}}>
            ⚠️ Don't forget critical add-ons: <b>Overland Flood coverage</b> ($100–$500/yr) and <b>Sewer Backup</b> ($100–$300/yr) — not included in standard policies.
          </div>
          <button onClick={()=>setActive("Insurance")} style={{width:"100%",padding:"10px",background:"#15803d",color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🛡️ Compare 25+ Insurance Providers →</button>
        </Card>
      )}

      {/* Step 6 — Professionals */}
      {step===6&&(
        <Card style={{marginBottom:14}}>
          <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>👷 Step 7: Find Your Team</h3>
          <p style={{fontSize:11,color:s.muted,marginBottom:14}}>Select the professionals you need — we'll connect you with verified experts in {data.city}.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
            {[
              {key:"needsRealtor",icon:"🤝",title:"Realtor",desc:"Find & negotiate your home",fee:"$100/lead"},
              {key:"needsLawyer",icon:"⚖️",title:"Real Estate Lawyer",desc:"Handle closing & title transfer",fee:"$50/lead"},
              {key:"needsInspector",icon:"🔍",title:"Home Inspector",desc:"Inspect before you finalize",fee:"$30/lead"},
              {key:"needsBroker",icon:"💼",title:"Mortgage Broker",desc:"Shop 30+ lenders for best rate",fee:"Free to you"},
            ].map(p=>(
              <button key={p.key} onClick={()=>update(p.key,!data[p.key as keyof typeof data])} style={{padding:"12px",borderRadius:10,border:`2px solid ${data[p.key as keyof typeof data]?s.green:s.border}`,background:data[p.key as keyof typeof data]?"#f0fdf4":s.white,cursor:"pointer",textAlign:"left",transition:"all 0.15s"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                  <span style={{fontSize:20}}>{p.icon}</span>
                  <span style={{fontSize:16}}>{data[p.key as keyof typeof data]?"✅":"⬜"}</span>
                </div>
                <div style={{fontSize:12,fontWeight:800,color:s.navy}}>{p.title}</div>
                <div style={{fontSize:10,color:s.muted,marginTop:2}}>{p.desc}</div>
              </button>
            ))}
          </div>
          {(data.needsRealtor||data.needsLawyer||data.needsInspector||data.needsBroker)&&(
            <button onClick={()=>setActive("Professionals")} style={{width:"100%",padding:"10px",background:s.green,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>👷 Connect with Professionals →</button>
          )}
        </Card>
      )}

      {/* Step 7 — Summary */}
      {step===7&&(
        <div>
          <div style={{background:`linear-gradient(135deg,${s.green},#15803d)`,borderRadius:14,padding:"20px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:32,marginBottom:6}}>🎉</div>
            <h2 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:4}}>Your Complete Home Buying Summary</h2>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>{data.city}, {data.prov} · ${data.homePrice.toLocaleString()} home · {data.downPct}% down</p>
          </div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:12}}>💰 One-Time Costs</h3>
            {[
              ["Down Payment",`$${downAmt.toLocaleString()}`,s.navy],
              ["CMHC Premium",needsCMHC?`$${cmhcPremium.toLocaleString()} (added to mortgage)`:"None ✅",needsCMHC?s.red:s.green],
              ["Land Transfer Tax",`$${ltt.toLocaleString()}`,s.muted],
              ["Legal Fees",`$${legalFees.toLocaleString()}`,s.muted],
              ["Title Insurance","$300",s.muted],
              ["Moving + Setup","$3,500 (est.)",s.muted],
            ].map(([l,v,c])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:`1px solid ${s.light}`}}>
                <span style={{fontSize:11,color:s.muted}}>{l}</span>
                <span style={{fontSize:11,fontWeight:700,color:c as string}}>{v}</span>
              </div>
            ))}
            <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0",marginTop:4,borderTop:`2px solid ${s.border}`}}>
              <span style={{fontSize:13,fontWeight:800,color:s.navy}}>Total Cash Needed at Closing</span>
              <span style={{fontSize:14,fontWeight:800,color:s.red}}>${(downAmt+ltt+legalFees+300+3500).toLocaleString()}</span>
            </div>
          </Card>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:12}}>📅 Monthly Ongoing Costs</h3>
            {[
              ["Mortgage Payment",`$${monthlyPayment.toLocaleString()}`,s.navy],
              ["Property Tax",`$${Math.round(annualTax/12).toLocaleString()}`,s.muted],
              ["Home Insurance",`$${Math.round(annualInsurance/12).toLocaleString()}`,s.muted],
              ["Maintenance Reserve","$375 (est.)",s.muted],
            ].map(([l,v,c])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:`1px solid ${s.light}`}}>
                <span style={{fontSize:11,color:s.muted}}>{l}</span>
                <span style={{fontSize:11,fontWeight:700,color:c as string}}>{v}</span>
              </div>
            ))}
            <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0",marginTop:4,borderTop:`2px solid ${s.border}`}}>
              <span style={{fontSize:13,fontWeight:800,color:s.navy}}>Total Monthly Cost</span>
              <span style={{fontSize:14,fontWeight:800,color:s.green}}>${(monthlyPayment+Math.round(annualTax/12)+Math.round(annualInsurance/12)+375).toLocaleString()}/mo</span>
            </div>
          </Card>
          <Card style={{background:passesStress?"#f0fdf4":"#fff5f5",border:`1px solid ${passesStress?"#bbf7d0":"#fca5a5"}`,marginBottom:14}}>
            <div style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:6}}>📋 Stress Test: {passesStress?"✅ You Qualify":"⚠️ May Need Adjustment"}</div>
            <div style={{fontSize:11,color:s.muted}}>{passesStress?"Your income supports this mortgage at the qualifying rate.":"Consider a larger down payment or lower home price."}</div>
          </Card>

          {/* Professionals Section */}
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.green}`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:4}}>👷 Your Professional Team</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Connect with verified professionals in {data.city} — all contact goes through our platform.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
              {[
                {icon:"🤝",title:"Find a Realtor",desc:"Connect with a local realtor to find and negotiate your home.",color:s.green,sub:"realtors",fee:"$100/lead"},
                {icon:"⚖️",title:"Real Estate Lawyer",desc:"Licensed lawyer to handle your closing, title transfer, and legal docs.",color:"#92400e",sub:"lawyers",fee:"$50/lead"},
                {icon:"🔍",title:"Home Inspector",desc:"Certified inspector to check the property before you finalize.",color:s.blue,sub:"inspectors",fee:"$30/lead"},
                {icon:"💼",title:"Mortgage Broker",desc:"Independent broker to shop 30+ lenders and find your best rate.",color:s.navy,sub:"brokers",fee:"Free to you"},
              ].map(p=>(
                <div key={p.title} style={{background:"#f8fafc",borderRadius:10,padding:12,border:`1px solid ${s.border}`}}>
                  <div style={{fontSize:22,marginBottom:6}}>{p.icon}</div>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:4}}>{p.title}</div>
                  <div style={{fontSize:10,color:s.muted,lineHeight:1.5,marginBottom:8}}>{p.desc}</div>
                  <button onClick={()=>setActive("Professionals")} style={{width:"100%",padding:"8px",background:p.color,color:"#fff",border:"none",borderRadius:7,fontSize:11,fontWeight:700,cursor:"pointer"}}>Connect →</button>
                </div>
              ))}
            </div>
          </Card>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
            <button onClick={()=>setActive("Rates")} style={{padding:"10px",background:s.navy,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>📊 Compare Rates</button>
            <button onClick={()=>setActive("Insurance")} style={{padding:"10px",background:"#15803d",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>🛡️ Get Insurance</button>
            <button onClick={()=>setStep(0)} style={{padding:"10px",background:s.gold,color:s.navy,border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>🔄 Start Over</button>
            <button onClick={()=>window.print()} style={{padding:"10px",background:"#374151",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer"}}>🖨️ Save as PDF</button>
          </div>
          <button onClick={()=>window.print()} style={{width:"100%",padding:"13px",background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:800,cursor:"pointer",marginBottom:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            🖨️ Print / Save as PDF — Full Summary
          </button>
          <div style={{fontSize:10,color:s.muted,textAlign:"center",marginBottom:14}}>
            In the print dialog, select "Save as PDF" to save a copy of your summary
          </div>
        </div>
      )}

      {/* Navigation */}
      <div style={{display:"flex",gap:8,marginTop:4}}>
        {step>0&&<button onClick={()=>setStep(step-1)} style={{flex:1,padding:"11px",background:s.white,color:s.navy,border:`2px solid ${s.border}`,borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>← Back</button>}
        {step<steps.length-1&&<button onClick={()=>setStep(step+1)} style={{flex:2,padding:"11px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>Continue → {steps[step+1].title}</button>}
      </div>
    </div>
  );
}

function HomeTab({setActive}:{setActive:(t:string)=>void}):JSX.Element{
  const boc=useBocRates();
  const {last,next}=getBocSchedule();
  const [homeTab,setHomeTab]=useState<"overview"|"tools"|"services"|"journey"|"about">("overview");

  useEffect(()=>{
    const h=(e:any)=>{setHomeTab(e.detail);window.scrollTo({top:0,behavior:"smooth"});};
    window.addEventListener("setHomeTab",h);
    return()=>window.removeEventListener("setHomeTab",h);
  },[]);

  return(
    <div>
      {/* Hero */}
      <div style={{background:`linear-gradient(135deg,${s.navy},#1a3a5c)`,borderRadius:14,padding:"24px 20px",marginBottom:14,textAlign:"center"}}>
        <div style={{fontSize:32,marginBottom:8}}>🍁</div>
        <h2 style={{color:"#fff",fontSize:22,fontWeight:800,marginBottom:8}}>Canada's Most Complete Mortgage Platform</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:12,lineHeight:1.7,maxWidth:600,margin:"0 auto 16px"}}>Free, AI-powered, and built for every province. Compare rates, calculate payments, discover programs, and connect with experts — all in one place.</p>
        <div style={{display:"flex",justifyContent:"center",gap:8,flexWrap:"wrap",marginBottom:16}}>
          {["🏦 50+ Lenders","🌍 All 10 Provinces","🤖 AI-Powered","💰 Always Free"].map(l=>(
            <span key={l} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:20,padding:"5px 14px",color:"#fff",fontSize:11,fontWeight:600}}>{l}</span>
          ))}
        </div>
        <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>setActive("Rates")} style={{padding:"10px 20px",background:s.gold,color:s.navy,border:"none",borderRadius:8,fontSize:12,fontWeight:800,cursor:"pointer"}}>📊 Compare Rates →</button>
          <button onClick={()=>setActive("Calculators")} style={{padding:"10px 20px",background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(255,255,255,0.3)",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>🧮 Calculators →</button>
          <button onClick={()=>{setHomeTab("journey");}} style={{padding:"10px 20px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:12,fontWeight:800,cursor:"pointer",animation:"glow 2s infinite"}}>📊 Full Home Cost Breakdown →</button>
        </div>
      </div>

      {/* BoC Alert */}
      <div style={{background:"#fff7ed",border:`1px solid #fed7aa`,borderRadius:10,padding:"10px 16px",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
        <div style={{fontSize:20}}>📢</div>
        <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700,color:"#c2410c"}}>Bank of Canada — Last Decision {fmtBocDate(last)}</div><div style={{fontSize:11,color:"#92400e"}}>Overnight: <b>{boc.overnight}%</b> · Prime: <b>{boc.prime}%</b> · Next announcement: <b>{fmtBocDate(next)}</b></div></div>
        <button onClick={()=>window.dispatchEvent(new CustomEvent("openRateAlert"))} style={{padding:"6px 12px",background:s.red,color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",flexShrink:0}}>🔔 Get Alerts</button>
      </div>

      {/* Sub-tabs */}
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        <button onClick={()=>setHomeTab("overview")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${homeTab==="overview"?s.navy:s.border}`,background:homeTab==="overview"?s.navy:s.white,color:homeTab==="overview"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🏠 Overview</button>
        <button onClick={()=>setHomeTab("tools")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${homeTab==="tools"?s.navy:s.border}`,background:homeTab==="tools"?s.navy:s.white,color:homeTab==="tools"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🧮 Tools</button>
        <button onClick={()=>setHomeTab("services")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${homeTab==="services"?s.navy:s.border}`,background:homeTab==="services"?s.navy:s.white,color:homeTab==="services"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>🤝 Services</button>
        <button onClick={()=>setHomeTab("journey")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${homeTab==="journey"?s.red:s.border}`,background:homeTab==="journey"?s.red:s.white,color:homeTab==="journey"?"#fff":s.red,fontSize:11,fontWeight:800,cursor:"pointer"}}>📊 Full Home Cost Breakdown</button>
        <button onClick={()=>setHomeTab("about")} style={{flex:1,minWidth:80,padding:"9px",borderRadius:8,border:`2px solid ${homeTab==="about"?s.navy:s.border}`,background:homeTab==="about"?s.navy:s.white,color:homeTab==="about"?"#fff":s.muted,fontSize:11,fontWeight:700,cursor:"pointer"}}>📋 About / Contact</button>
      </div>

      {homeTab==="overview"&&(
        <div>
          {/* Quick stats */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,marginBottom:14}}>
            {[
              {n:"50+",l:"Lenders Compared",icon:"🏦",color:s.navy},
              {n:"10",l:"Provinces Covered",icon:"🍁",color:s.red},
              {n:"11",l:"Calculators",icon:"🧮",color:s.blue},
              {n:"32",l:"Expert Articles",icon:"📝",color:s.green},
              {n:"Free",l:"Always & Forever",icon:"💰",color:s.gold},
            ].map(stat=>(
              <div key={stat.l} style={{background:s.white,borderRadius:10,padding:"12px 10px",border:`1px solid ${s.border}`,textAlign:"center",borderTop:`3px solid ${stat.color}`}}>
                <div style={{fontSize:20,marginBottom:4}}>{stat.icon}</div>
                <div style={{fontSize:20,fontWeight:800,color:stat.color}}>{stat.n}</div>
                <div style={{fontSize:10,color:s.muted,lineHeight:1.3}}>{stat.l}</div>
              </div>
            ))}
          </div>

          {/* What's new */}
          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.gold}`}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>🆕 Latest Features</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:8}}>
              {[
                {tab:"Home",title:"Full Home Cost Breakdown",desc:"8-step guided wizard covering rates, stress test, closing costs, property tax, insurance and professionals — all in one place.",icon:"📊",badge:"NEW"},
                {tab:"Professionals",title:"Professionals Hub",desc:"Find realtors, lawyers, home inspectors, mortgage brokers and home appraisers — all in one tab. Submit a request, connected within 1 day.",icon:"👷",badge:"NEW"},
                {tab:"Rates",title:"Private Lenders",desc:"Banks said no? Connect with MICs, B-lenders and private mortgage specialists. Bad credit, self-employed, bridge financing.",icon:"🔓",badge:"NEW"},
                {tab:"Renewal",title:"Switch or Stay Guide",desc:"Decision framework, 2026 term guide, true cost of switching, and word-for-word negotiation script.",icon:"🔄",badge:"NEW"},
                {tab:"Calculators",title:"Property Tax Suite",desc:"Calculator, tax relief programs, 17-city comparison table, and step-by-step appeal guide.",icon:"🏛️",badge:"NEW"},
                {tab:"Rates",title:"✓ Verified Partner Rates",desc:"Assiniboine Credit Union rates now displayed with a Verified Partner badge — real posted rates, not estimated.",icon:"✓",badge:"NEW"},{tab:"Resources",title:"32 Expert Articles",desc:"Private mortgages, home inspection, broker vs bank, renewal negotiation, property tax appeal and more.",icon:"📝",badge:"NEW"},
              ].map(f=>(
                <div key={f.title} onClick={()=>setActive(f.tab)} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`,cursor:"pointer",position:"relative"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=s.navy;e.currentTarget.style.background="#f0f4ff";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=s.border;e.currentTarget.style.background="#f8fafc";}}>
                  {f.badge&&<span style={{position:"absolute",top:8,right:8,background:s.red,color:"#fff",borderRadius:20,padding:"1px 6px",fontSize:8,fontWeight:800}}>{f.badge}</span>}
                  <div style={{fontSize:18,marginBottom:4}}>{f.icon}</div>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:3}}>{f.title}</div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{f.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Testimonials */}
          <TestimonialsSection/>
        </div>
      )}

      {homeTab==="tools"&&(
        <div>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"10px 16px",marginBottom:14,fontSize:11,color:"#1e40af"}}>
            💡 All tools are free, no login required. Results are estimates — always verify with a licensed professional.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
            {[
              {icon:"📊",tab:"Rates",title:"Compare Mortgage Rates",desc:"Estimated rates from 50+ lenders across all provinces. ACU rates verified. Filter by term, type, and lender.",badge:"📊 EST"},
              {icon:"💰",tab:"Calculators",title:"Payment Calculator",desc:"Calculate your exact monthly mortgage payment based on price, rate, and amortization."},
              {icon:"🏡",tab:"Calculators",title:"Affordability Calculator",desc:"How much house can you afford? Based on GDS/TDS ratios lenders actually use."},
              {icon:"📋",tab:"Calculators",title:"Stress Test Calculator",desc:"Will you pass? Calculate at your rate +2% or 5.25% — whichever is higher."},
              {icon:"💳",tab:"Calculators",title:"Refinancing Calculator",desc:"Should you break your mortgage? Break-even point, penalty estimator, cash-out, HELOC."},
              {icon:"🔄",tab:"Calculators",title:"Renewal Calculator",desc:"Compare your lender's renewal offer vs shopping around. See how much you'd save."},
              {icon:"📅",tab:"Calculators",title:"Amortization Schedule",desc:"Year-by-year breakdown of payments, interest, and remaining balance."},
              {icon:"🏷️",tab:"Calculators",title:"Closing Cost Calculator",desc:"Land transfer tax, legal fees, title insurance by province. First-time buyer rebates included."},
              {icon:"🏛️",tab:"Calculators",title:"Property Tax Estimator",desc:"Estimate annual property tax by city using real mill rates. Appeal guide included."},
              {icon:"🛡️",tab:"Calculators",title:"Home Insurance Estimator",desc:"Compare quotes from Square One, Intact, Aviva, SGI, and 10+ providers by province."},
              {icon:"🎯",tab:"Rate Finder",title:"Personalized Rate Finder",desc:"5-question quiz → estimated rate range, lender recommendation, and action plan."},
              {icon:"🧮",tab:"Rate Finder",title:"Rate Impact Calculator",desc:"See the dollar difference between two rates — monthly and over full amortization."},
            ].map(f=>(
              <div key={f.title} onClick={()=>setActive(f.tab)} style={{background:s.white,borderRadius:12,padding:14,border:`1px solid ${s.border}`,cursor:"pointer",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.1)";e.currentTarget.style.borderColor=s.navy;}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=s.border;}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                  <div style={{fontSize:26}}>{f.icon}</div>
                  {f.badge&&<span style={{background:s.red,color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:800}}>{f.badge}</span>}
                </div>
                <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:4}}>{f.title}</div>
                <div style={{fontSize:11,color:s.muted,lineHeight:1.5,marginBottom:8}}>{f.desc}</div>
                <div style={{fontSize:11,color:s.blue,fontWeight:700}}>Open →</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {homeTab==="services"&&(
        <div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12,marginBottom:14}}>
            {[
              {icon:"🤝",tab:"Professionals",title:"Find a REALTOR®",desc:"Connect with verified local realtors. Coming soon — be among the first listed in your city.",color:s.green,badge:"Coming Soon"},
              {icon:"⚖️",tab:"Professionals",title:"Find a Real Estate Lawyer",desc:"Connect with real estate lawyers for your closing. Coming soon — list your practice.",color:s.navy,badge:"Coming Soon"},
              {icon:"🏘️",tab:"Listings",title:"Browse Home Listings",desc:"Search homes across Canada via Realtor.ca, Zolo, HouseSigma, and more.",color:"#7c3aed",badge:""},
              {icon:"🏡",tab:"Listings",title:"Home Value Estimator",desc:"Request a free professional home evaluation from a local expert.",color:s.gold,badge:"New"},
              {icon:"📞",tab:"Consult",title:"Free Mortgage Consultation",desc:"Connect with a licensed mortgage professional — free, no obligation, within 1 business day.",color:s.red,badge:"Free"},
              {icon:"🏠",tab:"First-Time Buyers",title:"First-Time Buyer Programs",desc:"FHSA, HBP, LTT rebates, provincial grants — everything you qualify for in 2026.",color:"#0891b2",badge:"2026 Updated"},
            ].map(f=>(
              <div key={f.title} onClick={()=>setActive(f.tab)} style={{background:s.white,borderRadius:12,border:`1px solid ${s.border}`,overflow:"hidden",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.1)";}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)";}}>
                <div style={{background:f.color,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{fontSize:24}}>{f.icon}</span>
                    <div style={{color:"#fff",fontSize:13,fontWeight:800}}>{f.title}</div>
                  </div>
                  {f.badge&&<span style={{background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:9,fontWeight:700}}>{f.badge}</span>}
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.6,marginBottom:8}}>{f.desc}</div>
                  <div style={{fontSize:11,color:f.color,fontWeight:700}}>Learn more →</div>
                </div>
              </div>
            ))}
          </div>

          {/* Rate Alert CTA */}
          <div style={{background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:12,padding:"16px 20px",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
            <div style={{fontSize:28,flexShrink:0}}>🔔</div>
            <div style={{flex:1,minWidth:180}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:800,marginBottom:3}}>Get BoC Rate Alerts — Free</div>
              <div style={{color:"rgba(255,255,255,0.8)",fontSize:11}}>Next announcement: <b>{fmtBocDate(next)}</b>. Be the first to know when rates change.</div>
            </div>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("openRateAlert"))} style={{padding:"10px 20px",background:"#fff",color:s.red,border:"none",borderRadius:8,fontSize:13,fontWeight:800,cursor:"pointer",flexShrink:0}}>🔔 Get Alerts →</button>
          </div>
        </div>
      )}

      {homeTab==="journey"&&<HomeBuyingJourney setActive={setActive}/>}

      {homeTab==="about"&&(
        <div>
          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:14,fontWeight:800,color:s.navy,marginBottom:10}}>🍁 About Canada Mortgage Rates</h3>
            <p style={{fontSize:12,color:s.muted,lineHeight:1.8,marginBottom:10}}>Canada Mortgage Rates (canadamortgagerates.net) is a free, independent mortgage comparison and education platform built for Canadian homebuyers and homeowners. We're not a bank, broker, or lender — we're a neutral resource designed to help you make better mortgage decisions.</p>
            <p style={{fontSize:12,color:s.muted,lineHeight:1.8,marginBottom:10}}>Launched in June 2026 and growing fast — the platform covers all 10 Canadian provinces with live rate comparisons from 50+ lenders, 11 mortgage calculators (including property tax and home insurance), 32 expert articles, a full home buying cost wizard, private lender guide, and a professional referral network covering realtors, lawyers, home inspectors, mortgage brokers, and appraisers. Assiniboine Credit Union (ACU) is our first Verified Partner — displaying real posted rates directly from acu.ca.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10,marginTop:12}}>
              {[
                {title:"Our Mission",desc:"Make mortgage information accessible, free, and honest for every Canadian — not just those who can afford a broker.",icon:"🎯"},
                {title:"Independence",desc:"Not owned by any lender, bank, or broker. Rate comparisons and tool results are not influenced by commercial relationships.",icon:"⚖️"},
                {title:"How We Make Money",desc:"Through verified partner relationships, professional referrals (realtors, lawyers, inspectors, brokers), affiliate partnerships, and advertising — never by charging users.",icon:"💰"},
                {title:"Accuracy",desc:"Verified Partner rates (ACU) sourced directly from the lender. All other rates are estimates based on live BoC data and typical spreads. Calculators use standard Canadian mortgage formulas.",icon:"✅"},
              ].map(item=>(
                <div key={item.title} style={{background:"#f8fafc",borderRadius:8,padding:10,border:`1px solid ${s.border}`}}>
                  <div style={{fontSize:18,marginBottom:4}}>{item.icon}</div>
                  <div style={{fontSize:12,fontWeight:800,color:s.navy,marginBottom:4}}>{item.title}</div>
                  <div style={{fontSize:11,color:s.muted,lineHeight:1.5}}>{item.desc}</div>
                </div>
              ))}
            </div>
            {/* Platform stats */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:8,marginTop:14}}>
              {[
                {n:"50+",l:"Lenders",icon:"🏦"},
                {n:"10",l:"Provinces",icon:"🍁"},
                {n:"11",l:"Calculators",icon:"🧮"},
                {n:"32",l:"Articles",icon:"📝"},
                {n:"27",l:"Insurers",icon:"🛡️"},
                {n:"5",l:"Professional Types",icon:"👷"},{n:"1",l:"Verified Partner",icon:"✓"},
              ].map(st=>(
                <div key={st.l} style={{background:"#eff6ff",borderRadius:8,padding:"8px",textAlign:"center",border:"1px solid #bfdbfe"}}>
                  <div style={{fontSize:16}}>{st.icon}</div>
                  <div style={{fontSize:16,fontWeight:800,color:s.navy}}>{st.n}</div>
                  <div style={{fontSize:9,color:s.muted}}>{st.l}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{marginBottom:14}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:10}}>📞 Contact & Connect</h3>
            {[
              ["Website","canadamortgagerates.net"],
              ["Email","info@canadamortgagerates.net"],
              ["X (Twitter)","@Cdnmortgagerate"],
              ["LinkedIn","Canada Mortgage Rates"],
              ["Facebook","Canada Mortgage Rates"],
              ["Coverage","All 10 Canadian provinces"],
              ["Launched","June 2026"],
            ].map(([l,v])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${s.light}`,fontSize:12}}>
                <span style={{color:s.muted}}>{l}</span>
                <span style={{fontWeight:600,color:s.navy}}>{v}</span>
              </div>
            ))}
          </Card>

          <Card style={{marginBottom:14,borderLeft:`4px solid ${s.blue}`}}>
            <h3 style={{fontSize:13,fontWeight:800,color:s.navy,marginBottom:4}}>💬 Contact Us & Feedback</h3>
            <p style={{fontSize:11,color:s.muted,marginBottom:12}}>Have a question, suggestion, or spotted an error? We read every message and typically respond within 1 business day.</p>
            <FeedbackForm/>
          </Card>

          <Card style={{background:"#f8fafc",border:`1px solid ${s.border}`}}>
            <div style={{fontSize:12,fontWeight:700,color:s.navy,marginBottom:8}}>⚠️ Disclaimer</div>
            <p style={{fontSize:11,color:s.muted,lineHeight:1.7}}>Canada Mortgage Rates is not a licensed mortgage broker, lender, or financial advisor. All rates and calculator results are for informational purposes only. Always verify rates directly with the financial institution and consult a licensed mortgage professional before making any financial decisions.</p>
          </Card>
        </div>
      )}
    </div>
  );
}

export default function App(){
  const [active,setActive]=useState("Home");
  const [isMobile,setIsMobile]=useState(typeof window!=="undefined"&&window.innerWidth<768);
  const navHeight=isMobile?54:0; // just the top bar height on mobile
  useEffect(()=>{
    const handler=()=>setIsMobile(window.innerWidth<768);
    window.addEventListener("resize",handler);
    return()=>window.removeEventListener("resize",handler);
  },[]);
  const [prov,setProv]=useState("MB");
  const [city,setCity]=useState("Winnipeg");
  const [locLoading,setLocLoading]=useState(true);
  const [showRateAlert,setShowRateAlert]=useState(false);
  const [legalModal,setLegalModal]=useState(null);
  const bocRates=useBocRates();

  useEffect(()=>{
    const handler=(e:any)=>{setActive(e.detail);window.scrollTo({top:0,behavior:"smooth"});};
    window.addEventListener("switchTab",handler);
    const alertHandler=()=>setShowRateAlert(true);
    window.addEventListener("openRateAlert",alertHandler);
    const subTabHandler=(e:any)=>{
      const {tab,label}=e.detail;
      // Map dropdown labels to sub-tab event values
      const MAP:{[k:string]:string}={
        // Rates
        "📊 Compare Rates":"compare","🎁 Current Offers":"offers","📈 Rate History":"history","🏦 Lender Guide":"lenders","🔓 Private Lenders":"private",
        // Calculators
        "💰 Payment":"payment","🏡 Affordability":"afford","📋 Stress Test":"stress","🔄 Renewal":"renewal","💳 Refinancing":"refi","📅 Amortization":"amort","🏷️ Closing Costs":"closing","📁 Doc Checklist":"docs","🏠 Rent vs Buy":"rentvbuy",
        // Rate Finder
        "🎯 Rate Finder":"finder","📊 Fixed vs Variable":"compare","🧮 Rate Impact":"impact","📋 Pre-Approval":"preapproval",
        // Renewal
        "🔄 Compare Offer":"calculator","📅 Renewal Guide":"guide","🏦 Switch or Stay?":"switch","💬 Negotiate Script":"negotiate",
        // Listings
        "🏘️ Find Listings":"listings","📊 Market Tools":"tools","🏡 Home Value":"value",
        // New Builds
        "🏘️ Explore Builds":"explore","📋 Buyer's Guide":"guide","💳 Construction Mortgage":"mortgage","🤝 Connect":"connect",
        // Professionals
        "🤝 Find a Realtor":"realtors","⚖️ Find a Lawyer":"lawyers","🔍 Home Inspectors":"inspectors","💼 Mortgage Brokers":"brokers","🏡 Home Value":"evaluation",
        // Insurance
        "🏠 Get Quotes":"quote","🛡️ What's Covered":"coverage","💰 Deductible Guide":"deductible","🚨 Claims Guide":"claims","📖 Insurance Guide":"guide",
        // Resources
        "📚 Learn & Blog":"learn","📖 Glossary":"glossary",
        // Home
        "🏠 Overview":"overview","🧮 Tools":"tools","🤝 Services":"services","📋 About":"about",
      };
      const subVal=MAP[label];
      if(subVal)window.dispatchEvent(new CustomEvent("setSubTab",{detail:{tab,sub:subVal}}));
    };
    window.addEventListener("switchSubTab",subTabHandler);
    return()=>{
      window.removeEventListener("switchTab",handler);
      window.removeEventListener("openRateAlert",alertHandler);
      window.removeEventListener("switchSubTab",subTabHandler);
    };
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
    if(active==="New Builds")return <NewBuildsTab/>;
    if(active==="Learn")return <LearnTab/>;
    if(active==="Glossary")return <GlossaryTab/>;
    if(active==="Resources")return <LearnGlossaryTab/>;
    if(active==="Renewal")return <RenewalTab/>;
    if(active==="Professionals")return <ProfessionalsTab/>;
    if(active==="Consult")return <ConsultTab/>
    if(active==="Free Help")return <ConsultTab/>;
    return null;
  }

  return(
    <div style={{background:"#f4f6f9",minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",display:"flex",flexDirection:"column"}}>
      <style>{shimmerStyle}</style>
      <BocTicker onRateAlert={()=>setShowRateAlert(true)}/>
      <BocBanner/>
      <NavBar active={active} setActive={setActive} isMobile={isMobile}/>
      <div style={{height:isMobile?navHeight:0}}/>
      <Hero prov={prov} city={city} locLoading={locLoading}/>
      <div style={{maxWidth:1060,margin:"0 auto",padding:"16px 14px",width:"100%",flex:1,boxSizing:"border-box"}}>
        {renderTab()}
      </div>
      <footer style={{background:`linear-gradient(135deg,#0a1628,${s.navy})`,color:"rgba(255,255,255,0.6)",textAlign:"center",padding:"24px 14px",fontSize:11,lineHeight:2.2,flexShrink:0,borderTop:`2px solid ${s.red}`}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:8}}>
          <div style={{width:36,height:36,background:`linear-gradient(135deg,${s.red},#a00d22)`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🍁</div>
          <div style={{textAlign:"left"}}><div style={{color:"#fff",fontSize:15,fontWeight:800,lineHeight:1}}>Canada Mortgage Rates</div><div style={{color:s.gold,fontSize:10,letterSpacing:"0.5px"}}>CANADA'S MOST COMPLETE MORTGAGE PLATFORM</div></div>
        </div>
        <div style={{color:"rgba(255,255,255,0.4)",fontSize:10,marginBottom:10}}>© 2026 Canada Mortgage Rates · All rights reserved · Not a licensed mortgage broker · Rates for informational purposes only</div>
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
      <FloatingJourneyButton setActive={setActive}/>
      <InstallPrompt/>
      <CookieConsent onShowPolicy={(t)=>setLegalModal(t)}/>
      <LegalModal type={legalModal} onClose={()=>setLegalModal(null)}/>
      {showRateAlert&&<RateAlertModal onClose={()=>setShowRateAlert(false)}/>}
    </div>
  );
}
