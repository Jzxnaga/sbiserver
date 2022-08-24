'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class Sec_R2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Sec_R2.init({
    id: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement:0
    },
    ID_Sec_Application_R2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_Sec_Customer:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_R2_Asset: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_R2_Lessor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NO_Pol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    STNK_img: {
      type: DataTypes.STRING,
    },
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
    modelName: 'Sec_R2',
    tableName: 'Sec_R2'
  });

  Sec_R2.associate = function(models){
    //Masterabsen.belongsTo(models.Masterstaff,{foreignKey: 'userId'})
    Sec_R2.belongsTo(models.Sec_Application_R2, { sourceKey: 'ID_Sec_Application_R2' , foreignKey : 'id'});
    Sec_R2.hasOne(models.R2_Asset,{sourceKey: 'ID_R2_Asset' , foreignKey : 'id'})
  }

  return Sec_R2;
};