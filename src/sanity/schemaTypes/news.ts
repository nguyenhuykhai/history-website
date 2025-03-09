import { Newspaper } from "lucide-react";
import { defineType, defineField } from "sanity";

export const news = defineType({
  name: "news",
  title: "Tin tức",
  type: "document",
  icon: Newspaper,
  fields: [
    defineField({
      title: "Tiêu đề",
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
      title: "Ảnh tin tức",
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Phân loại",
      name: "category",
      type: "string",
      validation: (Rule) => Rule.min(3).max(20),
    }),
    defineField({
      title: "Nội dung",
      name: "description",
      type: "markdown",
    }),
    defineField({
      title: "Tác giả",
      name: "author",
      type: "reference",
      to: [{ type: "leader" }],
    }),
    defineField({
      title: "Ngày tạo",
      name: "createdAt",
      type: "date",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
