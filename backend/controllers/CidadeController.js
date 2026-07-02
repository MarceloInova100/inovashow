const CrudController = require('./CrudController');
const CidadeModel = require('../models/CidadeModel');

module.exports = new CrudController(
    CidadeModel,
    'codcidade'
);