import LoadingComponent from "@/components/custom/LoadingComponent";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import logo from "@/assets/image/background/co-dang.webp";

export const metadata: Metadata = {
  title: "Liên hệ Đảng bộ xã Tân Xuân - Hỗ trợ và giải đáp",
  description:
    "Liên hệ với Đảng bộ xã Tân Xuân để được hỗ trợ và giải đáp mọi thông tin về các hoạt động của xã nhà.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Liên hệ Đảng bộ xã Tân Xuân - Hỗ trợ và giải đáp",
    description:
      "Liên hệ với Đảng bộ xã Tân Xuân để được hỗ trợ và giải đáp mọi thông tin về các hoạt động của xã nhà.",
    url: "https://www.dangboxatanxuan.site/vi/contact",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/vi/contact",
  },
};

const ContactClient = dynamic(
  () => import("@/components/contact/template/ContactClient"),
  {
    loading: () => <LoadingComponent />,
  }
);

export default function Contact() {
  return (
    <>
      <ContactClient />
    </>
  );
}
