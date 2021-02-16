//Object Classes
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `Hey ${this.name}, you are ${this.age} years old.`;
  }
}
const newBuddy = new Person("Alex", 30);
console.log(newBuddy); // returns the variable newBuddy with the properties.
console.log(newBuddy.printData()); // prints the printData() method

//extends && super (Accessing Data from Paremt Object)
class Kid extends Person {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `This is a kid class from Person, ${this.name}`;
  }
}

const zain = new Kid("Anna", 17, 175);
console.log(zain);
console.log(zain.printData());
console.log(zain.show());

//Date
let time = new Date();
console.log(time); */

