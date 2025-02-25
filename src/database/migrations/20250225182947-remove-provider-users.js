'use strict';

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface) {
  await queryInterface.removeColumn('users', 'provider');
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'provider', {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  });
}
