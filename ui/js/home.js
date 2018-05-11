const request_btn = document.getElementById('request-btn');
const overlay = document.getElementById('overlay');
const request_form = document.getElementById('request_form');

request_btn.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.style.visibility = 'visible';
  request_form.style.visibility = 'visible';
})

overlay.addEventListener('click', function () {
  this.style.visibility = 'hidden';
  request_form.style.visibility = 'hidden';
})