import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInfoCircle } from "react-icons/fa/";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class MonthlyPricing extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Card className="pricing-cards">
              <Card.Body>
                <div className="text-center">
                  <Card.Title>Single</Card.Title>
                  <div className="pricing">
                    <span>$</span> <span>20</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="px-2">
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1</b> Gb listing
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> GMB Posts
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> Account
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1600</b> Keywords Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>7500</b> GeoGrid Credits
                      </p>
                    </Media.Body>
                  </Media>
                </div>
                <div className="mt-4 text-center">
                  <Link className="btn btn-primary" to="#!">
                    Get Started
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="pricing-cards">
              <Card.Body>
                <div className="text-center">
                  <Card.Title>Starter</Card.Title>
                  <div className="pricing">
                    <span>$</span> <span>39</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="px-2">
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1</b> Gb listing
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> GMB Posts
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> Account
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1600</b> Keywords Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>7500</b> GeoGrid Credits
                      </p>
                    </Media.Body>
                  </Media>
                </div>
                <div className="mt-4 text-center">
                  <Link className="btn btn-primary" to="#!">
                    Get Started
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="pricing-cards">
              <Card.Body>
                <div className="text-center">
                  <Card.Title>Pro</Card.Title>
                  <div className="pricing">
                    <span>$</span> <span>69</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="px-2">
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1</b> Gb listing
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> GMB Posts
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> Account
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1600</b> Keywords Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>7500</b> GeoGrid Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>White Label Reporting</p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>GeoGrid Widget</p>
                    </Media.Body>
                  </Media>
                </div>
                <div className="mt-4 text-center">
                  <Link className="btn btn-primary" to="#!">
                    Get Started
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="pricing-cards">
              <Card.Body>
                <div className="text-center">
                  <Card.Title>Agency</Card.Title>
                  <div className="pricing">
                    <span>$</span> <span>99</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="px-2">
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1</b> Gb listing
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> GMB Posts
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> Account
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1600</b> Keywords Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>7500</b> GeoGrid Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>White Label Reporting</p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>GeoGrid Widget</p>
                    </Media.Body>
                  </Media>
                </div>
                <div className="mt-4 text-center">
                  <Link className="btn btn-primary" to="#!">
                    Get Started
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="pricing-cards">
              <Card.Body>
                <div className="text-center">
                  <Card.Title>Enterprise</Card.Title>
                  <div className="pricing">
                    <span>$</span> <span>149</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="px-2">
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1</b> Gb listing
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> GMB Posts
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>&#x221e;</b> Account
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>1600</b> Keywords Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>
                        <b>7500</b> GeoGrid Credits
                      </p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>White Label Reporting</p>
                    </Media.Body>
                  </Media>
                  <Media className="justify-content-center">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <Media.Body>
                      <p>GeoGrid Widget</p>
                    </Media.Body>
                  </Media>
                </div>
                <div className="mt-4 text-center">
                  <Link className="btn btn-primary" to="#!">
                    Get Started
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
