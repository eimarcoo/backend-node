const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/sequelize');

const table_options = {
  tableName: 'agenda'
};

const Agenda = sequelize.define('Agenda', {
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  rua: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING(9),
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING(255),
  },
});

module.exports = Agenda;