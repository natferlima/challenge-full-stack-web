const jwt = require('jsonwebtoken');

const secret = 'EdTech+AEducacao';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256'
}

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);
  return token;
}

module.exports = { generateToken };