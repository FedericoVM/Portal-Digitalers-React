import EntradaPrincipal from "./entradaPrincipal/EntradaPrincipal";
import Suscripcion from "./suscribete/Suscripcion";
import "./inicio.css";
import Novedades from "./novedades/Novedades";

const Inicio = () => {
  return (
    <>
      <div className="container-entrada-ppal">
        <EntradaPrincipal />
      </div>
      <div>
        <Novedades />
      </div>
      <div>
        <Suscripcion />
      </div>
    </>
  );
};

export default Inicio;
