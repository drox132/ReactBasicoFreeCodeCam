import React from "react";
import '../hojas-estilos/tarea.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea (props) {
  return(
    <div className= {props.completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
      <div className="texto-tarea"
        onClick={()=>props.completarTarea(props.id)}
      >
        {
        props.textoTarea
        }
      </div>
      <div className="icono-eliminar"
        onClick={()=>props.eliminarTarea(props.id)}
      >
        {/* este icono se va a importar utilizando una libreria de REACT llamada ract icon con el comando npm (node package manager) */}
        <AiFillCloseCircle  />
      </div>
    </div>
  );
}
export default Tarea;