import logo from './logo.svg';
import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() {

const [valorContador , setValorContador] = useState(0);

const aumentoClick = () => {
  valorContador = setValorContador ( valorContador + 1);
};
const disminucionClick = () => {
  if(valorContador>0){
    valorContador = setValorContador ( valorContador - 1);
  }
};
const reinicioClick = () => {
  valorContador = setValorContador (0);
};
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Contador de Francisco</h1>
        <Contador
        valorContador={valorContador}/>
        <div>
        <Boton
          textoBoton = 'Aumento'
          lugarClick = 'click-aumento'
          controladorClick= {aumentoClick} />
        <Boton
          textoBoton ='Disminucion'
          lugarClick = 'click-disminucion'
          controladorClick= {disminucionClick} />
        <Boton
          textoBoton ='Reinicio '
          lugarClick = 'click-reinicio'
          controladorClick = {reinicioClick} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
