'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const groupsData = [
      { title: 'Стандарт 1' },
      { title: 'Стандарт 1' },
      { title: 'Турбо Сток' },
      { title: 'Sport' },
      { title: 'GT' },
      { title: 'Unlim' },
      { title: 'Не знаю, участвую в первый раз (в первый раз на данном автомобиле' },
    ];
    const groups = groupsData.map((group) => ({
      ...group,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('GroupLists', groups);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('GroupLists');
  },
};
