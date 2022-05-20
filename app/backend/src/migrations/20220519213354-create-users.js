'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Users = queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      nickName: {
        type: Sequelize.STRING,
        field: 'nick_name',
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
    });
    return Users;
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable("Users");
  }
};
