'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const teamsData = [{ title: 'Red Bull Racing' }, { title: 'Honda Power' }, { title: 'Котики Motorsport' }, { title: 'Zone 402' }, { title: 'ARS Stavropol' }];
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
