import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Card } from "reactstrap";

// core components
// import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import Topbar from "components/Navbars/Topbar";
import Footer from "components/Footers/Footer";

class SubmitBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "",
    };
  }

  imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      this.setState({ imgSrc: e.target.files[0] });
    }
  };

  // This function will be triggered when the file field change
  imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      this.setState({ imgSrc: e.target.files[0] });
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  removeSelectedImage = () => {
    this.setState({ imgSrc: "" });
  };

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
                        <h2 className="mb-5">Submit Book!</h2>

                        <h5 className="mb-5">
                          “Many desktop publishing packages and web page editors
                          now use Lorem Ipsum as their default model search for
                          eolved over sometimes by accident, sometimes on
                          purpose ”
                        </h5>

                        <Row className="justify-content-center">
                          <Col lg="5">
                            {/* Cover Image Display  */}
                            <div style={styles.preview}>
                              {this.state.imgSrc ? (
                                <img
                                  src={URL.createObjectURL(this.state.imgSrc)}
                                  style={styles.image}
                                  alt="Thumb"
                                />
                              ) : (
                                <img
                                  src={require("assets/img/theme/img-1-1200x1000.jpg")}
                                  style={styles.image}
                                  alt="Thumb"
                                />
                              )}
                              <button
                                onClick={this.removeSelectedImage}
                                style={styles.delete}
                              >
                                Remove This Image
                              </button>
                            </div>
                            {/* End Cover Image Display  */}
                          </Col>
                          <Col lg="7">
                            <h5 className="mb-2 mt-3">Title</h5>
                            <Row className="row-grid justify-content-center">
                              <Col lg="12">
                                <input
                                  type="email"
                                  className="submit-description "
                                  placeholder="Book Title"
                                  required=""
                                />
                              </Col>
                            </Row>
                            <h5 className="mb-2 mt-3">Description</h5>
                            <Row className="row-grid justify-content-center mt-3">
                              <Col lg="12">
                                <textarea
                                  type="text"
                                  className="submit-description"
                                  placeholder="Book description goes here!"
                                  required=""
                                  rows={10}
                                ></textarea>
                              </Col>
                            </Row>
                            <Row className="row-grid justify-content-start mb-5">
                              <Col lg="6">
                                <h5 className="mb-2 mt-3">Upload Book</h5>
                                <input type="file" name="file" />
                              </Col>
                              <Col lg="6">
                                <h5 className="mb-2 mt-3">Upload Images</h5>
                                <div style={styles.container}>
                                  <input
                                    accept="image/*"
                                    type="file"
                                    onChange={this.imageChange}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row className="row-grid justify-content-end mt-3">
                          <Col lg="4">
                            <Button
                              block
                              className="btn-round newsletter-submit"
                              color="default"
                              size="lg"
                              type="button"
                            >
                              Submit Book
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

export default SubmitBook;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { height: "449px", width: "300px", objectFit: "cover" },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
