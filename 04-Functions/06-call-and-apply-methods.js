'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  Code: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.Code}`
    );
    this.booking.push({ flight: `${this.Code}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Krishant Chauhan');
// → Krishant Chauhan booked a seat on Lufthansa flight LH

const eurowings = {
  name: 'Eurowings',
  Code: 'EW',
  booking: [],
};

const book = lufthansa.book;
// Does NOT Work
// book(23, "iya Krish");

book.call(eurowings, 23, 'iya Krish');
// → iya Krish booked a seat on undefined flight EW

book.call(lufthansa, 230, 'Krish Chauhan');
// → Krish Chauhan booked a seat on Lufthansa flight LH

// Apply Method (not used in modern JavaScript)
const flightData = [538, 'iya Krish'];
book.apply(eurowings, flightData);
// → iya Krish booked a seat on undefined flight EW

book.call(eurowings, ...flightData);
// → iya Krish booked a seat on undefined flight EW
