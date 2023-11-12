'use strict';

const Krish = {
  firstName: 'Krishant',
  lastName: 'Chauhan',
  age: 2022 - 1991,
  job: 'teacher',
  friends: ['Krishant', 'Krish', 'Iya'],
};

console.log(Krish); /* → {
  firstName: 'Krishant',
  lastName: 'Chauhan',
  age: 2022 - 1991,
  job: 'teacher',
  friends: Array(3)
} */

// Dot notation
console.log(Krish.lastName); // → Chauhan

// Bracket notation (we can use expression inside the brackets)
console.log(Krish['lastName']); // → Chauhan

const nameKey = 'Name';
console.log(Krish['first' + nameKey]); // → Krishant
console.log(Krish['last' + nameKey]); // → Chauhan

const interestedIn = prompt(
  'What do you want to know about Krish? Choose between firstName, lastName, age, job and friends'
);

console.log(Krish.interestedIn); // → undefined

if (Krish[interestedIn]) {
  console.log(Krish[interestedIn]); // → returns the value you entered
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job and friends'
  );
}

Krish.location = 'India';
Krish['twitter'] = '@krishant';
console.log(Krish);
/* → {
  firstName: 'Krishant',
  lastName: 'Chauhan',
  age: 31,
  job: 'teacher',
  friends: Array(3),
  location: "India",
  twitter: "@krishant"
} */

// Challenge
// "Krish has 3 friends, and his best friend is called Michael"

console.log(
  `${Krish.firstName} has ${Krish.friends.length} friends, and his best friend is called ${Krish.friends[2]}`
); // → Krish has 3 friends, and his best friend is called Iya
