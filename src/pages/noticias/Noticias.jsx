import { Container, Row } from "react-bootstrap";
import ListaTarjetas from "./ListaTarjetas";
import "./noticias.css";
import { useEffect, useState } from "react";
import Slider from "./slider/Slider";
import Comentarios from "./comentarios/Comentarios";
import axios from "axios";

const Noticias = () => {
  const [listaNoticias, setListaNoticias] = useState([]);

  let traerNoticias = async () => {
    try {
      let noticias = await axios.get(
        "/listaNoticias.json"
      );
      setListaNoticias(noticias.data.listaNoticias);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerNoticias();
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="titulo-noticias  justify-content-center align-items-end ">
          <div className="p-0">
            <h1 className="text-center display-1 fw-bold">Noticias</h1>
            <p>Te mantenemos informado las 24 hs.</p>
          </div>
        </Row>
      </Container>

      <Container fluid className="noticias p-1 p-md-5 w-100">
        <ListaTarjetas noticias={listaNoticias} />
      </Container>
      <Comentarios />
      <Slider />
    </>
  );
};

export default Noticias;
