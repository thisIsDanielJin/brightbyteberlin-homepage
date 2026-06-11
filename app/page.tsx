import dynamic from "next/dynamic";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroEditorial } from "@/components/sections-editorial/HeroEditorial";
import { ManifestoEditorial } from "@/components/sections-editorial/ManifestoEditorial";

const TechStrip = dynamic(
  () =>
    import("@/components/sections/TechStackSection/TechStackSection").then(
      (mod) => mod.TechStrip
    )
);

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection/ServicesSection").then(
      (mod) => mod.ServicesSection
    )
);

const ProcessSection = dynamic(
  () =>
    import("@/components/sections/ProcessSection/ProcessSection").then(
      (mod) => mod.ProcessSection
    )
);

const CTABanner = dynamic(
  () =>
    import("@/components/sections/CTABanner/CTABanner").then(
      (mod) => mod.CTABanner
    )
);

const WorkSection = dynamic(
  () =>
    import("@/components/sections/WorkSection/WorkSection").then(
      (mod) => mod.WorkSection
    )
);

const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection/AboutSection").then(
      (mod) => mod.AboutSection
    )
);

const PricingSection = dynamic(
  () =>
    import("@/components/sections/PricingSection/PricingSection").then(
      (mod) => mod.PricingSection
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
      {/* New editorial sections — Round 1 */}
      <HeroEditorial />
      <ManifestoEditorial />

      {/* Existing bone+plum sections — to be reworked in subsequent rounds */}
      <TechStrip />
      <ServicesSection />
      <ProcessSection />
      <CTABanner />
      <WorkSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
