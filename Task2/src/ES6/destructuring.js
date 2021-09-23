// Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.

let [firstName, lastName] = ["Денис", "Кантор"];
alert(firstName); // Денис
alert(lastName); // Кантор

// Деструктуризация объекта

let options = {
  title: "Меню",
  width: 100,
  height: 200,
};

let { title, width, height } = options;

alert(title); // Меню
alert(width); // 100
alert(height); // 200

// значения по умолчанию
let [firstName = "Гость", lastName = "Анонимный"] = [];
alert(firstName); // Гость
alert(lastName); // Анонимный

function defaultLastName() {
  return Date.now() + "-visitor";
}
// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName = defaultLastName()] = ["Вася"];

alert(firstName); // Вася
alert(lastName); // 1436...-visitor

let a, b;
({ a, b } = { a: 5, b: 6 }); // внутри выражения это уже не блок

// Вложенные деструктуризации
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
