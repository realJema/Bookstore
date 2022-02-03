import React from "react";
import { Link } from "react-router-dom";
import Menu from "react-burger-menu/lib/menus/slide";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
  NavLink,
  NavItem,
  Nav,
  UncontrolledCollapse,
  Container,
  Navbar,
  CardImg,
} from "reactstrap";

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      modal: false,
      loggedIn: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  closeModal() {
    this.setState((state) => ({ modal: false }));
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  toggleModal() {
    this.setState((state) => ({ modal: !state.modal }));
  }
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  render() {
    return (
      <>
        {/* Signup Modal  */}
        <Modal
          className="modal-dialog-centered"
          size="sm"
          isOpen={this.state.formModal}
          toggle={() => this.toggleModal("formModal")}
        >
          <div className="modal-body p-0">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-icon mt-2 mb-2"
                    color="neutral"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/github.svg")}
                      />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button>
                  <Button
                    className="btn-icon mt-2 mb-2 ml-1"
                    color="neutral"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/google.svg")}
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.passwordFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onFocus={(e) =>
                          this.setState({ passwordFocused: true })
                        }
                        onBlur={(e) =>
                          this.setState({ passwordFocused: false })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Modal>
        {/* End Signup Modal  */}

        {/* Cart Modal  */}
        <Modal
          className="cart-modal modal-dialog-centered"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal("defaultModal")}
        >
          <div className="modal-header">
            <i className="fa fa-shopping-bag mr-3 lg-icon"></i>
            <h6 className="modal-title" id="modal-title-default">
              Your Shopping Bag (1)
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <Row className="justify-content-center">
              <Col lg="12">
                <BookCardLarge />
                <BookCardLarge />
                <BookCardLarge />
              </Col>
            </Row>

            <Row className="justify-content-around bt-3 pt-3 pb-3 mt-3">
              <Col sm="9">
                <h4>subtotal:</h4>
              </Col>
              <Col sm="2">
                <h5 className="text-right">$59.99</h5>
              </Col>
            </Row>
            <Row className="row-grid justify-content-end mt-3">
              <Col lg="6">
                <Button
                  block
                  className="btn-round newsletter-submit"
                  color="default"
                  size="lg"
                  type="button"
                >
                  View Cart
                </Button>
              </Col>
              <Col lg="6">
                <Button
                  block
                  className="btn-round newsletter-submit"
                  color="default"
                  size="lg"
                  type="button"
                >
                  Check Out
                </Button>
              </Col>
            </Row>
          </div>
        </Modal>
        {/* End Cart Modal  */}

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
                      onClick={() => this.toggleModal("formModal")}
                    >
                      <i className="fa fa-user-o mr-3 lg-icon"></i>
                    </div>
                  </NavItem>
                  <NavItem>
                    <div
                      className="topbar-link"
                      onClick={() => this.toggleModal("defaultModal")}
                    >
                      <i className="fa fa-shopping-bag mr-3 lg-icon"></i>
                    </div>
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

class BookCardLarge extends React.Component {
  render() {
    return (
      <Row className="justify-content-center">
        <Col lg="10" className="pl-0 mb-2">
          <Card>
            <Row className="col-12">
              <Col lg="3">
                <CardImg
                  top
                  alt="..."
                  src={require("assets/img/theme/img-1-1200x1000.jpg")}
                  className="book-card-img"
                />
              </Col>
              <Col lg="9">
                <CardBody className="px-0 full-width">
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
                  <small className="mt-2 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </small>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg="2" className="list-option my-auto">
          <Row className="justify-content-center">
            <Col lg="6">
              <h5 className="book-card-price">$14.5</h5>
            </Col>
            <Col lg="6">
              <i className="fa fa-heart-o"></i>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Topbar;
