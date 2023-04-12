import './App.css';
import freeCodeCampLogo from './imgs/freecodecamp-logo.png'
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      
      </div>
  </div>
  );
}

export default App;
