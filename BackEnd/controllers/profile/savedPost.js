const pool = require("../../models/db");

const savePost = async (req, res) => {
  try {
    const { postid } = req.body;
    await pool.query("insert into savedpost values($1,$2)", [
      postid,
      req.userid,
    ]);
    res.status(200).json({ message: "post saved!" });
  } catch (error) {
    res.status(400).json({ message: "Error in saving post!" });
  }
};

module.exports = savePost;
