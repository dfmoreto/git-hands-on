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
  
  smile() {
    console.log(":)")
  }

  talk(){
    console.log('Hey !')
  }
}

person = new Person('Hands On!')
person.walk()
person.grettings()
person.smile()
person.talk()
