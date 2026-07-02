const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PessoaModel = sequelize.define(
  'Pessoa',
  {
    codpessoa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    catvisitante: {
      type: DataTypes.STRING(50),
    },
    cidade: {
      type: DataTypes.STRING(100),
    },
    cod_tra: {
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
    },
    rg: {
      type: DataTypes.STRING(20),
    },
    datanascimento: {
      type: DataTypes.DATEONLY,
    },
    sexo: {
      type: DataTypes.STRING(1),
    },
    telefone: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(150),
    },
    estado: {
      type: DataTypes.STRING(2),
    },
    expositor: {
      type: DataTypes.STRING(150),
    },
    empresa: {
      type: DataTypes.STRING(150),
    },
    cargo: {
      type: DataTypes.STRING(100),
    },
    endereco: {
      type: DataTypes.STRING(200),
    },
    bairro: {
      type: DataTypes.STRING(100),
    },
    cep: {
      type: DataTypes.STRING(10),
    },
    codcidade: {
      type: DataTypes.INTEGER,
    },
    codestado: {
      type: DataTypes.INTEGER,
    },
    codpais: {
      type: DataTypes.INTEGER,
    },
    codvendedor: {
      type: DataTypes.INTEGER,
    },
    codexpositor: {
      type: DataTypes.INTEGER,
    },
    codcategoria: {
      type: DataTypes.INTEGER,
    },
    codsetor: {
      type: DataTypes.INTEGER,
    },
    situcliente: {
      type: DataTypes.STRING(20),
    },
  },
  {
    tableName: 'pessoa',
    timestamps: false,
  }
);

module.exports = PessoaModel;