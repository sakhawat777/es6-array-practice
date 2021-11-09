// some() This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// at least one element is greater than 6
const greaterSix = array.some((num) => num > 6);
console.log(greaterSix); // true

// at least one element is less than 10
const lessTen = array.some((num) => num <= 0);
console.log(lessTen); // false
