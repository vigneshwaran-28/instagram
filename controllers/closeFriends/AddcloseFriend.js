const pool = require("../../models/db");

const addCloseFriends = async (req, res) => {
  try {
    await pool.query("insert into closefriends values($1,$2)", [
      req.userid,
      req.body.frndsid,
    ]);
    res.status(200).json({ message: "close friend added!" });
  } catch (error) {
    res.status(401).json({ message: "Error in adding the friends!" });
  }
};

module.exports = addCloseFriends;
