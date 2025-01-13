"use client";
import { Badge } from "@/components/ui/badge";
import { convertFromNoteToText, formatDate } from "@/lib/utils";
import { CircleUser, Cake } from "lucide-react";

export type MembersProps = {
  _id: string;
  name: string | null;
  title: Array<string> | null;
  image: string | null;
  tenCsd: string | null;
  tenCsdTrucThuoc: string | null;
  soLyLich: string | null;
  soTheDang: string | null;
  gioiTinh: "Nam" | "Nữ" | null;
  ngaySinh: string | null;
  congViecChinhDangLam: string | null;
  tonGiao: string | null;
  ngayVaoDang: string | null;
  ngayVaoDangChinhThuc: string | null;
  ngayVaoDangLan2: string | null;
  note: "0" | "1" | "2" | "3" | null;
};

const Member = ({ member }: { member: MembersProps }) => {
  return (
    <div className="pb-3 sm:pb-4">
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900 dark:text-white truncate">
            {member.name}
          </p>
          {member.note && (
            <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded">
              {convertFromNoteToText(member.note)}
            </span>
          )}
        </div>
        <div className="flex flex-row md:flex-col gap-2 m-0">
          <Badge className="badge-primary" variant="outline">
            <span className="flex items-center gap-1">
              <CircleUser className="w-3 h-3" />
              {member.gioiTinh}
            </span>
          </Badge>
          <Badge className="badge-primary" variant="outline">
            <span className="flex items-center gap-1">
              <Cake className="w-3 h-3" />
              {formatDate(member.ngaySinh)}
            </span>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Member;
