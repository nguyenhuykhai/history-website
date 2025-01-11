import BannerSection from "@/components/home/organisms/BannerSection";
import LeaderSection from "@/components/home/organisms/LeaderSection";
import NewsSection from "@/components/home/organisms/NewsSection";
import OperationSection from "@/components/home/organisms/OperationSection";
import { client } from "@/sanity/lib/client";
import { SanityLive } from "@/sanity/lib/live";
import { NEWS_QUERY, TERMS_QUERY, UNITS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const Home = async () => {
  const [terms, news, units] = await Promise.all([
    client.fetch(TERMS_QUERY),
    client.fetch(NEWS_QUERY),
    client.fetch(UNITS_QUERY),
  ]);

  if (!terms || !news || !units) return notFound();

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
