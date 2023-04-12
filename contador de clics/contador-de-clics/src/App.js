import './App.css';
import Button from './components/button.js'
import Counter from './components/counter.js'
import freeCodeCampLogo from './imgs/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manageClic = () => {
    setNumClics(numClics + 1);
  };

  const restartCount = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='main-container'>
        <Counter numClics={numClics} />
        <Button
          text='Clic'
          isAButtonClic={true}
          manageClic={manageClic} />
        <Button
         text='Restart'
         isAButtonClic={false}
         manageClic={restartCount} />
      </div>
    </div>
  );
}

export default App;
