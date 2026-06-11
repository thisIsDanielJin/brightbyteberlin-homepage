export const SERVICES = [
  { tag: "01", title: "Landing pages", slug: "landing-pages", desc: "High-performing single pages built to convert. Conversion-focused copy, Lighthouse 95+, ships in 1–2 weeks.", meta: "1–2 weeks", img: "lp" as const },
  { tag: "02", title: "Web apps & MVPs", slug: "web-apps", desc: "Full-stack Next.js apps with auth, database, admin panels. Built to grow with your business.", meta: "3–8 weeks", img: "app" as const },
  { tag: "03", title: "AI integrations", slug: "ai-integrations", desc: "Chatbots, semantic search, automated workflows wired into your product. Production-grade, not demos.", meta: "Scope-based", img: "ai" as const },
  { tag: "04", title: "Ongoing support", slug: "ongoing-support", desc: "Priority fixes, monitoring, SEO health, and new features. You're never on your own.", meta: "Monthly retainer", img: "sup" as const },
];

export const PROCESS = [
  { n: "01", t: "Kickoff", d: "30-min call to understand your goals. Fixed-price proposal back to you within 48 hours." },
  { n: "02", t: "Design", d: "Wireframes first, then visual design in Figma. Tight feedback loop before any code." },
  { n: "03", t: "Build", d: "Weekly sprints, weekly demos. You see everything as it ships. No black boxes." },
  { n: "04", t: "Launch", d: "Deploy, test, hand off. I stay around for support, fixes, and iteration." },
];

