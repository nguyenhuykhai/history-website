import { MapPinHouse } from "lucide-react";
import { defineType, defineField } from "sanity";

export const units = defineType({
  name: "units",
  title: "Chi bộ",
  type: "document",
  icon: MapPinHouse,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "description",
      type: "markdown",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "members",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "leader" }],
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});