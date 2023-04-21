const { Sequelize } = require('sequelize');
require('dotenv').config();

// sequelize setup
// const sequelize = new Sequelize('sqlite::memory:
const db_name = process.env.DATABASE_NAME
const db_user = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const port = process.env.DATABASE_PORT
const host = process.env.DATABASE_HOST
//postgres setup
const sequelize = new Sequelize(db_name, db_user, password,
  {
    port,
    host,
    dialect: 'postgres',
    logging: true
  });
module.exports = sequelize






