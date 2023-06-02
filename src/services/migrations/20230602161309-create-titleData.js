'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('titleData', {
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
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      section: {
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
    return queryInterface.dropTable('titleData');
  }
};
