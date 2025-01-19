const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbSQL');

const User = sequelize.define('User', {

  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  email: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false 
  },

  password: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  
  createdAt: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  },

});

module.exports = User;