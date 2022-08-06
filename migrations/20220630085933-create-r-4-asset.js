'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('R4_Asset', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      merk: {
        type: Sequelize.STRING
      },
      jenis: {
        type: Sequelize.STRING
      },
      jenis: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('R4_Asset');
  }
};