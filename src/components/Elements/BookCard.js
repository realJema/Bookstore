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
