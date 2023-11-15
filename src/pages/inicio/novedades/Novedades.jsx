import { Button, Row } from "react-bootstrap"
import "./novedades.css"
import { Link } from "react-router-dom"
const Novedades = () => {
  return (
    <Row id="novedades" className="text-center m-0 py-4 my-auto">
      <div>
      <h2 className="display-5 fw-bold">Novedades</h2>
        <p>Conocé antes que nadie las noticias y novedades del mundo IT</p>
        <Link to={"/noticias"}> <Button className="btn">Ver mas</Button></Link>
      </div>
       
    </Row>
  )
}

export default Novedades