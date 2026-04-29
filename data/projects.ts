import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "architecture-studio",
    title: "Studio Meier",
    subtitle: "Architecture portfolio with project CMS",
    client: "Studio Meier Architekten",
    year: "2025",
    type: "Multi-page · portfolio",
    tech: ["Next.js", "Framer Motion", "Sanity CMS"],
    accentColor: "#4A6741",
    brief: "A Berlin-based architecture firm needed a portfolio site that showcased large-format photography of their built projects while letting the team update content independently — no developer needed for new project uploads.",
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
    quote: "“The site finally looks as good as our buildings. And we can update it ourselves — that was the game changer.”",
    quoteAuthor: "Julia Meier, Founder",
    nextSlug: "baumpflege",
  },
  {
    slug: "baumpflege",
    title: "Baumpflege Schmidt",
    subtitle: "Local service business — leads & booking",
    client: "Baumpflege Schmidt GmbH",
    year: "2025",
    type: "Landing page · lead generation",
    tech: ["Next.js", "Tailwind CSS", "Cal.com"],
    accentColor: "#5B7B3A",
    brief: "A tree care company in Brandenburg relied on word-of-mouth. They needed a professional web presence to attract new residential and commercial clients, with an easy way to request quotes.",
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
    quoteAuthor: "Thomas Schmidt, Geschäftsführer",
    nextSlug: "psychologin",
  },
  {
    slug: "psychologin",
    title: "Praxis Kern",
    subtitle: "Workshop booking & professional presence",
    client: "Dipl.-Psych. Susanne Kern",
    year: "2024",
    type: "Multi-page · booking system",
    tech: ["Next.js", "Stripe", "Notion API"],
    accentColor: "#7B5E8A",
    brief: "A self-employed psychologist offering group workshops needed a professional site that conveyed warmth and competence — with an integrated booking and payment system for her workshop series.",
    solution: "Created a calm, trust-building multi-page site with workshop listings synced from Notion, online payment via Stripe, and automated confirmation emails.",
    solutionBullets: [
      "Workshop listings synced from Notion database",
      "Stripe checkout for online workshop payments",
      "Automated confirmation & reminder emails",
      "Warm, accessible design meeting WCAG AA standards",
    ],
    metrics: [
      { value: "92%", label: "Bookings online", delta: "vs. 20% before" },
      { value: "€0", label: "Admin overhead", delta: "automated" },
      { value: "14", label: "Days to launch", delta: "on schedule" },
    ],
    quote: "“Endlich kann ich mich auf meine Arbeit konzentrieren statt auf Verwaltung. Die Buchungen laufen von allein.”",
    quoteAuthor: "Susanne Kern, Dipl.-Psychologin",
    nextSlug: "architecture-studio",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(nextSlug: string) {
  return projects.find((p) => p.slug === nextSlug) || projects[0];
}
