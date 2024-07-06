# APRENDIENDO TYPESCRIPT

# Parte 1

Functions
Arrow functions
Types Alias
Templates Unions Types
Objects
Optional properties -> ?
Types of data
Inferency of data
Strings
Numbers
Objects as functions
Functions as parameters
Void
Never
Functions that return
Type arrow functions
Type never and void

```ts
// COMO EJECUTAR TYPESSCRIPT DESDE LA LINEA DE COMANDO -> https://rootstack.com/es/blog/nodejs-tsnode

// COMO EJECUTAR TYPESSCRIPT DESDE LA LINEA DE COMANDO -> https://rootstack.com/es/blog/nodejs-tsnode

//Types of data
const number = 1;
let n: number = 2;

let phrase = 'Hola';
let aaa = null;
let b = undefined;
let symbol = Symbol('hola');
let bigInt = BigInt(10);

let texto = 'Hola';

//??? Cuando no sabe inferir un tipo
//any -> IGNORA el tipado de typescript
//Unknown -> No se sabe el tipo
// let anyValue: unknown = 'hola'

//Inferencia de tipos
// a y b infiere number sin decirle nada
const A = 1;
const B = 2;
// c también sera number
const C = A + B;

// Cadenas de texto
let cadenaDeTexto = 'Hola';

cadenaDeTexto.toLocaleLowerCase();

// ❌ cadenaDeTexto = 2
// ❌ cadenaDeTexto.propiedadInexistente

//Any
// let obj: any = {
//   x: 0,
// }

// obj.foo()
// obj()
// obj.bar = 10
// obj = 'hello'0
// const N: number = obj

// Functions
function saludar(firstName: string) {
  console.log(`Hola ${firstName}`);
}

saludar('Leo');

//Objets as functions -> One format
function greeting({ name, power }: { name: string; power: number }) {
  console.log(`Hello ${name}, you are ${power} years old`);
}

greeting({ name: 'Leo', power: 2 });

//Objets as functions -> Second format
function greetingTwo(persona: { name: string; power: number }) {
  const { name, power } = persona;
  console.log(`Hello ${name}, you are ${power} years old`);
}

greetingTwo({ name: 'Leo', power: 2 });

//Functions that return
function greetingThree({ name, power }: { name: string; power: number }): string {
  console.log(`Hello ${name}, you are ${power} years old`);
  //Inferency of return type
  return name;
}

//Functios as parameters
//Void -> When the function doesn't return anything
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('Miguel');
};

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHiFromFunction(sayHi);

// Type arrow functions -> One format
const sumar = (a: number, b: number): number => {
  return a + b;
};

//Second format
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// Type never and void

//Never -> When the function never return a value
function throwError(message: string): never {
  if (message) throw new Error(message);
  throw new Error(message);
}

//Void -> When the function doesn't return anything
function logMessage(message: string): void {
  console.log(message);
  // throw new Error(message);
  // ...
  //return implicitly <-- DA IGUAL -> Void -> No devuelve nada
}

//Inferencia con las funciones anónimas según el contexto
const avengers = ['Spiderman', 'Hulk', 'Iron Man'];

avengers.forEach((avenger) => {
  console.log(avenger.toUpperCase);
});

avengers.map(function (avenger) {
  console.log(avenger.toUpperCase());
});

//OBJETOS -> Inferencia de datos

//Type Alias -> TIPOS PROPIOS (PascalCase)

type Hero = {
  name: string;
  power: number;
};

let hero: Hero = {
  name: 'Thor',
  power: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, power } = hero;
  return { name, power };
}

const thor = createHero({ name: 'Thor', power: 1500 });

// OPTIONAL PROPERTIES -> Propiedades opcionales -> ?
// readonly -> Propiedad de lectura

// Templates union types
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

//Union Types -> Tipos unidos
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

type SecondHero = {
  readonly id?: HeroId;
  name: string;
  power: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

let secondHero: SecondHero = {
  name: 'Thor',
  power: 1500,
};

function secondCreateHero(hero: SecondHero): SecondHero {
  const { name, power } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    power,
    isActive: true,
  };
}

//Object.freeze() -> Bloquea los cambios en el objeto -> Inmutable
const secondThor = secondCreateHero({ name: 'Thor', power: 1500 });
secondThor.powerScale = 'planetary';

console.log(secondThor.isActive); // true

// Extend types -> INTERSECTION TYPES

type SecondHeroId = `${string}-${string}-${string}-${string}-${string}`;

type SecondHeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

type HeroBasicInfo = {
  name: string;
  power: number;
};

type HeroProperties = {
  readonly id?: SecondHeroId;
  isActive?: boolean;
  powerScale?: SecondHeroPowerScale;
};

type ThirdHero = HeroBasicInfo & HeroProperties;

let thirdHero: ThirdHero = {
  name: 'Thor',
  power: 1500,
};

function thirdCreateHero(input: HeroBasicInfo): ThirdHero {
  const { name, power } = input;
  return {
    id: crypto.randomUUID(),
    name,
    power,
    isActive: true,
  };
}

const thirdThor = thirdCreateHero({ name: 'Thor', power: 1500 });
thirdThor.powerScale = 'planetary';

// Type Indexing -> Indices de tipos

type SecondHeroProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressHero: SecondHeroProperties['address'] = {
  planet: 'Earth',
  city: 'Madrid',
};

// Type from value and typeof
// Typeof -> Extraer los tipos de un objeto, funciones, variables, etc.
const address1 = {
  planet: 'Earth',
  city: 'Madrid',
};

type Address = typeof address1;

const address2: Address = {
  planet: 'Mars',
  city: 'Paris',
};

// Type from function return
function createAdress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona',
  };
}
//Type of return in the function
type Address3 = ReturnType<typeof createAdress>;

//ARRAYS

const languages: (string | number | boolean)[] = [];
// const languages2: Array<string | number | boolean> = [] -> Otra forma ✅

languages.push('TypeScript');
languages.push('JavaScript');
languages.push('Java');
languages.push(2);
languages.push(true);

type ThirdHeroId = `${string}-${string}-${string}-${string}-${string}`;

type ThirdHeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

type SecondHeroBasicInfo = {
  name: string;
  power: number;
};

const herosWithBasicInfo: SecondHeroBasicInfo[] = [];

//Matrices

type CellValue = 'x' | 'o' | '';

//Tuples -> Array that can have a fixed length
type GameBoard = [[CellValue, CellValue, CellValue], [CellValue, CellValue, CellValue], [CellValue, CellValue, CellValue]];

const gameBoard: GameBoard = [
  ['x', 'o', 'x'],
  ['o', 'x', 'o'],
  ['x', '', 'o'],
];

gameBoard[0][1] = 'o';

// Other tuple
//We can description how is the state of the tuple

type State = [string, (newName: string) => void];
// const [myHero, setMyHero]: State = useState('Thor')

//Codes RGB

type RGB = [number, number, number];

const rgb: RGB = [255, 255, 0];
```

