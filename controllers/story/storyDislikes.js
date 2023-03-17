const pool = require("../../models/db");

const storyDisLikes = async (req, res) => {
  try {
    let { storyId } = req.body;
    await pool.query("update archieve set likes=likes-1 where storyid=$1", [
      storyId,
    ]);
    res.status(200).json({ message: "Story unLikes updated!" });
  } catch (error) {
    res.status(401).json({ message: "Error in updating unlikes!" });
  }
};

module.exports = storyDisLikes;
