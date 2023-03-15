const pool = require("../../models/db");

const getFollowers = async (req, res) => {
  try {
    let followers = await pool.query(
      "select userdetails.userid,userdetails.fullname from userdetails where userdetails.userid in (select followerid from follow where followingid=$1)",
      [req.userid]
    );
    res
      .status(200)
      .json({ message: "followers retreived successfully!", followers:followers.rows });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving the followers!" });
  }
};

module.exports = getFollowers;
