import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import BannerImg from "../assets/images/constitution.svg";
import MainImg from "../assets/images/0001.jpg";

import "./GmbGeoGrid.css";

const Constitution = () => {
  return (
    <div className="review-management">
      <div className="review-banner section_padding">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={5} sm={12}>
              <h1 className="banner-head text-primary font-weight-bold">
                Constitution
              </h1>
              <p className="banner-text">ASSOCIATION OF CIVIL ENGINEERS</p>
              <p>B.I.T Sindri</p>
              <p>ESTD. 2021</p>
              <div className="mt-4">
                <Button
                  href="https://drive.google.com/file/d/13GrwttLjVEwl3Syfn-0tLmq_WdcHbWqQ/view?usp=sharing"
                  className="btn-animation"
                >
                  Download
                </Button>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <Image src={BannerImg} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padiing">
        <Container>
          <Row>
            <Col md={12}>
              <Image src={MainImg} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Constitution;
