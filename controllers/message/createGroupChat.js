const pool = require("../../models/db");

const createGroup = async (req, res) => {
  try {
    let { groupname } = req.body;
    await pool.query(
      "insert into groups(userid,groupname,time) values($1,$2,now())",
      [req.userid, groupname]
    );
    res.status(200).json({ message: "group created successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in creating the group!" });
  }
};
module.exports = createGroup;
