export default class AdminController {
  static signUp(req, res) {
    console.log(req);
  }

  static signIn(req, res) {
    const credentials = req.inputs
    res.status(200).send({
      credentials,
      message: `you've signed in succesfully.`
    })
  }

  static logout(req, res) {
    console.log(req);
  }
}