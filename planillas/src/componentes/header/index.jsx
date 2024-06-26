// Header.js
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Arribos" id="arribos-dropdown">
              <NavDropdown.Item as={Link} to="/Arribointer">
                Arribos Internacional
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Arribocabo">
                Arribos Cabotaje
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Embarque" id="embarque-dropdown">
              <NavDropdown.Item as={Link} to="/Embarqueinter">
                Embarque Internacional
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Embarquecabo">
                Embarque Cabotaje
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hall Público" id="hall-dropdown">
              <NavDropdown.Item as={Link} to="/Hallinter">
                Hall Internacional
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Hallcabo">
                Hall Cabotaje
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Hallpa">
                Hall Planta Alta
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Overside">
              Overside
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
