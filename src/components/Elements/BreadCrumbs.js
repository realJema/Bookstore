import React from "react";
// reactstrap components
import { Col, Container, Row } from "reactstrap";

class BreadCrumbs extends React.Component {
  render() {
    return (
      <section className="section section-components mb-5 pb-3 pt-3 bb-3">
        <Container className="col-md-11 col-lg-11">
          <Row>
            <Col>
              <h6>
                <small>{this.props.path}</small>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BreadCrumbs;
