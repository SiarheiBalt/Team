// Генератор - некоторая ф-я которая может последовательно выдавать результат своей работы. Они отличаются от обычных тем, что могут приостанавливать своё выполнение, возвращать промежуточный результат и далее возобновлять его позже, в произвольный момент времени.

function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}
const num = numberGen(3);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

const iterator = {
  gen(n = 3) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
const itr = iterator.gen();
console.log(itr.next()); // {value: 1, done: false}
console.log(itr.next()); // {value: 2, done: false}
console.log(itr.next()); // {value: 3, done: false}
console.log(itr.next()); // {value: undefined, done: true}
