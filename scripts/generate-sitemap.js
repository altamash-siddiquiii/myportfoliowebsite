// Generates public/sitemap.xml and public/robots.txt from the same
// projects.js data and .env used by the app, so they never drift out
// of sync with real routes or the deployed domain.
// Run manually with `node --env-file-if-exists=.env scripts/generate-sitemap.js`,
// or via `npm run sitemap` (already wired into `npm run build`).

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { projects } from "../src/data/projects.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = (process.env.VITE_SITE_URL || "https://your-domain.com").replace(/\/$/, "");

const staticRoutes = [
    { path: "/", priority: "1.0", changefreq: "monthly" },
    { path: "/resume", priority: "0.6", changefreq: "monthly" },
];

const projectRoutes = projects.map((p) => ({
    path: `/projects/${p.slug}`,
    priority: "0.8",
    changefreq: "yearly",
}));

const allRoutes = [...staticRoutes, ...projectRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
        .map(
            (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
        )
        .join("\n")}
</urlset>
`;

const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(sitemapPath, xml, "utf-8");
console.log(`✓ sitemap.xml generated with ${allRoutes.length} routes`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const robotsPath = path.join(__dirname, "../public/robots.txt");
fs.writeFileSync(robotsPath, robotsTxt, "utf-8");
console.log(`✓ robots.txt generated pointing at ${SITE_URL}/sitemap.xml`);

if (SITE_URL === "https://your-domain.com") {
    console.warn(
        "⚠ VITE_SITE_URL is not set in .env — sitemap/robots.txt use a placeholder domain. Set it after deploying."
    );
}