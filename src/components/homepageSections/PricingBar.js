import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const PricingBar = () => {
  return (
    <div className="pricing-bar p-4 text-center">
      <Container>
        <span className="text-white">
          <span className="font-weight-bold">OUR PATRONAGE</span>
        </span>
        {/* <Link className="pricing-btn ml-3">See Pricing</Link> */}
      </Container>
    </div>
  );
};

export default PricingBar;
