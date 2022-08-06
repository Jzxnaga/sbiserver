'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model

  class R2_ET23 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  R2_ET23.init({
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
    modelName: 'R2_ET23',
    tableName: 'R2_ET23'
  });

  R2_ET23.associate = function(models){
    R2_ET23.hasOne(models.R2_Asset,{ sourceKey: 'id_R2', foreignKey: 'id' })
  }

  return R2_ET23;
};