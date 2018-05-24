import pg from 'pg'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import client from '../db'

const connectionString = process.env.DATABASE_URL

export default class UserRequestController {
  static addRequest(req, res) {
    const {
      name,
      category,
      details
    } = req.body
    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        done()
        return res.status(400).send({
          message: `bad request`
        })
      }

      const result = []
      const query = client.query(`SELECT * FROM tokens WHERE token='${req.header('x-auth')}'`)
      query.on('row', row => {
        const {
          userid
        } = row
        result.push(row)
        const query = client.query(`SELECT * FROM users WHERE id=${userid}`)
        query.on('row', user => {
          if (user) {
            console.log(user)
          } else {
            console.log('hello')
          }
        })
      })
    })
  }
}