// Promise (обычно их так и называют «промисы») – предоставляют удобный способ организации асинхронного кода.
// Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается своего рода обещание получить результат в некоторый момент в будущем.

const generatorNumber = () => Math.round(Math.random() * 10);
const prom = new Promise((resolve, regect) => {
  const n = generatorNumber();
  n <= 5 ? resolve(n) : regect(n);
})
  .then((value) => {
    console.log(`Your number -${value}`);
  })
  .catch((value) => {
    throw new Error(`Your number - ${value}`);
  })
  .finally(() => {
    console.log('Finally'); // Отработает в любом случае
  });

//  Promise all
// Имеется 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
// Каждый промис своим результатом возвращает эту задержку.
// С помощью Promise.all получили массив результатов, нашли его сумму, вывели на экран.

const generatorDelay = () => {
  let delay = Math.round(Math.random() * 10);
  return delay > 5 ? (delay -= 5) : delay;
};
const getPromise = () => {
  const delay = generatorDelay();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
};
const prom1 = getPromise();
const prom2 = getPromise();
const prom3 = getPromise();

Promise.all([prom1, prom2, prom3]).then((value) => console.log(value.reduce((acc, el) => (acc += el))));
