const pool = require("../../models/db");

const profileInfo = async (req, res) => {
  try {
    let profileData = await pool.query(
      "select profile.photourl,profile.bio,userdetails.fullname,userdetails.username,(select count(followerid) followingCount from follow where followerid=$1),(select count(followingid) followersCount from follow where followingid=$1),(select count(userid) postcount from post where post.userid=$1) from profile inner join userdetails on profile.userid=$1 and userdetails.userid=$1",
      [req.userid]
    );

    let postUrl = await pool.query("select * from post where userid=$1", [
      req.userid,
    ]);

    let postid = await pool.query(
      "select postid from posttag where taggedid=$1",
      [req.userid]
    );
    // console.log(postid.rows);
    let q = "select * from post where "; // postid in ($1)
    for (let i = 1; i <= postid.rows.length; i++) {
      q += "postid=$" + i + (i == postid.rows.length ? "" : " or ");
    }
    // postid.map(a => a.postid).join(',')
    let post = [];
    for (let i = 0; i < postid.rows.length; i++) {
      post.push(postid.rows[i].postid);
    }
    let tagPost = await pool.query(q, [...post]);
    res
      .status(200)
      .json({
        message: profileData.rows,
        postUrl: postUrl.rows,
        taggedId: tagPost.rows,
      });
  } catch (error) {
    res.status(400).json({ message: "Invalid user data!" });
  }
};
  
module.exports = profileInfo;
