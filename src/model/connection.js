const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

dotenv.config();

module.exports = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});