# Parte 2

# Acerciones de Tipos

Las aserciones de tipos en TypeScript son una forma de informar al compilador sobre el tipo de una variable cuando el programador sabe más que el sistema de tipos de TypeScript. Esto no cambia el tipo en tiempo de ejecución, sino que ayuda al compilador a entender mejor el tipo esperado para realizar las comprobaciones necesarias y proporcionar autocompletado y otros beneficios del análisis estático.

- Casos de uso común: Trabajar con datos de APIS, bibliotecas de JavaScript, Migración de JavaScript a TypeScript,

```ts
//En Typescript, las aserciones de tipo se realizan utilizando el operador `as`
let someValue: any = 'this is a string';
let stringLength: number = (someValue as string).length;

//Trabajar con tipos personalizados
type User = {
  name: string;
  age: number;
};

let user: string | number = {
  name: 'John',
  age: 30,
};

//Aserción de tipo
let userType = user as User;
console.log(userType.name);
```

# Interfaces

Las interfaces en TypeScript son una forma de definir la estructura de un objeto. Permiten especificar qué propiedades y métodos debe tener un objeto, así como los tipos de esas propiedades y métodos. A diferencia de los tipos (type), las interfaces pueden ser extendidas y combinadas, lo que facilita la reutilización del código y la creación de jerarquías de tipos.

- Casos de uso común: Definición de modelos de datos, interoperabilidad con bibliotecas de JavaScript, desarrollo de componentes reutilizables.

```ts
//Sintaxis de interfaces
interface User {
  name: string
  age: number
}

let user: User ? {
  name: 'John',
  age: 30,
}

//Propiedades opcionales -> ?
interface User {
  name: string
  age?: number
}

let user: User = {
  name: 'John',
}

//Propiedades de solo lectura -> Marcar propiedadaes como de solo lectura usando la palabra clave `readonly`
interface User {
  readonly id: number // id es de solo lectura
  name: string
}

let user: User = {
  id: 1,
  name: 'John',
}

//Extensión de interfaces -> Las interfaces pueden extenderse para crear una nueva interfaz que herede las propiedades y métodos de la interfaz original.
interface Person {
  name: string
}

interface Employee extends Person {
  employeeId: number
}


//Interfaces para funciones -> Pueden definir la firma de una función usando una interfaz
interface SearchFunc{
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function(source: string, subString: string): boolean {
  return source.includes(subString);
};

//Index signatures -> Permiten definir propiedades de un objeto cuando no se conoce de antemano los nombres de las propiedades.

interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ['a', 'b', 'c']

```

