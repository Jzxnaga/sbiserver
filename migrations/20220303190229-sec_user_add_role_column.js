'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Sec_User',
        'role',
        {
          type: Sequelize.STRING,
          after: "password"
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Sec_User', 'role')
    ]);
  }
};
