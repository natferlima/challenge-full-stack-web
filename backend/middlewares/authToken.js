const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = 'EdTech+AEducacao';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json(
      { message: 'Não autorizado.'}
    );
  }

  const decoded = jwt.verify(token, secret);

  const userIsValid = await userService.findOne(decoded.data.email);

  if (!userIsValid) {
    return res.status(401).json(
      { message: 'Não autorizado.'}
    );
  }

  next();
};