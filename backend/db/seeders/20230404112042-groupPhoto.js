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
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4gfwi-JJl68lhLy0QDFtld_UWa9JS9ozKLNSlncLe552pDiHFCJP6PEIBYZLyrXdQ_k&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceeventId: 2,
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqzEf9SVCalKBhizptarML-R-hpxcABub9TWL1IVBwpNXdCZK1Re0Fjao9kU0SfiO_Zk&usqp=CAU',
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
