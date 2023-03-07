const pool = require("../../models/db");
const bcrypt = require("bcrypt");
const validateEmail = require("../helperFunction/validateEmail");
const validateMobNum = require("../helperFunction/validateMobNum");
const createToken = require("../jwt/createToken");

let signin = async (req, res) => {
  const { firstdata, password } = req.body;
  let result = validateEmail(firstdata)
    ? "email"
    : validateMobNum(firstdata)
    ? "mobnum"
    : "username";
  try {
    let hashPass = await pool.query(
      "select password from userdetails where " + result + "=$1",
      [firstdata]
    );
    if (hashPass.rows[0]) {
      let status = await bcrypt.compare(password,hashPass.rows[0].password);
      if (status) {
        let userid = await pool.query(
          "select userid from userdetails where " + result + "=$1",
          [firstdata]
        );
        let token = createToken({userid:userid.rows[0].userid});
        await pool.query('update userdetails set token=$1 where '+ result + "=$2",
        [token,firstdata]);
        res.status(200).json({ message: "Authorized user!" });
      } else {
        res.status(400).json({ message: "Incorrect password!" });
      }
    } else {
      res.status(400).json({ message: "User does not exists!" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error found!" });
  }
};

module.exports = signin;
