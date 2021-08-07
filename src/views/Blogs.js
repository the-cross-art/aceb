import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import BanerImg from "../assets/images/schedule.svg";

import { Link } from "react-router-dom";
import ServiceCards from "../components/homepageSections/ServiceCards";

const Blogs = () => {
  return (
    <>
      <div className="posting">
        <div className="posting-banner section_padding">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h1 className="">Blogs</h1>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col md={6}>
                <Image fluid src={BanerImg} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <ServiceCards />
    </>
  );
};

export default Blogs;
