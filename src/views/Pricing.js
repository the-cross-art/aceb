import React from "react";
import "./Pricing.css";
import MonthlyPricing from "../components/PricingSlider/MonthlyPricing";
import YearlyPricing from "../components/PricingSlider/YearlyPricing";
import { Container, Row, Col } from "react-bootstrap";
import { BsFilePost, BsCloudUpload } from "react-icons/bs";
import { AiOutlineNotification } from "react-icons/ai";
import { FaGlobe, FaChartPie, FaSearchLocation } from "react-icons/fa";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

const Pricing = () => {
  return (
    <div className="pricing_section">
      <div className="section_padding background-gradient">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center text-white">
                GMB software that's affordable for businesses of all sizes.
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={12}>
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Monthly" key="1">
                  <MonthlyPricing />
                </TabPane>
                <TabPane tab="Yearly" key="2">
                  <YearlyPricing />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pricingFaq section_padding">
        <Container>
          <h2 className="text-center text-primary mb-5">
            Frequently Asked Questions
          </h2>
          <Row>
            <Col md={6}>
              <div className="py-2">
                <h6>Can I cancel at anytime?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                  viverra nunc nec, tincidunt felis
                </p>
              </div>
              <div className="py-2">
                <h6>How does pricing work?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis.
                </p>
              </div>
              <div className="py-2">
                <h6>Can I Add Sub Users?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis.
                </p>
              </div>
              <div className="py-2">
                <h6>Is Safe To Use?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="py-2">
                <h6>Can I cancel at anytime?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis. Phasellus vel magna tincidunt,
                  viverra nunc nec, tincidunt felis
                </p>
              </div>
              <div className="py-2">
                <h6>Do you have a free trial?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis.
                </p>
              </div>
              <div className="py-2">
                <h6>Is there a moneyback guarantee?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis.
                </p>
              </div>
              <div className="py-2">
                <h6>Do you have support?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  maximus eu erat ac iaculis.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding management-features">
        <Container>
          <h2 className="text-primary text-center mb-5">
            GMB Management Features
          </h2>
          <Row>
            <Col md={4}>
              <div className="features mb-3">
                <div className="icon">
                  <BsFilePost />
                </div>
                <div className="details">
                  <p>
                    Take your GMB posting to the next level with scheduled
                    posts, recurring posts, automatic daisy chaining and spintax
                    support.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="features mb-3">
                <div className="icon">
                  <FaGlobe />
                </div>
                <div className="details">
                  <p>
                    Visualize your locations ranking across a geography with the
                    GeoGrid Rank Tracking feature that makes use of the Google
                    Places API.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="features mb-3">
                <div className="icon">
                  <FaChartPie />
                </div>
                <div className="details">
                  <p>
                    Compare your location insights by date range so you can
                    definitively show how your visibility is improving over
                    time.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="features mb-3">
                <div className="icon">
                  <FaSearchLocation />
                </div>
                <div className="details">
                  <p>
                    Alongside our GeoGrid Rank Tracking is our traditional rank
                    tracking built on a credit system for you to track organic
                    and local positions.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="features mb-3">
                <div className="icon">
                  <AiOutlineNotification />
                </div>
                <div className="details">
                  <p>
                    Get instant suspension notification when any of your
                    locations are disabled by Google so you can remedy issues as
                    quickly as possible.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="features mb-3">
                <div className="icon">
                  <BsCloudUpload />
                </div>
                <div className="details">
                  <p>
                    Manage your locations' media with our built in library so
                    you can quickly upload images and videos for your potential
                    customers to see.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding join-button-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="text-center">
                <h2 className="mb-5">
                  Join over <span className="text-primary">100,000 </span>{" "}
                  managed locations in Our Company.
                </h2>
                <Link to="!#" className="btn btn-primary btn-animation">
                  Get Started Managing Yours
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;
