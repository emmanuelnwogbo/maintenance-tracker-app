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
          console.log(row)
        })
      }
    })
  }
}