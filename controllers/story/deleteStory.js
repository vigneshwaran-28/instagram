const pool = require("../../models/db");

const deleteStory = async (req, res) => {
  try {
    // console.log(req.userid, req.body.storyid);
    await pool.query("delete from archieve where userid=$1 and storyid=$2", [
      req.userid,
      req.body.storyid
    ]);
    res.status(200).json({ message: "Story deleted!" });
  } catch (error) {
    res.status(401).json({ message: "Error in deleting story!" });
  }
};

module.exports = deleteStory;
