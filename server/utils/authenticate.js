import db from '../nonPersistDB'

export default class Authenticate {
  static findUserId(req, res, next) {
    if (req.params.adminid) {
      return db.map(item => {
        if (item.role === 'admin' && item.id === req.params.adminid) {
          req.admin = true
          next()
        }
      })
    }

    if (req.params.userid) {
      return db.map(item => {
        if (item.role === 'user' && item.id === req.params.userid) {
          req.user = true
          next()
        }
      })
    }
  }
}