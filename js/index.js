const overlay = document.getElementById('overlay');
const sign_up_form = document.getElementById('signup-form');
const sign_up_btn = document.getElementById('signup-btn')
const sign_in_btn = document.getElementById('signin-btn')
const request_btn = document.getElementById('request-btn')

sign_up_btn.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.style.visibility = 'visible';
  sign_up_form.style.visibility = 'visible';
})

request_btn.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.style.visibility = 'visible';
  sign_up_form.style.visibility = 'visible';
})

overlay.addEventListener('click', function () {
  overlay.style.visibility = 'hidden';
  sign_up_form.style.visibility = 'hidden';
})