import React from "react";
import { v4 as uuidv4 } from "uuid";
// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
} from "reactstrap";

class BookCard extends React.Component {
  render() {
    const image = this.props.cover ? this.props.cover : "Give and Take"
    return (
      <Col className="book-card arb">
        <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
          <CardImg
            top
            alt="..."
            src={require("assets/img/covers/" + image + ".jpg")}
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
              {this.props.title ? this.props.title : "title"}
            </h6>
            <p className="book-card-author">author</p>
            <Row className="align-items-center">
              <Col sm="9">
                <small className="text-uppercase text-muted font-weight-bold">
                  <h5 className="book-card-price">{this.props.price ? this.props.price : "10000"} FCFA</h5>
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

class BookCardLarge2 extends React.Component {
  render() {
    return (
      <Col
        lg={this.props.size ? this.props.size : "2"}
        className="book-card-large arb"
      >
        <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
          <Row className="col-12">
            <Col lg="2">
              <CardImg
                top
                alt="..."
                src={require("assets/img/theme/img-1-1200x1000.jpg")}
                className="book-card-img"
              />
            </Col>
            <Col lg="7">
              {" "}
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
                <small className="mt-2 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </small>
                <Row className="align-items-center">
                  <Col sm="9">
                    <small className="text-uppercase text-muted font-weight-bold">
                      <h5 className="book-card-price">$14.5</h5>
                    </small>
                  </Col>
                </Row>
              </CardBody>
            </Col>
            <Col sm="3" className="list-option my-auto">
              <i className="fa fa-heart-o"></i>
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }
}


class BookCardMin extends React.Component {
  render() {
    return (
      <Card className="border-0 col mb-2 justify-content-between align-items-center py-1 px-0">
        <Row>
          <Col lg="3" className="px-0">
            <CardImg
              top
              alt="..."
              src={require("assets/img/theme/img-1-1200x1000.jpg")}
              className="book-card-min"
            />
          </Col>
          <Col lg="9" className="pr-0">
            <CardBody className="px-0 py-0 full-width">
              <h6>Hardcover, Kindle, Paperback</h6>
              <p className="book-card-author">$14.00</p>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default BookCard;
