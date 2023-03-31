'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RaceEvent extends Model {
    static associate({ Application, ParticipansList }) {
      this.hasMany(Application, { foreignKey: 'raceEventId' });
      this.hasMany(ParticipansList, { foreignKey: 'raceEventId' });
    }
  }
  RaceEvent.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'RaceEvent',
    },
  );
  return RaceEvent;
};
