const pool = require("../../models/db");

const getCloseFriends = async (req, res) => {
  try {
    let favourites = await pool.query(
      "select userdetails.fullname from userdetails where userid in (select frndsid from closefriends where userid=$1)",
      [req.userid]
    );
    res.status(200).json({
      message: "close Friends retreived successfully!",
      favourites: favourites.rows,
    });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving the close Friends!" });
  }
};

module.exports = getCloseFriends;
