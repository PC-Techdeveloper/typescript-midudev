"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ENUMS -> Enumeraciones (Colección de datos finitas)
//Dias de la semana, los meses del año, los tipos de errores
//Este tipo de enum se utiliza fuera de la aplicación
var ERROR_TYPES;
(function (ERROR_TYPES) {
    ERROR_TYPES["NOT_FOUND"] = "notFound";
    ERROR_TYPES["UNAUTHORIZED"] = "unauthorized";
    ERROR_TYPES["FORBIDDEN"] = "forbidden";
})(ERROR_TYPES || (ERROR_TYPES = {}));
function mostrarMensaje(tipoDeError) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el recurso');
    }
    else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permisos para acceder a este recurso');
    }
    else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para acceder a este recurso');
    }
}
//Aserciones de tipos
//Null si no lo encuentra
//HTMLElement si lo encuentra
//Tipo más específico -> HTMLCanvasElement
//Es inferencia -> Typescript se da cuenta que va a ser HTMLCanvasElement
var canvas = document.getElementById('span');
if (canvas instanceof HTMLCanvasElement) {
    var ctx = canvas.getContext('2d');
}
var hero = {
    id: '1',
    name: 'Batman',
    age: 35,
    gretting: function () { return console.log('Hola soy un heroe'); },
};
var carrito = {
    totalPrice: 0,
    productos: [
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 10,
            quantity: 1,
            talla: 10,
        },
    ],
};
console.log(carrito.productos[0].talla);
