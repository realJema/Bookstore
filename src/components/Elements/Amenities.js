import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
} from "reactstrap";

class Amenities extends React.Component {
  render() {
    return (
      <Card className="border-0 col mb-2 justify-content-between align-items-center py-1  pb-3 arb">
        <Row className="col-md-12">
          <Col lg="3" className="px-0">
            <h5>
              <i className="fa fa-chevron-right"></i>
            </h5>
          </Col>
          <Col lg="9">
            {" "}
            <CardBody className="px-0 py-0 full-width">
              <p className="book-card-author">Orders over $100</p>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Amenities;
