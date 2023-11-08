"use strict";

const friend1 = "Krishant";
const friend2 = "Krish";
const friend3 = "Iya";

const friends = ["Krishant", "Krish", "Iya"];
console.log(friends); // → ['Krishant', 'Krish', 'Iya']
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // → Krishant
console.log(friends[2]); // → Iya
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // → Iya

friends[2] = "Jay";
console.log(friends); // →͢   ['Krishant', 'Krish', 'Jay']

const firstName = "Krishant";
const Krishant = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(Krishant); // → ['Krishant', 'Schmedtmann', 46, 'teacher', Array(3)]
console.log(Krishant.length); // → 5

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // → 47 70 19

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); // → [47, 70, 19]
