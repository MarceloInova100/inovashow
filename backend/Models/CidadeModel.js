
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CidadeModel = sequelize.define(
  'Cidade',
  {
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },

    CIDADE: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    CODIBGE: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    DATAHORACAD: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    DATAHORAALT: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    DATAHORAREPLICA: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    TEMIK: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },

    BAYER: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },

    CODPAIS: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    DHALTERACAO: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    NOMEMESO: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    NOMEMICRO: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    CODFILIAL: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    CODUSUCAD: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    CODUSUALT: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    PLATAFORMAID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    CODTOMSERPRO: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: 'cidade',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = CidadeModel;