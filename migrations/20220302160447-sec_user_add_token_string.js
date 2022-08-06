'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Sec_User',
        'token',
        {
          type: Sequelize.STRING,
          after: "onlineStatus"
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Sec_User', 'token')
    ]);
  }
};
