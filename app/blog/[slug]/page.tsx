import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/lib/sanity/fetch";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogPostJsonLd } from "@/components/blog/BlogPostJsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { LazyGrainient } from "@/components/reactbits/Grainient/LazyGrainient";

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.seoTitle || post.title} | BrightByte Berlin`,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.seoTitle || post.title} | BrightByte Berlin`,
      description: post.seoDescription || post.excerpt,
      url: `https://brightbyte-berlin.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage?.asset?.url
        ? [
            {
              url: post.coverImage.asset.url,
              width: 1200,
              height: 630,
              alt: post.coverImage.alt || post.title,
            },
          ]
        : undefined,
    },
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = post.category?._id
    ? await getRelatedPosts(post.category._id, post._id)
    : [];

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-20 overflow-hidden">
      <BlogPostJsonLd post={post} />

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

      <Container size="md" className="relative z-10">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-bright transition-colors mb-8"
        >
          &larr; Back to Blog
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-10">
            {/* Category badge */}
            {post.category && (
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-bright/10 text-bright mb-4">
                {post.category.title}
              </span>
            )}

            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.estimatedReadTime} min read</span>
            </div>
          </header>

          {/* Cover image */}
          {post.coverImage?.asset?.url && (
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.coverImage.asset.url}
                alt={post.coverImage.alt || post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          {/* Content area with optional sidebar TOC */}
          <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-10">
            {/* Article body */}
            <div className="min-w-0">
              <PortableTextRenderer body={post.body} />
            </div>

            {/* Sidebar TOC — desktop only */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents body={post.body} />
              </div>
            </aside>
          </div>

          {/* Mobile TOC — inline above content on small screens */}
          <div className="lg:hidden mb-10 -mt-4">
            <TableOfContents body={post.body} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/8">
              {post.tags.map((tag) => (
                <span
                  key={tag._id}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/8 text-text-muted"
                >
                  {tag.title}
                </span>
              ))}
            </div>
          )}

          {/* Author card */}
          <div className="bg-bg-secondary rounded-2xl p-6 md:p-8 mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-bright/20 flex items-center justify-center text-bright font-bold text-lg shrink-0">
              D
            </div>
            <div>
              <p className="font-semibold text-text-primary">
                Daniel Jin Wodke
              </p>
              <p className="text-sm text-text-muted">
                Web Developer &amp; Founder — BrightByte Berlin
              </p>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <PostCard key={p._id} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center mt-20 pt-12 border-t border-white/8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Need a website that performs?
          </h2>
          <p className="text-text-secondary mb-8">
            Let&apos;s build something fast, accessible, and built to convert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">More Articles</Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
