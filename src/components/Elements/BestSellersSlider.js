import React, { Component } from "react";
import Slider from "react-slick";

import { Card, CardBody, CardImg, Row, Col } from "reactstrap";
export default class BestSellersSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
        swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
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
      <div className="book-card-container">
        <Slider {...settings}>
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
          <BookCardSlide size="12" />
        </Slider>
      </div>
    );
  }
}


class BookCardSlide extends React.Component {
  render() {
    return (
      <Col
        lg={this.props.size ? this.props.size : "2"}
        className="book-card arb"
      >
        <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
          <CardImg
            top
            alt="..."
            src={require("assets/img/theme/img-1-1200x1000.jpg")}
            className="book-card-img"
          />

          <CardBody className="px-0 pb-0 full-width">
            <small>
              <span>
                Hardcover, Kindle, Paperback{" "}
                {this.props.size ? this.props.size : "2"}{" "}
              </span>
            </small>
            <h6 className="book-card-title text-uppercase mb-0 mt-1">
              Download Argon book buy me{" "}
            </h6>
            <p className="book-card-author">author</p>
            <Row className="align-items-center">
              <Col sm="9">
                <small className="text-uppercase text-muted font-weight-bold">
                  <h5 className="book-card-price">$14.5</h5>
                </small>
              </Col>
              <Col sm="3">
                <i className="fa fa-heart-o"></i>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
