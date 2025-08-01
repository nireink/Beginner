
// funciones en JS

/** No es recomendabel estructurar una confucion de esta forma. 
 * Ya que asi se ejecute, se reemplazara el valor con una asignacion de valor nueva 
 * fuera de la funcion.  */
function saludar(nombre){

    return 'Hola, ${nombre}'; 
}

saludar = 30;
console.log( saludar)

/** La forma correcta es crear la constante y asignar una funcion*/


const saludar1 = function(nombre){
   return `Hola, ${ nombre } `;
}
console.log( saludar1 ('Anahi'));

//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>
//Function flecha Permite reducir el codigo en una sola linea.


const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre } `;
}

console.log( saludar2 ('Vegeta'));

//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log( saludar3 ('Goku'));

//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>
const saludar4 = () => 'Hola Mundo'; //No se coloca parentesis por que es un valor primitivo, facil de leer.

console.log( saludar4() );


/** =>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=> 
 * Ejercicio 4 */
const getUser = () =>({

    uid: 'ABC123',
    username: 'El_Papi1502',
});
 
const user = getUser();
console.log( user);

/** =>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=> 
 * Ejercicio 5 
 * 1. Transformar a una funcion de fecha
 * 2. Retornar un objeto implicito
 * 3. Pruebas */

function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        username: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );

/**1. Se agrega el igual = antes de nombre, y se coloca flecha =>
 * 2. Se se eliminan los corchetes y el return. Y se cambia se hacen la combinacion ({})
 * los parentesis indican que greso el objeto de manera implicita.
  */

const getUsuarioActivo2 = ( nombre ) => ({
        uid:'ABC385',
        username: nombre,
    })
;
 const usuarioActivo2 = getUsuarioActivo2('Andres');
 console.log( usuarioActivo2);