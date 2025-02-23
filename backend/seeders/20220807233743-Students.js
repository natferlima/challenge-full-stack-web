'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', 
    [
      {
        id: 1,
        name: "Paula Souza",
        email: "paula@email.com",
        RA: 101235,
        CPF: "121.999.999-99"
      },
      {
        id: 2,
        name: "João Silva",
        email: "joao@email.com",
        RA: 111687,
        CPF: "122.999.999-99"
      },
      {
        id: 3,
        name: "Marina Miranda",
        email: "marina@email.com",
        RA: 111365,
        CPF: "123.999.999-99"
      },
      {
        id: 4,
        name: "Maurício Souza",
        email: "mauricio@email.com",
        RA: 101299,
        CPF: "124.999.999-99"
      }
    ], {timestamps: false});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
