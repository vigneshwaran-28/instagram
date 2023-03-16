const pool = require("../../models/db");

const getMusic = async (req, res) => {
  try {
    let resultData = await pool.query(
      "select musiclink from music where musicid=$1",
      [req.body.musicId]
    );
    res
      .status(200)
      .json({
        message: "music retreived successfully!",
        music: resultData.rows,
      });
  } catch (error) {
    res.status(400).json({ message: "Error in sending music!" });
  }
};

module.exports = getMusic;
