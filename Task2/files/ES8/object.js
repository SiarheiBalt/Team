// Object.values() - возвращает массив, содержащий все значения свойств объекта, исключая любые значения в цепочке прототипов.

const person = { name: "Alex", age: 28 };
Object.values(person); // ["Alex", 28]

// Object.entries() - возвращает массив, содержащий все собственные свойства объекта, в виде массива пар [key, value].

const person1 = { name: "Den", age: 46 };
Object.entries(person1); // [['name', 'Den'], ['age', 46]]

// Метод Object.getOwnPropertyDescriptors() возвращает все собственные дескрипторы свойств данного объекта. Дескриптор - это набор атрибутов свойства.
let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(descriptor, null, 2));
// {
//   "value": "John",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }
