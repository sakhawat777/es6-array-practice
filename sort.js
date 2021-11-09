// sort() This method is used to arrange/sort array’s elements either in ascending or descending order.

const array = [1, 2, 3, 4, 5, 6];
const alphabet = ['d', 'a', 'c', 'b'];

// sort in descending order
const descend = array.sort((a, b) => (a > b ? -1 : 1));
console.log(descend); // [ 6, 5, 4, 3, 2, 1 ]

// sort in descending order
const descend2 = array.sort((a, b) => b - a);
console.log(descend2); // [ 6, 5, 4, 3, 2, 1 ]

// sort in ascending order
const ascend2 = array.sort((a, b) => a - b);
console.log(ascend2); // [1, 2, 3, 4, 5, 6]

// default in ascending order
const ascend3 = array.sort();
console.log(ascend3); // [1, 2, 3, 4, 5, 6]

// sort in ascending order
const ascend = alphabet.sort((a, b) => (a > b ? 1 : -1));
console.log(ascend); // [ 'a', 'b', 'c', 'd' ]

// default in ascending order
const alpha = alphabet.sort();
console.log(alpha); // [ 'a', 'b', 'c', 'd' ]
