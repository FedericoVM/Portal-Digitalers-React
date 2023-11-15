import { Col, Container, Image, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/img/logo.png"
import facebook from "../../assets/img/footer/facebook-svgrepo.svg"
import instagram from "../../assets/img/footer/instagram-icon.svg"
import linkedin from "../../assets/img/footer/linkedin-icon.svg"
import youtube from "../../assets/img/footer/youtube-icon.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid id="footer">
      <Row className="footer-row-1  d-flex flex-column justify-content-center d-md-flex flex-md-row">
        <Col className=" text-center my-3 my-md-auto  col-md-4">
          <Image src={logo} id="logo" />
        </Col>
        <Col className=" col-xs-8 col-sm-6 col-md-4 mx-auto my-3  my-md-auto">
          <div className="redes-sociales d-flex justify-content-around ">
            <a href="https://www.facebook.com/" ><img className="icono" src={facebook} alt="icono-facebbok" /></a>
            <a href="https://www.instagram.com/" ><img className="icono" src={instagram} alt="icono-instagram" /></a>
            <a href="https://ar.linkedin.com/" ><img className="icono" src={linkedin} alt="icono-linkedin" /></a>
            <a href="https://www.youtube.com/" ><img className="icono" src={youtube} alt="icono-youtube" /></a>
          </div>
        </Col>
        <Col className="info-adicional my-3 my-md-0 d-flex flex-column align-items-center ">
          <Link to={"/error-404"} className="py-2 text-decoration-none ">Terminos y condiciones</Link>
          <Link to={"/error-404"} className="py-2 text-decoration-none ">Preguntas Frecuentes</Link>
          <Link to={"/error-404"} className="py-2 text-decoration-none ">Soporte</Link>
          <Link to={"/error-404"} className="py-2 text-decoration-none ">Licencia</Link>
          <Link to={"/error-404"} className="py-2 text-decoration-none ">Ayuda</Link>
        </Col>
      </Row>
      <Row id="derechos-footer" className="p-2 text-center">
        <p className=" m-auto"> Federico Valdiglesias TP - Final - Digitalers - 2023</p>
      </Row>
    </Container>
  )
}

export default Footer