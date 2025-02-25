'use strict';

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('contacts', 'status', {
    type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
    allowNull: false,
    defaultValue: 'ACTIVE',
  });
}

export async function down(queryInterface) {
  return await queryInterface.removeColumn('contacts', 'status');
}
