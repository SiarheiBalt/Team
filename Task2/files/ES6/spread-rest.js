// Остаточные параметры и оператор расширения.
// Остаточные параметры используются, чтобы создавать новые функции с неопределённым числом аргументов.
// С помощью оператора расширения можно вставить массив в функцию, которая по умолчанию работает с обычным списком аргументов.
// Вместе эти конструкции помогают легко преобразовывать наборы значений в массивы и обратно.

// REST. Собирает любое количество переданных аргументов в массив
const average = (...args) =>
  args.reduce((acc, el) => (acc += el), 0) / args.length;
console.log(average(10, 20, 30, 40, 50));

const [input, selector, button, main, footer] = createDiv(
  "input",
  "sel",
  "button",
  "#main",
  "footer"
);
function createDiv(...div) {
  return div.reduce((acc, el) => [...acc, document.querySelector(el)], []);
}

// Первые два аргумента нам нужны, остальные REST соберет в массив
const sum = (a, b, ...c) => {
  return c.reduce((acc, el) => (acc += el), 0) + a + b;
};
console.log(sum(2, 3, 7, 2, 9));

// В примере ниже первые два аргумента функции станут именем и фамилией, а третий и последующие превратятся в массив titles:
function showName(firstName, lastName, ...titles) {
  alert(firstName + " " + lastName); // Юлий Цезарь

  // Оставшиеся параметры пойдут в массив titles = ["Консул", "Император"]
  alert(titles[0]); // Консул
  alert(titles[1]); // Император
  alert(titles.length); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");

// SPREAD оператор расширения. Он похож на остаточные параметры – тоже использует ..., но делает совершенно противоположное.
// Он «расширяет» перебираемый объект в список аргументов.

const array1 = [3, 5, 78, 3, 1];
const array2 = [3, 5, 78, 3, 1];
let minNumberArray = Math.min(...array1);
let maxNumberArray = Math.max(...array1, ...array2);
console.log(Math.max(1, ...arr1, 2, ...arr2, 25));

// Оператор расширения можно использовать и для слияния массивов
let merged = [0, ...array1, 2, ...array2];
