import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Nhiệm kỳ").child(S.documentTypeList("terms")),
      S.listItem().title("Đảng viên").child(S.documentTypeList("leader")),
      S.listItem().title("Chi bộ").child(S.documentTypeList("units")),
      S.listItem().title("Tin tức").child(S.documentTypeList("news")),
    ]);
