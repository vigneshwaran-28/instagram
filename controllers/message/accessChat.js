const pool = require("../../models/db");

const accessChat = async (req, res) => {
  const { receiverid } = req.body;
  try {
    let resultData = await pool.query(
      "select userid,content from message where (userid=$1 and receiverid=$2) or (userid=$2 and receiverid=$1) order by time asc",
      [req.userid, receiverid]
    );
    res
      .status(200)
      .json({
        message: "message retreived successfully!",
        rowResult: resultData.rows,
      });
  } catch (error) {
    res.status(400).json({ message: "Error in sending message!" });
  }
};

module.exports = accessChat;
