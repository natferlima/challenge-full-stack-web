const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const result = await userService.findAll();
  return res.status(200).json(result);
};

module.exports = { getAll };