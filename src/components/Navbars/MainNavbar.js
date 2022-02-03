import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

class MainNavbar extends React.Component {
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
            className="navbar-main"
            expand="lg"
            id="navbar-main"
          >
            <Container className="col-md-11 col-lg-11">
              <div className="category-menu">
                <i className="fa fa-align-left"></i>
              </div>
              <NavbarBrand className="mr-lg-5 ml-md-5" to="/" tag={Link}>
                <h1 className="display-4 logo-brand">100Pages</h1>
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
                  {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        Home
                        <i className="fa fa-chevron-down dropdown-chevron"></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        Profile
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                  <NavItem>
                    <NavLink to="/shop" tag={Link}>
                      <span className="nav-link-inner--text">Shop</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/about" tag={Link}>
                      <span className="nav-link-inner--text">About Us!</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/submit" tag={Link}>
                      <span className="nav-link-inner--text">Submit Book</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/account/reader" tag={Link}>
                      <span className="nav-link-inner--text">My Account</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto col-md-4" navbar>
                  <NavItem className="col-md-12">
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-search" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input className="searchbar" placeholder="Search" type="text" />
                        </InputGroup>
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
