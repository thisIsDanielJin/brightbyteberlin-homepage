export const SERVICES = [
  { tag: "01", title: "Landing pages", desc: "High-performing single pages built to convert. Conversion-focused copy, Lighthouse 95+, ships in 1–2 weeks.", meta: "1–2 weeks", img: "lp" as const },
  { tag: "02", title: "Web apps & MVPs", desc: "Full-stack Next.js apps with auth, database, admin panels. Built to grow with your business.", meta: "3–8 weeks", img: "app" as const },
  { tag: "03", title: "AI integrations", desc: "Chatbots, semantic search, automated workflows wired into your product. Production-grade, not demos.", meta: "Scope-based", img: "ai" as const },
  { tag: "04", title: "Ongoing support", desc: "Priority fixes, monitoring, SEO health, and new features. You're never on your own.", meta: "Monthly retainer", img: "sup" as const },
];

export const PROCESS = [
  { n: "01", t: "Kickoff", d: "30-min call to understand your goals. Fixed-price proposal back to you within 48 hours." },
  { n: "02", t: "Design", d: "Wireframes first, then visual design in Figma. Tight feedback loop before any code." },
  { n: "03", t: "Build", d: "Weekly sprints, weekly demos. You see everything as it ships. No black boxes." },
  { n: "04", t: "Launch", d: "Deploy, test, hand off. I stay around for support, fixes, and iteration." },
];

export const WORK = [
  { client: "Lindner Bäckerei", kind: "Local business · landing + booking", metric: "+34% bookings", tag: "lindner" as const, stars: 5, quote: '"Daniel delivered in 10 days. Our bookings went up immediately."' },
  { client: "Atlas Studio", kind: "Web app · client portal", metric: "10× faster than legacy", tag: "atlas" as const, stars: 5, quote: '"Finally a developer who speaks plain German and ships on time."' },
  { client: "Verdant Yoga", kind: "Multi-page · class scheduling", metric: "Lighthouse 100", tag: "verdant" as const, stars: 5, quote: '"The site loads instantly. Students notice. We notice."' },
];

export const FAQS = [
  { q: "How long does a typical project take?", a: "Landing pages ship in 1–2 weeks. Multi-page sites in 3–4. Web apps run 4–8 weeks depending on scope. You'll get a fixed timeline in the proposal, plus weekly progress so nothing surprises you.", main: true },
  { q: "Do you work with non-tech founders?", a: "Yes, most of my clients are non-technical. I translate the technical bits into plain language and you'll always know what we're building and why.", main: false },
  { q: 'What does "ongoing support" actually mean?', a: "A monthly retainer covering priority fixes, content updates, performance monitoring, security patches, and small new features. Faster than agency turnaround, predictable cost.", main: false },
  { q: "Will I own the code and content?", a: "Yes, fully. Code goes into your GitHub. Domain and hosting in your name. You're free to take it anywhere if we ever part ways.", main: false },
  { q: "Where are you based, and do you work remotely?", a: "I'm based in Berlin (CET). I work with clients across Germany and Europe. Happy on Zoom, happy in person if you're in town.", main: false },
  { q: "Can you redesign my existing site?", a: "Absolutely. I audit what you have, keep what works, and rebuild the rest on a modern stack. Most redesigns ship in 3–4 weeks with zero downtime during the switch.", main: false },
  { q: "Do you offer SEO optimization?", a: "Every site I build ships with technical SEO baked in: fast load times, proper meta tags, structured data, mobile-first design. For ongoing SEO (content strategy, link building), I partner with a specialist and coordinate the work.", main: false },
];

export const SERVICES_DETAIL = [
  {
    title: "Landing pages",
    img: "lp" as const,
    value: "Convert visitors into customers with a single, fast, focused page.",
    features: ["Custom responsive design", "Conversion-optimized layout & copy", "Lighthouse 95+ guaranteed", "Basic SEO + analytics setup", "2 rounds of feedback included"],
    timeline: "1–2 weeks",
    ideal: "Launches, campaigns, and MVPs.",
  },
  {
    title: "Web apps & MVPs",
    img: "app" as const,
    value: "Full-stack applications that grow with your business.",
    features: ["Next.js + database + auth", "Admin panel or CMS", "Forms, integrations, payments", "Performance baseline + monitoring", "30 days post-launch support"],
    timeline: "3–8 weeks",
    ideal: "SaaS products, portals, and internal tools.",
  },
  {
    title: "AI integrations",
    img: "ai" as const,
    value: "Production-grade AI wired into your product. Not demos.",
    features: ["Chatbots + semantic search", "Automated workflows", "RAG pipelines + embeddings", "Production monitoring + fallbacks", "Integration with existing stack"],
    timeline: "Scope-based",
    ideal: "Teams ready to ship AI features.",
  },
];
