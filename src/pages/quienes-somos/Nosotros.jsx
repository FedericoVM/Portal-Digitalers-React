import { Col, Container, Row, Image } from "react-bootstrap";
import "./nosotros.css";
import nosotros_1 from "../../assets/img/nosotros/nosotros-1.jpeg";
import nosotros_2 from "../../assets/img/nosotros/nosotros-2.jpeg";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <>
      <Container fluid className="nosotros text-dark ">
        <Row id="somos-portal" className="bg-dark ">
          <h2 className="text-center display-6">Nuestro propósito</h2>
          <p className="text-center">
            Te acompañamos para que puedas potenciar tu mundo
          </p>

          <div className="d-flex flex-column flex-md-row py-4 justify-content-md-around align-items-md-center">
            <Col md={3} lg={2} className="proposito text-center mx-2 p-4 ">
              <Link className="text-decoration-none" to={"/error-404"}>
                <h3>Somos Portal Digitalers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, consectetur?
                </p>
              </Link>
            </Col>
            <Col
              md={3}
              lg={2}
              className="proposito text-center mx-2 p-4 my-2 my-md-0 "
            >
              <Link className="text-decoration-none" to={"/error-404"}>
                <h3>Somos Portal Digitalers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, consectetur?
                </p>
              </Link>
            </Col>
            <Col md={3} lg={2} className="proposito text-center mx-2 p-4">
              <Link className="text-decoration-none" to={"/error-404"}>
                <h3>Somos Portal Digitalers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, consectetur?
                </p>
              </Link>
            </Col>
          </div>
        </Row>
        <Row id="empresa" className=" py-4">
          <h3 className="m-auto text-center display-6 fw-bold">
            Conoce mejor nuestra empresa
          </h3>
        </Row>
        <Row className="flex-column align-items-center" id="compromiso">
          <p className="display-6 pt-4 text-dark">Nuestro compromiso</p>
          <p className="text-dark fs-5">
            Impulsamos la industria del futuro con inversión en tecnología e
            innovación
          </p>
          <Col md={12} lg={10}>
            <div className="card card-nosotros border rounded-3">
              <div className="row g-0  ">
                <div className="col-sm-7 col-md-8 contenedor-img ">
                  <Image
                    src={nosotros_1}
                    className="img-fluid h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div
                  className="col-sm-5 col-md-4 m-auto "
                  id="contenedor-body-card"
                >
                  <div className="card-body p-5">
                    <h5 className="card-title text-dark ">Inversores</h5>
                    <p className="card-text text-dark text-start">
                      Invertimos para ofrecer conectividad fija y móvil de alta
                      velocidad, así como una plataforma de contenidos y
                      entretenimiento. Nuestra solidez financiera nos permite
                      enfocarnos en el desarrollo de nuevos negocios digitales.
                    </p>
                    <Link to={"/error-404"}>
                      <button type="button" className="btn btn-outline-info">
                        Ver mas
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={10}>
            <div className="card card-nosotros my-4">
              <div className="row g-0  ">
                <div className="col-sm-7 col-md-8 contenedor-img ">
                  <Image
                    src={nosotros_2}
                    className="img-fluid h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div
                  className="col-sm-5 col-md-4 m-auto"
                  id="contenedor-body-card"
                >
                  <div className="card-body p-5">
                    <h5 className="card-title text-dark ">Inversores</h5>
                    <p className="card-text text-dark text-start">
                      Invertimos para ofrecer conectividad fija y móvil de alta
                      velocidad, así como una plataforma de contenidos y
                      entretenimiento. Nuestra solidez financiera nos permite
                      enfocarnos en el desarrollo de nuevos negocios digitales.
                    </p>
                    <Link to={"/error-404"}>
                      <button type="button" className="btn btn-outline-info">
                        Ver mas
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;
