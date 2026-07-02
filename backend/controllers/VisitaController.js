const CrudController = require('./CrudController');
const VisitaModel = require('../models/VisitaModel');

module.exports = new CrudController(
    VisitaModel,
    'Id_visita'
);