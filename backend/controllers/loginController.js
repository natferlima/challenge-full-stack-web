const userService = require('../services/userService');
const generateToken = require('../utils/generateJWT');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Os campos email e senha são obrigatórios."});
  }
  
  const findUser = await userService.findOne(email);
  if (!findUser || findUser.password !== password) {
    return res.status(401).json({ message: "Email ou senha inválido."});
  }

  const newFindUser = findUser.dataValues;
  const userInfo = { 
    id: newFindUser.id,
    email: newFindUser.email,
    role: newFindUser.role,
  };

  const token = generateToken(userInfo);
  return res.status(200).json({ token });
}

module.exports = { login };