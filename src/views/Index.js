import React from "react";
// import axios from "axios";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import Adslider from "components/Elements/Slider";
import BookCard from "components/Elements/BookCard";
import BookCardLarge from "components/Elements/BookCardLarge";

class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <Adslider />
        <main ref="main">
          {/* Featured Categories  */}
          <section className="section section-components pb-0 pt-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-between align-items-end">
                <h2 className="mt-md mb-5 display-4">
                  <span>Featured Categories</span>
                </h2>
                <h6 className="mt-lg mb-5">
                  <span>All Categories</span>{" "}
                  <i className="fa fa-chevron-right"></i>
                </h6>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="2" className="featured-category">
                      <Card
                        className="col mb-5"
                        style={{
                          backgroundColor: "#faf1ff",
                          border: "#faf1ff",
                        }}
                      >
                        <CardBody>
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-satisfied" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Arts & Photography
                          </h6>
                          <p className="text-primary ">Shop Now</p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2" className="featured-category">
                      <Card
                        className="col mb-5"
                        style={{
                          backgroundColor: "#faf4eb",
                          border: "#faf4eb",
                        }}
                      >
                        <CardBody>
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-shop" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Food & Drink
                          </h6>
                          <p className="text-primary">Shop Now</p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2" className="featured-category">
                      <Card
                        className="col mb-5"
                        style={{
                          backgroundColor: "#f4e6e5",
                          border: "#f4e6e5",
                        }}
                      >
                        <CardBody>
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-diamond" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Romance
                          </h6>
                          <p className="text-primary text-uppercase">
                            Shop Now
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2" className="featured-category">
                      <Card
                        className="col mb-5"
                        style={{
                          backgroundColor: "#e6f2f4",
                          border: "#e6f2f4",
                        }}
                      >
                        <CardBody>
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-like-2" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Health
                          </h6>
                          <p className="text-primary text-uppercase">
                            Shop Now
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2" className="featured-category">
                      <Card
                        className="col mb-5"
                        style={{
                          backgroundColor: "#fff6f6",
                          border: "#fff6f6",
                        }}
                      >
                        <CardBody>
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-hat-3" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Biography
                          </h6>
                          <p className="text-primary text-uppercase">
                            Shop Now
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Featured Categories */}

          {/* Best Sellers books  */}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-between align-items-end">
                <h2 className="mt-md mb-5 display-4">
                  <span>Bestselling Books</span>
                </h2>
                <h6 className="mt-lg mb-5">
                  <span>View All</span> <i className="fa fa-chevron-right"></i>
                </h6>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid book-card-container  featured-container">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Best Sellers books  */}

          {/* Featured Books */}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-center align-items-center">
                <h2 className="mt-md display-4">
                  <span>Featured Books</span>
                </h2>
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
                  <Row className="row-grid book-card-container">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End Featured Books */}

          {/* New Releases*/}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-between align-items-end">
                <Col lg="4">
                  <h2 className="mt-md mb-5 display-4">
                    <span>New Releases</span>
                  </h2>
                </Col>
                <Col lg="3">
                  <Row className="row-grid">
                    <Col className="px-0 text-right">
                      <h6 className="mt-lg mb-5 justify-content-right">
                        <span>History</span>{" "}
                      </h6>
                    </Col>
                    <Col className="px-0 text-right">
                      <h6 className="mt-lg mb-5 justify-content-right">
                        <span>Science</span>{" "}
                      </h6>
                    </Col>
                    <Col className="px-0 text-right">
                      <h6 className="mt-lg mb-5 justify-content-right">
                        <span>Romance</span>{" "}
                      </h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="5">
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
                <Col lg="7">
                  <Row className="row-grid">
                    <BookCard size="3" />
                    <BookCard size="3" />
                    <BookCard size="3" />
                    <BookCard size="3" />
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

          {/* Biography Books*/}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-11 col-lg-11">
              <Row className="row-grid justify-content-between align-items-end">
                <h2 className="mt-md mb-5 display-4">
                  <span>Biography Books</span>
                </h2>
                <h6 className="mt-lg mb-5">
                  <span>View All</span> <i className="fa fa-chevron-right"></i>
                </h6>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid book-card-container">
                    <BookCardLarge size="4" />
                    <BookCardLarge size="4" />
                    <BookCardLarge size="4" />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End New Releases*/}

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>
      </>
    );
  }
}

export default Billboard;
