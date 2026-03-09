import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Your full website, built from scratch. I handle everything from design to launch so you get a site that looks great, loads fast, and actually brings in customers.",
    icon: "HiCode",
    features: [
      "Responsive on all devices",
      "Fast load times",
      "Clean, maintainable code",
      "Built to grow with you",
    ],
  },
  {
    id: "performance-seo",
    title: "Performance & SEO",
    description:
      "A great site means nothing if nobody finds it. I make sure your site ranks well on Google, loads instantly, and gives visitors a reason to stay.",
    icon: "HiRocketLaunch",
    features: [
      "Core Web Vitals",
      "Page speed optimization",
      "Search engine visibility",
      "Analytics setup",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Add AI features that actually help your business. Chatbots that answer customer questions, smart forms that qualify leads while you sleep.",
    icon: "HiSparkles",
    features: [
      "AI chatbots",
      "Lead qualification",
      "Smart automation",
      "Personalized content",
    ],
  },
  {
    id: "backend-api",
    title: "Backend & APIs",
    description:
      "Need a custom backend, database, or third-party integration? I build the server-side logic that makes your site actually do things.",
    icon: "HiDatabase",
    features: [
      "REST APIs",
      "Database design",
      "Authentication",
      "Third-party integrations",
    ],
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description:
      "Not sure where to start? I help you figure out the right tech stack, architecture, and roadmap for your project before you spend a single euro.",
    icon: "HiLightBulb",
    features: [
      "Tech stack advisory",
      "Architecture review",
      "Project roadmapping",
      "Honest recommendations",
    ],
  },
];
