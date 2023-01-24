const User = require('../models/user.model');

module.exports = class UserService {
  list(query) {
    try {
      return User.find(query);
    } catch (error) {
      throw error;
    }
  }

  create(query) {
    try {
      const user = new User(query);
      return user.save();
    } catch (error) {
      throw error;
    }
  }
};
