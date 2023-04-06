import React from 'react';
import '../hojas-estilo-comp/testimonio.css'
function Testimonio (props){
  return (
     <div className='contenido-testimonio'>
        <img
          className='imagen-testimonio'
          src= {require(`../Imagenes/imagen-${props.nombre}.png`)}
          alt= {`imagen-${props.nombre}-no-disponible`}
          />
          <div className='contenedor-texto-testimonio'>
            <h2>
              <span id='negrita'>{props.nombre}</span> en  <span id='negrita'>{props.pais}</span>
            </h2>
            <h3>
              {props.cargo} en <span id='negrita'>{props.empresa}</span>
            </h3>
            <p className='texto-testimonio'>"{props.testimonio}"</p>

          </div>
      </div>

  );
}

export default Testimonio;