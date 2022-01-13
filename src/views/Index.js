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

class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
                  <Row className="row-grid book-card-container">
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
