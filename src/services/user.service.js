const User = require('../models/user.model');

exports.list = (query) => {
  try {
    return User.find(query);
  } catch (error) {
    throw error;
  }
};

exports.create = (query) => {
  try {
    const user = new User(query);
    return user.save();
  } catch (error) {
    throw error;
  }
};
