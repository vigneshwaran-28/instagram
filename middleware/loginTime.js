const pool = require("../models/db");

const loginTime = async (req, res) => {
  try {
    await pool.query(
      "update userdetails set loginTime=now() where userid=$1",
      [req.userid]
    );
    res.status(200).json({ message: "user login Time updated!" });
  } catch (error) {
    res.status(401).json({ message: "Error in updating login time!" });
  }
};

module.exports = loginTime;
