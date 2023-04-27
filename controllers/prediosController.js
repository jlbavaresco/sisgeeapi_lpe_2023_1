const { getPrediosDB, addPredioDB, updatePredioDB, deletePredioDB, 
    getPredioPorCodigoDB } = require('../useCases/prediosUseCases');

const getPredios = async (request, response) => {
    console.log("Usando o usuário que veio decodificado na requisição: " + 
    JSON.stringify(request.usuario))
    await getPrediosDB()
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
        status : 'error',
        message: 'Erro ao consultar o prédio: ' + err
    }))
}

const addPredio = async (request, response) => {
    await addPredioDB(request.body)
    .then(data => response.status(200).json({
        status : 'success', 
        message : 'Prédio criado com sucesso',
        objeto : data
    }))
    .catch(err => response.status(400).json({
        status : 'error',
        message:  err
    }))
}

const updatePredio = async (request, response) => {
    await updatePredioDB(request.body)
    .then(data => response.status(200).json({
        status : 'success', 
        message : 'Prédio atualizado com sucesso',
        objeto : data
    }))
    .catch(err => response.status(400).json({
        status : 'error',
        message:  err
    }))
}

const deletePredio = async (request, response) => {
    await deletePredioDB(parseInt(request.params.codigo))
    .then(data => response.status(200).json({
        status : 'success', 
        message : data
    }))
    .catch(err => response.status(400).json({
        status : 'error',
        message:  err
    }))
}

const getPredioPorCodigo = async (request, response) => {
    await getPredioPorCodigoDB(parseInt(request.params.codigo))
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
        status : 'error',
        message: err
    }))
}

module.exports = { getPredios, addPredio, updatePredio, 
    deletePredio, getPredioPorCodigo}
