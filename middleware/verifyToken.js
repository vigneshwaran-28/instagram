const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });
const pool = require("../models/db");

let verifyToken = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRET,(err, output) => {
      if (err) {
        res.status(400).json({ message: "Invalid Token!" });
      } else {
            req.userid = output.userid;
            next();
        } 
      });
  } else {
    res.status(400).json({ message: "missing Token!" });
  }  
};

module.exports = verifyToken;
