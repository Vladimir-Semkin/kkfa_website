'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate({ ParticipansList }) {
      this.belongsTo(ParticipansList, { foreignKey: 'participansListId' });
    }
  }
  Result.init(
    {
      participansListId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'ParticipansList',
          key: 'id',
        },
      },
      time: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      attempt: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Result',
    },
  );
  return Result;
};
