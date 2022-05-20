const { User } = require('../models');

const getUsers = async () => User.findAll({
  attributes: { exclude: ['password'] },
});

module.exports = {
  getUsers,
};
