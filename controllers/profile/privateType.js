const pool = require("../../models/db");

const privatetype = async (req, res) => {
  try {
    await pool.query("update userdetails set publictype=false where userid=$1", [
      req.userid,
    ]);
    res.status(200).json({ message: "private type changed!" });
  } catch (error) {
    res.status(401).json({ message: "Error in changing private!" });
  }
};

module.exports = privatetype;
