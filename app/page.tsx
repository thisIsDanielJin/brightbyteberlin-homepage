import dynamic from "next/dynamic";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";

// Below-the-fold sections — dynamically imported to defer framer-motion/heavy JS
const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection/ServicesSection").then(
      (mod) => mod.ServicesSection
    )
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection/ProjectsSection").then(
      (mod) => mod.ProjectsSection
    )
);

const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection/AboutSection").then(
      (mod) => mod.AboutSection
    )
);

const AISection = dynamic(
  () =>
    import("@/components/sections/AISection/AISection").then(
      (mod) => mod.AISection
    )
);

const TechStackSection = dynamic(
  () =>
    import("@/components/sections/TechStackSection/TechStackSection").then(
      (mod) => mod.TechStackSection
    )
);

const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection/FAQSection").then(
      (mod) => mod.FAQSection
    )
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection/ContactSection").then(
      (mod) => mod.ContactSection
    )
);

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <AISection />
      <TechStackSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
