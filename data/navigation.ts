import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
];

export const footerLinks = {
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
    { label: "Terms", href: "/imprint" },
  ],
};
