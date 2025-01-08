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
  slug,
  title,
  image,
  category,
  author -> {
    name, _id, title
  },
  createdAt,
  description
 }`
);
