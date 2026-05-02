import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { seoPages } from "@/data/seo-pages";
import { getAllPostSlugs } from "@/lib/sanity/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectEntries = projects.map((p) => ({
    url: `https://brightbyte-berlin.com/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const slugs = await getAllPostSlugs();
  const blogEntries = slugs.map((s) => ({
    url: `https://brightbyte-berlin.com/blog/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const seoEntries = seoPages.map((p) => ({
    url: `https://brightbyte-berlin.com/s/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://brightbyte-berlin.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://brightbyte-berlin.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://brightbyte-berlin.com/imprint",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://brightbyte-berlin.com/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://brightbyte-berlin.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectEntries,
    ...blogEntries,
    ...seoEntries,
  ];
}
