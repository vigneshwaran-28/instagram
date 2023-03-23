let pool = require("../../models/db");
const validateEmail = require("../../utils/validateEmail");
const validateMobNum = require("../../utils/validateMobNum");

let forgotPassword = async (req, res) => {
  let { firstdata } = req.body;
  let result = validateEmail(firstdata)
    ? "email"
    : validateMobNum(firstdata)
    ? "mobnum"
    : "username";
  try {
    let resultData = await pool.query(
      "select email from userdetails where " + result + "=$1",
      [firstdata]
    );
    if (resultData.rows[0]) res.status(200).json({ message: "valid user!" });
    else res.status(400).json({ message: "Invalid user!" });
  } catch (error) {
    res.status(400).json({ message: "Error!" });
  }
};

module.exports = forgotPassword;
