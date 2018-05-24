import pg from 'pg'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import client from '../db'

const connectionString = process.env.DATABASE_URL

export default class Auth {
  static signin(req, res) {
    const {
      email,
      password
    } = req.body

    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        done()
        return res.status(400).send({
          message: `pls check your credentials`
        })
      }

      if (req.path === '/login') {
        const query = client.query(`SELECT * FROM users WHERE email='${email}'`);
        query.on('row', row => {
          bcrypt.compare(password, row.password, (err, result) => {
            if (!result) {
              return res.status(401).send({
                message: `wrong password`
              })
            }
            const {
              id,
              firstname,
              lastname,
              email,
              role
            } = row
            const user = {
              id,
              firstname,
              lastname,
              email,
              role
            }
            const token = jwt.sign(id, process.env.JWT_SECRET)
            client.query('INSERT INTO tokens(userid, token) values($1, $2)', [id, token])
            res.header('auth', token).status(200).send({
              message: `you succesfully signed in`,
              user
            })
          })
        })
      }
    })
  }
}