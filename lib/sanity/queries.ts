import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage{_type, alt, asset->{_id, url}},
    publishedAt,
    estimatedReadTime,
    category->{_id, title, "slug": slug.current},
    tags[]->{_id, title, "slug": slug.current}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{_id, url}
      }
    },
    coverImage{_type, alt, asset->{_id, url}},
    publishedAt,
    estimatedReadTime,
    seoTitle,
    seoDescription,
    category->{_id, title, "slug": slug.current},
    tags[]->{_id, title, "slug": slug.current}
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && category._ref == $categoryId && _id != $postId] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage{_type, alt, asset->{_id, url}},
    publishedAt,
    estimatedReadTime,
    category->{_id, title, "slug": slug.current},
    tags[]->{_id, title, "slug": slug.current}
  }
`;
