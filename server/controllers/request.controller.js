import db from '../nonPersistDB'

export default class RequestController {
  static addRequest(req, res, next) {
    const request = req.inputs
    res.status(201).send({
      message: `request created succesfully`,
      request
    })
  }

  static getRequests(req, res) {
    if (req.user) {
      return db.map(item => {
        if (item.id === req.params.userid) {
          res.status(200).send({
            message: `found ${item.requests.length} requests`,
            requests: item.requests
          })
        }
      })
    }

    if (req.admin) {
      return res.status(200).send({
        message: `found ${db[0].length} requests`,
        requests: db[0]
      })
    }

    return res.status(401).send({
      message: `user not found`
    })
  }

  static getRequest(req, res) {
    console.log(req);
  }

  static updateRequest(req, res) {
    console.log(req);
  }

  static deleteRequest(req, res) {
    console.log(req)
  }
}