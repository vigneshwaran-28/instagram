let pool = require("../../models/db");
const validateEmail = require("../helperFunction/validateEmail");
const validateMobNum = require("../helperFunction/validateMobNum");

let forgotPassword = async (req, res) => {
  let { data } = req.body;
  let result = validateEmail(firstdata)
    ? "email"
    : validateMobNum(firstdata)
    ? "mobnum"
    : "username";
  try {
    let result = await pool.query(
      "select email from userdetails where " + result + "=$1",
      [data]
    );
    if (result.rows[0]) res.status(200).json({ message: "valid user!" });
    else res.status(400).json({ message: "Invalid user!" });
  } catch (error) {
    res.status(400).json({ message: "Error!" });
  }
};

module.exports = forgotPassword;
