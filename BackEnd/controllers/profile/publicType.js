const pool = require("../../models/db");

const publictype = async (req, res) => {
  try {
    await pool.query("update userdetails set publictype=true where userid=$1", [
      req.userid,
    ]);
    res.status(200).json({ message: "public type changed!" });
  } catch (error) {
    res.status(401).json({ message: "Error in changing public!" });
  }
};

module.exports = publictype;
