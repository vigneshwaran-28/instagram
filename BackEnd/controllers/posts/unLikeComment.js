const pool = require("../../models/db");

const unLikeComment = async (req, res) => {
  try {
    await pool.query(
      "update comments set likes=likes-1 where userid=$1 and postid=$2 and commentid=$3",
      [req.userid, req.body.postid, req.body.commentid]
    );
    res.status(200).json({ message: "comment unlike updated successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in unliking the comment!" });
  }
};

module.exports = unLikeComment;
