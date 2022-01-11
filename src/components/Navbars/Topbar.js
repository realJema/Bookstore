import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Topbar extends React.Component {
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
          <Navbar expand="lg" id="topbar-main">
            <Container className="col-md-12 col-lg-12 col-sm-12">
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
                <Nav className="navbar-nav-hover align-items-lg-center col-sm-10" navbar>
                  <NavItem>
                    <NavLink className="topbar-link" to="/billboard" tag={Link}>
                      <span>
                        <i className="fa fa-question-circle-o mr-2"></i> Can I
                        help you?
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="ml-5">
                    <NavLink className="topbar-link" to="/billboard" tag={Link}>
                      <span>
                        <i className="fa fa-mobile mr-2"></i> +1 246-345-0695
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink className="topbar-link" to="/billboard" tag={Link}>
                      <i className="fa fa-heart-o mr-3 lg-icon"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="topbar-link" to="/billboard" tag={Link}>
                      <i className="fa fa-user-o mr-3 lg-icon"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="topbar-link"
                      to="/billboard"
                      tag={Link}
                    >
                      <i className="fa fa-shopping-bag mr-3 lg-icon"></i>
                    </NavLink>
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

export default Topbar;
