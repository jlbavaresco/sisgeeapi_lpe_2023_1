const { Router } = require('express');

const { getPredios, addPredio, deletePredio,
     getPredioPorCodigo, updatePredio } = require('../controllers/prediosController')

const { getSalas, addSala, deleteSala,
     getSalaPorCodigo, updateSala } = require('../controllers/salasController')

const { login, verificaJWT } = require('../controllers/segurancaController');

const rotas = new Router();

rotas.route('/login').post(login);

rotas.route('/predios')
     .get(verificaJWT, getPredios)
     .post(verificaJWT, addPredio)
     .put(verificaJWT, updatePredio)

rotas.route('/predios/:codigo')
     .delete(verificaJWT, deletePredio)
     .get(verificaJWT, getPredioPorCodigo)

rotas.route('/salas')
     .get(verificaJWT,getSalas)
     .post(verificaJWT,addSala)
     .put(verificaJWT,updateSala)

rotas.route('/salas/:codigo')
     .delete(verificaJWT, deleteSala)
     .get(verificaJWT, getSalaPorCodigo)

module.exports = rotas;

