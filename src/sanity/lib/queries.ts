import { defineQuery } from "groq";

export const TERMS_QUERY = defineQuery(
  `*[_type == "terms"] | order(_createdAt asc) {
  _id,
  name,
  description,
  data[] -> {
    name, _id, title, image
  },
  _createdAt,
  _updatedAt,
 }`
);

export const NEWS_QUERY = defineQuery(
  `*[_type == "news" && defined(slug.current)] {
  _id,
  slug,
  title,
  image,
  category,
  author -> {
    name, _id, title
  },
  createdAt
 }`
);

export const NEW_QUERY_BY_ID = defineQuery(
  `*[_type == "news" && _id == $id][0] {
  _id,
  slug,
  title,
  image,
  category,
  author -> {
    name, _id, title, image
  },
  createdAt,
  description
 }`
);

export const UNITS_QUERY = defineQuery(
  `*[_type == "units" && defined(slug.current)] | order(level asc) {
  _id,
  slug,
  name,
  image,
  members[] -> {
    _id,
    name,
    title,
    image,
    tenCsd,
    tenCsdTrucThuoc,
    soLyLich,
    soTheDang,
    gioiTinh,
    ngaySinh,
    congViecChinhDangLam,
    tonGiao,
    ngayVaoDang,
    ngayVaoDangChinhThuc,
    ngayVaoDangLan2
  },
  description,
  _createdAt,
  _updateAt
 }`
);

export const UNITS_QUERY_BY_ID = defineQuery(
  `*[_type == "units" && _id == $id][0] {
  _id,
  slug,
  name,
  image,
  members[] -> {
    _id,
    name,
    title,
    image,
    tenCsd,
    tenCsdTrucThuoc,
    soLyLich,
    soTheDang,
    gioiTinh,
    ngaySinh,
    congViecChinhDangLam,
    tonGiao,
    ngayVaoDang,
    ngayVaoDangChinhThuc,
    ngayVaoDangLan2,
    note
  },
  culture,
  description,
  _createdAt,
  _updateAt
 }`
);
