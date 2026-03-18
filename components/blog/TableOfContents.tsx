import type { PortableTextBlock } from "@portabletext/types";

interface TocItem {
  id: string;
  text: string;
  level: "h2" | "h3";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractHeadings(body: PortableTextBlock[]): TocItem[] {
  const headings: TocItem[] = [];

  for (const block of body) {
    if (
      block._type === "block" &&
      (block.style === "h2" || block.style === "h3")
    ) {
      const text =
        block.children
          ?.map((c) => ("text" in c ? (c.text as string) : ""))
          .join("") || "";
      if (text) {
        headings.push({
          id: slugify(text),
          text,
          level: block.style as "h2" | "h3",
        });
      }
    }
  }

  return headings;
}

export function TableOfContents({ body }: { body: PortableTextBlock[] }) {
  const headings = extractHeadings(body);

  if (headings.length < 2) return null;

  return (
    <nav className="bg-bg-card border border-white/8 rounded-2xl p-6">
      <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-4">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === "h3" ? "pl-4" : ""}
          >
            <a
              href={`#${heading.id}`}
              className="text-sm text-text-muted hover:text-bright transition-colors leading-relaxed block py-0.5"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
