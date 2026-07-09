const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VendedorModel = sequelize.define(
  'Vendedor',
  {
    CODCLIFOR: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    NOME: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    CGCCPF: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    EFORNECED: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },

    FORNECEDOR_ATIVO: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },

    ENDERECO: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },

    BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    CODCIDADE: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },

    TELEFONE: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    CELULAR: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    EMAIL: {
      type: DataTypes.STRING(150),
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },

    NOMEFANTASIA: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },

    COMPL: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    LOGRADOURO: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: 'vendedor',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = VendedorModel;