// Нововведение 
// - ф-я Object.keys()
// - можно создавать динамические ключи
// - сокращенная запись если ключ и имя переменной совпадают
const cityField = 'city';
const job = 'accounting';
const person = {
    name: 'Kate',
    age: 30,
    job,
    [cityField]: 'Minsk',
    print: () => 'Person',
    toString() {
        return Object.keys(this)
        .filter(key => key !== 'toString' && key !== 'print')
        .map(key => this[key])
        .join()
    }
    // Переопределили toString
}
console.log(person.toString());

// Methods
const first = {a: 1}
const second = {b: 2}
// Метод Object.is() определяет, являются ли два значения одинаковыми значениями
Object.is(first.a, second.b)

// Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
const obj = Object.assign({}, first, second)

// возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
Object.entries(obj)

// возвращает массив значений
Object.values(obj)