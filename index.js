// conect to coffee.js
const coffeeMenu = require("./coffee.js");

// now we need to return an arry of all the drinks in the menu
// we can use the map method to do this

const allDrinks = coffeeMenu.map((drink) => drink.name);

// now we print all the drinks
console.log(allDrinks);

/*
[
  'cappuccino',
  'espresso',
  'latte',
  'affogato',
  'macchiato',
  'americano',
  'iced coffee',
  'frappe',
  'cuban espresso'
]
*/

// return an aarray of drinks that cost 5 and under
// we can use filter to do this

const underFive = coffeeMenu.filter((drink) => drink.price <= 5);

// we can print the results from here
console.log(underFive);
/* 
[
  { name: 'espresso', price: 5, seasonal: false },
  { name: 'latte', price: 5, seasonal: false }
]

*/

// return an array of drinks that at priced even numbers we can use filter to do this and modulo to check if the number is even

const evenPrice = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.table(evenPrice);
/* 
┌─────────┬──────────────────┬───────┬──────────┐
│ (index) │       name       │ price │ seasonal │
├─────────┼──────────────────┼───────┼──────────┤
│    0    │   'cappuccino'   │   8   │  false   │
│    1    │   'macchiato'    │   6   │  false   │
│    2    │  'iced coffee'   │   6   │  false   │
│    3    │     'frappe'     │   8   │  false   │
│    4    │ 'cuban espresso' │  10   │   true   │
└─────────┴──────────────────┴───────┴──────────┘
*/

// return the total if you where to order one of every drink? we can use reduce to do this
const totalPrice = coffeeMenu.reduce((total, drink) => total + drink.price, 0);

console.log(totalPrice);
//64

// return an array of all the drinks that are seasonal? we can filter

const seasonal = coffeeMenu.filter((drink) => drink.seasonal);
console.log(seasonal);
/* 
[
  { name: 'affogato', price: 9, seasonal: true },
  { name: 'cuban espresso', price: 10, seasonal: true }
]

*/

// lastly we need to return all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans". -- we can map the items then add "with imported beans"

const seasonalWithBeans = seasonal.map(
  (drink) => drink.name + " " + "with imported beans"
);
console.log(seasonalWithBeans);
/*
[
  'affogato with imported beans',
  'cuban espresso with imported beans'
]
*/
