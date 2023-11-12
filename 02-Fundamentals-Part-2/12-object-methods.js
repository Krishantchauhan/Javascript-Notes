'use strict';

const Krish = {
  firstName: 'Krishant',
  lastName: 'Chauhan',
  age: 2022 - 1991,
  job: 'teacher',
  friends: ['Krishant', 'Krish', 'Iya'],
  hasDriversLicense: true,

  // Any function that is attached to an object is called a method
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  calcAge2: function () {
    return 2037 - this.birthYear;
  },

  calcAge3: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge3()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(Krish.calcAge(1991)); // → 46
console.log(Krish['calcAge'](1991)); // → 46

// The method gets called multiple times (bad practice)
console.log(Krish.calcAge2()); // → 46
console.log(Krish.calcAge2()); // → 46
console.log(Krish.calcAge2()); // → 46

// The method gets called once and the value is stored as a property
console.log(Krish.calcAge3()); // → 46

console.log(Krish.age); // → 46
console.log(Krish.age); // → 46
console.log(Krish.age); // → 46

// Challenge
// "Krish is a 46-year old teacher, and he has a/no driver's license"

console.log(Krish.getSummary()); // → Krish is a 46-year old teacher, and he has a driver's license
