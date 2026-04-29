# Redesign Context — Infrastructure to Preserve

This document captures everything from the existing website that must survive the frontend redesign.
The NEW design source is: `newDesign/hifi-v2-app.jsx` (viewable at http://localhost:8888/BrightByte%20HiFi%20v2.html)

---

## 1. Email / Contact Form

**Service:** Resend (`resend@6.9.3`)
**API Route:** `app/api/contact/route.ts`

Key behavior:
- From: `noreply@brightbyte-berlin.com`
- To: `process.env.CONTACT_EMAIL` (default: `hello@brightbyte-berlin.com`)
- Reply-to: user's email
- Rate limit: 3 requests per IP per 15 minutes (in-memory Map)
- Honeypot: hidden "website" field (if filled → spam)
- Validation: email regex, name min 2 chars, message min 10 chars

**Env vars:**
- `RESEND_API_KEY`
- `CONTACT_EMAIL`

---

## 2. Sanity CMS (Blog)

**Project ID:** `ddrca30s`
**Dataset:** `production`
**API Version:** `2026-03-09`
**Studio route:** `/studio`

**Schema:** posts, authors, categories, blockContent
**Fetch functions:** getAllPosts, getPostBySlug, getAllPostSlugs, getAllCategories, getRelatedPosts
**Cache tag:** `"posts"` (ISR revalidation via `/api/revalidate`)

**Env vars:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_REVALIDATE_SECRET`

---

## 3. Legal Pages (must keep exact content)

**Imprint** (`/imprint`):
- Owner: Daniel Jin Wodke
- Company: BrightByte Berlin
- Address: Karl-Marx-Allee 118, 10243 Berlin
- Email: hello@brightbyte-berlin.com
- Bilingual (DE/EN)

**Privacy** (`/privacy`):
- Controller: Daniel Jin Wodke
- Hosting: Vercel Inc.
- Analytics: Vercel Web Analytics (no cookies, no PII)
- Supervisory authority: Berliner Beauftragte für Datenschutz
- Bilingual (DE/EN)

---

## 4. SEO / Metadata

**Root metadata (layout.tsx):**
- title: "BrightByte Berlin | Websites That Get You Found"
- metadataBase: https://brightbyte-berlin.com
- keywords: web development, website design, small business websites, Berlin web developer, freelance developer, React, Next.js
- authors: Daniel Jin Wodke
- OG image: /og-image.png (1200x630)

**Sitemap** (`app/sitemap.ts`): dynamic, includes homepage, blog, projects, legal pages
**Robots** (`app/robots.ts`): allow all except `/studio`
**RSS** (`app/blog/feed.xml/route.ts`): blog posts

---

## 5. Routes to Preserve

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post |
| `/blog/feed.xml` | RSS feed |
| `/projects/[id]` | Project detail |
| `/imprint` | Legal imprint |
| `/privacy` | Privacy policy |
| `/studio/[[...tool]]` | Sanity CMS |
| `/api/contact` | Contact form POST |
| `/api/revalidate` | ISR webhook |

---

## 6. Dependencies to Keep

**Core:**
- next: 16.1.6
- react/react-dom: 19.2.3
- typescript

**CMS:**
- next-sanity, @sanity/image-url, sanity (dev)

**Email:**
- resend

**Animation:**
- framer-motion

**Analytics:**
- @vercel/speed-insights

**Utilities:**
- tailwind-merge, clsx

**Dev:**
- tailwindcss v4, sass, @playwright/test

---

## 7. Security Headers (next.config.ts)

Must preserve:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: origin-when-cross-origin
- Strict-Transport-Security: max-age=31536000; includeSubDomains

Image domains: cdn.sanity.io
Package optimization: react-icons, framer-motion, three, @react-three/drei

---

## 8. What Changes in the Redesign

**Fonts:** Outfit + Space Grotesk → Geist + Geist Mono + Fraunces (serif)
**Colors:** Dark theme (amber #FBBF24) → Light theme (bone #F5F1E8, plum #6B3977)
**All UI components** — completely new design from mock
**Navigation structure** — new links (Work, Services, Process, Pricing, About)
**Data files** — services, projects, FAQ, pricing, navigation all get new content matching mock

**What does NOT change:**
- API routes (contact, revalidate)
- Sanity CMS setup (lib/sanity/*, schema, studio)
- Legal pages content
- SEO metadata structure
- Environment variables
- next.config.ts (security headers, image domains)
- Blog system (pages, components, types)
- Validation logic
- Rate limiting
- Hooks (useMediaQuery, usePrefersReducedMotion)

**New dependency:**
- `echarts` — used for donut and bar charts in the hero browser mockup (DO NOT replace with SVG/CSS — use the real library as in the mock)
