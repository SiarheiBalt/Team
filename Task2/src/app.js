const button = document.querySelector(".link_up");
window.addEventListener("scroll", () => {
  button.hidden = scrollY < document.documentElement.clientHeight;
});
const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
