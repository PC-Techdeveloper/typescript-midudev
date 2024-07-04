//ENUMS -> Enumeraciones (Colección de datos finitas)
//Dias de la semana, los meses del año, los tipos de errores
//Este tipo de enum se utiliza fuera de la aplicación
enum ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

function mostrarMensaje(tipoDeError) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder a este recurso')
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder a este recurso')
  }
}

//Aserciones de tipos
//Null si no lo encuentra
//HTMLElement si lo encuentra
//Tipo más específico -> HTMLCanvasElement

//Es inferencia -> Typescript se da cuenta que va a ser HTMLCanvasElement
const canvas = document.getElementById('span')

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
}

// typeof -> Para tipos
// instanceof -> Para instancias

// Fetching de datos en TypeScript -> Extensión mts (ECMAScript Module)

const API_URL = 'https://api.github.com/search/repositories?q=typescript'

const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error('Request failed')
}

//Transformando archivo a JSON
const data = await response.json()

const repos = data.items.map(repo => {
  console.log(repo)
})