export const WORK = [
  { client: "Studio Blumenspiess", kind: "Multi-page · portfolio", metric: "+200% inquiries", tag: "blumenspiess" as const, stars: 5, quote: '"The site finally reflects the quality of our work. Clients now find us through Google."', slug: "studio-blumenspiess" },
  { client: "Learnstep", kind: "Multi-page · booking system", metric: "92% bookings online", tag: "learnstep" as const, stars: 5, quote: '"I can focus on my clients instead of admin. The booking system runs itself."', slug: "learnstep" },
  { client: "Lumo Baumpflege", kind: "Landing page · lead generation", metric: "+47% more leads", tag: "lumo" as const, stars: 5, quote: '"Seit der neuen Seite rufen doppelt so viele Kunden an."', slug: "lumo-baumpflege" },
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
    slug: "landing-pages",
    img: "lp" as const,
    value: "Convert visitors into customers with a single, fast, focused page.",
    features: ["Custom responsive design", "Conversion-optimized layout & copy", "Lighthouse 95+ guaranteed", "Basic SEO + analytics setup", "2 rounds of feedback included"],
    timeline: "1–2 weeks",
    ideal: "Launches, campaigns, and MVPs.",
    deliverables: [
      "Fully responsive landing page (mobile, tablet, desktop)",
      "Conversion-focused copywriting and layout",
      "Contact form or booking integration",
      "Google Analytics + event tracking setup",
      "Performance optimization (Lighthouse 95+ guaranteed)",
      "Basic SEO: meta tags, Open Graph, structured data",
      "Hosting deployment (Vercel/Netlify) on your domain",
      "Source code handed to your GitHub",
    ],
    outcomes: [
      "Pages that convert 2–3x better than template builders",
      "Sub-2s load times that keep visitors engaged",
      "Professional presence that builds trust from the first click",
      "A site you fully own — no vendor lock-in, no monthly platform fees",
    ],
    idealFor: "You're launching a product, running a campaign, or need a professional web presence fast. You don't want to fiddle with Wix or Squarespace. You want something custom that loads instantly and actually converts.",
    pricing: "Fixed price",
  },
  {
    title: "Web apps & MVPs",
    slug: "web-apps",
    img: "app" as const,
    value: "Full-stack applications that grow with your business.",
    features: ["Next.js + database + auth", "Admin panel or CMS", "Forms, integrations, payments", "Performance baseline + monitoring", "30 days post-launch support"],
    timeline: "3–8 weeks",
    ideal: "SaaS products, portals, and internal tools.",
    deliverables: [
      "Full-stack Next.js application with TypeScript",
      "User authentication and role-based access",
      "Database design and setup (PostgreSQL/Supabase)",
      "Admin dashboard or CMS for content management",
      "Payment integration (Stripe) if needed",
      "API integrations with your existing tools",
      "Automated testing and CI/CD pipeline",
      "30 days of post-launch support and bug fixes",
      "Full documentation and deployment guide",
    ],
    outcomes: [
      "Launch your product in weeks instead of months",
      "A codebase built to scale — add features without rewrites",
      "Production-grade infrastructure from day one",
      "One person to talk to, not a chain of project managers",
    ],
    idealFor: "You have a product idea or an internal workflow that needs a proper application. Maybe you've outgrown spreadsheets, or your current tool is too slow. You want something built right the first time, with a clear path to grow.",
    pricing: "Fixed price",
  },
  {
    title: "AI integrations",
    slug: "ai-integrations",
    img: "ai" as const,
    value: "Production-grade AI wired into your product. Not demos.",
    features: ["Chatbots + semantic search", "Automated workflows", "RAG pipelines + embeddings", "Production monitoring + fallbacks", "Integration with existing stack"],
    timeline: "Scope-based",
    ideal: "Teams ready to ship AI features.",
    deliverables: [
      "Custom AI feature integrated into your existing product",
      "RAG pipeline with your own data (documents, knowledge base)",
      "Chatbot or semantic search interface",
      "Automated workflow triggers and actions",
      "Production monitoring, rate limiting, and fallback handling",
      "Cost optimization (model routing, caching, batching)",
      "Testing suite with evaluation metrics",
      "Integration documentation and handoff",
    ],
    outcomes: [
      "Automate repetitive work your team currently does manually",
      "Give customers instant, accurate answers from your knowledge base",
      "Ship AI features that actually work — not a demo that breaks at scale",
      "Measurable ROI: reduced support volume, faster onboarding, higher engagement",
    ],
    idealFor: "You have a product and customers, and you're ready to add AI that solves a real problem — not a chatbot bolted on for show. You want someone who understands both the ML and the engineering to ship something production-ready.",
    pricing: "Scope-based",
  },
  {
    title: "Ongoing support",
    slug: "ongoing-support",
    img: "sup" as const,
    value: "Your site stays fast, secure, and up-to-date. You focus on running your business.",
    features: ["Priority bug fixes (< 24h response)", "Monthly performance reports", "Security patches and dependency updates", "Small feature requests included", "Uptime monitoring"],
    timeline: "Monthly retainer",
    ideal: "Businesses that need reliability without a full-time dev.",
    deliverables: [
      "Priority response on issues (< 24h, often same-day)",
      "Monthly performance and uptime report",
      "Security patches and dependency updates",
      "Up to 4 hours of feature work or content changes per month",
      "Uptime monitoring with instant alerts",
      "Monthly database backups verification",
      "Lighthouse score maintenance (no regressions)",
      "Quarterly tech-debt review and recommendations",
    ],
    outcomes: [
      "Zero-downtime maintenance — your customers never notice",
      "Always-current stack with no security vulnerabilities",
      "Predictable monthly cost instead of surprise emergency invoices",
      "A developer who already knows your codebase when something breaks",
    ],
    idealFor: "Your site is live and making money. You don't have a developer on staff, but you need someone who can fix things fast, keep everything updated, and handle small requests without a long onboarding every time.",
    pricing: "Monthly retainer",
  },
];

