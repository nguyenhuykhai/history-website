import { UserIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const leader = defineType({
  name: "leader",
  title: "Leader",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
