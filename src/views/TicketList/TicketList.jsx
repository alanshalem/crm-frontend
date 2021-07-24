import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../../components/PageBreadcrumb/PageBreadcrumb";
import SearchForm from "../../components/SearchForm/SearchForm";
import TicketTable from "../../components/TicketTable/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json";

export default function TicketList() {
  const [str, setStr] = useState("");
  const [displayTicket, setdisplayTicket] = useState(tickets);

  useEffect(() => {}, [str, displayTicket]);
  //Cada vez que cambia la variable str o displayTicket
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (str) => {
    //const displayTickets - prototype: Array(Objects) - resultado del filtrado
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(str.toLowerCase())
    );
    setdisplayTicket(displayTickets);
    console.log(displayTickets);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Lista de Tickets" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Link to="/addticket">
            <Button variant="info">AÑADIR NUEVO TICKET</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <TicketTable tickets={displayTicket}></TicketTable>
        </Col>
      </Row>
    </Container>
  );
}
