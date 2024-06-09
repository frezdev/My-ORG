///import { useState } from "react";
import "./miORG.css";

const MiOrg = (props) => {

    ///const [mostrar, actualizarMostrar] = useState(true)

    ///const manejarClick = () =>{
    ///    console.log("Mostrar/Ocultar", !mostrar);
    ///    actualizarMostrar(!mostrar)
    ///}

  return (
    <section className="orgSection">
      <h3 className="tittle">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
    /// la funcion cambiarMostrar esta en la app.js y la trajimos por un props
  );
};

export default MiOrg;
