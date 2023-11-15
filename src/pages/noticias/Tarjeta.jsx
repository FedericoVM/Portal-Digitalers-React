import { Card, NavLink } from "react-bootstrap"
import "./tarjeta.css"
import { Link } from "react-router-dom"

const Tarjeta = ({noticia}) => {
    return (
        <>  
        <div > 
        <Card className=" mt-2 mx-auto" id="tarjeta">
                <Card.Img className="img-card" variant="top" src={noticia.url_imagen} />
                <Card.Body>
                    <Card.Title className="titulo-card text-info"><Link style={{ textDecoration: 'none'}} to={"/error-404"} className="link-card">{noticia.titulo}</Link></Card.Title>
                    <Card.Text className="parrafo-card text-start">
                        {noticia.descripcion}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
          
        </>
    )
}

export default Tarjeta