import React from "react";
import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import CompanyLogosCarousel from "../../components/CompanyLogosCarousel";

const Home = () => {
  return (
    <div>
      <div className="pt-16" style={{ fontFamily: "Baskervville, sans-serif" }}>
        <HeroSection />
        <CompanyLogosCarousel />
        <IntroSection />
      </div>
    </div>
  );
};

export default Home;
