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
console.log(josh.sayHello()); //Hello, my name is Josh.

//watch some tv show
josh.watchSitcom(); //It will deduct 1 from iq = 125 => 124;

//Tell me iq of josh
console.log(josh.tellYourIq()); //124

// **************************************************
// The Problem with Static Fields(hint:initialization)
// ***************************************************

//create class
class Library {
  // add and initialize static field for books
  static books = [
    { title: 'Lean Ux', read: true },
    { title: 'Lean Customer Development', read: false },
    { title: 'The Four Steps to the Epiphany', read: false },
    { title: 'Lean Analytics', read: false },
  ];

  //Add second static field
  static booksToReadCount = 3;
}

// log value of 'booksToReadCount' field
console.log(Library.booksToReadCount); //3

// Initializing static in constructor method
// *************************************************

//create class
class MyLibrary {
  // add and initialize static field for books
  static books = [
    { title: 'Lean Ux', read: true },
    { title: 'Lean Customer Development', read: false },
    { title: 'The Four Steps to the Epiphany', read: false },
    { title: 'Lean Analytics', read: false },
  ];

  //Add static field, but don't initialize It
  static booksToReadCount;

  // Try to initialize static
  // 'booksToReadCount in constructor
  constructor() {
    this.booksToReadCount = 3;
  }
}

// Try to log the value of 'booksToReadCount' field
console.log(MyLibrary.booksToReadCount); //undefined

// Solution with External Resources
// ***************************************************

//create class
class ExternalResourcesLibrary {
  // add and initialize static field for books
  static books = [
    { title: 'Lean Ux', read: true },
    { title: 'Lean Customer Development', read: false },
    { title: 'The Four Steps to the Epiphany', read: false },
    { title: 'Lean Analytics', read: false },
  ];

  //Add static field, and assign it the returned value of 'getBooksToReadCount()' function
  static booksToReadCount = getBooksToReadCount(ExternalResourcesLibrary.books);
}

//create function to get booksToReadCount
function getBooksToReadCount(books) {
  return books.filter((book) => !book.read).length;
}

// Log value of 'version' field
console.log(ExternalResourcesLibrary.booksToReadCount); //3
