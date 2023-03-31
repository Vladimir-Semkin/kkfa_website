'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      familiya: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      otchestvo: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      datarojdeniya: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      gorod: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      phone: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      udostovorenieVoditel: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      licenseRAFNAF: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      medicalReport: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      markaModelAuto: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      gosNomer: {
        type: Sequelize.TEXT,
      },
      objemDvigatelya: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      tipPrivoda: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      markaModelPokryshek: {
        type: Sequelize.TEXT,
      },
      nalichieNadduva: {
        type: Sequelize.BOOLEAN,
      },
      mnogodresselnyVpusk: {
        type: Sequelize.BOOLEAN,
      },
      izmFazyGazoraspredeleniya: {
        type: Sequelize.BOOLEAN,
      },
      nestandartnyVpusk: {
        type: Sequelize.BOOLEAN,
      },
      izmKuzova: {
        type: Sequelize.BOOLEAN,
      },
      groupListId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'GroupLists',
          key: 'id',
        },
      },
      teamId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Teams',
          key:'id'
        }
      },
      ispolzovanieAutoDrugimi: {
        type: Sequelize.TEXT,
      },
      startNomer: {
        type: Sequelize.INTEGER,
      },
      raceEventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RaceEvents',
          key: 'id',
        },
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
    await queryInterface.dropTable('Applications');
  },
};
