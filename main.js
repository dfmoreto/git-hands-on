class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log("Andando!")
  }
}

person = new Person('Hands On!')
person.walk()