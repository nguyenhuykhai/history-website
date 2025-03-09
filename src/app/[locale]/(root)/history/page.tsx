import LoadingComponent from "@/components/custom/LoadingComponent";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import logo from "@/assets/image/background/logo-doan-thanh-nien.webp";

export const metadata: Metadata = {
  title: "Lịch sử Đảng bộ xã Tân Xuân - Truyền thống cách mạng 1930-2020",
  description:
    "Tìm hiểu lịch sử đấu tranh cách mạng, phát triển kinh tế - xã hội của Đảng bộ và nhân dân xã Tân Xuân qua các giai đoạn từ 1930 đến 2020.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Lịch sử Đảng bộ xã Tân Xuân - Truyền thống cách mạng 1930-2020",
    description:
      "Tìm hiểu lịch sử đấu tranh cách mạng, phát triển kinh tế - xã hội của Đảng bộ và nhân dân xã Tân Xuân qua các giai đoạn từ 1930 đến 2020.",
    url: "https://www.dangboxatanxuan.site/vi/history",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/history",
  },
};

const HistoryClient = dynamic(
  () => import("@/components/history/template/HistoryClient"),
  {
    loading: () => <LoadingComponent />,
  }
);

const History = () => {
  return (
    <>
      <HistoryClient />
    </>
  );
};

export default History;
