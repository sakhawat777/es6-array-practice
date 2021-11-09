//  find( ) This method returns the value of the first element in an array that pass the test in a testing function.

const numbers = [20, 25, 30, 32, 40];
const num2 = numbers.find((num) => num > 20);
console.log(numbers); // [ 20, 25, 30, 32, 40 ]
console.log(num2); // 25

const array = [1, 2, 3, 4, 5, 6];
const found = array.find((element) => element === 3 || element === 5);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]
console.log(found); // 3
