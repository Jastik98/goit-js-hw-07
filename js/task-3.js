const inputSearch = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');
inputSearch.addEventListener('input', arrSearch => {
  const pole = arrSearch.target.value.trim();
  !pole ? (outPut.textContent = 'Anonymus') : (outPut.textContent = pole);
});
