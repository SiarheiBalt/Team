// Finally отработает в незвисимости от resolve или regect.

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
    console.log('Finally');
  });
