import { defineType, defineField } from "sanity";

export const codeBlock = defineType({
  name: "codeBlock",
  title: "Code Block",
  type: "object",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "TypeScript", value: "typescript" },
          { title: "JavaScript", value: "javascript" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "JSON", value: "json" },
          { title: "Bash", value: "bash" },
          { title: "Python", value: "python" },
          { title: "Go", value: "go" },
          { title: "Rust", value: "rust" },
          { title: "SQL", value: "sql" },
          { title: "YAML", value: "yaml" },
          { title: "Markdown", value: "markdown" },
          { title: "Plain Text", value: "text" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "filename",
      title: "Filename",
      type: "string",
      description: "Optional filename to display above the code block.",
    }),
  ],
  preview: {
    select: { language: "language", filename: "filename" },
    prepare({ language, filename }) {
      return {
        title: filename || "Code Block",
        subtitle: language,
      };
    },
  },
});
