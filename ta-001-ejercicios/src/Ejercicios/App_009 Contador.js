import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dado from './Dado';
import Contador from './Contador';

// En los archivos .js se debe importar las funciones de dado.css y dado.js
// Se crea una funcion
//* Hooks : De estado, permite conectarnos a las funciones de la libreria react   /


// Constructor para retornar el valor
function App() {
/*
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
*/

function realizarConteo(){ 
  setNumero(numero + 1);
}

const [numero,setNumero] = useState(0);

  return (
    <div>
      <Contador valor={numero}/>
      <br></br>
      <button onClick={realizarConteo}>+</button>

    </div>
  );
}

export default App;
