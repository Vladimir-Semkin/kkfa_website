'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupList extends Model {
    static associate({ Application }) {
      this.hasMany(Application, { foreignKey: 'groupListId' });
    }
  }
  GroupList.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'GroupList',
    },
  );
  return GroupList;
};
