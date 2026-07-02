const CrudController = require('./CrudController');
const PessoaModel = require('../models/PessoaModel');

module.exports = new CrudController(
    PessoaModel,
    'codpessoa'
);