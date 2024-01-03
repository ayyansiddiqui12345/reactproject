"client"
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
export const NavbarComponent = () =>{
  const myStyles = {
    // Add your styles here
    // For example:
    backgroundColor: '#3498db',
    color: '#fff',
    position: 'fixed',
    width: '100%'
     
      
  };

  return (
    <>
    <Navbar style={myStyles} bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#avatar">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}




