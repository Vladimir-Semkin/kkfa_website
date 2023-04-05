'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const racesData = [
      {
        title: 'Усть-Лабинск',
        date: '2023-06-10',
        photo:
          'https://avatars.mds.yandex.net/get-altay/5104421/2a00000180478ee6183a7bbd8c5808ffc11d/XXL_height',
      },
      { title: 'Сочи', date: '2023-05-14', photo: 'https://naklejki-na-avto.ru/images/product/l/35952d6ab.png' },
      { title: 'Грозный', date: '2023-04-16', photo: 'https://motoring.ru/wp-content/uploads/grozny-track-opt.jpg' },
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
