import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { rubros } from './datos.js';
import { articulos } from './datos.js';

function App() {

  const [rubro, setRubro] = useState(rubros[0]);
  const [articuloRubro, setArticuloRubro] = useState(articulos.filter(articulo => articulo.codigoRubro === rubro.codigo));
  const [articulo, setArticulo] = useState(articuloRubro[0]);

  function cambiarRubro(e){
    setRubro(rubros.find(rubro => rubro.codigo === Number.parseInt(e.target.value)));
    const articulosRubro = articulos.filter(articulo => articulo.codigoRubro === Number.parseInt(e.target.value));
    setArticuloRubro(articulosRubro);
    setArticulo(articulosRubro[0]);
  }

  function cambiarArticulo(e){
    setArticulo(articuloRubro.find(articulo => articulo.codigo === Number.parseInt(e.target.value)));  
  }
  return (
    <div className='formulario'>
      <div>
        <select value={rubro.codigo} onChange={cambiarRubro}>
          {rubros.map(rubro => (
            <option key={rubro.codigo} value={rubro.codigo}>
              {rubro.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select value={articulos.codigo} onChange={cambiarArticulo}>
          {articuloRubro.map(articulo => (
            <option key={articulo.codigo} value={articulo.codigo}>
              {articulo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          <li>Rubro: <strong>{rubro.nombre}</strong></li>
          <li>Artículo: <strong>{articulo.nombre}</strong></li>
          <li>Precio: <strong>{articulo.precio}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
