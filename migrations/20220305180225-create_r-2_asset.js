'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('R2_Asset', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // id_R2:{
      //   type: Sequelize.INTEGER
      // },
      merk: {
        type: Sequelize.STRING
      },
      tipe: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      freezeTableName: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('R2_Asset');
  }
};