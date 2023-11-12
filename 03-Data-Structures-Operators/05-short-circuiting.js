"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// Use ANY data type, return ANY data type, short-circuiting
/* Short circuiting OR operator means that if the first value is
a truthy value it will immediately return the first value */
console.log(3 || "Krishant"); // → 3
console.log("" || "Krishant"); // → Krishant
console.log(true || 0); // → true
console.log(undefined || null); // → null

console.log(undefined || 0 || "" || "Hello" || 23 || null); // → Hello

restaurant.numGuests = 23;//if we need 0 then it false then it return 10
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // → 23

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // → 23

/* Short circuiting AND operator means that if the first value is a falsy value
it will immediately return the first value without checking the other values */
console.log(0 && "Krishant"); // → 0
console.log(7 && "Krishant"); // → "Krishant"
console.log("Hello" && 23 && null && "Krishant"); // → null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach"); // → mushrooms (1) ['spinach']
}

// The if statement before gave same result as this line
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach"); // → mushrooms (1) ['spinach']