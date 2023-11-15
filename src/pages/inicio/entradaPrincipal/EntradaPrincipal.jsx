import "./entradaPrincipal.css"
import video from "../../../assets/videos/codear.mp4"
import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const EntradaPrincipal = () => {
    return (
        <>
            <Container>
                <Row id="inicio">
                    <div className="fondo"></div>
                    <video src={video} autoPlay muted loop className="video-bg p-0"> </video>
                    <div id="anotarse-curso">
                        <h1 className="display-5">
                            Conectate con el <span id="noticia-header">mundo de la programación</span>
                        </h1>
                        <p>Cursos gratuitos para jóvenes con pasión por la tecnología</p>
                        <Link to={"/error-404"}><Button id="inscripciones" variant="outline-light">Inscripciones!</Button></Link>
                        
                    </div>
                </Row>
            </Container>



        </>
    )
}

export default EntradaPrincipal