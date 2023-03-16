const pool = require("../../models/db");

const storyViewers = async (req, res) => {
  try {
    let { userid,storyid } = req.body;
    await pool.query("insert into storyview(storyid,userid,time) values($1,$2,now())", [
      storyid,userid
    ]);
    res.status(200).json({ message: "Story views updated!" });
  } catch (error) {
    res.status(401).json({ message: "Error in updating story views!" });
  }
};

module.exports = storyViewers;
