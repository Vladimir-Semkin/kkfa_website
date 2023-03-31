'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParticipansList extends Model {
    static associate({ Application, RaceEvent, Result }) {
      this.hasOne(Application, { foreignKey: 'applicationId' });
      this.belongsTo(RaceEvent, { foreignKey: 'raceEventId' });
      this.hasMany(Result, { foreignKey: 'participansListId' });
    }
  }
  ParticipansList.init(
    {
      applicationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Applications',
          key: 'id',
        },
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
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'ParticipansList',
    },
  );
  return ParticipansList;
};
