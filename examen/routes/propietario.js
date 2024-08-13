const express = require('express');
const router = express.Router();
const { Propietario } = require('../models');

router.get('/', async (req, res) => {
  const propietarios = await Propietario.findAll();
  res.json(propietarios);
});

module.exports = router;
