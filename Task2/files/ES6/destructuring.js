
// _____________________destructuring
// Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.
let [a, b, ...c] = array;

let person = {
  name: "Kate",
  age: 30,
  profession: "accountant",
};
// Деструктуризация объекта
let { name, age, profession } = person;
// let {name, ...rest} =person
// ___________________________________значение по умалчиванию_деструктуризация
("use strict");

// значения по умолчанию
let [firstName = "Гость", lastName = "Анонимный"] = [];

alert(firstName); // Гость
alert(lastName); // Анонимный
// ____________________________
function defaultLastName() {
  return Date.now() + "-visitor";
}
// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName = defaultLastName()] = ["Вася"];

alert(firstName); // Вася
alert(lastName); // 1436...-visitor
// ____________________________________
let a, b;
({ a, b } = { a: 5, b: 6 }); // внутри выражения это уже не блок
// _______________________________________Вложенные деструктуризации
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Пончик", "Пирожное"],
};

let {
  title = "Меню",
  size: { width, height },
  items: [item1, item2],
} = options;

alert(title); // Меню
alert(width); // 100
alert(height); // 200
alert(item1); // Пончик
alert(item2); // Пирожное
