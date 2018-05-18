export default class UserController {
  static signUp(req, res) {
    res.status(201).send({
      message: `you've signed up succesfully.`
    })
  }

  static signIn(req, res) {
    console.log(req);
  }

  static logout(req, res) {
    console.log(req);
  }
}