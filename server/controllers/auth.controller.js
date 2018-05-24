import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../db'

export default class Auth {
  static signup(req, res) {
    const {
      firstname,
      lastname,
      email,
      password
    } = req.body
    bcrypt.hash(password, 10).then(hash => {
      db('users')
        .returning('*')
        .insert({
          firstname,
          lastname,
          email,
          password: hash
        })
        .then(response => {
          const token = jwt.sign(response[0].id, process.env.JWT_SECRET)
          db('login').insert({
            userid: response[0].id,
            usertoken: token
          })
          res.status(201).header('x-auth', token).send({
            message: `sign up success`
          })
        })
        .catch(err => res.status(400).send({
          message: `please make sure your credentials are valid`
        }))
    })
  }
}