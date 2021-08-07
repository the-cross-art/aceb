import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import BannerImg from "../../assets/images/hyperloop.jpg";

import "./GmbGeoGrid.css";
import { Link } from "react-router-dom";

const HyperLoop = () => {
  return (
    <div className="review-management">
      <div className="review-banner section_padding">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={5} sm={12}>
              <h1 className="banner-head text-primary font-weight-bold">
                HyperLoop
              </h1>
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
              <div className="mt-3">
                <p>
                  HYPERLOOP COULD BE A STEP INTO THE MODERN WORLD. IF IT WORKS
                  AS PICTURED, IT COULD REVOLUTIONIZE. WE CAN TRAVEL WITH AN
                  AVERAGE OF 1200 KPH. CONSIDERING INDIA, WE CAN TRAVEL FROM OUR
                  NORTH TO SOUTH IN JUST 2 HOURS. THE CONCEPT OF THE HYPERLOOP
                  IS GIVEN BY THE CEO OF TESLA AND SPACEX, ELON MUSK IN 2013.
                  THE HYPERLOOP CONSISTS OF EVACUATED TUBE AND PASSENGER PODS.
                  THE PODS MOVES WITH ULTRA HIGH SPEED IN THE EVACUATED TUBE. IT
                  IS AN ECO-FRIENDLY MODE OF TRANSPORTATION AS IT DOESN’T
                  CONSUME FUEL. IN EVERY MODE OF TRANSPORT, AIR FRICTION AND AIR
                  DRAG ARE THE BIGGEST SPEED LIMIT PROBLEM, BUT THE HYPERLOOP
                  ALLEVIATES THESE PROBLEMS. IN THE HYPERLOOP SYSTEM, THE INNER
                  SURFACE OF THE TUBE AND THE OUTER SURFACE OF THE PODS HAVE THE
                  SAME MAGNETIC POLE THAT DRAWS THE POD INTO THE AIR AND ITS
                  SPEED FROM AN EXTERNAL LINEAR ELECTRIC MOTOR AVAILABLE IN THE
                  PODS. SOME LOW-PRESSURE AIR HAS NOT BEEN COMPLETELY SUCKED
                  FROM THE PIPE. THE MOTOR IN FRONT OF THE PIPE ROTATES IN THE
                  REVERSE DIRECTION SO THAT THE AIR TRAIL CAN BE USED AS A
                  BRAKE. HYPERLOOP IS IMMUNE TO EARTHQUAKES AND CLIMATE CHANGE.
                  THE TUBE IS MADE BY COMBINING SMALLER CELLS. EACH CELL HAVE A
                  SHOCK ABSORBER THAT PREVENTS FROM EARTHQUAKE DAMAGE TO A LARGE
                  EXTENT. IT IS MUCH SAFER THAN FLIGHTS.IT IS ESTIMATED THAT IT
                  WILL COST 1/10 OF THE REGULAR RAILWAY TRACKS. IT WILL BE THE
                  FASTEST ON LAND TRANSPORT. AS IT IS FREE FROM THE PROBLEMS
                  LIKE AIR DRAG AND FRICTION, IT WILL COST LOW IN MAINTAINANCE
                  THAT ENSURE IT WILL BE POCKET FRIENDLY. IT DOESN’T NEED MUCH
                  POWER TO THAT OF OTHER TRANSPORT. IT USES SOLAR ENERGY; SOLAR
                  PANELS ARE INSTALLED ON TOP OF TUBE. A PERSON CAN WORK IN
                  ANOTHER COUNTRY AND CAN REGURARLY JOURNEY AND PRE-TRAVEL AS IT
                  DOESN’T INFLUENCE THE BUDGET. IF IT WORKS IN ITS FULL
                  POTENTIAL TRAVELLING WILL NO LONGER BE A BIG DEAL. HYPERLOOP
                  REQUIRES HIGH INVESTMENT A LOT OF TREE WILL BE CUT, ANY DEFECT
                  RESULTS IN SEVERE PROBLEMS BUT THESE PROBLEMS CAN BE REDUCE.
                  THIS CAN EASILY WORK WITHIN A COUNTRY BUT CONNECTING GLOBE CAN
                  BE A PROBLEM. GLOBAL CONNECTION CAN’T BE DONE WITHOUT PEACE
                  AND HARMONY. VIRGIN HYPERLOOP ONE, HTT, TRANSPOD, ARRIVO,
                  HYPERLOOP ALPHA ALL ARE WORKING IN THIS FIELD BUT VIRGIN
                  HYPERLOOP IS LEADING. THEY ALREADY DID THE HUMAN TRIAL AND IT
                  WAS SUCCESFULL. WE CAN IMAGINE IT RUNNING THROUGH OUR CITIES
                  WITHIN 10 YEARS.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HyperLoop;
