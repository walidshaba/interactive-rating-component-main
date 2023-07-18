let a = 0;
const submit = document.querySelector('button');
const form = document.getElementById('form');
const thanks = document.getElementById('thanks');
const mainPage = document.getElementById('main');
const radio = document.querySelector('input[ name="ratevalue"]:checked');

form.addEventListener('submit', (e) => {
  if (radio.checked) {
    thanks.classList.toggle('active');
  } else {
    e.preventDefault();
  }
});
