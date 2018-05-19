export default function Trim(req, res, next) {
  if (req.body.confirmpassword) {
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

  if (!req.body.confirmpassword) {
    const {
      email,
      password
    } = req.body

    const inputs = {
      email: email.trim(),
      password: password.trim()
    }

    req.inputs = inputs

    next()
  }
}