const express = require("express");
const routes = require("./routes/auth");
require("dotenv").config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(routes);
const port = process.env.PORT;
const server = app.listen(port);
module.exports = server;
