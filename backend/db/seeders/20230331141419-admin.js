'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const adminsData = [
      {
        email: 'admin@mail.ru',
        password: await bcrypt.hash('zzz', 10),
        status: true,
      },
      {
        email: 'moder@mail.ru',
        password: await bcrypt.hash('123', 10),
        status: false,
      },
    ];
    const admins = adminsData.map((admin) => ({
      ...admin,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Admins', admins);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Admins');
  },
};
