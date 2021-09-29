const headerMenu = document.querySelector(".header-menu");

const arrayLinks = [
  ["#arrows", "Стрелочные функции"],
  ["#classes", "Классы"],
  ["#defaultParam", "Параметры по умалчиванию"],
  ["#destruction", "Деструктуризация"],
  ["##forOf", "for...of"],
  ["#generators", "Итераторы, генераторы"],
  ["#object", "Объекты"],
  ["#promise", "Промисы"],
  ["#promiseAll", "Promise all"],
  ["#proxy", "Proxy"],
  ["#reflect", "Reflect"],
  ["#map", "Map"],
  ["#set", "Set"],
  ["#spread", "Spread, Rest"],
  ["#strMethods", "String methods"],
  ["#literals", "Шаблонные литералы"],
  ["#variables", "Variables"],
  ["#arrMethods", "Методы массивов"],
  ["#asyncAwait", "Async await"],
  ["#forAwaitOf", "for-await-of"],
  ["#tryCatch", "try...catch"],
  ["#expImp", "Експорт, Импорт"],
  ["#comma", "Висящие запятые"],
  ["#bigInt", "BigInt"],
  ["#optChain", "Опциональная цепочка"],
  ["#regExp", "Регулярные выражения"],
  ["#symbol", "Symbol"],
];

const links = arrayLinks.map((element) => {
  const div = document.createElement("div");
  const link = document.createElement("a");
  link.classList.add("link_top");
  div.classList.add("header-menu__link");
  link.textContent = element[1];
  link.setAttribute("href", element[0]);
  div.append(link);
  return div;
});
links.forEach((element) => headerMenu.append(element));

const button = document.querySelector(".link_up");
window.addEventListener("scroll", () => {
  button.hidden = window.scrollY < document.documentElement.clientHeight;
});
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
