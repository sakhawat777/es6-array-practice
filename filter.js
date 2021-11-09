//  This method creates a new array with only elements that passes the condition inside the provided function.
const numbers = [20, 25, 30, 32, 40];
const num2 = numbers.filter((num) => num > 20);
console.log(numbers);
console.log(num2);

const array = [1, 2, 3, 4, 5, 6];
const filtered = array.filter((element) => element === 3 || element === 5);
console.log(array);
console.log(filtered);
