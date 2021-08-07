import React from "react";
import HeroSection from "../components/homepageSections/HeroSection";
import Info from "../components/homepageSections/Info";
import ServiceCards from "../components/homepageSections/ServiceCards";
import TabSection from "../components/homepageSections/TabSection";
import PricingBar from "../components/homepageSections/PricingBar";
import TestimonialsHome from "../components/homepageSections/TestimonialsHome";

import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <HeroSection />
      <TabSection />
      <Info />
      <PricingBar />
      <TestimonialsHome />
    </div>
  );
};

export default Home;
