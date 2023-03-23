const pool = require("../../models/db");

const comments = async (req, res) => {
  try {
    const { postid, content, replyid, postuserid } = req.body;
    let mentionName = content.match(/@\w*/g);
    pool.query(
      "insert into comments(userid,postid,postuserid,content,replyid,time,mentionname) values($1,$2,$3,$4,$5,now(),$6)",
      [req.userid, postid, postuserid, content, replyid, mentionName]
    );
    res.status(200).json({ message: "comment added!" });
  } catch (error) {
    res.status(401).json({ message: "Error in adding comment!" });
  }
};

module.exports = comments;
