const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')


const Song = sequelize.define('song',
  {
    name:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileName:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    genre:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    artist:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    link:
    {
    type: DataTypes.STRING,
      allowNull: false
    },
    status:
    {
      type: DataTypes.STRING,
      allowNull: true
    }

  })

module.exports = Song

