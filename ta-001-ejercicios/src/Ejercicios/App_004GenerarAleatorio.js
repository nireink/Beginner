import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Se crea una funcion
//* Hooks : De estado, permite conectarnos a las funciones de la libreria react   /


// Constructor para retornar el valor
function App() {

  function generarAleatorio(){
    const v = Math.trunc(Math.random()*10);    
    setValor(v);
  }

  const [numero, setValor] = useState(0); //Creacion de un HOOK

  return (
    <div>
      <p>Numero aleatorio: {numero}</p>
      <button onClick={generarAleatorio}>Generar valor aleatorio</button>
    </div>
  ); 
}

export default App;
 