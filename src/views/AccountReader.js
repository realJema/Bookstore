import React from "react";

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

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import Footer from "components/Footers/Footer";

class AccountReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "books",
    };
  }

  // used to swap pages displayed 
  _handlePageChange = (page) => {
    this.setState({ page: page });
  };

  render() {
    return (
      <>
        <Topbar />
        <MainNavbar />
        <main>
          {/* Book Details */}
          <section className="section section-lg pt-lg-0 pb-0 mt-5">
            <Container className="col-md-12 col-lg-12">
              <Row className="row-grid justify-content-center">
                <Col lg="12">
                  <Row className="row-grid justify-content-between col-md-12">
                    <Col lg="3" className="product-details">
                      <ul className="filter">
                        <li onClick={() => this._handlePageChange("books")}>
                          My Books
                        </li>
                        <li onClick={() => this._handlePageChange("Wishlist")}>
                          Wishlist
                        </li>
                        <li onClick={() => this._handlePageChange("prefauthors")}>
                          Liked Authors
                        </li>
                        <li onClick={() => this._handlePageChange("profile")}>
                          Edit Profile
                        </li>
                      </ul>
                    </Col>
                    <Col lg="9">
                      {{
                        'books': <MyBooks />,
                        'profile': <EditProfile />
                      }[this.state.page]
                      }
                    </Col>
                  </Row>
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

class BookCard extends React.Component {
  render() {
    return (
      <Col lg="3">
        <Card className="border-0 col mb-2 justify-content-between align-items-center py-3 px-4">
          <CardImg
            top
            alt="..."
            src={require("assets/img/theme/img-1-1200x1000.jpg")}
            className="book-card-img"
          />

          <CardBody className="px-0 pb-0 full-width">
            <small>
              <span>
                Hardcover, Kindle, Paperback{" "}
                {this.props.size ? this.props.size : "2"}{" "}
              </span>
            </small>
            <h6 className="book-card-title text-uppercase mb-0 mt-1">
              Download Argon book buy me{" "}
            </h6>
            <p className="book-card-author">author</p>
            <Row className="align-items-center">
              <Col sm="9">
                <small className="text-uppercase text-muted font-weight-bold">
                  <h5 className="book-card-price">$14.5</h5>
                </small>
              </Col>
              <Col sm="3">
                <i className="fa fa-heart-o"></i>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
class MyBooks extends React.Component {
  render() {
    return (
      <>
        <Row className="row-grid justify-content-right col-md-12 bb-3 ml-3 pb-5">
          <Col lg="3">
            <center>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/theme/team-2-800x800.jpg")}
                style={{ width: "150px" }}
              />
            </center>
          </Col>
          <Col lg="7">
            <h2>Good to see you Johnny</h2>
            <p>
              Welcom to your dashboard, you can find here all the books you have
              already purchased and you can read them online{" "}
            </p>
          </Col>
        </Row>
        <Row className="row-grid">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Row>
      </>
    );
  }
}
class EditProfile extends React.Component {
  render() {
    return (
      <>
        <Row className="row-grid justify-content-right col-md-12 bb-3 ml-3 pb-5">
          <Col lg="3">
            <center>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/theme/team-2-800x800.jpg")}
                style={{ width: "150px" }}
              />
            </center>
          </Col>
          <Col lg="7">
            <h2>Good to see you Johnny</h2>
            <p>
              Welcom to your dashboard, you can find here all the books you have
              already purchased and you can read them online{" "}
            </p>
          </Col>
        </Row>
        <h2>Edit Profile </h2>
      </>
    );
  }
}

export default AccountReader;
