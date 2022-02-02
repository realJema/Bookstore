import React from "react";
// reactstrap components
import {  Col } from "reactstrap";

class AuthorCard extends React.Component {
  render() {
    return (
      <Col lg={this.props.size ? this.props.size : "12"}>
        <center>
          <img
            alt="..."
            className="img-fluid rounded-circle shadow"
            src={require("assets/img/theme/team-2-800x800.jpg")}
            style={{ width: "150px" }}
          />
          <h6 className="mt-4 mb-0">Andre Aciman</h6>
          <small className="d-block">2 Published Book</small>
        </center>
      </Col>
    );
  }
}

export default AuthorCard;
