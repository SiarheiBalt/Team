// let - это новое объявление переменной, которая имеет ограниченую область видимости.

let x = "outer";
function test(inner) {
  if (inner) {
    let x = "inner";
    return x;
  }
  return x;
}
test(false); // outer,  undefind - если б было var
test(true); // inner

{
  let private3 = 3;
}
console.log(private3); // Uncaught ReferenceError

// сonst запрещает присвоение на другой тип данных или на другой объект. Можно изменять внутреннее состояние объекта.

const name = "Dima";
name = "Kate"; // Uncaught ReferenceError

const array = [1, 2, 3, 5, 8];
array.push(13);
