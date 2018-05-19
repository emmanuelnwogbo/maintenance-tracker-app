export default class UserController {
  static signUp(req, res) {
    const credentials = req.inputs
    res.status(201).send({
      credentials,
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