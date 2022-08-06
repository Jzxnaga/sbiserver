'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class R2_BG94 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  R2_BG94.init({
    id_R2: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
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
    modelName: 'R2_BG94',
    tableName: 'R2_BG94'
  });

  R2_BG94.associate = function(models){
    R2_BG94.hasOne(models.R2_Asset,{ sourceKey: 'id_R2', foreignKey: 'id' })
  }

  return R2_BG94;
};