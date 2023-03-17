const pool = require("../../models/db");

const getFollowing = async (req, res) => {
  try {
    let following = await pool.query(
      "select userdetails.userid,userdetails.fullname from userdetails where userdetails.userid in (select followingid from follow where followerid=$1)",
      [req.userid]
    );
    res.status(200).json({
      message: "following retreived successfully!",
      following: following.rows,
    });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving the following!" });
  }
};

module.exports = getFollowing;
