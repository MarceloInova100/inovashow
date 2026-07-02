const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ExpositorModel = sequelize.define(
  'Expositor',
  {
    codexpositor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoria: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    tableName: 'expositor',
    timestamps: false,
  }
);

module.exports = ExpositorModel;