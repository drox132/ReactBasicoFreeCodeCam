import React from "react";
import '../hojas-de-estilo/contador.css'
function Contador(props){
  return (
    <div className="contenedor-contador">
      {props.valorContador}
    </div>
  );
}
export default Contador;