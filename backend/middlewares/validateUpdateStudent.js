const studentService = require('../services/studentService');

module.exports = async (req, res, next) => {

  const { name, email } = req.body;
  
  if (!name || name === "") {
    return res.status(400).json(
      { message: 'O campo nome é obrigatório.' },
    );
  }
  if (!email || email === "") {
    return res.status(400).json(
      { message: 'O campo email é obrigatório.' },
    );
  }
  if (name.length < 3) {
    return res.status(400).json(
      { message: 'O campo nome precisa ter mais de 3 caracteres.' },
    );
  }
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
  if (!regexEmail.test(email)) {
    return res.status(400).json(
      { message: 'O campo email não é válido.' }
    );
  }
  const findEmail = await studentService.findOne(email);
  if(findEmail) {
    return res.status(400).json(
      { message: 'O email já existe.' }
    );
  }

  next();
};