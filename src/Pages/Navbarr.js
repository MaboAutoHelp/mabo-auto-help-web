import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function Navbarr() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/Main/Admin">Admin</Nav.Link>
          <Nav.Link href="/Main/Revenus">Revenus</Nav.Link>
          <Nav.Link href="/Main/Service">Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

// بدل `export default Navbar;` بـ:
export default Navbarr;
