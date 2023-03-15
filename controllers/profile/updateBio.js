const pool = require("../../models/db");

const updateBio = async (req, res) => {
  try {
    const  {bio}  = req.body;
    await pool.query("update profile set bio=$1 where userid=$2", [
      bio,
      req.userid,
    ]);
    await pool.query(
      "insert into history(userid,bio,time) values($1,$2,now())",
      [req.userid, bio]
    );

    res.status(200).json({ message: "bio updated successfully!" });
  } catch (error) {
    res.status(400).json({ message: "error in updating bio!" });
  }
};

module.exports = updateBio;
