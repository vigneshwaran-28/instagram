const pool = require("../../models/db");

const updateUsername = async (req, res) => {
  try {

    await pool.query("update userdetails set username=$1 where userid=$2", [
      req.body.username,
      req.userid,
    ]);
    await pool.query('insert into history(userid,username,time) values($1,$2,now())',[req.userid,req.body.username]);
    res.status(200).json({ message: "rename updated successfully!" });
  } catch (error) {
    res.status(400).json({ message: "error in updating rename!" });
  }
};
  
module.exports = updateUsername;
