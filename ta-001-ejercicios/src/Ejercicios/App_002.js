import logo from './logo.svg';
import './App.css';

// Se crea una funcion
function mostrarTitulo(titulo){
  return (
    <h1>
      {titulo}
    </h1>
  );

}


// Constructor para retornar el valor
function App() {

  const title ='Fin';
  const buscadores = ['https://www.google.com/','https://www.bing.com/','https://www.yahoo .com/']


  // Retorna el valor al index html
  //** Podemos acceder a llaves, metodos, funciones mediante las llaves {} */ 
  return (
    <div>
      {mostrarTitulo('Hola Mundo')}
      <a href={buscadores[0]}>Google</a>
      <a href={buscadores[1]}>Bing</a>
      <a href={buscadores[2]}>Yahoo</a>
      {mostrarTitulo(title)}
    </div> 
  ); 
}

export default App;
