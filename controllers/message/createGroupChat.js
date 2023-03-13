const pool = require("../../models/db");

const createGroup = async (req, res) => {
  try {
    let { groupname, groupmembers } = req.body;
    let arr=groupmembers.split(',');
    await pool.query(
      "insert into groups(userid,groupname,groupmembers,time) values($1,$2,$3,now())",
      [req.userid, groupname,arr]
    );
    res.status(200).json({ message: "group created successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in creating the group!" });
  }
};
module.exports = createGroup;
