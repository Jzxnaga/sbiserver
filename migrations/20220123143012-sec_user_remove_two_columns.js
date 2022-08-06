'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Sec_User', 'columnName1'),
      queryInterface.removeColumn('Sec_User', 'columnName2')
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Sec_User',
        'columnName1',
        {
          type: Sequelize.STRING,
          after: "onlineStatus"
        }
      ),
      queryInterface.addColumn(
        'Sec_User',
        'columnName2',
        {
          type: Sequelize.STRING,
          after: "columnName1"
        }
      ),
    ]);
  }
};
