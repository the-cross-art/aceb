import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import BanerImg from "../assets/images/schedule.svg";
import BulkImg from "../assets/images/bulkpost.svg";
import EnterpriseImg from "../assets/images/managemententerprise.svg";
import FaqAccordion from "../components/Faq/FaqAccordion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Posting = () => {
  return (
    <div className="posting">
      <div className="posting-banner section_padding">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="">
                Schedule, Interlink, and Syndicate Your GMB Posts.
              </h1>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col md={6}>
              <Image fluid src={BanerImg} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding">
        <Container>
          <Row className="justify-content-center pb-4">
            <Col md={6}>
              <div className="text-center">
                <h2 className="text-primary ">
                  Why <span className="font-weight-bold">Automate</span> Your
                  GMB Posting?
                </h2>
                <p>
                  By scheduling posts, you allow your Google My Business
                  properties to publish a constant stream of content for your
                  customers to see and interact.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={7}>
              <Image src={EnterpriseImg} fluid />
            </Col>
            <Col md={5}>
              <h3 className="text-primary">Enterprise GMB Management</h3>
              <p className="text-secondary">
                Our management dashboards integrate all of your Google My
                Business Gmail accounts and help you manage all of your GMB
                properties. We have been able to manage hundreds of GMBs for
                clients.
              </p>
              <div className="text-center">
                <Link to="#!" className="text-link-with-arrow">
                  <div className="d-flex">
                    <span className="text"> Get started with the company</span>
                    <span className="arrow">
                      <BsArrowRight />
                    </span>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5 get-started-bar text-center bg-primary">
        <Container>
          <span className="text-white">
            <span className="font-weight-bold">
              Google My Business Post Scheduling{" "}
            </span>
            – simple GMB management.
          </span>

          <Link className="pricing-btn ml-3">Get started positing</Link>
        </Container>
      </div>
      <div className="section_padding">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <h3 className="text-primary">Bulk Posting</h3>
              <p className="text-secondary">
                The Local Viking dashboard allows you to upload bulk posts via
                CSV or directly. You can schedule an unlimited number of posts
                simultaneously
              </p>
              <div className="text-center">
                <Link to="#!" className="text-link-with-arrow">
                  <div className="d-flex">
                    <span className="text"> Get started with the company</span>
                    <span className="arrow">
                      <BsArrowRight />
                    </span>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={7}>
              <Image src={BulkImg} fluid />
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
    </div>
  );
};

export default Posting;
