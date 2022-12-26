function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', chengeColor);

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');

function chengeColor() {
  const color = getRandomHexColor();
  
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
};