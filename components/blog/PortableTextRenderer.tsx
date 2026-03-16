import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const text =
        value.children
          ?.map((c) => ("text" in c ? (c.text as string) : ""))
          .join("") || "";
      return (
        <h2
          id={slugify(text)}
          className="text-2xl font-bold text-text-primary mt-12 mb-4 scroll-mt-24"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const text =
        value.children
          ?.map((c) => ("text" in c ? (c.text as string) : ""))
          .join("") || "";
      return (
        <h3
          id={slugify(text)}
          className="text-xl font-semibold text-text-primary mt-8 mb-3 scroll-mt-24"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-text-primary mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-text-secondary leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-bright bg-bg-secondary rounded-xl p-6 italic text-text-secondary mb-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-text-secondary space-y-2 mb-6 ml-6 list-disc">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-text-secondary space-y-2 mb-6 ml-6 list-decimal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="text-sm bg-bg-card px-1.5 py-0.5 rounded text-bright font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-bright hover:text-bright-hover underline transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = value?.asset?.url || value?.asset?._ref;
      if (!url) return null;
      return (
        <figure className="mb-8">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={url}
              alt={value.alt || "Blog image"}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-text-muted text-center mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    codeBlock: ({ value }) => (
      <div className="bg-bg-card border border-black/[0.06] rounded-xl overflow-hidden mb-6">
        <div className="flex items-center justify-between px-4 py-2 border-b border-black/[0.06]">
          <span className="text-xs text-text-muted font-mono">
            {value.filename || value.language}
          </span>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-text-secondary font-mono leading-relaxed">
            {value.code}
          </code>
        </pre>
      </div>
    ),
  },
};

export function PortableTextRenderer({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="max-w-none">
      <PortableText value={body} components={components} />
    </div>
  );
}
