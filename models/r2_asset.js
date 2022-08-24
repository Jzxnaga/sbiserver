'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class R2_Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  R2_Asset.init({
    id: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
    },
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
    modelName: 'R2_Asset',
    tableName: 'R2_Asset'
  });

  R2_Asset.associate = function(models){
    //Masterabsen.belongsTo(models.Masterstaff,{foreignKey: 'userId'})
    //R2_Asset.hasOne(models.R2_SMF,{foreignKey:'id'})
    // R2_Asset.hasOne(models.R2_PU77,{ sourceKey: 'id', foreignKey: 'id' })
  }

  return R2_Asset;
};