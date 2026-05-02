import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { seoPages, getSeoPageBySlug } from "@/data/seo-pages";
import { SeoPageJsonLd } from "@/components/seo/SeoPageJsonLd";
import { SeoPageContent } from "./SeoPageContent";

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
