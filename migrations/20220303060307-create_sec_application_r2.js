'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sec_Application_R2', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPermohonan: {
        type: Sequelize.INTEGER
      },
      totalPenawaran: {
        type: Sequelize.INTEGER
      },
      totalPencairan: {
        type: Sequelize.INTEGER
      },
      jumlahItem: {
        type: Sequelize.INTEGER
      },
      komisiAgen: {
        type: Sequelize.INTEGER
      },
      statusPengajuan: {
        type: Sequelize.STRING
      },
      ID_Sec_Agen: {
        type: Sequelize.INTEGER
      },
      ID_Sec_Customer: {
        type: Sequelize.INTEGER
      },
      ID_R2_Lessor: {
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
    await queryInterface.dropTable('Sec_Application_R2');
  }
};