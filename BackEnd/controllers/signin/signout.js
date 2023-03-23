const pool = require("../../models/db");

const signout = async (req, res) => {
  try {
    await pool.query("update userdetails set token=null where userid=$1", [
      req.userid,
    ]);
    res.status(200).json({ message: "user signed out!" });
  } catch (error) {
    res.status(401).json({ message: "Error in signing out!" });
  }
};

module.exports = signout;
