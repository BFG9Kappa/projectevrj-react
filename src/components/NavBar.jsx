import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Link } from 'react';

function NavBar() {
  const [isAuth, setAuth] = useState(sessionStorage.getItem('token') !== null);
  const history = useHistory();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Inici</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*
            {isAuth && <Nav.Link href="#link">Horari</Nav.Link>}
            */}
            {isAuth && <Nav.Link href="/absprevistes">Absències previstes</Nav.Link>}
            {isAuth && <Nav.Link href="/absnoprevistes">Absències no previstes</Nav.Link>}
            {isAuth && <Nav.Link href="/baixesmediques">Baixes mèdiques</Nav.Link>}
            {isAuth && <Nav.Link href="/sortidescurriculars">Sortides curriculars</Nav.Link>}
            {!isAuth && <Nav.Link href="/auth/login">Accedir</Nav.Link>}
            {isAuth && <Nav.Link onClick={function() { setAuth(false); sessionStorage.removeItem('token'); history.go("/");}}>Sortir</Nav.Link>}
            {/*
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;