import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import BookCardMin from "components/Elements/BookCardMin";
import Amenities from "components/Elements/Amenities";
import Footer from "components/Footers/Footer";
import BreadCrumbs from "components/Elements/BreadCrumbs";

class Cart extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* Bread Crumbs */}
          <BreadCrumbs path="Home > Checkout" />
          {/* End of Bread Crumbs  */}

          {/* Book Details */}
          <section className="section section-lg pt-lg-0 pb-0">
            <Container className="col-md-12 col-lg-12">
              <Row className="row-grid justify-content-center">
                <Col lg="9">
                  <Row className="row-grid justify-content-center mb-5"></Row>
                </Col>
                <Col lg="3">
                  <Row className="row-grid justify-content-between col-md-10 arb py-4 px-4">
                    <Col lg="12">
                      <BookCardMin />
                      <BookCardMin />
                      <BookCardMin />
                    </Col>
                  </Row>
                  <Row className="row-grid justify-content-between col-md-10 arb py-4 px-2 mt-3">
                    <Col lg="12">
                      <Amenities />
                      <Amenities />
                      <Amenities />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Book Details */}

          {/* Join Our Newsletter*/}
          <section className="section section-lg pt-lg-0 bt-3">
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


export default Cart;
