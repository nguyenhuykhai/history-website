import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Terms").child(S.documentTypeList("terms")),
      S.listItem().title("Leader").child(S.documentTypeList("leader")),
      S.listItem().title("Units").child(S.documentTypeList("units")),
      S.listItem().title("News").child(S.documentTypeList("news")),
    ]);
