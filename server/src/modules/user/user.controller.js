const autoBind = require("auto-bind");
const userService = require("./user.service");
const { userMessage } = require("./user.messages");

class userController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = userService;
  }
  async whoami(req, res, next) {
    try {
      console.log("here user :", req);
      const user = req.user;
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new userController();
