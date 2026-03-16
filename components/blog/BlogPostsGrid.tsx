"use client";

import { useSearchParams, useRouter } from "next/navigation";
import type { PostCard as PostCardType, Category } from "@/types/blog";
import { PostCard } from "./PostCard";

export function BlogPostsGrid({
  posts,
  categories,
}: {
  posts: PostCardType[];
  categories: Category[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "all";

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category?.slug === activeCategory);

  function handleCategoryClick(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    const query = params.toString();
    router.push(query ? `/blog?${query}` : "/blog", { scroll: false });
  }

  return (
    <>
      {/* Category filter bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => handleCategoryClick("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === "all"
              ? "bg-bright text-[#1A1A1A]"
              : "border border-black/[0.10] text-text-muted hover:text-text-primary hover:border-black/[0.20]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => handleCategoryClick(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.slug
                ? "bg-bright text-bg-primary"
                : "border border-white/15 text-text-muted hover:text-text-primary hover:border-white/30"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">
            No posts found in this category yet.
          </p>
        </div>
      )}
    </>
  );
}
