const pool = require("../../models/db");

let follow = async (req, res) => {
  let { followerId } = req.body;
  try {
    await pool.query("insert into follow values($1,$2)", [
      followerId,
      req.userid,
    ]);
     let username = await pool.query(
       "select username from userdetails where userid=$1",
       [followerId]
     );
     let content = `${username.rows[0].username} started following you!`;
     

     await pool.query("insert into notification values($1,$2)", [
       req.userid,
       content,
     ]);
     
     res.status(200).json({ message: "followed successfully!" });
  } catch (error) {
    res.status(401).json({ message: "error while inserting data!" });
  }
};
module.exports = follow;
