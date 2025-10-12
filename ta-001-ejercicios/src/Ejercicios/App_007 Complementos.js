import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dado from './Dado';

// En los archivos .js se debe importar las funciones de dado.css y dado.js
// Se crea una funcion
//* Hooks : De estado, permite conectarnos a las funciones de la libreria react   /


// Constructor para retornar el valor
function App() {

  const valor1 = Math.trunc(Math.random() * 6) + 1;
  const valor2 = Math.trunc(Math.random() * 6) + 1;
  const valor3 = Math.trunc(Math.random() * 6) + 1;

  return (
    <div>
      <Dado valor={valor1}/>
      <Dado valor={valor2}/>
      <Dado valor={valor3}/>
    </div>
  );
}

export default App;
