import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import firebase from "firebase/app";

import logo from "../../assets/images/logo.png";

import "./Header.css";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const [show, setShow] = React.useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="">
          <Navbar.Brand>
            <Image src={logo} style={{ width: "70px" }} className="img-fluid" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav w-100 justify-content-end">
          <Nav className="ml-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Features"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item>
                <LinkContainer to="/department">
                  <Nav.Link>Department details</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/team">
                  <Nav.Link>Team details</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                <LinkContainer to="/gmb-geogrid">
                  <Nav.Link>GMB GEOGRID</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item> */}
              <NavDropdown.Item>
                <LinkContainer to="/blogs">
                  <Nav.Link>Blogs</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/constitution">
              <Nav.Link>Constitution</Nav.Link>
            </LinkContainer><LinkContainer to="/magazine">
              <Nav.Link>Magazine</Nav.Link>
            </LinkContainer>
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {!user && (
              <LinkContainer className="sign-up-nav" to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown
                title={user.email && user.email.split("@")[0]}
                id="navbarScrollingDropdown"
              >
                {user.role === "subscriber" ? (
                  <NavDropdown.Item key="subscriber">
                    <Link to="/user/history">Dashboard</Link>
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item key="admin">
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
