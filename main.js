class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log("Andando!")
  }

  smile() {
    console.log(":)")
  }
}

person = new Person('Hands On!')
person.walk()
person.smile()