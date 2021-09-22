// String.trimStart() & String.trimEnd()
// Могут быть использованы для обрезки пробелов в начале или в конце строки.

const greeting = "    Hello everyone";

console.log(greeting.trimStart());
// "Hello everyone"
const greeting = "Hello world    ";

console.log(greeting.trimEnd());
// "Hello world"
