'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'user_data_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'userData', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.addColumn('address', 'user_data_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'userData', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.addColumn('rgData', 'user_data_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'userData', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.addColumn('titleData', 'user_data_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'userData', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'user_data_id');
    await queryInterface.removeColumn('address', 'user_data_id');
    await queryInterface.removeColumn('rgData', 'user_data_id');
    await queryInterface.removeColumn('titleData', 'user_data_id');

  }
};
