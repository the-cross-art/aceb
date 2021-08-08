import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCards = () => {
  return (
    <div className="service-cards section_padding">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={6}>
            {/* <h6 className="text-center text-secondary">Lorem Ipsum</h6> */}
            <h3 className="text-center">Research Oriented Topics</h3>
            <p className="text-secondary text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <div className="cards">
              <Card>
                <Card.Body>
                  <p className="text-secondary mb-2 small">August 07, 2021</p>
                  <div className="top-content">
                    <h5>HYPERLOOP</h5>
                    <Card.Text>
                      HYPERLOOP COULD BE A STEP INTO THE MODERN WORLD. IF IT
                      WORKS AS PICTURED, IT COULD REVOLUTIONIZE. WE CAN TRAVEL
                      WITH AN AVERAGE OF 1200 KPH. CONSIDERING INDIA, WE CAN
                      TRAVEL FROM OUR NORTH TO SOUTH IN JUST 2 HOURS.
                    </Card.Text>
                  </div>
                  <hr className="my-3" />
                  <div className="card-link">
                    <Link to="/blogs/hyperloops">Explore More</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="cards">
              <Card>
                <Card.Body>
                  <p className="text-secondary mb-2 small">April 3 2021</p>
                  <div className="top-content">
                    <h5>Benefits of BIM in construction</h5>
                    <Card.Text>
                      1) Improve onsite collaboration. (Digital BIM models allow
                      for sharing collaborating and versioning the paper drawing
                      set.) 2) Cost and resource saving. 3) Greater efficiency
                      and shorter project life cycle.
                    </Card.Text>
                  </div>
                  <hr className="my-3" />
                  <div className="card-link">
                    <Link to="/blogs/hyperloops">Explore More</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="cards ">
              <Card>
                <Card.Body>
                  <p className="text-secondary mb-2 small">April 3 2019</p>
                  <div className="top-content">
                    <h5>Building Information Modelling</h5>
                    <Card.Text>
                      also known as BIM is a process for creating and managing
                      information of a construction project across the project
                      lifecycle. One of the key outputs of this process is the
                      BUILDING INFORMATION MODEL. It has a great importance in
                      CIVIL ENGINEERING.
                    </Card.Text>
                  </div>
                  <hr className="my-3" />
                  <div className="card-link">
                    <Link to="/blogs/hyperloops">Explore More</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="cards">
              <Card>
                <Card.Body>
                  <p className="text-secondary mb-2 small">April 3 2019</p>
                  <div className="top-content">
                    <h5>STEEL FABRICATION AND ITS GENERAL APPLICATION </h5>
                    <Card.Text>
                      Let me aware you all that of all the inventions,
                      modifications made in the naturally occurring resources by
                      mankind, STEEL grabs the pinnacle position amongst all. It
                      always plays an important role in shaping, in carving the
                      scenario of a nation.
                    </Card.Text>
                  </div>
                  <hr className="my-3" />
                  <div className="card-link">
                    <Link to="/blogs/hyperloops">Explore More</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceCards;
