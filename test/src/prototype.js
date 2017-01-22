class Parent {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Child extends Parent {
  constructor(firstName, lastName, age) {
    super(firstName, lastName)
    this.age = age
  }

  fullName() {
    return `${super.fullName()} (${this.age})`
  }
}