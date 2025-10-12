import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Se crea una funcion
//* Hooks : De estado, permite conectarnos a las funciones de la libreria react   /


// Constructor para retornar el valor
function App() {

  function eliminarUltimaFila(){
    if(articulos.length > 0){
      const temp = Array.from(articulos);
      temp.pop();
      setArticulos(temp);

    }
  }

  const [articulos, setArticulos] = useState([
    {
      codigo : 1,
      descripcion : 'papas',
      precio : 12.42
    },
    {
      codigo : 2,
      descripcion : 'naranjas',
      precio : 21
    },
    {
      codigo : 3,
      descripcion : 'peras',
      precio : 18.20 
    },
  ]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return(
              <tr key = {art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={eliminarUltimaFila}>Eliminar Fila</button>
   </div>
  ); 
}

export default App;
  