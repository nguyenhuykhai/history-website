"use client";

import { NEWS_QUERYResult, TERMS_QUERYResult, UNITS_QUERYResult } from "@/sanity/types";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Home");

  return (
    <main className="container mx-auto">
      <BannerSection />
      {/* Tin tức */}
      <NewsSection news={news} t={t} />
      {/* Ban lãnh đạo */}
      <LeaderSection terms={terms} t={t} />
      {/* Tổ chức Đảng */}
      <OperationSection units={units} t={t} />
    </main>
  );
};

export default HomeClient;