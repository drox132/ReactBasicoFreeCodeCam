//import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>
          <h1>Estos son los Comentarios de nuestros alumnos sobre Francisco </h1>
          <Testimonio
            nombre='Andrea Guevara'
            pais='Argenina'
            cargo='Desarrolladora de software'
            empresa ='Spotify'
            imagen='Andrea'
            testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'/>

          <Testimonio
            nombre='Shawn Wang '
            pais='Singapur'
            cargo='Desarrolladora de software'
            empresa ='Amazon' 
            imagen='Carlos'
            testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'/>
        
        <Testimonio
            nombre='Sara Chima'
            pais='Nigeria'
            cargo='Desarrolladora de software'
            empresa ='ChatDesk' 
            imagen='Petra'
            testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'/>
        </div>
        
      {/*--------------------------------------------------
      ------------------------------------------------------
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
    </div>
  );
}

export default App;
