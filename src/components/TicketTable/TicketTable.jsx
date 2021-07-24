import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { PropTypes } from "prop-types";

export default function TicketTable({ tickets }) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>TEMA</th>
          <th>ESTADO</th>
          <th>FECHA ABIERTO</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <Link to={`ticket/${row.id}`}>
                <td>{row.subject}</td>
              </Link>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              NO HAY TICKETS PARA MOSTRAR
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
