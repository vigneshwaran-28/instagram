const pool = require("../models/db");

const getEmoji = async (req, res) => {
  try {
    let emoji = await pool.query(
      "select emojicode from emoji"
    );
    res.status(200).json({
      message: "emoji retreived successfully!",
      emoji: emoji.rows,
    });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving emoji!" });
  }
};

module.exports = getEmoji;
