// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа. Имеет методы и свойства.

const map = new Map();
map.set('1', 'str1'); // строка в качестве ключа
map.set(1, 'num1'); // цифра как ключ
map.set(true, 'bool1'); // булево значение как ключ
console.log(map);

// Map может использовать объекты в качестве ключей.
const john = { name: 'John' };
// давайте сохраним количество посещений для каждого пользователя
const visitsCountMap = new Map();
// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123
