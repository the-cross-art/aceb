import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import BannerImg from "../../assets/images/banner.svg";
import WebinarImg from "../../assets/images/webi.jpg";

import { Container, Row, Col, Image, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-banner section_padding">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={6} sm={12}>
            <h2 className="head-color">
              Webinar on "Career Opportunities in Civil Engineering,"
            </h2>
            <p className="banner-text">
              ACE BIT Sindri is hosting a webinar on "Career Opportunities in
              Civil Engineering," and we have invited <b>Mr.VIVEK GUPTA SIR </b>{" "}
              to share his experience & enlighten our path
            </p>
          </Col>
          <Col md={6} sm={12}>
            <Image src={WebinarImg} className="img-fluid" />
          </Col>
          <Col md={12} sm={12}>
            <br />
            <hr />
          </Col>
          <Col md={12} sm={12}>
            <div className="section_padding count-section">
              <Container>
                <Row>
                  <Col md={6} sm={12}>
                    <div className="text-center ">
                      <h3 className="text-primary">305+</h3>
                      <p>Registration</p>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="text-center">
                      <h3 className="text-primary">197+</h3>
                      <p>Queries Asked</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={12} sm={12}>
            <div
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ width: "200px" }}
                href="https://forms.gle/YCp5ssuyvpmE96iv6"
                className="btn-animation"
              >
                Click to Register
              </Button>
            </div>
          </Col>
          <Col md={12} sm={12}>
            <br />
            <hr />
          </Col>
          <Col md={5} sm={12}>
            <h1 className="banner-head">Welcome,</h1>
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
            <Image src={BannerImg} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
