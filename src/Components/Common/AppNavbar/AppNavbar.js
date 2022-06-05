import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"
const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link to="/createTodo">Create Todo</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/allTodos">My-Todos</Link>
                        </Nav.Link>
                        <NavDropdown title="Rejaul Karim" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to="/createTodo">Logout</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;