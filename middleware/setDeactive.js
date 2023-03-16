const pool = require("../models/db");

const setDeActive = async (req, res) => {
  try {
    await pool.query(
      "update userdetails set activestatus=false where userid=$1",
      [req.userid]
    );
    res.status(200).json({ message: "user Active status Deactivated!" });
  } catch (error) {
    res.status(401).json({ message: "Error in deactivating status!" });
  }
};

module.exports = setDeActive;
