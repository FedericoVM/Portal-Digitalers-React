import { Container, Image } from "react-bootstrap";
import "./error404.css";
import error404 from "../../assets/img/error-404/error-img.png"

const Error404 = () => {
  return (
    <>
      <Container id="contenedor" className=" d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-dark text-center">Oops... Error 404: La pagina no funciona</h2>
        <Image src={error404} className="img-fluid"/>
      </Container>
    </>
  );
};

export default Error404;
