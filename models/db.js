const { Pool } = require("pg");
const credentials = {
    user: "root",
    host: "localhost",
    database: "instagram",
    password: "Vignesh@2858",
    port: 5432,
};

const pool = new Pool(credentials);

module.exports=pool;
