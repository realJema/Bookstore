import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Media,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <h1 className="display-4 text-white logo-brand">de L'Heure</h1>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Charts</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              HOT MUSIC
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn how to use Argon compiling Scss, change
                              brand colors and more.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              HOT VIDEOS
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn more about colors, typography, icons and the
                              grid system we used for Argon.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-ui-04" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              HOT GENRES
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Browse our 50 beautiful handcrafted components
                              offered in the Free version.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">CHARTS</span>
                    </DropdownToggle>
                    <DropdownMenu className="large-dropdown">
                      <Nav>
                        <NavItem>Music</NavItem>
                        <NavItem>
                          <NavLink to="/" tag={Link}>
                            Hot Music 100
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/music" tag={Link}>
                            Hot Music 200
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/producers" tag={Link}>
                            Hot Music Producers
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            Upcoming Artists
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <Nav>
                        <NavItem>Videos</NavItem>
                        <NavItem>
                          <NavLink to="/" tag={Link}>
                            Hot Video 100
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            Hot Video Producers
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            Honorable Mentions
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            International
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <Nav>
                        <NavItem>Genre</NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            Afrobeat
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            Hip Hop
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            Gospel
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            Pop
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <Nav>
                        <NavItem>Year</NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            2021
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            2020
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            2019
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/billboard" tag={Link}>
                            2018
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink to="/billboard" tag={Link}>
                      ABOUT US
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="nav-link-inner--text ml-1">
                        Subscribe
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;
