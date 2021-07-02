'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TalentShow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TalentShow.init({
    show_id: DataTypes.INTEGER,
    talent_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TalentShow',
  });
  return TalentShow;
};