// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз (уникальная коллекция). Имеет методы.
// Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же значением ничего не происходит, за счёт этого как раз и получается, что каждое значение появляется один раз.
// Например, мы ожидаем посетителей, и нам необходимо составить их список. Но повторные визиты не должны приводить к дубликатам. Каждый посетитель должен появиться в списке только один раз.

const set = new Set();

const john = { name: 'John' };
const pete = { name: 'Pete' };
const mary = { name: 'Mary' };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3

for (const user of set) {
  alert(user.name); // John (потом Pete и Mary)
}
