import HomeClient from "@/components/home/template/HomeClient";
import { client } from "@/sanity/lib/client";
import { SanityLive } from "@/sanity/lib/live";
import { NEWS_QUERY, TERMS_QUERY, UNITS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import logo from "@/assets/image/background/co-dang.webp"

export const metadata: Metadata = {
  title: "Đảng bộ xã Tân Xuân - Thông tin chính thức và hoạt động",
  description:
    "Tìm hiểu hoạt động của Đảng bộ xã Tân Xuân, ban lãnh đạo, và 27 chi bộ trực thuộc. Cập nhật thông tin mới nhất về các phong trào và sự kiện xã nhà.",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "Đảng bộ xã Tân Xuân - Thông tin chính thức và hoạt động",
    description:
      "Tìm hiểu hoạt động của Đảng bộ xã Tân Xuân, ban lãnh đạo, và 27 chi bộ trực thuộc. Cập nhật thông tin mới nhất về các phong trào và sự kiện xã nhà.",
    url: "https://www.dangboxatanxuan.site/",
    siteName: "Đảng bộ xã Tân Xuân",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dangboxatanxuan.site/",
  },
};

export default async function Home() {
  const [terms, news, units] = await Promise.all([
    client.fetch(TERMS_QUERY),
    client.fetch(NEWS_QUERY),
    client.fetch(UNITS_QUERY),
  ]);

  if (!terms || !news || !units) return notFound();

  return (
    <div>
      <HomeClient terms={terms} news={news} units={units} />
      <SanityLive />
    </div>
  );
}
