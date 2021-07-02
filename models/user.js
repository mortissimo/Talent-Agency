'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Talent, {foreignKey:'user_id'});
    }
  };
  User.init({
    username: {
      type : DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Username is required'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: "Password is required"
        }
      }
    },
    email: {
      type :DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Email is required'
        },
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate', (instance, option)=>{
    instance.role = 'Actor'
  })
  return User;
};