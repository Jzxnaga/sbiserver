'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class R4_Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  R4_Asset.init({
    // id_R4:DataTypes.INTEGER,
    merk: DataTypes.STRING,
    tipe: DataTypes.STRING,
    model: DataTypes.STRING,
    tahun: DataTypes.INTEGER,
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
    modelName: 'R4_Asset',
    tableName: 'R4_Asset'
  });

  R4_Asset.associate = function(models){
    //Masterabsen.belongsTo(models.Masterstaff,{foreignKey: 'userId'})
    //R4_Asset.hasOne(models.R4_SMF,{foreignKey:'id'})
    // R4_Asset.hasOne(models.R4_PU77,{ sourceKey: 'id', foreignKey: 'id' })
  }

  return R4_Asset;
};