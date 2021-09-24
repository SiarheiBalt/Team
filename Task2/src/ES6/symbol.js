// Symbol
// Свойство description только для чтения - это строка, возвращающая необязательное описание объектов Symbol.

const mySymbol = `My Symbol`;
const symObj = Symbol(mySymbol);

console.log(symObj); // Symbol(mySymbol);
console.log(String(symObj) === `Symbol(${mySymbol})`); // true
console.log(symObj.description); // "My Symbol"
