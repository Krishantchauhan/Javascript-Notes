'use strict';

const friends = ['Krishant', 'Krish', 'Iya'];

// push - adds element to the end of the array
// ◦ returns length of the array
const newLength = friends.push('Jay');
console.log(friends); // → ['Krishant', 'Krish', 'Iya','Krishna']
console.log(newLength); // → 4

// unshift - adds element to the beginning of the array
friends.unshift('Chauhan');
console.log(friends); // → ['Chauhan','Krishant', 'Krish', 'Iya','Krishna']

// pop - remove last element from the array
// ◦ returns the removed element
const removedElement = friends.pop();
console.log(friends); // → ['Chauhan','Krishant', 'Krish', 'Iya']
console.log(removedElement); // → Krishna

// pop - remove first element from the array
// ◦ returns the removed element
friends.shift();
console.log(friends); // → ['Krish', 'Iya','Krishna']

// indexOf - element position in the array
console.log(friends.indexOf('Iya')); // → 1

// returns -1 for element not present in the array
console.log(friends.indexOf('kri')); // → -1

// includes - checks if element present in the array
// ◦ uses strict equality
console.log(friends.includes('Iya')); // → true
console.log(friends.includes('Jasmine')); // → false

friends.push(23);
console.log(friends.includes(23)); // → true
console.log(friends.includes('23')); // → false
