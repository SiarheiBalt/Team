// Стрелочные функции не имеют собственного объекта arguments
// Подходит для декораторов, когда нам нужно пробросить вызов с текущими this и arguments.
function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log("Hello, " + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("Den");

// Два фактора повлияли на появление стрелочных функции: более короткий синтаксис и лексика this

let elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

elements.map((element) => element.length);

// В данном случае, поскольку нам нужно только свойство length, мы можем использовать деструктуризированный параметр:
elements.map(({ length: lengthFooBArX }) => lengthFooBArX);
elements.map(({ length }) => length);

// У стрелочных функций нет this. Если происходит обращение к this, его значение берётся снаружи.
// Если бы мы использовали «обычную» функцию, была бы ошибка.
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
  },
};

group.showList();

// Стрелочные функции:
// Не имеют this
// Не имеют arguments
// Не могут быть вызваны с new
// У них также нет super
