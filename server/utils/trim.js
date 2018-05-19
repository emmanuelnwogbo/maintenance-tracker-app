export default function Trim(req, res, next) {
  for (const val in req.body) {
    if (req.body[val].length < 1) {
      return res.status(403).send({
        message: `inputs can not be empty`
      })
    }
  }

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

  if (!req.body.confirmpassword && !req.body.category) {
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

  if (req.body.category) {
    const {
      category,
      nameofobject,
      details
    } = req.body

    const inputs = {
      category: category.trim(),
      nameofobject: nameofobject.trim(),
      details: details.trim()
    }

    req.inputs = inputs

    next()
  }
}