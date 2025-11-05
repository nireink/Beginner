import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [texto, setTexto] = useState('');

  function cambiarTexto(e) {
    setTexto(e.target.value);
  }

  return (
    <div>
      <textarea value={texto} onChange={cambiarTexto} cols="100" rows="5"></textarea>
    </div>
  );
}

export default App;
