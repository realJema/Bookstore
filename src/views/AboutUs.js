import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Card } from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import Footer from "components/Footers/Footer";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* About Us!*/}
          <section className="section section-lg pt-5 pb-5">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-center align-items-center">
                <h2 className="display-4">About Us!</h2>
              </Row>
            </Container>
          </section>
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile mt--300">
                <div className="px-4">
                  <div className="py-5 text-left">
                    <Row className="justify-content-center">
                      <Col lg="10">
                        <h2 className="mb-5">Welcome to Bookworm</h2>

                        <h5 className="mb-5">
                          “Many desktop publishing packages and web page editors
                          now use Lorem Ipsum as their default model search for
                          eolved over sometimes by accident, sometimes on
                          purpose ”
                        </h5>

                        <h4>What we really do?</h4>
                        <p className="mb-5">
                          Mauris tempus erat laoreet turpis lobortis, eu
                          tincidunt erat fermentum. Aliquam non tincidunt urna.
                          Integer tincidunt nec nisl vitae ullamcorper. Proin
                          sed ultrices erat. Praesent varius ultrices massa at
                          faucibus. Aenean dignissim, orci sed faucibus
                          pharetra, dui mi dignissim tortor, sit amet
                          condimentum mi ligula sit amet augue. Pellentesque
                          vitae eros eget enim mollis placerat. Aliquam non
                          tincidunt urna. Integer tincidunt nec nisl vitae
                          ullamcorper. Proin sed ultrices erat. Praesent varius
                          ultrices massa at faucibus. Aenean dignissim, orci sed
                          faucibus pharetra, dui mi dignissim tortor, sit amet
                          condimentum mi ligula sit amet augue. Pellentesque
                          vitae eros eget enim mollis placerat.
                        </p>
                        <Row className="justify-content-center">
                          <Col lg="6">
                            <h4>Our Vision</h4>
                            <p>
                              Pellentesque sodales augue eget ultricies
                              ultricies. Cum sociis natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Curabitur sagittis ultrices condimentum.
                            </p>
                          </Col>
                          <Col lg="6">
                            <h4>Our Mission</h4>
                            <p>
                              Pellentesque sodales augue eget ultricies
                              ultricies. Cum sociis natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Curabitur sagittis ultrices condimentum.
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="10">
                        <h2 className="mt-2 mt-3">Get in Touch!</h2>
                        <Row className="row-grid justify-content-center">
                          <Col lg="6">
                            <input
                              type="email"
                              className="newsletter-input"
                              placeholder="Enter email for weekly newsletter."
                              required=""
                            />
                          </Col>
                          <Col lg="6">
                            <input
                              type="email"
                              className="newsletter-input"
                              placeholder="Enter email for weekly newsletter."
                              required=""
                            />
                          </Col>
                        </Row>
                        <Row className="row-grid justify-content-center mt-3">
                          <Col lg="12">
                            <textarea
                              type="text"
                              className="newsletter-input"
                              placeholder="Enter email for weekly newsletter."
                              required=""
                            ></textarea>
                          </Col>
                        </Row>
                        <Row className="row-grid justify-content-end mt-3">
                          <Col lg="6">
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
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>

          {/* End About Us!*/}

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

export default AboutUs;
