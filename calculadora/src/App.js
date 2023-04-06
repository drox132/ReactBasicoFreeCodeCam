import logo from './logo.svg';
import './App.css';
import imagenFrancisco from './imagenes/francisco.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');
  const agregarInput = (valor) =>{
    setInput(input + valor);
  };

  const limpiarInput = () =>(setInput(''));

  const obtenerResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Debe ingresar Valores para obtener un resultado')
    }
    
  };


  return (
    <div className="App">
        <div className='contenedor-logo'>
            <img
            className='imagen-logo'
            src={imagenFrancisco}
            alt= 'Imagen-Francisco'/>
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla
            input ={input}/>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>7</Boton>
            <Boton manejarClick = {agregarInput}>8</Boton>
            <Boton manejarClick = {agregarInput}>9</Boton>
            <Boton manejarClick = {agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>4</Boton>
            <Boton manejarClick = {agregarInput}>5</Boton>
            <Boton manejarClick = {agregarInput}>6</Boton>
            <Boton manejarClick = {agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>1</Boton>
            <Boton manejarClick = {agregarInput}>2</Boton>
            <Boton manejarClick = {agregarInput}>3</Boton>
            <Boton manejarClick = {agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>.</Boton>
            <Boton manejarClick = {agregarInput}>0</Boton>
            <Boton manejarClick = {obtenerResultado}>=</Boton>
            <Boton manejarClick = {agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear
            borrarTodo= {limpiarInput}
            /*esta es otra forma de hacerlo  ----> borrarTodo={()=> setInput('')}*/>
              Limpiar
            </BotonClear>
          </div>
        </div>
    </div>
  );
}

export default App;
