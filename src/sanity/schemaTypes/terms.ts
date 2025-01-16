import { Flag } from "lucide-react";
import { defineType, defineField } from "sanity";

export const terms = defineType({
  name: "terms",
  title: "Nhiệm kỳ",
  type: "document",
  icon: Flag,
  fields: [
    defineField({
      title: "Tên nhiệm kỳ",
      name: "name",
      type: "text",
    }),
    defineField({
      title: "Mô tả",
      name: "description",
      type: "markdown",
    }),
    defineField({
      title: "Danh sách lãnh đạo",
      name: "data",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "leader" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name"
    },
  },
});