const pool = require("../../models/db");

const addFavourite = async (req, res) => {
  try {
    await pool.query("insert into favourites values($1,$2)", [
      req.userid,
      req.body.frndsid,
    ]);
    res.status(200).json({ message: "favourites added!" });
  } catch (error) {
    res.status(401).json({ message: "Error in adding favourites!" });
  }
};

module.exports = addFavourite;
