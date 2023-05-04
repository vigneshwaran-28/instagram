const express = require("express");
const routes = require("./routes/allRoutes");
require("dotenv").config({ path: "./.env" });
const pool=require('./models/db');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const port = process.env.PORT;

console.log("vignesh",port);
const server = app.listen(port);
module.exports = server;
