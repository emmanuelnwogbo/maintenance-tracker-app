import pg from 'pg'
import client from '../db'

const connectionString = process.env.DATABASE_URL

export default class Request {
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