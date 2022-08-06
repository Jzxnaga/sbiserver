'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class Sec_Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Sec_Customer.init({firstName: DataTypes.STRING,
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
    noKTP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // noKK: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    createdAt: { 
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW },
    updatedAt: { 
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW }
  }, 
  { 
    hooks:{
      
    },
    sequelize,
    modelName: 'Sec_Customer',
    tableName: 'Sec_Customer'
  });

  Sec_Customer.associate = function(models){
    //Masterabsen.belongsTo(models.Masterstaff,{foreignKey: 'userId'})
  }

  return Sec_Customer;
};