// Добавлен более удобный синтаксис, удобное наследование
// Доступен функционал геттеров и сеттеров

class Person {
  type = "human";
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name + ", Hi!");
  }
}
const Max = new Person("Max");

class Programmer extends Person {
  constructor(name, job) {
    super(name); // Вызов конструктора родителя, для переопределения своего конструктора.
    this._job = job;
  }
  get job() {
    return this._job.toUpperCase();
  }
  set job(job) {
    job.length < 2 ? console.log("Validation failed") : (this._job = job);
  }
  greet() {
    super.greet(); // Вызовется родительский а
    // затем перезаписанный метод greet
    console.log("Метод был перезаписан.");
  }
}
const frontend = new Programmer("Max", "Frontend");
frontend.job = "Admin";

// Статический метод
// За счет того что метод который определен как статический можно к нему обращаться на прямую
class Util {
  // Ненужно создавать инстанс класса
  static average(...args) {
    return args.reduce((acc, i) => (acc += i), 0) / args.length;
  }
}
console.log(Util.average(2, 4, 5, 6, 7));
