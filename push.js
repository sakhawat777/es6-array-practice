// push() This method adds one or more elements to the end of array and returns the new length of the array.

const numbers = [20, 25, 30, 32, 40];
const num2 = numbers.push(50, 60, 85);
console.log(numbers); // [ 20, 25, 30, 32, 40, 50, 60, 85 ]
console.log(num2); // 8

const array = [1, 2, 3, 4, 5, 6];
const pushed = array.push(7, 8, 8, 10);
console.log(array); // [ 1, 2, 3, 4, 5, 6, 7, 8, 8, 10 ]
console.log(pushed); // 10
