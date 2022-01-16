import React from 'react'
import { Nav, NavDropdown, Navbar, Image, Button, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Image src={require('../images/Logo.png')} style={{ display: 'flex', width: 50, marginRight: 35, marginLeft: 20 }} />
            <Navbar.Brand href="#home">GO Trip</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Flight</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Train</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Container>
                        <Button href="#deets" style={{ marginRight: 20 }}>Login</Button>
                        <Button href="#deets">Regist</Button>
                    </Container>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent