import './App.css';
import { useState } from 'react';
import ListadoResultados from './ListadoResultados';
import FormularioNumeros from './formularioNumeros';



function App() {
    const [operaciones, setOperacion]=useState([]);

    function sumar(event){
        event.preventDefault();
        const v1 = parseInt(event.target.valor1.value);
        const v2 = parseInt(event.target.valor2.value);
        const suma = v1 + v2;
        const nuevo = {
            resultado : suma,
            valor1 : v1,
            valor2 : v2
        }

        setOperacion([nuevo,...operaciones]);//* Los tres puntos/

        event.target.valor1.value = '';
        event.target.valor2.value = '';
    }

    return(
        <div>
            <FormularioNumeros onSumar={sumar}/>
            <ListadoResultados resultados={operaciones}/>
        </div>
    )
}

export default App;

