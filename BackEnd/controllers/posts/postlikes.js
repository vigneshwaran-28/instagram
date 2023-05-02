const pool = require("../../models/db");

const likePost = async (req, res) => {
  const { postid, id } = req.body;
  try {
    await pool.query(
      "insert into likes(postid,likedid,userid) values($1,$2,$3)",
      [postid, id, req.userid]
    );

     let username = await pool.query(
       "select username from userdetails where userid=$1",
       [id]
     );
     let notifyContent = `${username.rows[0].username} liked your photo!`;

     await pool.query("insert into notification values($1,$2)", [
       req.userid,
       notifyContent,
     ]);

    res.status(200).json({ message: "post liked!" });
  } catch (error) {
    res.status(401).json({ message: "Error in liking the post!" });
  }
};

module.exports = likePost;
