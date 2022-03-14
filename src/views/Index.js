import React, { Fragment, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import Adslider from "components/Elements/Slider";
import BookCard from "components/Elements/BookCard";
import BookCardLarge from "components/Elements/BookCard";
import BestSellersSlider from "components/Elements/BestSellersSlider";
import FavoriteAuthorsSlider from "components/Elements/FavoriteAuthorsSlider";
import Footer from "components/Footers/Footer";
import Slider from "react-slick";

import { useStoreState, useStoreActions } from "easy-peasy";

export const App = (props) => {
  const books = useStoreState((state) => state.books);
  const users = useStoreState((state) => state.users);
   const { remove, toggle, fetchData } = useStoreActions((actions) => ({
     remove: actions.remove,
     toggle: actions.toggle,
     fetchData: actions.fetchData,
   }));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  
    return (
    <>
      <Topbar />
      <MainNavbar />
      <Adslider />
      <main>
        {/* Featured Categories  */}
        <section className="section section-components pb-0 pt-0">
          <Container className="col-md-11 col-lg-11 col-sm-11">
            <Row className="row-grid justify-content-between align-items-end">
              <h2 className="mt-md mb-5 display-4">Featured Categories</h2>
              <h6 className="mt-lg mb-5">
                <span>All Categories</span>
                <i className="fa fa-chevron-right"></i>
              </h6>
            </Row>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row row justify-content-between">
                  <Col lg="3" sm="6" md="4">
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
                        <h6 className="category-title text-uppercase">
                          Arts & Photography
                        </h6>
                        <p className="text-primary category-subtitle">
                          Shop Now
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3" sm="6" md="4">
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
                        <h6 className="category-title text-uppercase">
                          Food & Drink
                        </h6>
                        <p className="text-primary category-subtitle">
                          Shop Now
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3" sm="6" md="4">
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
                        <h6 className="category-title text-uppercase">
                          Romance
                        </h6>
                        <p className="text-primary category-subtitle">
                          Shop Now
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3" sm="6" md="4">
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
                        <h6 className="category-title text-uppercase">
                          Health
                        </h6>
                        <p className="text-primary category-subtitle">
                          Shop Now
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3" sm="6" md="4">
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
                        <h6 className="category-title text-uppercase">
                          Biography
                        </h6>
                        <p className="text-primary category-subtitle">
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
          <Container className="col-md-11 col-lg-11 col-sm-11">
            <Row className="row-grid justify-content-between align-items-end">
              <h2 className="mt-md mb-5 display-4">Bestselling Books</h2>
              <h6 className="mt-lg mb-5">
                <span>View All</span> <i className="fa fa-chevron-right"></i>
              </h6>
            </Row>
            <BestSellersSlider />
          </Container>
        </section>
        {/* End Best Sellers books  */}

        {/* Featured Books */}
        <section className="section section-lg pt-lg-0">
          <Container className="col-md-11 col-lg-11 col-sm-11">
            <Row className="row-grid justify-content-center align-items-center">
              <h2 className="mt-md display-4">Featured Books</h2>
            </Row>
            <Row className="row-grid justify-content-center text-center mt-3 mb-5">
              <Col lg="2" sm="4">
                <h6 className="">
                  <span>Featured</span>
                </h6>
              </Col>
              <Col lg="2" sm="4">
                <h6 className="">
                  <span>On Sale</span>
                </h6>
              </Col>
              <Col lg="2" sm="4">
                <h6 className="">
                  <span>Most Viewed</span>
                </h6>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="12" sm="12">
                <FeaturedBooks />
              </Col>
            </Row>
          </Container>
        </section>
        {/* End Featured Books */}

        {/* New Releases*/}
        <section className="section section-lg pt-lg-0">
          <Container className="col-md-11 col-lg-11 col-sm-11">
            <Row className="row-grid justify-content-between align-items-end">
              <Col lg="4" sm="6">
                <h2 className="mt-md mb-5 display-4">New Releases</h2>
              </Col>
              <Col lg="3" sm="6">
                <Row className="row-grid">
                  <Col className="px-0 text-right">
                    <h6 className="mt-lg mb-5 justify-content-right">
                      <span>History</span>
                    </h6>
                  </Col>
                  <Col className="px-0 text-right">
                    <h6 className="mt-lg mb-5 justify-content-right">
                      <span>Science</span>
                    </h6>
                  </Col>
                  <Col className="px-0 text-right">
                    <h6 className="mt-lg mb-5 justify-content-right">
                      <span>Romance</span>
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

                <NewReleases />
                </Col>
            </Row>
          </Container>
        </section>
        {/* End New Releases*/}

        {/* Biography Books*/}
        <section className="section section-lg pt-lg-0">
          <Container className="col-md-11 col-lg-11 col-sm-11">
            <Row className="row-grid justify-content-between align-items-end">
              <h2 className="mt-md mb-5 display-4">Biography Books</h2>
              <h6 className="mt-lg mb-5">
                <span>View All</span> <i className="fa fa-chevron-right"></i>
              </h6>
            </Row>
            <Row className="justify-content-center">
                <Col lg="12">
                  
              <Biography />
              </Col>
            </Row>
          </Container>
        </section>
        {/* End Bigoraphy Books*/}

        {/* Favorite Authors*/}
        <section className="section section-lg pt-lg-0">
          <Container className="col-md-11 col-lg-11 col-sm-11">
            <Row className="row-grid justify-content-between align-items-end">
              <h2 className="mt-md mb-5 display-4">Favorite Authors</h2>
              <h6 className="mt-lg mb-5">
                <span>View All</span> <i className="fa fa-chevron-right"></i>
              </h6>
            </Row>
            <FavoriteAuthorsSlider />
          </Container>
        </section>
        {/* End Favorite Authors*/}

        {/* Join Our Newsletter*/}
        <section className="section section-lg pt-lg-0 bt-3">
          <Container className="col-md-11 col-lg-11 col-sm-11">
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
};

function FeaturedBooks() {
  
  const data = useStoreState((state) => state.books);

    return (
      <Row className="book-card-container">
          {data.map((item) => (
            <BookCard
              key={item.id}
              title={item.title}
              price={item.price}
              cover={item.cover}
            />
          ))}
      </Row>
    );
}

function NewReleases() {
  
  const data = useStoreState((state) => state.books);

    return (
      <Row className="book-card-container">
          {data.map((item) => (
            <BookCard
              key={item.id}
              title={item.title}
              price={item.price}
              cover={item.cover}
            />
          ))}
      </Row>
    );
}
function Biography() {
  
  const data = useStoreState((state) => state.books);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
      <div className="book-card-container">
        <Slider {...settings}>
          {data.map((item) => (
             <Col
        className="book-card-large"
        key={item.id}
      >
        <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
          <Row lg="12">
            <Col lg="5">
              <CardImg
                top
                alt="..."
                src={require("assets/img/covers/" + item.cover +  ".jpg")}
                className="book-card-img"
              />
            </Col>
            <Col lg="7">

              <CardBody className="px-0 pb-0 full-width">
                <small>
                  <span>
                    Hardcover, Kindle, Paperback
                    {"2"}
                  </span>
                </small>
                <h6 className="book-card-title text-uppercase mb-0 mt-1">
                  {item.title}
                </h6>
                <p className="book-card-author">author</p>
                    <small className="text-uppercase text-muted font-weight-bold">
                      <h5 className="book-card-price">{item.price}</h5>
                    </small>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
          ))}
        </Slider>
      </div>
    );
}

export default App;
