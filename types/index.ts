// Navigation types
export interface NavLink {
  label: string;
  href: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Project types
export interface ProjectMetric {
  value: string;
  label: string;
  delta: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  type: string;
  tech: string[];
  accentColor: string;
  brief: string;
  solution: string;
  solutionBullets: string[];
  metrics: ProjectMetric[];
  quote: string;
  quoteAuthor: string;
  nextSlug: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

// Tech stack types
export interface TechItem {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "deployment";
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Social link types
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Contact info types
export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type ContactFormState = "idle" | "submitting" | "success" | "error";

// Section props
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Button variants
export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
