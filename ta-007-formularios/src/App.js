import './App.css';
import { useState } from 'react';
import { rubros } from './datos.js';
import { articulos } from './datos.js';

function App() {
  // inicializa rubro con el primer elemento disponible
  const [rubro, setRubro] = useState(rubros[0] ?? { codigo: '', nombre: '' });

  // convierte codigorubro a número al filtrar para evitar problemas de tipo
  const inicialArticulos = articulos.filter(a => Number(a.codigorubro) === Number(rubro.codigo));
  const [articulosRubro, setArticulosRubro] = useState(inicialArticulos);
  const [articulo, setArticulo] = useState(inicialArticulos[0] ?? null);

  function cambiarRubro(e) {
    const codigoRubro = Number(e.target.value);
    const nuevoRubro = rubros.find(r => r.codigo === codigoRubro) ?? rubros[0];
    setRubro(nuevoRubro);

    const articulosrubro = articulos.filter(a => Number(a.codigorubro) === codigoRubro);
    setArticulosRubro(articulosrubro);
    setArticulo(articulosrubro[0] ?? null);
  }

  function cambiarArticulo(e) {
    const codigoArticulo = Number(e.target.value);
    const nuevo = articulosRubro.find(a => a.codigo === codigoArticulo) ?? null;
    setArticulo(nuevo);
  }

  return (
    <div className="formulario">
      <div>
        <select value={String(rubro.codigo)} onChange={cambiarRubro}>
          {rubros.map(r => (
            <option key={r.codigo} value={String(r.codigo)}>
              {r.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select value={articulo ? String(articulo.codigo) : ''} onChange={cambiarArticulo}>
          {articulosRubro.length > 0 ? (
            articulosRubro.map(a => (
              <option key={a.codigo} value={String(a.codigo)}>
                {a.nombre}
              </option>
            ))
          ) : (
            <option value="">No hay artículos</option>
          )}
        </select>
      </div>

      <div>
        <ul>
          <li>Rubro: <strong>{rubro?.nombre ?? '-'}</strong></li>
          <li>Articulo: <strong>{articulo?.nombre ?? '-'}</strong></li>
          <li>Precio: <strong>{articulo?.precio ?? '-'}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default App;