import React from "react";
import '../hojas-de-estilo/estilo-contador.css'

function Contador({ valorContador }){
  return (
    <div className="contador">
      {valorContador}
    </div>
  )
}
export default Contador;