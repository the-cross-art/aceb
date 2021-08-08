import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "../../views/GmbGeoGrid.css";
import Testimonials from "../../components/Testimonials/Testimonials";
import userImg from "../../assets/images/Director1.jpg";
import userImg2 from "../../assets/images/ranvijay.png";

import { Link } from "react-router-dom";

const TestimonialsHome = () => {
  return (
    <div className="review-management">
      <div className="section_padding testimonial-section">
        <Container>
          <Row>
            <Col md={6}>
              <Testimonials
                rating={5}
                review_text={
                  " Association of Civil Engineers ( ACE) is a great initiative taken by the students of the Civil Engineering department. This venture will ensure that students of Civil Engineering get an insightful learning of their subjects, understand the practical applications and get industry ready. I heartily congratulate the students and the Head of Department, Civil engineering for the work they are doing. All the best! "
                }
                image={userImg}
                name={"prof. Dr. D.K. Singh"}
                post={"Director BIT Sindri"}
              />
            </Col>
            <Col md={6}>
              <Testimonials
                rating={5}
                review_text={
                  " ACE is a great initiative taken by the Civil Engineering students of BIT Sindri. I hope this initiative will help them get a greater look and better understanding of their subjects, with which they accomplish greater heights. I congratulate all the students and wish them luck for the future."
                }
                image={userImg2}
                name={"Dr. Ranvijay Singh"}
                post={"HOD, Civil Engg Department BIT Sindri"}
              />
            </Col>
            {/* <Col md={4}>
              <Testimonials
                rating={5}
                review_text={
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                image={userImg}
                name={"John Antonio"}
                post={"CEO, XYZ Company"}
              />
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialsHome;
