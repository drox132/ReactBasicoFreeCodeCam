import React from "react";
import '../hojas-de-estilo/boton.css'

function Boton(props){

  const manejadorDeClick = () => {
     return props.manejarClick(props.children);
  }
  const esOperador = (valor) =>{
    return isNaN(valor) && (valor!='.') && (valor != '=');
  };

  return(
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd() }
      onClick = { manejadorDeClick }
      /*tambien se puede hacer asi-------> onClick = { ()=> props.manejarClick(props.children)} */>
        
      {props.children}
      </div>
  );
}
export default Boton;
