import React from "react";
import { Link } from "react-router-dom";
import Menu from "react-burger-menu/lib/menus/slide";
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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      modal: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeModal() {
    
    this.setState((state) => ({ modal: false }));
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  toggleModal() {
    this.setState((state) => ({ modal: !state.modal }));
  }

  render() {
    return (
      <>
        {/* Signup Modal  */}
        <Modal
          isOpen={this.state.modal}
          toggle={() => this.closeModal()}
        >
          <ModalHeader toggle={() => this.closeModal()}>
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.closeModal()}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={() => this.closeModal()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/* End Signup Modal  */}

        {/* Sidebar Menu  */}
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <a href="google.com" onClick={() => this.closeMenu()}>
            Home
          </a>
          <a href="google.com" onClick={() => this.closeMenu()}>
            About
          </a>
          <a href="google.com" onClick={() => this.closeMenu()}>
            Contact
          </a>
          <a href="google.com" onClick={() => this.closeMenu()}>
            Settings
          </a>
        </Menu>
        {/* Sidebar Menu  */}

        <header className="header-global">
          <Navbar expand="lg" id="topbar-main">
            <Container className="col-md-11 col-lg-11 col-sm-11">
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
                <Nav
                  className="navbar-nav-hover align-items-lg-center col-sm-10"
                  navbar
                >
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
                    <div
                      className="topbar-link"
                      onClick={() => this.toggleMenu()}
                    >
                      <i className="fa fa-user-o mr-3 lg-icon"></i>
                    </div>
                  </NavItem>
                  <NavItem>
                    <div
                      className="topbar-link"
                      onClick={() => this.toggleModal()}
                    >
                      <i className="fa fa-user-o mr-3 lg-icon"></i>
                    </div>
                  </NavItem>
                  <NavItem>
                    <NavLink className="topbar-link" to="/billboard" tag={Link}>
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
