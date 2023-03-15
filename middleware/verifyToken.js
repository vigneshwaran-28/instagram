const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });
const pool = require("../models/db");

let verifyToken = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRET, async (err, output) => {
      if (err) {
        res.status(400).json({ message: "Invalid Token!" });
      } else {
        let data = output.userid;
        try {
          let result = data.toString().replace(/\d/g, "");
          if (result) {
            await pool.query(
              "select userid from userdetails where username=$1",
              [data],
              (error, tableOutput) => {
                if (error) {
                  res
                    .status(400)
                    .json({ message: "error while inserting data!" });
                } else {
                  req.userid = tableOutput.rows[0].userid;
                  next();
                }
              }
            );
          } else {
            req.userid = output.userid;
            next();
          }
        } catch (error) {
          res.status(400).json({ message: "error while inserting data!" });
        }
      }
    });
  } else {
    res.status(400).json({ message: "missing Token!" });
  }
};

module.exports = verifyToken;
