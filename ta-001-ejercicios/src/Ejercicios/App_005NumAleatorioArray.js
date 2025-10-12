import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Se crea una funcion
//* Hooks : De estado, permite conectarnos a las funciones de la libreria react   /


// Constructor para retornar el valor
function App() {

  function generarAleatorios() {
    const vector = new Array(5);
    for(let x = 0; x < vector.length; x++){
      vector[x] = Math.trunc(Math.random() * 10);
    }
    setNumeros(vector);
  }

  const [numeros, setNumeros] = useState([0,0,0,0,0]); //Creacion de un HOOK

  return (
    <div>
      <p>Numeros aleatorios</p>
      {numeros.map(num =>(
        <p>{num}</p> 
      ))}
      <button onClick={generarAleatorios}>Generar valor aleatorios</button>
    </div>
  ); 
}

export default App;
 