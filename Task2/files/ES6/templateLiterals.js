// Шаблонные литералы - это новый синтаксис для создания строк
let name = "Alex";
let string = `Hey ${name}`; // Hey Alex

// Ты также можешь выполнять более сложные выражения:
const string1 = `total count is: ${1 + 2 + 3}`;
const string2 = `result is ${foo() ? "x" : "y"}`;

// также строки могут занимать несколько строк:
const string3 = `Hey
this

string
is awesome!`;
