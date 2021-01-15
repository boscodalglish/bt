import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="header">
            <Navbar>
                <Navbar.Brand href="#home">
                <img
                    src="https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg"
                    width="90"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
            </Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="#deets">Demo</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Demo
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header