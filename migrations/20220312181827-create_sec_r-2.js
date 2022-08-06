'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sec_R2', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Sec_Application_R2: {
        type: Sequelize.INTEGER
      },
      ID_Sec_Customer: {
        type: Sequelize.INTEGER
      },
      ID_R2_Asset: {
        type: Sequelize.INTEGER
      },
      ID_R2_Lessor: {
        type: Sequelize.INTEGER
      },
      NO_Pol: {
        type: Sequelize.STRING
      },
      STNK_img: {
        type: Sequelize.STRING
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
      freezeName:true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sec_R2');
  }
};