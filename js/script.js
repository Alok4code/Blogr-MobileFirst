const hamburger = document.querySelector('.hamburger');
const rightContiner = document.querySelector('.right-continer');

hamburger.addEventListener('click', () => {
  rightContiner.classList.toggle('show');
});
