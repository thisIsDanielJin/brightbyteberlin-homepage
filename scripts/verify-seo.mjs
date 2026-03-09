import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "http://localhost:3099";
const screenshotsDir = path.join(__dirname, "..", "screenshots");

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1200, height: 800 } });

// --- 1. Check apple-touch-icon is served ---
console.log("\n=== Apple Touch Icon ===");
const iconRes = await context.request.get(`${BASE}/apple-touch-icon.png`);
console.log(`  Status: ${iconRes.status()}`);
console.log(`  Content-Type: ${iconRes.headers()["content-type"]}`);
const iconBody = await iconRes.body();
console.log(`  Size: ${iconBody.length} bytes`);
console.log(`  ${iconRes.status() === 200 ? "✓ PASS" : "✗ FAIL"}`);

// --- 2. Check og-image is served ---
console.log("\n=== OG Image ===");
const ogRes = await context.request.get(`${BASE}/og-image.png`);
console.log(`  Status: ${ogRes.status()}`);
console.log(`  Content-Type: ${ogRes.headers()["content-type"]}`);
const ogBody = await ogRes.body();
console.log(`  Size: ${ogBody.length} bytes`);
console.log(`  ${ogRes.status() === 200 ? "✓ PASS" : "✗ FAIL"}`);

// --- 3. Check homepage meta tags reference the images ---
console.log("\n=== Homepage Meta Tags ===");
const page = await context.newPage();
await page.goto(BASE, { waitUntil: "domcontentloaded" });

const ogImage = await page.getAttribute('meta[property="og:image"]', "content");
console.log(`  og:image: ${ogImage}`);
console.log(`  ${ogImage?.includes("og-image.png") ? "✓ PASS" : "✗ FAIL"}`);

const twitterImage = await page.getAttribute('meta[name="twitter:image"]', "content");
console.log(`  twitter:image: ${twitterImage}`);
console.log(`  ${twitterImage?.includes("og-image.png") ? "✓ PASS" : "✗ FAIL"}`);

const appleIcon = await page.getAttribute('link[rel="apple-touch-icon"]', "href");
console.log(`  apple-touch-icon: ${appleIcon}`);
console.log(`  ${appleIcon?.includes("apple-touch-icon.png") ? "✓ PASS" : "✗ FAIL"}`);

const canonical = await page.getAttribute('link[rel="canonical"]', "href");
console.log(`  canonical: ${canonical}`);
console.log(`  ${canonical ? "✓ PASS" : "✗ FAIL"}`);

// --- 4. Check JSON-LD ---
console.log("\n=== JSON-LD Structured Data ===");
const jsonLdScripts = await page.$$eval('script[type="application/ld+json"]', (els) =>
  els.map((el) => JSON.parse(el.textContent || "{}"))
);
console.log(`  Found ${jsonLdScripts.length} JSON-LD blocks`);
for (const ld of jsonLdScripts) {
  console.log(`  - @type: ${ld["@type"]}`);
}
console.log(`  ${jsonLdScripts.length === 3 ? "✓ PASS" : "✗ FAIL"}`);

// --- 5. Screenshot the homepage for visual check ---
await page.screenshot({ path: path.join(screenshotsDir, "seo-verify-homepage.png"), fullPage: false });
console.log("\n  Screenshot saved: screenshots/seo-verify-homepage.png");

// --- 6. Check sitemap.xml ---
console.log("\n=== Sitemap ===");
const sitemapRes = await context.request.get(`${BASE}/sitemap.xml`);
const sitemapText = await sitemapRes.text();
const sitemapUrls = sitemapText.match(/<loc>[^<]+<\/loc>/g) || [];
console.log(`  Status: ${sitemapRes.status()}`);
console.log(`  URLs found: ${sitemapUrls.length}`);
for (const url of sitemapUrls) {
  console.log(`    ${url}`);
}
console.log(`  ${sitemapUrls.length === 3 ? "✓ PASS" : "✗ FAIL"}`);

// --- 7. Check robots.txt ---
console.log("\n=== Robots.txt ===");
const robotsRes = await context.request.get(`${BASE}/robots.txt`);
const robotsText = await robotsRes.text();
console.log(`  Status: ${robotsRes.status()}`);
console.log(`  Content:\n${robotsText.split("\n").map((l) => `    ${l}`).join("\n")}`);
console.log(`  ${robotsText.includes("sitemap") ? "✓ PASS" : "✗ FAIL"}`);

// --- 8. Check security headers ---
console.log("\n=== Security Headers ===");
const headersRes = await context.request.get(BASE);
const headers = headersRes.headers();
const expected = [
  "x-content-type-options",
  "x-frame-options",
  "x-xss-protection",
  "referrer-policy",
  "strict-transport-security",
];
for (const h of expected) {
  const val = headers[h];
  console.log(`  ${h}: ${val || "MISSING"} ${val ? "✓" : "✗"}`);
}

// --- 9. Check sub-page canonical tags ---
console.log("\n=== Sub-page Canonical Tags ===");
for (const subpath of ["/imprint", "/privacy"]) {
  await page.goto(`${BASE}${subpath}`, { waitUntil: "domcontentloaded" });
  const can = await page.getAttribute('link[rel="canonical"]', "href");
  console.log(`  ${subpath} canonical: ${can} ${can ? "✓" : "✗"}`);
}

console.log("\n=== All checks complete ===\n");

await browser.close();
