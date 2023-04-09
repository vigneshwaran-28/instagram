
const { Pool } = require("pg");
  require("dotenv").config("../.env");

const { user, host, db, password, db_port } =process.env;
const credentials = {
  user: user,
  host: host,
  database: db,
  password: password,
  port: db_port,
}; 

const pool = new Pool(credentials);

module.exports = pool;
