import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dado from './Dado';

// En los archivos .js se debe importar las funciones de dado.css y dado.js
// Se crea una funcion
//* Hooks : De estado, permite conectarnos a las funciones de la libreria react   /


// Constructor para retornar el valor
function App() {

  function generarValor(){
    return Math.trunc(Math.random()*6)+1;
  }

  function tirar(){
    setValor1(generarValor());
    setValor2(generarValor());
    setValor3(generarValor());
  }

  const [valor1,setValor1] = useState(0);
  const [valor2,setValor2] = useState(0);
  const [valor3,setValor3] = useState(0);

  return (
    <div>
      <Dado valor={valor1}/>
      <Dado valor={valor2}/>
      <Dado valor={valor3}/>
      <br/>
      <button onClick={tirar}>Tirar</button>
    </div>
  );
}

export default App;
