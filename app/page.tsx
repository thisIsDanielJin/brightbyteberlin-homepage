import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import { AISection } from "@/components/sections/AISection/AISection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection/TechStackSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <AboutSection />
      <AISection />
      <TechStackSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
