import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./suscripcion.css";

const Suscripcion = () => {
  return (
    <>
      <Container fluid className="contenedor-suscripcion py-4 " id="suscribete">
        <Row className="suscripcion justify-content-around align-items-center py-5">
          <Col md={7} lg={6}>
            <h2 className="text-center">
              Suscribite a nuestro <span>Newsletter</span>
            </h2>
          </Col>
          <Col md={4} lg={4}>
            <InputGroup className="">
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Ingresar email"
              />
              <Button
                id="btn-suscribirse"
                variant="outline-info"
                className="ms-1"
              >
                Enviar
              </Button>{" "}
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Suscripcion;
