// every() This method checks every element in the array that passes the condition, returning true or false as appropriate.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// all elements are greater than 6
const greaterSix = array.every((num) => num > 6);
console.log(greaterSix); // false

// all elements are less than 10
const lessTen = array.every((num) => num < 10);
console.log(lessTen); // true
