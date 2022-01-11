import React from "react";
// import axios from "axios";

// reactstrap components
// import { Card, CardImg, Container, Row, Col } from "reactstrap";

// core components
import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";

class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
        </main>
      </>
    );
  }
}

export default Billboard;
