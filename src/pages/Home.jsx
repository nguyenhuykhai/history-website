import React from "react";
import NewsSection from "../components/NewsSection";
import LeaderSection from "../components/LeaderSection";
import SuggestionsSection from "../components/SuggestionsSection";

const Home = () => {
  return (
    <div>
      <main className="container mx-auto">
        <NewsSection />
        <SuggestionsSection />
        <LeaderSection />
      </main>
    </div>
  );
};

export default Home;