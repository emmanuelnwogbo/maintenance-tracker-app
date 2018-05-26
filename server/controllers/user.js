import pg from 'pg'
import bcrypt from 'bcrypt'
import client from '../db'

import Utils from '../utils'

const {
  Auth
} = Utils

const {
  JWTauth
} = Auth

const connectionString = process.env.DATABASE_URL

export default class User {
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

            const user = {
              id,
              firstname,
              lastname,
              email,
              role
            }
            const token = JWTauth(id)
            client.query('INSERT INTO tokens(userid, token) values($1, $2)', [id, token])
            res.header('auth', token).status(201).send({
              message: `you signed up successfully`,
              user
            })
          })

          query.on('end', result => {
            done();
            console.log(result)
          })
        })
      }

      if (req.body.role === 'admin') {
        bcrypt.hash(password, 10).then(hash => {
          client.query('INSERT INTO users(firstname, lastname, email, role, password) values($1, $2, $3, $4, $5)', [firstname, lastname, email, 'admin', hash])
          const query = client.query(`SELECT * FROM users WHERE email='${email}'`)
          query.on('row', row => {
            const {
              id,
              firstname,
              lastname,
              email,
              role
            } = row
            const token = JWTauth(id)
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
    });
  }

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
            const token = JWTauth(id)
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