import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
          
          <Nav.Link as={Link} to={"/Main/Admin"}>Admin</Nav.Link>
          <Nav.Link as={Link} to={"/Main/Revenus"}>Revenus</Nav.Link>
          <Nav.Link as={Link} to={"/Main/Service"}>Service</Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default Navbarr;
