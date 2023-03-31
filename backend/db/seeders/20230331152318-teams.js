'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const teamsData = [{ title: 'Бобры' }, { title: 'Не бобры' }];
    const teams = teamsData.map((team) => ({
      ...team,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Teams', teams);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Teams');
  },
};
