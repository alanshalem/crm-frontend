import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import EscudoArgentina from "../../assets/img/escudo_arg.png";
import "./Header.css";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  const history = useHistory();

  const logMeOut = () => {
    history.push("/");
  };

  return (
    <Navbar
      className="mb-2"
      collapseOnSelect
      bg="info"
      variant="dark"
      expand="md"
    >
      <Navbar.Brand className="img_title">
        <img
          className="escudoArgentina-img"
          src={EscudoArgentina}
          alt="escudo argentina"
          width="50px"
        ></img>
        Ticketera Jefatura
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* <Link className="text-light" to="/dashboard">
            DASHBOARDS
          </Link>
          <Link className="text-light" to="/ticketlist">
            TICKETS
          </Link>
          <Link className="text-light" to="">
            LOGOUT
          </Link> */}
          <LinkContainer to="/dashboard">
            <Nav.Link className="text-light">DASHBOARDS</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/ticketlist">
            <Nav.Link className="text-light">TICKETS</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logMeOut} className="text-light">
            LOGOUT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
