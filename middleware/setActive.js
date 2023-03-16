const pool = require("../models/db");

const setActive = async (req, res) => {
  try {
    await pool.query("update userdetails set activestatus=true where userid=$1", [
      req.userid,
    ]);
    res.status(200).json({ message: "user status updated!" });
  } catch (error) {
    res.status(401).json({ message: "Error in updating status!" });
  }
};

module.exports = setActive;
