const { sign, verify } = require('jsonwebtoken');

const generateToken = (data) => {
  return sign(data, process.env.JWT_SECRET, {
    algorithm: 'RS256',
  });
};

const verifyToken = (token) => {
  return verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
