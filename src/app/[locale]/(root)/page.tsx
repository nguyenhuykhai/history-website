import BannerSection from "@/components/home/organisms/BannerSection";
import LeaderSection from "@/components/home/organisms/LeaderSection";
import NewsSection from "@/components/home/organisms/NewsSection";
import OperationSection from "@/components/home/organisms/OperationSection";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { NEWS_QUERY, TERMS_QUERY, UNITS_QUERY } from "@/sanity/lib/queries";
import { NEWS_QUERYResult, TERMS_QUERYResult, UNITS_QUERYResult } from "@/sanity/types";

export const Home = async () => {
  const { data: terms }: { data: TERMS_QUERYResult } = await sanityFetch({ query: TERMS_QUERY });
  const { data: news }: { data: NEWS_QUERYResult } = await sanityFetch({
    query: NEWS_QUERY,
  });
  const { data: units } : { data: UNITS_QUERYResult } = await sanityFetch({ query: UNITS_QUERY });

  return (
    <>
      <main className="container mx-auto">
        <BannerSection />
        {/* Tin tức */}
        <NewsSection news={news}/>
        {/* Ban lãnh đạo */}
        <LeaderSection terms={terms}/>
        {/* Tổ chức Đảng */}
        <OperationSection units={units} />
      </main>
      <SanityLive />
    </>
  );
}

export default Home;
