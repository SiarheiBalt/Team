// Опциональная цепочка ?. — это безопасный способ доступа к свойствам вложенных объектов, даже если какое-либо из промежуточных свойств не существует.

let user = {}; // пользователь без адреса
alert(user && user.address && user.address.street); // undefined (без ошибки)
