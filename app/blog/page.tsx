import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal/ScrollReveal";
import { getAllPosts, getAllCategories } from "@/lib/sanity/fetch";
import { BlogPostsGrid } from "@/components/blog/BlogPostsGrid";
import { LazyGrainient } from "@/components/reactbits/Grainient/LazyGrainient";

export const metadata: Metadata = {
    title: "Blog | BrightByte Berlin",
    description:
        "Web development tutorials, performance tips, and framework guides from BrightByte Berlin.",
    alternates: {
        canonical: "/blog",
        languages: { "de-DE": "/blog", en: "/blog?lang=en" },
    },
    openGraph: {
        title: "Blog | BrightByte Berlin",
        description:
            "Web development tutorials, performance tips, and framework guides.",
        url: "https://brightbyte-berlin.com/blog",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BrightByte Berlin Blog" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | BrightByte Berlin",
        description: "Web development tutorials, performance tips, and framework guides.",
        images: ["/og-image.png"],
    },
};

export default async function BlogPage() {
    const [posts, categories] = await Promise.all([
        getAllPosts(),
        getAllCategories(),
    ]);

    return (
        <div className="relative min-h-screen bg-bg-primary pt-32 pb-20 overflow-hidden">
            {/* ---- Grainient background — desktop only ---- */}
            <div className="hidden md:block absolute inset-0 opacity-40">
                <LazyGrainient
                    color1="#FBBF24"
                    color2="#F59E0B"
                    color3="#0a0a0a"
                    colorBalance={-0.15}
                    centerX={0.3}
                    centerY={0.0}
                    zoom={0.9}
                    timeSpeed={0.12}
                    grainAmount={0.06}
                    contrast={1.2}
                    saturation={0.85}
                    warpStrength={1.0}
                    warpAmplitude={50}
                    warpFrequency={5.0}
                />
            </div>

            {/* ---- CSS fallback for mobile ---- */}
            <div
                className="md:hidden absolute inset-0 opacity-40"
                style={{
                    background: `
            radial-gradient(ellipse 120% 80% at 30% 0%, rgba(251, 191, 36, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
            #0a0a0a
          `,
                }}
            />

            {/* ---- Dark overlay for text readability ---- */}
            <div className="absolute inset-0 bg-bg-primary/75 pointer-events-none" />

            <Container size="xl" className="relative z-10">
                {/* Hero */}
                <ScrollReveal aboveFold>
                    <div className="mb-16">
                        <p className="text-sm uppercase tracking-widest text-bright mb-3">
                            Blog
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-5">
                            Insights &amp; Tutorials
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
                            Practical guides on web development, performance
                            optimization, and modern frameworks, written for
                            developers and business owners alike.
                        </p>

                        {/* Decorative rule */}
                        <div className="mt-8 flex items-center gap-3">
                            <div className="h-px w-12 bg-bright/50" />
                            <span className="text-xs text-text-muted uppercase tracking-widest">
                                {posts.length}{" "}
                                {posts.length === 1 ? "article" : "articles"}
                            </span>
                            <div className="h-px flex-1 bg-white/8" />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Client-side filter + grid */}
                <ScrollReveal>
                    <Suspense
                        fallback={
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-bg-card border border-white/8 rounded-2xl h-80 animate-pulse"
                                    />
                                ))}
                            </div>
                        }
                    >
                        <BlogPostsGrid posts={posts} categories={categories} />
                    </Suspense>
                </ScrollReveal>
            </Container>
        </div>
    );
}