# Narrowing

Es el proceso mediante el cual el compilador reduce el conjunto de posibles tipos de una variable basándose en el contexto del código. Esto permite que el compilador entienda mejor el tipo de una variable en un punto específico del código, proporcionando así mejores comprobaciones de tipo y autocompletado.

```ts
//Ejemplo 1
function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === 'string') {
    return objeto.length;
  }

  return objeto.toString().length;
}

mostrarLongitud('1');
```

# Type Guards

Los type guards (Guardas de tipos) son técnicas utilizadas para ayudar al compilador a inferir el tipo de una variable dentro de un bloque de código. Esto permite escribir códio más seguro y evitar errores de tipo. Los type guards pueden ser funciones, comprobaciones de propiedades, o incluso operaciones de comparación.

- Tipos de Type Guards:
- typeof -> string, number, boolean y symbol.
- instanceof -> Comprobar si un objeto es una instancia de una clase.
- in -> Verificar si un objeto tiene una propiedad específica.

```ts
//Typeof
function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(`El ID es una cadena: ${id}.toUpperCase()`);
  }
}

//Instanceof
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}

//In
interface Bird {
  fly: () => void;
}

interface Fish {
  swim: () => void;
}

function move(animal: Bird | Fish) {
  if ('fly' in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

# Propiedades private, public, protected.

Se utilizan para controlar la visibilidad y el acceso de las propiedades y métodos dentro de las clases. Estas palabras clave ayudan a definir que partes de una clase son accesibles desde fuera de la misma, desde las subclases o solo desde la propia clase.

- Public -> Son accesibles desde cualquier lugar, es decir, desde dentro de la clase, fuera de la clase y desde las subclases.

- Private -> Solo son accesibles desde dentro de la clase donde se declararon.

- Protected -> Son accesibles desde dentro de la clase y desde las subclases, pero no desde fuera de la clase. Es útil si se desea permitir el acceso a subclases pero no exponer las propiedades o métodos fuera de la jerarquía de clases.

```ts
//Public

class Persona {
  public nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public saludar() {
    console.log(`Hola ${this.nombre}`);
  }
}
const persona = new Persona('Maria');
console.log(persona.nombre); // <- Acceso público

persona.saludar(); // <- Acceso público

//Private

class Persona {
  private edad: number;

  constructor(edad: number) {
    this.edad = edad;
  }

  private mostrarEdad() {
    console.log(`Tengo ${this.edad} años`);
  }

  public saludar() {
    this.mostrarEdad(); // <- Acceso privado dentro de la clase
  }
}

const persona = new Persona(30);
console.log(persona.edad); // <-  Error: 'edad' es private ❌
persona.mostrarEdad(); // <- Error: 'mostrarEdad' es private ❌
persona.saludar(); // <- Correcto, el método public puede acceder a métodos y propiedades private dentro de la clase ✅

//Protected

class Persona {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

class Estudiante extends Persona {
  private grado: string;

  constructor(nombre: string, grado: string) {
    super(nombre);
    this.grado = grado;
  }

  public presentar() {
    console.log(`Hola, soy ${this.nombre} y estoy en ${this.grado}`);
  }
}

const estudiante = new Estudiante('Jefferson', '10º grado');
estudiante.presentar(); // <- Acceso permitido a 'nombre' desde la subclase ✅
console.log(estudiante.nombre); // <- Error: 'nombre' es protected ❌
```

# Interfaces en clases

Las interfaces son útiles para asegurar que los objetos tengan una forma sencilla y puedan ser implementadas por clases

```ts
/*
Sintaxis de interfaces en clases
Esta interfaz persona, define que cualquier objeto que implemente esta interfaz debe tener una propiedad nombre de tipo string, edad de tipo number y un método saludar que no retorna nada.
*/
interface Persona {
  nombre: string;
  edad: number;
  saludar: () => void;
}

/*
Implementación de una interfaz en una clase
Una clase puede implementar usando la palabra clave 'implements', esto asegura que la clase siga la estructura de la interfaz.
*/
class Estudiante implements Persona {
  nombre: string;
  edad: number;
  curso: string;

