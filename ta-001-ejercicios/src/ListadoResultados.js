function ListadoResultados(propiedades){
    return(
        <ul>
            {propiedades.resultados.map((elemento)=>
                <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
            )}
        </ul>
    );
}

export default ListadoResultados;