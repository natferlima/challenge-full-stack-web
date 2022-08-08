const studentService = require('../services/studentService');

const create = async (req, res) => {
  const { name, email, RA, CPF } = req.body;
  const result = await studentService.create({ name, email, RA, CPF });
  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const result = await studentService.findAll();
  return res.status(200).json(result);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const result = await studentService.findById(id);
  return res.status(200).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const result = await studentService.update(id, name, email);
  return res.status(200).json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await studentService.remove(id);
  return res.status(200).json(result);
};

module.exports = { getAll, create, getOne, update, remove };