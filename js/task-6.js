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
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
  }
  searchDiv.append(fragment);
}
searchButtonCreate.addEventListener('click', () => {
  const amount = parseInt(searchInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    searchInput.value = '';
  } else {
    alert('number 1 and 100');
  }
});

function DistroyBoxes() {
  searchDiv.querySelectorAll('div').forEach(element => element.remove());
}
searchButtonDestroy.addEventListener('click', DistroyBoxes);
