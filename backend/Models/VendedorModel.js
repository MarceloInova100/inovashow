const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VendedorModel = sequelize.define(
  'Vendedor',
  {
    Id_ctv: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: 'vendedor',
    timestamps: false,
  }
);

module.exports = VendedorModel;