import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PostImg from "../../assets/images/posting.svg";
import TrackImg from "../../assets/images/track.svg";
import ManageImg from "../../assets/images/management.svg";

const Info = () => {
  return (
    <div className="info-section section_padding">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <div className="text-info-section">
              <div className="number mb-4">
                <span>01</span>
              </div>
              <div className="text">
                <h4>GMB Post Scheduling</h4>
                <p>
                  One dashboard lets you create posts for every property in your
                  GMB network.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Image src={PostImg} className="img-fluid" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <Image src={TrackImg} className="img-fluid" />
          </Col>
          <Col md={6} sm={12}>
            <div className="text-info-section">
              <div className="number mb-4">
                <span>02</span>
              </div>
              <div className="text">
                <h4>Track Local Rankings.</h4>
                <p>
                  Ensure your Google My Business listing performs well in local
                  search results.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <div className="text-info-section">
              <div className="number mb-4">
                <span>03</span>
              </div>
              <div className="text">
                <h4>GMB Management</h4>
                <p>
                  All of your property's GMB information can be edited and
                  synced in a place.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Image src={ManageImg} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
