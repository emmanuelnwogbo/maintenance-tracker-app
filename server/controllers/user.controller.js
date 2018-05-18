export default class UserController {
  static signUp(req, res) {
    console.log(req.body);
  }

  static signIn(req, res) {
    console.log(req);
  }

  static logout(req, res) {
    console.log(req);
  }
}