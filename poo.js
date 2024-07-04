/*
Clases y objetos:
Las clases son una forma de definir plantillas para crear objetos con propiedades y métodos compartidos.
*/
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  speak() {
    console.log(`Mi nombre es ${this.name} y tengo ${this.age} años`)
  }
}

//Instancia de una clase -> Crear el objeto para ser usado
const animal = new Animal('Leo', 2)
animal.speak()

/*
Herencia: La herencia permite que una clases (Subclase) herede propiedades y métodos de otra clase (Superclase).
*/
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed
  }

  speak() {
    console.log(`${this.name}, a ${this.breed}, barks`)
  }
}

const dog = new Dog('Rex', 3, 'Germán Shepherd')
dog.speak()

/*
Encapsulamient: Se refiere a la restricción del acceso directo a algunos de los componentes de un objeto, usando propiedades y métodos privados.
*/

class Person {
  #ssn // <-- Esto es privado
  constructor(name, ssn) {
    this.name = name
    this.#ssn = ssn
  }

  getSSN() {
    return this.#ssn
  }
}

let $person = new Person('John', '123-45-6789')
console.log($person.getSSN())

/*
Polimorfismo: El polimorfismo permite tratar a objetos de diferentes clases de la misma manera, utilizando una interfaz común.
*/

class Shape {
  area() {
    throw new Error('Method area(not implemented.')
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return Math.PI * this.radius ** 2
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)]

shapes.forEach(shape => {
  console.log(shape.area())
})

/*
Abstracción: La abstracción en JavaScript se puede lograr mediante clases abstractas (aunque no hay soporte directo,se puede simular) o interfaces (más comunes en TypeScript).
*/

// abstract class Shape{
//   abstract area(): number
// }

// class Circle extends Shape {
//   constructor(private radius: number){
//     super()
//   }

//   area(): number {
//     return Math.PI * this.radius ** 2
//   }
// }

// const shapes = [new Circle(5)]
// shapes.forEach(shape => {
//   console.log(shape.area())
// });

/*
Métodos y propiedaes estáticas:
Las propiedades y métodos estáticos son aquellos que pertenecen a la clase en lugar de las instancias de la clase.
*/

class MathUtilities {
  static add(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }
}

console.log(MathUtilities.add(1, 2))
console.log(MathUtilities.subtract(1, 2))
