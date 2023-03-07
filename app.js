const express = require("express");
const routes = require("./routes/auth");
require('dotenv').config({path:"./.env"});

const app = express();

app.use(express.json());
app.use(routes);
const port = process.env.PORT;
app.listen(port);  
