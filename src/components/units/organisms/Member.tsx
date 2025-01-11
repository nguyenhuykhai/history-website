import { convertFromNoteToText } from "@/lib/utils";
import Image from "next/image";

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
    <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        {member.image && (
          <div className="flex-shrink-0">
            <Image
              className="w-16 h-16 rounded-full"
              src={member.image}
              alt={member.name || "Member"}
              width={64}
              height={64}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900 dark:text-white truncate">
            {member.name}
          </p>
          {member.title && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {member.title.join(", ")}
            </p>
          )}
          {member.note && (
            <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded">
              {convertFromNoteToText(member.note)}
            </span>
          )}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>{member.gioiTinh}</p>
          <p>{member.ngaySinh}</p>
        </div>
      </div>
    </li>
  );
};

export default Member;
