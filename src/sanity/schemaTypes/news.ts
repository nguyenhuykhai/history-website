import { Newspaper } from "lucide-react";
import { defineType, defineField } from "sanity";

export const news = defineType({
  name: "news",
  title: "News",
  type: "document",
  icon: Newspaper,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) => Rule.min(3).max(20),
    }),
    defineField({
      name: "description",
      type: "markdown",
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "leader" }],
    }),
    defineField({
      name: "createdAt",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
