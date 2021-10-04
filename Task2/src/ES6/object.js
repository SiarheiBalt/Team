// Нововведения
// - можно создавать динамические ключи
// - сокращенная запись если ключ и имя переменной совпадают

const cityField = "city";
const job = "accounting";
const person = {
  name: "Kate",
  age: 30,
  job,
  [cityField]: "Minsk",
  print: () => "Person",
  toString() {
    return Object.keys(this)
      .filter((key) => key !== "toString" && key !== "print")
      .map((key) => this[key])
      .join();
  },
  // Переопределили toString
};
person.toString(); // Kate, 30, accounting, Minsk

// Methods
const first = { a: 1 };
const second = { b: 2 };

Object.is(first.a, second.b); // false
Object.assign({}, first, second); // {a: 1, b: 2}
Object.entries(obj); // [["a", 1][("b", 2)]];
Object.values(obj); // [1, 2]

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

const entries = [
  ["foo", "bar"],
  ["baz", 42],
];

const obj = Object.fromEntries(entries);
console.log(obj); // {foo: 'bar', baz: 42}

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
