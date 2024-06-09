import { useState } from "react";
import "./formulario.css";
import Campo from "../campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";
import ListaEquipos from "../listaEquipos";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo, todosLosEquipos, eliminarEquipo } = props;
 
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar Envio");
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);

    setNombre("");
    setPuesto("");
    setFoto("");
    setEquipo("");

    alert("Tu colaborador ha sido creado con éxito")
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
    setTitulo("");
    setColor("");
    alert("Tu equipo ha sido creado con éxito")
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresa el nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresa el puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresa enlace de foto"
          required
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el Hex"
          required
          valor={color}
          setValor={setColor}
          type="color"
        />
        <Boton texto="Registrar equipo" />
        
        <ListaEquipos 
        todosLosEquipos={todosLosEquipos}
        eliminarEquipo={eliminarEquipo}
        />
      </form>
    </section>
  );
};

export default Formulario;
