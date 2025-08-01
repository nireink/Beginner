
// Template Strings
/* 
Es una manera interesa*/
const nombre = 'Fernando';
const apellido = 'Herrera';


//const nombreCompleto = nombre + '' + apellidos;

const nombreCompleto = `${nombre} ${apellido} ${1+1}`;

console,console.log(nombreCompleto);

function getSaludo(nombre){
    return'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`);