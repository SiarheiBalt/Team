// Проверка наличия конкретных свойств у объекта
const duck = {
  name: "Maurice",
  color: "white",
  greeting: function () {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};
Reflect.has(duck, "color"); // true
Reflect.has(duck, "haircut"); // false

// Возврат собственных ключей объекта
Reflect.ownKeys(duck); // [ "name", "color", "greeting" ]

// Добавление нового свойства в объект
Reflect.set(duck, "eyes", "black");
// вернётся "true" если вызов успешен
// объект "duck" теперь содержит свойство "eyes" со значением "black"
