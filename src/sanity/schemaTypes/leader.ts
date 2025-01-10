import { UserIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const leader = defineType({
  name: "leader",
  title: "Đảng viên",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      title: "Họ tên",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Chức vụ",
      name: "title",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      title: "Ảnh đại diện",
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Tên CSĐ",
      name: "tenCsd",
      type: "string",
    }),
    defineField({
      title: "Tên CSĐ trực thuộc",
      name: "tenCsdTrucThuoc",
      type: "string",
    }),
    defineField({
      title: "Số lý lịch",
      name: "soLyLich",
      type: "string",
    }),
    defineField({
      title: "Số thẻ Đảng",
      name: "soTheDang",
      type: "string",
    }),
    defineField({
      title: "Giới tính",
      name: "gioiTinh",
      type: "string",
      options: {
        list: ["Nam", "Nữ"],
      },
    }),
    defineField({
      title: "Ngày sinh",
      name: "ngaySinh",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
    defineField({
      title: "Công việc chính đang làm",
      name: "congViecChinhDangLam",
      type: "string",
    }),
    defineField({
      title: "Tôn giáo",
      name: "tonGiao",
      type: "string",
    }),
    defineField({
      title: "Ngày vào Đảng",
      name: "ngayVaoDang",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
    defineField({
      title: "Ngày vào Đảng chính thức",
      name: "ngayVaoDangChinhThuc",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
    defineField({
      title: "Ngày vào Đảng lần 2",
      name: "ngayVaoDangLan2",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});

export type Leader = {
  _id: string;
  name: string;
  title: string[];
  image: string;
  tenCsd?: string;
  tenCsdTrucThuoc?: string;
  soLyLich?: string;
  soTheDang?: string;
  gioiTinh?: string;
  ngaySinh?: string;
  congViecChinhDangLam?: string;
  tonGiao?: string;
  ngayVaoDang?: string;
  ngayVaoDangChinhThuc?: string;
  ngayVaoDangLan2?: string;
};
