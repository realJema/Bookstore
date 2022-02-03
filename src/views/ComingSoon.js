import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import Footer from "components/Footers/Footer";

class ComingSoon extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* Featured Books */}
          <section className="section section-lg pt-10 mt-6 pb-10">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-center align-items-center">
                <h1 className="mt-md display-1 mb-2">We’re coming soon.</h1>
              </Row>
              <Row className="row-grid justify-content-center text-center mt-0 mb-1 col-md-6 center">
                <h6>
                  Our website is under construction. We’ll be here soon with our
                  new awesome site, subscribe to be notified.
                </h6>
              </Row>
              <Row className="row-grid justify-content-center text-center mt-0 ">
                <h5 className="mt-5">00 Days | 00 Hours | 00 Mins | 00 Secs</h5>
              </Row>
            </Container>
          </section>
          {/* End Featured Books */}

          {/* Join Our Newsletter*/}
          <section className="section section-lg pt-lg-0 bt-3 mt-5">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-center">
                <h2 className="mt-lg mb-2 display-4">
                  <span>Join Our Newsletter</span>
                </h2>
              </Row>
              <Row className="row-grid justify-content-center mt-0">
                <small className="d-block">
                  Signup to be the first to hear about exclusive deals, special
                  offers and upcoming collections
                </small>
              </Row>
              <Row className="row-grid justify-content-center">
                <Col lg="6">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter email for weekly newsletter."
                    required=""
                  />
                </Col>
                <Col lg="2">
                  <Button
                    block
                    className="btn-round newsletter-submit"
                    color="default"
                    size="lg"
                    type="button"
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Join Our Newsletter*/}
        </main>
        <Footer />
      </>
    );
  }
}

export default ComingSoon;
