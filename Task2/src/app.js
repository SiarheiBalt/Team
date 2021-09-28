const headerMenu = document.querySelector(".header-menu");

const addLink = (href, text) => {
  const div = document.createElement("div");
  const link = document.createElement("a");
  link.classList.add("link_top");
  div.classList.add("header-menu__link");
  link.textContent = text;
  link.setAttribute("href", href);
  div.appendChild(link);

  headerMenu.append(div);
};
addLink("#arrows", "Стрелочные функции");
addLink("#classes", "Классы");
addLink("#defaultParam", "Параметры по умалчиванию");
addLink("#destruction", "Деструктуризация");
addLink("##forOf", "for...of");
addLink("#generators", "Итераторы, генераторы");
addLink("#object", "Объекты");
addLink("#promise", "Промисы");
addLink("#promiseAll", "Promise all");
addLink("#proxy", "Proxy");
addLink("#reflect", "Reflect");
addLink("#map", "Map");
addLink("#set", "Set");
addLink("#spread", "Spread, Rest");
addLink("#strMethods", "String methods");
addLink("#literals", "Шаблонные литералы");
addLink("#variables", "Variables");
addLink("#arrMethods", "Методы массивов");
addLink("#asyncAwait", "Async await");
addLink("#forAwaitOf", "for-await-of");
addLink("#tryCatch", "try...catch");
addLink("#expImp", "Експорт, Импорт");
addLink("#comma", "Висящие запятые");
addLink("#bigInt", "BigInt");
addLink("#optChain", "Опциональная цепочка");
addLink("#regExp", "Регулярные выражения");
addLink("#symbol", "Symbol");

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
