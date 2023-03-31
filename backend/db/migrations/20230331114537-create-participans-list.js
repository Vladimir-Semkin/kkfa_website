'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ParticipansList', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      applicationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Applications',
          key: 'id',
        },
      },
      raceEventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'RaceEvents',
          key: 'id',
        },
      },
      groupListId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      startNomer: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('ParticipansList');
  },
};
