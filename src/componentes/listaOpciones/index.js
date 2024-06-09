import "./listaOpciones.css";

const ListaOpciones = (props) => {
  
const manejarCambio = (e) => {
  props.setEquipo(e.target.value)

}

  return (
    <div className="listaOpciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disable defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos.map((equipo, index) => {
          return <option key={index} value={equipo}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
