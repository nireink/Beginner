const rubros = [{
    codigo: 1,
    nombre: 'Microprocesadores'
},
{
    codigo: 2,
    nombre:  'Tarjetas de Video'
},
{
    codigo: 3,
    nombre: 'Gabinetes'
}
]

const articulos = [{
    codigo: 1,
    codigoRubro:'1',
    nombre: 'Microprocesador Intel Core i5',
    precio:1000
},
{
    codigo: 2,
    codigoRubro:'1',
    nombre: 'Microprocesador Intel Core i7',
    precio:1000
},
{
    codigo: 3,
    codigoRubro:'1',
    nombre: 'Microprocesador Intel Core i9',
    precio:1000
},
{
    codigo: 4,
    codigoRubro:'2',
    nombre: 'Tarjeta de Video MSI GetForce GTX 1080',
    precio:700
},
{
    codigo: 5,
    codigoRubro:'2',
    nombre: 'Tarjeta de Video MSI GetForce GTX 1060',
    precio:800
},
{
    codigo: 6,
    codigoRubro:'2',
    nombre: 'Tarjeta de Video ASUS Radeon RX 570',
    precio:900
},
{
    codigo: 7,
    codigoRubro:'3',
    nombre: 'Gabinete Gamer ATX Corsair Carbide Series SPEC-05',
    precio:1200
},
{
    codigo: 8,
    codigoRubro:'3',
    nombre: 'Gabinete Gamer ATX MSI MAG VAMPIRIC 010',
    precio:1000
}
]

export {rubros, articulos};