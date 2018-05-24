import validator from 'validator'
import bcrypt from 'bcrypt'

function Validate(req, res, next) {
  if (!validator.isEmail(req.body.email)) {
    return res.status(403).send({
      message: 'email is invalid'
    })
  }

  next()
}


export default {
  Validate
}