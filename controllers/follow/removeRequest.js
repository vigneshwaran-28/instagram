const pool = require("../../models/db");

const removeRequest = async (req, res) => {
  try {
    await pool.query(
      "delete from requesttable where userid=$1 and frndsid=$2",
      [req.userid, req.body.frndsid]
    );
    res.status(200).json({ message: "user removed from requestTable!" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error in removing the user from requestTable!" });
  }
};

module.exports = removeRequest;
