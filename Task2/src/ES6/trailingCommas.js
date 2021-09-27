const arr = [0, 1, 2];

console.log(arr); // [0, 1, 2]
console.log(arr.length); // 3

const arr2 = [0, 1, 2, , ,];
console.log(arr2.length); // 5
arr2.forEach((e) => console.log(e)); // 0 1 2
console.log(arr.map((e) => e)); // 0 1 2
