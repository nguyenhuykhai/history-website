import BannerSection from "@/components/home/BannerSection";
import LeaderSection from "@/components/home/LeaderSection";
import NewsSection from "@/components/home/NewsSection";
import OperationSection from "@/components/home/OperationSection";
import { SanityLive } from "@/sanity/lib/live";

export default function Home() {
  
  return (
    <>
      <main className="container mx-auto">
        <BannerSection />
        {/* Tin tức */}
        <NewsSection />
        {/* Ban lãnh đạo */}
        <LeaderSection />
        {/* Tổ chức Đảng */}
        <OperationSection />
      </main>
      <SanityLive />
    </>
  );
}
