import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../../components/PageBreadcrumb/PageBreadcrumb";
import tickets from "../../assets/data/dummy-ticket.json";
import MessageHistory from "../../components/MessageHistory/MessageHistory";
import UpdateTicket from "../../components/UpdateTicket/UpdateTicket";

// const ticket = tickets[0];

export default function Ticket() {
  const { tId } = useParams();

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("SUBMITED");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="id">ID: {tId}</div>
          <div className="subject">TEMA: {ticket.subject}</div>
          <div className="date"> ESTADO: {ticket.status}</div>
          <div className="status">FECHA ABIERTO: {ticket.addedAt}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Cerrar Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {ticket.history && (
            <MessageHistory msg={ticket.history}></MessageHistory>
          )}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          ></UpdateTicket>
        </Col>
      </Row>
    </Container>
  );
}
