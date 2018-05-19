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
  static signInGate(req, res, next) {
    const {
      inputs
    } = req
    spaceTotal = 0

    const {
      email,
      password
    } = inputs

    spaceCounter(email)
    spaceCounter(password)

    if (spaceTotal > 0) {
      return res.status(403).send({
        message: `spaces are not allowed within your credentials`
      })
    }

    if (!validator.isEmail(email) ||
      validator.isEmpty(email) ||
      validator.isEmpty(password)) {
      return res.status(403).send({
        message: `please make sure your credentials are correct`
      })
    }

    next()
  }
}