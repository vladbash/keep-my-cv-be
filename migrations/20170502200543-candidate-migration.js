'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Candidates', 'birthday', Sequelize.DATE);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Candidates', 'birthday');
  }
};
