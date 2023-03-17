const pool = require("../../models/db");

const retreiveComment = async (req, res) => {
  try {
    let result = await pool.query(
      "select * from comments where userid=$1 and postid=$2 order by time desc",
      [req.userid, req.body.postid]
    );
    res
      .status(200)
      .json({
        message: "comment retreived successfully!",
        comments: result.rows,
      });
  } catch (error) {
    res.status(400).json({ message: "Erro =r in retreiving comments!" });
  }
};
module.exports = retreiveComment;
