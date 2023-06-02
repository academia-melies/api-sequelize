'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      // userData_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: { model: 'userData', key: 'id' },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      perfil: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo: {
        type: Sequelize.DATE,
        allowNull: true
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
    return queryInterface.dropTable('users');
  }
};
