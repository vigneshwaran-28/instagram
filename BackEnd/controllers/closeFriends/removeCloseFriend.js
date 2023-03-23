const pool = require("../../models/db");

const removeCloseFriend = async (req, res) => {
  try {
    await pool.query(
      "delete from closefriends where userid=$1 and frndsid=$2",
      [req.userid, req.body.frndsid]
    );
    res.status(200).json({ message: "close friend removed!" });
  } catch (error) {
    res.status(401).json({ message: "Error in removing the friends!" });
  }
};

module.exports = removeCloseFriend;
