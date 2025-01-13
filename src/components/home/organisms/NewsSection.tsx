"use client";
import NewsSectionPart from "@/components/home/organisms/NewsSectionPart";
import { NEWS_QUERYResult } from "@/sanity/types";

type NewsSectionProps = {
  news: NEWS_QUERYResult;
  t: (key: string) => string;
};

const NewsSection: React.FC<NewsSectionProps> = ({ news, t }) => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto">
        <h2 className=" uppercase text-xl font-bold bg-red-800 dark:bg-red-900 text-white p-2 mb-4">
          {t("sectionOne")}
        </h2>

        {news && news.length > 0 ? (
          <NewsSectionPart newsData={news} />
        ) : (
          <p className="text-center text-gray-500">No news available.</p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
