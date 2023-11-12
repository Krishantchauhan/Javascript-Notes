"use strict";

const Krish = [
  'Krishant',
  'Chauhan',
  2022 - 1991,
  'teacher',
  ['Krishant', 'Krish', 'Iya'],
];

for (let i = Krish.length - 1; i >= 0; i--) {
  console.log(Krish[i]);
}
// → ['Krishant', 'Krish', 'Iya']
// → teacher
// → 31
// → Chauhan
// → Krishant

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}
// → ------ Starting exercise 1
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
// → ------ Starting exercise 2
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
// → ------ Starting exercise 3
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
