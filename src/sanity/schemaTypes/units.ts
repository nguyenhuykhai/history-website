import { MapPinHouse } from "lucide-react";
import { defineType, defineField } from "sanity";

export const units = defineType({
  name: "units",
  title: "Chi bộ",
  type: "document",
  icon: MapPinHouse,
  fields: [
    defineField({
      title: "Tên chi bộ",
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
      title: "Mô tả",
      name: "description",
      type: "markdown",
    }),
    defineField({
      title: "Ảnh đại diện",
      name: "image",
      type: "url",
    }),
    defineField({
      title: "Danh sách đảng viên",
      name: "members",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "leader" }],
        }
      ],
    }),
    defineField({
      title: "Không gian văn hóa Hồ Chí Minh",
      name: "culture",
      type: "array",
      of: [{type: "string"}],
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});