import "./comentarios.css"
import avatar from "../../../assets/img/opiniones/avatar.jpg"
import { Image } from "react-bootstrap"

const TarjetaComentario = ({coment}) => {
  return (
    <>
         <div  className="card  d-flex flex-column align-items-center d-md-flex flex-md-row align-items-md-center col-lg-8 shadow bg-body rounded">
                    <div className="d-flex flex-column align-items-center ">
                        <Image src={avatar} className="img-avatar rounded-circle"></Image>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center align-items-md-start p-1">
                        <h6 className="fw-bold m-0 email">{coment.email}</h6>
                        <p className="m-0 parrafo-comentario">{coment.comentario}</p>
                        <p className="card-text"><small className="text-muted">{coment.fecha}</small></p>
                    </div>
                </div>
    </>
  )
}

export default TarjetaComentario