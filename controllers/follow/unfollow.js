const pool = require("../../models/db");

let unfollow = async (req, res) => {
  let { unfollowingId } = req.body;
  let data = req.userid;
  try {
    let result = data.toString().replace(/\d/g, "");
 
    let userid = data;

    if (result) {
      userid = await pool.query(
        "select userid from userdetails where username=$1",
        [data]
      );
    }
    if(result)
    req.userid = userid.rows[0].userid;
    await pool.query("delete from follow where followerid=$1 and followingid=$2", [
        req.userid,
        unfollowingId
    ]);
    res.status(200).json({ message: "unfollowed successfully!" });
  } catch (error) {
    res.status(400).json({ message: "error while inserting data!" });
  }
};
module.exports = unfollow;
