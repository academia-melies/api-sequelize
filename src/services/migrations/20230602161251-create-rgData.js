'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('rgData', {
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
      rg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expedition: {
        type: Sequelize.DATE,
        allowNull: false
      },
      organ: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uf: {
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
    return queryInterface.dropTable('rgData');
  }
};
