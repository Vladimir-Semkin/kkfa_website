'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'GroupPhotos',
      [
        {
          raceeventId: 1,
          photo:
            'https://www.topendsports.com/sport/motorsports/images/sports-car-racing-pixa.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 1,
          photo:
            'https://www.dailysportscar.com/wp-content/uploads/2022/07/163-VSR-Lamborghini-Spa-24-2022-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 1,
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrtjN-bFmzavpFnZ-BJQdJHl6pL6A0rHqdJhmQmrmyMmkBtJQ90A0uUJpTXhdYdF0-HI&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('GroupPhotos');
  },
};
