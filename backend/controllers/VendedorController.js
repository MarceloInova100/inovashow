const CrudController = require('./CrudController');
const VendedorModel = require('../models/VendedorModel');

module.exports = new CrudController(
    VendedorModel,
    'Id_ctv'
);