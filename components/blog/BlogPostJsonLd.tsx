import type { Post } from "@/types/blog";

export function BlogPostJsonLd({ post }: { post: Post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    image: post.coverImage?.asset?.url || undefined,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Daniel Jin Wodke",
      url: "https://brightbyte.berlin",
    },
    publisher: {
      "@type": "Organization",
      name: "BrightByte Berlin",
      url: "https://brightbyte.berlin",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://brightbyte.berlin/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
