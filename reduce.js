// reduce() This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const numbers = [20, 25, 30, 32, 40];
// reduce(previousValue: number, currentValue: number) => previousValue + currentValue)
const num2 = numbers.reduce((sum, num) => sum + num);
console.log(numbers); // [ 20, 25, 30, 32, 40 ]
console.log(num2); // 147

// reduce(previousValue: number, currentValue: number) => previousValue + currentValue , initial value)
const array = [1, 2, 3, 4, 5, 6];
const reduced = array.reduce((total, current) => total + current, 0);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]
console.log(reduced); // 21
