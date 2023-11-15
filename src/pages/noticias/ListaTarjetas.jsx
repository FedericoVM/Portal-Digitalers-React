import { Col, Row } from "react-bootstrap"
import "./tarjeta.css"
import Tarjeta from "./Tarjeta"
const ListaTarjetas = ({ noticias }) => {
  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className="lista-tarjetas g-4">
        {noticias.map((noticia, idx) => (
          <Col key={idx}>
            <Tarjeta noticia={noticia} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ListaTarjetas