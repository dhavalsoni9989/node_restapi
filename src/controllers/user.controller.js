const httpStatus = require('http-status');
const User = require('../services/user.service');

/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    console.log('req.query :::: ', req.query);
    const users = await User.list(req.query);
    console.log('users :::: ', users);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

/**
 * Create new user
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const savedUser = await User.create(req.body);
    res.status(httpStatus.CREATED);
    // res.json(savedUser.transform());
    res.json(savedUser);
  } catch (error) {
    next(error);
    //next(User.checkDuplicateEmail(error));
  }
};
