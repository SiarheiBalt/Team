// forof, который сочетает в себе краткость forEach с возможностью break разрыва:

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
