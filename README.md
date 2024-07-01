# APRENDIENDO TYPESCRIPT

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

//Types of data
const number = 1
let n: number = 2

let phrase = 'Hola'
let aaa = null
let b = undefined
let symbol = Symbol('hola')
let bigInt = BigInt(10)

let texto = 'Hola'

//??? Cuando no sabe inferir un tipo
//any -> IGNORA el tipado de typescript
//Unknown -> No se sabe el tipo
// let anyValue: unknown = 'hola'

//Inferencia de tipos
// a y b infiere number sin decirle nada
const A = 1
const B = 2
// c también sera number
const C = A + B

// Cadenas de texto
let cadenaDeTexto = 'Hola'

cadenaDeTexto.toLocaleLowerCase()

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
  console.log(`Hola ${firstName}`)
}

saludar('Leo')

//Objets as functions -> One format
function greeting({ name, power }: { name: string; power: number }) {
  console.log(`Hello ${name}, you are ${power} years old`)
}

greeting({ name: 'Leo', power: 2 })

//Objets as functions -> Second format
function greetingTwo(persona: { name: string; power: number }) {
  const { name, power } = persona
  console.log(`Hello ${name}, you are ${power} years old`)
}

greetingTwo({ name: 'Leo', power: 2 })

//Functions that return
function greetingThree({ name, power }: { name: string; power: number }): string {
  console.log(`Hello ${name}, you are ${power} years old`)
  //Inferency of return type
  return name
}

//Functios as parameters
//Void -> When the function doesn't return anything
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('Miguel')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Type arrow functions -> One format
const sumar = (a: number, b: number): number => {
  return a + b
}

//Second format
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b
}

// Type never and void

//Never -> When the function never return a value
function throwError(message: string): never {
  if (message) throw new Error(message)
  throw new Error(message)
}

//Void -> When the function doesn't return anything
function logMessage(message: string): void {
  console.log(message)
  // throw new Error(message);
  // ...
  //return implicitly <-- DA IGUAL -> Void -> No devuelve nada
}

//Inferencia con las funciones anónimas según el contexto
const avengers = ['Spiderman', 'Hulk', 'Iron Man']

avengers.forEach(avenger => {
  console.log(avenger.toUpperCase)
})

avengers.map(function (avenger) {
  console.log(avenger.toUpperCase())
})

//OBJETOS -> Inferencia de datos

//Type Alias -> TIPOS PROPIOS (PascalCase)

type Hero = {
  name: string
  power: number
}

let hero: Hero = {
  name: 'Thor',
  power: 1500,
}

function createHero(hero: Hero): Hero {
  const { name, power } = hero
  return { name, power }
}

const thor = createHero({ name: 'Thor', power: 1500 })

// OPTIONAL PROPERTIES -> Propiedades opcionales -> ?
// readonly -> Propiedad de lectura

// Templates union types

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type SecondHero = {
  readonly id?: HeroId
  name: string
  power: number
  isActive?: boolean
}

let secondHero: SecondHero = {
  name: 'Thor',
  power: 1500,
}

function secondCreateHero(hero: SecondHero): SecondHero {
  const { name, power } = hero
  return {
    id: crypto.randomUUID(),
    name,
    power,
    isActive: true,
  }
}

//Object.freeze() -> Bloquea los cambios en el objeto -> Inmutable
const secondThor = Object.freeze(secondCreateHero({ name: 'Thor', power: 1500 }))

console.log(secondThor.isActive) // true

// secondThor.id?.toString()

//Mutabilidad -> ❌
// secondThor.id = 42422434324324
```
