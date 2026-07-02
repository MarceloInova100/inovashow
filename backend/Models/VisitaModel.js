const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VisitaModel = sequelize.define(
  'Visita',
  {
    Id_visita: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_visita: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Id_Pessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'visita',
    timestamps: false,
  }
);

module.exports = VisitaModel;