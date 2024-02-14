/* eslint-disable no-unused-vars */

import React from 'react'
import "./navBar.css";
import { Container, Navbar,Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
    
    
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid className='main_container'>
      <Navbar.Brand href="#home">Kowshiq Asfat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='menu'>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Services</Nav.Link>
            <Nav.Link href="#deets">Projects</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default NavBar