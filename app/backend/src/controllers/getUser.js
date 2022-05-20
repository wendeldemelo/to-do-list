const userService = require('../services/user');

module.exports = async (req, res) => {
  try {
    const users = await userService.getUsers();
    
    if (!users) return res.status(500).json({ message: 'Erro ao listar usuários' });

    res.status(200).json(users);
  } catch (err) {
    res.status(500)
      .json({ message: 'Erro ao buscar usuários no banco' });
  }
};
