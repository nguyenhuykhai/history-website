import React from "react";
import NewsSection from "./components/NewsSection";
import LeaderSection from "./components/LeaderSection";
import SuggestionsSection from "./components/SuggestionsSection";
import OperationSection from "./components/OperationSection";
import BannerSection from "./components/BannerSection";

const Home = () => {
  return (
    <div>
      <main className="container mx-auto">
        <BannerSection />
        <NewsSection />
        {/* Góp ý xây dựng Đảng */}
        <SuggestionsSection />
        {/* Ban lãnh đạo */}
        <LeaderSection />
        {/* Tổ chức Đảng */}
        <OperationSection />
      </main>
    </div>
  );
};

export default Home;
