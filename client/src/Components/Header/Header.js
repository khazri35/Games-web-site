import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../JS/actions/user";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  // const { isAuth } = useSelector((state) => state.userReducer)
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar className="navbar" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>G4G</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {token !== "undefined" ? (
                <NavDropdown title={user.name} id="username">
                  {user.isAdmin == true ? (
                    <LinkContainer to="/profileAdmin">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                  ) : (
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  {/* //{" "}
                  <LinkContainer to="/profile">
                    // <NavDropdown.Item>Profile</NavDropdown.Item>
                    //{" "}
                  </LinkContainer> */}
                  <LinkContainer to="/">
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer to="/signin">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
