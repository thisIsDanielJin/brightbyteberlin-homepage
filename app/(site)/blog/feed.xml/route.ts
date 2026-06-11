import { getAllPosts } from "@/lib/sanity/fetch";

export async function GET() {
  let posts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    posts = await getAllPosts();
  } catch {
    // Sanity might not be configured yet
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BrightByte Berlin Blog</title>
    <link>https://brightbyte-berlin.com/blog</link>
    <description>Web development tutorials, performance tips, and framework guides from BrightByte Berlin.</description>
    <language>en</language>
    <atom:link href="https://brightbyte-berlin.com/blog/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://brightbyte-berlin.com/blog/${post.slug}</link>
      <guid isPermaLink="true">https://brightbyte-berlin.com/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.category ? `<category>${post.category.title}</category>` : ""}
      ${
        post.coverImage?.asset?.url
          ? `<enclosure url="${post.coverImage.asset.url}" type="image/jpeg"/>`
          : ""
      }
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
