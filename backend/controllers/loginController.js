const userService = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {

    if (!email || !password || email === "" || password === "") {
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

    const token = generateJWT.generateToken(userInfo);
    return res.status(200).json({ token });

  } catch (e) {
    console.log(e);
  }
}

module.exports = { login };