import { services } from "@/data/services";
import { faqItems } from "@/data/faq";

export function JsonLd() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BrightByte Berlin",
    url: "https://brightbyte-berlin.com",
    email: "hello@brightbyte-berlin.com",
    founder: {
      "@type": "Person",
      name: "Daniel Jin Wodke",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Karl-Marx-Allee 118",
      addressLocality: "Berlin",
      postalCode: "10243",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "City", name: "Berlin" },
      { "@type": "Country", name: "Germany" },
    ],
    knowsAbout: services.map((s) => s.title),
    sameAs: [
      "https://linkedin.com/in/danieljinwodke",
      "https://github.com/danieljinwodke",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BrightByte Berlin",
    url: "https://brightbyte-berlin.com",
    description:
      "Websites that help small businesses stand out online and convert visitors into customers.",
    publisher: {
      "@type": "Person",
      name: "Daniel Jin Wodke",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
