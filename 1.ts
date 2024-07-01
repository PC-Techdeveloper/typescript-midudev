//Tipos de datos básicos
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
let obj: any = {
  x: 0,
}

obj.foo()
obj()
obj.bar = 100
obj = 'hello'
const N: number = obj

// Functions
function saludar(firstName: string) {
  console.log(`Hola ${firstName}`)
}

saludar('Leo')

//Objets as functions -> One format
function greeting({ name, age }: { name: string; age: number }) {
  console.log(`Hello ${name}, you are ${age} years old`)
}

greeting({ name: 'Leo', age: 2 })

//Objets as functions -> Second format
function greetingTwo(persona: { name: string; age: number }) {
  const { name, age } = persona
  console.log(`Hello ${name}, you are ${age} years old`)
}

greetingTwo({ name: 'Leo', age: 2 })

//Functions that return
function greetingThree({ name, age }: { name: string; age: number }): string {
  console.log(`Hello ${name}, you are ${age} years old`)
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
