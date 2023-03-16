const pool = require("../../models/db");

const getStory = async (req, res) => {
  try {
    let story = await pool.query(
      "select * from archieve where time>= now() - '1 day'::INTERVAL and userid in (select followingid from follow where followerid=$1 and followingid in (select followerid from follow where followingid=$1)) order by time desc limit 10 offset $2",
      [req.userid,req.body.offset]
    );
    res.status(200).json({ message: "Story fetched!" ,story:story.rows});
  } catch (error) {
    res.status(401).json({ message: "Error in fetching story!" });
  }
};

module.exports = getStory;
