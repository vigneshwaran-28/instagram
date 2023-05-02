const pool = require("../../models/db");

const storyLikes = async (req, res) => {
  try {
    let { storyId,likedid } = req.body;
    await pool.query("update archieve set likes=likes+1 where storyid=$1", [
      storyId,
    ]);

    let username = await pool.query(
      "select username from userdetails where userid=$1",
      [likedid]
    );
    let notifyContent = `${username.rows[0].username} liked your story!`;

    await pool.query("insert into notification values($1,$2)", [
      req.userid,
      notifyContent,
    ]);

    res.status(200).json({ message: "Story Likes updated!" });
  } catch (error) {
    res.status(401).json({ message: "Error in updating likes!" });
  }
};

module.exports = storyLikes;
