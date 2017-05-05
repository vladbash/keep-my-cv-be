'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.renameTable('Lable', 'Label');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.renameTable('Label', 'Lable');
  }
};
