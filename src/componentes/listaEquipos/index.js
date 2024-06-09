import "./listaEquipos.css";
import { TiDelete } from "react-icons/ti";

const ListaEquipos = (props) => {
  const { eliminarEquipo } = props;
  return (
    <section className="equiposEliminables">
      {props.todosLosEquipos.map((el) => {
        return (
          <>
            <div className="nombresEquipos">
              <h6>{el.titulo}</h6>
              <TiDelete 
                onClick={() => eliminarEquipo(el.id)}
                className="eliminarEquipo"
              />
            </div>
          </>
        );
      })}
    </section>
  );
};

export default ListaEquipos;
