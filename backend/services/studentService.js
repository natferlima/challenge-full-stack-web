const { Student } = require('../models');

const create = async ({name, email, RA, CPF}) => {
  const result = await Student.create({ name, email, RA, CPF });
  return result;
};

const findOne = async (email) => {
  const result = await Student.findOne({ where: { email } });
  return result;
};

const findByRA = async (RA) => {
  const result = await Student.findOne({ where: { RA } });
  return result;
};

const findAll = async () => {
  const result = await Student.findAll();
  return result;
};

const findById = async (id) => {
  const result = await Student.findByPk(id);
  return result;
};

const update = async(id, name, email) => {
  await Student.update({name, email}, { where: {id} });
  const result = await Student.findByPk(id);
  return result;
}

const remove = async (id) => {
  await Student.destroy({ where: { id } });
};

module.exports = {
  create,
  findOne,
  findByRA,
  findAll,
  findById,
  update,
  remove,
};