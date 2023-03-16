const { Router } = require('express');

const prediosController = require('../controllers/prediosController')

const rotas = new Router();

rotas.route('/predios')
     .get(prediosController.getPredios)
     .post(prediosController.addPredio)
     .put(prediosController.updatePredio)

rotas.route('/predios/:codigo')
     .delete(prediosController.deletePredio)
     .get(prediosController.getPredioPorCodigo)

module.exports = rotas;

