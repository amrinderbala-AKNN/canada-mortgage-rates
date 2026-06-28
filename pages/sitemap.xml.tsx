import { GetServerSideProps } from "next";
import { PROVINCES } from "../lib/mortgageData";

function generateSitemap() {
  const baseUrl = "https://www.canadamortgagerates.net";
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/mortgage-rates", priority: "0.9", changefreq: "weekly" },
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
