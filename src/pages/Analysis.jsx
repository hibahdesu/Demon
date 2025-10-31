//src/pages/Analysis.jsx
import React from "react";
import BoxOfficeIntro from "../components/BoxOfficeIntro";
import BoxOfficeBreakdown from "../components/BoxOfficeBreakdown";
import CulturalImpact from "../components/CulturalImpact";
import InfinityCastleTimeline from "../components/InfinityCastleTimeline";
import CinematicFooter from "../components/CinematicFooter";

const Analysis = () => {

  return (
    <div className="analysis-page">
      <BoxOfficeIntro />
      <BoxOfficeBreakdown />
      <CulturalImpact />
      <InfinityCastleTimeline />
      <CinematicFooter />
    </div>
  );
};

export default Analysis;
