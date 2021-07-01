'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Show.belongsToMany(models.Talent, {through:models.TalentShow, foreignKey: "show_id"});
    }
    getSchedule(){
      return this.schedule.toLocaleString();
    }
  };
  Show.init({
    name: DataTypes.STRING,
    schedule: DataTypes.DATE,
    requirement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};