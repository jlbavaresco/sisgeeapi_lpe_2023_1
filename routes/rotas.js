const { Router } = require('express');

const prediosController = require('../controllers/prediosController')

const salasController = require('../controllers/salasController')

const rotas = new Router();

rotas.route('/predios')
     .get(prediosController.getPredios)
     .post(prediosController.addPredio)
     .put(prediosController.updatePredio)

rotas.route('/predios/:codigo')
     .delete(prediosController.deletePredio)
     .get(prediosController.getPredioPorCodigo)

rotas.route('/salas')
     .get(salasController.getSalas)
     .post(salasController.addSala)
     .put(salasController.updateSala)

rotas.route('/salas/:codigo')
     .delete(salasController.deleteSala)
     .get(salasController.getSalaPorCodigo)

module.exports = rotas;

