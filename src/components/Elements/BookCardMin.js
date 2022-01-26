import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
} from "reactstrap";

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
                  <h6>
                    Hardcover, Kindle, Paperback
                  </h6>
                <p className="book-card-author">$14.00</p>
              </CardBody>
            </Col>
          </Row>
        </Card>
    );
  }
}

export default BookCardMin;
