const pool = require("../../models/db");

let follow = async (req, res) => {
  let { followingId } = req.body;
  try {
    await pool.query("insert into follow values($1,$2)", [
      req.userid,
      followingId,
    ]);
    res.status(200).json({ message: "followed successfully!" });

  } catch (error) {
    res.status(401).json({ message: "error while inserting data!" });
    
  }
   
};
module.exports = follow;
