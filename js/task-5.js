function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const searchBody = document.querySelector('body');
const searchButton = document.querySelector('.change-color');
const searchSpan = document.querySelector('.color');
searchButton.addEventListener('click', () => {
  const result = getRandomHexColor();
  searchBody.style.backgroundColor = result;
  searchSpan.textContent = result;
});
