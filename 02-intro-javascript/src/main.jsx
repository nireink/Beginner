/**Desustructuracion
 * Asignacion desestructurante
 * 1. Creamos un objeto
 */

console.log('');
console.log('Ejercicio 1');
console.log('');

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log('');
console.log('Ejercicio 2');
console.log('Usamos la asignacion desustructurante');

const {nombre, edad, clave} = persona; // Indica que extraiga una constante del objeto persona

console.log( nombre );
console.log( edad );
console.log( clave );

console.log('');
console.log('Ejercicio 3');
console.log('Usamos la asignacion desustructurante');

const retornaPersona1 = (usuario)=>{

    console.log(usuario)

}

retornaPersona1(persona);

console.log('');
console.log('Ejercicio 4');
console.log('Usamos la asignacion desustructurante');

const retornaPersona2 = (usuario)=>{

    const{edad, clave, nombre} = usuario;

    console.log( edad, clave, nombre)

}

retornaPersona2(persona);

console.log('');
console.log('Ejercicio 4');
console.log('Usamos la desustructuracin en el argumento, podemos usar valores por defecto');

const retornaPersona3 = ({nombre, edad, rango='Capitan'}) => {

    console.log( nombre, edad, rango )

}

retornaPersona3(persona);

console.log('');
console.log('Ejercicio 5');
console.log('Usamos la desustructuracin en el argumento, podemos usar valores por defecto');

const retornaPersona4 = ({clave, nombre, edad, rango='Capitan'}) => {

    return{
        nombreClave: Clave,
        anios: edad,
    }

}

const avenger = retornaPersona4(persona);