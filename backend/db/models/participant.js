'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate({ Application, RaceEvent, Result }) {
      this.belongsTo(Application, { foreignKey: 'applicationId' });
      this.belongsTo(RaceEvent, { foreignKey: 'raceEventId' });
      this.hasMany(Result, { foreignKey: 'participantId' });
    }
  }
  Participant.init(
    {
      applicationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      raceEventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'RaceEvents',
          key: 'id',
        },
      },
      groupListId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      startNomer: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Participant',
    },
  );
  return Participant;
};
