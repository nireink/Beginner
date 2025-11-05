import './App.css';
import { useState } from 'react';

function App() {

  const [estudios, setEstudios] = useState('Primario');

  function cambiarEstudios(e) {
    setEstudios(e.target.value);
  }

  return (
    <div>
      <p>
        <input type="radio" value="Primario" checked={estudios === 'Primario'} onChange={cambiarEstudios} />
        Primario
      </p>
      <p>
        <input type="radio" value="Secundario" checked={estudios === 'Secundario'} onChange={cambiarEstudios} />
        Secundario
      </p>
      <p>
        <input type="radio" value="Universitario" checked={estudios === 'Universitario'} onChange={cambiarEstudios} />
        Universitario
      </p>
      <p>Estudios seleccionados: {estudios}</p>

    </div>
  );
}

export default App;
