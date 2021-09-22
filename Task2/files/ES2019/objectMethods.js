// Object.fromEntries()
// Метод Object.fromEntries() преобразует список пар ключ-значение в объект.

const entries = [
  ["foo", "bar"],
  ["baz", 42],
];

const obj = Object.fromEntries(entries);

console.log(obj);
