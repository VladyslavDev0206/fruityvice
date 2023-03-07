import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Brand from "./Brand";

const TopNavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Brand/>
        <Nav.Link href="/favorites">Favorite</Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
} 

export default TopNavBar;