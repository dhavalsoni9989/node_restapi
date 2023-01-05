const { Schema } = require('mongoose');
const { connection } = require('../configs');

/**
 * User Schema
 * @private
 */
const userSchema = new Schema(
  {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    name: {
      type: String,
      maxlength: 128,
      index: true,
      trim: true,
    },
    services: {
      facebook: String,
      google: String,
    },
    picture: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * @typedef User
 */
module.exports = connection._connect.model('User', userSchema);
