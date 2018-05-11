const container_request_card = document.getElementsByClassName('container_request-card');
const overlay = document.getElementById('overlay');
const request = document.getElementById('request_details');

Array.from(container_request_card, function (n) {
  n.addEventListener('click', function () {
    overlay.style.visibility = 'visible';
    request.style.visibility = 'visible';
  })
})

overlay.addEventListener('click', function () {
  this.style.visibility = 'hidden';
  request.style.visibility = 'hidden';
})