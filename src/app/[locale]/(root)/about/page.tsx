import LoadingComponent from "@/components/custom/LoadingComponent";
import dynamic from "next/dynamic";
import logo from "@/assets/image/background/co-dang.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu xã Tân Xuân - Vị trí, lịch sử và truyền thống cách mạng",
  description:
    "Xã Tân Xuân - nằm tại trung tâm huyện Hóc Môn. Tìm hiểu lịch sử, vị trí địa lý và truyền thống cách mạng của xã qua các thời kỳ.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Giới thiệu xã Tân Xuân - Vị trí, lịch sử và truyền thống cách mạng",
    description:
      "Xã Tân Xuân - nằm tại trung tâm huyện Hóc Môn. Tìm hiểu lịch sử, vị trí địa lý và truyền thống cách mạng của xã qua các thời kỳ.",
    url: "https://www.dangboxatanxuan.site/vi/about",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/about",
  },
};

const AboutClient = dynamic(
  () => import("@/components/about/template/AboutClient"),
  {
    loading: () => <LoadingComponent />
  }
);

const About = () => {
  return (
    <>
      <AboutClient />
    </>
  );
};

export default About;
