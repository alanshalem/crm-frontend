import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export default function SearchForm({ handleOnChange, str }) {
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        Buscar: {" "}
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control name="searchStr" onChange={handleOnChange} value={str} placeholder="BUSCAR..."></Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,
}