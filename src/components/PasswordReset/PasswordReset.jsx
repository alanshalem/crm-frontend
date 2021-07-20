import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import EscudoArgentina from '../../assets/img/escudo_arg.png';
import './PasswordReset.css';

export default function PasswordReset({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) {
  return (
    <Container>
      <Row>
        <Col>
        <div className="escudoArgentina">
          <img className="escudoArgentina-img" src={EscudoArgentina} alt="jefatura gabinete logo"></img>
        </div>
       
          <h1 className="text-info text-center">Recuperar Contraseña</h1>
          <hr></hr>
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Ingresa tu email (...@jefatura.gob.ar)"
                required
              />
            </Form.Group>

            <br></br>
            <Button type="submit" className="w-100">
              RECUPERAR MI CONTRASEÑA
            </Button>
          </Form>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <a href="#!" onClick={()=>formSwitcher("login")}>VOLVER ATRAS</a>
        </Col>
      </Row>
    </Container>
  );
}

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
