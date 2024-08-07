//ENUMS -> Enumeraciones (Colección de datos finitas)
//Dias de la semana, los meses del año, los tipos de errores
//Este tipo de enum se utiliza fuera de la aplicación
enum ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

// function mostrarMensaje(tipoDeError) {
//   if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
//     console.log('No se encuentra el recurso');
//   } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
//     console.log('No tienes permisos para acceder a este recurso');
//   } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
//     console.log('No tienes permisos para acceder a este recurso');
//   }
// }

//Aserciones de tipos
//Null si no lo encuentra
//HTMLElement si lo encuentra
//Tipo más específico -> HTMLCanvasElement

//Es inferencia -> Typescript se da cuenta que va a ser HTMLCanvasElement
// const canvas = document.getElementById('span');

// if (canvas instanceof HTMLCanvasElement) {
//   const ctx = canvas.getContext('2d');
// }

// typeof -> Para tipos
// instanceof -> Para instancias

// Fetching de datos en TypeScript -> Extensión mts (ECMAScript Module)
// quicktypes -> https://quicktype.io/ -> as GithubAPIResponse

// const API_URL = 'https://api.github.com/search/repositories?q=typescript'

// const response = await fetch(API_URL)

// if (!response.ok) {
//   throw new Error('Request failed')
// }

//Transformando archivo a JSON
// const data = await response.json()

// const repos = data.items.map(repo => {
//   console.log(repo)
// })

// Interfaces
/*
Las interfaces verifican la estructura de los objetos, proporcionando una forma clara y explícita de específicar contratos entre diferentes partes del código.
*/
interface Heroe {
  id: string;
  name: string;
  age: number;
  gretting: () => void;
}

const hero: Heroe = {
  id: '1',
  name: 'Batman',
  age: 35,
  gretting: () => console.log('Hola soy un heroe'),
};

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

//Herencia de interfaces -> Extends
interface Zapatilla extends Producto {
  talla: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: (Producto | Zapatilla)[];
}

//Indicar las funciones en las interfaces
//Primera forma

//Interfaces -> Extending an interface, adding new fields to an existing interface
//Las interfaces se pueden utilizar más para objetos y clases.
//Types -> Extending a type via intersection types, union, a type cannot be changed
//after being created.

interface CarritoOps {
  add: (product: Producto) => void;
  remove: (id: number) => void;
  clear: () => void;
}
//Segunda forma
interface CarritoOps {
  clear: () => void;
}

const ops: CarritoOps = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {},
};

// Narrowing
// Ejemplo 1
function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === 'string') {
    return objeto.length;
  }

  return objeto.toString().length;
}

mostrarLongitud('1');

// Ejemplo 2

interface Mario {
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;
//Type Guards
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

//Type Never
function fn(x: string | number) {
  if (typeof x === 'string') {
    // x es string
    x.toUpperCase();
  } else if (typeof x === 'number') {
    // do something with x
    x.toFixed(2);
  } else {
    x; // never
  }
}

//Ejemplo -> Tipar una clase, con interfaces también se puede

//Propiedades private, public, protected.
//Private -> Forma estática.
//Public -> Público.
//Readonly -> Solo lectura.
//Protected -> Protegido, no puede ser accedido en instancias de la clase, pero si puede acceder en clases que heredan.

//Interfaces en clases
import { type IAvenger } from './types.d';

class Avenger implements IAvenger {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;

  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }

  battle(enemy, win) {
    if (win) {
      this.wonBattles++;
      this.powerScore += 5;
    } else {
      this.powerScore -= 5;
    }
  }

  get fullName() {
    return `${this.name} tiene ${this.powerScore} puntos de poder`;
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower;
    } else {
      throw new Error('Power score cannot be greater than 100');
    }
  }
}

const avenger = new Avenger('Spidey', 80);
