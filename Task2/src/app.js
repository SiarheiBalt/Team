const button = document.querySelector(".link_up");
window.addEventListener("scroll", () => {
  button.hidden = scrollY < document.documentElement.clientHeight;
});
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

async function loadData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const userData = loadData("https://jsonplaceholder.typicode.com/users")
  .then((user) => {
    const userEvenId = user.filter((el) => {
      if (el.id % 2 === 0) return el;
    });
    return userEvenId;
  })
  .then((user) => {
    console.log(user);
  });
