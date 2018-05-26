import jwt from 'jsonwebtoken'
import validator from 'validator'
import bcrypt from 'bcrypt'

export default class Auth {
  static JWTauth(id) {
    const token = jwt.sign(id, process.env.JWT_SECRET)
    return token
  }

  static JWTdecode(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return 'decoded', decoded
  }

  static Validate(req, res, next) {
    if (!validator.isEmail(req.body.email)) {
      return res.status(403).send({
        message: 'email is invalid'
      })
    }

    next()
  }
}