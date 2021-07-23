import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function UpdateTicket({ msg, handleOnChange, handleOnSubmit }) {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Responder</Form.Label>
      <br />
      <Form.Text>
        Por favor, contesta aqui tu mensaje o actualiza el ticket
      </Form.Text>
      <Form.Control
        as="textarea"
        value={msg}
        onChange={handleOnChange}
        row="5"
        name="detail"
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit">
          Responder
        </Button>
      </div>
    </Form>
  );
}

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
