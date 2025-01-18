"use client";

import LoadingComponent from "@/components/custom/LoadingComponent";
import BannerSection from "@/components/home/organisms/BannerSection";
import {
  NEWS_QUERYResult,
  TERMS_QUERYResult,
  UNITS_QUERYResult,
} from "@/sanity/types";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const LeaderSection = dynamic(
  async () => {
    return import("@/components/home/organisms/LeaderSection");
  },
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
);

const NewsSection = dynamic(
  async () => {
    return import("@/components/home/organisms/NewsSection");
  },
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
);

const OperationSection = dynamic(
  async () => {
    return import("@/components/home/organisms/OperationSection");
  },
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
);

type HomeClientProps = {
  terms: TERMS_QUERYResult;
  news: NEWS_QUERYResult;
  units: UNITS_QUERYResult;
};

const HomeClient: React.FC<HomeClientProps> = ({ terms, news, units }) => {
  const t = useTranslations("Home");

  return (
    <main id="home-client" className="container mx-auto">
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
