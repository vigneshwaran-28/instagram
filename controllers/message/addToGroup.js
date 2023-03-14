const pool = require("../../models/db");

const addToGroup = async (req, res) => {
  try {
    let { frndsId, groupId } = req.body;
    frndsId = frndsId.split(",");
    let q = "values";
    for (let i = 1; i <= frndsId.length; i++) {
      q += "($1,$" + (i + 1) + ")" + (i != frndsId.length ? "," : "");
    }

    let finalArr = [];
    for (let i = 1; i <= frndsId.length; i++) {
      finalArr.push(frndsId[i - 1]);
    }
    let que = "insert into groupmembers(groupid,userid) " + q;
    await pool.query(que, [groupId, ...finalArr]);
    res.status(200).json({ message: "Friends added successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in adding the friend!" });
  }
};

module.exports = addToGroup;
