import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import EscudoArgentina from '../../assets/img/escudo_arg.png';
import './LoginForm.css'
export default function LoginForm({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  password,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="escudoArgentina">
            <img className="escudoArgentina-img" src={EscudoArgentina} alt="jefatura gabinete logo"></img>
          </div>
          <h1 className="text-info text-center">Login Agente</h1>
          <hr></hr>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
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

            <Form.Group>
              <Form.Label>CONTRASEÑA</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Ingresa tu contraseña"
                required
              />
            </Form.Group>
            <br></br>
            <Button type="submit" className="w-100">
              INGRESAR
            </Button>
          </Form>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("reset")}>OLVIDE MI CONTRASEÑA</a>
        </Col>
      </Row>
    </Container>
  );
}

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
