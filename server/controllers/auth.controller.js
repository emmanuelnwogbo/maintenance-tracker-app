import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import db from '../db'


export default class Auth {
  static signup(req, res) {
    console.log(req.body)
  }
}