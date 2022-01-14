 
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className=" footer">
        <Container className="col-md-11 col-lg-11">
          <Row className=" row-grid mb-5">
            <Col lg="4">
              <Row>
                <h1 className="display-2 logo-brand">100Pages</h1>
              </Row>
              <Row className="mt-3">
                <small class="d-block">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 <br />
                  United States
                </small>
              </Row>
              <Row className="mt-4 row-grid">
                <small class="d-block">
                  sale@bookworm.com <br />
                  +1 246-345-0695
                </small>
              </Row>
              <Row className="mt-3">
                <Col lg="1">
                  <p class="d-block">
                    <i className="fa fa-facebook"></i>
                  </p>
                </Col>
                <Col lg="1">
                  <p class="d-block">
                    <i className="fa fa-instagram"></i>
                  </p>
                </Col>
                <Col lg="1">
                  <p class="d-block">
                    <i className="fa fa-youtube"></i>
                  </p>
                </Col>
                <Col lg="1">
                  <p class="d-block">
                    <i className="fa fa-pinterest"></i>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg="2">
              <h6 className="design-5">Explore</h6>
              <Nav className=" nav-footer justify-content-start mt-5">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Sitemap
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Bookmarks
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                    className="footer-links"
                  >
                    Sing in/Join
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="2">
              <h6 className="design-5">Customer Service</h6>
              <Nav className=" nav-footer justify-content-start mt-5">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Help Center
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Returns
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Product Recalls
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                    className="footer-links"
                  >
                    Accesibility
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                    className="footer-links"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="2">
              <h6 className="design-5">Policy</h6>
              <Nav className=" nav-footer justify-content-start mt-5">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Return Policy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Terms of Use
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Security
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                    className="footer-links"
                  >
                    Privacy
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="2">
              <h6 className="design-5">Categories</h6>
              <Nav className=" nav-footer justify-content-start mt-5">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Action
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Comedy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    className="footer-links"
                  >
                    Drama
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                    className="footer-links"
                  >
                    Horror
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                    className="footer-links"
                  >
                    Kids
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="7">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                >
                  100Pages. All rights reserved
                </a>
                .
              </div>
            </Col>
            <Col lg="5" xs="4">
              <Row>
                <Col lg="8">
                  <a
                    href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                    id="tooltip255035741"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/theme/credit-cards.png")}
                    />
                  </a>
                </Col>
                <Col lg="4">
                  {" "}
                  <Nav className=" nav-footer justify-content-end">
                    <NavItem>
                      <NavLink
                        href="http://blog.creative-tim.com?ref=adsr-footer"
                        target="_blank"
                      >
                        Contact
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                        target="_blank"
                      >
                        Subscribe
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
