const pool = require("../../models/db");

const getPost = async (req, res) => {
  try {
    let post = await pool.query(
      "select * from post where userid in (select followingid from follow where followerid=$2 and followingid in (select followerid from follow where followingid=$2) union select followingid from follow where followerid=$2 and followingid in (select userid from userdetails where publictype=true)) order by time desc limit 10 offset $1",
      [req.body.offset, req.userid]
    );
    res
      .status(200)
      .json({ message: "post retreived successfully!", post: post.rows ,userid:req.userid });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving the post!"});
  }
};

module.exports = getPost;
