'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate({ Participant }) {
      this.belongsTo(Participant, { foreignKey: 'participantId' });
    }
  }
  Result.init(
    {
      participantId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Participants',
          key: 'id',
        },
        onDelete: 'CASCADE',
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