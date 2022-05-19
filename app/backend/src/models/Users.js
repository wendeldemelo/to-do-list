const User = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    nickName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    
  },
  {
    tableName: 'Users',
    underscored: true,
    timestamps: false,
  });

  return Users;
};

module.exports = User;
