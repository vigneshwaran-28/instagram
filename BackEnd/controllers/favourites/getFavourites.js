const pool = require("../../models/db");

const getFavourites = async (req, res) => {
  try {
    let favourites = await pool.query(
      "select userdetails.fullname from userdetails where userid in (select frndsid from favourites where userid=$1)",
      [req.userid]
    );
    res.status(200).json({
      message: "favourites retreived successfully!",
      favourites: favourites.rows,
    });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving the favourites!" });
  }
};

module.exports = getFavourites;
