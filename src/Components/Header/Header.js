
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo2 from '../../images/logo2.png';
import { GoPerson } from "react-icons/go";
import "./Header.css";
import useFirebase from "../Hooks/useFirebase";

const Header = () => {
  const { user, logout } = useFirebase();
  console.log(user);
  return (
    <Container fluid="md header">
      <Navbar
        className="px-4 sticky-top fw-bold"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        {/* <div href="/">
					<img width="180" src={logo2} alt="" />
				</div> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>


          <Nav className="me-auto text-center">
            
            {user?.email ? (
             <div> <Nav.Link as={Link} to="/dashboard">
              <GoPerson /> Dashboard
            </Nav.Link>
              <Button onClick={logout} variant="secondary">
                Logout
              </Button></div>
            ) : (
              <Nav.Link as={Link} to="/login">
                <GoPerson /> Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
