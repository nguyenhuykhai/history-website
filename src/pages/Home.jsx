import React from "react";
import HighlightSection from "../components/HighlightSection";
import NewsSection from "../components/NewsSection";
import LegalDocsSection from "../components/LegalDocsSection";
import AdminMap from "../components/AdminMap";

import SidebarLinks from "../components/SidebarLinks";
import CountdownTimer from "../components/CountdownTimer";
import { Grid2 } from "@mui/material";

function Home() {
  return (
    <div>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={9}>
          <CountdownTimer />
          <HighlightSection />
          <NewsSection />
          <LegalDocsSection />
          <AdminMap />
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <SidebarLinks />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Home;
