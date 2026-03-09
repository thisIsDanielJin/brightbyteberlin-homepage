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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
