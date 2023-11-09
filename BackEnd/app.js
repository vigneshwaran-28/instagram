const express = require("express");
const routes = require("./routes/allRoutes");
require("dotenv").config({ path: "./.env" });
const pool = require("./models/db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/wa", (req, res) => {
  let { stops } = req.body;
  console.log(stops);
  res.send("dhd");
});

const port = process.env.PORT;
console.log("port", port);
const server = app.listen(port);
module.exports = server;
