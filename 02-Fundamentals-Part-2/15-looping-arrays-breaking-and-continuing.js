"use strict";

const Krish = [
  'Krishant',
  'Chauhan',
  2022 - 1991,
  'teacher',
  ['Krishant', 'Krish', 'Iya'],
];

const types = [];

for (let i = 0; i < Krish.length; i++) {
  console.log(Krish[i], "-", typeof Krish[i]);

  // types[i] = typeof Krish[i];
  types.push(typeof Krish[i]);
}

console.log(types); // → ['string', 'string', 'number', 'string', 'object']

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages); // →  [31, 15, 53, 2]

// Continue and Break

for (let i = 0; i < Krish.length; i++) {
  if (typeof Krish[i] !== "string") continue;

  console.log(Krish[i], "-", typeof Krish[i]);
  // → Krish - string
  // → Schmedtmann - string
  // → teacher - string
}

for (let i = 0; i < Krish.length; i++) {
  if (typeof Krish[i] === "number") break;

  console.log(Krish[i], "-", typeof Krish[i]);
  // → Krishant - string
  // → Chauhan - string
}
