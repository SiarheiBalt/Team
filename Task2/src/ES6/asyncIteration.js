// Новая конструкция for-await-of позволяет нам вызывать асинхронные функции, которые возвращают промис в цикле.

const promises = [
  new Promise((resolve) => resolve(1)),
  new Promise((resolve) => resolve(2)),
  new Promise((resolve) => resolve(3)),
];

async function test1() {
  for await (const obj of promises) {
    console.log(obj);
  }
}
