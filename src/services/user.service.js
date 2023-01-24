const { User } = require('../models');

module.exports = class UserService {
  /**
   *
   * @param {*} query
   * @returns
   */
  list(query) {
    try {
      return User.find(query);
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param {*} query
   * @returns
   */
  create(query) {
    try {
      const user = new User(query);
      return user.save();
    } catch (error) {
      throw error;
    }
  }
};
