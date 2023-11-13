/*The 4 fundamental OOP principles:
1. Abstraction - ignoring or hiding details that don't matter
2. Encapsulation - keeping properties and methods private inside the class, so they are not accessible from outside the class
3. Inheritance - making all properties and methods of a certain class available to a child class
4. Polymorphism - a child class can overwrite a method it inherited from a parent class
*/

/* The only difference between a regular function and a
constructor function is that we call the new operator. */
              // ---------------------------------------
// There is a convention that constructor functions should start with a capital letter.
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  /* Never create a method inside a constructor function, because a 
  new copy of the method is created on each new instance. */
  this.calcAge = function () {
    return 2037 - this.birthYear;
  };
};

const krish = new Person('Krishant', 2000);
console.log(krish); // → Person {firstName: 'Krishant', birthYear: 2000}

const iya = new Person('Iya', 1988);
console.log(iya);
/* What happens when we call a function with the new operator.
1. A new empty object is created
2. The function is called and the this keyword is set to the newly created object
3. The new object is linked (__proto__ property) to the constructor function's prototype property
4. The function implicitly returns the object that we created */

/* The instanceof operator allows us to check whether
an object belongs to a certain constructor function. */
console.log(krish instanceof Person); // → true

/* Function constructors are not really a feature of the JS language, they
are simply a pattern that was created by other developers. */
