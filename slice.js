// slice( ) This method returns a new array with specified start to end elements.

const numbers = [20, 25, 30, 32, 40];
// slice(start value, end value)
const num2 = numbers.slice(1, 3);
console.log(numbers); // [ 20, 25, 30, 32, 40 ]
console.log(num2); // [ 25, 30 ]

const array = [1, 2, 3, 4, 5, 6];
// slice(start value, end value)
const sliced = array.slice(0, 4);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]
console.log(sliced); // [ 1, 2, 3, 4 ]
