'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', 
    [
      {
        id: 1,
        name: 'Admin',
        email: 'admin@email.com',
        password: 'admin',
        role: 'administrator',
      }
    ], {timestamps: false});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
