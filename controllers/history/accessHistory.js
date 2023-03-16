const pool = require("../../models/db");

const accessHistory = async (req, res) => {
  try {
    let history = await pool.query(
      "select * from history where userid=$1",
      [req.userid]
    );
    res.status(200).json({
      message: "history retreived successfully!",
      history: history.rows,
    });
  } catch (error) {
    res.status(400).json({ message: "Error in retreiving the history!" });
  }
};

module.exports = accessHistory;