/* ───── Brutalist redesign additions ───── */

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const HERO = {
  headline: "Websites that\nget you found.",
  sub: "Stand out online and grow your business. BrightByte Berlin builds high-performance websites that help small businesses get found, build trust, and convert visitors into customers.",
  primary: { label: "Start a project", href: "#contact" },
  secondary: { label: "View work", href: "#work" },
  pillars: [
    { k: "95+", v: "Lighthouse, every build" },
    { k: "1–2 wk", v: "Landing page turnaround" },
    { k: "100%", v: "Code ownership, your GitHub" },
    { k: "24h", v: "Reply, in writing" },
  ],
};

export const MANIFESTO = [
  {
    n: "01",
    t: "No templates",
    d: "Hand-coded React + Next.js. Every line written for your business — not lifted from a builder.",
  },
  {
    n: "02",
    t: "Shipped fast",
    d: "Landing pages in 1–2 weeks. Multi-page in 3–4. Web apps 4–8. Fixed timeline, weekly demos.",
  },
  {
    n: "03",
    t: "You own it",
    d: "Code in your GitHub. Domain in your name. Hosting on your account. Take it anywhere, anytime.",
  },
  {
    n: "04",
    t: "No agency layers",
    d: "One engineer, one Slack, one bill. No project managers, no account leads, no ticket queues.",
  },
];

export const SCOPE = [
  {
    id: "landing",
    title: "Landing page",
    priceFrom: "€690",
    tagline: "One focused page that converts",
    timeline: "1–2 weeks",
    includes: [
      "Custom responsive design",
      "Conversion-optimized layout",
      "SEO + analytics setup",
      "Lighthouse 95+ guaranteed",
      "2 feedback rounds included",
    ],
    ideal: "Launches, campaigns, MVPs",
  },
  {
    id: "multipage",
    title: "Multi-page site",
    priceFrom: "€2,500",
    tagline: "Grow without platform limits",
    timeline: "3–4 weeks",
    includes: [
      "5–10 pages, fully custom",
      "CMS for self-managed content",
      "Forms + integrations",
      "Performance baseline + monitoring",
      "30 days post-launch support",
    ],
    ideal: "Established businesses, portfolios, service companies",
    highlight: true,
  },
  {
    id: "webapp",
    title: "Web app / MVP",
    priceFrom: "Let's talk",
    tagline: "Full-stack, built to scale",
    timeline: "4–8 weeks",
    includes: [
      "Next.js + database + auth",
      "Admin panel or dashboard",
      "Payments, automations, APIs",
      "Weekly progress demos",
      "Ongoing support available",
    ],
    ideal: "SaaS products, portals, internal tools",
  },
];

export const ABOUT = {
  name: "Daniel Jin Wodke",
  role: "Founder · Engineer",
  location: "Berlin, Germany",
  bio: [
    "I'm a full-stack engineer at SAP Berlin with 5+ years building production web software — enterprise consulting, government apps (Corona Warn App, Berlin citizen services), and research projects with AI and VR.",
    "BrightByte Berlin is where I build for small businesses that want a real website, not a templated lookalike. Code-only, no platform lock-in, and the same engineering standard I apply to everything else.",
  ],
  signals: [
    "5+ yrs full-stack production",
    "SAP Berlin · Senior FE",
    "Code-only, no Webflow",
    "Reply in 24h",
  ],
};

export const FOOTER_LINKS = {
  product: [
    { label: "Landing Pages", href: "/services/landing-pages" },
    { label: "Web Apps", href: "/services/web-apps" },
    { label: "AI Integration", href: "/services/ai-integrations" },
    { label: "Ongoing Support", href: "/services/ongoing-support" },
    { label: "Pricing", href: "/#pricing" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Process", href: "/#process" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
  connect: [
    { label: "LinkedIn", href: "https://linkedin.com/in/danieljinwodke" },
    { label: "GitHub", href: "https://github.com/danieljinwodke" },
    { label: "Email", href: "mailto:hello@brightbyte-berlin.com" },
  ],
  legal: [
    { label: "Impressum", href: "/imprint" },
    { label: "Privacy", href: "/privacy" },
  ],
};
