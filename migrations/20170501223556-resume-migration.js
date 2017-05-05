'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('Resume', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING,
      link: Sequelize.STRING,
      candidate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Resume');
  }
};
