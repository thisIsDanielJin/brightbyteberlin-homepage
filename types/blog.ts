import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  _type: "image";
  asset: {
    _id: string;
    url: string;
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  alt?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Tag {
  _id: string;
  title: string;
  slug: string;
}

export interface PostCard {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: SanityImage;
  publishedAt: string;
  estimatedReadTime: number;
  category: Category;
  tags?: Tag[];
}

export interface Post extends PostCard {
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}
