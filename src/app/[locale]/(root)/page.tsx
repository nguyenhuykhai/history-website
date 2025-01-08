import BannerSection from "@/components/home/BannerSection";
import LeaderSection from "@/components/home/LeaderSection";
// import NewsSection from "@/components/home/NewsSection";
import OperationSection from "@/components/home/OperationSection";
import { SanityLive } from "@/sanity/lib/live";
// import SuggestionsSection from "@/components/home/SuggestionsSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  
  return (
    <>
      <main className="container mx-auto">
        <BannerSection />
        {/* <NewsSection /> */}
        {/* Góp ý xây dựng Đảng */}
        {/* <SuggestionsSection /> */}
        {/* Ban lãnh đạo */}
        <LeaderSection />
        {/* Tổ chức Đảng */}
        <OperationSection />
      </main>
      <SanityLive />
    </>
  );
}