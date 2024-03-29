import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
} from "reactstrap";

import { useStoreState, useStoreActions } from "easy-peasy";
// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import RecommendedBooks from "components/Elements/RecommendedBooks";
import BreadCrumbs from "components/Elements/BreadCrumbs";
import Footer from "components/Footers/Footer";

function Shop() {
  const settings = useStoreState((state) => state.settings);
  const books = useStoreState((state) => state.books);
  const users = useStoreState((state) => state.users);
  const categories = useStoreState((state) => state.categories);
  const { fetchData, toggleDisplay, toggleFilterCat, clearCatFilter } =
    useStoreActions((actions) => ({
      fetchData: actions.fetchData,
      toggleDisplay: actions.toggleDisplay,
      toggleFilterCat: actions.toggleFilterCat,
      clearCatFilter: actions.clearCatFilter,
    }));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Topbar />
      <MainNavbar />
      <main>
        {/* Bread Crumbs */}
        <BreadCrumbs path="Home > Shop" />
        {/* End of Bread Crumbs  */}
        {/* Filer shop*/}
        <section className="section section-lg pt-lg-0">
          <Container className="col-md-11 col-lg-11">
            <Row className="row-grid justify-content-center">
              <Col lg="3" className="filter-section">
                <div className="arb px-4 py-4">
                  <h4 className="mt-4 mb-2 display-5">
                    <b>Categories</b>
                  </h4>
                  <ul className="filter">
                    <li onClick={() => clearCatFilter()}>All</li>
                    {categories.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => toggleFilterCat(item.categories)}
                        className={
                          settings.filters.categories.indexOf(item.categories) >
                          -1
                            ? "filterOn"
                            : ""
                        }
                      >
                        {item.categories}
                      </li>
                    ))}
                  </ul>
                  <h4 className="pt-4 mb-2 display-5 bt-3">
                    <b>Authors</b>
                  </h4>
                  {users.map((item, index) => (
                    <Row className="filter-option" key={index} id={item.id}>
                      <Col lg="10">
                        <span>{item.full_name}</span>
                      </Col>
                      <Col lg="2">
                        {" "}
                        <span>({item.qty ? item.qty : "0"})</span>
                      </Col>
                    </Row>
                  ))}
                </div>
              </Col>
              <Col lg="9">
                {/* Best Sellers books  */}
                <section className="section section-lg pt-lg-0">
                  <Container className="col-md-12 col-lg-12">
                    <Row className="row-grid justify-content-between align-items-end">
                      <h2 className="mb-3 display-4">Recommended Books</h2>
                    </Row>
                    <RecommendedBooks data={books} />

                    <Row className="row-grid justify-content-between align-items-end">
                      <Col lg="8">
                        <h6 className="mt-md mb-2 display-6">
                          {books.length} results
                        </h6>
                      </Col>
                      <Col
                        lg="4"
                        className="px-0 align-items-end col-lg-4 d-inline-flex p-2"
                      >
                        <Col lg="5">
                          <select className="select-filter">
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
                        <Col lg="4">
                          <select className="select-filter">
                            <option value="hide">Show 20</option>
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
                        <Col lg="2">
                          <div onClick={() => toggleDisplay()}>
                            {settings.display === "grid" ? (
                              <i className="fa fa-list button-filter"></i>
                            ) : (
                              <i className="fa fa-th button-filter"></i>
                            )}
                          </div>
                        </Col>
                      </Col>
                    </Row>
                    <Row className="row-grid mt-3">
                      {settings.display === "grid" ? (
                        <GridDisplay />
                      ) : (
                        <ListDisplay />
                      )}
                    </Row>
                  </Container>
                </section>
                {/* End Best Sellers books  */}
              </Col>
            </Row>
          </Container>
        </section>
        {/* End Filer shop*/}

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

function ListDisplay() {
  const data = useStoreState((state) => state.books);
  const filterCategories = useStoreState(
    (state) => state.settings.filters.categories
  );
  return (
    <Row className="book-card-container col-md-12 px-0">
      {/* filter checks if categories is empty and filters through given the categories in array */}
      {data
        .filter((books) => {
          if (filterCategories.length === 0) {
            return books;
          }
          return filterCategories.includes(books.categories);
        })
        .map((item) => (
          <Col lg="12" key={item.id} className="book-card-large arb">
            <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
              <Row className="col-12">
                <Col lg="2">
                  <CardImg
                    top
                    alt="..."
                    src={require("assets/img/covers/" + item.cover + ".jpg")}
                    className="book-card-img"
                  />
                </Col>
                <Col lg="7">
                  <CardBody className="px-0 pb-0 full-width">
                    <small>
                      <span>Hardcover, Kindle, Paperback </span>
                    </small>
                    <h6 className="book-card-title text-uppercase mb-0 mt-1">
                      {item.title ? item.title : "title"}
                    </h6>
                    <p className="book-card-author">author</p>
                    <small className="mt-2 mb-2">
                      {item.description ? item.description : "description"}
                    </small>
                    <Row className="align-items-center">
                      <Col sm="9">
                        <small className="text-uppercase text-muted font-weight-bold">
                          <h5 className="book-card-price">
                            {item.price ? item.price : "price"} FCFA
                          </h5>
                        </small>
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
                <Col sm="3" className="list-option my-auto">
                  <i className="fa fa-heart-o"></i>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
    </Row>
  );
}
function GridDisplay() {
  const data = useStoreState((state) => state.books);
  const filterCategories = useStoreState(
    (state) => state.settings.filters.categories
  );
  return (
    <Row className="book-card-container col-md-12 px-0">
      {/* filter checks if categories is empty and filters through given the categories in array */}
      {data
        .filter((books) => {
          if (filterCategories.length === 0) {
            return books;
          }
          return filterCategories.includes(books.categories);
        })
        .map((item) => (
          <Col className="book-card arb" md="3" key={item.id}>
            <Link
              to={{
                pathname: '/product/' + item.title.replace(/\s/g, "-"),
                state: { bookId: item.id }
              }}
            >
              <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
                <CardImg
                  top
                  alt="..."
                  src={require("assets/img/covers/" + item.cover + ".jpg")}
                  className="book-card-img"
                />

                <CardBody className="px-0 pb-0 full-width">
                  <small>
                    <span>Hardcover, Kindle, Paperback </span>
                  </small>
                  <h6 className="book-card-title text-uppercase mb-0 mt-1">
                    {item.title ? item.title : "title"}
                  </h6>
                  <p className="book-card-author">author</p>
                  <Row className="align-items-center">
                    <Col sm="9">
                      <small className="text-uppercase text-muted font-weight-bold">
                        <h5 className="book-card-price">
                          {item.price ? item.price : "10000"} FCFA
                        </h5>
                      </small>
                    </Col>
                    <Col sm="3">
                      <i className="fa fa-heart-o"></i>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
    </Row>
  );
}

export default Shop;
