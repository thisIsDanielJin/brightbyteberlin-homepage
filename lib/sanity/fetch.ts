import { client, isSanityConfigured } from "./client";
import type { PostCard, Post, Category } from "@/types/blog";
import {
  allPostsQuery,
  postBySlugQuery,
  allPostSlugsQuery,
  allCategoriesQuery,
  relatedPostsQuery,
} from "./queries";

export async function getAllPosts(): Promise<PostCard[]> {
  if (!isSanityConfigured || !client) return [];
  return client.fetch(allPostsQuery, {}, { next: { tags: ["posts"] } });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured || !client) return null;
  return client.fetch(
    postBySlugQuery,
    { slug },
    { next: { tags: ["posts"] } }
  );
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  if (!isSanityConfigured || !client) return [];
  return client.fetch(allPostSlugsQuery, {}, { next: { tags: ["posts"] } });
}

export async function getAllCategories(): Promise<Category[]> {
  if (!isSanityConfigured || !client) return [];
  return client.fetch(allCategoriesQuery, {}, { next: { tags: ["posts"] } });
}

export async function getRelatedPosts(
  categoryId: string,
  postId: string
): Promise<PostCard[]> {
  if (!isSanityConfigured || !client) return [];
  return client.fetch(
    relatedPostsQuery,
    { categoryId, postId },
    { next: { tags: ["posts"] } }
  );
}
