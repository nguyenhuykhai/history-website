import { Metadata } from "next";
import dynamic from "next/dynamic";
import logo from "@/assets/image/background/co-dang.webp";
import LoadingComponent from "@/components/custom/LoadingComponent";

export const metadata: Metadata = {
  title: "Không gian văn hóa Hồ Chí Minh tại xã Tân Xuân",
  description:
    "Khám phá không gian văn hóa Hồ Chí Minh tại xã Tân Xuân - nơi lưu giữ giá trị văn hóa và tư tưởng của Chủ tịch Hồ Chí Minh.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Không gian văn hóa Hồ Chí Minh tại xã Tân Xuân",
    description:
      "Khám phá không gian văn hóa Hồ Chí Minh tại xã Tân Xuân - nơi lưu giữ giá trị văn hóa và tư tưởng của Chủ tịch Hồ Chí Minh.",
    url: "https://www.dangboxatanxuan.site/vi/cultural",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/cultural",
  },
};

const CulturalClient = dynamic(
  () => import("@/components/cultural/template/CulturalClient"),
  {
    loading: () => <LoadingComponent />
  }
);

const Cultural = () => {
  return (
    <>
      <CulturalClient />
    </>
  );
};

export default Cultural;
