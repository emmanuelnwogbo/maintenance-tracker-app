export default class AdminController {
  static signUp(req, res) {
    const credentials = req.inputs
    res.status(201).send({
      credentials,
      message: `you are logged in as admin`
    })
  }

  static signIn(req, res) {
    console.log(req);
  }

  static logout(req, res) {
    console.log(req);
  }
}