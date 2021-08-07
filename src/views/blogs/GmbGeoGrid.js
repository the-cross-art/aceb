import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import FaqAccordion from "../components/Faq/FaqAccordion";
import { LinkContainer } from "react-router-bootstrap";
import BannerImg from "../assets/images/reviewbanner.svg";
import GeoGridImg from "../assets/images/geogrid-example-optimised.gif";
import GeoGridStartImg from "../assets/images/geogrid.png";
import "./GmbGeoGrid.css";
import Testimonials from "../components/Testimonials/Testimonials";
import userImg from "../assets/images/userIcon.svg";
import { Link } from "react-router-dom";

const ReviewManagement = () => {
  return (
    <div className="review-management">
      <div className="review-banner section_padding">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={5} sm={12}>
              <h1 className="banner-head text-primary font-weight-bold">
                See Your GMB Rankings In A New Light
              </h1>
              <p className="banner-text">
                Local rankings are nothing more than a single digit. Check out
                your ranking from every corner of your region.
              </p>
              <div className="mt-4">
                <LinkContainer to="#!">
                  <Button className="btn-animation">Get Started</Button>
                </LinkContainer>
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
              <h2>GeoGrid Rank Tracking</h2>
              <Image src={GeoGridImg} fluid />
              <div className="mt-3">
                <p>
                  Several proprietary technologies are integrated into our
                  Geogrid rank tracker to provide visibility and ranking
                  tracking on a local level. This cartographic representation of
                  our geospatial data shows you 3 pack rankings at the most
                  granular level, GPS coordinates concerning each other, and the
                  distance between them.
                </p>
                <p>
                  To provide Google users with the best experience, the company
                  has been changing the way local results are delivered. The
                  results from this have shown that Google's local algorithm
                  emphasizes the importance of proximity in its rankings.
                  Google's proximity detection cannot be guaranteed to be
                  completely accurate, but even if there is a possibility of
                  error, it is hard to find a ranking monitoring service that is
                  more accurate.
                </p>
                <p>
                  You can pull these rankings data from Local Viking in two
                  ways. Using the Google Places API, which you can get direction
                  for free, we show you how to use APIs to your advantage to not
                  run up huge bills. Service Area Businesses can't be tracked
                  with this method.
                </p>
                <p>
                  The other technique is through our amazingly restrictive
                  information gathering strategy (WE ARE NOT SCRAPING GOOGLE)
                  and will feature Service Area Business results just as
                  organizations that are not concealing their location. These
                  mixed outcomes will portray the nearby SERPs. Each arrangement
                  contains sufficient credits to deal with the entirety of your
                  nearby position following necessities.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Additionally, we offer one of the best local reporting options
                  in the industry, allowing you to download these maps into PDF
                  format. Using the Local Viking system, we re-scan geogrids at
                  predetermined intervals and store the results in our system.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding testimonial-section">
        <Container>
          <Row>
            <Col md={4}>
              <Testimonials
                rating={5}
                review_text={
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                image={userImg}
                name={"John Antonio"}
                post={"CEO, XYZ Company"}
              />
            </Col>
            <Col md={4}>
              <Testimonials
                rating={5}
                review_text={
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                image={userImg}
                name={"John Antonio"}
                post={"CEO, XYZ Company"}
              />
            </Col>
            <Col md={4}>
              <Testimonials
                rating={5}
                review_text={
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                image={userImg}
                name={"John Antonio"}
                post={"CEO, XYZ Company"}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding schedules">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h3 className="text-center">
                Easy schedule your GeoGrids to run when you want
              </h3>
              <Image
                src="https://localviking.com/external/assets/img/800x865-1.png"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding  bg-primary">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={5}>
              <h2 className="text-white">
                Start Tracking Your Visibility With Local Viking
              </h2>
            </Col>
            <Col md={5}>
              <Link className="btn btn-warning text-white mr-3">
                Get started
              </Link>
              <Link className="btn bg-white text-primary">Learn More</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding faq-section">
        <Container>
          <div className="faq-title text-center ">
            <h2 className="text-primary">Frequently Asked Questions</h2>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <Row>
            <Col md={6}>
              <FaqAccordion
                header="Can I schedule Automated GeoGrids ?"
                key="1"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                viverra nunc nec, tincidunt felis"
              />
              <FaqAccordion
                header="Can I schedule Automated GeoGrids ?"
                key="1"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                viverra nunc nec, tincidunt felis"
              />
              <FaqAccordion
                header="Can I schedule Automated GeoGrids ?"
                key="1"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                viverra nunc nec, tincidunt felis"
              />
            </Col>
            <Col md={6}>
              <FaqAccordion
                header="Can I schedule Automated GeoGrids ?"
                key="1"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                viverra nunc nec, tincidunt felis"
              />
              <FaqAccordion
                header="Can I schedule Automated GeoGrids ?"
                key="1"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                viverra nunc nec, tincidunt felis"
              />
              <FaqAccordion
                header="Can I schedule Automated GeoGrids ?"
                key="1"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                viverra nunc nec, tincidunt felis"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding geogrid-starter">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Start GeoGrid Tracking</h2>
              <p>
                You can automatically send this aesthetically pleasing report at
                whatever intervals you like by adding the Geogrid to your
                white-label reports. By providing more accurate and unique
                reports to your clients, you will set yourself apart from your
                competitors.
              </p>
              <Link className="btn-animation btn btn-primary" to="#!">
                Run your first geogrid
              </Link>
            </Col>
            <Col md={6}>
              <Image src={GeoGridStartImg} fluid></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ReviewManagement;
