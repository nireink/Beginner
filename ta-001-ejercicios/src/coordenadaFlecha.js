import { useEffect, useState } from "react";

function CoordenadaFlecha() {
    
    const [posicion, setPosicion] = useState({ x : 0, y : 0});

    useEffect(() => {
        window.addEventListener('mousemove', fijarPosicion);
        return() =>{
            window.removeEventListener('mousemove', fijarPosicion);
            console.log("Componente desmontado,se borro el registro de eventos");
        }
    },[])

    function fijarPosicion(e){
        setPosicion({ x:e.clientX, y:e.clientY});
    }

    return(
        <div>
            <h3>Coordenadas del raton</h3>
            <p>{posicion.x} - {posicion.y}</p>
        </div>
    );
}

export default CoordenadaFlecha;