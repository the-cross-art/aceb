import React from "react";
import HeroSection from "../components/homepageSections/HeroSection";
import TabSection from "../components/homepageSections/TabSection";
import Avlokan from "../components/homepageSections/Avlokan";
import HeroSectionTwo from "../components/homepageSections/HeroSectionTwo";
import Patron from "../components/homepageSections/patrn";
import PostBearer from "../components/homepageSections/PostBearer";
import WalletModal from "../components/homepageSections/Overlay";
import Slider from "../components/homepageSections/slider/Slider"
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <HeroSection />
      <WalletModal />
      <TabSection />
      <Slider />
      {/* <Avlokan /> */}
      <HeroSectionTwo />
      <Patron />
      <PostBearer />
    </div>
  );
};

export default Home;
