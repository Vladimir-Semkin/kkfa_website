'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate({ Application }) {
      this.hasMany(Application, { foreignKey: 'teamId' });
    }
  }
  Team.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Team',
    },
  );
  return Team;
};
