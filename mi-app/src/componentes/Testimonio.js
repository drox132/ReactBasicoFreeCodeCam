import React from 'react';
import '../estilos/Testimonio.css';

function Testimonio (props){
  return (
     <div className='contenido-testimonio'>
        <img
          className='imagen-testimonio'
          src= {require (`../Imagenes/imagen-${props.imagen}.png`) }
          alt= {`imagen-${props.imagen}`}
          />
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
              <span id='negrita'>{props.nombre}</span> en  <span id='negrita'>{props.pais}</span>
            </p>
            <p className='cargo-testimonio'>
              {props.cargo} en <span id='negrita'>{props.empresa}</span>
            </p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>

          </div>
      </div>

  );
}

export default Testimonio;