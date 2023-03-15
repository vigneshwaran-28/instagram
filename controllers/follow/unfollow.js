const pool = require("../../models/db");

let unfollow = async (req, res) => {
  let { followerId } = req.body;
  try {
    await pool.query("delete from follow where followerid=$1 and followingid=$2", [
        followerId,
        req.userid,
    ]);
    res.status(200).json({ message: "unfollowed successfully!" });
  } catch (error) {
    res.status(400).json({ message: "error while inserting data!" });
  }
};
module.exports = unfollow;
