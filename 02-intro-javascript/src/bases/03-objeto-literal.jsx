
/*Objetos y literales */

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
/** Se puede anadir objetos dentro de objetos, anadir funciones, metodos */
    direccion:{
        ciudad: 'New York',
        zipcode: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
 /** En muchos navegadores web se esta estandarizando de que ordene alfabeticamente.*/

};

/**const persona2 = persona; No hacer nunca esto. Esta haciendo una copia de la referencia.
 * Al trabajar en REACT y se intente hacer una mutacion del estado de la apliacion. No se va aceptar.
 * Los mas recomendable es crear un nuevo objeto, y colocar las nuevas propiedades.
 * Para clonar un objeto se debe usar tres puntos ...
   */

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log( {persona} );

//console.table (persona); /*Permite ver el detalle del objeto */