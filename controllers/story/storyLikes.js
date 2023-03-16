const pool = require("../../models/db");

const storyLikes = async (req, res) => {
  try {
      let { storyId } = req.body;
      await pool.query("update archieve set likes=likes+1 where storyid=$1", [
        storyId,
      ]);
    res.status(200).json({ message: "Story Likes updated!" });
  } catch (error) {
    res.status(401).json({ message: "Error in updating likes!" });
  }
};

module.exports = storyLikes;
