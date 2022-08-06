const studentService = require('../services/studentService');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const findId = await studentService.findById(id);
  if (!findId) {
    return res.status(400).json(
      { message: 'Aluno(a) não encontrado(a).'}
    )
  }
  next();
};
