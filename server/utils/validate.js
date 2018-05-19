import validator from 'validator';

let spaceTotal = 0;

function spaceCounter(iterable) {
  for (const val of iterable) {
    if (val === ' ') {
      spaceTotal += 1;
    }
  }
}

export default class Validate {
  static signUpGate(req, res, next) {
    const {
      inputs
    } = req
    spaceTotal = 0

    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    } = inputs

    spaceCounter(firstname)
    spaceCounter(lastname)
    spaceCounter(email)
    spaceCounter(password)
    spaceCounter(confirmpassword)

    if (spaceTotal > 0) {
      return res.status(403).send({
        message: `spaces are not allowed within your credentials`
      })
    }

    if (!validator.isEmail(email) ||
      validator.isEmpty(email) ||
      validator.isEmpty(firstname) ||
      validator.isEmpty(lastname) ||
      validator.isEmpty(password) ||
      validator.isEmpty(confirmpassword) ||
      !validator.equals(password, confirmpassword)) {
      return res.status(403).send({
        message: `please make sure your credentials are correct`
      })
    }

    next()
  }

  static BasicInputCheck(req, res, next) {
    const {
      inputs
    } = req

    const {
      category,
      nameofobject,
      details
    } = inputs

    spaceCounter(category)
    spaceCounter(nameofobject)

    if (validator.isEmpty(category) || validator.isEmpty(nameofobject) || validator.isEmpty(details)) {
      return res.status(403).send({
        message: `inputs can not be empty`
      })
    }

    next()
  }
}