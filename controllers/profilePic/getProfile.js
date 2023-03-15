const pool = require("../../models/db");

const getProfile = async (req, res) => {
  try {
   let photoUrl= await pool.query("select photourl from profile where userid=$1", [
      req.userid,
    ]);
    res.status(200).json({ message: "profile photo retreived successfully!" ,photoUrl:photoUrl.rows});
  } catch (error) {
    res.status(400).json({ message: "Error in retrieving the profile photo!" });
  }
};

module.exports = getProfile;
