'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class Sec_Application_R2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Sec_Application_R2.init({
    id: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
    },
    totalPermohonan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalPenawaran: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalPencairan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlahItem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    komisiAgen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statusPengajuan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ID_Sec_Agen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_Sec_Customer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_R2_Lessor: {
      type: DataTypes.INTEGER,
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
    modelName: 'Sec_Application_R2',
    tableName: 'Sec_Application_R2'
  });

  Sec_Application_R2.associate = function(models){
    Sec_Application_R2.belongsTo(models.Sec_User,{foreignKey: 'ID_Sec_Agen'})
    Sec_Application_R2.belongsTo(models.Sec_Customer,{foreignKey: 'ID_Sec_Customer'})
    Sec_Application_R2.hasMany(models.Sec_R2, {foreignKey : 'ID_Sec_Application_R2'});
  }

  return Sec_Application_R2;
};