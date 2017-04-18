'use strict';

module.exports = {
   up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'company', Sequelize.STRING);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'company');
  }
};
