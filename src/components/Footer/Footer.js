import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

import logo from "../../assets/images/logo1.png";

const Footer = () => {
  return (
    <footer className="section_padding">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <Image src={logo} style={{ width: "40px" }} />
            <p className="font-italic">
              The Association of Civil Engineers, B.I.T. Sindri established in
              2017 is an assortment of individuals who aim to acquaint you with
              the latest trends in the Civil Engineering field.
            </p>
            <ul className="d-flex mt-4 social-links">
              <li className="list-inline-item">
                <Link to="#" target="_blank" title="twitter">
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#" target="_blank" title="instagram">
                  <FaInstagram />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" target="_blank" title="Twitter">
                  <FaTwitter />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" target="_blank" title="LinkedIn">
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6}>
            {/* <h6 className="text-uppercase font-weight-bold mb-4">
              Usefull Links
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="#">Link</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Link</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Link</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Links</Link>
              </li>
            </ul> */}
          </Col>
          {/* <Col lg={3} md={6}> */}
          {/* <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="#">Login</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Register</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Terms</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Our Products</Link>
              </li>
            </ul> */}
          {/* </Col> */}
          <Col lg={4} md={6}>
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className=" mb-4">Enter your mail to get subscribed</p>
            <div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link bg-white"
                  >
                    <FaPaperPlane style={{ color: "#0d6efd" }} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <p style={{ textAlign: "center" }}>
          Designed by{" "}
          <a
            style={{
              color: "#1890ff",
            }}
            href="https://www.linkedin.com/in/imran-nazir-692abb112/"
          >
            Imran Nazir{" "}
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
