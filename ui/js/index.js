const overlay = document.getElementById('overlay');
const sign_up_form = document.getElementById('signup-form');
const sign_in_form = document.getElementById('signin-form');
const sign_up_btn = document.getElementById('signup-btn')
const sign_in_btn = document.getElementById('signin-btn')
const request_btn = document.getElementById('request-btn')

const signup_form_content = document.getElementById('signup-form-content')
const signin_form_content = document.getElementById('signin-form-content')
const signup_form_btn = document.getElementById('signup_form_btn')
const signin_form_btn = document.getElementById('signin_form_btn')


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

sign_in_btn.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.style.visibility = 'visible';
  sign_in_form.style.visibility = 'visible';
})

overlay.addEventListener('click', function () {
  overlay.style.visibility = 'hidden';
  sign_up_form.style.visibility = 'hidden';
  sign_in_form.style.visibility = 'hidden';
})

// from stack overflow
const isEmail = string => {
  const re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(string);
};

signup_form_btn.addEventListener('click', function (e) {
  e.preventDefault()
  document.getElementById('signup_empty_input_warning').innerHTML = ``
  document.getElementById('passwords_must_match').innerHTML = ``
  document.getElementById('email_input_warning').innerHTML = ``
  let callAPI = true
  const inputCheckArr = signup_form_content.childNodes
  Array.from(inputCheckArr, function (n) {
    if (n.tagName === 'INPUT' && n.value.length === 0) {
      document.getElementById('signup_empty_input_warning').innerHTML = `no empty inputs allowed`
      n.style.border = '2px solid crimson'
      callAPI = false
    }

    if (n.tagName === 'INPUT' && n.value.length !== 0) {
      n.style.border = '2px solid #7289da'
    }

    if (n.name === 'email' && isEmail(n.value) === false) {
      n.style.border = '2px solid crimson'
      document.getElementById('email_input_warning').innerHTML = `pls use a valid email`
      callAPI = false
    }

    if (n.name === 'confirmpassword' && n.value !== document.getElementById('signup_password').value) {
      n.style.border = '2px solid crimson'
      callAPI = false
    }

    if (n.name === 'password' && n.value !== document.getElementById('confirmpassword').value) {
      document.getElementById('passwords_must_match').innerHTML = `passwords must match`
      n.style.border = '2px solid crimson'
      callAPI = false
    }

    if (n.name === 'password' && n.value === document.getElementById('confirmpassword').value && n.value.length !== 0) {
      n.style.border = '2px solid #7289da'
    }
  })

  if (callAPI === true) {

  }
})