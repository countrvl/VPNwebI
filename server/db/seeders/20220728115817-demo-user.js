const sha256 = require('sha256');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [{
        userName: 'Nikol',
        password: sha256('123'),
        email: 'nikolrus03@gmail.com',
        adm: true,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Morda',
        password: sha256('1234'),
        email: 'morda@gmail.com',
        adm: false,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
