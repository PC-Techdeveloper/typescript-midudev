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

//Union Types -> Tipos unidos
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type SecondHero = {
  readonly id?: HeroId
  name: string
  power: number
  isActive?: boolean
  powerScale?: HeroPowerScale
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
const secondThor = secondCreateHero({ name: 'Thor', power: 1500 })
secondThor.powerScale = 'planetary'

console.log(secondThor.isActive) // true

// Extend types -> INTERSECTION TYPES

type SecondHeroId = `${string}-${string}-${string}-${string}-${string}`

type SecondHeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type HeroBasicInfo = {
  name: string
  power: number
}

type HeroProperties = {
  readonly id?: SecondHeroId
  isActive?: boolean
  powerScale?: SecondHeroPowerScale
}

type ThirdHero = HeroBasicInfo & HeroProperties

let thirdHero: ThirdHero = {
  name: 'Thor',
  power: 1500,
}

function thirdCreateHero(input: HeroBasicInfo): ThirdHero {
  const { name, power } = input
  return {
    id: crypto.randomUUID(),
    name,
    power,
    isActive: true,
  }
}

const thirdThor = thirdCreateHero({ name: 'Thor', power: 1500 })
thirdThor.powerScale = 'planetary'

// Type Indexing -> Indices de tipos

type SecondHeroProperties = {
  isActive: boolean
  address: {
    planet: string
    city: string
  }
}

const addressHero: SecondHeroProperties['address'] = {
  planet: 'Earth',
  city: 'Madrid',
}

// Type from value and typeof
// Typeof -> Extraer los tipos de un objeto, funciones, variables, etc.
const address1 = {
  planet: 'Earth',
  city: 'Madrid',
}

type Address = typeof address1

const address2: Address = {
  planet: 'Mars',
  city: 'Paris',
}

// Type from function return
function createAdress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona',
  }
}
//Type of return in the function
type Address3 = ReturnType<typeof createAdress>

//ARRAYS

const languages: (string | number | boolean)[] = []
// const languages2: Array<string | number | boolean> = [] -> Otra forma ✅

languages.push('TypeScript')
languages.push('JavaScript')
languages.push('Java')
languages.push(2)
languages.push(true)

type ThirdHeroId = `${string}-${string}-${string}-${string}-${string}`

type ThirdHeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type SecondHeroBasicInfo = {
  name: string
  power: number
}

const herosWithBasicInfo: SecondHeroBasicInfo[] = []

//Matrices

type CellValue = 'x' | 'o' | ''

//Tuples -> Array that can have a fixed length
type GameBoard = [[CellValue, CellValue, CellValue], [CellValue, CellValue, CellValue], [CellValue, CellValue, CellValue]]

const gameBoard: GameBoard = [
  ['x', 'o', 'x'],
  ['o', 'x', 'o'],
  ['x', '', 'o'],
]

gameBoard[0][1] = 'o'

// Other tuple
//We can description how is the state of the tuple

type State = [string, (newName: string) => void]
// const [myHero, setMyHero]: State = useState('Thor')

//Codes RGB

type RGB = [number, number, number]

const rgb: RGB = [255, 255, 0]
