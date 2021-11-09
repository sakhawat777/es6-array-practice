// join() This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

const array = ['S', 'A', 'K', 'H', 'A', 'W', 'A', 'T'];
const joined = array.join('');
const noSeparator = array.join();
console.log(array); // ['S', 'A', 'K', 'H', 'A', 'W', 'A', 'T']
console.log(joined); // SAKHAWAT
console.log(noSeparator); // S,A,K,H,A,W,A,T
