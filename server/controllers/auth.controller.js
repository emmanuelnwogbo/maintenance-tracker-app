import pg from 'pg'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import client from '../db'

const connectionString = process.env.DATABASE_URL

export default class Auth {
  static signup(req, res) {
    const {
      firstname,
      lastname,
      email,
      password
    } = req.body
    const data = {
      firstname,
      lastname,
      email,
      password
    }

    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        done()
        return res.status(400).send({
          message: `pls check your credentials`
        })
      }

      if (req.body.role === 'user') {
        bcrypt.hash(password, 10).then(hash => {
          client.query('INSERT INTO users(firstname, lastname, email, role, password) values($1, $2, $3, $4, $5)', [firstname, lastname, email, 'user', hash])
          const query = client.query(`SELECT * FROM users WHERE email='${email}'`)
          query.on('row', row => {
            const {
              id,
              firstname,
              lastname,
              email,
              role
            } = row
            const token = jwt.sign(id, process.env.JWT_SECRET)
            const user = {
              id,
              firstname,
              lastname,
              email,
              role
            }
            client.query('INSERT INTO tokens(userid, token) values($1, $2)', [id, token])
            res.header('auth', token).status(201).send({
              message: `you signed up successfully`,
              user
            })
          })

          query.on('end', () => {
            done();
          })
        })
      }

      if (req.body.role === 'admin') {
        console.log('metrix');
      }
    });
  }
}