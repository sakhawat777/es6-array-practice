//  This method creates a new array with the results of calling a provided function on every element in this array.
const numbers = [20, 25, 30, 32, 40];
const num2 = numbers.map((num) => num > 20);
console.log(numbers); // [ 20, 25, 30, 32, 40 ]
console.log(num2); // [ false, true, true, true, true ]

const array = [1, 2, 3, 4, 5, 6];
const mapped = array.map((element) => element + 20);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]
console.log(mapped); // [ 21, 22, 23, 24, 25, 26 ]
