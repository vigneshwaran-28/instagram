const pool = require("../../models/db");

const fetchUserStory = async (req, res) => {
  try {
    let story = await pool.query(
      "select * from archieve where time>= now() - '1 day'::INTERVAL and userid =$1",
      [req.userid]
    );

    res.status(200).json({ message: "Story fetched!", story: story.rows });
  } catch (error) {
    res.status(401).json({ message: "Error in fetching story!" });
  }
};

module.exports = fetchUserStory;
