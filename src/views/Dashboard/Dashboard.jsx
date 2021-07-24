import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/TicketTable/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json";
import PageBreadcrumb from "../../components/PageBreadcrumb/PageBreadcrumb";

export default function Dashboard() {
  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-2 mb-2">
          <Link to="/addticket">
            <Button
              variant="info"
              style={{
                fontSize: "1.5rem",
                color: "#ffffff",
                padding: "1rem 2.5rem",
              }}
            >
              Añadir Nuevo Ticket
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Tickets Totales: 50</div>
          <div>Tickets Pendientes: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2 mb-4">Tickets Recientemente Añadidos</Col>
      </Row>

      <Row>
        <Col className="recent-tickets">
          <TicketTable tickets={tickets}></TicketTable>
        </Col>
      </Row>
    </Container>
  );
}
