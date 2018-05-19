export default function Trim(req, res, next) {
  const {
    firstname,
    lastname,
    email,
    password,
    confirmpassword
  } = req.body

  const inputs = {
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    email: email.trim(),
    password: password.trim(),
    confirmpassword: confirmpassword.trim(),
  }

  req.inputs = inputs

  next()
}