// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

const numbers = [20, 25, 30, 32, 40];
// splice(starting value,delete count)
const num2 = numbers.splice(1, 2);
console.log(numbers); // [ 20, 32, 40 ]
console.log(num2); // [ 25, 30 ]

const array = [1, 2, 3, 4, 5, 6];
// splice(starting value,delete count, add new item)
const spliced = array.splice(0, 4, 7, 8, 9);
console.log(array); // [ 7, 8, 9, 5, 6 ]
console.log(spliced); // [ 1, 2, 3, 4 ]
