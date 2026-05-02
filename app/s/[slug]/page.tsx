import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { seoPages, getSeoPageBySlug } from "@/data/seo-pages";
import { SeoPageJsonLd } from "@/components/seo/SeoPageJsonLd";
import { SeoPageContent } from "./SeoPageContent";

const seoImageMap: Record<string, string> = {
    "website-fuer-aerzte": "/images/seo/website-fuer-aerzte.jpg",
    "website-fuer-restaurants": "/images/seo/website-fuer-restaurants.jpg",
    "website-fuer-startups": "/images/seo/website-fuer-startups.jpg",
    "website-fuer-anwaelte": "/images/seo/website-fuer-anwaelte.jpg",
    "website-fuer-immobilien": "/images/seo/website-fuer-immobilien.jpg",
    "website-fuer-handwerker": "/images/seo/website-fuer-handwerker.jpg",
    "website-fuer-coaches": "/images/seo/website-fuer-coaches.jpg",
    "wordpress-alternative": "/images/seo/wordpress-alternative.jpg",
    "react-entwicklung-berlin": "/images/seo/react-entwicklung-berlin.jpg",
    "webdesign-fuer-kmu": "/images/seo/webdesign-fuer-kmu.jpg",
    "lead-generation-berlin": "/images/seo/lead-generation-berlin.jpg",
    "online-booking-integration": "/images/seo/online-booking-integration.jpg",
    "mehrsprachige-website": "/images/seo/mehrsprachige-website.jpg",
    "dsgvo-konforme-website": "/images/seo/dsgvo-konforme-website.jpg",
    "webdesign-friedrichshain": "/images/seo/webdesign-friedrichshain.jpg",
    "webdesign-neukoelln": "/images/seo/webdesign-neukoelln.jpg",
};

const categoryImageMap: Record<string, string> = {
    industry: "/images/seo/industry.jpg",
    service: "/images/seo/service.jpg",
    need: "/images/seo/need.jpg",
    location: "/images/seo/location.jpg",
};

export function generateStaticParams() {
    return seoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const page = getSeoPageBySlug(slug);
    if (!page) return {};

    const ogImage = seoImageMap[slug] || categoryImageMap[page.category] || "/og-image.png";

    return {
        title: page.title,
        description: page.metaDescription,
        alternates: {
            canonical: `/s/${slug}`,
            languages: {
                "de-DE": `/s/${slug}`,
                en: `/s/${slug}?lang=en`,
            },
        },
        openGraph: {
            title: page.title,
            description: page.metaDescription,
            url: `https://brightbyte-berlin.com/s/${slug}`,
            locale: "de_DE",
            alternateLocale: "en_US",
            type: "website",
            images: [{ url: ogImage, width: 1200, height: 630, alt: page.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: page.title,
            description: page.metaDescription,
            images: [ogImage],
        },
    };
}

export default async function SeoLandingPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const page = getSeoPageBySlug(slug);
    if (!page) notFound();

    return (
        <>
            <SeoPageJsonLd page={page} />
            <Suspense>
                <SeoPageContent page={page} />
            </Suspense>
        </>
    );
}
