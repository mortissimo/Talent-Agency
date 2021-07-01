'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Talent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Talent.belongsToMany(models.Show, {through:models.TalentShow, foreignKey: "talent_id"});
      Talent.belongsTo(models.User, {foreignKey:'user_id'});
    }
  };
  Talent.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    talent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Talent',
  });
  return Talent;
};