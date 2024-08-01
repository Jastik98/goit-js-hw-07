const formEl = document.querySelector('.login-form');
const onFormSubmit = event => {
  event.preventDefault();
  const emailEl = formEl.elements.email.value.trim();
  const passwordEl = formEl.elements.password.value.trim();
  if (emailEl === '' || passwordEl === '') {
    return alert('All form fields must be filled in');
  }
  const output = {
    email: emailEl,
    password: passwordEl,
  };
  formEl.reset();
  console.log(output);
};
formEl.addEventListener('submit', onFormSubmit);
