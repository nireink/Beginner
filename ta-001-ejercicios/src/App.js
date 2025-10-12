import './App.css';
import { useState } from 'react';
import CoordenadaFlecha from './coordenadaFlecha';

function App() {

    const [visible, setVisible] = useState(true);

    function ocultar(){
        setVisible(false);
    }

   return(
        <div>
            {visible ? <CoordenadaFlecha/> : <p>Se oculto la coordenada</p>}
            <button onClick={ ocultar }>Ocultar</button>
        </div>
    );
}

export default App;

