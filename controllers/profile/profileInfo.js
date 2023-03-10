const pool = require("../../models/db");

const profileInfo = async (req, res) => {
  try {
    // console.log(req.userid);
    let profileData = await pool.query(
      "select profile.photourl,profile.bio,userdetails.fullname, (select count(followerid) followingCount from follow where followerid=$1),(select count(followingid) followersCount from follow where followingid=$1),(select count(userid) postcount from post where post.userid=$1),(select array_agg(url) as postUrl from post,unnest(urllink) as url where userid=$1) from profile inner join userdetails on profile.userid=$1 and userdetails.userid=$1",
      [req.userid]
    );
  //  console.log(profileData.rows.length);
    res.status(200).json({ message: profileData.rows });
  } catch (error) {
    res.status(400).json({ message: "Invalid user data!" });
  }
};

module.exports = profileInfo;
  