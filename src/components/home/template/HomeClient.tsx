"use client";

import { NEWS_QUERYResult, TERMS_QUERYResult, UNITS_QUERYResult } from "@/sanity/types";
import dynamic from "next/dynamic";

const BannerSection = dynamic(() => import("@/components/home/organisms/BannerSection"), {
  loading: () => <div className="h-96 bg-gray-300 animate-pulse"></div>,
  ssr: false,
});
const LeaderSection = dynamic(() => import("@/components/home/organisms/LeaderSection"), {
  loading: () => <div className="h-96 bg-gray-300 animate-pulse"></div>,
  ssr: false,
});
const NewsSection = dynamic(() => import("@/components/home/organisms/NewsSection"), {
  loading: () => <div className="h-96 bg-gray-300 animate-pulse"></div>,
  ssr: false,
});
const OperationSection = dynamic(() => import("@/components/home/organisms/OperationSection"), {
  loading: () => <div className="h-96 bg-gray-300 animate-pulse"></div>,
  ssr: false,
});

type HomeClientProps = {
    terms: TERMS_QUERYResult;
    news: NEWS_QUERYResult;
    units: UNITS_QUERYResult;
}

const HomeClient: React.FC<HomeClientProps> = ({ terms, news, units }) => {
  return (
    <main className="container mx-auto">
      <BannerSection />
      {/* Tin tức */}
      <NewsSection news={news} />
      {/* Ban lãnh đạo */}
      <LeaderSection terms={terms} />
      {/* Tổ chức Đảng */}
      <OperationSection units={units} />
    </main>
  );
};

export default HomeClient;