'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'isActive', Sequelize.BOOLEAN);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'isActive');
  }
};
