function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const searchDiv = document.querySelector('#boxes');
const searchInput = document.querySelector('#controls input');
const searchButtonCreate = document.querySelector('[data-create]');
const searchButtonDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let hex = '';

  for (let i = 1; i <= amount; i++) {
    hex += `<div class='box' style='width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}'></div>`;
    width += 10;
    height += 10;
  }

  searchDiv.innerHTML = hex;
}
searchButtonCreate.addEventListener('click', () => {
  const input = searchInput.value;
  if (input >= 1 && input <= 100) {
    createBoxes(input);
  } else {
    searchInput.value = '';
    alert('number 1 and 100');
  }
});

function DistroyBoxes() {
  searchDiv.querySelectorAll('div').forEach(element => element.remove());
}
searchButtonDestroy.addEventListener('click', DistroyBoxes);
