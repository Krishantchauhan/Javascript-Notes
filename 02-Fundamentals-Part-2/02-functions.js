"use strict";

function logger() {
  console.log("My name is Krishant");
}

// calling / running / invoking function
logger(); // → My name is Krishant
logger(); // → My name is Krishant

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges}`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleJuice); // → Juice with 5 apples and 0
console.log(appleOrangeJuice); // → Juice with 2 apples and 4