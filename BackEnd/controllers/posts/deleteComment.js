const pool = require("../../models/db");

const deleteComment = async (req, res) => {
  try {
    await pool.query("delete from comments where commentid=$1", [
      req.body.commentid,
    ]);
    res.status(200).json({ message: "comment deleted successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in deleting the comment!" });
  }
};

module.exports = deleteComment;
