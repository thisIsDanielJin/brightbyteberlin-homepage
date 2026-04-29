export const SERVICES = [
  { tag: "01", title: "Landing pages", desc: "High-performing single pages built to convert. Conversion-focused copy, Lighthouse 95+, ships in 1–2 weeks.", meta: "1–2 weeks", img: "lp" as const },
  { tag: "02", title: "Web apps & MVPs", desc: "Full-stack Next.js apps with auth, database, admin panels. Built to grow with your business.", meta: "3–8 weeks", img: "app" as const },
  { tag: "03", title: "AI integrations", desc: "Chatbots, semantic search, automated workflows wired into your product. Production-grade, not demos.", meta: "Scope-based", img: "ai" as const },
  { tag: "04", title: "Ongoing support", desc: "Priority fixes, monitoring, SEO health, and new features. You're never on your own.", meta: "Monthly retainer", img: "sup" as const },
];

export const PROCESS = [
  { n: "01", t: "Kickoff", d: "30-min call to understand your goals. Fixed-price proposal back to you within 48 hours." },
  { n: "02", t: "Design", d: "Wireframes first, then visual design in Figma. Tight feedback loop before any code." },
  { n: "03", t: "Build", d: "Weekly sprints, weekly demos. You see everything as it ships — no black boxes." },
  { n: "04", t: "Launch", d: "Deploy, test, hand off — and I stay around for support, fixes, and iteration." },
];

export const WORK = [
  { client: "Lindner Bäckerei", kind: "Local business · landing + booking", metric: "+34% bookings", tag: "lindner" as const, stars: 5, quote: '"Daniel delivered in 10 days. Our bookings went up immediately."' },
  { client: "Atlas Studio", kind: "Web app · client portal", metric: "10× faster than legacy", tag: "atlas" as const, stars: 5, quote: '"Finally a developer who speaks plain German and ships on time."' },
  { client: "Verdant Yoga", kind: "Multi-page · class scheduling", metric: "Lighthouse 100", tag: "verdant" as const, stars: 5, quote: '"The site loads instantly. Students notice. We notice."' },
];

export const PRICING = [
  {
    name: "Starter", price: "€990", period: "one-time", sub: "Single landing page",
    features: ["1 page · fully custom", "Mobile + desktop", "Lighthouse 95+ guaranteed", "Basic analytics + SEO", "2 rounds of feedback"],
    cta: "Start small", highlight: false,
    value: { label: "Save ~€2,400 vs. agency", sub: "Avg. agency charges €3,400+ for the same" },
  },
  {
    name: "Growth", price: "€2,500", period: "starting at", sub: "Multi-page or simple app",
    features: ["5–10 pages · custom design", "CMS or admin panel", "Forms, integrations, auth", "Performance + SEO baseline", "30 days post-launch support"],
    cta: "Most chosen", highlight: true,
    value: { label: "+28% avg. leads in 90 days", sub: "Across 12 client sites tracked" },
  },
  {
    name: "Custom", price: "Let's talk", period: "scope-based", sub: "Web apps, MVPs, complex builds",
    features: ["Full-stack Next.js builds", "Database, auth, payments", "AI integrations, automations", "Weekly progress demos", "Ongoing partnership available"],
    cta: "Scope it", highlight: false,
    value: { label: "Replaces a €60K/yr dev hire", sub: "Faster to market, no overhead" },
  },
];

export const FAQS = [
  { q: "How long does a typical project take?", a: "Landing pages ship in 1–2 weeks. Multi-page sites in 3–4. Web apps run 4–8 weeks depending on scope. You'll get a fixed timeline in the proposal — and weekly progress, so nothing surprises you.", main: true },
  { q: "Do you work with non-tech founders?", a: "Yes — most of my clients are non-technical. I translate the technical bits into plain language and you'll always know what we're building and why.", main: false },
  { q: 'What does "ongoing support" actually mean?', a: "A monthly retainer covering priority fixes, content updates, performance monitoring, security patches, and small new features. Faster than agency turnaround, predictable cost.", main: false },
  { q: "Will I own the code and content?", a: "Yes, fully. Code goes into your GitHub. Domain and hosting in your name. You're free to take it anywhere if we ever part ways.", main: false },
  { q: "Where are you based, and do you work remotely?", a: "I'm based in Berlin (CET). I work with clients across Germany and Europe — happy on Zoom, happy in person if you're in town.", main: false },
  { q: "Can you redesign my existing site?", a: "Absolutely. I audit what you have, keep what works, and rebuild the rest on a modern stack. Most redesigns ship in 3–4 weeks with zero downtime during the switch.", main: false },
  { q: "Do you offer SEO optimization?", a: "Every site I build ships with technical SEO baked in — fast load times, proper meta tags, structured data, mobile-first design. For ongoing SEO (content strategy, link building), I partner with a specialist and coordinate the work.", main: false },
];
