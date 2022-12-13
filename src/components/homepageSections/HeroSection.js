import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import AceImg from "../../assets/images/welcome.gif"
import QualifyImg from "../../assets/images/qualify.png"



import { Container, Row, Col, Image, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-banner section_padding">
      <Container>
        {/* <Row className="align-items-center justify-content-between"> */}
          {/* <Col md={12} sm={12}> */}
            {/* <Image src={AceImg} className="img-fluid" /> */}
            {/* <video src={AceVideo} width="750" height="500" controls>
          </video>
          </Col> */}
          
          
          {/* <Col md={6} sm={12}>
            <Image src={QualifyImg} className="img-fluid" />
          </Col>
          <Col md={5} sm={12}>
            <h2 className="head-color">GATE 2022 Result Declared</h2>
            <p className="banner-text">
              More than 30+ Student qualified for GATE 2022
            </p>
            <div className="mt-4">
              <LinkContainer to="/gate">
                <Button className="btn-animation">Click Here!</Button>
              </LinkContainer>
            </div>
          </Col>
        </Row> */}
        <br />
        <Row className="align-items-center justify-content-between">
          {/* <Col md={12} sm={12}> */}
            {/* <Image src={AceImg} className="img-fluid" /> */}
            {/* <video src={AceVideo} width="750" height="500" controls>
          </video>
          </Col> */}
          
          <Col md={5} sm={12}>
            <h1 className="banner-head">Welcome ,</h1>
            <h2 className="head-color">Association of Civil Engineers</h2>
            <p className="banner-text">
              Civil Engineering has served mankind since time immemorial. It has
              been at play since human civilization learnt to build homes,
              bridges and roads
            </p>
            <div className="mt-4">
              <LinkContainer to="/about">
                <Button className="btn-animation">Know More About Us!</Button>
              </LinkContainer>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Image src={AceImg} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
