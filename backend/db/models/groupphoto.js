'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupPhoto extends Model {
    static associate({ RaceEvent }) {
      this.belongsTo(RaceEvent, { foreignKey: 'raceeventId' });
    }
  }
  GroupPhoto.init(
    {
      raceeventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'RaceEvents',
          key: 'id',
        },
      },
      photo: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'GroupPhoto',
    }
  );
  return GroupPhoto;
};
