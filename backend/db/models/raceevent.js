'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RaceEvent extends Model {
    static associate({ Application, Participant }) {
      this.hasMany(Application, { foreignKey: 'raceEventId' });
      this.hasMany(Participant, { foreignKey: 'raceEventId' });
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
