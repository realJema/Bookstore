import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import Footer from "components/Footers/Footer";
import BreadCrumbs from "components/Elements/BreadCrumbs";

class AuthorsList extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* Bread Crumbs */}
          <BreadCrumbs path="Home > Authors" />
          {/* End of Bread Crumbs  */}
          {/* Favorite Authors*/}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-center align-items-center">
                <h2 className="display-4">Featured Authors</h2>
              </Row>
              <Row className="row-grid justify-content-center text-center mt-3 mb-5">
                <Col lg="2">
                  <h6 className="">
                    <span>Featured</span>
                  </h6>
                </Col>
                <Col lg="2">
                  <h6 className="">
                    <span>On Sale</span>
                  </h6>
                </Col>
                <Col lg="2">
                  <h6 className="">
                    <span>Most Viewed</span>
                  </h6>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Favorite Authors*/}

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

class AuthorCard extends React.Component {
  render() {
    return (
      <Col lg={3} className="mb-5 mt-2">
        <center>
          <img
            alt="..."
            className="img-fluid rounded-circle shadow"
            src={require("assets/img/theme/team-2-800x800.jpg")}
            style={{ width: "250px" }}
          />
          <h6 className="mt-4 mb-0">Andre Aciman</h6>
          <small className="d-block">2 Published Book</small>
        </center>
      </Col>
    );
  }
}

export default AuthorsList;
