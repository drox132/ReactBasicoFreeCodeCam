import React  from "react";
import InputTarea from "./InputTarea";
import Tarea from "./Tarea";
import { useState } from "react";

function ListaTareas (){

  const [tareas, setTareas]= useState([]);


  const agregarTarea =(tarea)=>{
    if(tarea.text ==''){
      alert('Debe ingresar un texto para poder agregar la tarea');
    }else{
      setTareas([tarea,...tareas]);
    }    
  }

   const completarTarea=(id)=>{
    const tareasActualizadas = tareas.map(tarea=>{
      if(tarea.id==id){
        tarea.completada=!tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  }
/*
  const isComplete=(id)=>{
    const tareasCompletadas =tareas.filter(tarea=>tarea.completada==true)
    const tareaCompletadaEliminar=tareasCompletadas.find(tarea=>tarea.id==id)
      if(tareaCompletadaEliminar.id==id){
        return true;
      }
    }
  
   const eliminarTarea = (id)=>{
    const tareasActualizadas = tareas.map(tarea=>{
      if(!tarea.id==id && isComplete(id)){
        return tarea;
      }
    });
    setTareas(tareasActualizadas);
  }*/  

  const eliminarTarea = (id)=>{
    const tareasActualizadas = tareas.filter(tarea=>
      tarea.id!=id
    );
    setTareas(tareasActualizadas);
  }


  return(
    <>
      <InputTarea onSubmit ={agregarTarea} />
        <div>
          {
            tareas.map((tarea)=>
              <Tarea 
              key= {tarea.id}
              id = {tarea.id}
              completada = {tarea.completada}
              textoTarea = {tarea.text}
              completarTarea = {completarTarea}
              eliminarTarea = {eliminarTarea} 
              />
            )
          }
        </div>
    </>
  );
}

export default ListaTareas;