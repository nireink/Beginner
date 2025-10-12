import logo from './logo.svg';
import './App.css';

// Se crea una funcion
function retornarNumeroAleatorio(){
  return Math.trunc(Math.random * 10);

}


// Constructor para retornar el valor
function App() {

  // Declara constantes
  const siglo = 21;
  // Creo un objeto persona 
  const persona ={
    nombre: 'Christian',
    edad:'17'
  }


  // Retorna el valor al index html
  //** Podemos acceder a llaves, metodos, funciones mediante las llaves {} */ 
  return (
    <div>
      <h1>Titulo Nivel 1</h1>
      <hr/>
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} anios</p>
      <h3>Llamada a una funcion</h3>
      <p>Un valor aleatorio llamando a un metodo</p>
      {retornarNumeroAleatorio()}
      <h3>Calculo inmediato de expresiones</h3>
      3+3 = {3+3}
    </div> 
  );
}

export default App;
