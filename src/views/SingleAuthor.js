import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Card, CardImg} from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import BestSellersSlider from "components/Elements/BestSellersSlider";
import BookCard from "components/Elements/BookCard";
import Footer from "components/Footers/Footer";
import BreadCrumbs from "components/Elements/BreadCrumbs";

class SingleAuthor extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* Bread Crumbs */}
          <BreadCrumbs path="Home > Authors > Jessica Writer" />
          {/* End of Bread Crumbs  */}

          {/* New Releases*/}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="justify-content-center">
                <Col lg="4">
                  <Card className="bg-default shadow border-0 new-release-ad">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col lg="8">
                  <Row className="justify-content-start">
                    <Col lg="12">
                      <small>AUTHOR OF THE MONTH</small>
                      <h2 className="mb-5">Welcome to Bookworm</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <BookCard size="3" />
                    <BookCard size="3" />
                    <BookCard size="3" />
                    <BookCard size="3" />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End New Releases*/}

          {/* Related books  */}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-between align-items-end">
                <h2 className="mt-md mb-5 display-4">Related Books</h2>
              </Row>
              <BestSellersSlider />
            </Container>
          </section>
          {/* End Related books  */}

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

export default SingleAuthor;
