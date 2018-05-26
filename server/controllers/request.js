import pg from 'pg'
import client from '../db'
import Utils from '../utils'

const {
  Auth
} = Utils

const {
  JWTdecode
} = Auth

const connectionString = process.env.DATABASE_URL

export default class Request {
  static addRequest(req, res) {
    const user = []
    const {
      category,
      nameofobject,
      details
    } = req.body
    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        res.status(400).send({
          message: `something went wrong please check your credentials and try again`,
        })
      }

      const token = req.header('x-auth')
      const query = client.query(`SELECT * FROM tokens WHERE token='${token}'`)
      query.on('row', row => {
        const id = JWTdecode(row.token)
        const query = client.query(`SELECT * FROM users WHERE id=${id}`)
        query.on('row', row => {
          user.push(row)
        })
        query.on('end', () => {
          if (user[0].role === 'user') {
            const results = []
            const query = client.query('INSERT INTO apprequests(userid, categeory, name, details, status) values($1, $2, $3, $4, $5)', [id, category, nameofobject, details, 'pending'])
            return query.on('end', () => {
              done()
              const query = client.query('SELECT * FROM apprequests ORDER BY id ASC')
              query.on('row', row => {
                results.push(row)
              })
              query.on('end', () => {
                return res.status(201).send({
                  message: `new request created`,
                  created: results[results.length - 1]
                })
              })
            })
          }
          res.status(401).send({
            message: `only users can add requests`
          })
        })
      })
    })
  }

  static modifyRequest(req, res) {
    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        done()
        return res.status(400).send({
          message: `pls check your credentials`
        })
      }

      client.query(`UPDATE apprequests SET status='${req.body.status}' WHERE id=${req.params.requestid}`)
      const query = client.query(`SELECT * FROM apprequests WHERE id=${req.params.requestid}`)
      query.on('row', row => {
        res.status(200).send({
          message: `request has been set to ${row.status}`,
          row
        })
      })
    })
  }

  static getRequests(req, res) {
    const results = []
    pg.connect(connectionString, (err, client, done) => {
      if (err) {
        done()
        return res.status(400).send({
          message: `there was an error pls try again`
        })
      }

      const query = client.query(`SELECT * FROM apprequests`)
      query.on('row', row => {
        results.push(row)
      })

      query.on('end', () => {
        res.status(200).send({
          message: `found ${results.length} requests`,
          results
        })
      })
    })
  }
}