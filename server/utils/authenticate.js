import db from '../nonPersistDB'

export default class Authenticate {
  static findUserId(req, res, next) {
    if (req.params.adminid) {
      db.map(item => {
        if (item.role === 'admin' && item.id === req.params.adminid) {
          req.admin = true
        }
      })
    }

    if (req.params.userid) {
      db.map(item => {
        if (item.role === 'user' && item.id === req.params.userid) {
          req.user = true
        }
      })
    }

    next()
  }
}