import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllPostSlugs } from "@/lib/sanity/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectEntries = projects.map((p) => ({
    url: `https://brightbyte.berlin/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const slugs = await getAllPostSlugs();
  const blogEntries = slugs.map((s) => ({
    url: `https://brightbyte.berlin/blog/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://brightbyte.berlin",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://brightbyte.berlin/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://brightbyte.berlin/imprint",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://brightbyte.berlin/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...projectEntries,
    ...blogEntries,
  ];
}
