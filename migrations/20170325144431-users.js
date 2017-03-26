'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      avatar: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE
    });
    return;
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Users');
  }
};
