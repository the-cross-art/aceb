import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";
import "./About.css";
const About = () => {
  return (
    <div className="about-us">
      <div className="about-banner section_padding">
        <Container>
          <Row>
            <Col md={12}>
              <div className="width-large-70">
                <h1>
                  About
                  <br />
                  Association of Civil Engineers
                  <br />
                  We{" "}
                  <span className="text-warning">
                    <Typed
                      typedRef={(typedInstance) => {
                        return typedInstance;
                      }}
                      strings={["Construct", "Communicate", "Coordinate"]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </span>
                </h1>
                <p className=" mt-4">
                  Civil Engineering has served mankind since time immemorial. It
                  has been at play since human civilization learnt to build
                  homes, bridges and roads. It would not be wrong to view Civil
                  Engineering as the field that shelters man. Therefore, it
                  becomes all the more essential to understand and apply the
                  knowledge and latest advancements of the field and have a
                  sharp view of it.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <hr />
      </Container>
      <div className="section_padding">
        <Container>
          <Row className="justify-content-between">
            {/* <Col md={4} sm={12}>
              <h2>Establishment</h2>
            </Col> */}
            <Col md={12} sm={12}>
              <p>
                The Association of Civil Engineers, B.I.T. Sindri is a step
                forward in that direction. The Association of Civil Engineers,
                B.I.T. Sindri established in 2017 is an assortment of
                individuals who aim to acquaint you with the latest trends in
                the Civil Engineering field. It is an initiative taken by keen
                Civil Engineering students of B.I.T. Sindri to broaden their
                horizon of their knowledge of the aforementioned field. Our
                patrons are Dr. D. K. Singh, Director, Bit Sindri and H.O.D of
                Civil engineering department, B.I.T. Sindri.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <hr />
      </Container>
      <div className="section_padding count-section">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div className="text-center ">
                <h3 className="text-primary">60+</h3>
                <p>Core Members</p>
              </div>
            </Col>
            {/* <Col md={4} sm={12}>
              <div className="text-center">
                <h3 className="text-primary">1500+</h3>
                <p>Agencies Managing Listings</p>
              </div>
            </Col> */}
            <Col md={6} sm={12}>
              <div className="text-center">
                <h3 className="text-primary">400+</h3>
                <p>General Members</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
