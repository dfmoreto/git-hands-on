class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log("Andando!")
  }

  grettings() {
    console.log(`Bom dia, ${this.name}!`)
  }
}

person = new Person('Hands On!')
person.walk()
person.grettings()