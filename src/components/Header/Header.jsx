import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import EscudoArgentina from '../../assets/img/escudo_arg.png';
import './Header.css'

export default function Header() {
    return (
        <Navbar className="mb-2" collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand className="img_title">
                <img className="escudoArgentina-img" src={EscudoArgentina} alt="escudo argentina" width="50px"></img>
                Ticketera Jefatura
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="text-light" href="/dashboard">DASHBOARDS</Nav.Link>
                    <Nav.Link className="text-light" href="/dashboard">TICKETS</Nav.Link>
                    <Nav.Link className="text-light" href="/dashboard">LOGOUT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
