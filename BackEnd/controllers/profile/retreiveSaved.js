const pool = require("../../models/db");

const retreiveSaved = async (req, res) => {
  try {
   let postid= await pool.query("select postid from savedpost where userid=$1", [
      req.userid,
    ]);
    let q = "select * from post where ";
    for (let i = 1; i <= postid.rows.length; i++) {
      q += "postid=$" + i + (i == postid.rows.length ? "" : " or ");
    }
    let post = [];
    for (let i = 0; i < postid.rows.length; i++) {
      post.push(postid.rows[i].postid);
    }
    let savedPost = await pool.query(q, [...post]);
   
    res.status(200).json({ savedPost:savedPost.rows });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving saved post!" });
  }
};

module.exports = retreiveSaved;
