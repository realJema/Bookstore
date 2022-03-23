import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import BestSellersSlider from "components/Elements/BestSellersSlider";
import BookCardMin from "components/Elements/BookCard";
import Amenities from "components/Elements/Amenities";
import Footer from "components/Footers/Footer";
import BreadCrumbs from "components/Elements/BreadCrumbs";

function SingleProduct(props) {
    const books = useStoreState((state) => state.books);
    let thebook = books.find((book) => book.id === props.location.state.bookId);
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* Bread Crumbs */}
          <BreadCrumbs path="Home > Mystery > The Lost Colony (The Long Winter Trilogy Book 3)" />
          {/* End of Bread Crumbs  */}

          {/* Book Details */}
          <section className="section section-lg pt-lg-0 pb-0">
            <Container className="col-md-12 col-lg-12">
              <Row className="row-grid justify-content-center">
                <Col lg="9">
                  <Row className="row-grid justify-content-center mb-5">
                    <Col lg="6">
                      <center>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            alt="..."
                            className="product-image"
                            src={require("assets/img/covers/" + thebook.cover + ".jpg")}
                          />
                        </a>
                      </center>
                    </Col>
                    <Col lg="5">
                      <h2 className="text-uppercase mb-0 mt-1 display-3">
                        {thebook.title}
                      </h2>
                      <span>Hardcover, Kindle, Paperback</span>
                      <h5 className="display-4 mt-3 mb-3">{thebook.price} FCFA</h5>
                      <p className="mt-2 mb-5">{thebook.subtitle}</p>
                      <small>Book Format</small>
                      <Row>
                        <Col lg="7">
                          <select className="select-product">
                            <option value="hide">Default Sorting</option>
                            <option value="january">January</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                          </select>
                        </Col>
                        <Col lg="5">
                          <a
                            href="https://google.com"
                            className="btn btn-colour-1"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
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
                        {thebook.description}
                      </p>
                    </Col>
                  </Row>
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


export default SingleProduct;
