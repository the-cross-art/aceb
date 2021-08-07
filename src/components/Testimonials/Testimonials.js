import React from "react";
import { Card, Image } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./Testimonials.css";

const Testimonials = (props) => {
  return (
    <div className="testimonials">
      <Card>
        <Card.Body>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={props.rating}
            editing={false}
          />
          <Card.Text>{props.review_text}</Card.Text>
          <div className="bottom-testimonial">
            <div className="d-flex align-items-center">
              <div className="icon">
                <Image
                  style={{ borderRadius: "50px" }}
                  fluid
                  src={props.image}
                />
              </div>
              <div className="user-details">
                <h6>{props.name}</h6>
                <p>{props.post}</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Testimonials;
