const pool = require("../../models/db");

const renameGroup = async (req, res) => {
  try {
    let { groupname, groupid } = req.body;
    await pool.query(
      "update groups set groupname=$2 where groupid=$1 and userid=$3",
      [groupid, groupname, req.userid]
    );
    res.status(200).json({ message: "Group name updated successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in renaming the group!" });
  }
};

module.exports = renameGroup;
