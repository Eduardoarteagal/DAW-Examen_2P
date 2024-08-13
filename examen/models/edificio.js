'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Edificio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definición de la asociación con el modelo Propietario
      Edificio.belongsTo(models.Propietario, { foreignKey: 'id_propietario' });
    }
  }

  Edificio.init({
    nombre: DataTypes.STRING,
    numpisos: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    avaluo: DataTypes.DECIMAL,
    id_propietario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Edificio',
  });

  return Edificio;
};
