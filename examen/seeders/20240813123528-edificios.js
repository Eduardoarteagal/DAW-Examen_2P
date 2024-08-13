'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Primero, obtén los IDs de los propietarios insertados previamente
    const propietarios = await queryInterface.sequelize.query(
      'SELECT id FROM Propietarios;'
    );

    const propietariosIds = propietarios[0];

    return queryInterface.bulkInsert('Edificios', [
      {
        nombre: 'Edificio Central',
        numpisos: 10,
        direccion: 'Calle Principal 123',
        avaluo: 1500000.50,
        id_propietario: propietariosIds[0].id
      },
      {
        nombre: 'Edificio Norte',
        numpisos: 8,
        direccion: 'Avenida Norte 456',
        avaluo: 1200000.75,
        id_propietario: propietariosIds[1].id
      },
      {
        nombre: 'Edificio Este',
        numpisos: 12,
        direccion: 'Calle Este 789',
        avaluo: 2000000.00,
        id_propietario: propietariosIds[2].id
      },
      {
        nombre: 'Edificio Sur',
        numpisos: 6,
        direccion: 'Avenida Sur 101',
        avaluo: 950000.00,
        id_propietario: propietariosIds[3].id
      },
      {
        nombre: 'Edificio Oeste',
        numpisos: 9,
        direccion: 'Calle Oeste 202',
        avaluo: 1350000.25,
        id_propietario: propietariosIds[4].id
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Edificios', null, {});
  }
};
