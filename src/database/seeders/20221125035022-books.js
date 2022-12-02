'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Books', [{
      user_id: 1,
      title: 'Buku Pemrograman Web',
      description: 'Belajar Node.JS',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      user_id: 2,
      title: 'Buku Pemrograman Mobile',
      description: 'Belajar Java',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
