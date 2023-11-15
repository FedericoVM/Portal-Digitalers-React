import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"
import { Link } from 'react-router-dom';


const Slider = () => {

    return (
        <>
            <Container fluid className='p-0  mp-5' id='slider'>
                <Carousel>
                    <Carousel.Item className='carousel-item item-1'interval={5000}>
                        <Carousel.Caption className='texto-carousel'>
                            <Link to={"/error-404"} style={{ textDecoration: 'none', color: 'white' }}><h3>Cómo ser organizado: claves para alcanzar el éxito</h3></Link>
                            <p>  La organización es una habilidad importante para conseguir el
                                éxito en cualquier ámbito de la vida. Aunque algunos nacen con
                                ella, otros pueden aprender a ser más organizados.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item item-2' interval={5000}>
                        <Carousel.Caption className='texto-carousel'>
                            <Link to={"/error-404"} style={{ textDecoration: 'none', color: 'white' }} ><h3>Habilidades principales para aprender a ser un desarrollador</h3></Link>
                            <p>Si estás buscando recursos o quieres saber más sobre el trabajo
                                en el que te estás metiendo, hemos recopilado las mejores
                                plataformas de aprendizaje online.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item item-3' interval={5000}>
                        <Carousel.Caption className='texto-carousel'>
                            <Link to={"/error-404"} style={{ textDecoration: 'none', color: 'white' }} ><h3>Te mantenemos conectado</h3></Link>
                            <p>
                                Te brindamos las noticias mas reciente del mundo it
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container >
        </>



    )
}

export default Slider