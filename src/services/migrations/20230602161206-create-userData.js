'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('userData', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      naturalness: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marital_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      spouse: {
        type: Sequelize.STRING,
        allowNull: true
      },
      corporate_email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dependent: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mother: {
        type: Sequelize.STRING,
        allowNull: false
      },
      father: {
        type: Sequelize.STRING,
        allowNull: true
      },
      schooling: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('userData');
  }
};
