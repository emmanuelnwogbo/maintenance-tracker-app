import validator from 'validator';

let spaceTotal = 0;

function spaceCounter(iterable) {
  for (const val of iterable) {
    if (val === ' ') {
      spaceTotal += 1;
    }
  }
}

export default function Validate(req, res, next) {
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