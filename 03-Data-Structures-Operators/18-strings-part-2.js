'use strict';

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); // Output: tap air portugal
console.log(airline.toUpperCase()); // Output: TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = 'sIyA';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Output: Siya

// Check email
const email = 'hello@siya.io';
const loginEmail = '    Hello@Siya.IO \n';
const normalizedEmail = loginEmail.toLowerCase().trim();//->trim ignore space and \n
const normalizedEmail1 = loginEmail.toLowerCase();
console.log(normalizedEmail === email); // Output: true

// Replacing
const priceGB = '288,98£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // Output: 288.98$


const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
// Output: All passengers come to boarding gate 23. Boarding gate 23!


// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // Output: true
console.log(plane.startsWith('Air')); // Output: true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
} // Output: Part of the NEW Airbus family

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
// Output: You are NOT allowed on board!
checkBaggage('Socks and camera');
// Output: Welcome aboard!
checkBaggage('Got some snacks and a gun for protection');
// Output: You are NOT allowed on board!
