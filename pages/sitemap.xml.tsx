import { GetServerSideProps } from "next";
import { PROVINCES } from "../lib/mortgageData";

function generateSitemap() {
  const baseUrl = "https://www.canadamortgagerates.net";
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/fr", priority: "0.9", changefreq: "weekly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/faq", priority: "0.8", changefreq: "monthly" },
    { url: "/mortgage-rates", priority: "0.9", changefreq: "weekly" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/best-mortgage-rates-canada-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/how-to-pass-mortgage-stress-test-canada", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/fhsa-rrsp-home-buyers-plan-guide", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/fixed-vs-variable-mortgage-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/mortgage-renewal-guide-canada", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/cmhc-insurance-explained", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/first-time-home-buyer-programs-canada", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/canada-housing-market-outlook-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/mortgage-broker-vs-bank-canada", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/rent-vs-buy-canada-2026", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/mortgage-rates-ontario-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/mortgage-rates-alberta-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/mortgage-rates-bc-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/mortgage-rates-quebec-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/how-much-mortgage-can-i-afford-canada", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/minimum-down-payment-canada-2026", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/mortgage-pre-approval-canada", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/home-equity-line-of-credit-canada", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/self-employed-mortgage-canada", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/mortgage-penalties-canada", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/mortgage-rates-winnipeg-2026", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/mortgage-rates-toronto-2026", priority: "0.9", changefreq: "weekly" },
    { url: "/blog/mortgage-rates-calgary-2026", priority: "0.9", changefreq: "weekly" },
    { url: "/blog/bank-of-canada-rate-history-canada", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/land-transfer-tax-canada", priority: "0.8", changefreq: "monthly" },
    { url: "/blog/closed-vs-open-mortgage-canada", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/mortgage-rates-vancouver-2026", priority: "0.9", changefreq: "weekly" },
    { url: "/blog/amortization-period-canada", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/second-mortgage-canada", priority: "0.7", changefreq: "monthly" },
  ];

  const provincePages = Object.values(PROVINCES).map(prov => ({
    url: `/mortgage-rates/${prov.slug}`,
    priority: "0.8",
    changefreq: "weekly",
  }));

  const cityPages = Object.values(PROVINCES).flatMap(prov =>
    prov.cities.map((city: any) => ({
      url: `/mortgage-rates/${prov.slug}/${city.slug}`,
      priority: "0.7",
      changefreq: "weekly",
    }))
  );

  const allPages = [...staticPages, ...provincePages, ...cityPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();
  return { props: {} };
};

export default function Sitemap() { return null; }
