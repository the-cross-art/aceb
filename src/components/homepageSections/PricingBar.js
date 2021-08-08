import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const PricingBar = () => {
  return (
    <div className="pricing-bar section_padding text-center">
      <Container>
        <span className="text-white">
          <span className="font-weight-bold">OUR</span> PATRONAGE
        </span>
        {/* <Link className="pricing-btn ml-3">See Pricing</Link> */}
      </Container>
    </div>
  );
};

export default PricingBar;
