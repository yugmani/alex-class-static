// Import stylesheets
import './style.css';

// *****************************************************
//Classes, fields and field initialization in a brief
// *****************************************************

//create a Classes
class Person {
  //define public field
  isAlive = true;
  numberOfLegs = 2;
  numberOfArms = 2;

  //define private field:
  #iq;

  //define custorm properties in constructor
  constructor(name, age, iq) {
    this.name = name;
    this.age = age;

    //initialize private field 'iq
    this.#iq = iq;
  }

  //add private method
  #decreaseIq() {
    this.#iq--;
  }

  //add public methods
  sayHello() {
    return `Hello, my name is ${this.name}.`;
  }

  watchSitcom() {
    //call private method 'decreaseIq()'
    return this.#decreaseIq();
  }

  tellYourIq() {
    //return value of private field 'iq'
    return this.#iq;
  }
}

//create instance of Person Classes
const josh = new Person('Josh', 31, 125);

//log 'josh'
console.log(josh);

/*
Person {
  isAlive: true,
  numberOfLegs: 2,
  numberOfArms: 2,
  name: 'Josh',
  age: 31,
    __proto__: {
    constructor: ƒ Person(),
    sayHello: ƒ sayHello(),
    watchSitcom: ƒ watchSitcom(),
    tellYourIq: ƒ tellYourIq()
  }
}
*/

//call the 'sayHello()' method
josh.sayHello();
