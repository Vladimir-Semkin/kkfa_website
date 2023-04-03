'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const racesData = [
      { title: 'Усть-Лобинск', date: '10 июня 2023' },
      { title: 'Ставрополь', date: '23 сентября 2023' },
      { title: 'Г1ала', date: '16 апреля 2023' },
    ];
    const races = racesData.map((race) => ({
      ...race,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('RaceEvents', races);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('RaceEvents');
  },
};

