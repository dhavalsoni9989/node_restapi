const httpStatus = require('http-status');
const { userService } = require('../services');

module.exports = class UserController {
  /**
   * Get user list
   * @public
   */
  async list(req, res, next) {
    try {
      console.log('req.query :::: ', req.query);
      const users = await userService.list(req.query);
      console.log('users :::: ', users);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Create new user
   * @public
   */
  async create(req, res, next) {
    try {
      const savedUser = await userService.create(req.body);
      res.status(httpStatus.CREATED);
      // res.json(savedUser.transform());
      res.json(savedUser);
    } catch (error) {
      next(error);
      //next(User.checkDuplicateEmail(error));
    }
  }
};
