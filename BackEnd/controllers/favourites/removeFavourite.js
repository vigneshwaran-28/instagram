const pool = require("../../models/db");

const removeFavourite = async (req, res) => {
  try {
    await pool.query("delete from favourites where userid=$1 and frndsid=$2", [
      req.userid,
      req.body.frndsid,
    ]);
    res.status(200).json({ message: "favouite friend removed!" });
  } catch (error) {
    res
      .status(401)
      .json({ message: "Error in removing the favourite friends!" });
  }
};

module.exports = removeFavourite;
