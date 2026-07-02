const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CidadeModel = sequelize.define(
  'Cidade',
  {
    codcidade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cidade: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    codibge: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
  },
  {
    tableName: 'cidade',
    timestamps: false,
  }
);

module.exports = CidadeModel;