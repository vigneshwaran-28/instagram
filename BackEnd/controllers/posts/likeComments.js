const pool = require("../../models/db");

const likeComment = async (req, res) => {
  try {
    await pool.query(
      "update comments set likes=likes+1 where userid=$1 and postid=$2 and commentid=$3",
      [req.userid, req.body.postid, req.body.commentid]
    );

     let username = await pool.query(
       "select username from userdetails where userid=$1",
       [req.body.likedid]
     );
     let notifyContent = `${username.rows[0].username} liked your comment!`;

     await pool.query("insert into notification values($1,$2)", [
       req.userid,
       notifyContent,
     ]);


    res.status(200).json({ message: "comment likes updated successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in liking the comment!" });
  }
};

module.exports = likeComment;
