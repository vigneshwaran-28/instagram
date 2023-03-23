const pool = require("../../models/db");

const friendsRequest = async (req, res) => {
  try {
    await pool.query("insert into requesttable values($1,$2)", [
      req.userid,
      req.body.frndsid,
    ]);
    res.status(200).json({ message: "request sent successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error in sending request!" });
  }
};

module.exports = friendsRequest;
