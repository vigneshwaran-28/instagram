const pool = require("../../models/db");

const friendsRequest = async (req, res) => {
  try {
    await pool.query("insert into requesttable values($1,$2)", [
      req.userid,
      req.body.frndsid,
    ]);
    let username=await pool.query("select username from userdetails where userid=$1",[req.userid]);
    let content=`${username.rows[0].username} requested to follow you!`;
    await pool.query("insert into notification values($1,$2)",[req.userid,content]);
    res.status(200).json({ message: "request sent successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in sending request!" });
  }
};

module.exports = friendsRequest;
