"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Krishant"); // → Hey Krishant
greet("Hello")("Krishant"); // → Hello Krishant

const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet2("Hello")("Krishant"); // → Hello Krishant
