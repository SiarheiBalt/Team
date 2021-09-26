const button = document.querySelector('.link_up');
window.addEventListener('scroll', () => {
  button.hidden = window.scrollY < document.documentElement.clientHeight;
});
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const goto = anchor.hasAttribute('href')
      ? anchor.getAttribute('href')
      : 'body';
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
