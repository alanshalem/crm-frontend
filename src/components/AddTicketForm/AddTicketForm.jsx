import React from 'react'
import { Form, Jumbotron, Row, Col, Button } from 'react-bootstrap'
import PropTypes from "prop-types";
import './AddTicketForm.css'


export default function AddTicketForm({ handleOnSubmit, handleOnChange, formData }) {
    //formError
    console.log(formData);

    return (
        <Jumbotron className="mt-3 AddTicketForm">
            <h1 className="text-info text-center">AÑADIR NUEVO TICKET</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>TEMA</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleOnChange}
                            placeholder="INGRESA EL TEMA"
                            minLength="5"
                            maxLenght="50"
                        />
                        {/* <Form.Text className="text-danger">{formError.subject && "SE REQUIERE EL TEMA"}</Form.Text> */}
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>FECHA</Form.Label>
                    <Col sm={9}>

                        <Form.Control
                            type="date"
                            name="issueDate"
                            value={formData.date}
                            // onChange={handleOnChange}
                            placeholder="INGRESA LA FECHA"
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>DETALLES</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="textarea"
                            type="text"
                            name="details"
                            value={formData.details}
                            onChange={handleOnChange}
                            placeholder="INGRESA LOS DETALLES DEL CASO"
                            rows="5"
                            required
                        />
                    </Col>
                </Form.Group>


                <Form.Group as={Row}>
                    <Form.Label column sm={3}>ADJUNTAR ARCHIVO</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="file" size="lg" />

                    </Col>
                </Form.Group>

                <br></br>
                <Button type="submit" variant="info" className="text-light w-100">
                    CONFIRMAR TICKET
                </Button>
            </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    // formError: PropTypes.object.isRequired,
};
