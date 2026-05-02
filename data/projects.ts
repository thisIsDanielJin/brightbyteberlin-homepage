import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "studio-blumenspiess",
    title: "Studio Blumenspiess",
    subtitle: "Architecture portfolio with project CMS",
    client: "Studio Blumenspiess",
    year: "2025",
    type: "Multi-page · portfolio",
    tech: ["Next.js", "Framer Motion", "Sanity CMS"],
    accentColor: "#4A6741",
    brief: "Two Bauhaus University Weimar graduates running a young architecture studio in Berlin needed a portfolio site that showcased their built projects with large-format photography while letting the team update content independently.",
    solution: "Built a fast, image-first portfolio on Next.js with a headless Sanity CMS. The team manages projects, press mentions, and team bios from a simple dashboard.",
    solutionBullets: [
      "Responsive masonry gallery with lightbox",
      "CMS dashboard for self-managed content",
      "Optimized image pipeline (WebP, lazy loading, blur placeholders)",
      "Bilingual DE/EN with automatic routing",
    ],
    metrics: [
      { value: "98", label: "Lighthouse score", delta: "+34" },
      { value: "3×", label: "More inquiries", delta: "+200%" },
      { value: "12", label: "Days to launch", delta: "on time" },
    ],
    quote: "“The site finally reflects the quality of our work. Clients find us through Google now — that never happened before.”",
    quoteAuthor: "Laura Blumenspiess, Co-Founder",
    nextSlug: "lumo-baumpflege",
  },
  {
    slug: "lumo-baumpflege",
    title: "Lumo Baumpflege",
    subtitle: "Local service business · leads & booking",
    client: "Lumo Baumpflege Berlin",
    year: "2025",
    type: "Landing page · lead generation",
    tech: ["Next.js", "Tailwind CSS", "Cal.com"],
    accentColor: "#5B7B3A",
    brief: "A professional tree care company in Berlin relied on word-of-mouth. They needed a web presence to attract new residential and commercial clients, with an easy way to request quotes for tree maintenance, cutting, and removal.",
    solution: "Designed and built a conversion-focused landing page with clear service descriptions, trust signals (certifications, insurance), and an integrated booking calendar for free estimates.",
    solutionBullets: [
      "Conversion-optimized single page with clear CTAs",
      "Integrated booking calendar for on-site estimates",
      "Before/after gallery showcasing completed work",
      "Local SEO setup (Google Business, schema markup)",
    ],
    metrics: [
      { value: "+47%", label: "More leads", delta: "vs. old site" },
      { value: "100", label: "PageSpeed", delta: "mobile" },
      { value: "8", label: "Days to launch", delta: "from start" },
    ],
    quote: "“Seit der neuen Seite rufen doppelt so viele Kunden an. Und die Buchung läuft automatisch.”",
    quoteAuthor: "Marco Lübke, Geschäftsführer",
    nextSlug: "learnstep",
  },
  {
    slug: "learnstep",
    title: "Learnstep",
    subtitle: "Supervision, coaching & professional presence",
    client: "Learnstep · Dipl.-Psych. Supervision & Coaching",
    year: "2024",
    type: "Multi-page · booking system",
    tech: ["Next.js", "Stripe", "Notion API"],
    accentColor: "#7B5E8A",
    brief: "A diploma psychologist in Berlin offering supervision, coaching, and consulting needed a professional site that conveyed warmth and competence, with an integrated booking and payment system for individual and group sessions.",
    solution: "Created a calm, trust-building multi-page site with session listings synced from Notion, online payment via Stripe, and automated confirmation emails.",
    solutionBullets: [
      "Session listings synced from Notion database",
      "Stripe checkout for online session payments",
      "Automated confirmation & reminder emails",
      "Warm, accessible design meeting WCAG AA standards",
    ],
    metrics: [
      { value: "92%", label: "Bookings online", delta: "vs. 20% before" },
      { value: "€0", label: "Admin overhead", delta: "automated" },
      { value: "14", label: "Days to launch", delta: "on schedule" },
    ],
    quote: "“I can finally focus on my clients instead of admin. The booking system runs itself.”",
    quoteAuthor: "Learnstep, Dipl.-Psychologin",
    nextSlug: "studio-blumenspiess",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(nextSlug: string) {
  return projects.find((p) => p.slug === nextSlug) || projects[0];
}
