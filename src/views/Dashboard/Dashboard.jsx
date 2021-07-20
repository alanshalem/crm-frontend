import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
import TicketTable from '../../components/TicketTable/TicketTable'
import tickets from '../../assets/data/dummy-ticket.json'

export default function Dashboard() {
    return (
        <Container>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button variant="info" style={{ 'fontSize': "2rem", 'color': "#ffffff", 'padding': "10px 30px" }}>Añadir Nuevo Ticket</Button>
                </Col>

            </Row>

            <Row>
                <Col className="text-center mt-5 mb-2">
                    <div>Tickets Totales: 50</div>
                    <div>Tickets Pendientes: 5</div>
                </Col>
            </Row>

            <Row>
                <Col className="mt-2">
                    Tickets Recientemente Añadidos
                </Col>
            </Row>

            <Row>
                <Col className="recent-tickets">
                    <TicketTable tickets={tickets}></TicketTable>
                </Col>
            </Row>

        </Container>
    )
}
