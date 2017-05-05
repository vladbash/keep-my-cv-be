'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Resume', 'createdAt', Sequelize.DATE);
    queryInterface.addColumn('Resume', 'updatedAt', Sequelize.DATE);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Resume', 'createdAt');
    queryInterface.removeColumn('Resume', 'updatedAt');
  }
};
