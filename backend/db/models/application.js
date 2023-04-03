'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate({ GroupList, RaceEvent, Team, Participant }) {
      this.belongsTo(Team, { foreignKey: 'teamId' });
      this.hasMany(Participant, { foreignKey: 'applicationId' });
      this.belongsTo(GroupList, { foreignKey: 'groupListId' });
      this.belongsTo(RaceEvent, { foreignKey: 'raceEventId' });
    }
  }
  Application.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      familiya: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      otchestvo: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      datarojdeniya: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      gorod: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      udostovorenieVoditel: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      licenseRAFNAF: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      medicalReport: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      markaModelAuto: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      gosNomer: {
        type: DataTypes.TEXT,
      },
      objemDvigatelya: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tipPrivoda: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      markaModelPokryshek: {
        type: DataTypes.TEXT,
      },
      nalichieNadduva: {
        type: DataTypes.TEXT,
      },
      mnogodresselnyVpusk: {
        type: DataTypes.TEXT,
      },
      izmFazyGazoraspredeleniya: {
        type: DataTypes.TEXT,
      },
      nestandartnyVpusk: {
        type: DataTypes.TEXT,
      },
      izmKuzova: {
        type: DataTypes.TEXT,
      },
      groupListId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'GroupLists',
          key: 'id',
        },
      },
      teamId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Teams',
          key: 'id',
        },
      },
      ispolzovanieAutoDrugimi: {
        type: DataTypes.TEXT,
      },
      startNomer: {
        type: DataTypes.INTEGER,
      },
      raceEventId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'RaceEvents',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Application',
    },
  );
  return Application;
};