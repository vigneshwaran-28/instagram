const pool = require("../../models/db");

const getPost = async (req, res) => {
  try {
    let post = await pool.query(
      "select urllink,caption,music,tags,time,hashtagContent from post where userid=$1",
      [req.userid]
    );
    res
      .status(200)
      .json({ message: "Post retreived successfully!", post: post.rows });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving the post!" });
  }
};

module.exports = getPost;
