import type { SeoPage } from "@/data/seo-pages";

const categoryLabels: Record<SeoPage["category"], string> = {
    service: "Services",
    industry: "Industries",
    need: "Solutions",
    location: "Locations",
};

export function SeoPageJsonLd({ page }: { page: SeoPage }) {
    const baseUrl = "https://brightbyte-berlin.com";
    const pageUrl = `${baseUrl}/s/${page.slug}`;

    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.title,
        description: page.metaDescription,
        url: pageUrl,
        inLanguage: "de-DE",
        isPartOf: {
            "@type": "WebSite",
            name: "BrightByte Berlin",
            url: baseUrl,
        },
        provider: {
            "@type": "ProfessionalService",
            name: "BrightByte Berlin",
            url: baseUrl,
            areaServed: { "@type": "City", name: "Berlin" },
        },
    };

    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
            },
        })),
    };

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: categoryLabels[page.category],
                item: `${baseUrl}/#services`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: page.title.split(" | ")[0],
                item: pageUrl,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}
