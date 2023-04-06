import React from "react";
import '../hojas-de-estilo/boton.css'

function Boton(props){
  return (
    <div 
    className = {props.lugarClick == 'click-aumento' ? 'click-aumento' 
                : props.lugarClick === 'click-disminucion' ? 'click-disminucion'
                : 'click-reinicio'}
    onClick = {props.controladorClick}>
      {props.textoBoton}
    </div>
  );
}

export default Boton;