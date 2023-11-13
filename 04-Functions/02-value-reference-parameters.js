"use strict";

const flight = "LH234";
const Krish = {
  name: "Krish Chauhan",
  passport: 412525323,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 412525323) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, Krish); // → Checked in
console.log(flight); // → LH234
console.log(Krish); // → {name: 'Mr. Krish Chauhan', passport: 412525323} //name changed

// Is's the same as doing...
const flightNum = flight;
const passenger = Krish;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(Krish);
checkIn(flight, Krish); // → Wrong passport!
