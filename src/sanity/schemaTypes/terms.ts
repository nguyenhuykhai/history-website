import { Flag } from "lucide-react";
import { defineType, defineField } from "sanity";

export const terms = defineType({
  name: "terms",
  title: "Nhiệm kỳ",
  type: "document",
  icon: Flag,
  fields: [
    defineField({
      name: "id",
      type: "number"
    }),
    defineField({
      name: "name",
      type: "text",
    }),
    defineField({
      name: "description",
      type: "markdown",
    }),
    defineField({
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