import Image from "next/image";
import Link from "next/link";
import type { PostCard as PostCardType } from "@/types/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PostCard({ post }: { post: PostCardType }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-bg-card border-[1.5px] border-white/8 hover:border-bright/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      {/* Cover image */}
      {post.coverImage?.asset?.url && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage.asset.url}
            alt={post.coverImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-5">
        {/* Category + read time */}
        <div className="flex items-center gap-3 mb-3">
          {post.category && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-bright/10 text-bright">
              {post.category.title}
            </span>
          )}
          <span className="text-xs text-text-muted">
            {post.estimatedReadTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-bright transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-secondary line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        {/* Date */}
        <p className="text-xs text-text-muted">{formatDate(post.publishedAt)}</p>
      </div>
    </Link>
  );
}
