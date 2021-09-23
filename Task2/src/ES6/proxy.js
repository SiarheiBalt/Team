// Объект Proxy «оборачивается» вокруг другого объекта и может перехватывать (и, при желании, самостоятельно обрабатывать) разные действия с ним, например чтение/запись свойств и другие.

// target – это объект, для которого нужно сделать прокси
// prop - конфигурация прокси: объект с «ловушками» («traps»): методами

const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля ${prop} в объекте нет.`;
  },
  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log(
        `Длинна должна быть более 2х символов. Сейчас ${value.length}`
      );
    }
  },
};

const form = {
  login: "test",
  password: "12345",
};

const formProxy = new Proxy(form, validator);

console.log(formProxy.login); // test
console.log(formProxy.password); //12345
console.log(formProxy["name"]); //Поля name в объекте нет.

formProxy.password = "12"; //Длинна должна быть более 2х символов. Сейчас 2
console.log(formProxy.password); //12345
