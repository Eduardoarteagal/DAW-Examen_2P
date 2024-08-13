const express = require('express');
const router = express.Router();
const { Edificio, Propietario } = require('../models');

router.post('/', async (req, res) => {
  const { nombre, numpisos, direccion, avaluo, id_propietario } = req.body;
  const edificio = await Edificio.create({ nombre, numpisos, direccion, avaluo, id_propietario });
  res.json(edificio);
});

router.get('/', async (req, res) => {
  const edificios = await Edificio.findAll({ include: Propietario });
  res.json(edificios);
});

module.exports = router;
