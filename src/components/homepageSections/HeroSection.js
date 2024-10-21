import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import AceImg from "../../assets/images/welcome.gif"
import QualifyImg from "../../assets/images/qualify.png"
import civil_building from "../../assets/video/civil_building.mp4";
import './homepage.css';



import { Container, Row, Col, Image, Button } from "react-bootstrap";



const HeroSection = () => {
  return (
    <div className="hero-banner" >
      <video autoPlay loop muted className="video-class " >
        <source src={civil_building} type='video/mp4' />
      </video>
      <div className="content video-overlay">
        <div className="container">
  

          <h1 className="banner-head">Welcome</h1><span className="banner-head">to</span>
          <h2 className="banner-subhead">Association of Civil Engineers</h2>
          {/* <span class="price"> 2024</span> */}
          <a href="/about"><button className="button-73" role="button">About Us</button></a>
          {/* <WalletModal /> */}
          {/* You can add your paragraph text here if needed */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
