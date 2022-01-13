import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Card,
  Button,
  CardBody,
  Nav,
  CardImg,
  Row,
  Col,
} from "reactstrap";

class BookCard extends React.Component {
  render() {
    return (
      <Col lg={this.props.size? this.props.size: "2"} className="book-card">
        <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
          <CardImg
            top
            alt="..."
            src={require("assets/img/theme/img-1-1200x1000.jpg")}
            className="book-card-img"
          />

          <CardBody className="px-0 pb-0 full-width">
            <small>
              <span>Hardcover, Kindle, Paperback {this.props.size? this.props.size: "2"} </span>
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

export default BookCard;
