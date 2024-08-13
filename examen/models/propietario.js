'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Propietario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definición de la asociación con el modelo Edificio
      Propietario.hasMany(models.Edificio, { foreignKey: 'id_propietario' });
    }
  }

  Propietario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Propietario',
  });

  return Propietario;
};
