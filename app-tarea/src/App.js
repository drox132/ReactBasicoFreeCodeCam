import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListaTareas from './componentes/ListaTareas';

function App() {


  return (
    <div className="App">
      <div className='contenedor-tareas'>

        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
