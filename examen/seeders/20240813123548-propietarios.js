'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Propietarios', [
      { nombre: 'Luis', apellido: 'Soto', estado: 'activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'María', apellido: 'Herrera', estado: 'activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Marcos', apellido: 'Hernandez', estado: 'inactivo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Paz', apellido: 'Hurtado', estado: 'activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Dayana', apellido: 'Ramirez', estado: 'activo', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Propietarios', null, {});
  }
};
