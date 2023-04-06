 import logo from './logo.svg';
import './App.css';
import imagenLogo from './imagenes/contador-click-logo-000.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

  

function App() {

  //utilizacion de un Hook useState

  const [valorContador, setValorContador] = useState(0);
         
  //manejadores de click cuando es cada uno para determinar logica que afecte el estado
  const clickAumento = ()=>{
    valorContador = setValorContador(valorContador+1);
  }
  const clickDisminucion = ()=>{
    if(valorContador>0){
    valorContador = setValorContador(valorContador-1);
    }
  }
  const clickReinicio = ()=>{
    valorContador = setValorContador(0);
  }
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
         className='imagen-logo'
         src={imagenLogo}
         alt='imagen-logo-no-disponible' />
      </div>
      <div className='contenedor-contador'>
        <Contador
        valorContador={valorContador}/>
      </div>
      <div className='contenedor-contador'>
        <Boton
        texto='Aumento'
        click='click-aumento'
        manejarClick={clickAumento}/>
        <Boton
        texto='Disminucion'
        click='click-disminucion'
        manejarClick={clickDisminucion}/>
        <Boton
        texto='Reinicio'
        click='click-reinicio'
        manejarClick={clickReinicio}/>
      </div>
      
    </div>
  );
}

export default App;
