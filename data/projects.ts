import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A real-time analytics dashboard for a SaaS platform. Users can track key metrics, manage accounts, and build custom reports.",
    image: "/images/projects/dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    featured: true,
    longDescription:
      "The client's team was spending hours each week pulling data from multiple tools and manually assembling reports. They needed a single dashboard that surfaced the metrics that mattered — MRR, churn, activation rate — without the spreadsheet gymnastics.\n\nI built a Next.js app with server-side data fetching and Chart.js visualisations. TypeScript and a shared component library kept the codebase maintainable as the feature set grew. Tailwind CSS enabled rapid UI iteration so the client could give feedback and see changes within the same sprint.\n\nThe result is a fast, accessible dashboard that loads in under a second. The team now spends their time acting on data instead of collecting it, and the modular architecture makes it easy to add new report types as the product evolves.",
    highlights: [
      "Sub-second initial page load",
      "Real-time data syncing across widgets",
      "Mobile-first responsive design",
      "Modular chart components for easy expansion",
    ],
    scope: ["UI/UX Design", "Frontend Development", "Data Visualization", "Performance Optimization"],
    testimonial: {
      quote:
        "The dashboard Daniel built changed how we look at our business data. He understood what we needed and delivered it ahead of schedule.",
      author: "Michael K.",
      role: "CEO",
      company: "Tech Startup",
    },
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full online store with product catalog, cart, checkout, and inventory management. Built for fast page loads and easy purchasing.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    featured: true,
    longDescription:
      "The business had outgrown its off-the-shelf shop builder. Page loads were slow, customisation was limited, and the checkout flow was losing customers. They needed a platform built around their specific catalogue and purchasing workflow.\n\nI developed a React storefront backed by a Node.js API and PostgreSQL database. Stripe handles payments with full PCI compliance, while server-side rendering ensures product pages are indexed and load quickly. Inventory syncs in real time so stock levels are always accurate.\n\nSince launch the store has seen a measurable lift in conversion rate. Pages load in under two seconds on mobile, and the owner can manage products and orders through a simple admin interface without touching code.",
    highlights: [
      "40% faster page loads vs. previous platform",
      "Stripe-powered checkout with PCI compliance",
      "Real-time inventory management",
      "SEO-optimized product pages",
    ],
    scope: ["Full-Stack Development", "Payment Integration", "Database Design", "SEO Setup"],
    testimonial: {
      quote:
        "Daniel built us a website that actually brings in customers. It's fast, looks great on every device, and we get compliments on it all the time.",
      author: "Sarah M.",
      role: "Owner",
      company: "Local Cafe",
    },
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    description:
      "A website for a Berlin restaurant with online reservations, menu display, and delivery platform integration.",
    image: "/images/projects/restaurant.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    featured: true,
    longDescription:
      "The restaurant had no proper web presence — just a basic listing on delivery platforms. They were missing out on direct reservations and couldn't tell their own story. They needed a site that showcased their food, handled bookings, and kept the menu up to date without developer help.\n\nI chose Next.js for speed and SEO, paired with Sanity CMS so the kitchen team can update the menu, add seasonal specials, and manage gallery images themselves. The reservation widget integrates with their existing booking system, and structured data markup ensures the restaurant appears prominently in local search results.\n\nThe site now ranks on the first page for relevant Berlin dining queries. Direct reservations have increased steadily, reducing the restaurant's dependence on third-party platforms and their commission fees.",
    highlights: [
      "First-page Google ranking for local queries",
      "CMS-managed menu and gallery",
      "Integrated reservation system",
      "98+ Lighthouse performance score",
    ],
    scope: ["UI/UX Design", "CMS Integration", "SEO Setup", "Reservation System"],
    testimonial: {
      quote:
        "Daniel took our rough ideas and turned them into a website that actually represents who we are. Easy to work with and always on time.",
      author: "Anna L.",
      role: "Marketing Director",
      company: "Design Agency",
    },
  },
  {
    id: "portfolio-site",
    title: "Creative Portfolio",
    description:
      "A portfolio site for a creative professional with smooth animations and interactive image galleries.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Three.js"],
    featured: false,
    longDescription:
      "The client is a photographer and art director who needed a portfolio that felt as polished as their work. Previous attempts with website builders couldn't deliver the smooth transitions and immersive gallery experience they envisioned.\n\nI built the site with Next.js and Framer Motion for fluid page transitions, and added Three.js for a subtle 3D hero element that sets the tone immediately. Image loading is optimised with next/image and lazy loading so the gallery stays fast even with high-resolution photos.\n\nThe finished portfolio loads quickly, animates beautifully, and puts the creative work front and centre. The client uses it as their primary link when pitching to new clients and agencies.",
    highlights: [
      "Smooth page transitions with Framer Motion",
      "Interactive 3D hero element",
      "Optimised image loading for large galleries",
      "Mobile-first responsive design",
    ],
    scope: ["UI/UX Design", "Frontend Development", "3D Graphics", "Performance Optimization"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export function getAdjacentProjects(id: string) {
  const idx = projects.findIndex((p) => p.id === id);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
