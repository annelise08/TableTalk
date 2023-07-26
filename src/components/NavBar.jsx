import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>TableTalk</Navbar.Brand>
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Favorites</Nav.Link>
          <Nav.Link>Feed</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
