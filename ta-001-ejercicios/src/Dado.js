import './Dado.css'
// La clase dado sera un componente.
//Valor importar las caracteristicas de Dado.css 
function Dado(propiedeades){

    return(
        <div className='dado-recuadro'>
            {propiedeades.valor}       
        </div>
    );
}

export default Dado;