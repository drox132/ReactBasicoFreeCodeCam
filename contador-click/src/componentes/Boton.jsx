
import React from "react";
import '../hojas-de-estilo/estilo-comp-boton.css';

function Boton ({texto, click, manejarClick}){
  return(
    <button 
      className={ click === 'click-aumento' ? 'boton-aumento' : click === 'click-disminucion' ? 'boton-disminucion' : 'boton-reinicio' }
      onClick={manejarClick}> 
      {texto}
    </button>
    )
}

export default Boton;