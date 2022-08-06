const userService = require('../services/userService');

const create = async (req, res) => {
  const { name, email, password, role } = req.body;
  const result = await userService.create({ name, email, password, role });
  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const result = await userService.findAll();
  return res.status(200).json(result);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const result = await userService.findById(id);
  return res.status(200).json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await userService.remove(id);
  return res.status(200).json(result);
};

module.exports = { getAll, create, getOne, remove };
