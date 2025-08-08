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
console.log('Renombramos una constante  useContext');

const useContext1 = ({clave, nombre, edad, rango='Capitan'}) => {

    return{
        nombreClave: clave,
        anios: edad,
    }

}

const avenger = useContext1(persona);
console.log(avenger)

console.log('');
console.log('Ejercicio 6');
console.log('Renombramos una constante  useContext');

const useContext2 = ({clave, nombre, edad, rango='Capitan'}) => {

    return{
        nombreClave: clave,
        anios: edad,
        //podemos retornar un objeto que tiene mas objetos dentro
        latlng: {
            lat: 14.1232,
            lng: -12.3232

        }

    }

}

/**Creamos la desustructuracion o asignacion desustructurante
 * Si necesito el valor de latitud y longitud en sus respectivas constantes, 
 * agregamos :{} en el nombre de la constante, indica que busque y extraiga
 * las variables que menciono, asi se puede extraer objetos anidados y asignarlos a constantes.    
 * */ 
const {nombreClave, anios, latlng:{lat, lng}} = useContext2(persona);
console.log(nombreClave, anios);
console.log(lat, lng);