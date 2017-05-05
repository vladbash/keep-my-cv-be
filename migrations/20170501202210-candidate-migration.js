'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('Skill', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      label: {
        type: Sequelize.INTEGER,
        unique: true
      }
    });
    queryInterface.createTable('Lable', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      color: Sequelize.STRING,
      label: Sequelize.STRING
    });
    queryInterface.createTable('ContactType', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: Sequelize.STRING
    }).then(() => {
      queryInterface.bulkInsert('ContactType', [
        {
          type: 'email'
        },
        {
          type: 'phone'
        },
        {
          type: 'linkedin'
        },
        {
          type: 'facebook'
        },
        {
          type: 'github'
        },
        {
          type: 'other social'
        }
      ]);
    });

    queryInterface.createTable('Candidates', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      photo: Sequelize.STRING,
      notes: Sequelize.TEXT,
      city: Sequelize.STRING,
      country: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    queryInterface.createTable('Contacts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      value: Sequelize.STRING,
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ContactType',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
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
    return;
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Skill');
    queryInterface.dropTable('Lable');
    queryInterface.dropTable('ContactType');
    queryInterface.dropTable('Candidates');
    queryInterface.dropTable('Contacts');
  }
};
