import { MembersProps } from "@/components/units/organisms/Member";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | null) {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

export function formatDateTime(date: string | null) {
  if (!date) return "";
  const [year, month, day] = date.split("T")[0].split("-");
  return `${day}/${month}/${year}`;
}

export function sortMembers(members: MembersProps[]) {
  return members.sort((a, b) => {
    const noteA = a.note ? parseInt(a.note) : 0;
    const noteB = b.note ? parseInt(b.note) : 0;
    return noteA - noteB;
  });
}

export function convertFromNoteToText(note: "0" | "1" | "2" | "3" | null) {
  switch (note) {
    case "0":
      return "Bí thư";
    case "1":
      return "Phó bí thư";
    case "2":
      return "Cựu ủy viên";
    case "3":
      return "Thành viên";
    default:
      return "Thành viên";
  }
}
