
import React  from "react";
import '../hojas-estilos/inputTarea.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function InputTarea(props) {

  const [input, setInput] = useState('');

    const escribiendoTarea = (eventoDeCambio)=>{
      setInput(eventoDeCambio.target.value);
    }

    const enviandoLaTareaAGuardar = (e)=>{
      e.preventDefault();
      const nuevaTarea={
        id : uuidv4(),
        text: input,
        completada: false
      }
        props.onSubmit(nuevaTarea);
    }


  return(
    <div >
      <form 
      className="input-tarea-contenedor"
      onSubmit={enviandoLaTareaAGuardar}>
      <input 
        onChange={escribiendoTarea}
        className="input-tarea"
        type="text"
        placeholder="Ingrese una tarea"
        name="input-tarea"
       />
      <button 
      className="boton-tarea"
      >
        Agregar Tarea
      </button>
      </form>
      
    </div>
  );
}
export default InputTarea;