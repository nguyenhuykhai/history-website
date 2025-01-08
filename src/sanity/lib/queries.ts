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
