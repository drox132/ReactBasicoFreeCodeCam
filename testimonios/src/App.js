
import './App.css';
import Testimonio from './componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Bienvenidos a la Practica de Francisco</h1>
         <Testimonio
          nombre = 'Andrea'
          descripcion = 'imagen no disponible'
          cargo ='Desarrollador de Software'
          pais= 'Singapur'
          empresa = 'Amazon'
          testimonio = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
           />
        <Testimonio
          nombre = 'Carlos'
          descripcion = 'imagen no disponible'
          cargo ='Desarrollador de Software'
          pais= 'China'
          empresa = 'Mercado Libre'
          testimonio = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
           />
        <Testimonio
          nombre = 'Petra'
          descripcion = 'imagen no disponible'
          cargo ='Desarrollador de Software'
          pais= 'Singapur'
          empresa = 'Amazon'
          testimonio = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
           />
      </div>
    </div>
  );
}

export default App;
