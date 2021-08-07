import React from "react";
import { Container, Row, Col, Tabs, Tab, Image } from "react-bootstrap";
import { SiManageiq } from "react-icons/si";
import { AiOutlineAim } from "react-icons/ai";

import TestImg from "../../assets/images/aim.svg";
import Vision from "../../assets/images/vision.svg";

const TabSection = () => {
  return (
    <div className="tabsections section_padding">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={6}>
            {/* <h6 className="text-center text-secondary">Lorem Ipsum</h6> */}
            <h3 className="text-center">Who we are</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="tabdata">
              <Tabs defaultActiveKey="Tab1" id="uncontrolled-tab-example">
                <Tab
                  eventKey="Tab1"
                  title={
                    <>
                      <AiOutlineAim /> <span className="ml-3">Aim</span>
                    </>
                  }
                >
                  <Row className="align-items-center py-4">
                    <Col md={6} sm={12}>
                      {/* <h3>
                        Track rankings and visibility for all of your locations.
                      </h3> */}
                      <p>
                        Association of Civil Engineers, B.I.T. Sindri aims to
                        enlighten students, scholars and researchers of the most
                        recent advancements in the Civil Engineering field. It
                        aspires to foster a culture of learning, understanding
                        and sharing of Civil engineering concepts in the campus
                        so that there is no dearth of information and an open
                        along with free flow of knowledge. We want more people
                        to join us in the movement so that we learn and innovate
                        together.
                      </p>
                    </Col>
                    <Col md={6}>
                      <Image src={TestImg} className="img-fluid" />
                    </Col>
                  </Row>
                </Tab>
                <Tab
                  eventKey="Tab2"
                  title={
                    <>
                      <SiManageiq /> <span className="ml-3">Vision</span>
                    </>
                  }
                >
                  <Row className="align-items-center py-4">
                    <Col md={6} sm={12}>
                      <h3>Vision of ACE</h3>
                      <p>
                        Civil Engineering is an art and a technique to create
                        safe, resilient and sustainable buildings
                      </p>
                    </Col>
                    <Col md={6}>
                      <Image src={Vision} className="img-fluid" />
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
      </Container>
    </div>
  );
};

export default TabSection;
