export default class UserController {
  static signUp(req, res) {

  }

  static signIn(req, res) {
    const credentials = req.inputs
    res.status(200).send({
      credentials,
      message: `you've signed in succesfully.`
    })
  }

  static logout(req, res) {

  }
}