import { Button, Container, Form } from "react-bootstrap"
import Swal from 'sweetalert2'
import "./comentarios.css"
import { useEffect, useState } from "react"
import TarjetaComentario from "./TarjetaComentario"
import axios from "axios"

const Comentarios = () => {
    const [email, setEmail] = useState("")
    const [opinion, setOpinion] = useState("")
    const [comentariosUsuarios, setComentariosUsuarios] = useState([])
    

    
    const mostrarComentarios = async () => {
        try {
            let comentarios = await axios.get("/comentarios.json")
            setComentariosUsuarios(comentarios.data.comentarios)
        } catch (error) {
            console.log(error)
        }
      
    }

    const agregarComentario = () => {
        let validacion = new RegExp(/\S+@\S+\.\S+/)
        let listaComentarios = comentariosUsuarios
        console.log(validacion.test(email));

        if ( (email.length > 0 && validacion.test(email)) && opinion.length > 0) {
            setComentariosUsuarios([...listaComentarios, { email: email, comentario: opinion, fecha: new Date().toLocaleDateString() }])
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su comentario fue cargado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Verificar que los campos no esten vacios o el email sea el correcto'
            })
        }

        setEmail("")
        setOpinion("")


    }

    useEffect(() => {
        mostrarComentarios()
    }, [])


    return (
        <Container fluid className="py-4 container-comentarios">
            <h3 className="my-1 fw-bolder titulo-comentarios">Comentarios:</h3>
            <div className="tarjetas d-grid gap-3 p-0 pt-2" id="contenedor-comentarios" >
                {
                    comentariosUsuarios.map((coment, index) => (

                        <TarjetaComentario key={index} coment={coment} />
                    ))
                }
            </div>
            <div className="agregar-comentario col-lg-8 mt-5 ">
                <h4 className="py-1">Agregar Comentario:</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Ingresar email *" required pattern=".+@beststartupever\.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">
                            Ingrese un email
                        </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Control as="textarea" placeholder="Deje su comentario..." rows={3} value={opinion} onChange={(e) => { setOpinion(e.target.value) }} />
                    </Form.Group>
                    <Button variant="outline-primary" onClick={agregarComentario}>Enviar</Button>
                </Form>
            </div>
        </Container>
    )
}

export default Comentarios