'use strict';

const { generatePassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class Sec_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Sec_User.init({
    id: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement:1
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    onlineStatus: { 
      type: Sequelize.BOOLEAN, 
    },
    role:{
      type: DataTypes.STRING,
      allowNull: false
    },
    token: DataTypes.STRING,
    createdAt: { 
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW },
    updatedAt: { 
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW }
  }, 
  { 
    hooks:{
      beforeCreate(body){
        body.password = generatePassword(body.password)
      }
    },
    sequelize,
    modelName: 'Sec_User',
    tableName: 'Sec_User'
  });

  Sec_User.associate = function(models){
    //Masterabsen.belongsTo(models.Masterstaff,{foreignKey: 'userId'})
  }

  return Sec_User;
};