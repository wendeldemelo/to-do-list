module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        firstName: 'Wendel',
        lastName: 'Melo',
        nickName: 'chicobutico',
        email: 'demelowendel@gmail.com',
        password: 'chicotubico9090',
        gender: 'Male',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg',
      },
      {
        id: 2,
        firstName: 'Natacsha',
        lastName: 'Melo',
        nickName: 'nati',
        email: 'natacsha@gmail.com',
        password: 'abacaxi123',
        gender: 'Female',
        image: 'https://cdn1.vectorstock.com/i/thumb-large/88/15/fox-head-on-white-background-wild-animals-vector-15988815.jpg',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