  constructor(nombre: string, edad: number, curso: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }

  saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const estudiante = new Estudiante('Jefferson', 25, 'Matemáticas');
estudiante.saludar(); // <- Hola, mi nombre es Jefferson y tengo 25 años ✅.

/*
Propiedades opcionales: Puedes definir propiedades opcionales en una interfaz usando el símbolo de interrogación (?) antes del nombre de la propiedad.
*/

interface Persona {
  nombre: string;
  edad: number;
  direccion?: string; // <- Propiedad opcional
  saludar: () => void;
}

/*
Herencia de interfaces: 
Las interfaces pueden heredar de otras interfaces, lo que permite crear jerarquías de interfaces.
*/

interface Empleado extends Persona {
  salario: number;
  trabajar(): void;
}

class Developer implements Empleado {
  nombre: string;
  edad: number;
  salario: number;
  lenguajes: string[];

  constructor(nombre: string, edad: number, salario: number, lenguajes: string[]) {
    this.nombre = nombre;
    this.edad = edad;
    this.salario = salario;
    this.lenguajes = lenguajes;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre}, un programador.`);
  }

  trabajar(): void {
    console.log(`Estoy trabajando en ${this.lenguajes.join(', ')}.`);
  }
}

const programador = new Developer('Ana', 30, 50000, ['TypeScript', 'JavaScript']);
programador.saludar(); // <- Hola, soy Ana, un programador ✅.
programador.trabajar(); // <- Estoy trabajando en TypeScript, JavaScript ✅.
```

# Definiciones de tipos

-- Las definiciones de tipo son esenciales para proporcionar una tipicidad estática que ayuda a prevener errores durante el desarrollo y mejorar la inteligencia de código.

- Definiciones básicas de tipos -> TypeScript permite definir tipos para variables, funciones, objetos y más.

```ts
//Tipos primitivos
let name: string = 'John';
let age: number = 30;
let isStudent: boolean = true;

//Tipos de funciones
function sayHello(name: string) {
  return `Hello, ${name}!`;
}

let myGreeting: (name: string) => string;
myGreeting = sayHello;

//Tipos de objetos
let persona: { name: string; age: number } {
  name: 'John',
  age: 30,
};

/*
Interfaces -> Las interfaces son una forma de definir la estructura de un objeto. Son muy útiles para asegurar que los objetos sigan una estructura específica y proporcionar autocompletado y otros beneficios del análisis estático.
*/
interface Persona {
  name: string;
  age: number;
}

let persona: Persona = {
  name: 'Jefferson',
  age: 25,
}

/*
Tipos personalizados (Type Aliases) -> Permiten crear tipos personalizados que pueden ser reutilizados en tu código.
*/

type ID = number | string;

let userID: ID = 10;
userID = '10'; // <- Válido ✅
userID = 10; // <- Válido ✅

/*
Tipos de unión y de inserción -> Permiten que una variable pueda ser de uno de varios tipos.
*/
//UNIÓN
let identificador: number | string;
identificador = 10; // <- Válido ✅
identificador = 'ABC'; // <- Válido ✅
//INSERCIÓN -> Combinar múltiples tipos en un solo tipo

interface A {
  a: number;
}

interface B {
  b: string;
}

type C = A & B;

let ejemplo: C = {
  a: 1,
  b: "texto",
};

/*
Tipos genéricos -> Permiten crear componentes que puedan trabajar con cualquier tipo.
*/
function identificar<T>(elemento: T): T {
  return arg;
}

let outSide = identificar<number>(5); // <- Tipo inferido como número ✅
let secondOutSide = identificar<string>('hola'); // <- Tipo inferido como string ✅

//DEFINICIONES DE TIPOS EXTERNOS (d.ts) -> Permiten que TypeScript conozca los tipos de bibliotecas de JavaScript no escritas en TypeScript.


//miLibreria.d.ts
declare module 'miLibreria'{
  export function sumar(a: number, b: number): number;
  export const version: string;
}

//Usar definiición en código TypeScript
import { sumar, version } from 'miLibreria';

sumar(1, 2); // <- Válido ✅
console.log(version); // <- Válido ✅

//DEFINICIONES DE TIPO DE DEFINITELY TYPED -> Es un repositorio que contiene definiciones de tipos para muchas bibliotecas de JavaScript.

- Se instala usando npm install -> npm install @types/lodash

//Luego usar las definiciones de tipos en el código
import * as _ from 'lodash';

let result = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(result);

```
