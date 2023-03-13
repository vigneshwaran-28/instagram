const pool = require("../../models/db");

const removeFromGroup = async (req, res) => {
  try {
    let { frndsId, groupId } = req.body;
    frndsId = frndsId.split(",");
    let getArr = await pool.query(
      "select groupmembers from groups where groupid=$1",
      [groupId]
    );
    let resArr = [];
    resArr.push(getArr.rows[0].groupmembers);
     resArr= resArr.filter((e) => !frndsId.includes(e));
    await pool.query("update groups set groupmembers=$1 where groupid=$2", [
      resArr,
      groupId,
    ]);
    res.status(200).json({ message: "Friends removed successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in adding the friend!" });
  }
};

module.exports = removeFromGroup;
