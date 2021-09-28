const array = [0, 1, 2];

console.log(array); // [0, 1, 2]
console.log(array.length); // 3

const array2 = [0, 1, 2, , ,];
console.log(array2.length); // 5
array2.forEach((element) => console.log(element)); // 0 1 2
console.log(array.map((element) => element)); // 0 1 2
