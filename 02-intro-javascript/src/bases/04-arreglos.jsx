/** Arreglos es una coleccion de informacion 
 * que se encuentra dentro de una misma variable. */

/**Un arreglo se declara const arreglo = [], se usa const arreglo = new Array() cuando es un arreglo con valores estaticos */
/**No es recomendable usar el push, por que el push modifica el objeto principal,
 * Para insertar algo, usaremos el operador spread
 */
const arreglo = [1,2,3,4];
//arreglo.push()
//arreglo.push()
//arreglo.push()
//arreglo.push()

/**Operador Spread es los tres puntos (...), se usa para crear copias. Realemente extrae copias */
let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero){
return numero * 2; //Cada función en JavaSript cuando no tiene un return explicito. Retorna un undefine
});  //Metodo map espera una funcion. Pertenecen a la funcion prototype.
/**Callback es una funcion que se va a ejecutar dentro del metodo */

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 ); 