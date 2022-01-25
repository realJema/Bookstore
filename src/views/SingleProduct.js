import React from "react";
import Select from "react-select";

// reactstrap components
import { Button, Container, Row, Col, Card, CardImg, CardBody} from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import BookCard from "components/Elements/BookCard";
import RecommendedBooks from "components/Elements/RecommendedBooks";
import BookCardLarge2 from "components/Elements/BookCardLarge2";
import Footer from "components/Footers/Footer";

class SingleProduct extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* Bread Crumbs */}
          <section className="section section-components mb-5 pb-3 pt-3 bb-3">
            <Container className="col-md-11 col-lg-11">
              <Row>
                <Col>
                  <h6>
                    <small>
                      Home > Mystery > The Lost Colony (The Long Winter Trilogy
                      Book 3)
                    </small>
                  </h6>
                </Col>
              </Row>
            </Container>
          </section>
          {/* End of Bread Crumbs  */}

          {/* Book Details */}
          <section className="section section-lg pt-lg-0">
            <Container className="col-md-12 col-lg-12">
              <Row className="row-grid justify-content-center">
                <Col lg="9">
                  <Row className="row-grid justify-content-between">
                    <Col lg="6">
                      <center>
                        <a
                          href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                          id="tooltip255035741"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="product-image"
                            src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          />
                        </a>
                      </center>
                    </Col>
                    <Col lg="6">
                      <h2 className="text-uppercase mb-0 mt-1 display-3">
                        Download Argon book buy me{" "}
                      </h2>
                      <span>Hardcover, Kindle, Paperback</span>
                      <h5 className="display-4 mt-3 mb-3">$14.5</h5>
                      <p className="mt-2 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                      </p>
                      <small>Book Format</small>
                      <select className="format-dropdown ">
                        <option value="hide">Default Sorting</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                    </Col>
                  </Row>
                </Col>
                <Col lg="3"></Col>
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
                <small class="d-block">
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

class FilterElement extends React.Component {
  render() {
    return (
      <Row className="filter-option">
        <Col lg="10">
          <span>{this.props.name}</span>
        </Col>
        <Col lg="2">
          {" "}
          <span>({this.props.qty ? this.props.qty : "0"})</span>
        </Col>
      </Row>
    );
  }
}
class GridDisplay extends React.Component {
  render() {
    return (
      <>
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
        <BookCard size="3" />
      </>
    );
  }
}
class ListDisplay extends React.Component {
  render() {
    return (
      <>
        <BookCardLarge2 size="12" />
        <BookCardLarge2 size="12" />
        <BookCardLarge2 size="12" />
        <BookCardLarge2 size="12" />
        <BookCardLarge2 size="12" />
        <BookCardLarge2 size="12" />
        <BookCardLarge2 size="12" />
        <BookCardLarge2 size="12" />
      </>
    );
  }
}

export default SingleProduct;
