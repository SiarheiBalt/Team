// async await
// Запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
// Фильтр массива пользователей, чтобы остались только пользователи с четными id.
async function loadData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
const userData = loadData("https://jsonplaceholder.typicode.com/users")
  .then((user) => {
    const userEvenId = [];
    user.forEach((el) => {
      if (el.id % 2 === 0) userEvenId.push(el);
    });
    return userEvenId;
  })
  .then((user) => {
    console.log(user);
  })
  .catch(() => {
    throw new Error("Noy connection");
  });
