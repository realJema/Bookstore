import React from "react";
import Select from "react-select";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import BookCard from "components/Elements/BookCard";
import BestSellersSlider from "components/Elements/BestSellersSlider";
import BookCardLarge2 from "components/Elements/BookCardLarge2";
import Footer from "components/Footers/Footer";

class SingleProduct extends React.Component {
  render() {
    const options = [
      { value: "Hardcover", label: "Hard Cover" },
      { value: "Kindle", label: "Kindle" },
    ];
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
          <section className="section section-lg pt-lg-0 mb-5">
            <Container className="col-md-12 col-lg-12">
              <Row className="row-grid justify-content-center">
                <Col lg="9">
                  <Row className="row-grid justify-content-between mb-5">
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
                      <Row>
                        <Col lg="8">
                          <Select
                            className="format-dropdown"
                            options={options}
                          />
                        </Col>
                        <Col lg="4">
                          <Button
                            className="btn-1"
                            color="primary"
                            outline
                            type="button"
                          >
                            Add to Cart
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="row-grid justify-content-between col-md-12 bt-3">
                    <Col lg="4" className="product-details">
                      <ul className="filter">
                        <li>Arts & Photography</li>
                        <li>Baby</li>
                        <li>Biographies & Memoirs</li>
                        <li>Uncategorized</li>
                      </ul>
                    </Col>
                    <Col lg="8" className="product-details-descr">
                      <p>
                        We aim to show you accurate product information.
                        Manufacturers, suppliers and others provide what you see
                        here, and we have not verified it. See our disclaimer #1
                        New York Times Bestseller A Reese Witherspoon x Hello
                        Sunshine Book Club Pick “I can’t even express how much I
                        love this book! I didn’t want this story to end!”–Reese
                        Witherspoon “Painfully beautiful.”–The New York Times
                        Book Review “Perfect for fans of Barbara
                        Kingsolver.”–Bustle For years, rumors of the “Marsh
                        Girl” have haunted Barkley Cove, a quiet town on the
                        North Carolina coast. So in late 1969, when handsome
                        Chase Andrews is found dead, the locals immediately
                        suspect Kya Clark, the so-called Marsh Girl. But Kya is
                        not what they say. Sensitive and intelligent, she has
                        survived for years alone in the marsh that she calls
                        home, finding friends in the gulls and lessons in the
                        sand. Then the time comes when she yearns to be touched
                        and loved. When two young men from town become intrigued
                        by her wild beauty, Kya opens herself to a new
                        life–until the unthinkable happens. Perfect for fans of
                        Barbara Kingsolver and Karen Russell, Where the Crawdads
                        Sing is at once an exquisite ode to the natural world, a
                        heartbreaking coming-of-age story, and a surprising tale
                        of possible murder. Owens reminds us that we are forever
                        shaped by the children we once were, and that we are all
                        subject to the beautiful and violent secrets that nature
                        keeps WHERE THE CRAWDADS LP
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg="3"></Col>
              </Row>
              <Row className="row-grid justify-content-center center col-md-11">
                <h2 className="mb-5 display-4 left">Related Books</h2>
                <Col>
                  <BestSellersSlider />
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
