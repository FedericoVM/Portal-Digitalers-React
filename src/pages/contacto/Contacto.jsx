import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./contacto.css";

const Contacto = () => {
  return (
    <>
      <Container fluid id="contacto" className="">
        <Row id="titulo-contacto" className="text-dark d-flex ">
          <div className="titulo m-auto text-center">
            <h3 className="display-5">Estamos para ayudarte</h3>
            <p>Encontrá la asistencia que estás buscando</p>
          </div>
        </Row>
          <Container fluid className=" py-3">
            <h2 className="text-dark  text-center">Preguntas Frecuentes</h2>
            <Accordion className=" mx-auto shadow-lg p-3 mb-5 bg-body rounded bg-transparent">
              <Accordion.Item eventKey="0">
                <Accordion.Header>¿Como puedo comunicarme?</Accordion.Header>
                <Accordion.Body className="accordion-body text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamc.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Como postularme a las becas?</Accordion.Header>
                <Accordion.Body className="accordion-body text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Como puedo formar parte de la empresa?</Accordion.Header>
                <Accordion.Body className="accordion-body text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Tienen redes sociales?</Accordion.Header>
                <Accordion.Body className="accordion-body text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>¿Donde estan ubicados?</Accordion.Header>
                <Accordion.Body className="accordion-body text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        <Row
          id="container-map-form"
          className=" d-flex flex-column justify-content-evenly flex-wrap flex-md-row"
        >
          <Col
            md={5}
            lg={5}
            id="mapa-telecom"
            className="contenedor-mapa m-md-auto mt-4"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.768410019312!2d-58.38110502488041!3d-34.63529229934971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb35fb35dba3%3A0x382716cde478548d!2sTelecom%20Empresas!5e0!3m2!1ses-419!2sar!4v1697507413509!5m2!1ses-419!2sar"
              loading="lazy"
            ></iframe>
          </Col>
          <Col md={5} lg={4} id="formulario" className="m-md-auto p-2 mt-4 ">
            <Form className="p-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-dark">Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-dark">Asunto</Form.Label>
                <Form.Control type="text" placeholder="Servicio" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-dark">Consulta</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacto;
