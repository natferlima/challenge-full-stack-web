const { User } = require('../models');

const create = async ({name, email, password, role}) => {
  const result = await User.create({ name, email, password, role });
  return result;
};

const findOne = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

const findAll = async () => {
  const result = await User.findAll();
  return result;
};

const findById = async (id) => {
  const result = await User.findByPk(id);
  return result;
};

const remove = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  create,
  findOne,
  findAll,
  findById,
  remove,
};