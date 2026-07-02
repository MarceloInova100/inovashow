const CrudController = require('./CrudController');
const ExpositorModel = require('../models/ExpositorModel');

module.exports = new CrudController(
    ExpositorModel,
    'codexpositor'
);